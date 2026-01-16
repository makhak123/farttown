"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { GasCloud } from "@/components/gas-cloud"
import { Factory, Github, Zap } from "lucide-react"

export function HeroSection() {
  const [stinkLevel, setStinkLevel] = useState(73)

  useEffect(() => {
    const interval = setInterval(() => {
      setStinkLevel((prev) => {
        const change = Math.random() * 10 - 5
        return Math.max(50, Math.min(99, prev + change))
      })
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating gas clouds */}
      <GasCloud className="absolute top-20 left-10 w-32 h-32 opacity-40" delay={0} />
      <GasCloud className="absolute top-40 right-20 w-24 h-24 opacity-30" delay={1} />
      <GasCloud className="absolute bottom-40 left-1/4 w-40 h-40 opacity-25" delay={2} />
      <GasCloud className="absolute bottom-20 right-1/3 w-28 h-28 opacity-35" delay={0.5} />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center gap-2">
          <Factory className="w-8 h-8 text-primary" />
          <span className="font-mono text-xl font-bold tracking-tight">FART TOWN</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#workers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Workers
          </a>
          <a href="#meow" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            MEOW Stack
          </a>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        </div>
      </nav>

      {/* Main hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-sm font-mono">v1.0.0 — Fresh from the Refinery</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-foreground">Welcome to</span>
          <br />
          <span className="text-primary drop-shadow-[0_0_30px_var(--toxic-green)]">Fart Town</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto text-balance">
          The stinkiest AI orchestration system this side of the cloud.
        </p>

        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Like Gas Town, but <span className="text-primary font-semibold">way more fragrant</span>. Orchestrate 20-30 AI
          agents without losing your mind (or your lunch).
        </p>

        {/* Live stink meter */}
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-lg border-2 border-primary/50 bg-card">
          <span className="text-sm font-mono text-muted-foreground">CURRENT STINKINESS:</span>
          <span className="text-2xl font-bold font-mono text-primary animate-pulse">{stinkLevel.toFixed(0)}%</span>
          <span className="text-xs text-primary uppercase tracking-wider">HIGH</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2 text-lg px-8 animate-pulse-glow">
            <Factory className="w-5 h-5" />
            Enter the Refinery
          </Button>
          <Button size="lg" variant="outline" className="gap-2 text-lg px-8 bg-transparent">
            Read the Docs
          </Button>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-16 w-full max-w-5xl mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src="/images/image.png"
          alt="Welcome to Fart Town - A steampunk industrial landscape with ferrets, green gas clouds, and flatulence refineries"
          className="w-full rounded-xl border-2 border-border shadow-2xl shadow-primary/20"
        />
      </div>
    </section>
  )
}
