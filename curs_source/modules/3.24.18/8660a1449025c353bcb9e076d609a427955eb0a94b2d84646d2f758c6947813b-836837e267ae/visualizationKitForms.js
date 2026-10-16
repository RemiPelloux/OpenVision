import { E } from "./tslib.es6.js";
var f4f;
export { f4f };
var __wakaru_v4f_initialized = false;
export function v4f() {
if (__wakaru_v4f_initialized) return;
__wakaru_v4f_initialized = true;
"use strict";
E(), f4f = `
/* Agent-facing form controls; loaded after visualize.css. */
.vis-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
}

.vis-controls > .vis-form-label,
.vis-form-label:has(> .vis-form-value) {
  display: grid;
  min-width: min(100%, 260px);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 0;
}

.vis-controls > .vis-form-label {
  flex: 1 1 280px;
}

.vis-form-label:has(> .vis-form-value) {
  width: 100%;
}

:is(.vis-controls > .vis-form-label, .vis-form-label:has(> .vis-form-value))
  > :is(.vis-form-control, .vis-form-range, .vis-form-select, .vis-toggle-group) {
  grid-column: 1 / -1;
}

.vis-controls.vis-column {
  align-items: stretch;
  flex-wrap: nowrap;
}

.vis-controls.vis-column > .vis-form-label {
  width: 100%;
  flex: 0 0 auto;
}

.vis-btn,
.vis-form-item > input[type="checkbox"],
.vis-form-item > input[type="radio"],
.vis-form-control,
.vis-form-range,
.vis-form-select {
  font: inherit;
}

.vis-btn {
  appearance: button;
  display: inline-flex;
  inline-size: fit-content;
  max-inline-size: 100%;
  min-height: var(--control-h);
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0;
  padding: 0 var(--control-px);
  -webkit-app-region: no-drag;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  corner-shape: superellipse(1.5);
  color: var(--secondary-foreground);
  background: transparent;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  -webkit-font-smoothing: antialiased;
  transition: transform 80ms ease;
}

.vis-btn:not(:disabled):active {
  transform: scale(0.98);
}

.vis-btn:is(.vis-btn-block, .vis-btn-tile) {
  inline-size: 100%;
}

.vis-btn.vis-btn-tile {
  min-width: 0;
  overflow-wrap: anywhere;
  white-space: normal;
}

.vis-btn:not(.vis-btn-primary, .vis-btn-tile):is(
  [aria-pressed="true"],
  [aria-selected="true"]
) {
  border-color: transparent;
  color: var(--primary-foreground);
  background: var(--foreground);
}

.vis-btn.vis-btn-tile:is([aria-pressed="true"], [aria-selected="true"]) {
  border-color: var(--primary);
  box-shadow: inset 0 0 0 1px var(--primary);
}

a.vis-btn {
  cursor: pointer;
  text-decoration: none;
}

.vis-btn:not(:disabled):hover {
  background: var(--hover);
}

.vis-btn-primary {
  border-color: transparent;
  color: var(--primary-foreground);
  background: var(--foreground);
  background-clip: padding-box;
}

.vis-btn-primary .vis-text-muted {
  color: color-mix(in srgb, var(--primary-foreground) 50%, transparent);
}

.vis-btn-primary:not(:disabled):hover {
  background: var(--primary-hover);
  background-clip: padding-box;
}

.vis-btn-ghost {
  border-color: transparent;
  color: var(--muted-foreground);
  background: transparent;
}

.vis-btn-ghost:not(:disabled):hover {
  color: var(--foreground);
  background: var(--hover);
}

:is(.vis-btn, .vis-form-control, .vis-form-select, .vis-form-range):disabled {
  cursor: not-allowed;
  opacity: 0.4;
}

.vis-btn-icon {
  aspect-ratio: 1 / 1;
  width: var(--control-h);
  min-width: var(--control-h);
  inline-size: var(--control-h);
  padding: 0;
}

.vis-form-label {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 8px;
  color: var(--foreground);
}

.vis-form-value {
  color: var(--foreground);
  font-family: var(--font-mono);
  font-variant-numeric: tabular-nums;
  text-align: end;
}

:is(.vis-form-control, .vis-form-select) {
  display: block;
  width: 100%;
  min-height: var(--input-h);
  outline: none;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  corner-shape: superellipse(1.5);
  color: var(--foreground);
}

.vis-form-control {
  padding: 0 var(--control-px);
  background: var(--card);
}

.vis-form-control::placeholder {
  color: var(--tertiary-foreground);
}

.vis-form-control[type="file"] {
  padding: 0;
  overflow: hidden;
  color: var(--tertiary-foreground);
  cursor: pointer;
}

.vis-form-control[type="file"]::file-selector-button {
  height: calc(var(--input-h) - 2px);
  margin-right: 8px;
  padding: 0 8px;
  border: 0;
  border-right: 1px solid var(--border);
  color: var(--secondary-foreground);
  background: var(--muted);
  cursor: inherit;
  font: inherit;
}

.vis-form-control[type="file"]:not(:disabled):hover::file-selector-button {
  background: var(--hover);
}

textarea.vis-form-control {
  height: auto;
  min-height: 72px;
  padding: 8px var(--control-px);
  resize: vertical;
}

.vis-form-select {
  appearance: none;
  margin: 0;
  padding: 0 32px 0 var(--control-px);
  background-color: var(--card);
  background-image:
    linear-gradient(45deg, transparent 50%, var(--muted-foreground) 50%),
    linear-gradient(135deg, var(--muted-foreground) 50%, transparent 50%);
  background-position:
    calc(100% - 14px) 50%,
    calc(100% - 10px) 50%;
  background-repeat: no-repeat;
  background-size: 4px 4px;
  cursor: default;
}

.vis-form-select:has(> option[value=""]:checked) {
  color: var(--tertiary-foreground);
}

.vis-form-select option {
  color: var(--foreground);
}

.vis-form-select:not(:disabled):hover {
  background-color: var(--hover);
}

:is(.vis-form-control, .vis-form-select):focus-visible {
  border-color: var(--ring);
}

.vis-form-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.vis-form-item > input[type="checkbox"],
.vis-form-item > input[type="radio"] {
  appearance: none;
  width: 16px;
  height: 16px;
  flex: none;
  margin: 0;
  border: 1px solid var(--border);
  color: var(--primary-foreground);
  background-color: transparent;
  cursor: default;
  transition:
    background-color 150ms,
    border-color 150ms,
    box-shadow 150ms;
}

.vis-form-item > input[type="checkbox"] {
  border-radius: var(--radius-sm);
  corner-shape: superellipse(1.5);
  background-color: var(--muted);
  box-shadow: var(--shadow-sm);
}

.vis-form-item > input[type="checkbox"]:checked {
  border-color: var(--foreground);
  background-color: var(--foreground);
}

.vis-form-item > input[type="checkbox"]:not(.vis-switch):checked::before {
  display: block;
  width: 100%;
  height: 100%;
  background: var(--primary-foreground);
  content: "";
  mask: var(--checkmark-image) center / 12px 12px no-repeat;
}

.vis-form-item > input[type="radio"] {
  border-radius: var(--radius-full);
  background-color: var(--muted);
  box-shadow: var(--shadow-sm);
}

.vis-form-item
  > input:is([type="checkbox"], [type="radio"]):not(:disabled):not(:checked):hover {
  background-color: var(--card);
}

.vis-form-item > input[type="radio"]:checked {
  border: 2px solid var(--foreground);
  background:
    radial-gradient(circle, var(--primary-foreground) 0 3.5px, transparent 4px),
    var(--foreground);
}

.vis-form-item > input[type="checkbox"]:disabled,
.vis-form-item > input[type="radio"]:disabled {
  cursor: not-allowed;
  pointer-events: none;
}

.vis-form-item > input[type="checkbox"]:disabled + label,
.vis-form-item > input[type="radio"]:disabled + label {
  cursor: not-allowed;
}

.vis-form-item > label {
  color: var(--foreground);
  cursor: default;
}

.vis-form-item > input[type="checkbox"].vis-switch {
  position: relative;
  width: 32px;
  height: 20px;
  border: 0;
  border-radius: var(--radius-full);
  corner-shape: round;
  background-color: var(--muted);
  box-shadow: none;
  transition: background-color 200ms cubic-bezier(0, 0, 0.2, 1);
}

.vis-form-item > input[type="checkbox"].vis-switch::before {
  position: absolute;
  top: 50%;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid light-dark(var(--primary-foreground), var(--foreground));
  border-radius: var(--radius-full);
  corner-shape: round;
  background-color: light-dark(var(--primary-foreground), var(--foreground));
  box-shadow: var(--shadow-sm);
  content: "";
  mask: none;
  -webkit-mask: none;
  transform: translate(2px, -50%);
  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1);
}

.vis-form-item > input[type="checkbox"].vis-switch:not(:disabled):not(:checked):hover {
  background-color: var(--muted);
}

.vis-form-item > input[type="checkbox"].vis-switch:checked {
  border-color: var(--foreground);
  background-color: var(--foreground);
}

.vis-form-item > input[type="checkbox"].vis-switch:checked::before {
  width: 16px;
  height: 16px;
  background-color: var(--primary-foreground);
  mask: none;
  -webkit-mask: none;
  transform: translate(14px, -50%);
}

.vis-form-item > input[type="checkbox"].vis-switch:focus-visible {
  outline: 0;
  box-shadow: 0 0 0 2px var(--ring);
}

.vis-form-item > input[type="checkbox"].vis-switch:disabled,
.vis-form-item > input[type="checkbox"].vis-switch:disabled + label {
  cursor: not-allowed;
  opacity: 0.6;
}

.vis-form-range {
  appearance: none;
  display: block;
  width: 100%;
  height: 8px;
  flex: 1;
  margin: 0;
  padding: 0;
  outline: none;
  border: 0;
  overflow: visible;
  accent-color: var(--foreground);
  background: transparent;
}

.vis-form-range::-webkit-slider-runnable-track {
  height: 6px;
  border: 0;
  border-radius: 3px;
  background: linear-gradient(
    to right,
    var(--foreground) 0 var(--value, 0%),
    var(--muted) var(--value, 0%) 100%
  );
}

.vis-form-range::-webkit-slider-thumb {
  appearance: none;
  position: relative;
  z-index: 1;
  width: 16px;
  height: 16px;
  margin-top: -5px;
  border: 0;
  border-radius: 8px;
  background: var(--foreground);
  box-shadow: 0 0 0 2px var(--background);
}

.vis-form-range:focus-visible::-webkit-slider-thumb {
  box-shadow:
    0 0 0 2px var(--background),
    0 0 0 4px var(--ring);
}

.vis-btn:focus-visible,
.vis-form-item > input[type="checkbox"]:focus-visible,
.vis-form-item > input[type="radio"]:focus-visible {
  outline: 2px solid var(--ring);
  outline-offset: 2px;
}
`.trim();

}
