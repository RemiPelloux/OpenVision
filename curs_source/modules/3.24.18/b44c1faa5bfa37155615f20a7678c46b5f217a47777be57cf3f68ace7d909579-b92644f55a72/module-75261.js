"use strict";
require.d(exports, {
    ss: ()=>u,
    YB: ()=>c
});
class n {
    diff(e, t, r = {}) {
        let n;
        "function" == typeof r ? (n = r, r = {}) : "callback" in r && (n = r.callback);
        const s = this.castInput(e, r), o = this.castInput(t, r), i = this.removeEmpty(this.tokenize(s, r)), a = this.removeEmpty(this.tokenize(o, r));
        return this.diffWithOptionsObj(i, a, r, n);
    }
    diffWithOptionsObj(e, t, r, n) {
        var s;
        const o = (e)=>(e = this.postProcess(e, r), n ? void setTimeout(function() {
                n(e);
            }, 0) : e), i = t.length, a = e.length;
        let c = 1, l = i + a;
        null != r.maxEditLength && (l = Math.min(l, r.maxEditLength));
        const u = null !== (s = r.timeout) && void 0 !== s ? s : 1 / 0, d = Date.now() + u, p = [
            {
                oldPos: -1,
                lastComponent: void 0
            }
        ];
        let m = this.extractCommon(p[0], t, e, 0, r);
        if (p[0].oldPos + 1 >= a && m + 1 >= i) return o(this.buildValues(p[0].lastComponent, t, e));
        let h = -1 / 0, f = 1 / 0;
        const g = ()=>{
            for(let n = Math.max(h, -c); n <= Math.min(f, c); n += 2){
                let s;
                const c = p[n - 1], l = p[n + 1];
                c && (p[n - 1] = void 0);
                let u = !1;
                if (l) {
                    const e = l.oldPos - n;
                    u = l && 0 <= e && e < i;
                }
                const d = c && c.oldPos + 1 < a;
                if (u || d) {
                    if (s = !d || u && c.oldPos < l.oldPos ? this.addToPath(l, !0, !1, 0, r) : this.addToPath(c, !1, !0, 1, r), m = this.extractCommon(s, t, e, n, r), s.oldPos + 1 >= a && m + 1 >= i) return o(this.buildValues(s.lastComponent, t, e)) || !0;
                    p[n] = s, s.oldPos + 1 >= a && (f = Math.min(f, n - 1)), m + 1 >= i && (h = Math.max(h, n + 1));
                } else p[n] = void 0;
            }
            c++;
        };
        if (n) !function e() {
            setTimeout(function() {
                if (c > l || Date.now() > d) return n(void 0);
                g() || e();
            }, 0);
        }();
        else for(; c <= l && Date.now() <= d;){
            const e = g();
            if (e) return e;
        }
    }
    addToPath(e, t, r, n, s) {
        const o = e.lastComponent;
        return o && !s.oneChangePerToken && o.added === t && o.removed === r ? {
            oldPos: e.oldPos + n,
            lastComponent: {
                count: o.count + 1,
                added: t,
                removed: r,
                previousComponent: o.previousComponent
            }
        } : {
            oldPos: e.oldPos + n,
            lastComponent: {
                count: 1,
                added: t,
                removed: r,
                previousComponent: o
            }
        };
    }
    extractCommon(e, t, r, n, s) {
        const o = t.length, i = r.length;
        let a = e.oldPos, c = a - n, l = 0;
        for(; c + 1 < o && a + 1 < i && this.equals(r[a + 1], t[c + 1], s);)c++, a++, l++, s.oneChangePerToken && (e.lastComponent = {
            count: 1,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        });
        return l && !s.oneChangePerToken && (e.lastComponent = {
            count: l,
            previousComponent: e.lastComponent,
            added: !1,
            removed: !1
        }), e.oldPos = a, c;
    }
    equals(e, t, r) {
        return r.comparator ? r.comparator(e, t) : e === t || !!r.ignoreCase && e.toLowerCase() === t.toLowerCase();
    }
    removeEmpty(e) {
        const t = [];
        for(let r = 0; r < e.length; r++)e[r] && t.push(e[r]);
        return t;
    }
    castInput(e, t) {
        return e;
    }
    tokenize(e, t) {
        return Array.from(e);
    }
    join(e) {
        return e.join("");
    }
    postProcess(e, t) {
        return e;
    }
    get useLongestToken() {
        return !1;
    }
    buildValues(e, t, r) {
        const n = [];
        let s;
        for(; e;)n.push(e), s = e.previousComponent, delete e.previousComponent, e = s;
        n.reverse();
        const o = n.length;
        let i = 0, a = 0, c = 0;
        for(; i < o; i++){
            const e = n[i];
            if (e.removed) e.value = this.join(r.slice(c, c + e.count)), c += e.count;
            else {
                if (!e.added && this.useLongestToken) {
                    let n = t.slice(a, a + e.count);
                    n = n.map(function(e, t) {
                        const n = r[c + t];
                        return n.length > e.length ? n : e;
                    }), e.value = this.join(n);
                } else e.value = this.join(t.slice(a, a + e.count));
                a += e.count, e.added || (c += e.count);
            }
        }
        return n;
    }
}
const s = new class extends n {
    constructor(){
        super(...arguments), this.tokenize = i;
    }
    equals(e, t, r) {
        return r.ignoreWhitespace ? (r.newlineIsToken && e.includes("\n") || (e = e.trim()), r.newlineIsToken && t.includes("\n") || (t = t.trim())) : r.ignoreNewlineAtEof && !r.newlineIsToken && (e.endsWith("\n") && (e = e.slice(0, -1)), t.endsWith("\n") && (t = t.slice(0, -1))), super.equals(e, t, r);
    }
};
function o(e, t, r) {
    return s.diff(e, t, r);
}
function i(e, t) {
    t.stripTrailingCr && (e = e.replace(/\r\n/g, "\n"));
    const r = [], n = e.split(/(\n|\r\n)/);
    n[n.length - 1] || n.pop();
    for(let e = 0; e < n.length; e++){
        const s = n[e];
        e % 2 && !t.newlineIsToken ? r[r.length - 1] += s : r.push(s);
    }
    return r;
}
const a = {
    includeIndex: !0,
    includeUnderline: !0,
    includeFileHeaders: !0
};
function c(e, t, r, n, s, i, a) {
    let c;
    c = a ? "function" == typeof a ? {
        callback: a
    } : a : {}, void 0 === c.context && (c.context = 4);
    const l = c.context;
    if (c.newlineIsToken) throw new Error("newlineIsToken may not be used with patch-generation functions, only with diffing functions");
    if (!c.callback) return u(o(r, n, c));
    {
        const { callback: e } = c;
        o(r, n, Object.assign(Object.assign({}, c), {
            callback: (t)=>{
                const r = u(t);
                e(r);
            }
        }));
    }
    function u(r) {
        if (!r) return;
        function n(e) {
            return e.map(function(e) {
                return " " + e;
            });
        }
        r.push({
            value: "",
            lines: []
        });
        const o = [];
        let a = 0, c = 0, u = [], p = 1, m = 1;
        for(let e = 0; e < r.length; e++){
            const t = r[e], s = t.lines || d(t.value);
            if (t.lines = s, t.added || t.removed) {
                if (!a) {
                    const t = r[e - 1];
                    a = p, c = m, t && (u = l > 0 ? n(t.lines.slice(-l)) : [], a -= u.length, c -= u.length);
                }
                for (const e of s)u.push((t.added ? "+" : "-") + e);
                t.added ? m += s.length : p += s.length;
            } else {
                if (a) if (s.length <= 2 * l && e < r.length - 2) for (const e of n(s))u.push(e);
                else {
                    const e = Math.min(s.length, l);
                    for (const t of n(s.slice(0, e)))u.push(t);
                    const t = {
                        oldStart: a,
                        oldLines: p - a + e,
                        newStart: c,
                        newLines: m - c + e,
                        lines: u
                    };
                    o.push(t), a = 0, c = 0, u = [];
                }
                p += s.length, m += s.length;
            }
        }
        for (const e of o)for(let t = 0; t < e.lines.length; t++)e.lines[t].endsWith("\n") ? e.lines[t] = e.lines[t].slice(0, -1) : (e.lines.splice(t + 1, 0, "\\ No newline at end of file"), t++);
        return {
            oldFileName: e,
            newFileName: t,
            oldHeader: s,
            newHeader: i,
            hunks: o
        };
    }
}
function l(e, t) {
    if (t || (t = a), Array.isArray(e)) {
        if (e.length > 1 && !t.includeFileHeaders) throw new Error("Cannot omit file headers on a multi-file patch. (The result would be unparseable; how would a tool trying to apply the patch know which changes are to which file?)");
        return e.map((e)=>l(e, t)).join("\n");
    }
    const r = [];
    t.includeIndex && e.oldFileName == e.newFileName && r.push("Index: " + e.oldFileName), t.includeUnderline && r.push("==================================================================="), t.includeFileHeaders && (r.push("--- " + e.oldFileName + (void 0 === e.oldHeader ? "" : "\t" + e.oldHeader)), r.push("+++ " + e.newFileName + (void 0 === e.newHeader ? "" : "\t" + e.newHeader)));
    for(let t = 0; t < e.hunks.length; t++){
        const n = e.hunks[t];
        0 === n.oldLines && (n.oldStart -= 1), 0 === n.newLines && (n.newStart -= 1), r.push("@@ -" + n.oldStart + "," + n.oldLines + " +" + n.newStart + "," + n.newLines + " @@");
        for (const e of n.lines)r.push(e);
    }
    return r.join("\n") + "\n";
}
function u(e, t, r, n, s, o, i) {
    if ("function" == typeof i && (i = {
        callback: i
    }), !(null == i ? void 0 : i.callback)) {
        const a = c(e, t, r, n, s, o, i);
        if (!a) return;
        return l(a, null == i ? void 0 : i.headerOptions);
    }
    {
        const { callback: a } = i;
        c(e, t, r, n, s, o, Object.assign(Object.assign({}, i), {
            callback: (e)=>{
                a(e ? l(e, i.headerOptions) : void 0);
            }
        }));
    }
}
function d(e) {
    const t = e.endsWith("\n"), r = e.split("\n").map((e)=>e + "\n");
    return t ? r.pop() : r.push(r.pop().slice(0, -1)), r;
}
