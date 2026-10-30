import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs"
import path from "node:path"

const root = process.cwd()
const staticExportDir = path.join(root, "out")
const vercelOutputDir = path.join(root, ".vercel", "output")
const vercelStaticDir = path.join(vercelOutputDir, "static")

if (!existsSync(staticExportDir)) {
  throw new Error("Static export directory 'out' was not created by next build.")
}

rmSync(vercelOutputDir, { force: true, recursive: true })
mkdirSync(vercelStaticDir, { recursive: true })
cpSync(staticExportDir, vercelStaticDir, { recursive: true })

// Next.js exports /zh as zh.html; Vercel needs an explicit clean-URL route.
const pageRoutes = readdirSync(staticExportDir, { recursive: true })
  .filter((file) => file.endsWith(".html") && !["index.html", "404.html", "_not-found.html"].includes(file))
  .sort()
  .map((file) => {
    const pathname = file.slice(0, -".html".length).split(path.sep).join("/")
    const escapedPathname = pathname.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    return { src: `^/${escapedPathname}/?$`, dest: `/${pathname}.html` }
  })

writeFileSync(
  path.join(vercelOutputDir, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { src: "^/$", dest: "/index.html" },
        { handle: "filesystem" },
        ...pageRoutes,
        { src: "^/.*$", status: 404, dest: "/404.html" },
      ],
    },
    null,
    2
  )
)
