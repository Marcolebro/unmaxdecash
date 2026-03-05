import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Gamepad2, Trophy, Lightbulb, ChevronRight, Search } from "lucide-react";
import { getAllArticles } from "@/lib/articles";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { cn } from "@/lib/utils";

interface GuidesPageProps {
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Guides Pratiques Casino : Règles et Stratégies | UNMAXDECASH",
    description: "Devenez un expert du casino en ligne avec nos guides détaillés. Apprenez les règles du Blackjack, de la Roulette et découvrez les meilleures stratégies pour gagner.",
    openGraph: {
      title: "Guides Pratiques & Stratégies Casino | UNMAXDECASH",
      description: "Maîtrisez les jeux de casino comme un pro. Guides complets et astuces d'experts.",
      type: "website",
    },
  };
}

const CATEGORIES = [
  { name: "Tous", slug: "all", icon: BookOpen },
  { name: "Blackjack", slug: "blackjack", icon: Gamepad2 },
  { name: "Roulette", slug: "roulette", icon: Trophy },
  { name: "Machines à sous", slug: "slots", icon: Lightbulb },
  { name: "Stratégies", slug: "strategies", icon: Trophy },
];

function CategoryFilter({ activeCategory }: { activeCategory: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-10">
      {CATEGORIES.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.slug || (activeCategory === "" && cat.slug === "all");
        
        return (
          <Link
            key={cat.slug}
            href={cat.slug === "all" ? "/guides" : `/guides?category=${cat.slug}`}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-200 text-sm font-medium",
              isActive
                ? "bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-100"
                : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
            )}
          >
            <Icon size={16} />
            {cat.name}
          </Link>
        );
      })}
    </div>
  );
}

function ArticleGrid({ articles }: { articles: any[] }) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
        <div className="bg-slate-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="text-slate-500" size={24} />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">Aucun guide trouvé</h3>
        <p className="text-slate-600 max-w-md mx-auto">
          Nous n'avons pas encore d'articles dans cette catégorie. Revenez bientôt pour découvrir nos nouveaux guides !
        </p>
        <Link 
          href="/guides" 
          className="inline-block mt-6 text-blue-600 font-medium hover:underline"
        >
          Voir tous les guides
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}

export default async function GuidesPage({ searchParams }: GuidesPageProps) {
  const { category = "all" } = await searchParams;
  const allArticles = await getAllArticles();
  
  // Filtrer d'abord par la catégorie parente "Guides"
  const guides = (allArticles || []).filter(
    (article) => article.category === "Guides" || article.category === "Guide"
  );

  // Filtrer ensuite par sous-catégorie si spécifiée (via les tags ou le contenu)
  const filteredArticles = category === "all" 
    ? guides 
    : guides.filter(article => 
        article.tags?.some((tag: string) => tag.toLowerCase() === category.toLowerCase()) ||
        article.title.toLowerCase().includes(category.toLowerCase())
      );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Guides Pratiques Casino - UNMAXDECASH",
    "description": "Apprenez à mieux jouer et à comprendre les règles des différents jeux de casino.",
    "url": "https://unmaxdecash.com/guides",
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-8 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Accueil", href: "/" },
              { label: "Guides Pratiques", href: "/guides" }
            ]} 
          />
          
          <div className="mt-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading tracking-tight">
              Guides Pratiques & <span className="text-blue-600">Stratégies</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Que vous soyez débutant ou joueur chevronné, nos experts décortiquent pour vous les règles, 
              les probabilités et les meilleures techniques pour maximiser vos chances de gains sur les casinos en ligne.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            <CategoryFilter activeCategory={category} />
            
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-800">
                {category === "all" ? "Tous nos guides" : `Guides : ${CATEGORIES.find(c => c.slug === category)?.name}`}
              </h2>
              <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
                {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
              </span>
            </div>

            <ArticleGrid articles={filteredArticles} />
          </div>

          {/* Sidebar / Featured */}
          <aside className="w-full lg:w-80 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 font-heading">Besoin d'un conseil ?</h3>
              <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                Nos experts sont là pour vous aider à choisir la meilleure plateforme selon votre profil de joueur.
              </p>
              <Link 
                href="/casinos" 
                className="flex items-center justify-center w-full py-3 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-colors group"
              >
                Voir le classement
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 font-heading border-b border-slate-100 pb-3">
                Les plus consultés
              </h3>
              <div className="space-y-4">
                {(guides || []).slice(0, 4).map((guide, idx) => (
                  <Link 
                    key={guide.slug} 
                    href={`/article/${guide.slug}`}
                    className="flex gap-3 group"
                  >
                    <span className="text-2xl font-black text-slate-200 group-hover:text-blue-200 transition-colors">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">{guide.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 mt-12">
        <Newsletter />
      </section>

      {/* Quick Tips Footer */}
      <section className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-200 pt-12">
          <div className="flex gap-4">
            <div className="bg-blue-100 p-3 rounded-xl h-fit">
              <Gamepad2 className="text-blue-600" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Règles Officielles</h4>
              <p className="text-sm text-slate-600">Tous nos guides sont basés sur les règles standards internationales des jeux de casino.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-green-100 p-3 rounded-xl h-fit">
              <Trophy className="text-green-600" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Stratégies Testées</h4>
              <p className="text-sm text-slate-600">Nous testons chaque méthode pour vous fournir des conseils réalistes et applicables.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-amber-100 p-3 rounded-xl h-fit">
              <Lightbulb className="text-amber-600" size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Jeu Responsable</h4>
              <p className="text-sm text-slate-600">Le casino doit rester un plaisir. Nos guides incluent toujours des rappels sur le jeu responsable.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}