import type { User, Complaint } from "@/types";

export const DEMO_OWNER: User = {
  id: "usr-001",
  name: "Rajesh Bora",
  phone: "9876543210",
  role: "owner",
  businessId: "biz-001",
};

export const DEMO_ADMIN: User = {
  id: "usr-admin",
  name: "Admin",
  phone: "9999999999",
  role: "admin",
};

export const DEMO_COMPLAINTS: Complaint[] = [
  { id: "cmp-001", listingId: "lst-007", reporterName: "Anup Saikia", reason: "Misleading information", details: "They claim Kota faculty but the teachers are all local with no Kota connection.", status: "pending", createdAt: "2026-09-28T10:00:00Z" },
  { id: "cmp-002", listingId: "lst-019", reporterName: "Ritika Das", reason: "Hygiene issues", details: "Room was not cleaned properly. Found cockroaches in the bathroom.", status: "pending", createdAt: "2026-09-25T14:30:00Z" },
  { id: "cmp-003", listingId: "lst-030", reporterName: "Manash Borah", reason: "Food quality", details: "Got food poisoning after eating momos here. Others had similar experience.", status: "resolved", createdAt: "2026-08-15T09:00:00Z" },
  { id: "cmp-004", listingId: "lst-004", reporterName: "Pallavi Gogoi", reason: "False advertising", details: "They advertise APSC results but none of their students cleared prelims this year.", status: "pending", createdAt: "2026-10-01T11:20:00Z" },
  { id: "cmp-005", listingId: "lst-036", reporterName: "Deepika Konwar", reason: "No-show", details: "Booked for bridal mehndi, artist did not show up on wedding day.", status: "dismissed", createdAt: "2026-07-20T16:00:00Z" },
];
