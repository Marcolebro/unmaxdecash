import { Metadata } from "next";
import { getAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Newsletter } from "@/components/Newsletter";
import { Badge } from "@/components/Badge";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { Gift, Zap, Info, CheckCircle2, Copy, Percent, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Meilleurs Bonus Casino 2024 : Free Spins & Offres Sans Dépôt | UNMAXDECASH",
  description: "Découvrez notre sélection exclusive des meilleurs bonus de casino en ligne. Bonus de bienvenue, free spins, et offres sans wager mis à jour quotidiennement.",
  openGraph: {
    title: "Meilleurs Bonus Casino 2024 | UNMAXDECASH",
    description: "Maximisez vos gains avec les meilleures offres de bienvenue du marché.",
    type: "website",
  },
};

interface PromoCodeCardProps {
  name: string;
  code: string;
  description: string;
  slug: string;
}

function PromoCodeCard({ name, code, description, slug }: PromoCodeCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-3 bg-blue-50 text-blue-600 rounded-bl-xl">
        <Percent className="w-5 h-5" />
      </div>
      <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{name}</h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between bg-slate-50 border border-dashed border-slate-300 rounded-lg px-4 py-2">
          <span className="font-mono font-bold text-blue-600 tracking-wider">{code}</span>
          <Copy className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>
        <AffiliateCTA slug={slug} variant="primary" className="w-full py-2 text-sm" />
      </div>
    </div>
  );
}

function BonusFAQ() {
  const faqs = [
    {
      question: "Qu'est-ce qu'un bonus de bienvenue ?",
      answer: "C'est une offre réservée aux nouveaux joueurs lors de leur inscription. Il peut s'agir d'un bonus sur dépôt (ex: 100% jusqu'à 500€) ou de tours gratuits (Free Spins)."
    },
    {
      question: "C'est quoi un 'wager' ou condition de mise ?",
      answer: "Le wager représente le nombre de fois que vous devez miser le montant du bonus avant de pouvoir retirer vos gains. Un bonus 'sans wager' permet de retirer ses gains immédiatement."
    },
    {
      question: "Comment activer un bonus de casino ?",
      answer: "La plupart des bonus s'activent automatiquement lors du premier dépôt. Certains nécessitent un code promo spécifique ou une demande auprès du support client."
    },
    {
      question: "Quels sont les avantages des Free Spins ?",
      answer: "Les Free Spins vous permettent de jouer gratuitement sur des machines à sous sélectionnées tout en ayant la possibilité de gagner de l'argent réel."
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Questions Fréquentes sur les Bonus</h2>
          <p className="text-slate-600">Tout ce qu'il faut savoir pour bien choisir et utiliser vos offres promotionnelles.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-500 shrink-0" />
                {faq.question}
              </h3>
              <p className="text-slate-600 leading-relaxed pl-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BonusGrid({ products }: { products: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {(products || []).map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}

export async function BonusPage() {
  const allProducts = await getAllProducts();
  const bonusProducts = (allProducts || []).filter(p => p.category === "Bonus" || p.rating >= 4.7);
  
  const exclusiveCodes = [
    { name: "Cresus VIP", code: "MAXCASH20", description: "20 Free Spins sans dépôt exclusifs pour les nouveaux joueurs.", slug: "cresus-casino" },
    { name: "Winoui Special", code: "WIN300", description: "300 Free Spins sur votre premier dépôt en utilisant ce code.", slug: "winoui-casino" },
    { name: "Madnix Lab", code: "NIX50", description: "50% de bonus supplémentaire sur votre deuxième dépôt de la semaine.", slug: "madnix-casino" }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-12 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Bonus", href: "/bonus" }]} />
          
          <div className="mt-12 max-w-3xl">
            <Badge variant="secondary" className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Mise à jour : Mars 2024
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-black mb-6 leading-tight">
              Les Meilleurs <span className="text-blue-400">Bonus de Casino</span> en Ligne
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ne jouez plus jamais sans avantage. Nous négocions pour vous les offres de bienvenue les plus généreuses, des tours gratuits et des bonus sans condition de mise.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Offres Vérifiées</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700">
                <Zap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Activation Instantanée</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700">
                <Star className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">Exclusivités UNMAXDECASH</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <Gift className="w-8 h-8" />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-slate-900">Top Offres de Bienvenue</h2>
              <p className="text-slate-500">Sélectionnées pour leur fiabilité et la clarté de leurs conditions.</p>
            </div>
          </div>

          <BonusGrid products={bonusProducts} />
        </div>
      </section>

      {/* Exclusive Codes Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Codes Promos Exclusifs</h2>
            <p className="text-slate-600">
              Utilisez ces codes lors de votre inscription pour débloquer des avantages supplémentaires introuvables ailleurs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(exclusiveCodes || []).map((promo, idx) => (
              <PromoCodeCard key={idx} {...promo} />
            ))}
          </div>
        </div>
      </section>

      {/* Guide Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">Comment bien choisir son bonus de casino ?</h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Tous les bonus ne se valent pas. Si un montant de 1000€ peut paraître attractif, il est crucial de vérifier les conditions de mise (le wager). Chez <strong>UNMAXDECASH</strong>, nous privilégions les casinos qui offrent des conditions transparentes et, dans le meilleur des cas, des bonus sans wager comme ceux de <strong>Madnix</strong> ou <strong>Viggoslots</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> À privilégier
                </h4>
                <ul className="space-y-2 text-emerald-800 text-sm">
                  <li>• Bonus sans condition de mise (No Wager)</li>
                  <li>• Free Spins sur des jeux populaires (ex: Book of Dead)</li>
                  <li>• Cashback hebdomadaire sur les pertes</li>
                  <li>• Délais de retrait rapides (moins de 24h)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
                <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" /> À surveiller
                </h4>
                <ul className="space-y-2 text-red-800 text-sm">
                  <li>• Wager supérieur à x40</li>
                  <li>• Limites de mise maximum sous bonus (souvent 5€)</li>
                  <li>• Liste de jeux interdits sous bonus</li>
                  <li>• Validité du bonus trop courte (moins de 7 jours)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BonusFAQ />

      <section className="py-20">
        <Newsletter />
      </section>
    </main>
  );
}

export default BonusPage;