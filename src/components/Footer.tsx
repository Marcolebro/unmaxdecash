import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, ShieldCheck, AlertCircle } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Branding & Description */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white font-heading">
              UNMAXDE<span className="text-blue-500">CASH</span>
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400">
              Votre guide de confiance pour comparer les meilleurs casinos en ligne. Nous analysons les bonus, la sécurité et la fiabilité pour vous offrir la meilleure expérience de jeu possible.
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://twitter.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-blue-500 hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter size={18} />
              </Link>
              <Link href="https://facebook.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-blue-500 hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="https://instagram.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-blue-500 hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href="https://youtube.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-blue-500 hover:text-white transition-all duration-300" aria-label="Youtube">
                <Youtube size={18} />
              </Link>
            </div>
          </div>

          {/* Navigation Rapide */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-heading uppercase tracking-wider text-sm">Navigation</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/casinos" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                  Meilleurs Casinos en Ligne
                </Link>
              </li>
              <li>
                <Link href="/bonus" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                  Bonus de Casino
                </Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                  Guides Pratiques
                </Link>
              </li>
              <li>
                <Link href="/actualites" className="hover:text-blue-500 transition-colors flex items-center gap-2">
                  Actualités Gambling
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations Légales */}
          <div>
            <h3 className="text-white font-semibold mb-6 font-heading uppercase tracking-wider text-sm">Informations</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/mentions-legales" className="hover:text-blue-500 transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-blue-500 transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li className="flex items-center gap-2 text-emerald-500 pt-2">
                <ShieldCheck size={18} />
                <span className="font-medium">Site Sécurisé & Vérifié</span>
              </li>
            </ul>
          </div>

          {/* Jeu Responsable */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-red-600 text-red-600 font-bold text-sm">
                18+
              </div>
              <h3 className="text-white font-semibold font-heading uppercase tracking-wider text-sm">Jeu Responsable</h3>
            </div>
            <div className="p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
              <p className="text-xs leading-relaxed text-zinc-400 italic">
                <AlertCircle size={14} className="inline mr-1 mb-1 text-blue-500" />
                Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le <span className="text-white font-semibold">09 74 75 13 13</span> (appel non surtaxé).
              </p>
            </div>
          </div>
        </div>

        {/* Barre de Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-500">
          <div className="flex flex-col gap-2">
            <p>© {currentYear} UNMAXDECASH. Tous droits réservés.</p>
            <p className="max-w-md">
              UNMAXDECASH est un site d&apos;affiliation indépendant. Nous recevons des commissions de la part des partenaires listés, sans aucun coût supplémentaire pour vous.
            </p>
          </div>
          <div className="flex items-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
            {/* Ici on pourrait ajouter des logos de méthodes de paiement ou régulateurs si besoin */}
            <span className="text-[10px] border border-zinc-800 px-2 py-1 rounded">SSL ENCRYPTED</span>
            <span className="text-[10px] border border-zinc-800 px-2 py-1 rounded">RESPONSIBLE GAMING</span>
          </div>
        </div>
      </div>
    </footer>
  );
};