import { rD } from "./Asv.js";
import { K20, Qec, Y20 } from "./MRv.js";
import { noe } from "./dompurify.js";
import { Q20 } from "./glass-svg-preview-utils.js";
import { KRv } from "./glass-tex-preview-eligibility.js";
import { XR } from "./resources.js";
import { Vd } from "./storage-keys.js";
import { rt } from "./uri.js";
export function GRv(t) {
    if (!(typeof document > "u" || typeof noe.sanitize != "function")) return noe.sanitize(t, {
        USE_PROFILES: {
            svg: !0,
            svgFilters: !0
        },
        ADD_TAGS: [
            "use"
        ],
        FORBID_TAGS: [
            "script",
            "foreignObject"
        ]
    });
}
export function Z20(t) {
    const e = GRv(t)?.trim();
    if (!(!e || !/<svg[\s>]/i.test(e))) return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(e)}`;
}
import { useEffect as J20, useMemo as qRv, useState as eP0 } from "./react-runtime/react/esm-index-production.js";
export function tP0({ editorHandle: t, filePath: e, editorType: n, editorSnapshot: i }) {
    const [r, s] = rD({
        key: Vd.SVG_VIEW_MODE,
        defaultValue: "preview",
        decode: K20
    }), o = e !== void 0 && n === "code" && Y20(e), a = i.currentFilePath === e && !i.isLoading, l = a && (i.error !== void 0 || i.largeFileGate !== void 0 || i.contentType !== "text"), c = o && !l, u = c && r === "preview", d = u && a && i.contentType === "text", h = Qec(t, d), [p, g] = eP0(()=>zRv);
    J20(()=>{
        if (!d || p !== void 0) return;
        let _ = !1;
        return Promise.resolve().then(()=>(Q20(), WRv)).then(({ svgSourceToPreviewDataUrl: b })=>{
            zRv = b, _ || g(()=>b);
        }).catch(()=>{
            _ || g(()=>()=>{});
        }), ()=>{
            _ = !0;
        };
    }, [
        d,
        p
    ]);
    const f = qRv(()=>{
        if (!u) return {
            status: "hidden"
        };
        if (h === void 0 || p === void 0) return {
            status: "loading"
        };
        const _ = p(h);
        return _ !== void 0 ? {
            status: "ready",
            dataUrl: _
        } : {
            status: "unavailable"
        };
    }, [
        u,
        h,
        p
    ]);
    return qRv(()=>({
            showModeSwitcher: c,
            preview: f,
            mode: r,
            onModeChange: s
        }), [
        c,
        f,
        r,
        s
    ]);
}
var zRv;
export function iP0(t) {
    return t === "source" ? "source" : "preview";
}
export function VRv(t) {
    if (!t) return !1;
    try {
        return KRv.has(XR(rt.parse(t)).toLowerCase());
    } catch  {
        return !1;
    }
}
function rP0({ forceExternal: t, isHandledByGlass: e, isTrusted: n }) {
    return !n && (t || !e);
}
export async function etc({ dialogService: t, forceExternal: e, href: n, isHandledByGlass: i, isTrusted: r, openerService: s, uri: o }) {
    if (rP0({
        forceExternal: e,
        isHandledByGlass: i,
        isTrusted: r
    })) {
        const { confirmed: a } = await t.confirm({
            type: "warning",
            message: "Open external link?",
            detail: `This link points to:

${n}

It's outside Cursor's trusted set. Only continue if you trust the source.`,
            primaryButton: "Open Link"
        });
        if (!a) return !1;
    }
    return s.open(o, {
        ...e ? {
            openExternal: !0
        } : {},
        fromUserGesture: !0,
        suppressLocalhostAutoOpenToast: !0
    });
}

export var WRv = {};
Object.defineProperty(WRv, "sanitizeSvgMarkupForLocalPreview", {
    enumerable: true,
    get: ()=>GRv
});
Object.defineProperty(WRv, "svgSourceToPreviewDataUrl", {
    enumerable: true,
    get: ()=>Z20
});
