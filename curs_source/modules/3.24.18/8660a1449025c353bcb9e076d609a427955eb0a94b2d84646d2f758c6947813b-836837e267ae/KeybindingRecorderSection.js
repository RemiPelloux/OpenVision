import { kJg } from "./KeybindingRecorder.js";
import { Am, cs } from "./Sol.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var vYv, _Yv, bYv, yYv, Juc, edc, SYv, sBi;
export { Juc, SYv, _Yv, bYv, edc, sBi, vYv, yYv };
var __wakaru_NlC_initialized = false;
export function NlC() {
if (__wakaru_NlC_initialized) return;
__wakaru_NlC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), pi(), Am(), kJg(), vYv = wt('<div class="p-4 border border-input-border rounded"><p class="text-sm mb-2">Press a keybinding combination:'), _Yv = wt('<div class="flex flex-col gap-3 p-4 border border-input-border rounded"><p class="text-sm font-medium">Recorded keybinding:</p><div class="flex flex-col gap-2"><div><p class="text-xs text-foreground-muted mb-1">UI Display Format:</p><div class="px-3 py-2 bg-terminal-background text-terminal-foreground font-mono rounded"></div></div><div><p class="text-xs text-foreground-muted mb-1">Settings Format:</p><div class="px-3 py-2 bg-terminal-background text-terminal-foreground font-mono rounded">'), bYv = wt('<div class="flex flex-col gap-4 p-4"><h2 class="text-lg font-medium">Keybinding Recorder</h2><div class="flex flex-col gap-2"><div class="flex flex-col mt-4 gap-4"><div><button class="px-3 py-1 bg-button-background text-button-foreground rounded hover:bg-button-hover-background"></button><span class="text-xs ml-2 text-foreground-muted">Press Escape once to clear, twice to cancel recording'), yYv = wt('<div class="flex flex-col gap-2"><div class="flex items-center justify-between p-3 bg-editor-background border border-input-border rounded"><div class="flex items-center gap-2"><div></div><span class="text-xs text-foreground-muted"></span></div><div class="font-mono text-sm">'), Juc = wt("<span class=text-foreground-muted>Press a key combination..."), edc = wt('<span class="text-foreground font-medium">'), SYv = wt('<div class="text-xs text-foreground-muted italic">Press Enter to confirm, Escape once to clear, or Escape twice to cancel'), sBi = cs(!1);

}
