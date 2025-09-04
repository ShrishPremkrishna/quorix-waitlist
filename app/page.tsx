import { WaitlistForm } from "@/components/waitlist-form"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-foreground">Quorix</h1>
              <Badge variant="secondary" className="text-xs font-medium">
                Coming Soon
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">Backed by Afore Capital</div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                Developer-Focused API for Macroeconomic Data
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
                Access comprehensive macroeconomic datasets through a clean, developer-friendly API. Built for modern
                applications that need reliable economic indicators.
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Badge variant="outline" className="text-xs">
                Open Source
              </Badge>
              <span>•</span>
              <span>RESTful API</span>
              <span>•</span>
              <span>Real-time Data</span>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Comprehensive Data</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Access inflation rates, GDP data, employment statistics, and more from trusted sources.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Developer Experience</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clean REST API with comprehensive documentation, SDKs, and excellent error handling.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Open Source</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Transparent, community-driven development with open source tools and methodologies.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div>© 2025 Quorix. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <span>Backed by Afore Capital</span>
              <span>Open Source Project</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
