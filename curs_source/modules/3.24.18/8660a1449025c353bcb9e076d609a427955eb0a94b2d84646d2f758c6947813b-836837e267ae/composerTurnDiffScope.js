import { sd } from "./chat_pb.js";
import { tU } from "./composerMessagesHelpers.js";
import { aNi } from "./composerMessagesToolCalls.js";
import { A6l } from "./composerSubagentRunSegments.js";
import { eCe } from "./composerTaskFollowupMessageUtils.js";
import { uks } from "./composerToolCallViewModel.js";
import { Cze } from "./debugLogFileUtils.js";
import { Mt } from "./index_197.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var D6l, N6l, V5f, K5f, Y5f, L6l, O6l;
export { D6l, K5f, L6l, N6l, O6l, V5f, Y5f };
var __wakaru_F6l_initialized = false;
export function F6l() {
if (__wakaru_F6l_initialized) return;
__wakaru_F6l_initialized = true;
"use strict";
E(), Mt(), sd(), Pu(), tU(), aNi(), uks(), A6l(), eCe(), Cze(), D6l = (t, e)=>(e = Symbol[t]) ? e : Symbol.for("Symbol." + t), N6l = (t)=>{
    throw TypeError(t);
}, V5f = (t, e, n)=>{
    if (e != null) {
        typeof e != "object" && typeof e != "function" && N6l("Object expected");
        var i, r;
        n && (i = e[D6l("asyncDispose")]), i === void 0 && (i = e[D6l("dispose")], n && (r = i)), typeof i != "function" && N6l("Object not disposable"), r && (i = function() {
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
}, K5f = (t, e, n)=>{
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
}, Y5f = 3, L6l = 50, O6l = 50;

}
