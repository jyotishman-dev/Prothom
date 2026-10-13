"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@workspace/ui/lib/utils";

export interface ToastOptions {
  message: string;
  durationMs?: number;
  variant?: "default" | "success" | "error";
}

type ToastListener = (t: ToastOptions) => void;
const listeners = new Set<ToastListener>();

export function showToast(
  messageOrOptions: string | ToastOptions,
  variant?: "default" | "success" | "error"
) {
  const options: ToastOptions =
    typeof messageOrOptions === "string"
      ? { message: messageOrOptions, variant: variant || "default" }
      : messageOrOptions;
  listeners.forEach((fn) => fn(options));
}

export function ToastContainer() {
  const [toasts, setToasts] = useState<(ToastOptions & { id: number })[]>([]);
  const nextId = useCallback(() => Date.now() + Math.random(), []);

  useEffect(() => {
    const handler: ToastListener = (t) => {
      setToasts((prev) => [...prev, { ...t, id: nextId() }]);
    };
    listeners.add(handler);
    return () => {
      listeners.delete(handler);
    };
  }, [nextId]);

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((t) => (
        <ToastItem
          key={t.id}
          toast={t}
          onDone={() => setToasts((s) => s.filter((x) => x.id !== t.id))}
        />
      ))}
    </div>
  );
}

function ToastItem({ toast, onDone }: { toast: ToastOptions; onDone: () => void }) {
  useEffect(() => {
    const id = setTimeout(onDone, toast.durationMs ?? 4000);
    return () => clearTimeout(id);
  }, [toast.durationMs, onDone]);

  const bg =
    toast.variant === "success"
      ? "bg-tea-green text-stone-900 border border-emerald-300"
      : toast.variant === "error"
      ? "bg-gamosa-red text-white"
      : "bg-ink text-paper";

  return (
    <div
      className={cn(
        "px-4 py-3 rounded-[5px] text-sm pointer-events-auto shadow-md font-medium",
        bg
      )}
    >
      {toast.message}
    </div>
  );
}
