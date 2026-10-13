import { cn } from "@/lib/utils/cn";

export function GamosaDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("w-full h-1.5 gamosa-stripe shadow-xs", className)}
    />
  );
}
