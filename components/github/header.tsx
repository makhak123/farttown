"use client"

import { Search, Plus, Bell, ChevronDown } from "lucide-react"

export function GitHubHeader() {
  return (
    <header className="bg-[#010409] border-b border-[#30363d] px-4 py-3">
      <div className="max-w-[1280px] mx-auto flex items-center gap-4">
        {/* GitHub Logo */}
        <a href="#" className="text-white hover:text-[#e6edf3]">
          <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
        </a>

        {/* Product dropdown */}
        <button className="flex items-center gap-1 text-sm font-semibold text-white hover:text-[#e6edf3]">
          Product
          <ChevronDown className="w-4 h-4 text-[#7d8590]" />
        </button>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="flex items-center gap-2 bg-[#0d1117] border border-[#30363d] rounded-md px-3 py-1.5">
            <Search className="w-4 h-4 text-[#7d8590]" />
            <span className="text-sm text-[#7d8590]">Type / to search</span>
            <div className="ml-auto flex items-center gap-1 border border-[#30363d] rounded px-1.5 text-xs text-[#7d8590]">
              /
            </div>
          </div>
        </div>

        {/* Right nav */}
        <nav className="flex items-center gap-4">
          <a href="#" className="text-sm text-white hover:text-[#e6edf3]">
            Solutions
          </a>
          <a href="#" className="text-sm text-white hover:text-[#e6edf3]">
            Resources
          </a>
          <a href="#" className="text-sm text-white hover:text-[#e6edf3]">
            Open Source
          </a>
          <a href="#" className="text-sm text-white hover:text-[#e6edf3]">
            Enterprise
          </a>
          <a href="#" className="text-sm text-white hover:text-[#e6edf3]">
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3 ml-4 border-l border-[#30363d] pl-4">
          <Bell className="w-5 h-5 text-white hover:text-[#e6edf3] cursor-pointer" />
          <button className="flex items-center gap-1 text-white hover:text-[#e6edf3]">
            <Plus className="w-5 h-5" />
            <ChevronDown className="w-3 h-3" />
          </button>
          <img src="/ferret-avatar-steampunk.jpg" alt="User" className="w-8 h-8 rounded-full border border-[#30363d]" />
        </div>
      </div>
    </header>
  )
}
