import { KT, eJ } from "./index_4.js";
import { R4 } from "./index_6.js";
import { ffe } from "./index_7.js";
import { i } from "./plugin-brand-icon.js";
function iir({ defaultOrigin: r = "", allowedLinkPrefixes: e = [], allowedImagePrefixes: a = [], allowDataImages: s = !1, allowedProtocols: l = [], blockedImageClass: u = "inline-block bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-3 py-1 rounded text-sm", blockedLinkClass: p = "text-gray-500", linkBlockPolicy: m = kB.indicator, imageBlockPolicy: b = kB.indicator }) {
    const g = e.length && !e.every((v)=>v === "*"), _ = a.length && !a.every((v)=>v === "*");
    if (!r && (g || _)) throw new Error("defaultOrigin is required when allowedLinkPrefixes or allowedImagePrefixes are provided");
    return (v)=>{
        const x = uir(r, e, a, s, l, u, p, m, b);
        HIt(v), R4(v, x);
    };
}
function GIt(r, e) {
    if (typeof r != "string") return null;
    try {
        return new URL(r);
    } catch  {
        if (e) try {
            return new URL(r, e);
        } catch  {
            return null;
        }
        if (r.startsWith("/") || r.startsWith("./") || r.startsWith("../")) try {
            return new URL(r, "http://example.com");
        } catch  {
            return null;
        }
        return null;
    }
}
function air(r) {
    return typeof r != "string" ? !1 : r.startsWith("/") || r.startsWith("./") || r.startsWith("../");
}
function WIt(r, e, a, s = !1, l = !1, u = []) {
    if (!r) return null;
    if (typeof r == "string" && r.startsWith("#") && !l) try {
        if (new URL(r, "http://example.com").hash === r) return r;
    } catch  {}
    if (typeof r == "string" && r.startsWith("data:")) return l && s && r.startsWith("data:image/") ? r : null;
    if (typeof r == "string" && r.startsWith("blob:")) {
        try {
            if (new URL(r).protocol === "blob:" && r.length > 5) {
                const _ = r.substring(5);
                if (_ && _.length > 0 && _ !== "invalid") return r;
            }
        } catch  {
            return null;
        }
        return null;
    }
    const p = GIt(r, a);
    if (!p || lir.has(p.protocol) || !(cir.has(p.protocol) || u.includes(p.protocol) || u.includes("*"))) return null;
    if (p.protocol === "mailto:" || !p.protocol.match(/^https?:$/)) return p.href;
    const b = air(r);
    return p && e.some((g)=>{
        const _ = GIt(g, a);
        return !_ || _.origin !== p.origin ? !1 : p.href.startsWith(_.href);
    }) ? b ? p.pathname + p.search + p.hash : p.href : e.includes("*") ? p.protocol !== "https:" && p.protocol !== "http:" ? null : b ? p.pathname + p.search + p.hash : p.href : null;
}
function HIt(r) {
    if ("children" in r && Array.isArray(r.children)) {
        r.children = r.children.filter((e)=>e != null);
        for (const e of r.children)HIt(e);
    }
}
function oir(r, e, a) {
    return e === kB.remove ? {
        type: "remove"
    } : e === kB.textOnly ? {
        type: "replace",
        element: {
            type: "element",
            tagName: "span",
            properties: {},
            children: [
                ...r.children
            ]
        }
    } : {
        type: "replace",
        element: {
            type: "element",
            tagName: "span",
            properties: {
                title: "Blocked URL: " + String(r.properties.href),
                class: a
            },
            children: [
                ...r.children,
                {
                    type: "text",
                    value: " [blocked]"
                }
            ]
        }
    };
}
function sir(r, e, a) {
    if (e === kB.remove) return {
        type: "remove"
    };
    if (e === kB.textOnly) {
        const s = String(r.properties.alt || "");
        return s ? {
            type: "replace",
            element: {
                type: "element",
                tagName: "span",
                properties: {},
                children: [
                    {
                        type: "text",
                        value: s
                    }
                ]
            }
        } : {
            type: "remove"
        };
    }
    return {
        type: "replace",
        element: {
            type: "element",
            tagName: "span",
            properties: {
                class: a
            },
            children: [
                {
                    type: "text",
                    value: "[Image blocked: " + String(r.properties.alt || "No description") + "]"
                }
            ]
        }
    };
}
var kB, cir, lir, uNe, uir;
export { GIt, HIt, WIt, air, cir, iir, kB, lir, oir, sir, uNe, uir };
var __wakaru_Zki_initialized = false;
export function Zki() {
if (__wakaru_Zki_initialized) return;
__wakaru_Zki_initialized = true;
ffe(), kB = {
    indicator: "indicator",
    textOnly: "text-only",
    remove: "remove"
}, i(iir, "harden"), i(GIt, "parseUrl"), i(air, "isPathRelativeUrl"), cir = new Set([
    "https:",
    "http:",
    "irc:",
    "ircs:",
    "mailto:",
    "xmpp:",
    "blob:"
]), lir = new Set([
    "javascript:",
    "data:",
    "file:",
    "vbscript:"
]), i(WIt, "transformUrl"), i(HIt, "stripNullChildren"), uNe = Symbol("node-seen"), i(oir, "resolveLinkBlockPolicy"), i(sir, "resolveImageBlockPolicy"), uir = i((r, e, a, s, l, u, p, m, b)=>{
    const g = i((_, v, x)=>{
        if (_.type !== "element" || _[uNe]) return eJ;
        if (_.tagName === "a") {
            const C = WIt(_.properties.href, e, r, !1, !1, l);
            if (C === null) {
                if (_[uNe] = !0, R4(_, g), x && typeof v == "number") {
                    const E = oir(_, m, p);
                    if (E.type === "remove") return x.children.splice(v, 1), [
                        KT,
                        v
                    ];
                    x.children[v] = E.element;
                }
                return KT;
            } else return _.properties.href = C, _.properties.target = "_blank", _.properties.rel = "noopener noreferrer", eJ;
        }
        if (_.tagName === "img") {
            const C = WIt(_.properties.src, a, r, s, !0, l);
            if (C === null) {
                if (_[uNe] = !0, R4(_, g), x && typeof v == "number") {
                    const E = sir(_, b, u);
                    if (E.type === "remove") return x.children.splice(v, 1), [
                        KT,
                        v
                    ];
                    x.children[v] = E.element;
                }
                return KT;
            } else return _.properties.src = C, eJ;
        }
        return eJ;
    }, "visitor");
    return g;
}, "createVisitor");

}
