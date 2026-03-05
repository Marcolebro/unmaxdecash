import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface AffiliateCTAProps {
  slug: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  fullWidth?: boolean;
  showIcon?: boolean;
}

/**
 * Composant de Call-to-Action pour l'affiliation.
 * Redirige vers la route interne /go/[slug] qui gère le tracking et la redirection finale.
 */
export const AffiliateCTA = ({
  slug,
  label = "Profiter de l'offre",
  variant = "primary",
  size = "md",
  className = "",
  fullWidth = false,
  showIcon = true,
}: AffiliateCTAProps) => {
  // Styles de base pour les boutons
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl gap-2 text-center select-none active:scale-[0.98]";

  // Définition des variantes de couleurs basées sur la charte graphique
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
    ghost: "text-blue-600 hover:bg-blue-50/50 underline-offset-4 hover:underline",
  };

  // Définition des tailles
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4.5 text-lg md:text-xl",
  };

  // Taille de l'icône en fonction de la taille du bouton
  const iconSize = size === "sm" ? 16 : size === "lg" ? 22 : 18;

  return (
    <Link
      href={`/go/${slug}`}
      target="_blank"
      rel="nofollow sponsored"
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth ? "w-full flex" : "w-auto",
        className
      )}
      aria-label={`${label} (ouvre un nouvel onglet)`}
    >
      <span className="truncate">{label}</span>
      {showIcon && (
        <ExternalLink 
          size={iconSize} 
          className={cn(
            "shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            variant === "ghost" ? "text-blue-600/70" : "text-white/90"
          )} 
        />
      )}
    </Link>
  );
};