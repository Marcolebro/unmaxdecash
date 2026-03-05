import { Metadata } from "next"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Newsletter } from "@/components/Newsletter"
import { Scale, Gavel, ShieldCheck, Mail, Globe, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentions Légales | UNMAXDECASH",
  description: "Informations légales, conditions d'utilisation et politique de transparence du site UNMAXDECASH, votre comparateur de casinos en ligne.",
}

interface LegalSectionProps {
  title: string
  icon: React.ReactNode
  children: React.ReactNode
}

function LegalSection({ title, icon, children }: LegalSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          {icon}
        </div>
        <h2 className="text-2xl font-bold text-slate-900 font-montserrat">{title}</h2>
      </div>
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Breadcrumbs 
            items={[
              { label: "Accueil", href: "/" },
              { label: "Mentions Légales", href: "/mentions-legales" }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4 font-montserrat uppercase tracking-tight">
            Mentions <span className="text-blue-600">Légales</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique (L.C.E.N.).
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Éditeur */}
        <LegalSection title="Éditeur du site" icon={<Globe className="w-6 h-6" />}>
          <p>
            Le site <strong>UNMAXDECASH</strong> est édité par l'agence de marketing digital spécialisée dans l'affiliation iGaming.
          </p>
          <ul className="list-none p-0 mt-4 space-y-2">
            <li><strong>Responsable de la publication :</strong> Direction UNMAXDECASH</li>
            <li><strong>Contact :</strong> contact@unmaxdecash.com</li>
            <li><strong>Siège social :</strong> Digital Nomad Services, Malte.</li>
          </ul>
        </LegalSection>

        {/* Hébergement */}
        <LegalSection title="Hébergement" icon={<ShieldCheck className="w-6 h-6" />}>
          <p>
            Le site est hébergé par la société <strong>Vercel Inc.</strong>, située au 340 S Lemon Ave #4133 Walnut, CA 91789, USA. 
            Le stockage des données est assuré sur des serveurs hautement sécurisés garantissant la confidentialité et l'intégrité des informations.
          </p>
        </LegalSection>

        {/* Propriété Intellectuelle */}
        <LegalSection title="Propriété Intellectuelle" icon={<Gavel className="w-6 h-6" />}>
          <p>
            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. 
            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p className="mt-2">
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>
        </LegalSection>

        {/* Responsabilité & Affiliation */}
        <LegalSection title="Transparence & Affiliation" icon={<Scale className="w-6 h-6" />}>
          <p>
            UNMAXDECASH est un site d'information et de comparaison de services de jeux d'argent en ligne. 
            Nous utilisons des <strong>liens d'affiliation</strong>. Cela signifie que nous pouvons percevoir une commission si vous cliquez sur un lien et que vous vous inscrivez sur l'un de nos sites partenaires.
          </p>
          <p className="mt-2">
            Cette rémunération nous permet de maintenir le site gratuit pour nos utilisateurs et de continuer à produire du contenu de haute qualité. 
            L'affiliation n'influence en aucun cas notre notation : nos tests restent objectifs et basés sur des critères stricts de sécurité et de fiabilité.
          </p>
        </LegalSection>

        {/* Avertissement Jeu Responsable */}
        <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-8 my-12">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-900 mb-3 font-montserrat">Avertissement : Jeu Responsable</h2>
              <p className="text-red-800 leading-relaxed">
                Les jeux d'argent et de hasard sont interdits aux mineurs. Jouer comporte des risques : endettement, isolement, dépendance. 
                Pour être aidé, appelez le <strong>09 74 75 13 13</strong> (appel non surtaxé).
              </p>
              <p className="text-red-800 mt-4 font-semibold italic">
                UNMAXDECASH ne peut être tenu responsable des pertes financières subies par les joueurs sur les plateformes recommandées.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <LegalSection title="Contactez-nous" icon={<Mail className="w-6 h-6" />}>
          <p>
            Pour toute question concernant ces mentions légales ou pour toute demande d'information, vous pouvez nous contacter directement par email à l'adresse suivante :
          </p>
          <div className="mt-4 p-4 bg-slate-50 rounded-xl inline-block border border-slate-200">
            <a href="mailto:contact@unmaxdecash.com" className="text-blue-600 font-bold hover:underline">
              contact@unmaxdecash.com
            </a>
          </div>
        </LegalSection>
      </div>

      <Newsletter />
    </main>
  )
}