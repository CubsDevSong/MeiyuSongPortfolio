"use client"

import { useId, useState } from "react"
import { afyMonthlySales, afySalesSummary } from "@/content/afy-sales"
import type { Locale } from "@/content/focused-portfolio"
import styles from "./afy-sales-chart.module.css"

type ChartCopy = {
  title: string
  subtitle: string
  total: string
  average: string
  peak: string
  peakLabel: string
  currency: string
  source: string
  story: string
}

type Point = { x: number; y: number }

const chart = {
  width: 960,
  height: 410,
  left: 66,
  right: 24,
  top: 36,
  bottom: 318,
  max: 500_000,
}

function makeSmoothPath(points: Point[]) {
  if (points.length < 2) return ""

  const slopes = points.slice(0, -1).map((point, index) => {
    const next = points[index + 1]
    return (next.y - point.y) / (next.x - point.x)
  })
  const tangents = points.map((_, index) => {
    if (index === 0) return slopes[0]
    if (index === points.length - 1) return slopes[slopes.length - 1]
    const before = slopes[index - 1]
    const after = slopes[index]
    if (before === 0 || after === 0 || Math.sign(before) !== Math.sign(after)) {
      return 0
    }
    return (2 * before * after) / (before + after)
  })

  return points.slice(0, -1).reduce((path, point, index) => {
    const next = points[index + 1]
    const width = next.x - point.x
    const controlOneX = point.x + width / 3
    const controlOneY = point.y + (tangents[index] * width) / 3
    const controlTwoX = next.x - width / 3
    const controlTwoY = next.y - (tangents[index + 1] * width) / 3
    return `${path} C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${next.x} ${next.y}`
  }, `M ${points[0].x} ${points[0].y}`)
}

