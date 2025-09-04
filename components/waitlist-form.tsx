"use client"

import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { createBrowserClient } from "@supabase/ssr"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setError(null)

    try {
      const { error: supabaseError } = await supabase.from("waitlist").insert([{ email }])

      if (supabaseError) {
        if (supabaseError.code === "23505") {
          throw new Error("This email is already on the waitlist")
        }
        throw new Error(supabaseError.message || "Failed to join waitlist")
      }

      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6 text-center">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-foreground">{"You're on the list!"}</h3>
            <p className="text-sm text-muted-foreground">{"We'll notify you when Quorix is ready for early access."}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-semibold text-foreground">Join the Waitlist</h3>
            <p className="text-sm text-muted-foreground">Be the first to access Quorix when we launch</p>
          </div>

          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !email}
              style={{
                backgroundColor: "#ea580c",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: "500",
                cursor: isLoading || !email ? "not-allowed" : "pointer",
                opacity: isLoading || !email ? "0.5" : "1",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isLoading && email) {
                  e.currentTarget.style.backgroundColor = "#c2410c"
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading && email) {
                  e.currentTarget.style.backgroundColor = "#ea580c"
                }
              }}
            >
              {isLoading ? "Joining..." : "Join"}
            </button>
          </div>

          {error && <p className="text-xs text-red-500 text-center">{error}</p>}

          <p className="text-xs text-muted-foreground text-center">
            No spam, just updates on our progress and early access.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
