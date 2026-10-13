import { z } from "zod";

export const phoneSchema = z.object({
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be exactly 6 digits"),
});

export const signupSchema = z.object({
  phone: z.string().regex(/^[6-9]\d{9}$/),
  businessName: z.string().min(2, "Business name is required"),
});

export type PhoneFormData = z.infer<typeof phoneSchema>;
export type OtpFormData = z.infer<typeof otpSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
