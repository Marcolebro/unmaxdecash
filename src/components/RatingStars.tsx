import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
  showValue?: boolean;
}

/**
 * Composant RatingStars - Affiche une note sous forme d'étoiles
 * Utilise un système de remplissage partiel pour les demi-étoiles
 */
export const RatingStars = ({
  rating,
  maxRating = 5,
  size = 16,
  className,
  showValue = false,
}: RatingStarsProps) => {
  // Sécurisation de la note entre 0 et le max
  const safeRating = Math.min(Math.max(rating, 0), maxRating);
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.25 && safeRating % 1 < 0.75;
  const isAlmostFull = safeRating % 1 >= 0.75;
  
  // Ajustement des comptes pour l'affichage
  const displayFullStars = isAlmostFull ? fullStars + 1 : fullStars;
  const displayHalfStar = !isAlmostFull && hasHalfStar;
  const emptyStars = Math.max(0, maxRating - displayFullStars - (displayHalfStar ? 1 : 0));

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div 
        className="flex items-center gap-0.5" 
        role="img" 
        aria-label={`Note de ${rating} sur ${maxRating}`}
      >
        {/* Étoiles pleines */}
        {(Array.from({ length: displayFullStars }) || []).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className="fill-yellow-400 text-yellow-400 transition-transform hover:scale-110"
          />
        ))}

        {/* Demi-étoile (Logique personnalisée pour un rendu précis) */}
        {displayHalfStar && (
          <div className="relative" style={{ width: size, height: size }}>
            <Star
              size={size}
              className="absolute inset-0 text-gray-200 fill-gray-200"
            />
            <div className="absolute inset-0 overflow-hidden w-[50%]">
              <Star
                size={size}
                className="fill-yellow-400 text-yellow-400"
              />
            </div>
          </div>
        )}

        {/* Étoiles vides */}
        {(Array.from({ length: emptyStars }) || []).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={size}
            className="fill-gray-200 text-gray-200"
          />
        ))}
      </div>

      {showValue && (
        <span className="text-sm font-bold text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
          {rating.toLocaleString('fr-FR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}
        </span>
      )}
    </div>
  );
};