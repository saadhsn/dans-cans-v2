declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GOOGLE_ADS_ID = "AW-16926603223";

export const ADS_CONVERSIONS = {
  dumpsterLead: "AW-16926603223/ivUICMKho7EbENfvnYc_",
} as const;

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackAdsConversion(sendTo: string) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "conversion", {
    send_to: sendTo,
  });
}

export function trackCallClick(callLocation: string) {
  trackEvent("call_click", {
    call_location: callLocation,
  });
}

export function trackCheckPricesClick(ctaLocation: string) {
  trackEvent("check_prices_click", {
    cta_location: ctaLocation,
  });
}

export function trackRentNowClick(params: {
  binId: string;
  binName: string;
  ctaLocation: string;
}) {
  trackEvent("rent_now_click", {
    bin_id: params.binId,
    bin_name: params.binName,
    cta_location: params.ctaLocation,
  });
}