import { Am, cs } from "./Sol.js";
import { mk } from "./gallerySection.js";
import { E } from "./tslib.es6.js";
import { ouC } from "./useWorkerInterval.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var EZv, IZv, xZv, fBi;
export { EZv, IZv, fBi, xZv };
var __wakaru_uuC_initialized = false;
export function uuC() {
if (__wakaru_uuC_initialized) return;
__wakaru_uuC_initialized = true;
"use strict";
E(), at(), at(), at(), pi(), Am(), mk(), ouC(), EZv = wt("<div><div><div><span>Worker Interval</span><span></span><span>Continues when tab is hidden</span></div><div><span>Regular setInterval</span><span></span><span>Throttled when tab is hidden</span></div></div><div><button></button><button>Reset"), IZv = wt("<div><span>useWorkerInterval Hook</span><span>Automatically cleaned up on component unmount (500ms interval)</span><span>"), xZv = wt(`<div><div><h2>Worker Interval</h2><p>A Web Worker-based interval that continues running even when the browser tab is hidden. Regular setInterval is throttled by browsers to ~1Hz when the tab is not visible. Try hiding the tab and see the difference.</p></div><h3>Comparison Demo</h3><h3>useWorkerInterval Hook</h3><div><strong>Usage:</strong><pre>// Standalone function
const cleanup = setWorkerInterval(() => {
  console.log('tick');
}, 1000);
cleanup(); // Stop the interval

// SolidJS hook (auto-cleanup)
useWorkerInterval(() => {
  console.log('tick');
}, 1000);`), fBi = cs(!0);

}
