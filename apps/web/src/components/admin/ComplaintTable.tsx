"use client";

import { useState } from "react";
import type { Complaint } from "@/types";
import { Button } from "@workspace/ui/components/button";
import { showToast } from "@/components/ui/Toast";

export function ComplaintTable({ initialComplaints }: { initialComplaints: Complaint[] }) {
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);

  const handleAction = async (id: string, action: "warn" | "remove-rank" | "ban") => {
    try {
      const { adminService } = await import("@/services");
      await adminService.handleComplaint(id, action);
      setComplaints((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: "resolved" } : c))
      );
      showToast(`Action '${action}' applied successfully.`, "success");
    } catch {
      showToast("Failed to process complaint.", "error");
    }
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white shadow-xs">
      <table className="w-full text-left text-xs">
        <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold">
          <tr>
            <th className="p-3.5">ID / Reporter</th>
            <th className="p-3.5">Listing ID</th>
            <th className="p-3.5">Reason</th>
            <th className="p-3.5">Details</th>
            <th className="p-3.5">Status</th>
            <th className="p-3.5 text-right">Moderation Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stone-100">
          {complaints.map((c) => (
            <tr key={c.id} className="hover:bg-stone-50/50">
              <td className="p-3.5 font-medium text-ink">
                <div>{c.reporterName}</div>
                <div className="text-[10px] text-stone-400 font-mono">{c.id}</div>
              </td>
              <td className="p-3.5 font-mono text-stone-600">{c.listingId}</td>
              <td className="p-3.5 text-stone-800 font-medium">{c.reason}</td>
              <td className="p-3.5 text-stone-600 max-w-xs truncate" title={c.details}>
                {c.details}
              </td>
              <td className="p-3.5">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase ${
                    c.status === "pending"
                      ? "bg-amber-100 text-amber-800"
                      : c.status === "resolved"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-stone-100 text-stone-600"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="p-3.5 text-right space-x-1 whitespace-nowrap">
                {c.status === "pending" ? (
                  <>
                    <Button
                      size="sm"
                      variant="outline"
                      onPress={() => handleAction(c.id, "warn")}
                      className="text-xs h-7 px-2"
                    >
                      Warn
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onPress={() => handleAction(c.id, "remove-rank")}
                      className="text-amber-700 border-amber-200 hover:bg-amber-50 text-xs h-7 px-2"
                    >
                      De-rank
                    </Button>
                    <Button
                      size="sm"
                      onPress={() => handleAction(c.id, "ban")}
                      className="bg-gamosa-red hover:bg-gamosa-red/90 text-white text-xs h-7 px-2"
                    >
                      Suspend
                    </Button>
                  </>
                ) : (
                  <span className="text-xs text-stone-400">Handled</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
