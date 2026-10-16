import { a } from "./business-error.js";
function $d(e) {
    const t = {
        type: "tag",
        name: "",
        voidElement: !1,
        attrs: {},
        children: []
    }, r = e.match(/<\/?([^\s]+?)[/\s>]/);
    if (r && (t.name = r[1], (j1[r[1]] || e.charAt(e.length - 2) === "/") && (t.voidElement = !0), t.name.startsWith("!--"))) {
        const i = e.indexOf("-->");
        return {
            type: "comment",
            comment: i !== -1 ? e.slice(4, i) : ""
        };
    }
    const n = new RegExp(z1);
    let o = null;
    for(; o = n.exec(e), o !== null;)if (o[0].trim()) if (o[1]) {
        const i = o[1].trim();
        let s = [
            i,
            null
        ];
        const c = i.indexOf("=");
        c > -1 && (s = [
            i.slice(0, c),
            i.slice(c + 1)
        ]), t.attrs[s[0]] = s[1], n.lastIndex--;
    } else o[2] && (t.attrs[o[2]] = o[3].trim().substring(1, o[3].length - 1));
    return t;
}
function Kd(e) {
    e.forEach(function(t) {
        if (t.type === "text") {
            t.content = t.content.split(ra).join("<");
            return;
        }
        if (t.type === "comment") {
            t.comment = t.comment.split(ra).join("<");
            return;
        }
        for(const r in t.attrs){
            const n = t.attrs[r];
            typeof n == "string" && n.indexOf(ra) > -1 && (t.attrs[r] = n.split(ra).join("<"));
        }
        t.children.length && Kd(t.children);
    });
}
function V1(e, t) {
    const r = t && t.components || K1, n = t && t.allowedTags;
    let o = !1;
    if (n) {
        const f = typeof n == "function" ? n : function(y) {
            return n.indexOf(y) > -1;
        };
        let v = "", x = 0;
        xi.lastIndex = 0;
        let g;
        for(; g = xi.exec(e);){
            const y = g[0];
            v += e.slice(x, g.index);
            const w = y.match(H1);
            y.startsWith("<!--") || w && f(w[1]) ? (v += y, x = g.index + y.length) : (o = !0, v += ra, x = g.index + 1, xi.lastIndex = x);
        }
        e = v + e.slice(x);
    }
    const i = [], s = [];
    let c, l = -1, m = !1, u = 0, d;
    if (e.indexOf("<") !== 0) {
        const f = e.indexOf("<");
        i.push({
            type: "text",
            content: f === -1 ? e : e.substring(0, f)
        });
    }
    const p = [];
    let h;
    for(; h = xi.exec(e);)p.push(h);
    return p.forEach(function(f, v) {
        const x = f[0];
        if (!x || x.startsWith("<!--")) return;
        let g = 0, y = 0, w = -1, b = null;
        for(let R = 0; R < x.length; R++){
            const E = x.charAt(R);
            b ? E === b && (b = null) : E === '"' || E === "'" ? b = E : E === "<" ? (g++, g === 2 && (w = R)) : E === ">" && y++;
        }
        const T = w > -1 && /[a-zA-Z0-9\-!/]/.test(x.charAt(w + 1));
        if (g > y && T) {
            const R = x.substring(0, w), E = x.substring(R.length);
            p[v][0] = E, p[v].index += R.length;
        }
    }), p.forEach(function(f, v) {
        const x = f[0];
        if (!x) return;
        const g = f.index;
        if (g < u) return;
        if (m) {
            if (x !== "</" + c.name + ">") return;
            m = !1;
        }
        const y = x.charAt(1) !== "/", w = x.startsWith("<!--"), b = g + x.length, T = e.charAt(b), R = p[v + 1];
        let E;
        if (T === "<" && R) {
            const A = e.substring(b, R.index);
            E = A.split("<").length > A.split(">").length;
        }
        let S;
        if (w) {
            const A = $d(x);
            if (l < 0) return i.push(A), i;
            S = s[l], S.children.push(A);
            const C = e.slice(b, R ? R.index : void 0);
            return C.length > 0 && S.children.push({
                type: "text",
                content: C
            }), i;
        }
        if (y) {
            l++, c = $d(x), c.type === "tag" && r[c.name] && (c.type = "component", m = !0);
            let A = !1;
            if (!m && !c.voidElement && $1.test(c.name)) {
                A = !0, d || (d = e.toLowerCase());
                const C = d.indexOf("</" + c.name.toLowerCase() + ">", b), P = C === -1 ? e.length : C, O = e.slice(b, P);
                O && c.children.push({
                    type: "text",
                    content: O
                }), u = P;
            }
            !c.voidElement && !m && !A && T && T !== "<" && c.children.push({
                type: "text",
                content: e.slice(b, R ? R.index : void 0)
            }), l === 0 && i.push(c), S = s[l - 1], S && S.children.push(c), s[l] = c;
        }
        if ((!y || c.voidElement) && (l > -1 && (c.voidElement || c.name === x.slice(2, -1)) && (l--, c = l === -1 ? i : s[l]), !m && (T !== "<" || E) && T)) {
            S = l === -1 ? i : s[l].children;
            const A = R ? R.index : -1;
            let C = e.slice(b, A === -1 ? void 0 : A);
            G1.test(C) && (C = " "), (A > -1 && l + S.length >= 0 || C !== " ") && S.push({
                type: "text",
                content: C
            });
        }
    }), o && Kd(i), i;
}
function B1(e) {
    const t = [];
    for(const r in e)e[r] === null ? t.push(r) : t.push(r + '="' + String(e[r]).replace(/"/g, "&quot;") + '"');
    return t.length ? " " + t.join(" ") : "";
}
function Wd(e, t) {
    switch(t.type){
        case "text":
            return e + t.content;
        case "tag":
            {
                const r = t.voidElement && t.name.toLowerCase() !== "!doctype" ? "/>" : ">";
                return e += "<" + t.name + (t.attrs ? B1(t.attrs) : "") + r, t.voidElement ? e : e + t.children.reduce(Wd, "") + "</" + t.name + ">";
            }
        case "comment":
            return e += "<!--" + t.comment + "-->", e;
    }
}
function U1(e) {
    return e.reduce(function(t, r) {
        return t + Wd("", r);
    }, "");
}
var j1, z1, xi, H1, G1, $1, ra, K1, W1;
export { $1, $d, B1, G1, H1, K1, Kd, U1, V1, W1, Wd, j1, ra, xi, z1 };
var __wakaru_y6_initialized = false;
export function y6() {
if (__wakaru_y6_initialized) return;
__wakaru_y6_initialized = true;
j1 = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
    "!doctype": !0,
    "!DOCTYPE": !0
}, z1 = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?("[^"]*"|'[^']*')/g, a($d, "parseTag"), xi = /<!--[\s\S]*?-->|<[a-zA-Z0-9\-!/](?:"[^"]*"|'[^']*'|[^'">])*>/g, H1 = /<\/?([^\s]+?)[/\s>]/, G1 = /^\s*$/, $1 = /^(script|style)$/i, ra = "\0", K1 = Object.create(null), a(Kd, "restoreSentinels"), a(V1, "parse"), a(B1, "attrString"), a(Wd, "stringifyNode"), a(U1, "stringify"), W1 = {
    parse: V1,
    stringify: U1
};

}
