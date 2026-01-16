"use client"

import { useState } from "react"
import { GitHubHeader } from "./header"
import { RepoHeader } from "./repo-header"
import { RepoNav } from "./repo-nav"
import { FileExplorer } from "./file-explorer"
import { ReadmeSection } from "./readme"
import { RepoSidebar } from "./sidebar"

export function GitHubRepoPage() {
  const [activeTab, setActiveTab] = useState("code")

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <GitHubHeader />
      <RepoHeader />
      <RepoNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-[1280px] mx-auto px-4 py-4">
        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <FileExplorer />
            <ReadmeSection />
          </div>
          <RepoSidebar />
        </div>
      </main>
    </div>
  )
}
