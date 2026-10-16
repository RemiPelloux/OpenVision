import { h } from "./tslib.es6.js";
var c$e, l$e, d$e, u$e, kh, m$e, p$e, Sh, h$e, g$e;
export { Sh, c$e, d$e, g$e, h$e, kh, l$e, m$e, p$e, u$e };
var __wakaru_Vs_initialized = false;
export function Vs() {
if (__wakaru_Vs_initialized) return;
__wakaru_Vs_initialized = true;
"use strict";
h(), c$e = BigInt(0), l$e = BigInt(8), d$e = BigInt(16), u$e = BigInt(65535), kh = "[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?", m$e = new RegExp(`^(?:${kh}\\.)*${kh}$`), p$e = new RegExp(`^\\*\\.(?:${kh}\\.)*${kh}$`), Sh = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)", h$e = new RegExp(`^${Sh}(?:\\.${Sh}){3}$`), g$e = new RegExp(`^(?:${Sh}(?:\\.${Sh}){3}|[0-9a-f:]+)\\/\\d{1,3}$`);

}
