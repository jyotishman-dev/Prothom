"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@workspace/ui/lib/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Accessible modal using native <dialog>.
 * Focus-trapped automatically by the browser, ESC closes.
 */
export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        // Close on backdrop click
        if (e.target === ref.current) onClose();
      }}
      className={cn(
        "p-0 m-auto rounded-md border border-stone-200 bg-paper shadow-lg",
        "backdrop:bg-stone-900/30 max-w-lg w-full",
        "open:animate-in open:fade-in-0 open:zoom-in-95",
        className
      )}
    >
      <div className="relative">
        {title && (
          <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-ink transition-colors p-1"
              aria-label="Close"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        <div className="p-6">{children}</div>
      </div>
    </dialog>
  );
}
