import Link from "next/link";
import Image from "next/image";
import { Star, CheckCircle2, ExternalLink, ArrowRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  slug: string;
  affiliate_slug: string;
  logo: string;
  rating: number;
  bonus_text: string;
  features: string[];
  badge?: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  rank?: number;
}

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={cn(
            "fill-current",
            i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"
          )}
        />
      ))}
      <span className="ml-2 text-sm font-bold text-gray-700">{rating.toFixed(1)}</span>
    </div>
  );
};

export const ProductCard = ({ product, featured = false, rank }: ProductCardProps) => {
  if (!product) return null;

  return (
    <div 
      className={cn(
        "relative flex flex-col md:flex-row items-center gap-6 p-5 bg-white rounded-2xl border transition-all duration-300 hover:shadow-xl",
        featured ? "border-blue-500 shadow-blue-50/50 shadow-lg ring-1 ring-blue-500/20" : "border-gray-100 shadow-sm"
      )}
    >
      {/* Badge Rank / Featured */}
      {rank && (
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg border-4 border-white shadow-md z-10">
          {rank}
        </div>
      )}

      {product.badge && (
        <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm flex items-center gap-1">
          <Trophy size={12} />
          {product.badge}
        </div>
      )}

      {/* Logo Section */}
      <div className="flex-shrink-0 w-full md:w-48 aspect-video md:aspect-square relative bg-gray-50 rounded-xl overflow-hidden border border-gray-100 p-4 flex items-center justify-center">
        <Image
          src={product.logo || "/images/placeholder-casino.png"}
          alt={product.name}
          width={160}
          height={160}
          className="object-contain w-full h-full transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Info Section */}
      <div className="flex-grow space-y-3 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold font-heading text-gray-900 mb-1">
            {product.name}
          </h3>
          <RatingStars rating={product.rating} />
        </div>

        <div className="bg-blue-50 rounded-lg p-3 inline-block md:block">
          <p className="text-blue-700 font-bold text-lg md:text-xl">
            {product.bonus_text}
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.features?.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
              <span className="line-clamp-1">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Section */}
      <div className="flex flex-col w-full md:w-64 gap-3">
        <Link
          href={`/go/${product.affiliate_slug}`}
          target="_blank"
          rel="nofollow sponsored"
          className="flex items-center justify-center gap-2 w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-200 group"
        >
          <span>VOIR L'OFFRE</span>
          <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
        
        <Link
          href={`/casinos/${product.slug}`}
          className="flex items-center justify-center gap-1 w-full py-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors group"
        >
          Lire notre avis complet
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};