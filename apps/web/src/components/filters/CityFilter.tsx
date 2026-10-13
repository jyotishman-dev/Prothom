import { CITIES } from "@/lib/config/site";
import type { CitySlug } from "@/types";

export function CityFilter({
  selectedCity,
  onChange,
}: {
  selectedCity?: CitySlug | "";
  onChange: (city: CitySlug | "") => void;
}) {
  const cityEntries = Object.entries(CITIES) as [CitySlug, { label: string; district: string }][];

  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
      <button
        onClick={() => onChange("")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full shrink-0 transition-colors ${
          !selectedCity
            ? "bg-ink text-white"
            : "bg-stone-100 text-stone-600 hover:bg-stone-200"
        }`}
      >
        All Assam
      </button>

      {cityEntries.map(([slug, c]) => (
        <button
          key={slug}
          onClick={() => onChange(slug)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full shrink-0 transition-colors ${
            selectedCity === slug
              ? "bg-ink text-white"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
