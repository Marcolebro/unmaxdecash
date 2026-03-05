import { getAllProducts } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RatingStars } from "@/components/RatingStars";
import { AffiliateCTA } from "@/components/AffiliateCTA";
import { Badge } from "@/components/Badge";
import { Newsletter } from "@/components/Newsletter";
import { cn } from "@/lib/utils";
import { 
  Check, 
  X, 
  Shield, 
  Zap, 
  Trophy, 
  Star, 
  Info, 
  ChevronRight, 
  ArrowRight,
  Filter
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Meilleurs Casinos en Ligne 2025 : Classement & Avis Fiables | UNMAXDECASH",
  description: "Découvrez notre sélection rigoureuse des meilleurs casinos en ligne. Comparatifs détaillés, bonus exclusifs sans wager et guides pour jouer en toute sécurité.",
  alternates: {
    canonical: "/casinos",
  },
};

interface Product {
  name: string;
  slug: string;
  affiliate_slug: string;
  url: string;
  bonus: string;
  rating: number;
  pros: string[];
  cons: string[];
  category: string;
}

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function CasinosPage({ searchParams }: PageProps) {
  const { category } = await searchParams;
  const allProducts = await getAllProducts();
  
  const filteredProducts = category 
    ? (allProducts || []).filter(p => p.category === category)
    : (allProducts || []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Meilleurs Casinos en Ligne 2025",
    "description": "Classement complet et avis détaillés sur les plateformes de casino les plus fiables.",
    "publisher": {
      "@type": "Organization",
      "name": "UNMAXDECASH"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <section className="bg-white border-b border-gray-200 pt-8 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Accueil", href: "/" },
              { label: "Casinos", href: "/casinos" }
            ]} 
          />
          
          <div className="mt-8 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-[Montserrat]">
              Meilleurs Casinos en Ligne <span className="text-[#3b82f6]">2025</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Naviguer dans l'univers du gambling peut être complexe. Nos experts ont testé, analysé et classé les plateformes selon des critères stricts : rapidité des retraits, générosité des bonus, sécurité des données et qualité du support client. Trouvez le casino qui vous correspond en toute confiance.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-blue-50 text-[#3b82f6] px-4 py-2 rounded-full text-sm font-semibold">
                <Shield size={18} />
                Casinos Certifiés
              </div>
              <div className="flex items-center gap-2 bg-green-50 text-[#10b981] px-4 py-2 rounded-full text-sm font-semibold">
                <Zap size={18} />
                Retraits Rapides
              </div>
              <div className="flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-semibold">
                <Trophy size={18} />
                Bonus Exclusifs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Filters */}
        <FilterBar activeCategory={category} />

        {/* Product Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Star className="text-amber-400 fill-amber-400" />
              Notre Top Sélection
            </h2>
            <span className="text-sm text-gray-500 italic">
              Mise à jour : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
            </span>
          </div>
          
          <ProductGrid products={filteredProducts} />
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <Filter className="text-[#3b82f6]" />
            Comparatif Détaillé
          </h2>
          <CasinoComparisonTable products={allProducts} />
        </div>

        {/* SEO Content Section */}
        <article className="max-w-4xl mx-auto prose prose-blue lg:prose-lg bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Comment choisissons-nous les meilleurs casinos ?</h2>
          <p>
            Pour établir ce classement, notre équipe de passionnés et d'experts du secteur passe au crible chaque plateforme pendant plusieurs semaines. Nous ne nous contentons pas de regarder l'esthétique du site ; nous testons réellement l'expérience joueur.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 my-10">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Check className="text-[#10b981]" /> La Sécurité avant tout
              </h3>
              <p className="text-gray-600 text-sm">
                Chaque casino listé possède une licence de jeu valide (Curaçao, MGA, etc.) et utilise des protocoles de cryptage SSL pour protéger vos transactions.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Check className="text-[#10b981]" /> Équité des Jeux
              </h3>
              <p className="text-gray-600 text-sm">
                Nous vérifions la présence de générateurs de nombres aléatoires (RNG) certifiés pour garantir que chaque tour de machine est 100% honnête.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">L'importance des conditions de bonus</h3>
          <p>
            Un bonus de 1000€ n'est pas forcément meilleur qu'un bonus de 200€. Pourquoi ? À cause du <strong>Wager</strong> (condition de mise). Un bonus "sans wager" comme celui de <strong>Madnix</strong> ou <strong>Cresus Casino</strong> vous permet de retirer vos gains immédiatement, ce qui représente un avantage considérable pour le joueur.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Info className="text-amber-600 shrink-0 mt-1" />
              <div>
                <p className="font-bold text-amber-900 mb-1">Attention au Jeu Responsable</p>
                <p className="text-amber-800 text-sm">
                  Le jeu doit rester un plaisir. Ne misez jamais d'argent que vous ne pouvez pas vous permettre de perdre. Si vous sentez que vous perdez le contrôle, contactez des organismes d'aide.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Newsletter />
    </div>
  );
}

