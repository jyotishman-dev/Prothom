import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  className,
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-xs text-stone-500 py-3", className)}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link href="/" className="hover:text-ink transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-1.5">
              <span className="text-stone-400">/</span>
              {isLast || !item.href ? (
                <span className="text-ink font-medium truncate max-w-[200px] sm:max-w-xs" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-ink transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
