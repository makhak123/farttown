import { Repeat, GitMerge, MessageSquare, Shield, Zap, Truck, Ghost, Puzzle } from "lucide-react"

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "GUPP",
    subtitle: "Universal Propulsion",
    description:
      "If there is work on your hook, YOU MUST RUN IT. The principle that keeps Fart Town moving through context windows and crashes.",
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Nondeterministic Idempotence",
    subtitle: "NDI Guarantee",
    description:
      "Even though the path is fully nondeterministic, the workflow you wanted to run eventually finishes. Guaranteed.*",
  },
  {
    icon: <GitMerge className="w-6 h-6" />,
    title: "Merge Queue",
    subtitle: "Refinery Processing",
    description:
      "No more monkey knife fights over rebasing. The Refinery intelligently merges changes one at a time. No work gets lost.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Town Mail",
    subtitle: "Real-time Messaging",
    description:
      "Workers communicate through a two-level Beads structure. Rig-level work and Town-level orchestration, all tracked in Git.",
  },
  {
    icon: <Ghost className="w-6 h-6" />,
    title: "Wisps",
    subtitle: "Ephemeral Orchestration",
    description:
      "High-velocity orchestration without polluting Git. Wisps are burned after completion, optionally squashed into summaries.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Convoys",
    subtitle: "Work Order System",
    description:
      "Every unit of slung work is wrapped in a Convoy. Track delivery of features, bug fixes, and tech debt cleanups.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Patrols",
    subtitle: "Autonomous Workflows",
    description:
      "Refinery, Witness, and Deacon all run patrols in loops with exponential backoff. Fart Town keeps itself running.",
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Plugins",
    subtitle: "Extensible Attention",
    description:
      "Coordinated or scheduled attention from an agent. Add quality gates, new UIs, and integrate with other systems.",
  },
]

export function FeaturesGrid() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{"What's Better Than Gas Town?"}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything. Same powerful orchestration, but with 100% more fragrance and whimsy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-all"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
              <p className="text-xs text-primary font-mono mb-3">{feature.subtitle}</p>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          * "Guaranteed" as long as you keep throwing agents at it. Ask your doctor if Fart Town is right for you.
        </p>
      </div>
    </section>
  )
}
