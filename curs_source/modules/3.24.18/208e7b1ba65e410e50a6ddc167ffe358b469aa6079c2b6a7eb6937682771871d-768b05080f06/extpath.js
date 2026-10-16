import { Ce } from "./path.js";
import { oe } from "./platform.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
import { Ze } from "./types.js";
var o3, c3, l3, d3, u3;
export { c3, d3, l3, o3, u3 };
var __wakaru_Lr_initialized = false;
export function Lr() {
if (__wakaru_Lr_initialized) return;
__wakaru_Lr_initialized = true;
"use strict";
h(), Ce(), oe(), jn(), Ze(), o3 = /[\\/:\*\?"<>\|]/g, c3 = /[/]/g, l3 = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])(\.(.*?))?$/i, d3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", u3 = "BDEFGHIJKMOQRSTUVWXYZbdefghijkmoqrstuvwxyz0123456789";

}
