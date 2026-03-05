"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
}

const mainNav: NavItem[] = [
  { name: "Meilleurs Casinos", href: "/casinos" },
  { name: "Bonus de Casino", href: "/bonus" },
  { name: "Guides Pratiques", href: "/guides" },
  { name: "Actualités", href: "/actualites" },
]

const legalNav: NavItem[] = [
  { name: "Mentions Légales", href: "/mentions-legales" },
  { name: "Confidentialité", href: "/politique-de-confidentialite" },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-3 border-slate-200 shadow-sm" 
          : "bg-white py-5 border-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-2 group"
        >
          <div className="bg-blue-600 p-1.5 rounded-lg transition-transform group-hover:scale-110">
            <Zap className="w-6 h-6 text-white fill-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tighter font-heading text-slate-900">
            UNMAXDE<span className="text-blue-600">CASH</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-blue-600",
                pathname === item.href ? "text-blue-600" : "text-slate-600"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/bonus"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Meilleurs Bonus
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu principal"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-[73px] bg-white z-40 md:hidden transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6 bg-slate-50">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 px-4">Navigation</p>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between p-4 text-base font-semibold border-b border-slate-100 last:border-0",
                    pathname === item.href ? "text-blue-600 bg-blue-50/50" : "text-slate-700"
                  )}
                >
                  {item.name}
                  <ChevronRight className={cn("w-4 h-4", pathname === item.href ? "text-blue-600" : "text-slate-300")} />
                </Link>
              ))}
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 px-4 pt-4">Informations</p>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              {legalNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between p-4 text-sm font-medium text-slate-500 border-b border-slate-100 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto pb-10">
            <Link
              href="/casinos"
              className="flex items-center justify-center w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200"
            >
              Voir le classement
            </Link>
            <p className="text-center text-xs text-slate-400 mt-6">
              Jouer comporte des risques. <br /> Appelez le 09 74 75 13 13 (appel non surtaxé).
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}