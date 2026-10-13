import { useCountdown } from "@/hooks/useCountdown";

export function AuctionCountdown({ endDate }: { endDate: string }) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(endDate);

  if (isExpired) {
    return (
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-xs font-semibold">
        <span>●</span> Auction Closed
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
      <span className="animate-pulse text-amber-600 font-bold">⏱ Window Closes:</span>
      <div className="flex gap-1 font-mono font-bold">
        <span>{days}d</span>:<span>{hours}h</span>:<span>{minutes}m</span>:<span>{seconds}s</span>
      </div>
    </div>
  );
}
