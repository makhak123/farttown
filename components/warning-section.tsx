import type React from "react"
import { AlertTriangle, Skull, DollarSign, Brain } from "lucide-react"

export function WarningSection() {
  return (
    <section className="py-20 px-4 bg-destructive/10 border-y border-destructive/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-destructive/20 border border-destructive/50">
          <AlertTriangle className="w-5 h-5 text-destructive" />
          <span className="font-mono text-sm text-destructive">WARNING · DANGER · CAUTION</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-destructive">GET THE F*** OUT</h2>

        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          {"Fart Town is not for the faint of heart (or nose). Here's why you probably shouldn't use it:"}
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <WarningCard
            icon={<Skull className="w-6 h-6" />}
            title="100% Vibe Coded"
            description="This entire codebase was created by AI agents orchestrated by other AI agents. I've never seen the code. Neither should you."
          />
          <WarningCard
            icon={<Brain className="w-6 h-6" />}
            title="Stage 7+ Required"
            description="If you're not already juggling 5+ Claude Code instances daily, you will not survive in Fart Town. The superintelligent robot chimps will rip your face off."
          />
          <WarningCard
            icon={<DollarSign className="w-6 h-6" />}
            title="Expensive As Hell"
            description="Fart Town is a cash guzzler. If you ever have to think about where money comes from, turn back now and shelter in place."
          />
          <WarningCard
            icon={<AlertTriangle className="w-6 h-6" />}
            title="17 Days Old"
            description="On a scale of 'polished diamond' to 'smuggled 400 miles upriver', Fart Town is firmly in the latter category. It needs some Lysol."
          />
        </div>
      </div>
    </section>
  )
}

function WarningCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl border border-destructive/30 bg-card/50">
      <div className="text-destructive mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  )
}
