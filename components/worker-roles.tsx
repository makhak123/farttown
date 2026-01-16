import { Crown, Cat, Factory, Eye, Church, Dog, Users, User } from "lucide-react"

const workers = [
  {
    icon: <User className="w-8 h-8" />,
    emoji: "👤",
    name: "The Overseer",
    description:
      "That's you, Human. The eighth role. You've got eye paint and an inbox. You're the boss, the head honcho, the big cheese.",
    color: "text-foreground",
  },
  {
    icon: <Crown className="w-8 h-8" />,
    emoji: "🎩",
    name: "The Mayor",
    description:
      "Your concierge and chief-of-staff. The main agent you talk to. Kicks off work convoys and receives notifications when they finish.",
    color: "text-primary",
  },
  {
    icon: <Cat className="w-8 h-8" />,
    emoji: "😺",
    name: "Polecats",
    description:
      "Ephemeral per-rig workers that spin up on demand. They work in swarms to produce Merge Requests, then hand them off to the Merge Queue.",
    color: "text-primary",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    emoji: "🏭",
    name: "The Refinery",
    description:
      "Handles the Merge Queue problem. Intelligently merges all changes, one at a time, to main. No work can be lost.",
    color: "text-primary",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    emoji: "🦉",
    name: "The Witness",
    description:
      "Watches over the polecats and helps them get un-stuck. Smooths out the workflow so it's almost perfect for most runs.",
    color: "text-primary",
  },
  {
    icon: <Church className="w-8 h-8" />,
    emoji: "🐺",
    name: "The Deacon",
    description:
      "The daemon beacon. Runs patrols in a loop and propagates DYFJ signals downward to keep Fart Town working.",
    color: "text-primary",
  },
  {
    icon: <Dog className="w-8 h-8" />,
    emoji: "🐶",
    name: "The Dogs",
    description:
      "The Deacon's personal crew. They handle maintenance, cleanup, and occasional handyman work. Including Boot, who checks on the Deacon every 5 minutes.",
    color: "text-primary",
  },
  {
    icon: <Users className="w-8 h-8" />,
    emoji: "👷",
    name: "The Crew",
    description:
      "Your personal coding agents. Long-lived identities, great for design work and back-and-forth. You'll love your crew.",
    color: "text-primary",
  },
]

export function WorkerRoles() {
  return (
    <section id="workers" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Worker Roles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fart Town workers are regular coding agents, each prompted to play one of seven well-defined worker roles.
            Plus you, the Overseer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workers.map((worker) => (
            <div
              key={worker.name}
              className="group p-6 rounded-xl border-2 border-border bg-card hover:border-primary/50 transition-all hover:scale-105"
            >
              <div className="text-4xl mb-4">{worker.emoji}</div>
              <h3 className={`text-lg font-bold mb-2 ${worker.color}`}>{worker.name}</h3>
              <p className="text-sm text-muted-foreground">{worker.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
