import { adminService } from "@/services";
import { ComplaintTable } from "@/components/admin/ComplaintTable";

export const metadata = {
  title: "Admin - User Complaints",
};

export default async function AdminComplaintsPage() {
  const complaints = await adminService.getComplaints();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Grievances & Moderation Reports ({complaints.length})
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Grievances directly affect the 55% quality score component (-0.2 penalty per violation).
        </p>
      </div>

      <ComplaintTable initialComplaints={complaints} />
    </div>
  );
}
