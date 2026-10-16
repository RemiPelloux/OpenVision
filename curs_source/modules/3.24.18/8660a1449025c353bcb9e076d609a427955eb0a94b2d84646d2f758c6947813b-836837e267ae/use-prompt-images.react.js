import { qJ } from "./ImageUtil.js";
import { wl } from "./agentRepositoryServiceTypes.js";
import { Ss } from "./aiMiscServices.js";
import { JDf } from "./attachment-telemetry.js";
import { Xpe } from "./composerContextServiceTypes.js";
import { Pl } from "./composerDataServiceTypes.js";
import { LS } from "./composerEventService.js";
import { bO } from "./dnd_3.js";
import { Mt } from "./index_197.js";
import { Ji } from "./log.js";
import { eIt } from "./promptAttachmentUtil.js";
import { Lr } from "./resources.js";
import { E } from "./tslib.es6.js";
import { fn } from "./uri.js";
import { L5l } from "./use-agent-readable-resource.react.js";
import { N5l } from "./use-file-drop-mentions.react.js";
import { e3f } from "./use-image-persistence-services.react.js";
import { Lg } from "./use-service.react.js";
var eFl, tFl, c3f, u3f, d3f, nFl;
export { c3f, d3f, eFl, nFl, tFl, u3f };
var __wakaru_h3f_initialized = false;
export function h3f() {
if (__wakaru_h3f_initialized) return;
__wakaru_h3f_initialized = true;
"use strict";
E(), Mt(), Lr(), fn(), bO(), Xpe(), Pl(), LS(), qJ(), eIt(), wl(), Ss(), Ji(), JDf(), L5l(), N5l(), e3f(), Lg(), eFl = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), tFl = (t)=>{
    throw TypeError(t);
}, c3f = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && tFl("Object expected");
        var i, r;
        n && (i = e[eFl("asyncDispose")]), i === void 0 && (i = e[eFl("dispose")], n && (r = i)), typeof i != "function" && tFl("Object not disposable"), r && (i = function() {
            try {
                r.call(this);
            } catch (s) {
                return Promise.reject(s);
            }
        }), t.push([
            n,
            i,
            e
        ]);
    } else n && t.push([
        n
    ]);
    return e;
}, u3f = (t, e, n)=>{
    var i = typeof SuppressedError == "function" ? SuppressedError : function(o, a, l, c) {
        return c = Error(l), c.name = "SuppressedError", c.error = o, c.suppressed = a, c;
    }, r = (o)=>e = n ? new i(o, e, "An error was suppressed during disposal") : (n = !0, o), s = (o)=>{
        for(; o = t.pop();)try {
            var a = o[1] && o[1].call(o[2]);
            if (o[0]) return Promise.resolve(a).then(s, (l)=>(r(l), s()));
        } catch (l) {
            r(l);
        }
        if (n) throw e;
    };
    return s();
}, d3f = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96">',
    '<rect width="96" height="96" rx="12" fill="#2f3136"/>',
    '<path d="M30 62h36L55 48l-8 10-6-7-11 11z" fill="#8b949e"/>',
    '<circle cx="37" cy="36" r="6" fill="#8b949e"/>',
    "</svg>"
].join(""), nFl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(d3f)}`;

}
