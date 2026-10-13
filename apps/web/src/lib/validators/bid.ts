import { z } from "zod";

export const bidSchema = z.object({
  amount: z
    .number()
    .min(1000, { message: "Minimum bid is ₹1,000" })
    .max(10000, { message: "Maximum bid is ₹10,000" }),
});

export type BidFormData = z.infer<typeof bidSchema>;
