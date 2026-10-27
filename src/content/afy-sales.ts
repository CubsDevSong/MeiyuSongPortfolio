export type AfySalesPoint = {
  month: string
  monthZh: string
  shortLabel: string
  shortLabelZh: string
  value: number
}

export const afyMonthlySales: AfySalesPoint[] = [
  { month: "September 2023", monthZh: "2023 年 9 月", shortLabel: "Sep 23", shortLabelZh: "23/09", value: 58_500 },
  { month: "October 2023", monthZh: "2023 年 10 月", shortLabel: "Oct 23", shortLabelZh: "23/10", value: 107_824 },
  { month: "November 2023", monthZh: "2023 年 11 月", shortLabel: "Nov 23", shortLabelZh: "23/11", value: 163_930 },
  { month: "December 2023", monthZh: "2023 年 12 月", shortLabel: "Dec 23", shortLabelZh: "23/12", value: 229_709 },
  { month: "January 2024", monthZh: "2024 年 1 月", shortLabel: "Jan 24", shortLabelZh: "24/01", value: 336_626 },
  { month: "February 2024", monthZh: "2024 年 2 月", shortLabel: "Feb 24", shortLabelZh: "24/02", value: 89_928 },
  { month: "March 2024", monthZh: "2024 年 3 月", shortLabel: "Mar 24", shortLabelZh: "24/03", value: 375_071 },
  { month: "April 2024", monthZh: "2024 年 4 月", shortLabel: "Apr 24", shortLabelZh: "24/04", value: 439_012 },
  { month: "May 2024", monthZh: "2024 年 5 月", shortLabel: "May 24", shortLabelZh: "24/05", value: 163_010 },
  { month: "June 2024", monthZh: "2024 年 6 月", shortLabel: "Jun 24", shortLabelZh: "24/06", value: 377_996 },
  { month: "July 2024", monthZh: "2024 年 7 月", shortLabel: "Jul 24", shortLabelZh: "24/07", value: 171_082 },
  { month: "August 2024", monthZh: "2024 年 8 月", shortLabel: "Aug 24", shortLabelZh: "24/08", value: 79_000 },
]

export const afySalesSummary = (() => {
  const total = afyMonthlySales.reduce((sum, point) => sum + point.value, 0)
  const peak = afyMonthlySales.reduce((highest, point) =>
    point.value > highest.value ? point : highest,
  )

  return {
    total,
    average: Math.round(total / afyMonthlySales.length),
    peak,
  }
})()