export function AfySalesChart({ locale, copy }: { locale: Locale; copy: ChartCopy }) {
  const peakIndex = afyMonthlySales.findIndex(
    (point) => point.month === afySalesSummary.peak.month,
  )
  const [activeIndex, setActiveIndex] = useState(peakIndex)
  const gradientId = useId().replace(/:/g, "")
  const numberFormat = new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-IE")
  const compactFormat = new Intl.NumberFormat(locale === "zh" ? "zh-CN" : "en-IE", {
    notation: "compact",
    maximumFractionDigits: 0,
  })
  const plotWidth = chart.width - chart.left - chart.right
  const plotHeight = chart.bottom - chart.top
  const points = afyMonthlySales.map((point, index) => ({
    x: chart.left + (index / (afyMonthlySales.length - 1)) * plotWidth,
    y: chart.bottom - (point.value / chart.max) * plotHeight,
  }))
  const linePath = makeSmoothPath(points)
  const areaPath = `${linePath} L ${points.at(-1)?.x} ${chart.bottom} L ${points[0].x} ${chart.bottom} Z`
  const averageY = chart.bottom - (afySalesSummary.average / chart.max) * plotHeight
  const activePoint = points[activeIndex]
  const activeDatum = afyMonthlySales[activeIndex]
  const tooltipX = Math.min(Math.max(activePoint.x - 82, chart.left), chart.width - 180)
  const tooltipY = Math.max(activePoint.y - 76, 8)

  const formatCurrency = (value: number) => `¥${numberFormat.format(value)}`

  return (
    <figure className={styles.chartCard} aria-labelledby="afy-chart-title">
      <div className={styles.chartHeader}>
        <div>
          <p className={styles.kicker}>AFY Education Technology</p>
          <h3 id="afy-chart-title">{copy.title}</h3>
          <p>{copy.subtitle}</p>
        </div>
        <span className={styles.dataStatus}>{locale === "zh" ? "原始月度记录" : "Original monthly record"}</span>
      </div>

      <div className={styles.kpis}>
        <div>
          <span>{copy.total}</span>
          <strong>{formatCurrency(afySalesSummary.total)}</strong>
        </div>
        <div>
          <span>{copy.average}</span>
          <strong>{formatCurrency(afySalesSummary.average)}</strong>
        </div>
        <div>
          <span>{copy.peak}</span>
          <strong>{formatCurrency(afySalesSummary.peak.value)}</strong>
          <small>{locale === "zh" ? afySalesSummary.peak.monthZh : afySalesSummary.peak.month}</small>
        </div>
      </div>

      <div className={styles.chartScroller}>
        <svg
          className={styles.chart}
          viewBox={`0 0 ${chart.width} ${chart.height}`}
          role="img"
          aria-label={`${copy.title}. ${copy.total}: ${formatCurrency(afySalesSummary.total)}. ${copy.peak}: ${formatCurrency(afySalesSummary.peak.value)}.`}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#efa8a0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#efa8a0" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 250_000, 500_000].map((value) => {
            const y = chart.bottom - (value / chart.max) * plotHeight
            return (
              <g key={value} className={styles.gridLine}>
                <line x1={chart.left} x2={chart.width - chart.right} y1={y} y2={y} />
                <text x={chart.left - 13} y={y + 4} textAnchor="end">
                  {value === 0 ? "0" : compactFormat.format(value)}
                </text>
              </g>
            )
          })}

          <line
            className={styles.averageLine}
            x1={chart.left}
            x2={chart.width - chart.right}
            y1={averageY}
            y2={averageY}
          />
          <text className={styles.averageLabel} x={chart.left + 8} y={averageY - 9}>
            {copy.average}: {formatCurrency(afySalesSummary.average)}
          </text>

          <path className={styles.area} d={areaPath} fill={`url(#${gradientId})`} />
          <path className={styles.line} d={linePath} />

          {points.map((point, index) => {
            const datum = afyMonthlySales[index]
            const isPeak = index === peakIndex
            const isActive = index === activeIndex
            return (
              <g key={datum.month}>
                <circle
                  className={styles.hitArea}
                  cx={point.x}
                  cy={point.y}
                  r="18"
                  tabIndex={0}
                  role="button"
                  aria-label={`${locale === "zh" ? datum.monthZh : datum.month}: ${formatCurrency(datum.value)}`}
                  onPointerEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault()
                      setActiveIndex(index)
                    }
                  }}
                />
                <circle
                  className={`${styles.point} ${isPeak ? styles.peakPoint : ""} ${isActive ? styles.activePoint : ""}`}
                  cx={point.x}
                  cy={point.y}
                  r={isPeak ? 7 : 5}
                  aria-hidden="true"
                />
                <text className={`${styles.monthLabel} ${index % 2 !== 0 ? styles.optionalMonth : ""}`} x={point.x} y="351" textAnchor="middle">
                  {locale === "zh" ? datum.shortLabelZh : datum.shortLabel}
                </text>
              </g>
            )
          })}

          <g className={styles.tooltip} aria-hidden="true">
            <rect x={tooltipX} y={tooltipY} width="164" height="58" rx="8" />
            <text x={tooltipX + 13} y={tooltipY + 23} className={styles.tooltipMonth}>
              {locale === "zh" ? activeDatum.monthZh : activeDatum.month}
            </text>
            <text x={tooltipX + 13} y={tooltipY + 44} className={styles.tooltipValue}>
              {formatCurrency(activeDatum.value)}
              {activeIndex === peakIndex ? ` · ${copy.peakLabel}` : ""}
            </text>
          </g>
        </svg>
      </div>

      <table className={styles.srTable}>
        <caption>{copy.title}</caption>
        <thead><tr><th>{locale === "zh" ? "月份" : "Month"}</th><th>{locale === "zh" ? "销售额" : "Sales"}</th></tr></thead>
        <tbody>
          {afyMonthlySales.map((point) => (
            <tr key={point.month}><th>{locale === "zh" ? point.monthZh : point.month}</th><td>{formatCurrency(point.value)}</td></tr>
          ))}
        </tbody>
      </table>

      <figcaption className={styles.caption}>
        <p>{copy.story}</p>
        <span>{copy.source}</span>
      </figcaption>
    </figure>
  )
}

