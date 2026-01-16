import { Factory, Github, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-border bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Factory className="w-10 h-10 text-primary" />
          <span className="font-mono text-2xl font-bold">FART TOWN</span>
        </div>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          {
            "I'd rather sit at home and create the future, with my own hands. I actually have six species of bamboo on my property. I'm already the panda, having the time of my life."
          }
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          <Button variant="outline">Documentation</Button>
          <Button variant="outline">Discord</Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="mb-2">
            Built with <Heart className="w-4 h-4 inline text-destructive" /> and approximately 30 superintelligent robot
            chimps.
          </p>
          <p className="font-mono text-xs">17 days old · 75k lines of code · 2000 commits · 100% vibe coded</p>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Remember: Do not use Fart Town if you are more than 4 feet tall. I want to tower impressively at meet-ups,
            like Sauron.
          </p>
        </div>
      </div>
    </footer>
  )
}
