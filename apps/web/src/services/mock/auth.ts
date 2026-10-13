import { DEMO_OWNER, DEMO_ADMIN } from "@/data/users";
import { DEMO_OTP } from "@/lib/config/site";
import type { User } from "@/types";
import type { AuthService } from "../types";

const delay = () => new Promise<void>((r) => setTimeout(r, 300));
let currentUser: User | null = null;

export const mockAuthService: AuthService = {
  async sendOtp(_phone: string): Promise<boolean> {
    await delay();
    return true; // Always succeeds in mock
  },

  async verifyOtp(phone: string, otp: string): Promise<User | null> {
    await delay();
    if (otp !== DEMO_OTP) return null;
    if (phone === DEMO_ADMIN.phone) {
      currentUser = DEMO_ADMIN;
      return DEMO_ADMIN;
    }
    currentUser = DEMO_OWNER;
    return DEMO_OWNER;
  },

  async signup(phone: string, businessName: string, otp: string): Promise<User | null> {
    await delay();
    if (otp !== DEMO_OTP) return null;
    const user: User = {
      id: `usr-${Date.now()}`,
      name: businessName,
      phone,
      role: "owner",
      businessId: `biz-${Date.now()}`,
    };
    currentUser = user;
    return user;
  },

  getCurrentUser(): User | null {
    return currentUser;
  },

  logout(): void {
    currentUser = null;
  },
};
