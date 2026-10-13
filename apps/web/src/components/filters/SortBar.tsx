export type SortOption = "rank" | "rating" | "price_asc" | "price_desc";

export function SortBar({
  currentSort = "rank",
  onChange,
  totalResults,
}: {
  currentSort?: SortOption;
  onChange: (sort: SortOption) => void;
  totalResults?: number;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 border-b border-stone-200">
      <div className="text-xs text-stone-500">
        {totalResults !== undefined && (
          <span>Showing <strong className="text-ink">{totalResults}</strong> businesses</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <label className="text-xs text-stone-500 whitespace-nowrap">Sort by:</label>
        <select
          value={currentSort}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="text-xs bg-white border border-stone-200 rounded-md py-1 px-2.5 text-stone-700 focus:border-ink focus:outline-hidden"
        >
          <option value="rank">Recommended & Rank</option>
          <option value="rating">Highest Rated</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
}
