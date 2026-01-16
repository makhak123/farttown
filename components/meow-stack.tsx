import { Layers, Atom, GitBranch, FileCode, Beaker, Workflow } from "lucide-react"

const stackLayers = [
  {
    icon: <Atom className="w-6 h-6" />,
    name: "Beads",
    description: "The atomic unit of work. A special kind of issue-tracker issue stored in JSON and tracked in Git.",
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    name: "Epics",
    description: "Beads with children. Build top-down plans with parallel or sequenced dependencies.",
  },
  {
    icon: <Workflow className="w-6 h-6" />,
    name: "Molecules",
    description: "Chained workflows with arbitrary shapes, loops, and gates. Turing-complete and AI-executed.",
  },
  {
    icon: <Beaker className="w-6 h-6" />,
    name: "Protomolecules",
    description: "Templates made of actual Beads. Instantiate entire workflows with variable substitutions.",
  },
  {
    icon: <FileCode className="w-6 h-6" />,
    name: "Formulas",
    description: "TOML source format for workflows. Cooked into protomolecules, then instantiated into wisps.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    name: "Guzzoline",
    description: "The big sea of work molecules. All the work in the world, ready to be swarmed.",
  },
]

export function MeowStack() {
  return (
    <section id="meow" className="py-20 px-4 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <span className="text-2xl">🐱</span>
            <span className="font-mono text-sm">Molecular Expression of Work</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">The MEOW Stack</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {
              "Fart Town is the tip of a deep iceberg. The bones of Fart Town — the MEOW stack — may live on for years to come. It feels like more of a discovery than an invention."
            }
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {stackLayers.map((layer, index) => (
              <div key={layer.name} className="relative flex gap-6 items-start">
                {/* Node */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 border-primary bg-card flex items-center justify-center text-primary">
                  {layer.icon}
                </div>

                {/* Content */}
                <div className="flex-1 p-6 rounded-xl border border-border bg-card">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-muted-foreground">LAYER {index + 1}</span>
                    <h3 className="text-xl font-bold text-primary">{layer.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{layer.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
