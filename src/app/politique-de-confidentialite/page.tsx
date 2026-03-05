import { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Newsletter } from "@/components/Newsletter";
import { ShieldCheck, Eye, Lock, FileText, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | UNMAXDECASH",
  description: "Découvrez comment UNMAXDECASH protège vos données personnelles et respecte votre vie privée dans le cadre de nos services d'affiliation casino.",
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const LegalSection = ({ title, icon, children }: SectionProps) => (
  <section className="mb-12">
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 font-heading">{title}</h2>
    </div>
    <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed">
      {children}
    </div>
  </section>
);

export function PolitiqueConfidentialitePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politique de Confidentialité - UNMAXDECASH",
    "description": "Notre engagement concernant la protection de vos données personnelles.",
    "publisher": {
      "@type": "Organization",
      "name": "UNMAXDECASH"
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Breadcrumbs 
            items={[
              { label: "Accueil", href: "/" },
              { label: "Politique de Confidentialité", href: "/politique-de-confidentialite" }
            ]} 
          />
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 font-heading">
            Politique de <span className="text-blue-600">Confidentialité</span>
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl">
            Chez UNMAXDECASH, la protection de votre vie privée est une priorité absolue. 
            Cette page détaille la manière dont nous collectons, utilisons et protégeons vos informations.
          </p>
          <p className="text-sm text-gray-400 mt-4 italic">
            Dernière mise à jour : 24 Mai 2024
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <LegalSection title="Introduction" icon={<ShieldCheck className="w-6 h-6" />}>
            <p>
              Le site UNMAXDECASH (ci-après "le Site") s'engage à ce que la collecte et le traitement de vos données soient conformes au règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
            </p>
            <p>
              En naviguant sur notre site, vous acceptez les pratiques décrites dans cette politique de confidentialité. Nous vous recommandons de la lire attentivement.
            </p>
          </LegalSection>

          <LegalSection title="Collecte des données" icon={<Eye className="w-6 h-6" />}>
            <p>Nous pouvons collecter plusieurs types d'informations :</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>
                <strong>Données fournies volontairement :</strong> Votre adresse e-mail lorsque vous vous inscrivez à notre newsletter ou que vous nous contactez via un formulaire.
              </li>
              <li>
                <strong>Données de navigation (Cookies) :</strong> Adresse IP, type de navigateur, pages consultées, durée de la visite et données de clics sur les liens d'affiliation.
              </li>
              <li>
                <strong>Données techniques :</strong> Informations sur l'appareil utilisé pour accéder au site afin d'optimiser l'affichage.
              </li>
            </ul>
          </LegalSection>

          <LegalSection title="Utilisation de vos données" icon={<Lock className="w-6 h-6" />}>
            <p>Vos données sont traitées pour les finalités suivantes :</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>Améliorer l'expérience utilisateur et les performances techniques du site.</li>
              <li>Vous envoyer des offres exclusives et des actualités via notre newsletter (avec votre consentement).</li>
              <li>Mesurer l'audience et l'efficacité de nos recommandations de casinos.</li>
              <li>Assurer le suivi des commissions d'affiliation de manière anonymisée.</li>
              <li>Prévenir les activités frauduleuses ou malveillantes.</li>
            </ul>
          </LegalSection>

          <LegalSection title="Cookies et Traceurs" icon={<FileText className="w-6 h-6" />}>
            <p>
              Le Site utilise des cookies pour analyser le trafic et personnaliser le contenu. Un cookie est un petit fichier texte déposé sur votre terminal.
            </p>
            <p className="mt-4">
              Nous utilisons notamment :
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Cookies analytiques :</strong> Pour comprendre comment les visiteurs interagissent avec le site.</li>
              <li><strong>Cookies d'affiliation :</strong> Pour identifier que vous venez de notre site lorsque vous cliquez sur une offre partenaire (essentiel pour notre modèle économique gratuit).</li>
            </ul>
            <p className="mt-4">
              Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait limiter certaines fonctionnalités du site.
            </p>
          </LegalSection>

          <LegalSection title="Vos Droits (RGPD)" icon={<Bell className="w-6 h-6" />}>
            <p>
              Conformément à la réglementation européenne, vous disposez des droits suivants concernant vos données personnelles :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li><strong>Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées.</li>
              <li><strong>Droit de rectification :</strong> Modifier des données inexactes.</li>
              <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données personnelles (ex: désinscription newsletter).</li>
              <li><strong>Droit d'opposition :</strong> Vous opposer à tout moment au traitement de vos données à des fins de prospection.</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse dédiée aux données personnelles figurant dans nos mentions légales.
            </p>
          </LegalSection>

          <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <h3 className="text-lg font-bold text-blue-900 mb-2">Note importante sur l'affiliation</h3>
            <p className="text-blue-800 text-sm">
              UNMAXDECASH contient des liens vers des sites tiers (casinos en ligne). Une fois que vous quittez notre site, nous n'avons aucun contrôle sur la politique de confidentialité de ces plateformes tierces. Nous vous invitons à consulter la politique de confidentialité de chaque casino avant de vous inscrire.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <Newsletter />
      </div>
    </main>
  );
}

export default PolitiqueConfidentialitePage;