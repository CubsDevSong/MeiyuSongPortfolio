import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs"
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

writeFileSync(
  path.join(vercelOutputDir, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { src: "^/$", dest: "/index.html" },
        { handle: "filesystem" },
        { src: "^/.*$", status: 404, dest: "/404.html" },
      ],
    },
    null,
    2
  )
)
