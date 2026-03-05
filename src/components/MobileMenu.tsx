"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Menu, 
  X, 
  ChevronRight, 
  Gamepad2, 
  Gift, 
  BookOpen, 
  Newspaper, 
  ShieldCheck, 
  Scale,
  Home
} from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  icon: any
}

const mainNavItems: NavItem[] = [
  { label: "Accueil", href: "/", icon: Home },
  { label: "Meilleurs Casinos", href: "/casinos", icon: Gamepad2 },
  { label: "Bonus de Casino", href: "/bonus", icon: Gift },
  { label: "Guides Pratiques", href: "/guides", icon: BookOpen },
  { label: "Actualités Gambling", href: "/actualites", icon: Newspaper },
]

const legalNavItems: NavItem[] = [
  { label: "Mentions Légales", href: "/mentions-legales", icon: Scale },
  { label: "Politique de Confidentialité", href: "/politique-de-confidentialite", icon: ShieldCheck },
]

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Fermer le menu lors du changement de route
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="lg:hidden">
      {/* Bouton Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
        aria-label="Ouvrir le menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[280px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header Drawer */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <span className="font-heading font-bold text-xl text-blue-600 tracking-tight">
            UNMAX<span className="text-emerald-500">DECASH</span>
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-4 space-y-1">
            <p className="px-2 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Navigation principale
            </p>
            {mainNavItems?.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between p-3 rounded-xl transition-all duration-200 group",
                    isActive 
                      ? "bg-blue-50 text-blue-600 font-medium" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-5 h-5", isActive ? "text-blue-600" : "text-slate-400 group-hover:text-blue-600")} />
                    <span className="font-body">{item.label}</span>
                  </div>
                  <ChevronRight className={cn("w-4 h-4 transition-transform", isActive ? "rotate-90" : "opacity-0 group-hover:opacity-100")} />
                </Link>
              )
            })}
          </nav>

          <div className="mt-8 px-4 space-y-1">
            <p className="px-2 mb-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Informations
            </p>
            {legalNavItems?.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl text-sm transition-colors",
                    isActive 
                      ? "text-blue-600 font-medium" 
                      : "text-slate-500 hover:text-blue-600"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-body">{item.label}</span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Footer Drawer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <Link
            href="/casinos"
            className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
          >
            Voir les Bonus
          </Link>
          <p className="mt-4 text-[10px] text-center text-slate-400 leading-tight">
            Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09 74 75 13 13.
          </p>
        </div>
      </div>
    </div>
  )
}