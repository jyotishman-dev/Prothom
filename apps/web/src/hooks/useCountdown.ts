"use client";
import { useState, useEffect } from "react";

export interface CountdownValue {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
  isExpired: boolean;
}

export function useCountdown(targetDate: string): CountdownValue {
  const calculate = (): CountdownValue => {
    const diff = new Date(targetDate).getTime() - Date.now();
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true, isExpired: true };
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return { days, hours, minutes, seconds, expired: false, isExpired: false };
  };

  const [value, setValue] = useState<CountdownValue>(calculate);

  useEffect(() => {
    const id = setInterval(() => setValue(calculate()), 1000);
    return () => clearInterval(id);
  });

  return value;
}
