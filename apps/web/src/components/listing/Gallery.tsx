"use client";

import Image from "next/image";
import { useState } from "react";

export function Gallery({ images, title }: { images: string[]; title: string }) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-3">
      {/* Main photo */}
      <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden border border-stone-200 bg-stone-100">
        <Image
          src={images[selectedIdx]}
          alt={`${title} photo ${selectedIdx + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover transition-all"
        />
      </div>

      {/* Thumbnails row */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelectedIdx(i)}
              className={`relative w-20 aspect-16/10 rounded-md overflow-hidden shrink-0 border-2 transition-all ${
                selectedIdx === i
                  ? "border-gamosa-red ring-1 ring-gamosa-red"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${title} preview ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
