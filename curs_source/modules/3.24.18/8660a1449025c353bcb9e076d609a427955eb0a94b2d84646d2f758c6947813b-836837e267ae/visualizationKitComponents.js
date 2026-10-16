import { E } from "./tslib.es6.js";
var _4f;
export { _4f };
var __wakaru_b4f_initialized = false;
export function b4f() {
if (__wakaru_b4f_initialized) return;
__wakaru_b4f_initialized = true;
"use strict";
E(), _4f = `
/* Agent-facing components; loaded after form controls. */
:is(.vis-card, .vis-alert, .vis-snippet, .vis-code-block) {
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--card);
}

:is(.vis-card, .vis-snippet) {
  corner-shape: superellipse(1.5);
  color: var(--card-foreground);
}

.vis-card {
  min-width: 0;
  padding: 16px;
  overflow: hidden;
  overflow-wrap: break-word;
}

.vis-card:has(> :is(.vis-table-responsive, .vis-table)) {
  padding: 0;
}

.vis-card-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

.vis-stat-card {
  display: flex;
  min-width: 0;
  flex: 1 1 0;
  flex-direction: column;
  gap: 4px;
}

.vis-card.vis-stat-card {
  justify-content: flex-start;
}

.vis-stat-label {
  display: block;
  color: var(--muted-foreground);
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
}

.vis-stat-value {
  display: block;
  font-family: var(--font-mono);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-medium);
  font-variant-numeric: tabular-nums;
  line-height: 1.25;
}

.vis-table-responsive {
  width: 100%;
  overflow-x: auto;
}

.vis-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--foreground);
  font: inherit;
  text-align: start;
}

.vis-table :is(th, td) {
  padding: 8px 12px;
  overflow-wrap: anywhere;
  border: 0;
  text-align: start;
  vertical-align: middle;
  white-space: normal;
}

.vis-table.vis-table-sm :is(th, td) {
  padding: 6px 10px;
}

.vis-table .vis-text-nowrap {
  white-space: nowrap;
}

.vis-table thead th {
  min-height: 40px;
  box-shadow: inset 0 -1px 0 var(--border);
  color: var(--muted-foreground);
  font-weight: var(--font-weight-normal);
}

.vis-table tbody.vis-striped tr:nth-child(even) {
  background: var(--card);
}

.vis-table tbody tr:not(:last-child) :is(th, td),
.vis-table tbody.vis-bordered tr:not(:last-child) :is(th, td) {
  box-shadow: inset 0 -1px 0 var(--border);
}

.vis-table tbody.vis-interactive tr {
  cursor: pointer;
}

.vis-table tbody.vis-interactive tr:hover {
  background: var(--card);
}

.vis-table tfoot :is(th, td) {
  border-top: 1px solid var(--border);
  background: transparent;
  font-weight: var(--font-weight-medium);
}

.vis-table :is(.vis-text-end, [align="right"]) {
  text-align: end;
  font-variant-numeric: tabular-nums;
}

.vis-table :is(.vis-text-center, [align="center"]) {
  text-align: center;
}

.vis-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 2px 8px;
  border: 1px solid var(--border);
  border-radius: var(--radius-full);
  color: var(--tone-text, var(--tone, var(--foreground)));
  background: var(--tone-bg, transparent);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-normal);
  line-height: 1;
  opacity: var(--tone-opacity, 1);
  vertical-align: baseline;
  white-space: nowrap;
}

.vis-badge:is(.vis-accent, .vis-success, .vis-warn, .vis-danger, .vis-inverted) {
  border-color: transparent;
}

.vis-progress {
  display: flex;
  height: 6px;
  overflow: hidden;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--muted);
}

.vis-progress-bar {
  height: 100%;
  flex-shrink: 0;
  border: 0;
  border-radius: var(--radius-full);
  background: var(--foreground);
}

.vis-progress-segmented > .vis-progress-bar {
  border-radius: 0;
}

.vis-progress-segmented > .vis-progress-bar:first-child {
  border-start-start-radius: var(--radius-full);
  border-end-start-radius: var(--radius-full);
}

.vis-progress-segmented > .vis-progress-bar:last-child {
  border-start-end-radius: var(--radius-full);
  border-end-end-radius: var(--radius-full);
}

hr {
  height: 1px;
  margin: 8px 0;
  border: 0;
  background: var(--border);
}

.vis-separator-vertical {
  align-self: stretch;
  width: 1px;
  flex: none;
  background: var(--border);
}

.vis-collapsible {
  border-bottom: 1px solid var(--border);
}

.vis-collapsible > summary {
  display: flex;
  min-height: var(--control-h);
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  cursor: pointer;
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-medium);
  list-style: none;
  user-select: none;
}

.vis-collapsible > summary::-webkit-details-marker {
  display: none;
}

.vis-collapsible > summary::after {
  color: var(--muted-foreground);
  content: "+";
  font-weight: var(--font-weight-normal);
}

.vis-collapsible[open] > summary::after {
  content: "\u2212";
}

.vis-collapsible > :not(summary) {
  padding-bottom: 12px;
}

.vis-tabs {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  row-gap: 12px;
}

.vis-tabs.vis-secondary {
  column-gap: 8px;
}

.vis-tabs.vis-secondary > input:checked + label {
  border-color: transparent;
  color: var(--primary-foreground);
  background: var(--foreground);
  background-clip: padding-box;
}

.vis-tabs.vis-secondary > input:checked + label:hover {
  background: var(--primary-hover);
  background-clip: padding-box;
}

.vis-tabs > input,
.vis-toggle-group > input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.vis-tabs > input:focus-visible + label,
.vis-toggle-group > input:focus-visible + label {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}

.vis-tabs > label {
  order: 1;
}

.vis-tabs:not(.vis-secondary) > label {
  appearance: none;
  display: inline-flex;
  min-height: var(--control-h);
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0 var(--control-px);
  border: 0;
  border-bottom: 1px solid var(--border);
  border-radius: var(--radius-md) var(--radius-md) 0 0;
  color: var(--muted-foreground);
  background: transparent;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  box-shadow: inset 0 -2px 0 transparent;
}

.vis-tabs:not(.vis-secondary) > input:not(:checked) + label:hover {
  color: var(--foreground);
}

.vis-tabs:not(.vis-secondary) > input:checked + label {
  color: var(--foreground);
  box-shadow: inset 0 -2px 0 var(--foreground);
}

.vis-tabs:not(.vis-secondary)::after {
  display: block;
  order: 1;
  flex: 1 1 auto;
  min-width: 0;
  border-bottom: 1px solid var(--border);
  content: "";
  pointer-events: none;
}

.vis-tabs > .vis-card {
  display: none;
  order: 2;
  width: 100%;
}

.vis-tabs > input:checked + label + .vis-card {
  display: block;
}

.vis-alert {
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-color: var(--tone-border, var(--border));
  color: var(--tone-text, var(--tone, var(--foreground)));
  background: var(--tone-bg, var(--card));
  opacity: var(--tone-opacity, 1);
}

.vis-alert > p {
  margin: 0;
  min-width: 0;
}

.vis-alert [data-lucide] {
  flex: none;
  color: inherit;
}

/* Tone utilities only set internal properties. Visual components consume them. */
.vis-fg {
  --tone: var(--foreground);
}

.vis-fg-60 {
  --tone: var(--foreground);
  --tone-opacity: 0.6;
}

.vis-fg-30 {
  --tone: var(--foreground);
  --tone-opacity: 0.3;
}

.vis-accent {
  --tone: var(--accent-foreground);
  --tone-bg: var(--accent);
  --tone-border: color-mix(in srgb, var(--primary) 32%, transparent);
}

.vis-success {
  --tone: var(--success);
  --tone-bg: var(--success-soft);
  --tone-border: var(--border-success);
}

.vis-warn {
  --tone: var(--warning);
  --tone-bg: var(--warning-soft);
  --tone-border: var(--border-warning);
}

.vis-danger {
  --tone: var(--danger);
  --tone-bg: var(--danger-soft);
  --tone-border: var(--border-danger);
}

.vis-inverted {
  --tone: var(--foreground);
  --tone-bg: var(--foreground);
  --tone-text: var(--background);
}

.vis-brown {
  --tone: var(--brown-primary);
  --tone-secondary: var(--brown-secondary);
  --tone-tertiary: var(--brown-tertiary);
}

.vis-blue {
  --tone: var(--blue-primary);
  --tone-secondary: var(--blue-secondary);
  --tone-tertiary: var(--blue-tertiary);
}

.vis-orange {
  --tone: var(--orange-primary);
  --tone-secondary: var(--orange-secondary);
  --tone-tertiary: var(--orange-tertiary);
}

.vis-yellow {
  --tone: var(--yellow-primary);
  --tone-secondary: var(--yellow-secondary);
  --tone-tertiary: var(--yellow-tertiary);
}

.vis-green {
  --tone: var(--green-primary);
  --tone-secondary: var(--green-secondary);
  --tone-tertiary: var(--green-tertiary);
}

.vis-red {
  --tone: var(--red-primary);
  --tone-secondary: var(--red-secondary);
  --tone-tertiary: var(--red-tertiary);
}

.vis-purple {
  --tone: var(--purple-primary);
  --tone-secondary: var(--purple-secondary);
  --tone-tertiary: var(--purple-tertiary);
}

.vis-cyan {
  --tone: var(--cyan-primary);
  --tone-secondary: var(--cyan-secondary);
  --tone-tertiary: var(--cyan-tertiary);
}

.vis-magenta {
  --tone: var(--magenta-primary);
  --tone-secondary: var(--magenta-secondary);
  --tone-tertiary: var(--magenta-tertiary);
}

/* Category surfaces and chart marks share opaque editorial ramp roles. */
:is(.vis-brown, .vis-blue, .vis-orange, .vis-yellow, .vis-green, .vis-red, .vis-purple, .vis-cyan, .vis-magenta) {
  --tone-fill: var(--tone-tertiary);
  --tone-border: var(--tone-secondary);
  --tone-title: color-mix(in srgb, var(--tone) 55%, var(--foreground));
  --tone-detail: color-mix(in srgb, var(--tone) 60%, var(--foreground));
}

.vis-category-surface {
  border-color: var(--tone-border, var(--border));
  color: var(--tone-title, var(--foreground));
  background: var(--tone-fill, var(--card));
}

.vis-category-surface .vis-text-muted {
  color: var(--tone-detail, var(--muted-foreground));
}

svg g.vis-category-surface > :is(rect, circle, ellipse, polygon) {
  fill: var(--tone-fill, var(--card));
  stroke: var(--tone-border, var(--border));
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
}

svg g.vis-category-surface > text {
  fill: var(--tone-title, var(--foreground));
}

svg g.vis-category-surface > text.vis-text-muted {
  fill: var(--tone-detail, var(--muted-foreground));
}

.vis-toggle-group {
  position: relative;
  display: inline-flex;
  width: fit-content;
  min-height: var(--input-h);
  max-width: 100%;
  flex: none;
  flex-wrap: wrap;
  gap: 2px;
  padding: 4px;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--card);
}

.vis-toggle-group > label {
  display: inline-flex;
  min-height: calc(var(--input-h) - 10px);
  align-items: center;
  padding: 0 var(--control-px);
  border-radius: calc(var(--radius-md) - 2px);
  color: var(--muted-foreground);
  cursor: pointer;
}

.vis-toggle-group > input:checked + label {
  color: var(--foreground);
  background: var(--muted);
}

.vis-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--foreground);
  border-radius: var(--radius-full);
  animation: visualize-spin 0.7s linear infinite;
}

.vis-status {
  display: block;
  width: 6px;
  height: 6px;
  flex: none;
  border: 0;
  border-radius: var(--radius-full);
  color: inherit;
  background: var(--tone, var(--muted-foreground));
  opacity: var(--tone-opacity, 1);
}

.vis-gauge {
  --value: 0;
  --gauge-size: 72px;
  --gauge-stroke: 4px;
  position: relative;
  display: grid;
  width: var(--gauge-size);
  height: var(--gauge-size);
  min-width: var(--gauge-size);
  min-height: var(--gauge-size);
  place-items: center;
  flex: none;
  color: var(--muted-foreground);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-medium);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  opacity: var(--tone-opacity, 1);
}

.vis-gauge::before {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-full);
  background: conic-gradient(
    var(--tone, var(--foreground)) calc(var(--value) * 1%),
    var(--muted) 0
  );
  mask: radial-gradient(
    farthest-side,
    transparent calc(100% - var(--gauge-stroke) - 1px),
    #000 calc(100% - var(--gauge-stroke))
  );
  pointer-events: none;
  content: "";
}

.vis-gauge.vis-small {
  --gauge-size: 48px;
  font-size: var(--font-size-small);
}

.vis-gauge.vis-large {
  --gauge-size: 96px;
  font-size: var(--font-size-h4);
}

.vis-snippet {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  width: fit-content;
  max-width: 100%;
  min-width: 0;
  flex: none;
  padding: 8px 12px;
  font-family: var(--font-mono);
  font-size: var(--font-size-small);
  line-height: 18px;
}

.vis-snippet-prompt {
  flex: none;
  color: var(--muted-foreground);
  user-select: none;
}

.vis-snippet code,
.vis-code-block pre code {
  display: block;
  min-width: 0;
  padding: 0;
  border-radius: 0;
  color: var(--foreground);
  background: transparent;
  font: inherit;
  font-weight: var(--font-weight-normal);
  overflow-wrap: anywhere;
}

.vis-code-block {
  margin: 0;
  overflow: hidden;
}

.vis-code-block > figcaption {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
}

.vis-code-block pre {
  margin: 0;
  padding: 12px;
  overflow: auto;
  font-family: var(--font-mono);
  font-size: var(--font-size-small);
  line-height: 20px;
}

@keyframes visualize-spin {
  to {
    transform: rotate(1turn);
  }
}
`.trim();

}
