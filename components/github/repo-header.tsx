"use client"

import { BookOpen, Star, GitFork, Eye, ChevronDown } from "lucide-react"

export function RepoHeader() {
  return (
    <div className="bg-[#0d1117] border-b border-[#30363d] px-4 py-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#7d8590]" />
            <a
              href="https://github.com/makhak123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline text-xl font-semibold"
            >
              makhak123
            </a>
            <span className="text-[#7d8590] text-xl">/</span>
            <a
              href="https://github.com/makhak123/farttown"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#58a6ff] hover:underline text-xl font-semibold"
            >
              farttown
            </a>
            <span className="text-xs px-1.5 py-0.5 rounded-full border border-[#30363d] text-[#7d8590] ml-2">
              Public
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Sponsor */}
            <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
              <svg className="w-4 h-4 text-[#db61a2]" viewBox="0 0 16 16" fill="currentColor">
                <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z" />
              </svg>
              Sponsor
            </button>

            {/* Watch */}
            <div className="flex items-center">
              <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-l-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
                <Eye className="w-4 h-4" />
                Watch
                <ChevronDown className="w-3 h-3" />
              </button>
              <span className="px-2 py-1 text-sm border-y border-r border-[#30363d] rounded-r-md bg-[#21262d] text-[#c9d1d9]">
                247
              </span>
            </div>

            {/* Fork */}
            <div className="flex items-center">
              <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-l-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
                <GitFork className="w-4 h-4" />
                Fork
                <ChevronDown className="w-3 h-3" />
              </button>
              <span className="px-2 py-1 text-sm border-y border-r border-[#30363d] rounded-r-md bg-[#21262d] text-[#c9d1d9]">
                420
              </span>
            </div>

            {/* Star */}
            <div className="flex items-center">
              <button className="flex items-center gap-1.5 px-3 py-1 text-sm font-medium border border-[#30363d] rounded-l-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
                <Star className="w-4 h-4" />
                Star
                <ChevronDown className="w-3 h-3" />
              </button>
              <span className="px-2 py-1 text-sm border-y border-r border-[#30363d] rounded-r-md bg-[#21262d] text-[#c9d1d9]">
                6.9k
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
