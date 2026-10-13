import { adminService } from "@/services";
import { VerificationTable } from "@/components/admin/VerificationTable";

export const metadata = {
  title: "Admin - Verification Queue",
};

export default async function AdminVerificationPage() {
  const queue = await adminService.getVerificationQueue();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Pending Business Verifications ({queue.length})
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Review business credentials and verify authenticity before awarding the green badge.
        </p>
      </div>

      <VerificationTable initialQueue={queue} />
    </div>
  );
}
