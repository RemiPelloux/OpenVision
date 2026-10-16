var Zz=`/*
 * The Cursor skin for xAI's commerce recipes (\`@x-clients/commerce-ui\` on
 * \`@x-clients/xds\`). Applied under a \`.cursor-commerce\` host element; the host
 * also carries \`data-theme="light" | "dark"\`, which XDS's own token sheet keys
 * its light/dark defaults off.
 *
 * Almost everything in \`commerce.css\` resolves through a variable: colors
 * through XDS's semantic \`--x-*\` tokens, sizes through Tailwind's \`--spacing\`
 * unit, corner radii through XDS's \`--x-radius-m\` scale. The first block
 * remaps those onto \`@anysphere/ui\`'s \`--cursor-*\` design tokens, so the
 * recipe follows the host theme (light, dark, custom) with no per-theme work
 * here. The remaining rules cover the few values \`commerce.css\` hard-codes:
 * the type scale, the pill radius, the z-index layer.
 */

.cursor-commerce .x-commerce,
.cursor-commerce.x-commerce {
  /* Density: Tailwind's 4px spacing unit becomes 3px, so \`h-9\` controls are
     27px, the \`h-12\` amount field 36px and \`p-6\` modal padding 18px. */
  --spacing: 0.1875rem;
  /* Radius scale: \`rounded-lg\` is \`calc(24px * --x-radius-m)\`; 0.25 lands on
     6px (\`--cursor-radius-base\`), \`rounded-md\` on 4px, \`rounded-sm\` on 2px. */
  --x-radius-m: 0.25;

  /* Surfaces */
  --x-bg-modal: var(--cursor-bg-elevated);
  --x-bg-primary: var(--cursor-bg-elevated);
  --x-bg-sheets: var(--cursor-bg-elevated);
  --x-bg-secondary: var(--cursor-bg-quaternary);
  --x-bg-tertiary: var(--cursor-bg-quaternary);
  --x-bg-inputs: var(--cursor-bg-quaternary);
  --x-bg-destructive: var(--cursor-bg-danger-quaternary);
  --x-bg-success: var(--cursor-bg-success-quaternary);
  --x-bg-warning: var(--cursor-bg-warning-quaternary);
  --x-bg-info: var(--cursor-bg-accent-quaternary);
  /* The same scrim \`@anysphere/ui\`'s Dialog draws. */
  --x-overlay-normal: rgba(0, 0, 0, 0.5);
  --x-overlay-strong: rgba(0, 0, 0, 0.8);
  --x-hover-subtle: var(--cursor-bg-quaternary);

  /* Strokes */
  --x-border-normal: var(--cursor-stroke-secondary);
  --x-border-hover: var(--cursor-stroke-primary);
  --x-border-active: var(--cursor-stroke-primary);
  --x-border-elevated: var(--cursor-stroke-secondary);
  --x-border-destructive: var(--cursor-danger);
  --x-border-destructive-light: var(--cursor-bg-danger-secondary);
  --x-ring: var(--cursor-stroke-accent);

  /* Text */
  --x-fg-primary: var(--cursor-text-primary);
  --x-fg-secondary: var(--cursor-text-secondary);
  --x-fg-tertiary: var(--cursor-text-tertiary);
  /* \`text-inverted\` is the label XDS's \`primary\` button paints over its
     \`--x-btn-primary\` fill, which is \`--cursor-text-primary\` below: the same
     pair as \`@anysphere/ui\`'s monochrome primary button, whose label is
     \`--cursor-bg-editor\`. Not \`--cursor-text-invert\`: hosts may define that
     as an on-color white (Sand does), which vanishes into the white fill in
     dark mode. */
  --x-fg-inverted: var(--cursor-bg-editor);
  --x-fg-on-color: var(--cursor-text-invert);
  --x-fg-brand: var(--cursor-accent);
  --x-fg-destructive: var(--cursor-danger);
  --x-fg-success: var(--cursor-success);
  --x-fg-warning: var(--cursor-warn);

  /* Buttons: XDS \`primary\` is Cursor's monochrome primary; the neutral
     variants use the same fill ladder as \`@anysphere/ui\`'s buttons. */
  --x-btn-primary: var(--cursor-text-primary);
  --x-btn-primary-hover: var(--cursor-text-secondary);
  --x-btn-primary-pressed: var(--cursor-text-secondary);
  --x-btn-secondary: var(--cursor-bg-tertiary);
  --x-btn-secondary-hover: var(--cursor-bg-secondary);
  --x-btn-secondary-pressed: var(--cursor-bg-primary);
  --x-btn-tertiary: var(--cursor-bg-quaternary);
  --x-btn-tertiary-hover: var(--cursor-bg-tertiary);
  --x-btn-tertiary-pressed: var(--cursor-bg-secondary);
  --x-btn-ghost-hover: var(--cursor-bg-quaternary);
  --x-btn-ghost-pressed: var(--cursor-bg-tertiary);
  --x-btn-inverted: var(--cursor-bg-elevated);
  --x-btn-inverted-hover: var(--cursor-bg-quaternary);
  --x-btn-inverted-pressed: var(--cursor-bg-tertiary);
  --x-btn-destructive: var(--cursor-bg-danger-primary);
  --x-btn-destructive-hover: var(--cursor-button-danger-hover-background);
  --x-btn-destructive-pressed: var(--cursor-button-danger-hover-background);

  /* Elevation: Cursor dialogs are a 1px stroke over a soft shadow. */
  --x-shadow-lg: 0 0 0 1px var(--cursor-stroke-secondary), 0 8px 24px rgba(0, 0, 0, 0.24);
  --x-shadow-md: 0 4px 12px rgba(0, 0, 0, 0.16);
  --x-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);

  font-family: var(--cursor-font-family-sans, inherit);
}

/* Type scale: \`commerce.css\` carries these as literal pixel sizes. */
.cursor-commerce .x-commerce .text-headline1 {
  font-size: var(--cursor-font-size-lg, 14px);
  line-height: var(--cursor-line-height-lg, 22px);
  font-weight: var(--cursor-font-weight-semibold, 600);
}
.cursor-commerce .x-commerce .text-headline2 {
  font-size: var(--cursor-font-size-lg, 14px);
  line-height: var(--cursor-line-height-lg, 22px);
  font-weight: var(--cursor-font-weight-semibold, 600);
}
.cursor-commerce .x-commerce .text-body {
  font-size: var(--cursor-font-size-base, 13px);
  line-height: var(--cursor-line-height-base, 18px);
}
.cursor-commerce .x-commerce .text-subtext1 {
  font-size: var(--cursor-font-size-sm, 12px);
  line-height: var(--cursor-line-height-sm, 16px);
}
.cursor-commerce .x-commerce .text-subtext2,
.cursor-commerce .x-commerce .text-subtext3 {
  font-size: var(--cursor-font-size-xs, 11px);
  line-height: var(--cursor-line-height-xs, 14px);
}
/* The credit balance on the credits card: 30px on grok.com, a settings figure here. */
.cursor-commerce .x-commerce .text-title2 {
  font-size: 20px;
  line-height: 26px;
}
/* The amount field. */
.cursor-commerce .x-commerce .text-title3 {
  font-size: 24px;
  line-height: 28px;
}
.cursor-commerce .x-commerce input.h-12 {
  height: 48px;
}

/* Pills become Cursor corners. XDS's Button is a framer-motion element that
   writes \`border-radius: 9999px\` as an inline style (its size-animation
   workaround), which only \`!important\` outranks. */
.cursor-commerce .x-commerce .rounded-full {
  border-radius: var(--cursor-radius-base, 6px);
}
.cursor-commerce .x-commerce [data-slot="xds-button"] {
  /* The radius arrives as an inline style from framer-motion, which nothing but !important outranks. */
  border-radius: var(--cursor-radius-base, 6px) !important;
}
/* XDS buttons force a medium weight; Cursor buttons are regular. */
.cursor-commerce .x-commerce button.font-medium {
  font-weight: var(--cursor-font-weight-normal, 400);
}

/* The dialog is rendered in place (\`portal: false\`) at Tailwind's \`z-50\`;
   lift it onto the host's modal layer so nothing in the shell paints over it. */
.cursor-commerce .x-commerce.z-50,
.cursor-commerce .x-commerce .z-50 {
  z-index: var(--ui-portal-layer-z-index-modal, 3000);
}

/* Sand's dialog chrome, for hosts that pass \`skin="sand"\`. It paints with
   Sand's \`--sand-*\` tokens, which other hosts do not define. \`:where()\` adds
   no specificity, so each rule weighs against the Cursor skin above on its
   own selector. */
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] {
  border-radius: 14px !important;
  border: 1px solid var(--sand-border-default) !important;
  background-color: var(--sand-bg-elevated) !important;
  box-shadow: none !important;
  padding-top: 12px !important;
  padding-inline: 16px !important;
  padding-bottom: 16px !important;
  color: var(--sand-text-primary);
  font-family: inherit;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .sticky.top-0 {
  align-items: flex-start;
}

.cursor-commerce:where([data-skin="sand"]) .bg-overlay-normal {
  background-color: var(--sand-bg-scrim) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] h2,
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .text-headline1,
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .text-headline2 {
  font-size: var(--sand-font-size-lg, 15px) !important;
  line-height: 22px !important;
  font-weight: var(--sand-font-weight-semibold, 600) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] p.text-body {
  font-size: var(--sand-font-size-lg, 15px) !important;
  line-height: 22px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-tertiary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-surface"] .text-subtext1 {
  font-size: var(--sand-font-size-sm, 13px) !important;
  line-height: 18px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-secondary) !important;
}

.cursor-commerce:where([data-skin="sand"]) label:has([data-slot="xds-input"]) {
  box-sizing: border-box;
  min-height: 32px;
  height: 32px;
  border-radius: 8px !important;
  border: 1px solid var(--sand-border-default) !important;
  background-color: var(--sand-bg-base) !important;
  padding: 0 10px !important;
  color: var(--sand-text-primary);
}

.cursor-commerce:where([data-skin="sand"]) label:has([data-slot="xds-input"]):focus-within {
  border-color: var(--sand-border-strong) !important;
  box-shadow: 0 0 0 1px var(--sand-border-focus);
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-input"] {
  font-family: inherit;
  font-size: var(--sand-font-size-sm, 13px) !important;
  line-height: 18px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-modal-surface"]
  button.rounded-full:not([data-slot="xds-button"]) {
  width: 32px !important;
  height: 32px !important;
  min-width: 32px;
  min-height: 32px;
  margin-top: calc(10px - 12px) !important;
  margin-inline-end: calc(10px - 16px) !important;
  margin-bottom: 0 !important;
  margin-inline-start: 0 !important;
  align-self: flex-start;
  border-radius: 9999px !important;
  color: var(--sand-text-secondary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-modal-surface"]
  button.rounded-full:not([data-slot="xds-button"]):hover {
  background-color: var(--sand-fill-secondary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-modal-surface"]
  button.rounded-full:not([data-slot="xds-button"])
  svg {
  width: 14px !important;
  height: 14px !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-modal-footer"] {
  display: flex !important;
  align-items: center;
  justify-content: flex-end;
  gap: 8px !important;
  padding-top: 12px !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"] {
  border-radius: 9999px !important;
  height: 24px !important;
  min-height: 24px !important;
  padding: 4px 10px !important;
  font-family: inherit;
  font-size: 12px !important;
  line-height: 16px !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].bg-btn-primary,
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].x-commerce-credits-primary {
  background-color: var(--sand-fill-primary) !important;
  color: var(--sand-text-on-primary) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"].bg-btn-primary:hover:not(:disabled),
.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"].x-commerce-credits-primary:hover:not(:disabled) {
  background-color: var(--sand-fill-primary-hover) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].bg-btn-primary:disabled,
.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"].x-commerce-credits-primary:disabled {
  background-color: var(--sand-fill-primary-disabled) !important;
  color: var(--sand-text-disabled) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"].bg-btn-secondary {
  background-color: var(--sand-fill-secondary) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"][data-sand-billing-destructive],
.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"]:has(.text-destructive) {
  background-color: transparent !important;
  color: var(--sand-text-danger) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"][data-sand-billing-destructive]:hover:not(:disabled),
.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"]:has(.text-destructive):hover:not(:disabled) {
  background-color: var(--sand-fill-danger-subtle) !important;
}

.cursor-commerce:where([data-skin="sand"])
  [data-slot="xds-button"]:has(.text-destructive)
  .text-destructive {
  color: var(--sand-text-danger) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"][aria-pressed] {
  height: 32px !important;
  min-height: 32px !important;
  border-radius: 9999px !important;
  border-color: var(--sand-border-default) !important;
  font-size: var(--sand-font-size-sm, 13px) !important;
  font-weight: var(--sand-font-weight-regular, 425) !important;
  color: var(--sand-text-primary) !important;
}

.cursor-commerce:where([data-skin="sand"]) [data-slot="xds-button"][aria-pressed="true"] {
  background-color: var(--sand-fill-secondary) !important;
  border-color: transparent !important;
}

/* The credits card in the IDE's and Glass's Plan & Usage tab, the hosts that
   pass no skin: shaped like the tab's other cards (an \`@anysphere/ui\` Section
   body), with the note under it. The selectors follow commerce-ui's
   \`CreditsCard\` markup: the card's box, then the note, open its section,
   and the card's dialogs render in place after them, so every rule reaches
   only the box or the note. \`:not([data-skin])\` keeps them off Sand and
   outranks the utilities and the type scale above without \`!important\`. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child {
  border-width: 0;
  border-radius: var(--cursor-radius-xl, 12px);
  background-color: var(--cursor-bg-quinary);
}
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > .bg-destructive\\/30 {
  background-color: var(--cursor-bg-red-quinary);
}
/* The balance, as \`@anysphere/ui\`'s 3xl figure. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child .text-title1 {
  font-size: 22px;
  line-height: 26px;
  letter-spacing: var(--cursor-letter-spacing-3xl, -0.26px);
}
/* Pending top-ups, in body text like the rows. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child .text-subtext2 {
  font-size: var(--cursor-font-size-base, 13px);
  line-height: var(--cursor-line-height-base, 18px);
}
/* Rows on the tab's 24px row height. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child dl {
  gap: var(--cursor-spacing-0-5, 2px);
}
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > :first-child dl > div {
  min-height: var(--cursor-spacing-6, 24px);
  column-gap: var(--cursor-spacing-3, 12px);
}
/* The note, on the card's inset in the tab's small type. */
.cursor-commerce:not([data-skin]) [data-slot="credits-card"] > p {
  margin: 0;
  padding: var(--cursor-spacing-3, 12px);
  font-size: var(--cursor-font-size-sm, 12px);
  line-height: var(--cursor-line-height-sm, 16px);
}
`;
