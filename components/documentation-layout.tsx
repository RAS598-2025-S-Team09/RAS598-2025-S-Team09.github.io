"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocumentationLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = React.useState(false)
  const pathname = usePathname()

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle("dark")
  }

  const navItems = [
    { name: "Overview", path: "/" },
    { name: "Data Flow Graphs", path: "/dataflowgraphs" },
    { name: "Sensors Used", path: "/sensorsused" },
    { name: "Milestones", path: "/milestones" },
    { name: "Impact", path: "/impact" },
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl font-bold">Project Documentation</h1>
            <nav>
              <ul className="flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className={`text-sm ${pathname === item.path ? "text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        <main className="flex-1 bg-background">
          <div className="container mx-auto py-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}

