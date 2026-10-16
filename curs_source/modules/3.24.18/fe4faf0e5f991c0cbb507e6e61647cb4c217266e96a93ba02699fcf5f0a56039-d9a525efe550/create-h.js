import { oJ } from "./find.js";
import { EB } from "./index_10.js";
import { pNt, vNe } from "./index_11.js";
import { $ir } from "./index_12.js";
import { svi } from "./index_13.js";
import { CNe, fNt } from "./index_14.js";
import { iJ } from "./normalize.js";
import { i } from "./plugin-brand-icon.js";
function hNt(r, e, a) {
    const s = a ? Rir(a) : void 0;
    function l(u, p, ...m) {
        let b;
        if (u == null) {
            b = {
                type: "root",
                children: []
            };
            const g = p;
            m.unshift(g);
        } else {
            b = $ir(u, e);
            const g = b.tagName.toLowerCase(), _ = s ? s.get(g) : void 0;
            if (b.tagName = _ || g, Iir(p)) m.unshift(p);
            else for (const [v, x] of Object.entries(p))Nir(r, b.properties, v, x);
        }
        for (const g of m)SNe(b.children, g);
        return b.type === "element" && b.tagName === "template" && (b.content = {
            type: "root",
            children: b.children
        }, b.children = []), b;
    }
    return i(l, "h"), l;
}
function Iir(r) {
    if (r === null || typeof r != "object" || Array.isArray(r)) return !0;
    if (typeof r.type != "string") return !1;
    const e = r, a = Object.keys(r);
    for (const s of a){
        const l = e[s];
        if (l && typeof l == "object") {
            if (!Array.isArray(l)) return !0;
            const u = l;
            for (const p of u)if (typeof p != "number" && typeof p != "string") return !0;
        }
    }
    return !!("children" in r && Array.isArray(r.children));
}
function Nir(r, e, a, s) {
    const l = oJ(r, a);
    let u;
    if (s != null) {
        if (typeof s == "number") {
            if (Number.isNaN(s)) return;
            u = s;
        } else typeof s == "boolean" ? u = s : typeof s == "string" ? l.spaceSeparated ? u = fNt(s) : l.commaSeparated ? u = pNt(s) : l.commaOrSpaceSeparated ? u = fNt(pNt(s).join(" ")) : u = gNt(l, l.property, s) : Array.isArray(s) ? u = [
            ...s
        ] : u = l.property === "style" ? Mir(s) : String(s);
        if (Array.isArray(u)) {
            const p = [];
            for (const m of u)p.push(gNt(l, l.property, m));
            u = p;
        }
        l.property === "className" && Array.isArray(e.className) && (u = e.className.concat(u)), e[l.property] = u;
    }
}
function SNe(r, e) {
    if (e != null) if (typeof e == "number" || typeof e == "string") r.push({
        type: "text",
        value: String(e)
    });
    else if (Array.isArray(e)) for (const a of e)SNe(r, a);
    else if (typeof e == "object" && "type" in e) e.type === "root" ? SNe(r, e.children) : r.push(e);
    else throw new Error("Expected node, nodes, or string, got `" + e + "`");
}
function gNt(r, e, a) {
    if (typeof a == "string") {
        if (r.number && a && !Number.isNaN(Number(a))) return Number(a);
        if ((r.boolean || r.overloadedBoolean) && (a === "" || iJ(a) === iJ(e))) return !0;
    }
    return a;
}
function Mir(r) {
    const e = [];
    for (const [a, s] of Object.entries(r))e.push([
        a,
        s
    ].join(": "));
    return e.join("; ");
}
function Rir(r) {
    const e = new Map;
    for (const a of r)e.set(a.toLowerCase(), a);
    return e;
}
export { Iir, Mir, Nir, Rir, SNe, gNt, hNt };
var __wakaru_cvi_initialized = false;
export function cvi() {
if (__wakaru_cvi_initialized) return;
__wakaru_cvi_initialized = true;
vNe(), svi(), EB(), CNe(), i(hNt, "createH"), i(Iir, "isChild"), i(Nir, "addProperty"), i(SNe, "addChild"), i(gNt, "parsePrimitive"), i(Mir, "style"), i(Rir, "createAdjustMap");

}
