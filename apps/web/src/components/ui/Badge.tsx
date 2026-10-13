import { cn } from "@workspace/ui/lib/utils";

type BadgeVariant = "default" | "verified" | "featured" | "category" | "rank" | "danger" | "warning";

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-stone-100 text-stone-700 border-stone-200",
  verified: "bg-tea-green/10 text-tea-green border-tea-green/30",
  featured: "bg-muted-gold/10 text-muted-gold border-muted-gold/30",
  category: "bg-stone-100 text-ink border-stone-200",
  rank: "bg-ink text-paper border-ink",
  danger: "bg-gamosa-red/10 text-gamosa-red border-gamosa-red/30",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "default", children, className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium border rounded-[4px] leading-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
