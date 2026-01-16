"use client"

import { GitBranch, ChevronDown, Tag, Clock, Code2, Plus, FileText, Folder } from "lucide-react"

const files = [
  { type: "folder", name: ".farttown", message: "feat: add convoy status tracking", time: "2 days ago" },
  { type: "folder", name: ".github", message: "ci: add stinkiness linting workflow", time: "5 days ago" },
  { type: "folder", name: "app", message: "feat: implement MEOW stack visualization", time: "3 hours ago" },
  { type: "folder", name: "components", message: "refactor: extract refinery components", time: "3 hours ago" },
  { type: "folder", name: "docs", message: "docs: add polecat deployment guide", time: "1 day ago" },
  { type: "folder", name: "lib", message: "feat: add molecular workflow engine", time: "6 hours ago" },
  { type: "folder", name: "public", message: "chore: add ferret mascot images", time: "4 days ago" },
  { type: "folder", name: "scripts", message: "feat: add witness patrol scripts", time: "12 hours ago" },
  { type: "file", name: ".env.example", message: "chore: document refinery env vars", time: "3 days ago" },
  { type: "file", name: ".gitignore", message: "chore: ignore gas emissions logs", time: "2 weeks ago" },
  { type: "file", name: "LICENSE", message: "docs: add WTFPL license", time: "2 weeks ago" },
  { type: "file", name: "README.md", message: "docs: welcome to fart town", time: "3 hours ago" },
  { type: "file", name: "next.config.mjs", message: "feat: enable turbopack for max gas", time: "1 day ago" },
  { type: "file", name: "package.json", message: "chore: bump dependencies", time: "8 hours ago" },
  { type: "file", name: "tailwind.config.ts", message: "style: add toxic green color palette", time: "4 days ago" },
  { type: "file", name: "tsconfig.json", message: "chore: strict mode for polecats", time: "1 week ago" },
]

export function FileExplorer() {
  return (
    <div className="border border-[#30363d] rounded-md overflow-hidden mb-4">
      {/* Branch selector row */}
      <div className="flex items-center justify-between p-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
            <GitBranch className="w-4 h-4" />
            main
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1 text-sm border border-[#30363d] rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
            <GitBranch className="w-4 h-4" />
            <span className="font-semibold">42</span> branches
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1 text-sm border border-[#30363d] rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
            <Tag className="w-4 h-4" />
            <span className="font-semibold">17</span> tags
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1 text-sm border border-[#30363d] rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
            Go to file
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-md bg-[#238636] hover:bg-[#2ea043] text-white">
            <Plus className="w-4 h-4" />
            Add file
            <ChevronDown className="w-3 h-3" />
          </button>
          <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-md bg-[#238636] hover:bg-[#2ea043] text-white">
            <Code2 className="w-4 h-4" />
            Code
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Latest commit info */}
      <div className="flex items-center justify-between p-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-3">
          <img src="/steampunk-ferret-avatar.jpg" alt="Commit author" className="w-6 h-6 rounded-full" />
          <span className="text-sm font-semibold text-[#e6edf3]">chief-polecat</span>
          <a href="#" className="text-sm text-[#7d8590] hover:text-[#58a6ff] hover:underline">
            feat: welcome to fart town - initial release
          </a>
        </div>
        <div className="flex items-center gap-3 text-sm text-[#7d8590]">
          <a href="#" className="font-mono text-[#58a6ff] hover:underline">
            a420f69
          </a>
          <span>3 hours ago</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="font-semibold text-[#e6edf3]">2,069</span> commits
          </div>
        </div>
      </div>

      {/* File list */}
      <div className="divide-y divide-[#21262d]">
        {files.map((file) => (
          <div key={file.name} className="flex items-center justify-between px-4 py-2 hover:bg-[#161b22] group">
            <div className="flex items-center gap-3 min-w-0">
              {file.type === "folder" ? (
                <Folder className="w-4 h-4 text-[#58a6ff] flex-shrink-0" />
              ) : (
                <FileText className="w-4 h-4 text-[#7d8590] flex-shrink-0" />
              )}
              <a href="#" className="text-sm text-[#e6edf3] hover:text-[#58a6ff] hover:underline truncate">
                {file.name}
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#7d8590] flex-shrink-0">
              <a href="#" className="hover:text-[#58a6ff] hover:underline truncate max-w-[300px] hidden md:block">
                {file.message}
              </a>
              <span className="w-20 text-right">{file.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
