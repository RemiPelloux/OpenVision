import { jn } from "./SZu.js";
import { YE } from "./assert.js";
import { It } from "./instantiation.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { fn } from "./uri.js";
var yi, l4t;
export { l4t, yi };
var __wakaru_or_initialized = false;
export function or() {
if (__wakaru_or_initialized) return;
__wakaru_or_initialized = true;
"use strict";
E(), YE(), To(), fn(), It(), yi = jn("configurationService"), l4t = ((t)=>(t[t.APPLICATION = 1] = "APPLICATION", t[t.USER = 2] = "USER", t[t.USER_LOCAL = 3] = "USER_LOCAL", t[t.USER_REMOTE = 4] = "USER_REMOTE", t[t.WORKSPACE = 5] = "WORKSPACE", t[t.WORKSPACE_FOLDER = 6] = "WORKSPACE_FOLDER", t[t.DEFAULT = 7] = "DEFAULT", t[t.MEMORY = 8] = "MEMORY", t))(l4t || {});

}
