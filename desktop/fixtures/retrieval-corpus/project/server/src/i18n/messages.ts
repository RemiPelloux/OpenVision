export type Locale = "en" | "fr" | "de" | "nl";

type Catalog = Record<string, string>;

const CATALOGS: Record<Locale, Catalog> = {
  en: {
    "email.greeting": "Hello {name},",
    "email.outForDelivery.subject": "Your parcel {tracking} is on its way",
    "email.outForDelivery.body": "Our courier expects to arrive between {window}.",
    "email.delivered.subject": "Parcel {tracking} delivered",
    "email.delivered.body": "We delivered your parcel on {when}.",
    "status.in_transit": "In transit",
    "status.delivered": "Delivered",
    "error.rate_limited": "You are sending requests too quickly. Please wait a moment.",
  },
  fr: {
    "email.greeting": "Bonjour {name},",
    "email.outForDelivery.subject": "Votre colis {tracking} est en route",
    "email.outForDelivery.body": "Notre livreur devrait arriver entre {window}.",
    "email.delivered.subject": "Colis {tracking} livré",
    "email.delivered.body": "Nous avons livré votre colis le {when}.",
    "status.in_transit": "En transit",
    "status.delivered": "Livré",
  },
  de: {
    "email.greeting": "Hallo {name},",
    "email.outForDelivery.subject": "Ihr Paket {tracking} ist unterwegs",
    "email.outForDelivery.body": "Unser Kurier kommt voraussichtlich zwischen {window}.",
    "status.in_transit": "Unterwegs",
    "status.delivered": "Zugestellt",
  },
  nl: {
    "email.greeting": "Hallo {name},",
    "status.in_transit": "Onderweg",
    "status.delivered": "Bezorgd",
  },
};

const FALLBACK: Locale = "en";

export function resolveLocale(acceptLanguage: string | undefined): Locale {
  if (!acceptLanguage) return FALLBACK;
  const candidates = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.slice(0, 2).toLowerCase(), weight: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.weight - a.weight);
  const match = candidates.find((c) => c.lang in CATALOGS);
  return (match?.lang as Locale) ?? FALLBACK;
}

/**
 * Looks a message key up in the requested locale, falling back to English,
 * then substitutes {placeholders}.
 */
export function translate(locale: Locale, key: string, vars: Record<string, string> = {}): string {
  const template = CATALOGS[locale]?.[key] ?? CATALOGS[FALLBACK][key] ?? key;
  return template.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? vars[name] : match));
}
