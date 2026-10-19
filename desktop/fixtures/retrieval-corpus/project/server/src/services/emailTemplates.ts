import { translate, type Locale } from "../i18n/messages";
import { formatInZone } from "../utils/time";

export interface RenderedEmail {
  subject: string;
  text: string;
  html: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function layout(title: string, bodyHtml: string): string {
  return [
    "<!doctype html>",
    '<html><body style="font-family: system-ui, sans-serif; color: #1d2733">',
    `<h1 style="font-size: 20px">${escapeHtml(title)}</h1>`,
    bodyHtml,
    '<p style="color: #66717d; font-size: 12px">Harbor Parcel Tracking</p>',
    "</body></html>",
  ].join("\n");
}

export function renderOutForDeliveryEmail(params: {
  locale: Locale;
  recipientName: string;
  trackingNumber: string;
  windowStart: Date;
  windowEnd: Date;
  timeZone: string;
}): RenderedEmail {
  const subject = translate(params.locale, "email.outForDelivery.subject", { tracking: params.trackingNumber });
  const window = `${formatInZone(params.windowStart, params.timeZone)} – ${formatInZone(params.windowEnd, params.timeZone)}`;
  const greeting = translate(params.locale, "email.greeting", { name: params.recipientName });
  const body = translate(params.locale, "email.outForDelivery.body", { window });
  return {
    subject,
    text: `${greeting}\n\n${body}\n`,
    html: layout(subject, `<p>${escapeHtml(greeting)}</p><p>${escapeHtml(body)}</p>`),
  };
}

export function renderDeliveredEmail(params: {
  locale: Locale;
  recipientName: string;
  trackingNumber: string;
  deliveredAt: Date;
  timeZone: string;
}): RenderedEmail {
  const subject = translate(params.locale, "email.delivered.subject", { tracking: params.trackingNumber });
  const greeting = translate(params.locale, "email.greeting", { name: params.recipientName });
  const body = translate(params.locale, "email.delivered.body", {
    when: formatInZone(params.deliveredAt, params.timeZone),
  });
  return {
    subject,
    text: `${greeting}\n\n${body}\n`,
    html: layout(subject, `<p>${escapeHtml(greeting)}</p><p>${escapeHtml(body)}</p>`),
  };
}
