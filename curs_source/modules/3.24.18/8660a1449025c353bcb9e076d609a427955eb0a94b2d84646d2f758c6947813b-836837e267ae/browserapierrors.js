import { J3w, dHf, eNw, eZ, i1, tNw } from "./BA.js";
import { CD } from "./growthbook.js";
import { fh } from "./index_10.js";
import { E } from "./tslib.es6.js";
var hHf, pHf, mHf, J8l;
export { J8l, hHf, mHf, pHf };
var __wakaru_gHf_initialized = false;
export function gHf() {
if (__wakaru_gHf_initialized) return;
__wakaru_gHf_initialized = true;
E(), fh(), eZ(), hHf = [
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
], pHf = "BrowserApiErrors", mHf = ((t = {})=>{
    const e = {
        XMLHttpRequest: !0,
        eventTarget: !0,
        requestAnimationFrame: !0,
        setInterval: !0,
        setTimeout: !0,
        unregisterOriginalCallbacks: !1,
        ...t
    };
    return {
        name: pHf,
        setupOnce () {
            e.setTimeout && CD(i1, "setTimeout", dHf), e.setInterval && CD(i1, "setInterval", dHf), e.requestAnimationFrame && CD(i1, "requestAnimationFrame", J3w), e.XMLHttpRequest && "XMLHttpRequest" in i1 && CD(XMLHttpRequest.prototype, "send", eNw);
            const n = e.eventTarget;
            n && (Array.isArray(n) ? n : hHf).forEach((r)=>tNw(r, e));
        }
    };
}), J8l = mHf;

}
