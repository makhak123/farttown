"use client"

import { BookOpen, Pencil } from "lucide-react"

export function ReadmeSection() {
  return (
    <div className="border border-[#30363d] rounded-md overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-[#7d8590]" />
          <span className="text-sm font-semibold text-[#e6edf3]">README.md</span>
        </div>
        <button className="p-1 hover:bg-[#30363d] rounded">
          <Pencil className="w-4 h-4 text-[#7d8590]" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 prose prose-invert max-w-none">
        <div className="text-center mb-8">
          <img
            src="/images/image.png"
            alt="Welcome to Fart Town"
            className="w-full max-w-3xl mx-auto rounded-lg border border-[#30363d]"
          />
        </div>

        <h1 className="text-3xl font-bold text-[#e6edf3] text-center mb-4">Welcome to Fart Town</h1>

        <p className="text-center text-[#7d8590] mb-6">
          <em>The stinkiest AI orchestration system this side of the cloud.</em>
        </p>

        <div className="flex justify-center gap-2 mb-8">
          <img src="https://img.shields.io/badge/version-1.0.0-green" alt="Version" className="h-5" />
          <img src="https://img.shields.io/badge/stinkiness-HIGH-yellow" alt="Stinkiness" className="h-5" />
          <img src="https://img.shields.io/badge/vibe%20coded-100%25-purple" alt="Vibe Coded" className="h-5" />
          <img src="https://img.shields.io/badge/polecats-active-blue" alt="Polecats" className="h-5" />
          <img src="https://img.shields.io/badge/license-WTFPL-red" alt="License" className="h-5" />
        </div>

        <h2 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4 pb-2 border-b border-[#30363d]">
          What is Fart Town?
        </h2>

        <p className="text-[#e6edf3] mb-4">
          Fart Town is an AI agent orchestration system for coordinating 20-30 Claude Code instances working on a single
          codebase. It's like{" "}
          <a
            href="https://steve-yegge.medium.com/welcome-to-gas-town-4f25ee16dd04"
            className="text-[#58a6ff] hover:underline"
          >
            Gas Town
          </a>
          , but with 100% more fragrance and whimsy.
        </p>

        <h2 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4 pb-2 border-b border-[#30363d]">Features</h2>

        <ul className="text-[#e6edf3] space-y-2 list-disc pl-6">
          <li>
            <strong>GUPP</strong> - Universal Propulsion Principle. If there is work on your hook, YOU MUST RUN IT.
          </li>
          <li>
            <strong>NDI</strong> - Nondeterministic Idempotence. The workflow you wanted eventually finishes.
            Guaranteed.*
          </li>
          <li>
            <strong>MEOW Stack</strong> - Molecular Expression of Work. Beads, Epics, Molecules, Protomolecules,
            Formulas, and Guzzoline.
          </li>
          <li>
            <strong>Merge Queue</strong> - No more monkey knife fights over rebasing. The Refinery handles it.
          </li>
          <li>
            <strong>Town Mail</strong> - Real-time worker communication through a two-level Beads structure.
          </li>
          <li>
            <strong>Wisps</strong> - Ephemeral orchestration without polluting Git.
          </li>
          <li>
            <strong>Convoys</strong> - Every unit of slung work is wrapped in a trackable Convoy.
          </li>
          <li>
            <strong>Patrols</strong> - Autonomous workflows with exponential backoff. Fart Town keeps itself running.
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4 pb-2 border-b border-[#30363d]">Worker Roles</h2>

        <table className="w-full text-sm text-[#e6edf3] border border-[#30363d] rounded-md overflow-hidden">
          <thead className="bg-[#161b22]">
            <tr>
              <th className="px-4 py-2 text-left border-b border-[#30363d]">Role</th>
              <th className="px-4 py-2 text-left border-b border-[#30363d]">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">👤 Overseer</td>
              <td className="px-4 py-2 text-[#7d8590]">That's you, Human. The boss.</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">🎩 Mayor</td>
              <td className="px-4 py-2 text-[#7d8590]">Your concierge and chief-of-staff. Kicks off convoys.</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">😺 Polecats</td>
              <td className="px-4 py-2 text-[#7d8590]">
                Ephemeral per-rig workers. They swarm to produce Merge Requests.
              </td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">🏭 Refinery</td>
              <td className="px-4 py-2 text-[#7d8590]">Handles the Merge Queue. No work can be lost.</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">🦉 Witness</td>
              <td className="px-4 py-2 text-[#7d8590]">Watches over polecats and helps them get un-stuck.</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">🐺 Deacon</td>
              <td className="px-4 py-2 text-[#7d8590]">The daemon beacon. Runs patrols and propagates DYFJ signals.</td>
            </tr>
            <tr className="border-b border-[#21262d]">
              <td className="px-4 py-2">🐶 Dogs</td>
              <td className="px-4 py-2 text-[#7d8590]">The Deacon's crew. Maintenance, cleanup, handyman work.</td>
            </tr>
            <tr>
              <td className="px-4 py-2">👷 Crew</td>
              <td className="px-4 py-2 text-[#7d8590]">Your personal coding agents. Long-lived identities.</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4 pb-2 border-b border-[#30363d]">Quick Start</h2>

        <pre className="bg-[#161b22] border border-[#30363d] rounded-md p-4 overflow-x-auto">
          <code className="text-sm text-[#e6edf3]">{`# Clone the refinery
git clone https://github.com/makhak123/farttown.git
cd farttown

# Install dependencies
npm install

# Fire up the engines
npm run dev

# Deploy your first convoy
npx farttown convoy --name "my-first-stink" --workers 5`}</code>
        </pre>

        <h2 className="text-xl font-semibold text-[#e6edf3] mt-8 mb-4 pb-2 border-b border-[#30363d]">Warning</h2>

        <blockquote className="border-l-4 border-[#f85149] bg-[#f8514926] p-4 rounded-r-md text-[#e6edf3]">
          <p className="font-bold text-[#f85149] mb-2">GET THE F*** OUT</p>
          <ul className="text-sm space-y-1 list-disc pl-4">
            <li>This entire codebase was created by AI agents orchestrated by other AI agents.</li>
            <li>If you're not already juggling 5+ Claude Code instances daily, you will not survive.</li>
            <li>Fart Town is a cash guzzler. If you think about where money comes from, turn back.</li>
            <li>On a scale of "polished diamond" to "smuggled 400 miles upriver", we're the latter.</li>
          </ul>
        </blockquote>

        <p className="text-xs text-[#7d8590] mt-8 text-center">
          * "Guaranteed" as long as you keep throwing agents at it. Ask your doctor if Fart Town is right for you.
        </p>

        <hr className="border-[#30363d] my-8" />

        <p className="text-center text-[#7d8590] text-sm">
          Built with 💨 and approximately 30 superintelligent robot chimps.
          <br />
          17 days old · 75k lines of code · 2,069 commits · 100% vibe coded
        </p>
      </div>
    </div>
  )
}
