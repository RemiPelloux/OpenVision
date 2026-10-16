import { le, wr } from "./async.js";
import { ae, it } from "./buffer.js";
import { ge } from "./event.js";
import { J, j } from "./lifecycle.js";
import { KR } from "./rendererPingService.js";
import { MTe, T9, ea } from "./staticHtmlPngCapture.js";
import { Ast } from "./staticHtmlPngCaptureEncoding.js";
import { h } from "./tslib.es6.js";
import { BrowserWindow as Mst } from "electron";
import { session as Nst } from "electron";
import { screen as Pst } from "electron";
import { nativeImage as Rst } from "electron";
function kst(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e);
}
function v9(e) {
    return typeof e == "number" && Number.isInteger(e) && e >= 0 && e <= 255;
}
function RTe(e) {
    return typeof e == "number" && Number.isSafeInteger(e);
}
function Sst(e) {
    return `#${e.map((t)=>t.toString(16).padStart(2, "0")).join("")}`;
}
function CTe(e, t) {
    return e / Math.max(1, t);
}
function ITe({ width: e, height: t }, n, r) {
    const s = CTe(n, r.scaleFactor);
    return {
        x: 0,
        y: 0,
        width: Math.round(e * s),
        height: Math.round(t * s)
    };
}
function yst({ width: e, height: t }) {
    for (const n of [
        2,
        1
    ]){
        const r = e * n, s = t * n;
        if (r <= ea.maxPhysicalSide && s <= ea.maxPhysicalSide && r * s <= ea.maxPhysicalPixels) return n;
    }
}
function wst(e) {
    if (!kst(e) || typeof e.html != "string" || !RTe(e.width) || !RTe(e.height) || e.width < 1 || e.height < 1 || e.width > ea.maxCssWidth || e.height > ea.maxCssHeight || !Array.isArray(e.backgroundRgb) || e.backgroundRgb.length !== 3 || !v9(e.backgroundRgb[0]) || !v9(e.backgroundRgb[1]) || !v9(e.backgroundRgb[2])) return {
        kind: "error",
        code: "invalid-input"
    };
    if (e.html.length > ea.maxHtmlBytes || new TextEncoder().encode(e.html).byteLength > ea.maxHtmlBytes) return {
        kind: "error",
        code: "too-large"
    };
    const t = e.width, n = e.height, r = yst({
        width: t,
        height: n
    });
    return r === void 0 ? {
        kind: "error",
        code: "too-large"
    } : {
        kind: "valid",
        request: {
            html: e.html,
            width: t,
            height: n,
            backgroundRgb: [
                e.backgroundRgb[0],
                e.backgroundRgb[1],
                e.backgroundRgb[2]
            ]
        },
        scale: r
    };
}
function Est(e) {
    try {
        return new URL(e).protocol === "data:";
    } catch  {
        return !1;
    }
}
function bst(e, t, n) {
    const r = CTe(t, n.scaleFactor), s = ITe(e, t, n);
    return {
        x: n.x,
        y: n.y,
        width: s.width,
        height: s.height,
        useContentSize: !0,
        enableLargerThanScreen: !0,
        show: !1,
        frame: !1,
        resizable: !1,
        skipTaskbar: !0,
        transparent: !1,
        backgroundColor: Sst(e.backgroundRgb),
        webPreferences: {
            partition: T9,
            offscreen: !1,
            zoomFactor: r,
            sandbox: !0,
            nodeIntegration: !1,
            contextIsolation: !0,
            javascript: !1,
            webSecurity: !0,
            webgl: !1,
            plugins: !1,
            spellcheck: !1,
            webviewTag: !1,
            imageAnimationPolicy: "noAnimation"
        }
    };
}
function Cst(e, t) {
    return e.toPNG({
        scaleFactor: t
    });
}
function Ist(e, t, n) {
    const r = Cst(e, t), s = Rst.createFromBuffer(r), i = s.getSize();
    if (!(i.width < n.width || i.height < n.height || i.width > n.width + 1 || i.height > n.height + 1)) return i.width === n.width && i.height === n.height ? r : s.crop({
        x: 0,
        y: 0,
        ...n
    }).toPNG({
        scaleFactor: 1
    });
}
function Dst(e) {
    if (e.byteLength < 24 || !NTe.every((n, r)=>e[r] === n)) return;
    const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return {
        width: t.getUint32(16),
        height: t.getUint32(20)
    };
}
function Ost(e, t) {
    const n = Dst(e);
    return n?.width === t.width && n.height === t.height;
}
var NTe, DTe;
export { CTe, Cst, DTe, Dst, Est, ITe, Ist, NTe, Ost, RTe, Sst, bst, kst, v9, wst, yst };
var __wakaru_Lst_initialized = false;
export function Lst() {
if (__wakaru_Lst_initialized) return;
__wakaru_Lst_initialized = true;
"use strict";
h(), le(), it(), j(), MTe(), Ast(), NTe = [
    137,
    80,
    78,
    71,
    13,
    10,
    26,
    10
], DTe = class extends J {
    constructor(){
        super(), this.blockedActiveCapture = !1, this.captureInFlight = !1, this.captureSession = Nst.fromPartition(T9), this.captureSession.setPermissionCheckHandler(()=>!1), this.captureSession.setPermissionRequestHandler((t, n, r)=>r(!1)), this.captureSession.webRequest.onBeforeRequest((t, n)=>{
            if (Est(t.url)) {
                n({});
                return;
            }
            t.webContentsId === this.activeWebContentsId && (this.blockedActiveCapture = !0), n({
                cancel: !0
            });
        });
        const e = (t, n, r)=>{
            r.id === this.activeWebContentsId && (this.blockedActiveCapture = !0), t.preventDefault(), n.cancel();
        };
        this.captureSession.on("will-download", e), this._register(ge(()=>{
            this.captureSession.removeListener("will-download", e), this.captureSession.webRequest.onBeforeRequest(null), this.captureSession.setPermissionCheckHandler(null), this.captureSession.setPermissionRequestHandler(null);
        }));
    }
    async capture(e) {
        if (this.captureInFlight) return {
            kind: "error",
            code: "busy"
        };
        const t = wst(e);
        if (t.kind === "error") return t;
        const { request: n, scale: r } = t;
        this.captureInFlight = !0, this.blockedActiveCapture = !1;
        const s = {
            width: n.width * r,
            height: n.height * r
        };
        let i, a;
        try {
            const m = Pst.getPrimaryDisplay();
            i = ITe(n, r, m);
            const f = bst(n, r, {
                scaleFactor: m.scaleFactor,
                x: m.bounds.x,
                y: m.bounds.y
            });
            a = new Mst(f);
        } catch  {
            return this.captureInFlight = !1, {
                kind: "error",
                code: "capture-failed"
            };
        }
        const o = a.webContents;
        this.activeWebContentsId = o.id;
        const l = new wr, d = (m)=>{
            this.blockedActiveCapture = !0, m.preventDefault();
        }, u = ()=>{
            l.complete("renderer-failed");
        };
        o.once("render-process-gone", u), o.on("will-navigate", d), o.on("will-frame-navigate", d), o.on("will-redirect", d), o.setWindowOpenHandler(()=>(this.blockedActiveCapture = !0, {
                action: "deny"
            }));
        try {
            return await KR((async ()=>{
                await a.loadURL(`data:text/html;charset=utf-8;base64,${Buffer.from(n.html, "utf8").toString("base64")}`);
                const v = await Promise.race([
                    a.capturePage(i, {
                        stayHidden: !0
                    }),
                    l.p
                ]);
                if (v === "renderer-failed") return {
                    kind: "error",
                    code: "capture-failed"
                };
                if (this.blockedActiveCapture) return {
                    kind: "error",
                    code: "unsupported-content"
                };
                const T = Ist(v, r, s);
                return T === void 0 || T.byteLength > ea.maxPngBytes || !Ost(T, s) ? {
                    kind: "error",
                    code: "capture-failed"
                } : {
                    pngBytes: ae.wrap(T),
                    ...s
                };
            })(), ea.timeoutMs) ?? {
                kind: "error",
                code: "timeout"
            };
        } catch  {
            return {
                kind: "error",
                code: this.blockedActiveCapture ? "unsupported-content" : "capture-failed"
            };
        } finally{
            o.removeListener("render-process-gone", u), o.removeListener("will-navigate", d), o.removeListener("will-frame-navigate", d), o.removeListener("will-redirect", d), this.activeWebContentsId = void 0, this.captureInFlight = !1, a.isDestroyed() || a.destroy();
        }
    }
};

}
