"use strict";
require.d(exports, {
    hr: ()=>o,
    kM: ()=>u
});
const n = new Set([
    "ash",
    "bash",
    "csh",
    "dash",
    "fish",
    "ksh",
    "powershell",
    "pwsh",
    "sh",
    "tcsh",
    "zsh",
    "cmd"
]);
function s(e) {
    return e.trim().split(/\s+/).filter(Boolean);
}
function o(e) {
    const t = function(e) {
        const t = e.trim(), r = t[0];
        if ('"' === r || "'" === r) {
            const e = t.indexOf(r, 1);
            if (-1 !== e) return t.slice(0, e + 1);
        }
        return s(t)[0];
    }(e);
    if (!t) return !1;
    const r = t.replace(/^["']|["']$/g, "").replaceAll("\\", "/").split("/"), o = (r[r.length - 1] ?? "").replace(/\.exe$/i, "").toLowerCase();
    return n.has(o);
}
function i(e, t) {
    if (e.length > t.length) return !1;
    for(let r = 0; r < e.length; r++)if (e[r] !== t[r]) return !1;
    return !0;
}
function a(e, t) {
    return e.commandName.localeCompare(t.commandName);
}
function c(e) {
    const t = new Set, r = [];
    for (const n of e){
        const e = n.trim();
        if (!e || t.has(e)) continue;
        t.add(e);
        const o = s(e), i = o[0] ?? e;
        r.push({
            id: e,
            label: e,
            value: e,
            commandName: i,
            tokenCount: o.length,
            indentLevel: 0,
            tokens: o,
            ancestorIds: [
                e
            ]
        });
    }
    r.sort(a);
    for(let e = 0; e < r.length; e++){
        const t = r[e], n = new Set(t.tokens);
        let s, o = !1;
        for(let a = 0; a < e; a++){
            const e = r[a];
            if (e.commandName !== t.commandName) continue;
            if (e.tokenCount >= t.tokenCount) continue;
            let c = !0;
            for (const t of e.tokens)if (!n.has(t)) {
                c = !1;
                break;
            }
            if (!c) continue;
            const l = i(e.tokens, t.tokens);
            void 0 !== s ? e.tokenCount > s.tokenCount ? (s = e, o = l) : e.tokenCount === s.tokenCount && l && !o && (s = e, o = !0) : (s = e, o = l);
        }
        void 0 !== s && (t.indentLevel = s.indentLevel + 1, t.ancestorIds = [
            ...s.ancestorIds,
            t.id
        ]);
    }
    const n = r.filter((e)=>!r.some((t)=>t.id !== e.id && t.tokenCount < e.tokenCount && i(t.tokens, e.tokens))).map((e)=>e.id);
    return {
        options: r,
        defaultSelectedOptionIds: n
    };
}
function l(e) {
    return e.split(" ")[0] ?? e;
}
function u(e, t) {
    return function(e, t) {
        const r = c(e), n = [
            ...r.defaultSelectedOptionIds
        ];
        if (!t || 0 === t.length) return {
            defaultSelectedOptionIds: n,
            hasClassifierSuggestions: !1
        };
        const s = [], o = new Set;
        for (const e of t){
            const t = r.options.find((t)=>t.id === e);
            if (t) {
                s.push(t.id), o.add(l(t.id));
                continue;
            }
            const n = r.options.filter((t)=>t.id.startsWith(`${e} `) || t.id === e), i = r.options.filter((t)=>e.startsWith(`${t.id} `) || e === t.id);
            if (i.length > 0) {
                const e = i.reduce((e, t)=>e.id.length > t.id.length ? e : t);
                s.push(e.id), o.add(l(e.id));
            } else if (n.length > 0) {
                const e = n.reduce((e, t)=>e.id.length < t.id.length ? e : t);
                s.push(e.id), o.add(l(e.id));
            }
        }
        if (0 === s.length) return {
            defaultSelectedOptionIds: n,
            hasClassifierSuggestions: !1
        };
        const i = n.filter((e)=>!o.has(l(e)));
        return {
            defaultSelectedOptionIds: [
                ...new Set([
                    ...i,
                    ...s
                ])
            ],
            hasClassifierSuggestions: !0
        };
    }(e, t).defaultSelectedOptionIds;
}
