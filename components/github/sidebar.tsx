"use client"

import { Link, Tag, BookOpen, Scale, Star, Eye, GitFork, Activity, Users } from "lucide-react"

const languages = [
  { name: "TypeScript", percentage: 68.4, color: "#3178c6" },
  { name: "JavaScript", percentage: 18.2, color: "#f1e05a" },
  { name: "CSS", percentage: 8.9, color: "#563d7c" },
  { name: "TOML", percentage: 3.2, color: "#9c4221" },
  { name: "Shell", percentage: 1.3, color: "#89e051" },
]

const topics = [
  "ai-agents",
  "orchestration",
  "claude",
  "steampunk",
  "typescript",
  "next-js",
  "meow-stack",
  "vibe-coding",
  "polecats",
  "flatulence",
]

const contributors = [
  { name: "chief-polecat", avatar: "steampunk ferret chief" },
  { name: "the-mayor", avatar: "steampunk ferret mayor hat" },
  { name: "witness-owl", avatar: "steampunk owl" },
  { name: "deacon-wolf", avatar: "steampunk wolf" },
  { name: "refinery-bot", avatar: "steampunk robot" },
]

export function RepoSidebar() {
  return (
    <aside className="w-80 flex-shrink-0 hidden lg:block">
      <div className="space-y-6">
        {/* About */}
        <section>
          <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">About</h3>
          <p className="text-sm text-[#e6edf3] mb-4">
            The stinkiest AI orchestration system this side of the cloud. Like Gas Town, but way more fragrant.
          </p>

          <div className="space-y-2 text-sm">
            <a href="#" className="flex items-center gap-2 text-[#58a6ff] hover:underline">
              <Link className="w-4 h-4" />
              fart.town
            </a>
            <div className="flex items-center gap-2 text-[#7d8590]">
              <Tag className="w-4 h-4" />
              ai-agents orchestration meow-stack
            </div>
            <a href="#" className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff]">
              <BookOpen className="w-4 h-4" />
              Readme
            </a>
            <a href="#" className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff]">
              <Scale className="w-4 h-4" />
              WTFPL License
            </a>
            <a href="#" className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff]">
              <Activity className="w-4 h-4" />
              Activity
            </a>
            <a href="#" className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff]">
              <Star className="w-4 h-4" />
              6.9k stars
            </a>
            <a href="#" className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff]">
              <Eye className="w-4 h-4" />
              247 watching
            </a>
            <a href="#" className="flex items-center gap-2 text-[#7d8590] hover:text-[#58a6ff]">
              <GitFork className="w-4 h-4" />
              420 forks
            </a>
          </div>
        </section>

        {/* Releases */}
        <section className="pt-4 border-t border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">Releases</h3>
          <a href="#" className="flex items-center gap-2 text-sm">
            <Tag className="w-4 h-4 text-[#3fb950]" />
            <span className="text-[#e6edf3] font-semibold">v1.0.0</span>
            <span className="text-xs px-1.5 py-0.5 rounded-full bg-[#238636] text-white">Latest</span>
          </a>
          <p className="text-xs text-[#7d8590] mt-1">+ 16 releases</p>
        </section>

        {/* Sponsor */}
        <section className="pt-4 border-t border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">Sponsor this project</h3>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium border border-[#30363d] rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9]">
            <svg className="w-4 h-4 text-[#db61a2]" viewBox="0 0 16 16" fill="currentColor">
              <path d="m8 14.25.345.666a.75.75 0 0 1-.69 0l-.008-.004-.018-.01a7.152 7.152 0 0 1-.31-.17 22.055 22.055 0 0 1-3.434-2.414C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.045 5.231-3.885 6.818a22.066 22.066 0 0 1-3.744 2.584l-.018.01-.006.003h-.002ZM4.25 2.5c-1.336 0-2.75 1.164-2.75 3 0 2.15 1.58 4.144 3.365 5.682A20.58 20.58 0 0 0 8 13.393a20.58 20.58 0 0 0 3.135-2.211C12.92 9.644 14.5 7.65 14.5 5.5c0-1.836-1.414-3-2.75-3-1.373 0-2.609.986-3.029 2.456a.749.749 0 0 1-1.442 0C6.859 3.486 5.623 2.5 4.25 2.5Z" />
            </svg>
            Sponsor
          </button>
          <p className="text-xs text-[#7d8590] mt-2">Learn more about GitHub Sponsors</p>
        </section>

        {/* Contributors */}
        <section className="pt-4 border-t border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Contributors
            <span className="text-[#7d8590] font-normal">30</span>
          </h3>
          <div className="flex flex-wrap gap-1">
            {contributors.map((c) => (
              <a key={c.name} href="#" title={c.name}>
                <img
                  src={`/.jpg?height=32&width=32&query=${c.avatar}`}
                  alt={c.name}
                  className="w-8 h-8 rounded-full border border-[#30363d] hover:border-[#58a6ff]"
                />
              </a>
            ))}
            <a
              href="#"
              className="flex items-center justify-center w-8 h-8 rounded-full bg-[#21262d] border border-[#30363d] text-xs text-[#7d8590] hover:border-[#58a6ff]"
            >
              +25
            </a>
          </div>
        </section>

        {/* Languages */}
        <section className="pt-4 border-t border-[#30363d]">
          <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">Languages</h3>

          {/* Language bar */}
          <div className="flex h-2 rounded-full overflow-hidden mb-3">
            {languages.map((lang) => (
              <div key={lang.name} style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }} />
            ))}
          </div>

          {/* Language list */}
          <div className="space-y-1">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-center gap-2 text-xs">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className="text-[#e6edf3] font-semibold">{lang.name}</span>
                <span className="text-[#7d8590]">{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}
