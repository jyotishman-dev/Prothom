export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-stone-200 border-t-tea-green rounded-full animate-spin" />
        <p className="text-stone-500 text-sm">Loading…</p>
      </div>
    </div>
  );
}
