import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { cn, formatDate } from "@/lib/utils";
import { ArticleMeta } from "@/lib/articles";

interface ArticleCardProps {
  article: ArticleMeta;
  className?: string;
  priority?: boolean;
}

export const ArticleCard = ({ article, className, priority = false }: ArticleCardProps) => {
  const {
    slug,
    title,
    date,
    category,
    meta_description,
    author,
    image,
    tags
  } = article;

  return (
    <article 
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5",
        className
      )}
    >
      {/* Image Container */}
      <Link 
        href={`/article/${slug}`}
        className="relative aspect-video w-full overflow-hidden"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-100">
            <Tag className="h-10 w-10 text-slate-300" />
          </div>
        )}
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold tracking-wide text-white shadow-sm">
              {category}
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* Meta Info */}
        <div className="mb-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
          {date && (
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={date}>{formatDate(date)}</time>
            </div>
          )}
          {author && (
            <div className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5" />
              <span>{author}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <Link href={`/article/${slug}`} className="group/title">
          <h3 className="mb-3 font-heading text-xl font-bold leading-tight text-slate-900 transition-colors group-hover/title:text-blue-600">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
          {meta_description}
        </p>

        {/* Footer Card */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50">
          <Link 
            href={`/article/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
          >
            Lire la suite
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          {/* Tags (optional display of first tag) */}
          {tags && tags.length > 0 && (
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              #{tags[0]}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};