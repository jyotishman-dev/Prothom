import { Badge } from "@/components/ui/Badge";

export function SponsoredLabel({ rank }: { rank?: number | null }) {
  return (
    <div className="flex items-center gap-1.5">
      <Badge variant="rank" className="text-[10px] tracking-wide uppercase px-2 py-0.5">
        Featured Partner
      </Badge>
      {rank ? (
        <span className="text-[11px] font-semibold text-gamosa-red">
          #{rank} Ranked
        </span>
      ) : null}
    </div>
  );
}
