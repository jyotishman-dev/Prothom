"use client";

import { cn } from "@workspace/ui/lib/utils";
import { type ReactNode, useState } from "react";

interface Tab {
  id: string;
  label: string;
  panel: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
  className?: string;
}

export function Tabs({ tabs, defaultTabId, className }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTabId ?? tabs[0]?.id);

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const idx = tabs.findIndex((t) => t.id === activeId);
    if (e.key === "ArrowRight") setActiveId(tabs[(idx + 1) % tabs.length].id);
    else if (e.key === "ArrowLeft") setActiveId(tabs[(idx - 1 + tabs.length) % tabs.length].id);
    else if (e.key === "Home") setActiveId(tabs[0].id);
    else if (e.key === "End") setActiveId(tabs[tabs.length - 1].id);
  };

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <div role="tablist" aria-orientation="horizontal" className="flex gap-0 border-b border-stone-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeId === tab.id}
            aria-controls={`panel-${tab.id}`}
            tabIndex={activeId === tab.id ? 0 : -1}
            onClick={() => setActiveId(tab.id)}
            onKeyDown={onKeyDown}
            className={cn(
              "px-4 py-2.5 text-sm font-medium border-b-2 transition-colors",
              activeId === tab.id
                ? "border-ink text-ink"
                : "border-transparent text-stone-500 hover:text-ink"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={activeId !== tab.id}
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
