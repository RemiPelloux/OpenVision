import { Ps, jn } from "./HVr.js";
import { dr } from "./arrays.js";
import { bn } from "./async.js";
import { vI } from "./extpath.js";
import { ag, oc } from "./map.js";
import { ba } from "./path_2.js";
import { x } from "./tslib.es6.js";
var cNn, oao, lNn, uNn, FOd, BOd, UOd, $Od, HOd, WOd, GOd, aao, cao, s1e;
export { $Od, BOd, FOd, GOd, HOd, UOd, WOd, aao, cNn, cao, lNn, oao, s1e, uNn };
var __wakaru_qM_initialized = false;
export function qM() {
if (__wakaru_qM_initialized) return;
__wakaru_qM_initialized = true;
"use strict";
x(), dr(), bn(), vI(), oc(), ba(), jn(), Ps(), cNn = "**", oao = "/", lNn = "[/\\\\]", uNn = "[^/\\\\]", FOd = /\//g, BOd = /^\*\*\/\*\.[\w\.-]+$/, UOd = /^\*\*\/([\w\.-]+)\/?$/, $Od = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/, HOd = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/, WOd = /^\*\*((\/[\w\.-]+)+)\/?$/, GOd = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/, aao = new ag(1e4), cao = function() {
    return !1;
}, s1e = function() {
    return null;
};

}