// Internal Components
function FilterBar({ activeCategory }: { activeCategory?: string }) {
  const categories = [
    { label: "Tous les Casinos", value: undefined },
    { label: "Meilleurs Casinos", value: "Meilleurs Casinos" },
    { label: "Bonus Boostés", value: "Bonus" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-10">
      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider mr-2">Filtrer par :</span>
      {categories.map((cat) => (
        <Link
          key={cat.label}
          href={cat.value ? `/casinos?category=${encodeURIComponent(cat.value)}` : "/casinos"}
          className={cn(
            "px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border",
            activeCategory === cat.value || (!activeCategory && !cat.value)
              ? "bg-[#3b82f6] border-[#3b82f6] text-white shadow-md shadow-blue-200"
              : "bg-white border-gray-200 text-gray-600 hover:border-[#3b82f6] hover:text-[#3b82f6]"
          )}
        >
          {cat.label}
        </Link>
      ))}
    </div>
  );
}

function ProductGrid({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
        <p className="text-gray-500">Aucun casino ne correspond à vos critères pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div key={product.slug} className="relative group">
          {index === 0 && !product.category.includes("Bonus") && (
            <div className="absolute -top-4 left-6 z-10">
              <Badge className="bg-amber-500 text-white border-none shadow-lg px-4 py-1">
                Choix N°1
              </Badge>
            </div>
          )}
          <ProductCard {...product} />
        </div>
      ))}
    </div>
  );
}

function CasinoComparisonTable({ products }: { products: Product[] }) {
  const topCasinos = (products || []).slice(0, 5);

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase">Casino</th>
            <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase">Bonus de Bienvenue</th>
            <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase">Note</th>
            <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase">Points Forts</th>
            <th className="px-6 py-4 text-sm font-bold text-gray-700 uppercase text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {topCasinos.map((product) => (
            <tr key={product.slug} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
              <td className="px-6 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-[#3b82f6] font-bold">
                    {product.name.charAt(0)}
                  </div>
                  <span className="font-bold text-gray-900">{product.name}</span>
                </div>
              </td>
              <td className="px-6 py-6">
                <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                  {product.bonus}
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="flex flex-col gap-1">
                  <RatingStars rating={product.rating} />
                  <span className="text-xs font-bold text-gray-500">{product.rating}/5</span>
                </div>
              </td>
              <td className="px-6 py-6">
                <ul className="space-y-1">
                  {(product.pros || []).slice(0, 2).map((pro, i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-center gap-1">
                      <Check size={12} className="text-[#10b981]" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-6 text-center">
                <Link
                  href={`/go/${product.affiliate_slug}`}
                  rel="nofollow sponsored"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#3b82f6] text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors gap-2"
                >
                  Visiter
                  <ChevronRight size={16} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 bg-gray-50 text-center">
        <Link href="/casinos" className="text-sm font-bold text-[#3b82f6] hover:underline inline-flex items-center gap-2">
          Voir tout le classement <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}