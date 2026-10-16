"use strict";
require.d(exports, {
    UD: ()=>u
});
var n = require("./module-20508.js"), s = require("./module-78633.js");
const o = "CURSOR_TREE_SITTER_STUBBED";
let i;
function a() {
    if (void 0 !== i) return i;
    try {
        const e = new n;
        e.setLanguage(s), i = e;
    } catch (e) {
        if (!function(e) {
            return "object" == typeof e && null !== e && e.code === o;
        }(e)) throw e;
        i = null, console.warn("shell-parser: tree-sitter natives are unavailable in this artifact; shell command analysis degrades to parsingFailed");
    }
    return i;
}
const c = new Set([
    "file_redirect",
    "heredoc_redirect",
    "herestring_redirect",
    "heredoc",
    "here_string",
    "redirect",
    "redirection"
]), l = new Set([
    "<",
    ">",
    ">>",
    ">|",
    "<>",
    "<&",
    ">&",
    "&>",
    "&>>"
]);
function u(e) {
    const t = a();
    if (null === t) return {
        legacy: {
            simpleCommands: [],
            hasInputRedirect: !1,
            hasOutputRedirect: !1
        },
        structured: {
            parsingFailed: !0,
            executableCommands: [],
            hasRedirects: !1,
            hasCommandSubstitution: !1,
            redirects: []
        }
    };
    const r = t.parse(e), n = new WeakSet;
    let s = !1, o = !0;
    const i = {
        simpleCommands: [],
        hasInputRedirect: !1,
        hasOutputRedirect: !1
    }, u = {
        parsingFailed: !1,
        executableCommands: [],
        hasRedirects: !1,
        hasCommandSubstitution: !1,
        redirects: []
    }, d = (e)=>{
        s = !0, u.hasRedirects = !0, o = o && e;
    }, p = (e)=>{
        if (e && /^\d+$/.test(e.text)) return Number.parseInt(e.text, 10);
    }, m = ()=>({
            fdTargets: new Map([
                [
                    0,
                    "original-stdin"
                ],
                [
                    1,
                    "original-stdout"
                ],
                [
                    2,
                    "original-stderr"
                ]
            ])
        }), h = (e, t)=>{
        if ("&>" === t || "&>>" === t) return [
            1,
            2
        ];
        const r = ((e)=>p(e.children.find((e)=>"file_descriptor" === e.type)))(e);
        return void 0 !== r ? [
            r
        ] : t.startsWith("<") ? [
            0
        ] : [
            1
        ];
    }, f = (e)=>{
        var t;
        t = e.text, /(^|\s)[0-9]*<<?<?/.test(t) && (i.hasInputRedirect = !0), (/(^|\s)[0-9]*>>/.test(t) || /(^|\s)[0-9]*>(\||&)?/.test(t) || /(^|\s)&>/.test(t) || /(^|\s)[0-9]+>&[0-9]+/.test(t)) && (i.hasOutputRedirect = !0), "heredoc_redirect" !== e.type && "herestring_redirect" !== e.type || (i.hasInputRedirect = !0);
    }, g = (e, t)=>{
        const r = ((e)=>{
            const t = e.children, r = t.findIndex((e)=>l.has(e.type));
            if (-1 !== r) return {
                operator: t[r]?.type ?? "",
                target: t.slice(r + 1).find((e)=>"comment" !== e.type)
            };
        })(e);
        if (!r) return !1;
        const { operator: n, target: s } = r, o = h(e, n), i = ((e)=>{
            if (e) {
                if ("word" === e.type) return 0 === e.namedChildren.length ? e.text : void 0;
                if ("number" === e.type) return e.text;
                if ("raw_string" === e.type) {
                    if (e.text.length < 2) return;
                    return e.text.slice(1, -1);
                }
                if ("string" === e.type) {
                    const t = e.namedChildren;
                    if (0 === t.length || t.some((e)=>"string_content" !== e.type)) return;
                    return t.map((e)=>e.text).join("");
                }
            }
        })(s), a = {
            operator: n,
            destinationFds: o,
            targetNodeType: s?.type ?? ""
        };
        if (void 0 !== i && (a.targetText = i), u.redirects.push(a), ">&" === n) {
            const e = p(s), r = void 0 === e ? void 0 : t.fdTargets.get(e);
            if (!((e)=>"original-stdout" === e || "original-stderr" === e || "dev-null" === e)(r)) {
                for (const e of o)t.fdTargets.set(e, "unsafe");
                return !1;
            }
            for (const e of o)t.fdTargets.set(e, r);
            return !0;
        }
        if ("<&" === n) {
            const e = p(s), r = void 0 === e ? void 0 : t.fdTargets.get(e);
            if ("dev-null" !== r) {
                for (const e of o)t.fdTargets.set(e, "unsafe");
                return !1;
            }
            for (const e of o)t.fdTargets.set(e, r);
            return !0;
        }
        if (!((e)=>{
            if (!e) return !1;
            if ("word" === e.type) return "/dev/null" === e.text;
            if ("raw_string" === e.type) return "'/dev/null'" === e.text;
            if ("string" === e.type) {
                const t = e.namedChildren;
                return 1 === t.length && "string_content" === t[0]?.type && "/dev/null" === t[0].text;
            }
            return !1;
        })(s)) {
            for (const e of o)t.fdTargets.set(e, "unsafe");
            return !1;
        }
        for (const e of o)t.fdTargets.set(e, "dev-null");
        return !0;
    }, y = (e, t)=>{
        if (!n.has(e)) {
            if (n.add(e), f(e), "heredoc_redirect" === e.type) {
                const { redirect: t, isAllowlistSafe: r } = ((e)=>{
                    const t = ((e)=>{
                        const t = e.parent;
                        if ("redirected_statement" !== t?.type) return;
                        const r = t.children.find((e)=>"command" === e.type), n = r?.childForFieldName("name");
                        return n?.text;
                    })(e), r = void 0 !== t && !((e)=>{
                        let t = e.parent;
                        for(; t;){
                            if ("command_substitution" === t.type && "string" !== t.parent?.type) return !0;
                            t = t.parent;
                        }
                        return !1;
                    })(e), n = {
                        operator: r ? "<<" : "",
                        destinationFds: r ? [
                            0
                        ] : [],
                        targetNodeType: e.type
                    };
                    return r && (n.targetText = t), {
                        redirect: n,
                        isAllowlistSafe: r
                    };
                })(e);
                return u.redirects.push(t), void d(r);
            }
            if ("file_redirect" !== e.type) return u.redirects.push({
                operator: "",
                destinationFds: [],
                targetNodeType: e.type
            }), void d(!1);
            d(g(e, t));
        }
    };
    return function e(t) {
        const r = t.type;
        if (((e)=>{
            const t = m();
            for (const r of e.children)c.has(r.type) && y(r, t);
        })(t), c.has(r) && !n.has(t) && y(t, m()), "command" === r) {
            const e = t.childForFieldName("name");
            if (null === e) u.parsingFailed = !0;
            else {
                i.simpleCommands.push(e.text);
                let r = e.text;
                const n = [];
                for (const e of t.childrenForFieldName("argument"))n.push({
                    type: e.type,
                    value: e.text
                }), r += ` ${e.text}`;
                u.executableCommands.push({
                    name: e.text,
                    args: n,
                    fullText: r
                });
            }
        }
        if ("command_name" === r || "simple_command" === r) if ("command_name" !== r || i.simpleCommands.includes(t.text)) {
            if ("simple_command" === r) {
                const e = t.firstNamedChild;
                e && "command_name" === e.type ? i.simpleCommands.includes(e.text) || i.simpleCommands.push(e.text) : i.simpleCommands.push(t.text);
            }
        } else i.simpleCommands.push(t.text);
        "command_substitution" !== r && "process_substitution" !== r || (u.hasCommandSubstitution = !0);
        for (const r of t.children)e(r);
    }(r.rootNode), s && (u.allRedirectsAreDevNull = o), {
        legacy: i,
        structured: u
    };
}
