"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signupSchema } from "@/lib/validators/auth";
import { authService } from "@/services";
import { showToast } from "@/components/ui/Toast";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { DEMO_OTP } from "@/lib/config/site";

export default function SignupPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"details" | "otp">("details");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleNext = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const val = signupSchema.safeParse({ phone, businessName });
    if (!val.success) {
      setError(val.error.issues[0]?.message || "Please fill all fields accurately");
      return;
    }

    setLoading(true);
    try {
      await authService.sendOtp(phone);
      setStep("otp");
      showToast(`Verification code sent! Demo OTP: ${DEMO_OTP}`, "success");
    } catch {
      showToast("Failed to initiate verification", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (otp !== DEMO_OTP) {
      setError(`Invalid verification code. Enter: ${DEMO_OTP}`);
      return;
    }

    setLoading(true);
    try {
      const user = await authService.signup(phone, businessName, otp);
      if (!user) {
        setError("Registration could not be completed.");
        return;
      }
      showToast("Listing registered successfully! Welcome.", "success");
      router.push("/dashboard");
    } catch {
      showToast("Error creating account", "error");
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
            Register Your Business
          </h1>
          <p className="text-xs text-stone-500">
            Join Assam's verified business directory and unlock monthly auction bidding.
          </p>
        </div>

        {step === "details" ? (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Business / Enterprise Name
              </label>
              <Input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="e.g. Brahmaputra Eco Stays"
                className="text-sm font-medium"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Owner Mobile Number
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
                  required
                />
              </div>
            </div>

            {error && <p className="text-xs text-gamosa-red">{error}</p>}

            <Button
              type="submit"
              isDisabled={loading}
              className="w-full bg-gamosa-red hover:bg-gamosa-red/90 text-white font-medium text-xs"
            >
              {loading ? "Sending..." : "Proceed to Verify →"}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleComplete} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Enter OTP for {phone}
              </label>
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
              {loading ? "Creating Account..." : "Confirm & Access Dashboard"}
            </Button>
          </form>
        )}

        <div className="pt-4 border-t border-stone-100 text-center text-xs text-stone-500">
          Already registered?{" "}
          <Link href="/login" className="text-gamosa-red font-semibold hover:underline">
            Log in here
          </Link>
        </div>
      </div>
    </div>
  );
}
