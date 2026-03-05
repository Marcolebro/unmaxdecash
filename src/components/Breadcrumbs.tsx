import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs = ({ items, className }: BreadcrumbsProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center py-4 text-sm overflow-x-auto no-scrollbar", className)}
    >
      <ol className="flex items-center space-x-1 md:space-x-2 whitespace-nowrap">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-slate-500 hover:text-blue-600 transition-colors flex items-center"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Accueil</span>
          </Link>
        </li>

        {(items || []).map((item, index) => {
          const isLast = index === (items || []).length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-slate-400 mx-1 flex-shrink-0" />
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <span 
                  className="text-slate-900 font-semibold truncate max-w-[150px] md:max-w-[300px]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://unmaxdecash.com"
              },
              ...(items || []).map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.label,
                "item": item.href ? `https://unmaxdecash.com${item.href}` : undefined,
              })),
            ],
          }),
        }}
      />
    </nav>
  );
};