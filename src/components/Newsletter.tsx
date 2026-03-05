"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

interface NewsletterProps {
  className?: string
  variant?: "inline" | "card"
}

export const Newsletter = ({ className = "", variant = "card" }: NewsletterProps) => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus("success")
        setMessage("Félicitations ! Vous êtes maintenant inscrit à notre newsletter.")
        setEmail("")
      } else {
        throw new Error("Une erreur est survenue lors de l'inscription.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Une erreur est survenue. Veuillez réessayer plus tard.")
    }
  }

  if (variant === "inline") {
    return (
      <div className={`w-full ${className}`}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-grow">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="email"
              placeholder="votre@email.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              disabled={status === "loading" || status === "success"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center min-w-[140px] disabled:opacity-70"
          >
            {status === "loading" ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : status === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              "S'inscrire"
            )}
          </button>
        </form>
        {status === "success" && (
          <p className="mt-2 text-sm text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> {message}
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
            <AlertCircle className="w-4 h-4" /> {message}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={`bg-slate-900 rounded-2xl p-8 md:p-12 overflow-hidden relative ${className}`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 text-blue-400 rounded-2xl mb-6">
          <Mail className="w-8 h-8" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
          Ne manquez plus aucun <span className="text-blue-500">Bonus Exclusif</span>
        </h2>
        
        <p className="text-slate-400 text-lg mb-8">
          Rejoignez la communauté UNMAXDECASH et recevez chaque semaine les meilleurs bonus sans dépôt, 
          les nouveaux casinos certifiés et nos guides pour maximiser vos gains.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-grow">
            <input
              type="email"
              placeholder="Votre adresse email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-slate-500"
              disabled={status === "loading" || status === "success"}
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center min-w-[160px]"
          >
            {status === "loading" ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : status === "success" ? (
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" /> Inscrit
              </span>
            ) : (
              "S'INSCRIRE"
            )}
          </button>
        </form>

        <div className="flex flex-col items-center gap-2">
          {status === "success" && (
            <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg text-sm mb-4">
              {message}
            </div>
          )}
          
          {status === "error" && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-lg text-sm mb-4">
              {message}
            </div>
          )}

          <p className="text-slate-500 text-xs">
            En vous inscrivant, vous acceptez de recevoir nos emails marketing. Vous pouvez vous désinscrire à tout moment. 
            Consultez notre{" "}
            <Link href="/politique-de-confidentialite" className="text-slate-400 hover:text-blue-400 underline transition-colors">
              Politique de Confidentialité
            </Link>.
          </p>
        </div>
      </div>
    </div>
  )
}