import { RootLayoutShell } from "../root-layout-shell"
import "../globals.css"

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <RootLayoutShell lang="en">{children}</RootLayoutShell>
}
