import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent" | "success" | "warning" | "danger" | "outline" | "gold";
  size?: "sm" | "md";
  className?: string;
  icon?: LucideIcon;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  className,
  icon: Icon,
}: BadgeProps) {
  const variants = {
    default: "bg-slate-100 text-slate-700 border-slate-200",
    primary: "bg-blue-50 text-blue-700 border-blue-200",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    success: "bg-green-50 text-green-700 border-green-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    danger: "bg-red-50 text-red-700 border-red-200",
    outline: "bg-transparent border-slate-300 text-slate-600",
    gold: "bg-gradient-to-r from-amber-400 to-yellow-500 text-white border-transparent shadow-sm",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
    md: "px-2.5 py-1 text-xs font-semibold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border transition-colors duration-200",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {Icon && <Icon className={cn("mr-1", size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5")} />}
      {children}
    </span>
  );
}