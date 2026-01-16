import { HeroSection } from "@/components/hero-section"
import { StinkinessGauge } from "@/components/stinkiness-gauge"
import { WorkerRoles } from "@/components/worker-roles"
import { FeaturesGrid } from "@/components/features-grid"
import { MeowStack } from "@/components/meow-stack"
import { WarningSection } from "@/components/warning-section"
import { Footer } from "@/components/footer"
import { Github } from "lucide-react"

export default function FartTownPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <a
        href="https://github.com/makhak123/farttown/tree/main"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-[#21262d] text-white rounded-full border border-[#30363d] hover:bg-[#30363d] transition-colors shadow-lg"
      >
        <Github className="w-5 h-5" />
        <span className="text-sm font-medium">View on GitHub</span>
      </a>
      <HeroSection />
      <StinkinessGauge />
      <WarningSection />
      <WorkerRoles />
      <MeowStack />
      <FeaturesGrid />
      <Footer />
    </main>
  )
}
