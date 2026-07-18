import { Courier } from "./couriers";

export function detectCourier(code: string): Courier | null {
  const tracking = code.trim().toUpperCase();

  if (!tracking) return null;

  // ==========================
  // Thailand Post
  // ==========================
  // WB123456789TH
  // EE123456789TH
  // RR123456789TH
  // CP123456789TH
  // ED123456789TH
  // RB123456789TH

  if (/^(WB|EE|RR|CP|ED|RB)\d{9}TH$/.test(tracking)) {
    return "th";
  }

  // ==========================
  // KEX
  // ==========================

  if (/^(TBK|KEX)/.test(tracking)) {
    return "kex";
  }

  // ==========================
  // Flash Express
  // ==========================
  // TH0876GS56FA77

  if (/^TH[A-Z0-9]{11}$/.test(tracking)) {
    return "flash";
  }

  // ==========================
  // J&T Express
  // ==========================

  if (/^JT/.test(tracking)) {
    return "jt";
  }

  if (/^\d{12,15}$/.test(tracking)) {
    return "jt";
  }

  // ==========================
  // DHL
  // ==========================

  if (/^\d{10}$/.test(tracking)) {
    return "dhl";
  }

  return null;
}