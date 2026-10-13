import { formatINR } from "@/lib/utils/format";
import { Button } from "@workspace/ui/components/button";

export function ContactBar({
  phone,
  whatsapp,
  address,
  priceFrom,
}: {
  phone: string;
  whatsapp?: string;
  address: string;
  priceFrom: number;
}) {
  return (
    <div className="sticky bottom-0 sm:static bg-paper/95 backdrop-blur-md border sm:border-stone-200 border-t-stone-200 rounded-none sm:rounded-xl p-4 shadow-lg sm:shadow-xs mt-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs text-stone-500 block">Starting from</span>
          <span className="font-serif font-bold text-xl text-ink">
            {formatINR(priceFrom)}
          </span>
          <p className="text-xs text-stone-500 mt-0.5 line-clamp-1">{address}</p>
        </div>

        <div className="flex items-center gap-3">
          <a href={`tel:${phone}`} className="flex-1 sm:flex-none">
            <Button
              variant="outline"
              size="default"
              className="w-full sm:w-auto font-medium"
            >
              📞 Call
            </Button>
          </a>

          {whatsapp && (
            <a
              href={`https://wa.me/91${whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none"
            >
              <Button
                size="default"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-medium"
              >
                💬 WhatsApp
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
