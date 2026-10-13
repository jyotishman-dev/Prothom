"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { phoneSchema, otpSchema } from "@/lib/validators/auth";
import { authService } from "@/services";
import { showToast } from "@/components/ui/Toast";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { DEMO_OTP } from "@/lib/config/site";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("9876543210");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const val = phoneSchema.safeParse({ phone });
    if (!val.success) {
      setError(val.error.issues[0]?.message || "Invalid phone number");
      return;
    }

    setLoading(true);
    try {
      await authService.sendOtp(phone);
      setStep("otp");
      showToast(`Demo OTP sent! Use: ${DEMO_OTP}`, "success");
    } catch {
      showToast("Failed to send OTP", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const val = otpSchema.safeParse({ otp });
    if (!val.success) {
      setError(val.error.issues[0]?.message || "Invalid OTP");
      return;
    }

    setLoading(true);
    try {
      const user = await authService.verifyOtp(phone, otp);
      if (!user) {
        setError(`Incorrect OTP. Use demo OTP: ${DEMO_OTP}`);
        return;
      }
      showToast(`Welcome back, ${user.name}!`, "success");
      if (user.role === "admin") {
        router.push("/admin/verification");
      } else {
        router.push("/dashboard");
      }
    } catch {
      showToast("Authentication failed", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full p-8 rounded-2xl border border-stone-200 bg-white shadow-sm space-y-6">
        <div className="text-center space-y-1">
          <div className="w-10 h-10 rounded-lg bg-gamosa-red text-white flex items-center justify-center font-serif text-xl font-bold mx-auto mb-3">
            ব
          </div>
          <h1 className="font-serif text-2xl font-bold text-ink">
            Business Portal Login
          </h1>
          <p className="text-xs text-stone-500">
            Sign in with your registered phone number to manage bids and listings.
          </p>
        </div>

        {step === "phone" ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs font-semibold text-stone-400">
                  +91
                </span>
                <Input
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="9876543210"
                  className="pl-11 text-sm font-medium"
                />
              </div>
              {error && <p className="text-xs text-gamosa-red mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              isDisabled={loading}
              className="w-full bg-gamosa-red hover:bg-gamosa-red/90 text-white font-medium text-xs"
            >
              {loading ? "Sending OTP..." : "Get OTP →"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-xs font-semibold text-stone-700">
                  Enter 6-Digit OTP
                </label>
                <button
                  type="button"
                  onClick={() => setStep("phone")}
                  className="text-xs text-stone-400 hover:text-ink underline"
                >
                  Change number
                </button>
              </div>
              <Input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                className="text-center tracking-widest text-base font-mono font-bold"
              />
              <p className="text-[11px] text-stone-400 mt-1">
                Demo code: <strong className="text-stone-700 font-mono">{DEMO_OTP}</strong>
              </p>
              {error && <p className="text-xs text-gamosa-red mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              isDisabled={loading}
              className="w-full bg-ink hover:bg-ink/90 text-white font-medium text-xs"
            >
              {loading ? "Verifying..." : "Verify & Sign In"}
            </Button>
          </form>
        )}

        <div className="pt-4 border-t border-stone-100 text-center text-xs text-stone-500">
          Want to register your business?{" "}
          <Link href="/signup" className="text-gamosa-red font-semibold hover:underline">
            Claim / Register Listing
          </Link>
        </div>
      </div>
    </div>
  );
}
