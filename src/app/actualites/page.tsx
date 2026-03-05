import { Metadata } from "next";
import { getAllArticles } from "@/lib/articles";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { Newspaper, TrendingUp, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Actualités Gambling : Suivez les Tendances du Casino en Ligne | UNMAXDECASH",
  description: "Restez informé des dernières actualités du monde du gambling : nouvelles régulations, lancements de jeux, tendances du marché et scoops sur les casinos en ligne.",
  openGraph: {
    title: "Actualités Gambling : Suivez les Tendances du Casino en Ligne",
    description: "Toute l'actualité chaude du casino en ligne et des jeux d'argent en France.",
    type: "website",
  },
};

interface ArticleGridProps {
  articles: any[];
}

function ArticleGrid({ articles }: ArticleGridProps) {
  if (!articles || articles.length === 0) {
    return (
      <div className="py-20 text-center">
        <Newspaper className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-500 text-lg">Aucune actualité n'est disponible pour le moment.</p>
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

export default async function ActualitesPage() {
  const allArticles = await getAllArticles();
  
  // Filtrer pour ne garder que les articles de la catégorie "Actualités" 
  // ou afficher les plus récents si la catégorie n'est pas strictement définie
  const newsArticles = (allArticles || [])
    .filter(article => 
      article.category?.toLowerCase() === "actualités" || 
      article.category?.toLowerCase() === "news" ||
      article.tags?.includes("actualité")
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Actualités Gambling - UNMAXDECASH",
    "description": "Suivez les dernières tendances et nouveautés du monde du casino en ligne.",
    "publisher": {
      "@type": "Organization",
      "name": "UNMAXDECASH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://unmaxdecash.com/logo.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-12 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: "Accueil", href: "/" },
              { label: "Actualités", href: "/actualites" }
            ]} 
          />
          
          <div className="mt-8 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              <TrendingUp size={16} />
              <span>Tendances & Marché</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Actualités Gambling : L'essentiel du Casino en Ligne
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Décryptages, nouvelles régulations, lancements de machines à sous et scoops sur les opérateurs. Ne manquez aucune information stratégique pour vos sessions de jeu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Articles List */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold font-heading flex items-center gap-3">
                  <Calendar className="text-blue-600" />
                  Dernières publications
                </h2>
                <span className="text-sm text-gray-500 font-medium bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm">
                  {newsArticles.length} article{newsArticles.length > 1 ? 's' : ''} trouvé{newsArticles.length > 1 ? 's' : ''}
                </span>
              </div>

              <ArticleGrid articles={newsArticles} />
            </div>

            {/* Sidebar (Optional) */}
            <aside className="lg:w-80 shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Newsletter Card */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold font-heading mb-4">Alerte Info</h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Recevez en priorité les alertes sur les nouveaux casinos et les bonus flash directement dans votre boîte mail.
                  </p>
                  <Newsletter />
                </div>

                {/* Categories filter or popular tags could go here */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-2xl text-white shadow-lg">
                  <h3 className="font-bold text-lg mb-3">Guide de survie</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Nouveau dans le monde du gambling ? Consultez nos guides pour débutants.
                  </p>
                  <a 
                    href="/guides" 
                    className="inline-block w-full text-center py-3 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Explorer les guides
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ne manquez aucune opportunité
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                Le monde du casino en ligne évolue vite. Rejoignez notre communauté de plus de 5 000 joueurs pour rester à la pointe des meilleures offres.
              </p>
              <div className="max-w-md mx-auto">
                <Newsletter />
              </div>
              <p className="mt-6 text-xs text-gray-500">
                Garanti sans spam. Désinscription possible à tout moment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}