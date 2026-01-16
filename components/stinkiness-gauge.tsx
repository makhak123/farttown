"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Gauge, TrendingUp, Wind, Flame } from "lucide-react"

export function StinkinessGauge() {
  const [metrics, setMetrics] = useState({
    polecats: 12,
    convoys: 47,
    molecules: 1337,
    stinkLevel: 87,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) => ({
        polecats: Math.max(5, Math.min(30, prev.polecats + Math.floor(Math.random() * 5 - 2))),
        convoys: prev.convoys + Math.floor(Math.random() * 3),
        molecules: prev.molecules + Math.floor(Math.random() * 50),
        stinkLevel: Math.max(60, Math.min(99, prev.stinkLevel + Math.random() * 10 - 5)),
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 border-y border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            <Gauge className="w-8 h-8 text-primary" />
            Live Refinery Metrics
          </h2>
          <p className="text-muted-foreground">Real-time flatulence production statistics</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <MetricCard
            icon={<Wind className="w-6 h-6" />}
            label="Active Polecats"
            value={metrics.polecats}
            suffix=" agents"
            color="text-primary"
          />
          <MetricCard
            icon={<TrendingUp className="w-6 h-6" />}
            label="Convoys Landed"
            value={metrics.convoys}
            suffix=" today"
            color="text-primary"
          />
          <MetricCard
            icon={<Flame className="w-6 h-6" />}
            label="Molecules Processed"
            value={metrics.molecules}
            suffix=""
            color="text-primary"
          />
          <MetricCard
            icon={<Gauge className="w-6 h-6" />}
            label="Stinkiness Level"
            value={Math.round(metrics.stinkLevel)}
            suffix="%"
            color="text-primary"
            highlight
          />
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  icon,
  label,
  value,
  suffix,
  color,
  highlight = false,
}: {
  icon: React.ReactNode
  label: string
  value: number
  suffix: string
  color: string
  highlight?: boolean
}) {
  return (
    <div
      className={`p-6 rounded-xl border-2 ${highlight ? "border-primary bg-primary/10" : "border-border bg-card"} transition-all hover:scale-105`}
    >
      <div className={`${color} mb-3`}>{icon}</div>
      <div className={`text-3xl font-bold font-mono ${color}`}>
        {value.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}
