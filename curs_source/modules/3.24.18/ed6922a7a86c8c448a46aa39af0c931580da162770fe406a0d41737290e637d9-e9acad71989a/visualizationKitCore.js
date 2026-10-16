import { x } from "./tslib.es6.js";
var FWh;
export { FWh };
var __wakaru_BWh_initialized = false;
export function BWh() {
if (__wakaru_BWh_initialized) return;
__wakaru_BWh_initialized = true;
"use strict";
x(), FWh = `
/* Core visualization contract; loaded first. */
html {
  color-scheme: light;
  background: transparent;
}

html[data-theme="dark"] {
  color-scheme: dark;
}

body {
  color-scheme: inherit;

  /* Public author color tokens. */
  --background: var(--ui-editor);
  --foreground: var(--ui-base);
  --card: var(--ui-editor);
  --card-foreground: var(--foreground);
  --primary: var(--blue);
  --primary-foreground: light-dark(
    oklch(0.991 0 0),
    oklch(0.226 0.013 264.284)
  );
  --muted: color-mix(in srgb, var(--ui-base) 8%, transparent);
  --muted-foreground: color-mix(in srgb, var(--ui-base) 74%, transparent);
  --tertiary-foreground: color-mix(in srgb, var(--ui-base) 48%, transparent);
  --accent: color-mix(in srgb, var(--primary) 12%, transparent);
  --accent-foreground: var(--primary);
  --brown: var(--brown-primary);
  --red: var(--red-primary);
  --orange: var(--orange-primary);
  --yellow: var(--yellow-primary);
  --green: var(--green-primary);
  --cyan: var(--cyan-primary);
  --blue: var(--blue-primary);
  --purple: var(--purple-primary);
  --magenta: var(--magenta-primary);
  --success: var(--green);
  --warning: var(--yellow);
  --danger: var(--red);
  --border: color-mix(in srgb, var(--ui-base) 12%, transparent);

  /* Internal implementation tokens. These are not part of the author contract. */

  /* Chart palette ramps. Each hue has an opaque editorial ramp. */
  --brown-primary: #916031;
  --brown-secondary: #c8b098;
  --brown-tertiary: #e9dfd6;
  --red-primary: #dc322f;
  --red-secondary: #ed9897;
  --red-tertiary: #f8d6d5;
  --orange-primary: #ed4c00;
  --orange-secondary: #f6a57f;
  --orange-tertiary: #fbdbcc;
  --yellow-primary: #a88d02;
  --yellow-secondary: #d3c680;
  --yellow-tertiary: #eee8cc;
  --green-primary: #2c9f28;
  --green-secondary: #95cf93;
  --green-tertiary: #d5ecd4;
  --cyan-primary: #31a8bf;
  --cyan-secondary: #98d3df;
  --cyan-tertiary: #d6eef2;
  --blue-primary: #2268ff;
  --blue-secondary: #90b3ff;
  --blue-tertiary: #d3e1ff;
  --purple-primary: #8c89e7;
  --purple-secondary: #c5c4f3;
  --purple-tertiary: #e8e7fa;
  --magenta-primary: #ec77bf;
  --magenta-secondary: #f5bbdf;
  --magenta-tertiary: #fbe4f2;
  --ui-base: light-dark(oklch(0.191 0 0), oklch(0.955 0 0));
  --ui-editor: light-dark(oklch(0.991 0 0), oklch(0.209 0 0));
  --popover: var(--ui-editor);
  --popover-foreground: var(--foreground);
  --secondary-foreground: var(--foreground);
  --hover: var(--muted);
  --primary-hover: color-mix(in srgb, var(--foreground) 80%, transparent);
  --destructive: var(--danger);
  --success-soft: color-mix(in srgb, var(--success) 12%, transparent);
  --warning-soft: color-mix(in srgb, var(--warning) 12%, transparent);
  --danger-soft: color-mix(in srgb, var(--danger) 12%, transparent);
  --border-success: color-mix(in srgb, var(--success) 32%, transparent);
  --border-warning: color-mix(in srgb, var(--warning) 32%, transparent);
  --border-danger: color-mix(in srgb, var(--danger) 32%, transparent);
  --ring: var(--blue);
  --font-sans: -apple-system, system-ui, "Segoe UI", sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
  --font-size-base: 14px;
  --font-size-normal: var(--font-size-base);
  --font-size-small: 12px;
  --font-size-h1: 22px;
  --font-size-h2: 18px;
  --font-size-h3: 16px;
  --font-size-h4: 14px;
  --font-size-h5: 14px;
  --font-size-h6: 12px;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 590;
  --font-weight-heading: 500;
  --line-height-normal: 22px;
  --line-height-small: 16px;
  --prose-block-gap-top: 4px;
  --prose-block-gap-bottom: 8px;
  --prose-heading-gap: 24px;
  --prose-list-gap: 4px;
  --prose-list-indent: 24px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  --control-h: 32px;
  --input-h: 36px;
  --control-px: 12px;
  --shadow-sm: 0 1px 2px -1px rgb(0 0 0 / 8%);
  --checkmark-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 17 17'%3E%3Cpath d='M12.8961 3.64101C13.1297 3.41418 13.4984 3.37523 13.7779 3.56581C14.0571 3.75635 14.1554 4.11331 14.0299 4.41347L13.9615 4.53847L7.71151 13.7045C7.59411 13.8767 7.4063 13.9877 7.19881 14.0072C6.99136 14.0267 6.78564 13.9533 6.63826 13.806L2.88826 10.056L2.79842 9.9457C2.6192 9.67407 2.64927 9.30496 2.88826 9.06581C3.12738 8.82669 3.49647 8.79676 3.76815 8.97597L3.8785 9.06581L7.03084 12.2182L12.8053 3.74941L12.8961 3.64101Z'/%3E%3C/svg%3E");
}

html[data-theme="dark"] body {
  --brown-secondary: #493019;
  --brown-tertiary: #1d130a;
  --red-secondary: #6e1918;
  --red-tertiary: #2c0a09;
  --orange-secondary: #772600;
  --orange-tertiary: #2f0f00;
  --yellow-secondary: #544701;
  --yellow-tertiary: #221c00;
  --green-secondary: #165014;
  --green-tertiary: #092008;
  --cyan-secondary: #195460;
  --cyan-tertiary: #0a2226;
  --blue-secondary: #113480;
  --blue-tertiary: #071533;
  --purple-secondary: #464574;
  --purple-tertiary: #1c1b2e;
  --magenta-secondary: #763c60;
  --magenta-tertiary: #2f1826;
}


* {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}

svg {
  display: block;
  max-width: 100%;
  height: auto;
}

:where(svg text:not([fill])) {
  fill: currentColor;
}

[data-lucide] {
  stroke-width: 1.6;
}

a {
  color: color-mix(in srgb, var(--primary) 80%, var(--foreground) 20%);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  text-underline-offset: 2px;
}

a:is(:hover, :focus-visible) {
  text-decoration-line: underline;
  text-decoration-style: dashed;
  text-decoration-thickness: 0.5px;
}

:is(h1, h2, h3, h4, h5, h6) {
  margin: 0 0 8px;
  text-wrap: balance;
}

:is(h1, h2, h3):not(:first-child) {
  margin-top: var(--prose-heading-gap);
}

:is(h4, h5, h6):not(:first-child) {
  margin-top: 16px;
}

h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-heading);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-heading);
  line-height: 1.25;
  letter-spacing: -0.01em;
}

h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-heading);
  line-height: 1.35;
}

h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
}

h5 {
  font-size: var(--font-size-h5);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
}

h6 {
  color: var(--muted-foreground);
  font-size: var(--font-size-h6);
  font-weight: var(--font-weight-medium);
  line-height: 1.4;
}

:is(p, ul, ol) {
  margin-top: var(--prose-block-gap-top);
  margin-bottom: var(--prose-block-gap-bottom);
}

:is(p, ul, ol):first-child {
  margin-top: 0;
}

:is(p, ul, ol):last-child {
  margin-bottom: 0;
}

:is(ul, ol) {
  padding-inline-start: var(--prose-list-indent);
}

ul {
  list-style-type: disc;
}

ul ul {
  list-style-type: circle;
}

ul ul ul {
  list-style-type: square;
}

ol {
  list-style-type: decimal;
}

ol ol {
  list-style-type: lower-alpha;
}

ol ol ol {
  list-style-type: lower-roman;
}

li {
  margin: 0;
  padding: 0;
  word-break: break-word;
}

li + li {
  margin-top: var(--prose-list-gap);
}

li > :is(ul, ol) {
  margin-top: var(--prose-list-gap);
  margin-bottom: var(--prose-list-gap);
}

li > p {
  margin: 0;
}

:is(b, strong) {
  font-weight: var(--font-weight-medium);
}

th {
  font-weight: var(--font-weight-semibold);
}

code:not(pre code) {
  display: inline;
  padding: 1px 6px;
  border-radius: var(--radius-sm);
  corner-shape: superellipse(1.5);
  color: var(--foreground);
  background: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.92em;
  font-weight: var(--font-weight-normal);
  overflow-wrap: anywhere;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  word-break: break-word;
}

.vis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(180px, 24%), 1fr));
  gap: 8px;
}

.vis-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.vis-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.vis-section-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.vis-center {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
}

:is(small, .vis-text-small) {
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
}

.vis-text-muted {
  color: var(--muted-foreground);
}

.vis-text-tertiary {
  color: var(--tertiary-foreground);
}

.vis-text-warning {
  color: var(--warning);
}

.vis-text-destructive {
  color: var(--destructive);
}

.vis-text-end {
  text-align: end;
  font-variant-numeric: tabular-nums;
}

.vis-text-center {
  text-align: center;
}

.vis-text-nowrap {
  white-space: nowrap;
}

.vis-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`.trim();

}
