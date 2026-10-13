"use client";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-paper">
      <p className="text-gamosa-red text-sm font-medium uppercase tracking-widest mb-4">Error</p>
      <h2 className="text-3xl font-bold text-ink mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Something went wrong
      </h2>
      <p className="text-stone-500 text-base mb-8 text-center max-w-md">
        {error.message || "An unexpected error occurred. Please try again."}
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-ink text-paper text-sm font-medium rounded-[5px] hover:bg-stone-900 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
