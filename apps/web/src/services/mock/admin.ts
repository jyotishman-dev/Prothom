import { LISTINGS } from "@/data/listings";
import { DEMO_COMPLAINTS } from "@/data/users";
import type { Listing, Complaint } from "@/types";
import type { AdminService } from "../types";

const delay = () => new Promise<void>((r) => setTimeout(r, 300));

export const mockAdminService: AdminService = {
  async getVerificationQueue(): Promise<Listing[]> {
    await delay();
    return LISTINGS.filter((l) => !l.verified);
  },

  async verifyListing(id: string, approved: boolean): Promise<Listing> {
    await delay();
    const listing = LISTINGS.find((l) => l.id === id);
    if (!listing) throw new Error("Listing not found");
    listing.verified = approved;
    listing.verifiedAt = approved ? new Date().toISOString() : null;
    return { ...listing };
  },

  async getComplaints(): Promise<Complaint[]> {
    await delay();
    return [...DEMO_COMPLAINTS];
  },

  async handleComplaint(id: string, action: "warn" | "remove-rank" | "ban"): Promise<Complaint> {
    await delay();
    const complaint = DEMO_COMPLAINTS.find((c) => c.id === id);
    if (!complaint) throw new Error("Complaint not found");
    complaint.status = "resolved";
    return { ...complaint };
  },
};
