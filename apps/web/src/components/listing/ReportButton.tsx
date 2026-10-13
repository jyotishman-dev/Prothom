"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@workspace/ui/components/button";
import { showToast } from "@/components/ui/Toast";

export function ReportButton({ listingId, listingName }: { listingId: string; listingName: string }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reason || !details) {
      showToast("Please provide all required details", "error");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setOpen(false);
      showToast("Complaint submitted. Our moderation team will investigate.", "success");
      setReason("");
      setDetails("");
    }, 400);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-stone-400 hover:text-gamosa-red transition-colors inline-flex items-center gap-1"
      >
        <span>🚩</span> Report this listing
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Report ${listingName}`}
      >
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <p className="text-xs text-stone-500">
            Reports with evidence help protect Assamese consumers and maintain honest business rankings.
          </p>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Reason for Complaint
            </label>
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full text-xs rounded-md border border-stone-200 p-2"
              required
            >
              <option value="">Select a reason</option>
              <option value="Misleading Information">Misleading or false information</option>
              <option value="Fake Reviews">Suspected fake reviews or rating manipulation</option>
              <option value="Deficient Service">Extremely poor hygiene or deficient service</option>
              <option value="Scam / Fraud">Fraudulent business or financial misconduct</option>
              <option value="Other">Other violation</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Description / Specific Details
            </label>
            <textarea
              rows={3}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Explain the issue clearly..."
              className="w-full text-xs rounded-md border border-stone-200 p-2"
              required
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onPress={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              size="sm"
              isDisabled={submitting}
              className="bg-gamosa-red hover:bg-gamosa-red/90 text-white"
            >
              {submitting ? "Submitting..." : "Submit Report"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
