import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import { ShieldAlert, Menu, ExternalLink, Mail, Info, Scale, Lock } from "lucide-react";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "UNMAXDECASH | Comparatif Meilleurs Casinos en Ligne & Bonus 2025",
    template: "%s | UNMAXDECASH",
  },
  description: "UNMAXDECASH compare pour vous les meilleurs casinos en ligne, bonus d'inscription et offres exclusives. Guides pratiques et actualités du gambling pour maximiser vos gains.",
  keywords: ["casino en ligne", "meilleurs bonus casino", "comparatif casino", "free spins", "guide gambling", "UNMAXDECASH"],
  authors: [{ name: "UNMAXDECASH" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://unmaxdecash.com",
    siteName: "UNMAXDECASH",
    title: "UNMAXDECASH | Le guide ultime du casino en ligne",
    description: "Trouvez les meilleurs casinos et bonus exclusifs. Expertises, guides et actualités pour les joueurs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UNMAXDECASH - Comparatif Casino",
      },
    ],
  },
};

interface HeaderProps {
  className?: string;
}

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-montserrat text-2xl font-black tracking-tighter text-blue-600">
              UNMAX<span className="text-emerald-500">DE</span>CASH
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/casinos" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Meilleurs Casinos
            </Link>
            <Link href="/bonus" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Bonus
            </Link>
            <Link href="/guides" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Guides
            </Link>
            <Link href="/actualites" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">
              Actualités
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/bonus" 
            className="hidden sm:flex h-10 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95"
          >
            Meilleurs Bonus
          </Link>
          <button className="md:hidden p-2 text-gray-600" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 pt-16 pb-8 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="font-montserrat text-2xl font-black tracking-tighter text-white">
                UNMAX<span className="text-emerald-500">DE</span>CASH
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Votre guide de confiance pour comparer les casinos en ligne. Nous analysons les plateformes, les bonus et les jeux pour vous offrir une expérience de jeu sécurisée et rentable.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <ShieldAlert className="h-4 w-4" />
              <span>Interdit aux -18 ans</span>
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-montserrat text-lg font-bold text-white">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/casinos" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Meilleurs Casinos en Ligne
                </Link>
              </li>
              <li>
                <Link href="/bonus" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Bonus de Casino
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Guides Pratiques
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  Actualités Gambling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-montserrat text-lg font-bold text-white">Informations</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/mentions-legales" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Info className="h-4 w-4" /> Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Lock className="h-4 w-4" /> Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Scale className="h-4 w-4" /> Jeu Responsable
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-montserrat text-lg font-bold text-white">Newsletter</h3>
            <p className="mb-4 text-sm text-gray-400">Recevez nos bonus exclusifs directement par email.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full rounded-lg bg-gray-800 border-gray-700 px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none"
              />
              <button className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors">
                S'inscrire
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <div className="mb-8 rounded-xl bg-gray-800/50 p-6 text-center">
            <p className="text-xs leading-relaxed text-gray-400">
              <span className="block mb-2 font-bold text-gray-300">⚠️ AVERTISSEMENT JEU RESPONSABLE</span>
              Le jeu comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le <span className="text-white font-bold">09-74-75-13-13</span> (appel non surtaxé). Jouer doit rester un plaisir. Ne misez jamais d'argent que vous ne pouvez pas vous permettre de perdre.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-gray-500">
              © {currentYear} UNMAXDECASH. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1">Propulsé par l'expertise Gambling <ExternalLink className="h-3 w-3" /></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="min-h-screen bg-gray-50 font-inter text-gray-900 antialiased">
        <Header />
        <main className="relative flex min-h-[calc(100vh-80px)] flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}