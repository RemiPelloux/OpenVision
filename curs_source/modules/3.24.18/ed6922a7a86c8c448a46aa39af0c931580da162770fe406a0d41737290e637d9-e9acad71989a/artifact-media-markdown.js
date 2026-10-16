import { x } from "./tslib.es6.js";
var z2n, aGt, vgo, _go, leh, ueh, bgo, ygo, deh, heh, peh, meh, ezi, geh, feh, veh, _eh, beh, Sgo;
export { Sgo, _eh, _go, aGt, beh, bgo, deh, ezi, feh, geh, heh, leh, meh, peh, ueh, veh, vgo, ygo, z2n };
var __wakaru_kgo_initialized = false;
export function kgo() {
if (__wakaru_kgo_initialized) return;
__wakaru_kgo_initialized = true;
"use strict";
x(), z2n = [
    "video",
    "audio",
    "shell",
    "diff",
    "textreference",
    "preview"
];
for (const e of z2n);
aGt = "/opt/cursor/artifacts/", vgo = /<(img|video)\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi, _go = `(?:[^>"']|"[^"]*"|'[^']*')*?`, leh = new RegExp(`<(textreference|preview)\\b(${_go})\\s*/>`, "gi"), ueh = /<(?:textreference|preview)/i, bgo = /!\[[^\]]*]\(([^)]+)\)/g, ygo = /`([^`\n]+)`/g, deh = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
    ".ico"
], heh = [
    ".mp4",
    ".mov",
    ".avi",
    ".webm",
    ".mkv",
    ".flv",
    ".wmv",
    ".m4v",
    ".3gp",
    ".ogv"
], peh = new Set(deh), meh = new Set(heh), ezi = z2n.join("|"), geh = new RegExp(`<\\/?(?:${ezi})\\b`, "i"), feh = new RegExp(`^\\s*<(\\/?)(${ezi})(?=[\\s/>]|$)`, "i"), veh = new RegExp(`^\\s*<(?:${ezi})${_go}\\s*\\/>`, "i"), _eh = new Map(z2n.map((e)=>[
        e,
        new RegExp(`<\\/${e}\\s*>`, "i")
    ])), beh = /^\s*(`{3,}|~{3,})(.*)$/, Sgo = /<img\s+[^>]*src=["']([^"']+)["'][^>]*\/?>/gi;

}
