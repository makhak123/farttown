import { HeroSection } from "@/components/hero-section"
import { StinkinessGauge } from "@/components/stinkiness-gauge"
import { WorkerRoles } from "@/components/worker-roles"
import { FeaturesGrid } from "@/components/features-grid"
import { MeowStack } from "@/components/meow-stack"
import { WarningSection } from "@/components/warning-section"
import { Footer } from "@/components/footer"

export default function FartTownPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
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
