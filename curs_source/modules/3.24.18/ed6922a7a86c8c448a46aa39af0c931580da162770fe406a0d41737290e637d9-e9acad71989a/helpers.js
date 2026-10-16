import { jH, pK } from "./HVr.js";
import { Km } from "./composerMessageStorageService.js";
import { fLt } from "./functiontostring.js";
import { sA } from "./growthbook.js";
import { $u } from "./index_10.js";
import { nqe, qH, rhi } from "./qIc.js";
import { XB } from "./trace.js";
import { x } from "./tslib.es6.js";
import { Og } from "./worldwide.js";
function Jy_() {
    Ssr++, setTimeout(()=>{
        Ssr--;
    });
}
function Yzt(e, t = {}) {
    function n(r) {
        return typeof r == "function";
    }
    if (!n(e)) return e;
    try {
        const r = e.__sentry_wrapped__;
        if (r) return typeof r == "function" ? r : e;
        if (fLt(e)) return e;
    } catch  {
        return e;
    }
    const i = function(...r) {
        try {
            const s = r.map((o)=>Yzt(o, t));
            return e.apply(this, s);
        } catch (s) {
            throw Jy_(), XB((o)=>{
                o.addEventProcessor((a)=>(t.mechanism && (nqe(a, void 0, void 0), qH(a, t.mechanism)), a.extra = {
                        ...a.extra,
                        arguments: r
                    }, a)), Km(s);
            }), s;
        }
    };
    try {
        for(const r in e)Object.prototype.hasOwnProperty.call(e, r) && (i[r] = e[r]);
    } catch  {}
    rhi(i, e), jH(e, "__sentry_wrapped__", i);
    try {
        Object.getOwnPropertyDescriptor(i, "name").configurable && Object.defineProperty(i, "name", {
            get () {
                return e.name;
            }
        });
    } catch  {}
    return i;
}
var z_, Ssr;
function Qjh(e) {
    return function(...t) {
        const n = t[0];
        return t[0] = Yzt(n, {
            mechanism: {
                handled: !1,
                type: `auto.browser.browserapierrors.${pK(e)}`
            }
        }), e.apply(this, t);
    };
}
function kS_(e) {
    return function(t) {
        return e.apply(this, [
            Yzt(t, {
                mechanism: {
                    data: {
                        handler: pK(e)
                    },
                    handled: !1,
                    type: "auto.browser.browserapierrors.requestAnimationFrame"
                }
            })
        ]);
    };
}
function wS_(e) {
    return function(...t) {
        const n = this;
        return [
            "onload",
            "onerror",
            "onprogress",
            "onreadystatechange"
        ].forEach((r)=>{
            r in n && typeof n[r] == "function" && sA(n, r, function(s) {
                const o = {
                    mechanism: {
                        data: {
                            handler: pK(s)
                        },
                        handled: !1,
                        type: `auto.browser.browserapierrors.xhr.${r}`
                    }
                }, a = fLt(s);
                return a && (o.mechanism.data.handler = pK(a)), Yzt(s, o);
            });
        }), e.apply(this, t);
    };
}
function CS_(e, t) {
    const i = z_[e]?.prototype;
    i?.hasOwnProperty?.("addEventListener") && (sA(i, "addEventListener", function(r) {
        return function(s, o, a) {
            try {
                TS_(o) && (o.handleEvent = Yzt(o.handleEvent, {
                    mechanism: {
                        data: {
                            handler: pK(o),
                            target: e
                        },
                        handled: !1,
                        type: "auto.browser.browserapierrors.handleEvent"
                    }
                }));
            } catch  {}
            return t.unregisterOriginalCallbacks && ES_(this, s, o), r.apply(this, [
                s,
                Yzt(o, {
                    mechanism: {
                        data: {
                            handler: pK(o),
                            target: e
                        },
                        handled: !1,
                        type: "auto.browser.browserapierrors.addEventListener"
                    }
                }),
                a
            ]);
        };
    }), sA(i, "removeEventListener", function(r) {
        return function(s, o, a) {
            try {
                const c = o.__sentry_wrapped__;
                c && r.call(this, s, c, a);
            } catch  {}
            return r.call(this, s, o, a);
        };
    }));
}
function TS_(e) {
    return typeof e.handleEvent == "function";
}
function ES_(e, t, n) {
    e && typeof e == "object" && "removeEventListener" in e && typeof e.removeEventListener == "function" && e.removeEventListener(t, n);
}
var Jjh, eqh, tqh, E2o;
export { CS_, E2o, ES_, Jjh, Jy_, Qjh, Ssr, TS_, Yzt, eqh, kS_, tqh, wS_, z_ };
var __wakaru_Q$_initialized = false;
export function Q$() {
if (__wakaru_Q$_initialized) return;
__wakaru_Q$_initialized = true;
x(), $u(), z_ = Og, Ssr = 0;

}
var __wakaru_nqh_initialized = false;
export function nqh() {
if (__wakaru_nqh_initialized) return;
__wakaru_nqh_initialized = true;
x(), $u(), Q$(), Jjh = [
    "EventTarget",
    "Window",
    "Node",
    "ApplicationCache",
    "AudioTrackList",
    "BroadcastChannel",
    "ChannelMergerNode",
    "CryptoOperation",
    "EventSource",
    "FileReader",
    "HTMLUnknownElement",
    "IDBDatabase",
    "IDBRequest",
    "IDBTransaction",
    "KeyOperation",
    "MediaController",
    "MessagePort",
    "ModalWindow",
    "Notification",
    "SVGElementInstance",
    "Screen",
    "SharedWorker",
    "TextTrack",
    "TextTrackCue",
    "TextTrackList",
    "WebSocket",
    "WebSocketWorker",
    "Worker",
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequestUpload"
], eqh = "BrowserApiErrors", tqh = ((e = {})=>{
    const t = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        unregisterOriginalCallbacks: !1,
        ...e
    };
    return {
        name: eqh,
        setupOnce () {
            t.setTimeout && sA(z_, "setTimeout", Qjh), t.setInterval && sA(z_, "setInterval", Qjh), t.requestAnimationFrame && sA(z_, "requestAnimationFrame", kS_), t.XMLHttpRequest && "XMLHttpRequest" in z_ && sA(XMLHttpRequest.prototype, "send", wS_);
            const n = t.eventTarget;
            n && (Array.isArray(n) ? n : Jjh).forEach((r)=>CS_(r, t));
        }
    };
}), E2o = tqh;

}
