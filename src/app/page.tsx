import { Metadata } from "next";
import Link from "next/link";
import { Shield, Trophy, Zap, Gift, ChevronRight, Star, CheckCircle2 } from "lucide-react";
import { getAllProducts } from "@/lib/products";
import { getAllArticles } from "@/lib/articles";
import { ProductCard } from "@/components/ProductCard";
import { ArticleCard } from "@/components/ArticleCard";
import { RatingStars } from "@/components/RatingStars";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { Badge } from "@/components/Badge";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "UNMAXDECASH - Comparatif Meilleurs Casinos en Ligne & Bonus 2024",
  description: "Découvrez les meilleurs casinos en ligne fiables, des bonus exclusifs sans condition de mise et nos guides experts pour maximiser vos gains.",
  alternates: {
    canonical: "https://unmaxdecash.com",
  },
};

interface HeroProps {
  title: string;
  subtitle: string;
}

function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
      <div className="container relative mx-auto px-4 text-center">
        <Badge className="mb-6 bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1">
          🔥 Les meilleures offres de Mars 2024
        </Badge>
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl font-heading">
          {title}
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
          {subtitle}
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/casinos"
            className="w-full rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] sm:w-auto"
          >
            Voir le classement complet
          </Link>
          <Link
            href="/bonus"
            className="w-full rounded-full border border-slate-700 bg-slate-900/50 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-slate-800 sm:w-auto"
          >
            Bonus sans dépôt
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Shield, text: "Casinos Certifiés" },
    { icon: Zap, text: "Retraits Rapides" },
    { icon: Trophy, text: "Bonus Exclusifs" },
    { icon: CheckCircle2, text: "Jeux Équitables" },
  ];

  return (
    <div className="border-y border-slate-800 bg-slate-900/50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item, i) => (
            <div key={i} className="flex items-center justify-center gap-3 text-slate-300">
              <item.icon className="h-5 w-5 text-emerald-500" />
              <span className="text-sm font-semibold uppercase tracking-wider md:text-base">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

async function TopRankingTable() {
  const products = await getAllProducts();
  const topCasinos = products?.slice(0, 5) || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl font-heading">
            Top 5 des Casinos les plus Fiables
          </h2>
          <p className="text-slate-400">Classement basé sur la sécurité, les bonus et la rapidité des paiements.</p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 shadow-xl">
          <div className="hidden grid-cols-5 border-b border-slate-800 bg-slate-800/50 p-6 text-sm font-bold uppercase tracking-wider text-slate-400 md:grid">
            <div className="col-span-2">Plateforme</div>
            <div className="text-center">Note</div>
            <div className="text-center">Offre de Bienvenue</div>
            <div className="text-right">Action</div>
          </div>

          <div className="divide-y divide-slate-800">
            {topCasinos.map((casino, index) => (
              <div
                key={casino.slug}
                className="group grid grid-cols-1 items-center p-6 transition-colors hover:bg-slate-800/30 md:grid-cols-5"
              >
                <div className="col-span-2 mb-4 flex items-center gap-4 md:mb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-500 font-bold">
                    #{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{casino.name}</h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {casino.pros?.slice(0, 1).map((pro) => (
                        <span key={pro} className="text-xs text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> {pro}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex flex-col items-center justify-center md:mb-0">
                  <RatingStars rating={casino.rating} />
                  <span className="mt-1 text-xs font-bold text-slate-500">{casino.rating}/5</span>
                </div>

                <div className="mb-6 text-center md:mb-0">
                  <p className="text-sm font-medium text-slate-300 md:text-base">
                    {casino.bonus}
                  </p>
                </div>

                <div className="flex justify-end">
                  <AffiliateCTA
                    slug={casino.affiliate_slug}
                    className="w-full md:w-auto"
                  >
                    Visiter
                  </AffiliateCTA>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

async function FeaturedBonuses() {
  const products = await getAllProducts();
  const bonusCasinos = products?.filter(p => p.category === "Bonus").slice(0, 3) || [];

  return (
    <section className="bg-slate-900/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl font-heading">
              Les Meilleurs Bonus du Moment
            </h2>
            <p className="text-slate-400">
              Profitez d&apos;offres exclusives négociées pour vous. Free spins, bonus sans wager et packs de bienvenue généreux.
            </p>
          </div>
          <Link href="/bonus" className="flex items-center gap-2 font-bold text-blue-500 hover:text-blue-400">
            Voir tous les bonus <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {bonusCasinos.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

async function LatestNewsSection() {
  const articles = await getAllArticles();
  const recentArticles = articles?.slice(0, 4) || [];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl font-heading">
            Guides & Actualités Gambling
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Apprenez les meilleures stratégies et restez informé des dernières régulations et nouveautés du monde du casino en ligne.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {recentArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 font-bold text-white transition-colors hover:bg-slate-800"
          >
            Découvrir tous nos guides <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SEOContent() {
  return (
    <section className="border-t border-slate-800 py-16">
      <div className="container mx-auto px-4">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-white">Pourquoi choisir UNMAXDECASH pour vos jeux de casino ?</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-slate-400 leading-relaxed">
                Le monde du casino en ligne peut être complexe et parfois risqué. Chez <strong>UNMAXDECASH</strong>, notre mission est de filtrer le marché pour ne vous proposer que le meilleur. Chaque plateforme listée sur notre site subit une batterie de tests rigoureux : licence de jeu valide, équité des algorithmes (RNG), rapidité des paiements et qualité du support client.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Nous mettons un point d&apos;honneur à dénicher des <strong>bonus sans condition de mise (no wager)</strong>, permettant aux joueurs de retirer leurs gains immédiatement sans avoir à rejouer le bonus des dizaines de fois.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/50 p-8 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className="text-emerald-500" /> Jeu Responsable
              </h3>
              <p className="text-sm text-slate-400 italic">
                Le jeu doit rester un plaisir. Nous soutenons activement le jeu responsable. Si vous sentez que vous perdez le contrôle, n&apos;hésitez pas à consulter des organismes d&apos;aide. Jouer comporte des risques : endettement, dépendance... Appelez le 09 74 75 13 13 (appel non surtaxé).
              </p>
              <div className="mt-6 flex items-center gap-4 opacity-50 grayscale">
                <span className="text-2xl font-black text-white border-2 border-white rounded-full h-10 w-10 flex items-center justify-center">18+</span>
                <span className="font-bold text-white uppercase tracking-tighter">Secure RNG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "UNMAXDECASH",
    "url": "https://unmaxdecash.com",
    "description": "Comparatif des meilleurs casinos en ligne et bonus exclusifs.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://unmaxdecash.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Hero 
        title="Maximisez vos gains sur les meilleurs casinos" 
        subtitle="Comparatifs impartiaux, bonus exclusifs et guides stratégiques pour jouer en toute sécurité."
      />
      
      <TrustBar />
      
      <TopRankingTable />
      
      <FeaturedBonuses />
      
      <LatestNewsSection />
      
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
      
      <SEOContent />
    </main>
  );
}