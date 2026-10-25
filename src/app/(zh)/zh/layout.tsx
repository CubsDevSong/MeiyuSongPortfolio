import { RootLayoutShell } from "../../root-layout-shell"
import "../../globals.css"

export default function ChineseRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayoutShell lang="zh-CN">{children}</RootLayoutShell>
}
