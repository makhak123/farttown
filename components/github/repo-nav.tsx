"use client"

import { Code2, CircleDot, GitPullRequest, Play, Shield, BarChart3, Settings, BookOpen } from "lucide-react"

interface RepoNavProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const tabs = [
  { id: "code", label: "Code", icon: Code2 },
  { id: "issues", label: "Issues", icon: CircleDot, count: 69 },
  { id: "prs", label: "Pull requests", icon: GitPullRequest, count: 13 },
  { id: "actions", label: "Actions", icon: Play },
  { id: "projects", label: "Projects", icon: BookOpen },
  { id: "security", label: "Security", icon: Shield },
  { id: "insights", label: "Insights", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
]

export function RepoNav({ activeTab, setActiveTab }: RepoNavProps) {
  return (
    <nav className="bg-[#0d1117] border-b border-[#30363d] px-4 overflow-x-auto">
      <div className="max-w-[1280px] mx-auto">
        <ul className="flex items-center gap-0 -mb-px">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#f78166] text-white font-semibold"
                    : "border-transparent text-[#7d8590] hover:text-[#e6edf3]"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {tab.count && (
                  <span className="px-1.5 py-0.5 text-xs rounded-full bg-[#30363d] text-[#e6edf3]">{tab.count}</span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
