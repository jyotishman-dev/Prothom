import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-paper">
      <p className="text-stone-500 text-sm font-medium uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl font-bold text-ink mb-3" style={{ fontFamily: "var(--font-display)" }}>
        Page not found
      </h1>
      <p className="text-stone-500 text-base mb-8 text-center max-w-md">
        This page doesn&apos;t exist or was removed. Try searching for a business or go back home.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-ink text-paper text-sm font-medium rounded-[5px] hover:bg-stone-900 transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
