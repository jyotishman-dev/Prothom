"use client";

import { useState } from "react";
import type { Listing } from "@/types";
import { Button } from "@workspace/ui/components/button";
import { showToast } from "@/components/ui/Toast";

export function VerificationTable({ initialQueue }: { initialQueue: Listing[] }) {
  const [queue, setQueue] = useState<Listing[]>(initialQueue);
  const [actioningId, setActioningId] = useState<string | null>(null);

  const handleAction = async (id: string, approved: boolean) => {
    setActioningId(id);
    try {
      const { adminService } = await import("@/services");
      await adminService.verifyListing(id, approved);
      setQueue((prev) => prev.filter((item) => item.id !== id));
      showToast(approved ? "Listing verified and approved!" : "Listing verification rejected.", "success");
    } catch {
      showToast("Operation failed.", "error");
    } finally {
      setActioningId(null);
    }
  };

  if (queue.length === 0) {
    return (
      <div className="rounded-xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-500">
        🎉 Verification queue is empty! All submitted businesses have been reviewed.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
      <table className="w-full text-left text-xs">
        <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
          <tr>
            <th className="p-3.5">Business</th>
            <th className="p-3.5">Category</th>
            <th className="p-3.5">City</th>
            <th className="p-3.5">Phone</th>
            <th className="p-3.5 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {queue.map((item) => (
            <tr key={item.id} className="hover:bg-stone-50/50">
              <td className="p-3.5 font-medium text-ink">
                <div>{item.name}</div>
                <div className="text-[11px] text-stone-400 font-normal">{item.address}</div>
              </td>
              <td className="p-3.5 capitalize text-stone-600">{item.category.replace("-", " ")}</td>
              <td className="p-3.5 capitalize text-stone-600">{item.city}</td>
              <td className="p-3.5 font-mono text-stone-600">{item.phone}</td>
              <td className="p-3.5 text-right space-x-2">
                <Button
                  size="sm"
                  isDisabled={actioningId === item.id}
                  onPress={() => handleAction(item.id, true)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs h-7 px-2.5"
                >
                  Verify
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  isDisabled={actioningId === item.id}
                  onPress={() => handleAction(item.id, false)}
                  className="text-gamosa-red border-red-200 hover:bg-red-50 text-xs h-7 px-2.5"
                >
                  Reject
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
