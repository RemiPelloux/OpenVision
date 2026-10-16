import { Am, cs } from "./Sol.js";
import { FS } from "./button_4.js";
import { mk } from "./gallerySection.js";
import { e_ } from "./jotaiSolidBridge.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var yZv, SZv, kZv, wZv, CZv, TZv, Edc, Idc, xdc, Adc, Rdc, Pdc, Mdc, Ddc, gBi;
export { Adc, CZv, Ddc, Edc, Idc, Mdc, Pdc, Rdc, SZv, TZv, gBi, kZv, wZv, xdc, yZv };
var __wakaru_nuC_initialized = false;
export function nuC() {
if (__wakaru_nuC_initialized) return;
__wakaru_nuC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), FS(), e_(), mk(), yZv = wt('<form class="flex gap-2 items-center flex-wrap"><label class="text-xs opacity-70">URL:</label><input type=text placeholder=https://... class="flex-1 min-w-[200px] text-xs px-2 py-1 rounded border border-[var(--vscode-input-border)] bg-[var(--vscode-input-background)] text-[var(--vscode-input-foreground)]">'), SZv = wt('<div class="text-xs opacity-70">Status: '), kZv = wt('<div class="flex gap-2 flex-wrap">'), wZv = wt('<div class="flex flex-1 w-full min-h-[500px]"><div class="flex-1 min-w-0 border border-[var(--vscode-input-border)] rounded overflow-hidden flex flex-col"><div class="text-xs opacity-50 px-2 py-1 border-b border-[var(--vscode-input-border)] truncate"></div><webview></webview></div><div><webview src=about:blank>'), CZv = wt('<div class="absolute inset-0 flex items-center justify-center text-xs opacity-50 pointer-events-none">DevTools webview loading...'), TZv = globalThis.vscode, Edc = TZv?.ipcRenderer, Idc = "https://example.com", xdc = cs(!1), Adc = cs("Waiting for webviews..."), Rdc = cs(!1), Pdc = cs(!1), Mdc = cs(Idc), Ddc = cs(Idc), gBi = cs(null);

}
