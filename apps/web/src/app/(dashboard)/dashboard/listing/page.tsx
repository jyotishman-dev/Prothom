"use client";

import { useState } from "react";
import { showToast } from "@/components/ui/Toast";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

export default function EditListingPage() {
  const [name, setName] = useState("Talent Academy");
  const [phone, setPhone] = useState("9876543210");
  const [whatsapp, setWhatsapp] = useState("9876543210");
  const [address, setAddress] = useState("Gar-Ali, Near ASTC Bus Stand, Jorhat, Assam 785001");
  const [priceFrom, setPriceFrom] = useState(2500);
  const [description, setDescription] = useState(
    "Premier coaching centre in Jorhat preparing students for JEE Main, JEE Advanced, NEET, and Assam CEE. Experienced faculty with regular mock tests and personalized mentoring."
  );
  const [saving, setSaving] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      showToast("Listing profile updated successfully!", "success");
    }, 400);
  };

  return (
    <div className="max-w-3xl space-y-6">
      <div>
        <h2 className="font-serif font-bold text-2xl text-ink">
          Edit Listing Profile
        </h2>
        <p className="text-xs text-stone-500 mt-0.5">
          Changes reflect immediately on your public profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-stone-200 bg-white space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Business Name
          </label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-sm font-medium"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              Public Phone Number
            </label>
            <Input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="text-sm font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              WhatsApp Business Number
            </label>
            <Input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="text-sm font-medium"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Physical Address & Landmark
          </label>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="text-sm font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Starting Price / Fee (₹)
          </label>
          <Input
            type="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(Number(e.target.value))}
            className="text-sm font-medium"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Business Description
          </label>
          <textarea
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full text-sm rounded-md border border-stone-200 p-2.5 focus:border-ink focus:outline-hidden"
            required
          />
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            isDisabled={saving}
            className="bg-ink hover:bg-ink/90 text-white text-xs font-semibold"
          >
            {saving ? "Saving Changes..." : "Save Listing Updates"}
          </Button>
        </div>
      </form>
    </div>
  );
}
