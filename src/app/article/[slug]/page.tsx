import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Clock, Calendar, User, ChevronRight, ArrowRight, Share2, Bookmark } from "lucide-react"
import { getArticleBySlug, getAllArticles, getArticlesByCategory } from "@/lib/articles"
import { getAllProducts } from "@/lib/products"
import { cn, formatDate } from "@/lib/utils"
import { Breadcrumbs } from "@/components/Breadcrumbs"
import { Badge } from "@/components/Badge"
import { ArticleCard } from "@/components/ArticleCard"
import { AffiliateCTA } from "@/components/AffiliateCTA"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) return { title: "Article non trouvé - UNMAXDECASH" }

  return {
    title: `${article.meta.title} | UNMAXDECASH`,
    description: article.meta.meta_description,
    openGraph: {
      title: article.meta.title,
      description: article.meta.meta_description,
      type: "article",
      publishedTime: article.meta.date,
      authors: [article.meta.author || "L'équipe UNMAXDECASH"],
      images: article.meta.image ? [{ url: article.meta.image }] : [],
    },
  }
}

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return (articles || []).map((article) => ({
    slug: article.slug,
  }))
}

export function AuthorBox({ author }: { author?: string }) {
  return (
    <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 my-10">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
        {author?.charAt(0) || "U"}
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Rédigé par</p>
        <h3 className="text-lg font-bold text-slate-900">{author || "L'équipe UNMAXDECASH"}</h3>
        <p className="text-sm text-slate-600 mt-1">
          Expert en iGaming et stratégies de casino avec plus de 10 ans d'expérience dans l'industrie.
        </p>
      </div>
    </div>
  )
}

export function TableOfContents({ content }: { content: string }) {
  // Extraction basique des titres H2 pour le sommaire
  const lines = content.split("\n")
  const headings = lines
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", "").trim())

  if (headings.length === 0) return null

  return (
    <nav className="p-6 bg-white border border-slate-200 rounded-2xl mb-8">
      <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
        <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
        Sommaire de l'article
      </h2>
      <ul className="space-y-3">
        {headings.map((heading, index) => (
          <li key={index} className="flex items-start gap-2">
            <ChevronRight className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
            <a 
              href={`#${heading.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-")}`}
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm md:text-base"
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function StickyBonusCTA() {
  const products = getAllProducts()
  const bestProduct = products?.[0]

  if (!bestProduct) return null

  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-xl border border-slate-700">
        <Badge className="bg-emerald-500 text-white border-none mb-4">OFFRE À LA UNE</Badge>
        <h3 className="text-xl font-bold mb-2">{bestProduct.name}</h3>
        <p className="text-slate-300 text-sm mb-6">{bestProduct.bonus}</p>
        
        <div className="space-y-3 mb-6">
          {bestProduct.pros?.slice(0, 2).map((pro, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {pro}
            </div>
          ))}
        </div>

        <AffiliateCTA 
          slug={bestProduct.affiliate_slug} 
          variant="primary" 
          className="w-full justify-center py-3"
        >
          Profiter du bonus
        </AffiliateCTA>
        
        <p className="text-[10px] text-slate-500 mt-4 text-center">
          +18 | Jouer comporte des risques | Aide-info-jeu.fr
        </p>
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
        <h4 className="font-bold text-blue-900 mb-2">Besoin d'aide ?</h4>
        <p className="text-sm text-blue-800 mb-4">
          Consultez nos guides détaillés pour apprendre à maximiser vos gains en toute sécurité.
        </p>
        <Link href="/guides" className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
          Voir tous les guides <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}

export async function RelatedArticles({ category, currentSlug }: { category: string, currentSlug: string }) {
  const allRelated = await getArticlesByCategory(category)
  const filtered = (allRelated || [])
    .filter(a => a.slug !== currentSlug)
    .slice(0, 3)

  if (filtered.length === 0) return null

  return (
    <section className="mt-16 pt-16 border-t border-slate-200">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Articles similaires</h2>
        <Link href="/actualites" className="text-blue-600 font-semibold flex items-center gap-1 hover:underline">
          Tout voir <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  )
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.meta.title,
    "image": article.meta.image,
    "datePublished": article.meta.date,
    "author": {
      "@type": "Person",
      "name": article.meta.author || "L'équipe UNMAXDECASH"
    },
    "publisher": {
      "@type": "Organization",
      "name": "UNMAXDECASH",
      "logo": {
        "@type": "ImageObject",
        "url": "https://unmaxdecash.com/logo.png"
      }
    },
    "description": article.meta.meta_description
  }

  return (
    <main className="min-h-screen bg-white pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <div className="bg-slate-900 text-white pt-12 pb-20">
        <div className="container mx-auto px-4">
          <Breadcrumbs 
            items={[
              { label: article.meta.category || "Article", href: article.meta.category === "Guide" ? "/guides" : "/actualites" },
              { label: article.meta.title, href: "#" }
            ]} 
          />
          
          <div className="mt-8 max-w-4xl">
            <Badge className="bg-blue-600 text-white border-none mb-6">
              {article.meta.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold font-heading leading-tight mb-8">
              {article.meta.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-400" />
                <span>Par {article.meta.author || "L'équipe UNMAXDECASH"}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Mis à jour le {formatDate(article.meta.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>10 min de lecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Content */}
          <article className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-1 shadow-sm border border-slate-100 overflow-hidden mb-8">
              {article.meta.image && (
                <div className="relative aspect-video w-full">
                  <Image 
                    src={article.meta.image} 
                    alt={article.meta.title}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              )}
            </div>

            <TableOfContents content={article.content} />

            <div className="prose prose-slate prose-lg max-w-none 
              prose-headings:font-heading prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:scroll-mt-24
              prose-p:text-slate-600 prose-p:leading-relaxed
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-img:rounded-2xl prose-img:shadow-md
              prose-li:text-slate-600">
              <MDXRemote source={article.content} />
            </div>

            <AuthorBox author={article.meta.author} />

            <div className="flex items-center justify-between py-8 border-t border-slate-100">
              <div className="flex gap-2">
                {(article.meta.tags || []).map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Partager">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="Sauvegarder">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <StickyBonusCTA />
          </aside>
        </div>

        {/* Related Articles */}
        <RelatedArticles category={article.meta.category || "Actualité"} currentSlug={article.slug} />
      </div>
    </main>
  )
}