import { formatINR } from "@/lib/utils/format";

export function PriceFilter({
  minPrice,
  maxPrice,
  onChange,
}: {
  minPrice?: number;
  maxPrice?: number;
  onChange: (range: { minPrice?: number; maxPrice?: number }) => void;
}) {
  const ranges = [
    { label: "All Prices", min: undefined, max: undefined },
    { label: "Under ₹1,000", min: 0, max: 1000 },
    { label: "₹1,000 - ₹5,000", min: 1000, max: 5000 },
    { label: "₹5,000 - ₹20,000", min: 5000, max: 20000 },
    { label: "Above ₹20,000", min: 20000, max: undefined },
  ];

  return (
    <div className="flex flex-wrap gap-1.5">
      {ranges.map((r, i) => {
        const isSelected = minPrice === r.min && maxPrice === r.max;
        return (
          <button
            key={i}
            onClick={() => onChange({ minPrice: r.min, maxPrice: r.max })}
            className={`px-3 py-1 text-xs rounded-md border transition-colors ${
              isSelected
                ? "bg-tea-green border-emerald-300 text-stone-900 font-medium"
                : "bg-white border-stone-200 text-stone-600 hover:bg-stone-50"
            }`}
          >
            {r.label}
          </button>
        );
      })}
    </div>
  );
}
