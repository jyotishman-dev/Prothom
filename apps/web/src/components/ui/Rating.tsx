import { cn } from "@workspace/ui/lib/utils";

export interface RatingProps {
  value?: number;
  rating?: number;
  max?: number;
  showCount?: number;
  reviewCount?: number;
  size?: "sm" | "md";
  className?: string;
}

export function Rating({
  value,
  rating,
  max = 5,
  showCount,
  reviewCount,
  size = "md",
  className,
}: RatingProps) {
  const actualValue = value ?? rating ?? 0;
  const actualCount = showCount ?? reviewCount;
  const filled = Math.round(actualValue);
  const starSize = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <span className="inline-flex gap-0.5" aria-label={`${actualValue} out of ${max} stars`}>
        {Array.from({ length: max }).map((_, i) => (
          <svg
            key={i}
            className={cn(starSize, i < filled ? "text-muted-gold fill-current" : "text-stone-200 fill-current")}
            viewBox="0 0 16 16"
            aria-hidden="true"
          >
            <path d="M8 1l2.165 4.385L15 6.111l-3.5 3.41.826 4.81L8 12.185l-4.326 2.146.826-4.81L1 6.111l4.835-.726z" />
          </svg>
        ))}
      </span>
      <span className={cn("text-stone-600 font-medium", size === "sm" ? "text-xs" : "text-sm")}>
        {actualValue.toFixed(1)}
      </span>
      {actualCount !== undefined && (
        <span className={cn("text-stone-400", size === "sm" ? "text-xs" : "text-sm")}>
          ({actualCount})
        </span>
      )}
    </span>
  );
}
