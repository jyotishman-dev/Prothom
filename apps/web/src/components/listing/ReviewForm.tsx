"use client";

import { useState } from "react";
import { reviewSchema } from "@/lib/validators/review";
import { showToast } from "@/components/ui/Toast";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";

export function ReviewForm({
  listingId,
  onSuccess,
}: {
  listingId: string;
  onSuccess?: () => void;
}) {
  const [authorName, setAuthorName] = useState("");
  const [rating, setRating] = useState(5);
  const [body, setBody] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = reviewSchema.safeParse({
      authorName,
      rating,
      body,
    });

    if (!result.success) {
      const errMap: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        if (err.path[0]) {
          errMap[err.path[0].toString()] = err.message;
        }
      });
      setErrors(errMap);
      return;
    }

    setSubmitting(true);
    try {
      const { reviewService } = await import("@/services");
      await reviewService.submitReview(listingId, {
        authorName,
        rating,
        body,
      });
      showToast("Thank you! Your review has been posted.", "success");
      setAuthorName("");
      setBody("");
      setRating(5);
      if (onSuccess) onSuccess();
    } catch {
      showToast("Could not submit review. Please try again.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded-xl border border-stone-200 bg-white space-y-4">
      <h3 className="font-serif font-bold text-base text-ink">Write a Review</h3>

      <div>
        <label className="block text-xs font-medium text-stone-700 mb-1">
          Your Name
        </label>
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="e.g. Priyam Bora"
          className="text-sm"
        />
        {errors.authorName && (
          <p className="text-xs text-gamosa-red mt-1">{errors.authorName}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-stone-700 mb-1">
          Rating
        </label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setRating(star)}
              className={`p-1.5 rounded-md text-base transition-colors ${
                star <= rating
                  ? "text-amber-500 bg-amber-50"
                  : "text-stone-300 hover:text-amber-300"
              }`}
            >
              ★
            </button>
          ))}
          <span className="text-xs text-stone-500 self-center ml-2">
            ({rating} / 5 stars)
          </span>
        </div>
        {errors.rating && (
          <p className="text-xs text-gamosa-red mt-1">{errors.rating}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-medium text-stone-700 mb-1">
          Your Feedback (min 20 chars)
        </label>
        <textarea
          rows={3}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Share your authentic experience with this business..."
          className="w-full text-sm rounded-md border border-stone-200 p-2.5 focus:border-ink focus:outline-hidden"
        />
        {errors.body && (
          <p className="text-xs text-gamosa-red mt-1">{errors.body}</p>
        )}
      </div>

      <Button
        type="submit"
        isDisabled={submitting}
        className="w-full bg-ink hover:bg-ink/90 text-white text-xs font-semibold"
      >
        {submitting ? "Posting..." : "Submit Review"}
      </Button>
    </form>
  );
}
