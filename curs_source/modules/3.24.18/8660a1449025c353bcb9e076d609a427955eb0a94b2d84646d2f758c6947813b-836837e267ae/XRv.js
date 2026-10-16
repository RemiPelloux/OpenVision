import { D, Ec, Hc, Nt, Pn, Vh, Vn, Ya, _r, en, ww } from "./Iwo.js";
import { f1, v5e } from "./ze.js";
import { An, W5, YRe, ao, cWe, nn, zt } from "./LYd.js";
import { ho, qca, zca } from "./nca.js";
import { Bae, WW, Zit, dT, k$t, rCp } from "./ipa.js";
import { Jz, OB } from "./yBp.js";
import { mKm } from "./gYa.js";
import { $i, Ac, Gp, HT, Jh, O$, O_, QKt, bp, e1, et, gg, kZg, l_s, mSf, pp, v5k, wZg } from "./Ycg.js";
import { mu, n5 } from "./BA.js";
import { Lxs, fg, rD, u5i } from "./Asv.js";
import { dec } from "./wTv.js";
import { Qec, jRv } from "./MRv.js";
import { VRv, etc, iP0 } from "./WRv.js";
import { g0a } from "./InlineVideoViewer.js";
import { Hc as Hc$2, Nt as Nt$2, Vn as Vn$2, _r as _r$2, en as en$2 } from "./Iwo.js";
import { AM } from "./Lightbox.js";
import { Wne } from "./ListSection.js";
import { hn } from "./Menu.js";
import { ibe } from "./TabEmptyState.js";
import { jl } from "./aiService.js";
import { DP } from "./anythingQuickAccess.js";
import { II, xI } from "./async.js";
import { ss } from "./authenticationService.js";
import { El } from "./cancellation.js";
import { TCi } from "./cloudWorkspaceFileSearch.js";
import { z0f } from "./command-ids.js";
import { t4t, tpn } from "./constants_8.js";
import { Ka } from "./context-menu.js";
import { AE } from "./cursorIgnoreService.js";
import { Oh } from "./draftIds.js";
import { jt } from "./editor-panel-tab-kind.js";
import { zPs } from "./file-tab-start-page.react.js";
import { $Eo, L6t, Zq } from "./files.js";
import { Kme } from "./glass-active-workspace-service.js";
import { db } from "./glass-clipboard-service.js";
import { vN } from "./glass-context-key-service.js";
import { pPv } from "./glass-csv-table-preview.react.js";
import { SPs, yPs } from "./glass-csv-table.js";
import { sYe, yU } from "./glass-dialog-service.js";
import { GRt, TPs, d2v, dtc, h2v, htc, m2v, p2v, ptc, qRt, u2v } from "./glass-display-constants.js";
import { Zut, ftc, hJt } from "./glass-display-service.types.js";
import { w2v } from "./glass-editor-save-participants.js";
import { t_ } from "./glass-file-service.js";
import { U2v, j2v } from "./glass-files-navigation-service.js";
import { g6i } from "./glass-floating-toolbar.react.js";
import { XPs, a5n } from "./glass-image-preview.react.js";
import { GT } from "./glass-keybinding-router-service.js";
import { C2v, E2v, I2v, T2v } from "./glass-large-file-gate-config.js";
import { x2v } from "./glass-markdown-preview-view-state.js";
import { DPv } from "./glass-markdown-table-expand-host.react.js";
import { kPv } from "./glass-markdown-table-expand-overlay.react.js";
import { IPv } from "./glass-markdown-table-expand-trigger.react.js";
import { JPs, Jtc, Ktc, QPs, Qtc, Vtc, Xtc, Ytc, Ztc, bPv, eMs } from "./glass-markdown-table-expand.js";
import { ul } from "./glass-notification-service.js";
import { xf } from "./glass-opener-service.js";
import { Nu } from "./glass-storage-service.js";
import { a2v, e2v, i2v, n2v, o2v, r2v, s2v, t2v, utc } from "./glass-tex-preview.js";
import { F_ } from "./glass-workspace-context-service.js";
import { BDi, uNl } from "./glassContextKeys.js";
import { D2i, EIt, IIt, Wms, i0l, r0l, rBe } from "./imagePreviewZoom.js";
import { Otc, Utc, nPv, rPv, sPv } from "./index_228.js";
import { jtc } from "./index_229.js";
import { dn } from "./instantiation.js";
import { gd } from "./map.js";
import { Ot } from "./network.js";
import { JAe } from "./progress.js";
import { x7 } from "./quickInput.js";
import { qt } from "./range.js";
import { Aa, Mc, YR, gu } from "./resources.js";
import { bu } from "./selection.js";
import { Vd } from "./storage-keys.js";
import { UEt } from "./textEditor.js";
import { xs } from "./tooltip.js";
import { rt } from "./uri.js";
import { K2v, Ptc, Rtc, V2v, Y2v, YRt } from "./use-palette-files.react.js";
import { $t } from "./window.js";
import { Lc } from "./workspaceCollectionService.js";
export function ZRv(t) {
    return t.scheme === Ot.data;
}
function sP0(t, e) {
    try {
        return rt.parse(t, !0);
    } catch  {
        if (!e) return;
        try {
            const n = rt.parse(e).toString(!0);
            return rt.parse(new URL(t, n).toString(), !0);
        } catch  {
            return;
        }
    }
}
export async function QRv({ dialogService: t, forceExternal: e, href: n, openerService: i, sourceFilePath: r }) {
    const s = n.trim();
    if (!s) return !0;
    const o = sP0(s, r);
    return o?.scheme && await etc({
        dialogService: t,
        forceExternal: e,
        href: s,
        isHandledByGlass: !1,
        isTrusted: ZRv(o),
        openerService: i,
        uri: o
    }), !0;
}
export function oP0(t) {
    const e = aP0(t);
    if (!e.hasDocumentEnv) return zV(itc(t)).trim();
    const n = lP0(e.preamble), i = zV(itc(e.body));
    return [
        n,
        i
    ].map((r)=>r.trim()).filter((r)=>r.length > 0).join(`

`);
}
function aP0(t) {
    let e = 0;
    for(; e < t.length;){
        const n = ltc(t, e);
        if (n !== void 0) {
            e = n;
            continue;
        }
        if (JOn(t, e, "begin")) {
            const i = kPs(t, e);
            if (i?.name === "document") {
                const r = otc(t, i.contentStart, "document");
                return {
                    hasDocumentEnv: !0,
                    preamble: t.slice(0, e),
                    body: t.slice(i.contentStart, r?.innerEnd ?? t.length)
                };
            }
        }
        e += 1;
    }
    return {
        hasDocumentEnv: !1,
        preamble: "",
        body: t
    };
}
function lP0(t) {
    const e = itc(t), n = ntc(e, "title"), i = ntc(e, "author")?.replace(/\s*\\and\s*/g, ", "), r = ntc(e, "date"), s = [];
    if (n) {
        const c = zV(n).trim();
        c.length > 0 && s.push(`# ${c}`);
    }
    const o = i ? zV(i).trim() : "", a = r ? zV(r).trim() : "", l = [
        o,
        a
    ].filter((c)=>c.length > 0).join(" \xB7 ");
    return l.length > 0 && s.push(`*${l}*`), s.join(`

`);
}
function ntc(t, e) {
    let n = 0;
    for(; n < t.length;){
        if (JOn(t, n, e)) return stc(t, n + 1 + e.length).brace;
        n += 1;
    }
}
function itc(t) {
    let e = "", n = 0;
    for(; n < t.length;){
        const i = ltc(t, n);
        if (i !== void 0) {
            n = i;
            continue;
        }
        const r = kPs(t, n);
        if (r && utc.has(r.name)) {
            const o = otc(t, r.contentStart, r.name)?.afterEnd ?? t.length;
            e += t.slice(n, o), n = o;
            continue;
        }
        e += t[n], n += 1;
    }
    return e;
}
function zV(t) {
    let e = 0, n = "";
    for(; e < t.length;){
        const i = cP0(t, e);
        if (i) {
            n += i.markdown, e = i.end;
            continue;
        }
        const r = dP0(t, e);
        if (r) {
            n += r.markdown, e = r.end;
            continue;
        }
        const s = mP0(t, e);
        if (s) {
            n += s.markdown, e = s.end;
            continue;
        }
        if (t.startsWith("---", e)) {
            n += "\u2014", e += 3;
            continue;
        }
        if (t.startsWith("--", e)) {
            n += "\u2013", e += 2;
            continue;
        }
        if (t.startsWith("``", e) || t.startsWith("''", e)) {
            n += '"', e += 2;
            continue;
        }
        if (t[e] === "~") {
            n += " ", e += 1;
            continue;
        }
        n += t[e], e += 1;
    }
    return n.replace(/[ \t]+\n/g, `
`).replace(/\n{3,}/g, `

`);
}
function cP0(t, e) {
    return rtc(t, e, "$$", "$$", atc) ?? rtc(t, e, "\\[", "\\]", atc) ?? rtc(t, e, "\\(", "\\)", (n)=>`\\(${wPs(n)}\\)`) ?? uP0(t, e);
}
function rtc(t, e, n, i, r) {
    if (!t.startsWith(n, e)) return;
    const s = t.indexOf(i, e + n.length);
    if (s !== -1) return {
        markdown: r(t.slice(e + n.length, s)),
        end: s + i.length
    };
}
function uP0(t, e) {
    if (!(t[e] === "$" && t[e + 1] !== "$" && !ctc(t, e))) return;
    const i = vP0(t, e + 1);
    if (i !== void 0) return {
        markdown: `\\(${wPs(t.slice(e + 1, i))}\\)`,
        end: i + 1
    };
}
function dP0(t, e) {
    const n = kPs(t, e);
    if (!n) return;
    const i = otc(t, n.contentStart, n.name);
    return {
        markdown: hP0(n.name, n.note, t.slice(n.contentStart, i?.innerEnd ?? t.length)),
        end: i?.afterEnd ?? t.length
    };
}
function hP0(t, e, n) {
    if (e2v.has(t)) {
        const i = wPs(n).trim();
        return t === "equation" || t === "equation*" || t === "displaymath" ? atc(i) : `

$$
\\begin{${t}}
${i}
\\end{${t}}
$$

`;
    }
    if (t === "itemize") return JRv(n, !1);
    if (t === "enumerate") return JRv(n, !0);
    if (t === "abstract" || t === "quote" || t === "quotation") {
        const i = zV(n).trim();
        return i.length === 0 ? "" : `

${ww(i).map((r)=>`> ${r}`).join(`
`)}

`;
    }
    if (t2v.has(t)) {
        const i = t.charAt(0).toUpperCase() + t.slice(1), r = e ? ` (${zV(e).trim()})` : "", s = zV(n).trim();
        return `

**${i}${r}.** ${s}

`;
    }
    return utc.has(t) ? `

\`\`\`
${n.replace(/^\n/, "").replace(/\n$/, "")}
\`\`\`

` : zV(n);
}
function JRv(t, e) {
    const n = pP0(t);
    return n.length === 0 ? zV(t) : `

${n.map((r, s)=>{
        const o = zV(r).trim().replace(/\n/g, `
  `);
        return e ? `${s + 1}. ${o}` : `- ${o}`;
    }).join(`
`)}

`;
}
function pP0(t) {
    const e = [];
    let n = 0, i;
    for(; n < t.length;){
        if (JOn(t, n, "item")) {
            i !== void 0 && e.push(i);
            const r = n + 1 + 4, s = Xut(t, KDe(t, r), "[", "]");
            i = "", n = s?.end ?? r;
            continue;
        }
        i !== void 0 && (i += t[n]), n += 1;
    }
    return i !== void 0 && e.push(i), e;
}
function mP0(t, e) {
    const n = fP0(t, e);
    if (!n || n.name === "begin" || n.name === "end") return;
    if (n.name === "\\") return {
        markdown: `
`,
        end: Xut(t, KDe(t, n.end), "[", "]")?.end ?? n.end
    };
    if (n.name === "," || n.name === " " || n.name === "quad") return {
        markdown: " ",
        end: n.end
    };
    if (n.name === "qquad") return {
        markdown: "  ",
        end: n.end
    };
    if (n.name === "par" || n.name === "newline") return {
        markdown: `

`,
        end: n.end
    };
    if (i2v.has(n.name)) return {
        markdown: "",
        end: KDe(t, n.end)
    };
    if (n2v.has(n.name)) return {
        markdown: n.name,
        end: n.end
    };
    if (r2v.has(n.name)) return {
        markdown: "",
        end: gP0(t, n.end)
    };
    const i = stc(t, n.end), r = s2v[n.name];
    if (r !== void 0) return gYe(i, (o)=>`${r} ${zV(o).trim()}

`);
    const s = o2v[n.name];
    if (s !== void 0) return gYe(i, (o)=>`${s}${zV(o).trim()}${s}`);
    switch(n.name){
        case "title":
            return gYe(i, (o)=>`# ${zV(o).trim()}

`);
        case "author":
        case "date":
            return gYe(i, (o)=>`*${zV(o).trim()}*

`);
        case "paragraph":
        case "subparagraph":
            return gYe(i, (o)=>`**${zV(o).trim()}**

`);
        case "texttt":
            return gYe(i, (o)=>`\`${zV(o).trim().replace(/\s+/g, " ")}\``);
        case "href":
            {
                const o = stc(t, i.end), a = i.brace;
                if (!a) return {
                    markdown: "",
                    end: o.end
                };
                const l = o.brace ?? a;
                return {
                    markdown: `[${zV(l).trim()}](${a.trim()})`,
                    end: o.end
                };
            }
        case "url":
            return gYe(i, (o)=>o.trim());
        case "cite":
            return gYe(i, (o)=>`[${o.trim()}]`);
        case "ref":
        case "eqref":
            return gYe(i, (o)=>`(${o.trim()})`);
        case "footnote":
        case "caption":
            return gYe(i, (o)=>`*${zV(o).trim()}*`);
        default:
            return i.brace !== void 0 ? {
                markdown: zV(i.brace),
                end: i.end
            } : {
                markdown: "",
                end: KDe(t, n.end)
            };
    }
}
function gYe(t, e) {
    return t.brace ? {
        markdown: e(t.brace),
        end: t.end
    } : {
        markdown: "",
        end: t.end
    };
}
function stc(t, e) {
    let n = KDe(t, e);
    for(;;){
        const r = Xut(t, n, "[", "]");
        if (!r) break;
        n = KDe(t, r.end);
    }
    const i = Xut(t, n, "{", "}");
    return i ? {
        brace: i.content,
        end: i.end
    } : {
        brace: void 0,
        end: n
    };
}
function gP0(t, e) {
    let n = KDe(t, e);
    for(;;){
        const i = Xut(t, n, "[", "]");
        if (i) {
            n = KDe(t, i.end);
            continue;
        }
        const r = Xut(t, n, "{", "}");
        if (r) {
            n = KDe(t, r.end);
            continue;
        }
        break;
    }
    return n;
}
function fP0(t, e) {
    if (t[e] !== "\\") return;
    const n = t[e + 1];
    if (n !== void 0) {
        if (/[a-zA-Z]/.test(n)) {
            let i = e + 2;
            for(; i < t.length && /[a-zA-Z]/.test(t[i] ?? "");)i += 1;
            return t[i] === "*" && (i += 1), {
                name: t.slice(e + 1, i).replace(/\*$/, ""),
                end: i
            };
        }
        return {
            name: n,
            end: e + 2
        };
    }
}
function JOn(t, e, n) {
    if (t[e] !== "\\" || t.slice(e + 1, e + 1 + n.length) !== n) return !1;
    const i = t[e + 1 + n.length];
    return i === void 0 || !/[a-zA-Z]/.test(i);
}
function kPs(t, e) {
    if (!JOn(t, e, "begin")) return;
    const n = Xut(t, KDe(t, e + 6), "{", "}");
    if (!n) return;
    const i = KDe(t, n.end), r = Xut(t, i, "[", "]");
    return {
        name: n.content.trim(),
        note: r?.content,
        contentStart: r?.end ?? i
    };
}
function otc(t, e, n) {
    let i = 1, r = e;
    for(; r < t.length;){
        const s = ltc(t, r);
        if (s !== void 0) {
            r = s;
            continue;
        }
        if (JOn(t, r, "begin")) {
            const o = kPs(t, r);
            if (o?.name === n) {
                i += 1, r = o.contentStart;
                continue;
            }
        }
        if (JOn(t, r, "end")) {
            const o = Xut(t, KDe(t, r + 4), "{", "}");
            if (o?.content.trim() === n) {
                if (i -= 1, i === 0) return {
                    innerEnd: r,
                    afterEnd: o.end
                };
                r = o.end;
                continue;
            }
        }
        r += 1;
    }
}
function Xut(t, e, n, i) {
    if (t[e] !== n) return;
    let r = 0;
    for(let s = e; s < t.length; s += 1){
        if (t[s] === "\\" && s + 1 < t.length) {
            s += 1;
            continue;
        }
        if (t[s] === n) r += 1;
        else if (t[s] === i && (r -= 1, r === 0)) return {
            content: t.slice(e + 1, s),
            end: s + 1
        };
    }
}
function vP0(t, e) {
    let n = e;
    for(; n < t.length;){
        if (t[n] === "$" && !ctc(t, n) && t[n + 1] !== "$") return n;
        n += 1;
    }
}
function atc(t) {
    const e = wPs(t).trim();
    return e.length === 0 ? "" : `

\\[
${e}
\\]

`;
}
function wPs(t) {
    return t.replace(/\\label\s*\{[^{}]*\}/g, "").replace(/\\nonumber\b/g, "");
}
function KDe(t, e) {
    let n = e;
    for(; n < t.length && /[ \t]/.test(t[n] ?? "");)n += 1;
    return n;
}
function ltc(t, e) {
    if (t[e] !== "%" || ctc(t, e)) return;
    let n = e + 1;
    for(; n < t.length && t[n] !== `
`;)n += 1;
    return n;
}
function ctc(t, e) {
    let n = 0, i = e - 1;
    for(; i >= 0 && t[i] === "\\";)n += 1, i -= 1;
    return n % 2 === 1;
}
import { useEffect as _P0, useMemo as l2v, useState as bP0 } from "./react-runtime/react/esm-index-production.js";
export function yP0({ editorHandle: t, filePath: e, editorType: n, editorSnapshot: i }) {
    const [r, s] = rD({
        key: Vd.TEX_VIEW_MODE,
        defaultValue: "preview",
        decode: iP0
    }), o = e !== void 0 && n === "code" && VRv(e), a = i.currentFilePath === e && !i.isLoading, l = a && (i.error !== void 0 || i.largeFileGate !== void 0 || i.contentType !== "text"), c = o && !l, u = c && r === "preview", d = u && a && i.contentType === "text", h = Qec(t, d), [p, g] = bP0(()=>c2v);
    _P0(()=>{
        if (!d || p !== void 0) return;
        let _ = !1;
        return Promise.resolve().then(()=>(a2v(), XRv)).then(({ texSourceToPreviewMarkdown: b })=>{
            c2v = b, _ || g(()=>b);
        }).catch(()=>{
            _ || g(()=>()=>{});
        }), ()=>{
            _ = !0;
        };
    }, [
        d,
        p
    ]);
    const f = l2v(()=>{
        if (!u) return {
            status: "hidden"
        };
        if (h === void 0 || p === void 0) return {
            status: "loading"
        };
        const _ = p(h);
        return _ !== void 0 ? {
            status: "ready",
            markdown: _
        } : {
            status: "unavailable"
        };
    }, [
        u,
        h,
        p
    ]);
    return l2v(()=>({
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
var c2v;
export function t5n(t, e) {
    if (e.length === 0) throw new Error("normalizeDisplayFontSizePx: empty options");
    if (!Number.isFinite(t)) throw new Error("normalizeDisplayFontSizePx: value must be finite");
    const n = Math.round(t);
    let i = e[0], r = Math.abs(n - i);
    for(let s = 1; s < e.length; s++){
        const o = e[s], a = Math.abs(n - o);
        if (a < r) {
            i = o, r = a;
            continue;
        }
        a === r && o < i && (i = o);
    }
    return i;
}
export function _tc(t) {
    const e = t5n(t, Zut);
    return m2v + (e - GRt) * p2v;
}
function kP0(t) {
    const e = f1(t, dtc, htc);
    return Math.round(e * 100) / 100;
}
export function wP0(t, e) {
    if (e === -1 && t <= dtc || e === 1 && t >= htc) return t;
    const n = e === 1 ? ptc : -ptc;
    return kP0(t + n);
}
export function v2v(t) {
    let e = Zut[0], n = Number.POSITIVE_INFINITY;
    for (const i of Zut){
        const r = Math.abs(_tc(i) / 100 - t);
        if (r < n) {
            e = i, n = r;
            continue;
        }
        r === n && i < e && (e = i);
    }
    return e;
}
export function btc(t, e, n) {
    const i = t5n(t, n), r = n.indexOf(i), s = f1(r + e, 0, n.length - 1);
    return n[s];
}
export function _2v(t, e) {
    return e - qRt - (t - GRt);
}
export function CP0(t) {
    return t5n(qRt + (t.uiFontSizePx - GRt) + t.codeZoomOffsetPx, hJt);
}
export function EPs({ uiFontSizePx: t, codeFontSizePx: e }) {
    const n = _tc(t) / 100, r = t5n(e, hJt) / n, s = r / u2v;
    return {
        fontSizePx: r,
        gutterFontSizePx: d2v * s,
        lineHeightPx: h2v * s
    };
}
export function TP0(t) {
    let e = GRt, n = qRt, i;
    if (t !== void 0) try {
        const r = ftc.safeParse(JSON.parse(t));
        r.success && (e = r.data.uiFontSizePx ?? e, n = r.data.codeFontSizePx ?? n, i = IPs(r.data.codeFontFamily));
    } catch  {}
    return {
        fontSizePx: EPs({
            uiFontSizePx: e,
            codeFontSizePx: n
        }).fontSizePx,
        fontFamily: i
    };
}
export function IPs(t) {
    if (t === void 0) return;
    const e = t.trim();
    if (e.length && !(e.length > TPs) && !/[;}]|url\s*\(/i.test(e)) return e;
}
export async function EP0({ files: t, uri: e, logService: n, token: i, timeoutMs: r = w2v }) {
    if (e.scheme === Ot.untitled) return;
    const s = t.get(e);
    if (!s || !s.isResolved() || s.isDisposed()) return;
    const o = new El(i);
    try {
        await Vh(t.runSaveParticipants(s, {
            reason: 1
        }, JAe.None, o.token), r, ()=>{
            n.warn(`[Glass] Save participants exceeded ${r}ms; cancelling and saving without them`, e.toString()), o.cancel();
        });
    } catch (a) {
        Ya(a) ? n.trace("[Glass] Save participants were cancelled; saving without them", e.toString()) : n.warn("[Glass] Save participants failed; saving without them", e.toString(), a);
    } finally{
        o.dispose();
    }
}
export function xP0(t) {
    const e = t.getDynamicConfigParam(C2v, "code_gate_bytes", {
        disableExposureLog: !0
    });
    return typeof e != "number" || !Number.isFinite(e) ? T2v : Math.min(I2v, Math.max(E2v, Math.round(e)));
}
export function RP0(t) {
    if (!t) return;
    let e;
    try {
        e = JSON.parse(t);
    } catch  {
        return;
    }
    const n = x2v.safeParse(e);
    return n.success ? n.data : void 0;
}
export function MP0(t) {
    const e = Bae(t);
    return e ? {
        icon: {
            name: e.kind === "cloud" && e.view === "changes" ? "plus-minus" : e.kind === "cloud" && e.view === "desktop" ? "device-desktop" : "agent"
        }
    } : void 0;
}
export async function NP0(t, e) {
    await t.revert(0, {
        force: !0
    }), await e?.();
}
export function ktc(t) {
    return u5i(v5e(t));
}
export function jP0(t) {
    return typeof t != "number" || !Number.isFinite(t) ? t4t : Math.max(0, Math.floor(t));
}
export function HP0(t) {
    const { name: e, displayName: n, publisher: i, version: r, engines: s, contributes: o } = t.manifest;
    return {
        ...t,
        manifest: {
            name: e,
            displayName: n,
            publisher: i,
            version: r,
            engines: s,
            contributes: Object.fromEntries(Object.entries(o ?? {}).filter(([a])=>tpn.includes(a)))
        }
    };
}
export function WP0(t) {
    switch(t){
        case "api":
            return 1;
        case "code.navigation":
            return 4;
        case "code.jump":
            return 5;
        default:
            return 2;
    }
}
export function GP0(t, e) {
    t.retain((n)=>gu(n.editor.resource, e));
}
export function qP0(t, e, n) {
    let i = n ? new UEt(new bu(n.startLineNumber, n.startColumn, n.endLineNumber, n.endColumn)) : void 0;
    return {
        input: new U2v(t),
        group: {
            id: j2v
        },
        onDidChangeSelection: en.None,
        clearPendingInitialSelection () {
            i = void 0;
        },
        getSelection () {
            if (i) return i;
            const r = e.getSelection();
            return r ? new UEt(r) : void 0;
        }
    };
}
export function B2v(t) {
    return t || Oh;
}
export function zP0({ editorHandle: t, groupId: e, manager: n, tabId: i, tabPersistenceService: r }) {
    const s = {
        groupId: e,
        tabId: i
    }, o = {
        onLabelChanged: (a)=>n.setLabel({
                ...s,
                label: a
            }),
        onDirtyChanged: (a)=>{
            if (n.setDirty({
                ...s,
                dirty: a
            }), !a) return;
            const l = r.manager.getTab(s);
            l?.kind !== jt.File || l.props.preview !== !0 || r.pinTab(i);
        }
    };
    return t.registerTabHandlers(o);
}
export function KP0({ fileService: t, resource: e, onDeleted: n }) {
    let i, r = !1, s = !1;
    const o = new Nt;
    o.add(t.onDidRunOperation((c)=>{
        c.isOperation(L6t.MOVE) && YR(e, c.resource) && (i = c.target.resource);
    }));
    const a = ()=>{
        if (i !== void 0) {
            i = void 0;
            return;
        }
        n();
    }, l = ()=>{
        if (r || s || !t.hasProvider(e)) return;
        s = !0;
        const c = t.createWatcher(e, {
            recursive: !1,
            excludes: [],
            filter: $Eo.DELETED
        });
        o.add(c), o.add(c.onDidChange((u)=>{
            u.contains(e, Zq.DELETED) && a();
        })), o.add(t.onDidFilesChange((u)=>{
            u.contains(e, Zq.DELETED) && a();
        }));
    };
    return l(), s || o.add(t.onDidChangeFileSystemProviderRegistrations((c)=>{
        c.scheme === e.scheme && c.added && l();
    })), {
        dispose () {
            r = !0, o.dispose();
        }
    };
}
import { c as XP0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { startTransition as ZP0, useEffect as I6i, useState as x6i } from "./react-runtime/react/esm-index-production.js";
function H2v(t) {
    return t.scheme === Ot.file || t.scheme === Ot.vscodeRemote || t.scheme === Ot.cursorPlan || t.scheme === Ot.cursorWorker;
}
function W2v(t, e) {
    return {
        uriString: rt.from({
            scheme: Ot.cursorWorker,
            authority: t,
            path: "/" + e.relativePath
        }).toString(),
        label: e.label,
        description: e.description,
        keywords: [
            e.label,
            e.relativePath,
            e.description ?? "",
            "file",
            "open",
            "files"
        ].filter((i)=>i.length > 0)
    };
}
function QP0(t, e) {
    return e.asRelativePath(t) !== void 0;
}
function JP0(t, e) {
    const n = Aa(t), i = e.asRelativePath(Mc(t)), r = e.asRelativePath(t);
    return {
        uriString: t.toString(),
        label: n,
        description: i || void 0,
        keywords: [
            n,
            r || "",
            i || "",
            "file",
            "open",
            "files"
        ].filter((s)=>s.length > 0)
    };
}
function eM0(t, e) {
    const n = t.resource;
    if (!n || !QP0(n, e)) return;
    const i = e.asRelativePath(Mc(n)), r = e.asRelativePath(n), s = t.label, o = t.description ?? (i || void 0);
    return {
        uriString: n.toString(),
        label: s,
        description: o,
        keywords: [
            s,
            r || "",
            i || "",
            t.description || "",
            "file",
            "open",
            "files"
        ].filter((a)=>a.length > 0)
    };
}
function G2v(t, e) {
    const n = [];
    for (const i of t){
        const r = eM0(i, e);
        r && n.push(r);
    }
    return n;
}
function tM0(t) {
    return H2v(t);
}
export async function q2v(t, e) {
    const n = new xI(V2v), i = await Promise.all(e.map((r)=>n.queue(async ()=>{
            const s = rt.parse(r.uriString);
            if (!tM0(s)) return !0;
            try {
                return await t.exists(s);
            } catch  {
                return !1;
            }
        })));
    return e.filter((r, s)=>i[s]);
}
export function nM0(t, e) {
    const n = Object.create(null);
    return t.filter((i)=>{
        const { score: r } = Jz({
            label: i.label,
            description: i.description
        }, e, !0, x7, n);
        return !!r;
    });
}
export function iM0(t, e) {
    const n = Object.create(null);
    return t.filter((i)=>{
        const { score: r } = Jz({
            label: i.name
        }, e, !0, x7, n);
        return !!r;
    });
}
export function rM0(t, e) {
    if (t === e) return !0;
    if (t.length !== e.length) return !1;
    for(let n = 0; n < t.length; n++){
        const i = t[n], r = e[n];
        if (i.uriString !== r.uriString || i.label !== r.label || i.description !== r.description) return !1;
    }
    return !0;
}
function z2v(t) {
    const e = t.cursorIgnoreService?.createAdminBlockedRepoPathsPredicate(t.repoUrls);
    return e ? {
        isAllowed: (n)=>!e(n)
    } : void 0;
}
function sM0(t) {
    const e = t.cloudAgentBcId;
    return !e || t.hasQuery || !t.cloudFileSearch ? YRt : t.cloudFileSearch.getInitialItems(t.maxResults, z2v(t)).map((n)=>W2v(e, n));
}
export function Atc(t, e) {
    const n = XP0(83), { open: i, query: r, maxResults: s, cloudAgent: o, serviceWorkspace: a } = e, l = s === void 0 ? 12 : s, c = a === void 0 ? t : a, u = o?.bcId, d = pp(t, F_), h = pp(t, t_), p = pp(c, jl), g = bp(ss), f = pp(c, AE);
    let _;
    n[0] !== d ? (_ = ()=>(d?.getWorkspace().folders.length ?? 0) > 0, n[0] = d, n[1] = _) : _ = n[1];
    const b = _, y = Gp(d?.onDidChangeWorkspaceFolders, b), [S, k] = x6i(void 0);
    let C, T;
    n[2] !== u || n[3] !== t ? (C = ()=>{
        if (!t || u) {
            k(void 0);
            return;
        }
        const Ne = gg(t, dn).createInstance(DP);
        return k({
            workspace: t,
            provider: Ne
        }), ()=>{
            Ne.dispose();
        };
    }, T = [
        t,
        u
    ], n[2] = u, n[3] = t, n[4] = C, n[5] = T) : (C = n[4], T = n[5]), I6i(C, T);
    const I = S && S.workspace === t ? S.provider : void 0;
    let A, P;
    n[6] !== i || n[7] !== I ? (A = ()=>{
        !i || !I || I.initializeCaches();
    }, P = [
        i,
        I
    ], n[6] = i, n[7] = I, n[8] = A, n[9] = P) : (A = n[8], P = n[9]), I6i(A, P);
    let M;
    n[10] !== r ? (M = r.trim(), n[10] = r, n[11] = M) : M = n[11];
    const O = M;
    let N;
    n[12] !== O ? (N = O ? OB(O) : void 0, n[12] = O, n[13] = N) : N = n[13];
    const U = N;
    let j;
    n[14] !== i || n[15] !== I || n[16] !== d ? (j = i && d && I ? G2v(I.getEditorHistoryPickerItems(""), d) : YRt, n[14] = i, n[15] = I, n[16] = d, n[17] = j) : j = n[17];
    const $ = j;
    let H;
    e: {
        if (!O || $.length === 0 || !d || !I) {
            H = $;
            break e;
        }
        let Ne;
        n[18] !== I || n[19] !== O || n[20] !== d ? (Ne = G2v(I.getEditorHistoryPickerItems(O), d), n[18] = I, n[19] = O, n[20] = d, n[21] = Ne) : Ne = n[21], H = Ne;
    }
    const G = H, [q, K] = x6i(void 0);
    let V, Y;
    n[22] !== h || n[23] !== $ ? (V = ()=>{
        if (!h || $.length === 0) return;
        let Ne = !1;
        return q2v(h, $).then((be)=>{
            if (!Ne) {
                const je = new Set(be.map(lM0));
                K({
                    historyFilesAtOpen: $,
                    knownMissingUriStrings: new Set($.map(aM0).filter(($e)=>!je.has($e)))
                });
            }
        }), ()=>{
            Ne = !0;
        };
    }, Y = [
        h,
        $
    ], n[22] = h, n[23] = $, n[24] = V, n[25] = Y) : (V = n[24], Y = n[25]), I6i(V, Y);
    let J;
    e: {
        if (!h) {
            J = G;
            break e;
        }
        if (q?.historyFilesAtOpen !== $) {
            J = YRt;
            break e;
        }
        let Ne;
        if (n[26] !== G || n[27] !== q) {
            let be;
            n[29] !== q ? (be = (je)=>!q.knownMissingUriStrings.has(je.uriString), n[29] = q, n[30] = be) : be = n[30], Ne = G.filter(be), n[26] = G, n[27] = q, n[28] = Ne;
        } else Ne = n[28];
        J = Ne;
    }
    const Q = J, te = !!t && !!d && (!I || !!h && $.length > 0 && q?.historyFilesAtOpen !== $), [ee, re] = x6i(Rtc);
    let ie, oe;
    n[31] !== l || n[32] !== i || n[33] !== U || n[34] !== I || n[35] !== Q || n[36] !== d ? (ie = ()=>{
        if (!i || !I || !U) {
            re(Rtc);
            return;
        }
        const Ne = new El, be = new gd;
        for (const $e of Q)be.set(rt.parse($e.uriString), !0);
        const je = new Set(Q.map(oM0));
        return I.getFilePicks(U, be, Ne.token).then(($e)=>{
            if (Ne.token.isCancellationRequested) return;
            if (!d) {
                re({
                    query: U.original,
                    items: YRt
                });
                return;
            }
            const Je = mSf($e, U, l), Ge = [];
            for (const xe of Je){
                const Oe = xe.resource;
                !Oe || !H2v(Oe) || je.has(Oe.toString()) || Ge.push(JP0(Oe, d));
            }
            re({
                query: U.original,
                items: Ge
            });
        }).catch(()=>{
            Ne.token.isCancellationRequested || re({
                query: U.original,
                items: YRt
            });
        }), ()=>{
            Ne.dispose(!0);
        };
    }, oe = [
        i,
        I,
        U,
        Q,
        d,
        l
    ], n[31] = l, n[32] = i, n[33] = U, n[34] = I, n[35] = Q, n[36] = d, n[37] = ie, n[38] = oe) : (ie = n[37], oe = n[38]), I6i(ie, oe);
    const se = U !== void 0 && !!t && (!I || ee.query !== U.original), le = u ? mKm({
        agentId: u,
        authId: g?.getCurrentAuthId(),
        teamId: g?.getTeamId()
    }) : void 0, [ce, ae] = x6i(), de = le && ce?.key === le ? ce.search : le ? TCi.get(le) : void 0, he = le !== void 0 && de === void 0 && (ce?.key !== le || ce.loading);
    let ge;
    n[39] !== p || n[40] !== u || n[41] !== le || n[42] !== i || n[43] !== ae ? (ge = ()=>{
        if (!i || !u || !le || !p) return;
        const Ne = TCi.get(le);
        if (Ne) {
            ae({
                key: le,
                search: Ne,
                loading: !1
            });
            return;
        }
        let be = !1;
        return ae({
            key: le,
            loading: !0
        }), TCi.load(le, async ()=>(await p.backgroundComposerSyncClient.listWorkspaceFiles({
                bcId: u
            })).relativePaths).then((je)=>{
            be || ae({
                key: le,
                search: je,
                loading: !1
            });
        }).catch(()=>{
            be || ae({
                key: le,
                loading: !1
            });
        }), ()=>{
            be = !0;
        };
    }, n[39] = p, n[40] = u, n[41] = le, n[42] = i, n[43] = ae, n[44] = ge) : ge = n[44];
    let pe;
    n[45] !== p || n[46] !== u || n[47] !== le || n[48] !== i ? (pe = [
        i,
        u,
        le,
        p
    ], n[45] = p, n[46] = u, n[47] = le, n[48] = i, n[49] = pe) : pe = n[49], I6i(ge, pe);
    const ve = o?.repoUrls ?? K2v;
    let fe;
    n[50] !== u || n[51] !== de || n[52] !== ve || n[53] !== f || n[54] !== l || n[55] !== U ? (fe = ()=>sM0({
            cloudAgentBcId: u,
            repoUrls: ve,
            hasQuery: U !== void 0,
            cloudFileSearch: de,
            maxResults: l,
            cursorIgnoreService: f
        }), n[50] = u, n[51] = de, n[52] = ve, n[53] = f, n[54] = l, n[55] = U, n[56] = fe) : fe = n[56];
    const Te = Gp(f?.onDidCursorIgnoreChange, fe, Y2v), [_e, Ce] = x6i(Ptc);
    let Se, Pe;
    n[57] !== u || n[58] !== de || n[59] !== ve || n[60] !== f || n[61] !== l || n[62] !== i || n[63] !== U ? (Se = (Ne)=>{
        if (!i || !u || !de || !U) return;
        const be = Ne.add(new Vn), je = ()=>{
            const $e = new Nt;
            be.value = $e;
            const Je = new El;
            $e.add(Pn(()=>Je.dispose(!0)));
            const Ge = async ()=>{
                const xe = await de.searchAsync(U, l, z2v({
                    repoUrls: ve,
                    cursorIgnoreService: f
                }), Je.token);
                Je.token.isCancellationRequested || ZP0(()=>{
                    Ce({
                        bcId: u,
                        query: U.original,
                        items: xe.map((Oe)=>W2v(u, Oe))
                    });
                });
            };
            e1(()=>{
                Ec(()=>void Ge(), 0, $e);
            }, $e, $t);
        };
        f && Ne.add(f.onDidCursorIgnoreChange(je)), je();
    }, Pe = [
        i,
        u,
        de,
        U,
        l,
        ve,
        f
    ], n[57] = u, n[58] = de, n[59] = ve, n[60] = f, n[61] = l, n[62] = i, n[63] = U, n[64] = Se, n[65] = Pe) : (Se = n[64], Pe = n[65]), n5(Se, Pe);
    let we;
    n[66] !== u || n[67] !== _e || n[68] !== U ? (we = U !== void 0 && _e.bcId === u && U.original.startsWith(_e.query) ? _e : Ptc, n[66] = u, n[67] = _e, n[68] = U, n[69] = we) : we = n[69];
    const Ie = we, Me = U !== void 0 && de !== void 0 && Ie.query !== U.original;
    let De;
    e: {
        if (u) {
            const $e = i ? he || Me : !1, Je = i && he;
            let Ge;
            n[70] !== Te || n[71] !== Ie.items || n[72] !== Ie.query || n[73] !== $e || n[74] !== Je ? (Ge = {
                recentFiles: Te,
                searchedFiles: Ie.items,
                searchedFilesQuery: Ie.query,
                isSearching: $e,
                isLoadingRecentFiles: Je,
                hasWorkspaceFolders: !0
            }, n[70] = Te, n[71] = Ie.items, n[72] = Ie.query, n[73] = $e, n[74] = Je, n[75] = Ge) : Ge = n[75], De = Ge;
            break e;
        }
        const Ne = i && O.length > 0 ? se : !1, be = i && te;
        let je;
        n[76] !== y || n[77] !== Q || n[78] !== ee.items || n[79] !== ee.query || n[80] !== Ne || n[81] !== be ? (je = {
            recentFiles: Q,
            searchedFiles: ee.items,
            searchedFilesQuery: ee.query,
            isSearching: Ne,
            isLoadingRecentFiles: be,
            hasWorkspaceFolders: y
        }, n[76] = y, n[77] = Q, n[78] = ee.items, n[79] = ee.query, n[80] = Ne, n[81] = be, n[82] = je) : je = n[82], De = je;
    }
    return De;
}
function oM0(t) {
    return t.uriString;
}
function aM0(t) {
    return t.uriString;
}
function lM0(t) {
    return t.uriString;
}
export function cM0(t) {
    return t.editorPanelAgentId === Oh ? t.agentWorkspaceFolderCount > 0 || t.preferredWorkspaceIdentifier !== void 0 : t.agentWorkspaceFolderCount > 0 || t.rootWorkspaceFolderCount > 0 || t.preferredWorkspaceIdentifier !== void 0;
}
function uM0(t) {
    return t.agentWorkspaceFolderCount;
}
import { c as dM0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as hM0, useState as Mtc, useSyncExternalStore as pM0 } from "./react-runtime/react/esm-index-production.js";
export function GPs(t) {
    const e = dM0(30), { editorPanelAgentId: n, agentWorkspace: i } = t, { workspace: r, workspaceCollectionService: s } = HT(), o = $i(i, F_), a = et(F_), l = et(Kme), [c, u] = Mtc(void 0), [d, h] = Mtc(void 0);
    let p;
    e[0] !== l ? (p = (V)=>{
        const Y = l.onDidChangePreferredWorkspace(V);
        return ()=>Y.dispose();
    }, e[0] = l, e[1] = p) : p = e[1];
    const g = p;
    let f;
    e[2] !== l ? (f = ()=>l.getPreferredWorkspaceIdentifier(), e[2] = l, e[3] = f) : f = e[3];
    const b = pM0(g, f), y = b;
    let S;
    e[4] !== o || e[5] !== n || e[6] !== b ? (S = uM0({
        editorPanelAgentId: n,
        agentWorkspaceFolderCount: o.getWorkspace().folders.length,
        preferredWorkspaceIdentifier: b
    }), e[4] = o, e[5] = n, e[6] = b, e[7] = S) : S = e[7];
    const k = S;
    let C;
    e[8] !== a ? (C = a.getWorkspace(), e[8] = a, e[9] = C) : C = e[9];
    const T = C.folders.length;
    let I;
    e[10] !== k || e[11] !== y || e[12] !== T ? (I = {
        agentFolderCount: k,
        rootFolderCount: T,
        fallbackWorkspaceIdentifier: y
    }, e[10] = k, e[11] = y, e[12] = T, e[13] = I) : I = e[13];
    const [A, P] = Mtc(I);
    (A.agentFolderCount !== k || A.rootFolderCount !== T || A.fallbackWorkspaceIdentifier !== y) && (P({
        agentFolderCount: k,
        rootFolderCount: T,
        fallbackWorkspaceIdentifier: y
    }), u(void 0), h(void 0));
    let M, O;
    e[14] !== k || e[15] !== y || e[16] !== T || e[17] !== s ? (M = ()=>{
        if (k > 0 || T > 0 || !y) return;
        let V = !1, Y;
        return s.createWorkspaceReference(y, Lc.Files).then((J)=>{
            Y = J;
            const Q = J.object;
            V ? J.dispose() : (h(void 0), u({
                identifier: y,
                agentWorkspace: Q
            }));
        }).catch(()=>{
            V || (u(void 0), h(y));
        }), ()=>{
            V = !0, Y?.dispose();
        };
    }, O = [
        k,
        y,
        T,
        s
    ], e[14] = k, e[15] = y, e[16] = T, e[17] = s, e[18] = M, e[19] = O) : (M = e[18], O = e[19]), hM0(M, O);
    let N;
    e[20] !== y || e[21] !== c ? (N = y && c && l_s(y, c.identifier) ? c.agentWorkspace : void 0, e[20] = y, e[21] = c, e[22] = N) : N = e[22];
    const U = N, j = k > 0 ? i : T > 0 ? r : U, $ = pp(j, F_);
    let H;
    e[23] !== d || e[24] !== y ? (H = d !== void 0 && y !== void 0 && l_s(d, y), e[23] = d, e[24] = y, e[25] = H) : H = e[25];
    const q = k === 0 && T === 0 && y !== void 0 && U === void 0 && !H;
    let K;
    return e[26] !== j || e[27] !== $ || e[28] !== q ? (K = {
        activeWorkspace: j,
        activeWorkspaceContextService: $,
        isFallbackWorkspaceLoading: q
    }, e[26] = j, e[27] = $, e[28] = q, e[29] = K) : K = e[29], K;
}
import { c as Z2v } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as mM0, useRef as gM0, useState as fM0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as _Ye, jsxs as Dtc } from "./react-runtime/react/esm-jsx-runtime-production.js";
function vM0(t) {
    const e = Z2v(11), { trimmedQuery: n, rowsPending: i, rows: r, onOpen: s } = t, o = gM0(void 0);
    let a, l;
    e[0] !== s || e[1] !== r || e[2] !== i || e[3] !== n ? (a = ()=>{
        const u = o.current;
        if (u === void 0) return;
        if (u !== n) {
            o.current = void 0;
            return;
        }
        if (i) return;
        o.current = void 0;
        const d = r[0];
        d !== void 0 && s(d.uriString);
    }, l = [
        n,
        i,
        r,
        s
    ], e[0] = s, e[1] = r, e[2] = i, e[3] = n, e[4] = a, e[5] = l) : (a = e[4], l = e[5]), mM0(a, l);
    let c;
    return e[6] !== s || e[7] !== r || e[8] !== i || e[9] !== n ? (c = ()=>{
        if (i) {
            o.current = n;
            return;
        }
        const u = r[0];
        u !== void 0 && s(u.uriString);
    }, e[6] = s, e[7] = r, e[8] = i, e[9] = n, e[10] = c) : c = e[10], c;
}
export function _M0(t) {
    const e = Z2v(50), { onBrowseFiles: n, onNewFile: i, onOpenFile: r } = t, [s, o] = fM0("");
    let a;
    e[0] !== s ? (a = s.trim(), e[0] = s, e[1] = a) : a = e[1];
    const l = a.length > 0, { workspace: c, resolvedAgentReference: u } = fg(), { workspace: d } = HT();
    let h;
    e[2] !== c || e[3] !== u.header.id ? (h = {
        editorPanelAgentId: u.header.id,
        agentWorkspace: c
    }, e[2] = c, e[3] = u.header.id, e[4] = h) : h = e[4];
    const { activeWorkspace: p, isFallbackWorkspaceLoading: g } = GPs(h), f = u.header.source === "cloud" ? u.header.id : void 0, { repoUrls: _ } = O$(u.header);
    let b;
    e[5] !== _ || e[6] !== f ? (b = f === void 0 ? void 0 : {
        bcId: f,
        repoUrls: _
    }, e[5] = _, e[6] = f, e[7] = b) : b = e[7];
    const y = b, S = f !== void 0 ? c : p;
    let k;
    e[8] !== y || e[9] !== s || e[10] !== d ? (k = {
        open: !0,
        query: s,
        maxResults: zPs,
        cloudAgent: y,
        serviceWorkspace: d
    }, e[8] = y, e[9] = s, e[10] = d, e[11] = k) : k = e[11];
    const { recentFiles: C, searchedFiles: T, isSearching: I, isLoadingRecentFiles: A } = Atc(S, k);
    let P;
    e: {
        if (s.trim().length === 0) {
            let ie;
            e[12] !== C ? (ie = C.slice(0, zPs), e[12] = C, e[13] = ie) : ie = e[13], P = ie;
            break e;
        }
        let re;
        e[14] !== C || e[15] !== T ? (re = [
            ...T,
            ...C
        ].slice(0, zPs), e[14] = C, e[15] = T, e[16] = re) : re = e[16], P = re;
    }
    const M = P, O = !l && M.length === 0 && (A || f === void 0 && g);
    let N;
    e[17] !== r ? (N = (re)=>{
        r(rt.parse(re));
    }, e[17] = r, e[18] = N) : N = e[18];
    const U = N;
    let j;
    e[19] !== s ? (j = s.trim(), e[19] = s, e[20] = j) : j = e[20];
    let $;
    e[21] !== U || e[22] !== M || e[23] !== I || e[24] !== j ? ($ = {
        trimmedQuery: j,
        rowsPending: I,
        rows: M,
        onOpen: U
    }, e[21] = U, e[22] = M, e[23] = I, e[24] = j, e[25] = $) : $ = e[25];
    const H = vM0($);
    let G;
    e[26] === Symbol.for("react.memo_cache_sentinel") ? (G = D("glass.fileTab.startPage.searchAriaLabel", "Search files and folders"), e[26] = G) : G = e[26];
    let q;
    e[27] === Symbol.for("react.memo_cache_sentinel") ? (q = D("glass.fileTab.startPage.searchPlaceholder", "Files, Folders..."), e[27] = q) : q = e[27];
    let K;
    e[28] !== H || e[29] !== s ? (K = _Ye(ibe.Search, {
        "aria-label": G,
        onValueChange: o,
        onSubmit: H,
        placeholder: q,
        value: s
    }), e[28] = H, e[29] = s, e[30] = K) : K = e[30];
    let V;
    e[31] !== l || e[32] !== n || e[33] !== i ? (V = l ? null : Dtc(Wne, {
        children: [
            n ? _Ye(Wne.Row, {
                leading: _Ye(zt, {
                    color: "secondary",
                    name: "file",
                    size: "base"
                }),
                onSelect: n,
                title: D("glass.fileTab.startPage.browseFiles", "Browse Files")
            }) : null,
            _Ye(Wne.Row, {
                leading: _Ye(zt, {
                    color: "secondary",
                    name: "file-plus",
                    size: "base"
                }),
                onSelect: i,
                title: D("glass.fileTab.startPage.newFile", "New File")
            })
        ]
    }), e[31] = l, e[32] = n, e[33] = i, e[34] = V) : V = e[34];
    let Y;
    e[35] !== l ? (Y = l ? D("glass.fileTab.startPage.results", "Results") : D("glass.fileTab.startPage.recents", "Recents"), e[35] = l, e[36] = Y) : Y = e[36];
    let J;
    e[37] !== U || e[38] !== O || e[39] !== M ? (J = O ? _Ye("div", {
        className: "glass-ugt2tg",
        role: "status",
        children: _Ye(nn, {
            color: "quaternary",
            size: "md",
            children: D("glass.fileTab.startPage.loadingRecents", "Loading...")
        })
    }) : M.map((re)=>_Ye(Wne.Row, {
            leading: _Ye(W5, {
                name: re.label,
                size: 14
            }),
            onSelect: ()=>U(re.uriString),
            secondaryLabel: re.description,
            title: re.label
        }, re.uriString)), e[37] = U, e[38] = O, e[39] = M, e[40] = J) : J = e[40];
    let Q;
    e[41] !== Y || e[42] !== J ? (Q = _Ye(Wne, {
        title: Y,
        children: J
    }), e[41] = Y, e[42] = J, e[43] = Q) : Q = e[43];
    let te;
    e[44] !== V || e[45] !== Q ? (te = Dtc(ibe.Sections, {
        children: [
            V,
            Q
        ]
    }), e[44] = V, e[45] = Q, e[46] = te) : te = e[46];
    let ee;
    return e[47] !== K || e[48] !== te ? (ee = Dtc(ibe.Inline, {
        children: [
            K,
            te
        ]
    }), e[47] = K, e[48] = te, e[49] = ee) : ee = e[49], ee;
}
export function r5n(t, e, n) {
    let i = n.initialDeps ?? [], r, s = !0;
    function o() {
        var a, l, c;
        let u;
        n.key && ((a = n.debug) != null && a.call(n)) && (u = Date.now());
        const d = t();
        if (!(d.length !== i.length || d.some((g, f)=>i[f] !== g))) return r;
        i = d;
        let p;
        if (n.key && ((l = n.debug) != null && l.call(n)) && (p = Date.now()), r = e(...d), n.key && ((c = n.debug) != null && c.call(n))) {
            const g = Math.round((Date.now() - u) * 100) / 100, f = Math.round((Date.now() - p) * 100) / 100, _ = f / 16, b = (y, S)=>{
                for(y = String(y); y.length < S;)y = " " + y;
                return y;
            };
            console.info(`%c\u23F1 ${b(f, 5)} /${b(g, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * _, 120))}deg 100% 31%);`, n?.key);
        }
        return n?.onChange && !(s && n.skipInitialOnChange) && n.onChange(r), s = !1, r;
    }
    return o.updateDeps = (a)=>{
        i = a;
    }, o;
}
export function Q2v(t, e) {
    if (t === void 0) throw new Error(`Unexpected undefined${e ? `: ${e}` : ""}`);
    return t;
}
export function SM0({ measurements: t, outerSize: e, scrollOffset: n, lanes: i }) {
    const r = t.length - 1, s = (l)=>t[l].start;
    if (t.length <= i) return {
        startIndex: 0,
        endIndex: r
    };
    let o = Utc(0, r, s, n), a = o;
    if (i === 1) for(; a < r && t[a].end < n + e;)a++;
    else if (i > 1) {
        const l = Array(i).fill(0);
        for(; a < r && l.some((u)=>u < n + e);){
            const u = t[a];
            l[u.lane] = u.end, a++;
        }
        const c = Array(i).fill(n + e);
        for(; o >= 0 && c.some((u)=>u >= n);){
            const u = t[o];
            c[u.lane] = u.start, o--;
        }
        o = Math.max(0, o - o % i), a = Math.min(r, a + (i - 1 - a % i));
    }
    return {
        startIndex: o,
        endIndex: a
    };
}
import * as VPs from "./react-runtime/react/esm-index-production.js";
import { flushSync as kM0 } from "./react-runtime/react-dom/esm-index-production.js";
function wM0({ useFlushSync: t = !0, ...e }) {
    const n = VPs.useReducer(()=>({}), {})[1], i = {
        ...e,
        onChange: (s, o)=>{
            var a;
            t && o ? kM0(n) : n(), (a = e.onChange) == null || a.call(e, s, o);
        }
    }, [r] = VPs.useState(()=>new sPv(i));
    return r.setOptions(i), jtc(()=>r._didMount(), []), jtc(()=>r._willUpdate()), r;
}
export function aPv(t) {
    return wM0({
        observeElementRect: Otc,
        observeElementOffset: nPv,
        scrollToFn: rPv,
        ...t
    });
}
function CM0() {
    return {
        inQuotes: !1,
        fieldStarted: !1
    };
}
function TM0(t) {
    t.inQuotes = !1, t.fieldStarted = !1;
}
function EM0(t, e, n, i) {
    if (t.inQuotes) {
        if (e === '"') {
            if (n === '"') return;
            t.inQuotes = !1;
        }
        return;
    }
    if (e === '"' && !t.fieldStarted) {
        t.inQuotes = !0, t.fieldStarted = !0;
        return;
    }
    if (e === i) {
        t.fieldStarted = !1;
        return;
    }
    t.fieldStarted = !0;
}
function lPv(t) {
    return !t.inQuotes;
}
function cPv(t, e) {
    const n = e + 1;
    return n === t.getLineCount() && t.getLineLength(n) === 0;
}
function IM0(t, e, n, i) {
    const r = t.getLineContent(e);
    for(let s = 0; s < r.length; s++){
        const o = r[s];
        if (n.inQuotes && o === '"' && r[s + 1] === '"') {
            s += 1;
            continue;
        }
        EM0(n, o, r[s + 1], i);
    }
}
function uPv(t, e, n) {
    if (e >= n) return "";
    const i = qt.fromPositions(t.getPositionAt(e), t.getPositionAt(n));
    let r = t.getValueInRange(i, void 0);
    return r.endsWith(`\r
`) ? r = r.slice(0, -2) : (r.endsWith(`
`) || r.endsWith("\r")) && (r = r.slice(0, -1)), r;
}
function xM0(t, e) {
    if (t.getValueLength() === 0) return {
        rows: [],
        columnCount: 0,
        truncatedColumns: !1
    };
    const n = [];
    let i = !1, r = 0;
    const s = CM0(), o = t.getLineCount();
    let a = 0;
    for(let l = 1; l <= o; l++){
        if (IM0(t, l, s, e), !lPv(s)) continue;
        const c = cPv(t, l) ? t.getValueLength() : l < o ? t.getOffsetAt({
            lineNumber: l + 1,
            column: 1
        }) : t.getValueLength(), u = jRv(uPv(t, a, c), e);
        if (u.truncatedColumns && (i = !0), n.push([
            ...u.cells
        ]), u.cells.length > r && (r = u.cells.length), cPv(t, l)) break;
        l < o && (a = c, TM0(s));
    }
    if (!lPv(s)) {
        const l = jRv(uPv(t, a, t.getValueLength()), e);
        l.truncatedColumns && (i = !0), n.push([
            ...l.cells
        ]), l.cells.length > r && (r = l.cells.length);
    }
    return r = Math.min(r, yPs), {
        rows: n,
        columnCount: r,
        truncatedColumns: i
    };
}
import { c as Htc } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useCallback as Wtc, useLayoutEffect as Gtc, useRef as vJt, useState as RM0, useSyncExternalStore as PM0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as q$, jsxs as s5n } from "./react-runtime/react/esm-jsx-runtime-production.js";
function dPv(t) {
    const e = Htc(5), { columnWidthsPx: n, columnCount: i } = t, r = i + 1;
    let s;
    if (e[0] !== n || e[1] !== r) {
        let o;
        e[3] !== n ? (o = (a, l)=>q$("col", {
                style: n?.[l] !== void 0 ? {
                    width: `${n[l]}px`
                } : void 0
            }, l), e[3] = n, e[4] = o) : o = e[4], s = q$("colgroup", {
            children: Array.from({
                length: r
            }, o)
        }), e[0] = n, e[1] = r, e[2] = s;
    } else s = e[2];
    return s;
}
function hPv(t) {
    return t.getTextModel();
}
function MM0(t, e) {
    const n = xM0(t, e);
    return {
        grid: n,
        columnCount: n.columnCount,
        truncatedColumns: n.truncatedColumns
    };
}
function DM0(t, e) {
    const n = Htc(5), i = vJt(void 0), r = vJt(void 0);
    let s;
    n[0] !== t ? (s = (c)=>{
        const u = new Nt, d = u.add(new Vn), h = ()=>{
            const p = hPv(t);
            d.value = p ? p.onDidChangeContent(c) : void 0;
        };
        return h(), u.add({
            dispose: t.subscribe("snapshotChanged", ()=>{
                h(), c();
            })
        }), ()=>u.dispose();
    }, n[0] = t, n[1] = s) : s = n[1];
    const o = s;
    let a;
    return n[2] !== e || n[3] !== t ? (a = ()=>{
        const c = hPv(t);
        if (!c) {
            i.current = void 0, r.current = void 0;
            return;
        }
        const u = c.getVersionId(), d = r.current, h = i.current;
        if (h !== void 0 && d?.modelVersionId === u && d.delimiter === e) return h;
        const p = MM0(c, e);
        return i.current = p, r.current = {
            modelVersionId: u,
            delimiter: e
        }, p;
    }, n[2] = e, n[3] = t, n[4] = a) : a = n[4], PM0(o, a);
}
function NM0(t, e) {
    const n = e?.querySelector('tbody tr[data-index="0"]:not([data-csv-spacer])');
    if (!n) return;
    const i = [
        ...n.querySelectorAll("td")
    ].map((o)=>o.getBoundingClientRect().width), r = t ? [
        ...t.querySelectorAll("thead tr th")
    ].map((o)=>o.getBoundingClientRect().width) : [], s = Math.max(i.length, r.length);
    return Array.from({
        length: s
    }, (o, a)=>Math.max(i[a] ?? 0, r[a] ?? 0));
}
function LM0(t, e) {
    return t === void 0 || t.length !== e.length ? !1 : t.every((n, i)=>Math.abs(n - e[i]) < .5);
}
function OM0(t) {
    const e = Htc(16), { cells: n, measureRef: i, rowNumber: r, columnIndexes: s, virtualIndex: o } = t, a = r % 2 === 0, l = a || void 0;
    let c;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (c = {
        className: "glass--default-marker"
    }, e[0] = c) : c = e[0];
    let u;
    e[1] !== r ? (u = q$("td", {
        className: "glass-9f619 glass-17fpy1y glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-s1s249 glass-32b0ac glass-141kqco glass-so031l glass-1q0q8m5 glass-17fyfba glass-16dsc37 glass-j0a0fe glass-7wzq59 glass-u96u03 glass-1vjfegm glass-4b2ntj glass-1ua6jya glass-6ucuu3 glass-1sv74u glass-1kflixd glass-1hr2gdg glass-ss6m8b glass-87ps6o glass-uxw1ft",
        children: r
    }), e[1] = r, e[2] = u) : u = e[2];
    let d;
    if (e[3] !== n || e[4] !== s || e[5] !== a) {
        let p;
        e[7] !== n || e[8] !== a ? (p = (g)=>q$("td", {
                ...{
                    0: {
                        className: "glass-9f619 glass-17fpy1y glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-s1s249 glass-32b0ac glass-141kqco glass-so031l glass-1q0q8m5 glass-17fyfba glass-1ua6jya glass-jck37l glass-dpxx8g glass-16dsc37 glass-126k92a glass-j0a0fe"
                    },
                    1: {
                        className: "glass-9f619 glass-17fpy1y glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-s1s249 glass-32b0ac glass-141kqco glass-so031l glass-1q0q8m5 glass-17fyfba glass-dpxx8g glass-16dsc37 glass-126k92a glass-j0a0fe glass-i07v4r glass-jck37l"
                    }
                }[!!a << 0],
                children: n[g] ?? ""
            }, g), e[7] = n, e[8] = a, e[9] = p) : p = e[9], d = s.map(p), e[3] = n, e[4] = s, e[5] = a, e[6] = d;
    } else d = e[6];
    let h;
    return e[10] !== i || e[11] !== l || e[12] !== u || e[13] !== d || e[14] !== o ? (h = s5n("tr", {
        "data-csv-row": !0,
        "data-index": o,
        "data-striped": l,
        ref: i,
        ...c,
        children: [
            u,
            d
        ]
    }), e[10] = i, e[11] = l, e[12] = u, e[13] = d, e[14] = o, e[15] = h) : h = e[15], h;
}
export function FM0({ editorHandle: t, delimiter: e }) {
    const n = DM0(t, e), i = vJt(null), r = vJt(null), s = vJt(null), o = vJt(null), a = vJt(void 0), [l, c] = RM0(void 0), u = Math.max(0, (n?.grid.rows.length ?? 0) - 1), d = aPv({
        count: u,
        estimateSize: ()=>SPs,
        getScrollElement: ()=>i.current,
        measureElement: (M, O, N)=>{
            if (!(M instanceof HTMLElement)) return SPs;
            if (N.isScrolling) {
                const U = Number(M.dataset.index);
                return N.measurementsCache[U]?.size ?? SPs;
            }
            return M.getBoundingClientRect().height;
        },
        overscan: pPv
    }), h = d.getVirtualItems(), p = h.some((M)=>M.index === 0), g = d.getTotalSize(), f = h[0]?.start ?? 0, _ = g - (h.at(-1)?.end ?? g), b = Wtc((M = !1)=>{
        if (!M && a.current !== void 0) return;
        const O = NM0(s.current, o.current);
        O === void 0 || LM0(a.current, O) || (a.current = O, c(O));
    }, []), y = Wtc(()=>{
        const M = i.current, O = r.current;
        M && O && (O.scrollLeft = M.scrollLeft);
    }, []);
    Gtc(()=>{
        a.current = void 0, c(void 0);
    }, [
        n
    ]), Gtc(()=>{
        b();
        const M = o.current;
        if (!M) return;
        const O = new ResizeObserver(()=>{
            b(!0);
        });
        return O.observe(M), ()=>O.disconnect();
    }, [
        b,
        n,
        h.length,
        p
    ]), Gtc(()=>{
        y();
    }, [
        y,
        n,
        l
    ]);
    const S = Wtc(()=>{
        y();
    }, [
        y
    ]);
    if (n === void 0) return null;
    const { grid: k, columnCount: C, truncatedColumns: T } = n, I = k.rows[0] ?? [];
    if (k.rows.length === 0) return q$("div", {
        "data-component": "glass-csv-table",
        className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-euugli glass-2lwn1j glass-b3r6kr glass-1ua6jya",
        children: q$("div", {
            className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-6s0dn4 glass-l56j7k glass-4b2ntj",
            children: D("glass.fileTab.csvTable.empty", "File is empty")
        })
    });
    const A = Array.from({
        length: C
    }, (M, O)=>O), P = l !== void 0;
    return s5n("div", {
        "data-component": "glass-csv-table",
        className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-euugli glass-2lwn1j glass-b3r6kr glass-1ua6jya",
        children: [
            q$("div", {
                className: "glass-2lah0s glass-so031l glass-1q0q8m5 glass-17fyfba",
                children: q$("div", {
                    ref: r,
                    className: "glass-b3r6kr",
                    children: s5n("table", {
                        ref: s,
                        ...{
                            0: {
                                className: "glass-1vathgz glass-1gukg7c glass-11wthnw glass-1wd3ewq glass-1drmoe9 glass-ezivpi glass-gqtt45"
                            },
                            1: {
                                className: "glass-1vathgz glass-1gukg7c glass-11wthnw glass-1wd3ewq glass-ezivpi glass-gqtt45 glass-140o2bo"
                            }
                        }[!!P << 0],
                        children: [
                            q$(dPv, {
                                columnCount: C,
                                columnWidthsPx: l
                            }),
                            q$("thead", {
                                children: s5n("tr", {
                                    children: [
                                        q$("th", {
                                            scope: "col",
                                            className: "glass-9f619 glass-17fpy1y glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-s1s249 glass-32b0ac glass-141kqco glass-so031l glass-1q0q8m5 glass-17fyfba glass-dpxx8g glass-16dsc37 glass-126k92a glass-j0a0fe glass-1wd3ewq glass-13ebx5f glass-7wzq59 glass-u96u03 glass-1vjfegm glass-1ua6jya glass-26q4nh"
                                        }),
                                        A.map((M)=>q$("th", {
                                                scope: "col",
                                                className: "glass-9f619 glass-17fpy1y glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-s1s249 glass-32b0ac glass-141kqco glass-so031l glass-1q0q8m5 glass-17fyfba glass-dpxx8g glass-16dsc37 glass-126k92a glass-j0a0fe glass-flfp0o glass-1wd3ewq glass-13ebx5f",
                                                children: I[M] ?? ""
                                            }, M))
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            q$("div", {
                onScroll: S,
                ref: i,
                className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-euugli glass-2lwn1j glass-ysyzu8",
                children: s5n("table", {
                    ref: o,
                    ...{
                        0: {
                            className: "glass-1vathgz glass-1gukg7c glass-11wthnw glass-1wd3ewq glass-1drmoe9 glass-ezivpi glass-gqtt45"
                        },
                        1: {
                            className: "glass-1vathgz glass-1gukg7c glass-11wthnw glass-1wd3ewq glass-ezivpi glass-gqtt45 glass-140o2bo"
                        }
                    }[!!P << 0],
                    children: [
                        q$(dPv, {
                            columnCount: C,
                            columnWidthsPx: l
                        }),
                        s5n("tbody", {
                            children: [
                                f > 0 && q$("tr", {
                                    "aria-hidden": !0,
                                    "data-csv-spacer": !0,
                                    children: q$("td", {
                                        colSpan: C + 1,
                                        className: "glass-9f619 glass-17fpy1y glass-exx8yu glass-1xpa7k glass-18d9i69 glass-1uhho1l glass-1ua6jya glass-dpxx8g glass-16dsc37 glass-126k92a glass-j0a0fe glass-47corl",
                                        children: q$("div", {
                                            style: {
                                                height: f
                                            }
                                        })
                                    })
                                }),
                                h.map((M)=>{
                                    const O = M.index + 1;
                                    return q$(OM0, {
                                        cells: k.rows[O] ?? [],
                                        columnIndexes: A,
                                        measureRef: d.measureElement,
                                        rowNumber: O,
                                        virtualIndex: M.index
                                    }, O);
                                }),
                                _ > 0 && q$("tr", {
                                    "aria-hidden": !0,
                                    "data-csv-spacer": !0,
                                    children: q$("td", {
                                        colSpan: C + 1,
                                        className: "glass-9f619 glass-17fpy1y glass-exx8yu glass-1xpa7k glass-18d9i69 glass-1uhho1l glass-1ua6jya glass-dpxx8g glass-16dsc37 glass-126k92a glass-j0a0fe glass-47corl",
                                        children: q$("div", {
                                            style: {
                                                height: _
                                            }
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            T && q$("div", {
                className: "glass-2lah0s glass-f6zju3 glass-1yxiud8 glass-cnij5n glass-yab65l glass-178xt8z glass-13fuv20 glass-1aeic0j glass-4b2ntj glass-1wm8ruf",
                children: D("glass.fileTab.csvTable.truncatedColumns", "Showing the first {0} columns. Switch to Raw to see the full file.", yPs)
            })
        ]
    });
}
import { useEffect as UM0, useRef as mPv, useState as jM0 } from "./react-runtime/react/esm-index-production.js";
export function iSe(t) {
    const e = mPv(null), n = mPv(!0), [i] = jM0(()=>{
        let r = t;
        const s = ()=>e.current ??= new II(r);
        return {
            trigger: (o, a)=>n.current ? s().trigger(o, a) : Promise.reject(new Hc),
            isTriggered: ()=>e.current?.isTriggered() ?? !1,
            cancel: ()=>e.current?.cancel(),
            dispose: ()=>{
                e.current?.dispose(), e.current = null;
            },
            get defaultDelay () {
                return r;
            },
            set defaultDelay (o){
                r = o, e.current && (e.current.defaultDelay = o);
            }
        };
    });
    return UM0(()=>(n.current = !0, ()=>{
            n.current = !1, e.current?.dispose(), e.current = null;
        }), []), i;
}
import { c as KPs } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as A6i, useRef as o5n, useState as bYe } from "./react-runtime/react/esm-index-production.js";
import { jsx as TF, jsxs as R6i } from "./react-runtime/react/esm-jsx-runtime-production.js";
function gPv(t) {
    const e = KPs(133), { imageSrc: n, alt: i, path: r, resource: s, vector: o, inlinePreview: a, onActivate: l } = t, c = o === void 0 ? !1 : o, u = a === void 0 ? !1 : a, { workspace: d } = fg(), h = $i(d, vN), p = et(db), g = $i(d, yU), f = $i(d, t_), _ = $i(d, ul), b = $i(d, Nu), y = c ? 1 : "fit";
    let S;
    e[0] !== c ? (S = c ? r0l.filter(HM0) : r0l, e[0] = c, e[1] = S) : S = e[1];
    const k = S, [C, T] = bYe(y);
    let I;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (I = {
        x: 0,
        y: 0
    }, e[2] = I) : I = e[2];
    const [A, P] = bYe(I), [M, O] = bYe(n);
    n !== M && (O(n), T(y), P({
        x: 0,
        y: 0
    }));
    const [N, U] = bYe(!1), [j, $] = bYe(!1), [H, G] = bYe(null), q = o5n(!1), K = o5n(void 0), V = o5n(null), Y = o5n(null), J = o5n(null);
    let Q;
    e[3] === Symbol.for("react.memo_cache_sentinel") ? (Q = ()=>wZg(Y.current), e[3] = Q) : Q = e[3];
    const te = Q, [ee, re] = bYe(void 0), ie = iSe(150);
    let oe, se;
    e[4] !== ie || e[5] !== c ? (oe = ()=>{
        if (c) return;
        const Tn = V.current;
        if (!Tn) return;
        const Zn = ()=>{
            re(te());
        };
        Zn();
        const tr = new ResizeObserver(()=>{
            ie.trigger(Zn);
        });
        return tr.observe(Tn), ()=>{
            ie.cancel(), tr.disconnect();
        };
    }, se = [
        te,
        ie,
        c
    ], e[4] = ie, e[5] = c, e[6] = oe, e[7] = se) : (oe = e[6], se = e[7]), A6i(oe, se), typeof C == "number" && ee !== void 0 && Math.abs(C - ee) < .005 && T("fit");
    let le;
    e[8] !== u || e[9] !== C ? (le = (Tn)=>{
        const { factor: Zn, clientX: tr, clientY: hi } = Tn, ui = C, Ni = V.current, cr = te(), fs = ui === "fit" ? cr ?? 1 : ui, mi = Math.max(EIt, Math.min(IIt, fs * Zn));
        if (!(Math.abs(mi - fs) < .001) && (T(mi), tr !== void 0 && hi !== void 0 && Ni)) {
            const di = Ni.getBoundingClientRect(), Mr = tr - di.left, jr = hi - di.top, Ur = di.width / 2, Ws = di.height / 2, jo = u && ui === "fit" ? 1 : u && cr !== void 0 && cr > 0 ? fs / cr : fs, Ia = u && cr !== void 0 && cr > 0 ? mi / cr : mi;
            P((ga)=>{
                const zs = (Mr - Ur - ga.x) / jo, Vs = (jr - Ws - ga.y) / jo;
                return {
                    x: Mr - Ur - zs * Ia,
                    y: jr - Ws - Vs * Ia
                };
            });
        }
    }, e[8] = u, e[9] = C, e[10] = le) : le = e[10];
    const ce = le;
    let ae;
    e[11] === Symbol.for("react.memo_cache_sentinel") ? (ae = (Tn)=>{
        T((Zn)=>v5k(Zn, Tn, te));
    }, e[11] = ae) : ae = e[11];
    const de = ae, he = !u;
    let ge;
    e[12] !== he ? (ge = {
        enabled: he,
        preventScroll: !0
    }, e[12] = he, e[13] = ge) : ge = e[13], Lxs(V, ge);
    let pe, ve;
    e[14] !== h ? (pe = ()=>{
        const Tn = V.current;
        if (!Tn) return;
        const Zn = h.createScoped(Tn);
        return J.current = BDi.bindTo(Zn), ()=>{
            J.current = null, Zn.dispose();
        };
    }, ve = [
        h
    ], e[14] = h, e[15] = pe, e[16] = ve) : (pe = e[15], ve = e[16]), A6i(pe, ve);
    let fe;
    e[17] !== y ? (fe = (Tn)=>{
        const { action: Zn } = Tn;
        if (document.activeElement === V.current) e: switch(Zn){
            case "resetZoom":
                {
                    T(y), P({
                        x: 0,
                        y: 0
                    });
                    break e;
                }
            case "zoomIn":
                {
                    de(rBe);
                    break e;
                }
            case "zoomOut":
                {
                    de(1 / rBe);
                    break e;
                }
            default:
                return Zn;
        }
    }, e[17] = y, e[18] = fe) : fe = e[18], mu("imagePreviewZoomRequested", fe);
    let _e, Ce;
    e[19] === Symbol.for("react.memo_cache_sentinel") ? (_e = ()=>{
        const Tn = (Zn)=>{
            q.current && $(XPs(Zn));
        };
        return window.addEventListener("keydown", Tn, !0), window.addEventListener("keyup", Tn, !0), ()=>{
            window.removeEventListener("keydown", Tn, !0), window.removeEventListener("keyup", Tn, !0);
        };
    }, Ce = [], e[19] = _e, e[20] = Ce) : (_e = e[19], Ce = e[20]), A6i(_e, Ce);
    let Se, Pe;
    e[21] !== u || e[22] !== ce ? (Se = ()=>{
        const Tn = V.current;
        if (!Tn) return;
        const Zn = (tr)=>{
            if (!q.current || tr.deltaY === 0) return;
            const hi = _r ? tr.metaKey : tr.ctrlKey, ui = _r && tr.ctrlKey;
            if (u && !hi && !ui) return;
            tr.preventDefault();
            const Ni = Math.max(-1, Math.min(1, tr.deltaY / 100)), cr = Math.abs(Ni) * .5 + .5, fs = 1 + (i0l - 1) * cr, mi = Ni < 0 ? fs : 1 / fs;
            ce({
                factor: mi,
                clientX: tr.clientX,
                clientY: tr.clientY
            });
        };
        return Tn.addEventListener("wheel", Zn, {
            passive: !1
        }), ()=>Tn.removeEventListener("wheel", Zn);
    }, Pe = [
        u,
        ce
    ], e[21] = u, e[22] = ce, e[23] = Se, e[24] = Pe) : (Se = e[23], Pe = e[24]), A6i(Se, Pe);
    let we;
    e[25] === Symbol.for("react.memo_cache_sentinel") ? (we = function(Zn) {
        let tr = 0, hi = 0;
        e: switch(Zn.key){
            case "ArrowLeft":
                {
                    tr = -D2i;
                    break e;
                }
            case "ArrowRight":
                {
                    tr = D2i;
                    break e;
                }
            case "ArrowUp":
                {
                    hi = -D2i;
                    break e;
                }
            case "ArrowDown":
                {
                    hi = D2i;
                    break e;
                }
            default:
                return;
        }
        Zn.preventDefault(), P((ui)=>({
                x: ui.x + tr,
                y: ui.y + hi
            }));
    }, e[25] = we) : we = e[25];
    const Ie = we, Me = o5n(null);
    let De, Ne;
    e[26] === Symbol.for("react.memo_cache_sentinel") ? (De = ()=>()=>Me.current?.(), Ne = [], e[26] = De, e[27] = Ne) : (De = e[26], Ne = e[27]), A6i(De, Ne);
    let be;
    e[28] === Symbol.for("react.memo_cache_sentinel") ? (be = (Tn)=>{
        if (Tn.button !== 0) return;
        K.current = {
            x: Tn.clientX,
            y: Tn.clientY
        }, U(!0), Me.current?.();
        const Zn = (hi)=>{
            P((ui)=>({
                    x: ui.x + hi.movementX,
                    y: ui.y + hi.movementY
                }));
        }, tr = ()=>{
            U(!1), document.removeEventListener("mousemove", Zn), document.removeEventListener("mouseup", tr), Me.current = null;
        };
        document.addEventListener("mousemove", Zn), document.addEventListener("mouseup", tr), Me.current = tr, V.current?.focus(), Tn.preventDefault();
    }, e[28] = be) : be = e[28];
    const je = be;
    let $e;
    e[29] !== l || e[30] !== ce ? ($e = (Tn)=>{
        const Zn = K.current;
        if (K.current = void 0, !Zn) return;
        const tr = Math.abs(Tn.clientX - Zn.x), hi = Math.abs(Tn.clientY - Zn.y);
        if (tr >= 5 || hi >= 5) return;
        if (l) {
            l(Y.current);
            return;
        }
        const ui = XPs(Tn.nativeEvent) ? 1 / rBe : rBe;
        ce({
            factor: ui,
            clientX: Tn.clientX,
            clientY: Tn.clientY
        });
    }, e[29] = l, e[30] = ce, e[31] = $e) : $e = e[31];
    const Je = $e;
    let Ge;
    e[32] !== N ? (Ge = (Tn)=>{
        N || $(XPs(Tn.nativeEvent));
    }, e[32] = N, e[33] = Ge) : Ge = e[33];
    const xe = Ge;
    let Oe;
    e[34] !== xe ? (Oe = (Tn)=>{
        q.current = !0, xe(Tn);
    }, e[34] = xe, e[35] = Oe) : Oe = e[35];
    const ct = Oe;
    let Ye;
    e[36] === Symbol.for("react.memo_cache_sentinel") ? (Ye = ()=>{
        q.current = !1, $(!1);
    }, e[36] = Ye) : Ye = e[36];
    const Ve = Ye;
    let Xe;
    e[37] === Symbol.for("react.memo_cache_sentinel") ? (Xe = (Tn)=>{
        Tn.preventDefault(), Tn.stopPropagation(), G({
            x: Tn.clientX,
            y: Tn.clientY
        });
    }, e[37] = Xe) : Xe = e[37];
    const lt = Xe;
    let He;
    e[38] === Symbol.for("react.memo_cache_sentinel") ? (He = ()=>V.current?.focus(), e[38] = He) : He = e[38];
    const gt = He;
    let ht;
    e[39] === Symbol.for("react.memo_cache_sentinel") ? (ht = ()=>{
        de(rBe), gt();
    }, e[39] = ht) : ht = e[39];
    const Ae = ht;
    let ot;
    e[40] === Symbol.for("react.memo_cache_sentinel") ? (ot = ()=>{
        de(1 / rBe), gt();
    }, e[40] = ot) : ot = e[40];
    const Be = ot;
    let Ue;
    e[41] !== y ? (Ue = ()=>{
        T(y), P({
            x: 0,
            y: 0
        }), gt();
    }, e[41] = y, e[42] = Ue) : Ue = e[42];
    const it = Ue;
    let qe;
    e[43] !== p || e[44] !== g || e[45] !== f || e[46] !== _ || e[47] !== b ? (qe = {
        clipboardService: p,
        fileDialogService: g,
        fileService: f,
        notificationService: _,
        storageService: b
    }, e[43] = p, e[44] = g, e[45] = f, e[46] = _, e[47] = b, e[48] = qe) : qe = e[48];
    const pt = qe;
    let dt;
    e[49] !== i || e[50] !== pt || e[51] !== n || e[52] !== r || e[53] !== s ? (dt = QKt({
        services: pt,
        source: {
            alt: i,
            path: r,
            resource: s,
            src: n
        }
    }), e[49] = i, e[50] = pt, e[51] = n, e[52] = r, e[53] = s, e[54] = dt) : dt = e[54];
    const ft = dt, bt = A.x !== 0 || A.y !== 0;
    let St;
    e[55] !== bt || e[56] !== A.x || e[57] !== A.y ? (St = bt ? {
        transform: `translate(${A.x}px, ${A.y}px)`
    } : void 0, e[55] = bt, e[56] = A.x, e[57] = A.y, e[58] = St) : St = e[58];
    const Et = St, kt = C === "fit" ? void 0 : u && ee !== void 0 && ee > 0 ? C / ee : C;
    let xt;
    e[59] !== kt ? (xt = kt === void 0 ? void 0 : {
        transform: `scale(${kt})`
    }, e[59] = kt, e[60] = xt) : xt = e[60];
    const Pt = xt, Dt = j && !l;
    let Vt;
    e[61] !== u ? (Vt = Ac(a5n.root, u && g6i.outsidePanelEdge), e[61] = u, e[62] = Vt) : Vt = e[62];
    let tn;
    e[63] === Symbol.for("react.memo_cache_sentinel") ? (tn = ()=>{
        J.current?.set(!1), $(!1);
    }, e[63] = tn) : tn = e[63];
    let un;
    e[64] === Symbol.for("react.memo_cache_sentinel") ? (un = ()=>{
        J.current?.set(!0);
    }, e[64] = un) : un = e[64];
    let kn;
    e[65] !== N || e[66] !== Dt ? (kn = N ? {
        className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-1rea2x4 glass-1n2onr6 glass-jbqb8w glass-1t137rt glass-1rohswg glass-fk6m8 glass-i9pz9s"
    } : Dt ? {
        className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-1rea2x4 glass-1n2onr6 glass-jbqb8w glass-1t137rt glass-1rohswg glass-fk6m8 glass-zuqxi3"
    } : {
        className: "glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-1rea2x4 glass-1n2onr6 glass-jbqb8w glass-1t137rt glass-1rohswg glass-fk6m8 glass-1huxd7x"
    }, e[65] = N, e[66] = Dt, e[67] = kn) : kn = e[67];
    let oi;
    e[68] !== u || e[69] !== C ? (oi = Ac(a5n.stage, C === "fit" || u ? a5n.stagePaddingNarrow : a5n.stagePaddingWide, !u && g6i.contentClearance), e[68] = u, e[69] = C, e[70] = oi) : oi = e[70];
    const Fn = !c && C !== "fit" && C >= Wms ? !0 : void 0, Qt = C === "fit" ? "fit" : "scaled", Sn = u ? !0 : void 0;
    let $n;
    e[71] === Symbol.for("react.memo_cache_sentinel") ? ($n = {
        0: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o"
        },
        4: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-193iq5w glass-mz0i5r glass-14atkfc glass-t7dq6l"
        },
        2: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-1jpgh95"
        },
        6: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-193iq5w glass-mz0i5r glass-14atkfc glass-t7dq6l glass-1jpgh95"
        },
        1: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-1qd1gx7"
        },
        5: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-193iq5w glass-mz0i5r glass-14atkfc glass-t7dq6l glass-1qd1gx7"
        },
        3: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-1jpgh95 glass-1qd1gx7"
        },
        7: {
            className: "glass-1lliihq glass-dj266r glass-ack27t glass-at24cr glass-8x9d4c glass-87ps6o glass-193iq5w glass-mz0i5r glass-14atkfc glass-t7dq6l glass-1jpgh95 glass-1qd1gx7"
        }
    }, e[71] = $n) : $n = e[71];
    const Mn = $n[!!(C === "fit" || u) << 2 | (C !== "fit") << 1 | (!c && C !== "fit" && C >= Wms) << 0];
    let Un;
    e[72] !== i || e[73] !== n || e[74] !== Pt || e[75] !== Fn || e[76] !== Qt || e[77] !== Sn || e[78] !== Mn ? (Un = TF("img", {
        alt: i,
        "data-pixelated": Fn,
        "data-scale-mode": Qt,
        "data-inline-preview": Sn,
        draggable: !1,
        ref: Y,
        src: n,
        ...Mn,
        style: Pt
    }), e[72] = i, e[73] = n, e[74] = Pt, e[75] = Fn, e[76] = Qt, e[77] = Sn, e[78] = Mn, e[79] = Un) : Un = e[79];
    let Xn;
    e[80] !== Et || e[81] !== oi || e[82] !== Un ? (Xn = TF("div", {
        ...oi,
        style: Et,
        children: Un
    }), e[80] = Et, e[81] = oi, e[82] = Un, e[83] = Xn) : Xn = e[83];
    let Ti;
    e[84] !== i || e[85] !== Je || e[86] !== ct || e[87] !== xe || e[88] !== kn || e[89] !== Xn ? (Ti = TF("div", {
        "aria-label": i,
        onBlur: tn,
        onClick: Je,
        onContextMenu: lt,
        onFocus: un,
        onKeyDown: Ie,
        onMouseDown: je,
        onMouseEnter: ct,
        onMouseLeave: Ve,
        onMouseMove: xe,
        ref: V,
        role: "region",
        tabIndex: 0,
        ...kn,
        children: Xn
    }), e[84] = i, e[85] = Je, e[86] = ct, e[87] = xe, e[88] = kn, e[89] = Xn, e[90] = Ti) : Ti = e[90];
    let bi;
    e[91] === Symbol.for("react.memo_cache_sentinel") ? (bi = TF(ao, {
        title: "Zoom out"
    }), e[91] = bi) : bi = e[91];
    const Qn = C !== "fit" && C <= EIt;
    let ni;
    e[92] !== Qn ? (ni = TF(xs, {
        content: bi,
        placement: "top",
        children: TF(ho, {
            "aria-label": "Zoom out",
            disabled: Qn,
            icon: "magnifying-glass-minus",
            onClick: Be,
            rounded: !0,
            size: "md"
        })
    }), e[92] = Qn, e[93] = ni) : ni = e[93];
    let pn;
    e[94] === Symbol.for("react.memo_cache_sentinel") ? (pn = TF(ao, {
        title: "Zoom in"
    }), e[94] = pn) : pn = e[94];
    const yn = C !== "fit" && C >= IIt;
    let Ln;
    e[95] !== yn ? (Ln = TF(xs, {
        content: pn,
        placement: "top",
        children: TF(ho, {
            "aria-label": "Zoom in",
            disabled: yn,
            icon: "magnifying-glass-plus",
            onClick: Ae,
            rounded: !0,
            size: "md",
            iconSize: "base"
        })
    }), e[95] = yn, e[96] = Ln) : Ln = e[96];
    let xi;
    e[97] !== ee || e[98] !== C ? (xi = kZg(C, ee), e[97] = ee, e[98] = C, e[99] = xi) : xi = e[99];
    let Ci;
    e[100] !== xi ? (Ci = TF(hn.Trigger, {
        children: TF(An, {
            rootStyle: a5n.zoomLabel,
            rounded: !0,
            size: "md",
            variant: "text",
            children: xi
        })
    }), e[100] = xi, e[101] = Ci) : Ci = e[101];
    let En;
    e[102] !== it ? (En = (Tn)=>{
        Tn === "fit" ? it() : (T(Tn), P({
            x: 0,
            y: 0
        }), gt());
    }, e[102] = it, e[103] = En) : En = e[103];
    let Dn;
    if (e[104] !== ee || e[105] !== k) {
        let Tn;
        e[107] !== ee ? (Tn = (Zn)=>TF(hn.RadioItem, {
                closeOnSelect: !0,
                value: Zn,
                children: kZg(Zn, ee)
            }, Zn === "fit" ? "fit" : Zn), e[107] = ee, e[108] = Tn) : Tn = e[108], Dn = k.map(Tn), e[104] = ee, e[105] = k, e[106] = Dn;
    } else Dn = e[106];
    let Si;
    e[109] !== C || e[110] !== En || e[111] !== Dn ? (Si = TF(hn.Content, {
        "aria-label": "Zoom level",
        placement: "top",
        children: TF(hn.RadioGroup, {
            "aria-label": "Zoom level",
            onValueChange: En,
            value: C,
            children: Dn
        })
    }), e[109] = C, e[110] = En, e[111] = Dn, e[112] = Si) : Si = e[112];
    let Ui;
    e[113] !== Ci || e[114] !== Si ? (Ui = R6i(hn, {
        children: [
            Ci,
            Si
        ]
    }), e[113] = Ci, e[114] = Si, e[115] = Ui) : Ui = e[115];
    let Nn;
    e[116] !== ni || e[117] !== Ln || e[118] !== Ui ? (Nn = R6i(dec, {
        "data-component": "glass-image-preview-toolbar",
        children: [
            ni,
            Ln,
            Ui
        ]
    }), e[116] = ni, e[117] = Ln, e[118] = Ui, e[119] = Nn) : Nn = e[119];
    let ci;
    e[120] === Symbol.for("react.memo_cache_sentinel") ? (ci = (Tn)=>{
        Tn || G(null);
    }, e[120] = ci) : ci = e[120];
    let Pi;
    e[121] !== ft ? (Pi = ft.map($M0), e[121] = ft, e[122] = Pi) : Pi = e[122];
    let vi;
    e[123] !== Pi ? (vi = TF(Ka.Content, {
        "aria-label": "Image actions",
        children: Pi
    }), e[123] = Pi, e[124] = vi) : vi = e[124];
    let Yi;
    e[125] !== H || e[126] !== vi ? (Yi = TF(Ka, {
        onOpenChange: ci,
        open: H,
        children: vi
    }), e[125] = H, e[126] = vi, e[127] = Yi) : Yi = e[127];
    let Bn;
    return e[128] !== Vt || e[129] !== Ti || e[130] !== Nn || e[131] !== Yi ? (Bn = R6i("div", {
        "data-component": "glass-image-preview",
        ...Vt,
        children: [
            Ti,
            Nn,
            Yi
        ]
    }), e[128] = Vt, e[129] = Ti, e[130] = Nn, e[131] = Yi, e[132] = Bn) : Bn = e[132], Bn;
}
function $M0(t) {
    return TF(Ka.Item, {
        onSelect: ()=>{
            t.run();
        },
        children: t.label
    }, t.id);
}
function HM0(t) {
    return t !== "fit";
}
export function YPs(t) {
    const e = KPs(9);
    let n, i, r;
    e[0] !== t ? ({ expandable: n, isActive: i, ...r } = t, e[0] = t, e[1] = n, e[2] = i, e[3] = r) : (n = e[1], i = e[2], r = e[3]);
    const s = n === void 0 ? !1 : n, o = i === void 0 ? !0 : i;
    if (!s) {
        let l;
        return e[4] !== r ? (l = TF(gPv, {
            ...r
        }), e[4] = r, e[5] = l) : l = e[5], l;
    }
    let a;
    return e[6] !== o || e[7] !== r ? (a = TF(WM0, {
        ...r,
        isActive: o
    }), e[6] = o, e[7] = r, e[8] = a) : a = e[8], a;
}
function WM0(t) {
    const e = KPs(39);
    let n, i;
    e[0] !== t ? ({ isActive: n, ...i } = t, e[0] = t, e[1] = n, e[2] = i) : (n = e[1], i = e[2]);
    const r = n === void 0 ? !0 : n, [s, o] = bYe(!1), [a, l] = bYe(null), { workspace: c } = fg(), u = et(db), d = $i(c, yU), h = $i(c, t_), p = $i(c, ul), g = $i(c, Nu);
    let f;
    e[3] !== u || e[4] !== d || e[5] !== h || e[6] !== p || e[7] !== g || e[8] !== i.alt || e[9] !== i.imageSrc || e[10] !== i.path || e[11] !== i.resource ? (f = QKt({
        services: {
            clipboardService: u,
            fileDialogService: d,
            fileService: h,
            notificationService: p,
            storageService: g
        },
        source: {
            alt: i.alt,
            path: i.path,
            resource: i.resource,
            src: i.imageSrc
        }
    }), e[3] = u, e[4] = d, e[5] = h, e[6] = p, e[7] = g, e[8] = i.alt, e[9] = i.imageSrc, e[10] = i.path, e[11] = i.resource, e[12] = f) : f = e[12];
    const _ = f, [b, y] = bYe(i.imageSrc);
    i.imageSrc !== b && (y(i.imageSrc), o(!1), l(null)), !r && s && (o(!1), l(null));
    let S;
    e[13] === Symbol.for("react.memo_cache_sentinel") ? (S = (H)=>{
        o(H), H || l(null);
    }, e[13] = S) : S = e[13];
    let k;
    e[14] !== i ? (k = TF(qM0, {
        ...i
    }), e[14] = i, e[15] = k) : k = e[15];
    let C;
    e[16] === Symbol.for("react.memo_cache_sentinel") ? (C = TF(AM.Backdrop, {}), e[16] = C) : C = e[16];
    const T = i.alt || "Image preview";
    let I;
    e[17] === Symbol.for("react.memo_cache_sentinel") ? (I = (H)=>{
        H.preventDefault(), H.stopPropagation(), l({
            x: H.clientX,
            y: H.clientY
        });
    }, e[17] = I) : I = e[17];
    let A;
    e[18] !== i.alt || e[19] !== i.imageSrc ? (A = TF("img", {
        alt: i.alt,
        onContextMenu: I,
        src: i.imageSrc
    }), e[18] = i.alt, e[19] = i.imageSrc, e[20] = A) : A = e[20];
    let P;
    e[21] !== T || e[22] !== A ? (P = TF(AM.Popup, {
        "aria-label": T,
        className: "glass-image-preview-lightbox-popup",
        closeOnBackdropClick: !0,
        fullscreenMaxWidth: null,
        children: A
    }), e[21] = T, e[22] = A, e[23] = P) : P = e[23];
    let M;
    e[24] === Symbol.for("react.memo_cache_sentinel") ? (M = (H)=>{
        H || l(null);
    }, e[24] = M) : M = e[24];
    let O;
    e[25] !== _ ? (O = _.map(GM0), e[25] = _, e[26] = O) : O = e[26];
    let N;
    e[27] !== O ? (N = TF(Ka.Content, {
        "aria-label": "Image actions",
        children: O
    }), e[27] = O, e[28] = N) : N = e[28];
    let U;
    e[29] !== a || e[30] !== N ? (U = TF(Ka, {
        onOpenChange: M,
        open: a,
        children: N
    }), e[29] = a, e[30] = N, e[31] = U) : U = e[31];
    let j;
    e[32] !== U || e[33] !== P ? (j = R6i(AM.Portal, {
        children: [
            C,
            P,
            U
        ]
    }), e[32] = U, e[33] = P, e[34] = j) : j = e[34];
    let $;
    return e[35] !== s || e[36] !== j || e[37] !== k ? ($ = R6i(AM.Root, {
        motion: "smooth",
        onOpenChange: S,
        open: s,
        children: [
            k,
            j
        ]
    }), e[35] = s, e[36] = j, e[37] = k, e[38] = $) : $ = e[38], $;
}
function GM0(t) {
    return TF(Ka.Item, {
        onSelect: ()=>{
            t.run();
        },
        children: t.label
    }, t.id);
}
function qM0(t) {
    const e = KPs(3), { openFromElement: n } = Zit();
    let i;
    return e[0] !== n || e[1] !== t ? (i = TF(gPv, {
        ...t,
        onActivate: n
    }), e[0] = n, e[1] = t, e[2] = i) : i = e[2], i;
}
export function _Jt(t, e) {
    const n = e.defaultView?.Element;
    return n !== void 0 && t instanceof n;
}
function fPv(t, e) {
    if (!_Jt(e, t.ownerDocument)) return;
    const n = e.closest("table"), i = t.ownerDocument.defaultView?.HTMLTableElement;
    if (!(!n || !i || !(n instanceof i) || !t.contains(n))) return n;
}
function zM0(t, e = Ztc) {
    const n = Math.max(1, t.width - e * 2), i = Math.max(1, t.height - e * 2);
    return n / i;
}
function ztc(t) {
    return Qtc.has(t.overflowX) || Qtc.has(t.overflowY) || t.contentVisibility === "auto" || bPv.test(t.contain);
}
function vPv(t, e) {
    const n = t.ownerDocument.defaultView;
    if (!n || !e.contains(t)) return;
    let i = t.parentElement;
    for(; i && i !== e && e.contains(i);){
        if (ztc(n.getComputedStyle(i))) return i;
        i = i.parentElement;
    }
}
function VM0(t) {
    let e = null;
    for(let n = t.closest("[contenteditable]"); n; n = n.parentElement?.closest("[contenteditable]") ?? null)e = n;
    return e;
}
function KM0(t) {
    const { tableRect: e, clipRect: n } = t, i = Math.min(e.right, n?.right ?? e.right);
    return {
        left: i,
        right: i + Ytc + Ktc
    };
}
function YM0(t) {
    const e = t.ownerDocument;
    return [
        ...t.rows[0]?.cells ?? []
    ].reverse().map((i)=>{
        let r;
        const s = e.createTreeWalker(i, NodeFilter.SHOW_TEXT);
        for(let o = s.nextNode(); o; o = s.nextNode()){
            if (!o.textContent?.trim()) continue;
            const a = e.createRange();
            a.selectNodeContents(o);
            for (const l of a.getClientRects())r = r ? {
                top: Math.min(r.top, l.top),
                right: Math.max(r.right, l.right),
                bottom: Math.max(r.bottom, l.bottom),
                left: Math.min(r.left, l.left)
            } : {
                top: l.top,
                right: l.right,
                bottom: l.bottom,
                left: l.left
            };
        }
        return r;
    });
}
function XM0(t) {
    const e = t.edge - JPs;
    let n = e;
    for (const r of t.titlesFromLast){
        if (!r) continue;
        if (r.right <= n - Xtc - eMs || r.left >= n + eMs) break;
        n = r.left - eMs;
    }
    return n - Xtc >= t.visibleLeft + JPs ? n : e;
}
function _Pv(t) {
    const { tableRect: e, clipRect: n } = t, i = KM0(t);
    return {
        top: e.top,
        right: i.right,
        bottom: Math.min(e.bottom, n?.bottom ?? e.bottom),
        left: i.left
    };
}
function ZM0(t) {
    const { host: e, target: n, point: i } = t;
    if (!(!_Jt(n, e.ownerDocument) || !e.contains(n))) for (const r of n.getElementsByTagName("table")){
        const s = r.getBoundingClientRect();
        if (i.y < s.top || i.y > s.bottom || i.x < s.left) continue;
        const o = _Pv({
            tableRect: s,
            clipRect: vPv(r, e)?.getBoundingClientRect()
        });
        if (i.x >= o.left && i.x <= o.right && i.y >= o.top && i.y <= o.bottom) return r;
    }
}
function QM0(t, e) {
    const n = t.ownerDocument.defaultView;
    let i = Math.min(t.getBoundingClientRect().right, n?.innerWidth ?? 1 / 0);
    for(let r = e.parentElement; r && n; r = r.parentElement)ztc(n.getComputedStyle(r)) && (i = Math.min(i, r.getBoundingClientRect().left + r.clientLeft + r.clientWidth));
    return i;
}
function JM0(t, e) {
    return Jtc.has(e.overflowY) && (!Jtc.has(e.overflowX) || t.scrollHeight > t.clientHeight);
}
function eD0(t, e) {
    const n = t.ownerDocument.defaultView;
    if (!n || !e.contains(t)) return;
    const i = VM0(t);
    let r;
    for(let s = t.parentElement; s && e.contains(s); s = s === e ? null : s.parentElement){
        const o = n.getComputedStyle(s);
        if (JM0(s, o)) return r ? {
            mount: r,
            scroller: s
        } : void 0;
        ztc(o) ? r = void 0 : !r && !i?.contains(s) && o.position !== "static" && (r = s);
    }
    return {
        mount: r ?? e
    };
}
function tD0(t) {
    const { table: e, scroller: n, pinned: i } = t, r = n.ownerDocument.defaultView;
    if (!r) return 0;
    const s = e.getBoundingClientRect().top, o = n.getBoundingClientRect().top + n.clientTop;
    let a = 0;
    for (const l of i){
        const c = l.getBoundingClientRect(), u = r.getComputedStyle(l);
        if (u.position === "sticky") {
            const d = l.parentElement?.getBoundingClientRect();
            d && s >= d.top && s < d.bottom && (a = Math.max(a, (Number.parseFloat(u.top) || 0) + c.height));
        } else n.contains(l) || (a = Math.max(a, c.bottom - o));
    }
    return Math.round(a);
}
function nD0(t) {
    const { scroller: e, pinnedInset: n, railTop: i } = t, r = e.getBoundingClientRect().top + e.clientTop;
    return Math.round(e.scrollTop + i - r - n);
}
function iD0(t) {
    const n = (t.ownerDocument.defaultView?.getComputedStyle(t).position === "static" ? t.offsetParent : null) ?? t, i = n.getBoundingClientRect(), r = i.left + n.clientLeft, s = i.top + n.clientTop;
    return {
        top: s,
        right: r + n.clientWidth,
        bottom: s + n.clientHeight,
        left: r
    };
}
function rD0(t, e) {
    const i = t.ownerDocument.createElement("div");
    i.style.width = "100%", i.style.userSelect = "text", i.style.setProperty("-webkit-user-select", "text"), i.style.setProperty("--markdown-table-prose-cell-inline-size", "none"), sD0({
        from: t,
        to: i
    });
    const r = e(oD0(aD0(t)));
    return r.style.margin = "0", r.style.overflowX = "auto", r.style.overflowY = "hidden", r.style.boxSizing = "border-box", i.appendChild(r), i;
}
function sD0(t) {
    const { from: e, to: n } = t, i = e.ownerDocument.defaultView;
    if (!i) return;
    const r = i.getComputedStyle(e);
    n.style.fontFamily = r.fontFamily, n.style.fontSize = r.fontSize, n.style.lineHeight = r.lineHeight, n.style.letterSpacing = r.letterSpacing, n.style.color = r.color;
}
function oD0(t) {
    const e = t.ownerDocument;
    for (const n of t.querySelectorAll("p"))_Jt(n, e) && (n.style.margin = "0", n.previousElementSibling && (n.style.marginTop = "0.5em"));
    return t;
}
function aD0(t) {
    const e = t.ownerDocument.defaultView, n = t.cloneNode(!0), i = e?.HTMLTableElement;
    if (!i || !(n instanceof i)) throw new Error("Expected a cloned table element");
    const r = t.querySelectorAll("a"), s = n.querySelectorAll("a");
    for(let a = 0; a < r.length; a++){
        const l = s.item(a);
        l && Vtc.set(l, r.item(a));
    }
    n.removeAttribute("contenteditable"), n.querySelectorAll("[contenteditable]").forEach((a)=>{
        a.removeAttribute("contenteditable");
    }), n.querySelectorAll(".column-resize-handle").forEach((a)=>{
        a.remove();
    }), n.querySelectorAll("colgroup").forEach((a)=>{
        a.remove();
    }), n.style.width = "100%", n.style.maxWidth = "100%", n.style.minWidth = "0", n.style.tableLayout = "fixed", n.style.margin = "0", n.style.boxSizing = "border-box", n.style.contentVisibility = "visible", n.style.removeProperty("--markdown-table-prose-cell-inline-size");
    const o = n.querySelectorAll("th, td");
    for (const a of o)a.style.width = "", a.style.minWidth = "", a.style.maxWidth = "", a.tagName === "TH" && (a.style.whiteSpace = "normal", a.style.overflowWrap = "break-word");
    return n;
}
function lD0(t) {
    const { readingTable: e, sourceTable: n, target: i } = t;
    if (!_Jt(i, e.ownerDocument)) return;
    const r = i.closest("a");
    if (!r || !e.contains(r)) return;
    const s = Vtc.get(r);
    if (!(!s || !s.isConnected || !n.contains(s) || s.href !== r.href)) return s;
}
function cD0(t) {
    return t.type === "click" && t.button === 0 && !t.altKey && !t.ctrlKey && !t.metaKey && !t.shiftKey;
}
function uD0(t) {
    const { source: e, event: n } = t, i = e.ownerDocument.defaultView;
    return !e.isConnected || !i ? !1 : cD0(n) ? (e.click(), !0) : e.dispatchEvent(new i.MouseEvent(n.type, {
        altKey: n.altKey,
        bubbles: !0,
        button: n.button,
        buttons: n.buttons,
        cancelable: !0,
        clientX: n.clientX,
        clientY: n.clientY,
        composed: n.composed,
        ctrlKey: n.ctrlKey,
        detail: n.detail,
        metaKey: n.metaKey,
        screenX: n.screenX,
        screenY: n.screenY,
        shiftKey: n.shiftKey,
        view: i
    }));
}
import { c as yPv } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useLayoutEffect as dD0, useRef as hD0, useState as pD0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as XRt, jsxs as SPv } from "./react-runtime/react/esm-jsx-runtime-production.js";
function mD0(t) {
    const e = yPv(4), { table: n } = t, i = hD0(null);
    let r, s;
    e[0] !== n ? (r = ()=>{
        const a = i.current;
        if (!a) return;
        const l = rD0(n, rCp), c = l.querySelector("table");
        if (a.replaceChildren(l), !c) return ()=>a.replaceChildren();
        const u = (d)=>{
            if (!_Jt(d.target, a.ownerDocument)) return;
            const h = d.target.closest("a");
            if (!h || !c.contains(h)) return;
            d.preventDefault(), d.stopPropagation();
            const p = lD0({
                readingTable: c,
                sourceTable: n,
                target: d.target
            });
            p && uD0({
                source: p,
                event: d
            });
        };
        return a.addEventListener("click", u), a.addEventListener("auxclick", u), ()=>{
            a.removeEventListener("click", u), a.removeEventListener("auxclick", u), a.replaceChildren();
        };
    }, s = [
        n
    ], e[0] = n, e[1] = r, e[2] = s) : (r = e[1], s = e[2]), dD0(r, s);
    let o;
    return e[3] === Symbol.for("react.memo_cache_sentinel") ? (o = XRt("div", {
        ref: i,
        className: "glass-2lwn1j glass-w2csxc glass-1odjw0f glass-1buc1yo glass-1qg3m7i glass-ab0n8b glass-v0g687"
    }), e[3] = o) : o = e[3], o;
}
function gD0(t) {
    const e = yPv(17), { table: n } = t, [i] = pD0(fD0), { close: r } = Zit();
    let s;
    e[0] !== r ? (s = (g)=>{
        g.ctrlKey || g.target !== g.currentTarget || r();
    }, e[0] = r, e[1] = s) : s = e[1];
    const o = s;
    let a;
    e[2] === Symbol.for("react.memo_cache_sentinel") ? (a = XRt(AM.Backdrop, {}), e[2] = a) : a = e[2];
    let l;
    e[3] !== n ? (l = XRt(mD0, {
        table: n
    }), e[3] = n, e[4] = l) : l = e[4];
    let c;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (c = XRt(ao, {
        title: "Close"
    }), e[5] = c) : c = e[5];
    let u;
    e[6] !== r ? (u = XRt(xs, {
        content: c,
        placement: "bottom",
        children: XRt(ho, {
            "aria-label": "Close",
            icon: "x",
            onClick: r,
            rootStyle: kPv.close
        })
    }), e[6] = r, e[7] = u) : u = e[7];
    let d;
    e[8] !== l || e[9] !== u ? (d = SPv("div", {
        "data-component": "glass-markdown-table-expand",
        className: "glass-1n2onr6 glass-78zum5 glass-dt5ytf glass-h8yej3 glass-t7dq6l glass-193iq5w glass-mz0i5r glass-euugli glass-2lwn1j glass-6ikm8r glass-10wlt62 glass-1pkpdue glass-1ys0zz1 glass-1wd3ewq",
        children: [
            l,
            u
        ]
    }), e[8] = l, e[9] = u, e[10] = d) : d = e[10];
    let h;
    e[11] !== o || e[12] !== d ? (h = XRt("div", {
        onClick: o,
        className: "glass-lvsv26 glass-h8yej3 glass-5yr21d glass-78zum5 glass-6s0dn4 glass-l56j7k glass-euugli glass-2lwn1j",
        children: d
    }), e[11] = o, e[12] = d, e[13] = h) : h = e[13];
    let p;
    return e[14] !== i || e[15] !== h ? (p = SPv(AM.Portal, {
        children: [
            a,
            XRt(AM.Popup, {
                "aria-label": "Expanded table",
                aspectRatio: i,
                closeOnBackdropClick: !0,
                fullscreenMaxWidth: null,
                fullscreenViewportPadding: Ztc,
                children: h
            })
        ]
    }), e[14] = i, e[15] = h, e[16] = p) : p = e[16], p;
}
function fD0() {
    return zM0({
        width: globalThis.window.innerWidth,
        height: globalThis.window.innerHeight
    });
}
import { c as wPv } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as _D0, useLayoutEffect as CPv, useRef as TPv, useState as EPv } from "./react-runtime/react/esm-index-production.js";
import { createPortal as bD0 } from "./react-runtime/react-dom/esm-index-production.js";
import { jsx as bJt, jsxs as yD0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
function SD0(t) {
    const e = wPv(9), { mount: n, children: i } = t;
    let r;
    e[0] !== n.ownerDocument ? (r = ()=>{
        const c = n.ownerDocument.createElement("div");
        return Object.assign(c.style, {
            position: "absolute",
            inset: "0",
            pointerEvents: "none",
            userSelect: "none"
        }), c;
    }, e[0] = n.ownerDocument, e[1] = r) : r = e[1];
    const [s] = EPv(r);
    let o, a;
    e[2] !== s || e[3] !== n ? (o = ()=>(n.appendChild(s), ()=>s.remove()), a = [
        s,
        n
    ], e[2] = s, e[3] = n, e[4] = o, e[5] = a) : (o = e[4], a = e[5]), CPv(o, a);
    let l;
    return e[6] !== i || e[7] !== s ? (l = bD0(i, s), e[6] = i, e[7] = s, e[8] = l) : l = e[8], l;
}
function kD0(t) {
    const e = wPv(47), { wrapperRef: n, table: i, placement: r, position: s, clip: o, onPointerLeave: a, onExpand: l } = t, c = et(db), { openFromElement: u } = Zit(), [d, h] = EPv(!1), p = TPv(void 0), g = TPv(null);
    let f, _;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (f = ()=>()=>clearTimeout(p.current), _ = [], e[0] = f, e[1] = _) : (f = e[0], _ = e[1]), _D0(f, _);
    let b, y;
    e[2] !== o ? (b = ()=>{
        const re = g.current;
        if (!re || !o) return;
        const { scroller: ie, start: oe } = o, se = ()=>{
            const le = ie.scrollTop - oe;
            re.style.clipPath = le > 0 ? `inset(${le}px 0 0 0)` : "";
        };
        return se(), ie.addEventListener("scroll", se, {
            passive: !0
        }), ()=>{
            ie.removeEventListener("scroll", se), re.style.clipPath = "";
        };
    }, y = [
        o
    ], e[2] = o, e[3] = b, e[4] = y) : (b = e[3], y = e[4]), CPv(b, y);
    let S;
    e[5] !== c || e[6] !== i ? (S = async ()=>{
        const re = qca(i), ie = i.ownerDocument.defaultView;
        !re || !ie || (await zca({
            targetWindow: ie,
            content: re,
            writeText: (oe)=>c.writeText(oe)
        }), clearTimeout(p.current), h(!0), p.current = setTimeout(()=>h(!1), IPv));
    }, e[5] = c, e[6] = i, e[7] = S) : S = e[7];
    const k = S, C = r === "inside", T = C ? "bottom" : "right";
    let I;
    e[8] === Symbol.for("react.memo_cache_sentinel") ? (I = {
        0: {},
        1: {
            className: "glass-f1vpex glass-1043rbw glass-ncjf9j"
        }
    }, e[8] = I) : I = e[8];
    const { className: A } = I[!!C << 0], P = C ? void 0 : `0 0 0 ${Ytc}px`;
    let M;
    e[9] !== s || e[10] !== P ? (M = {
        position: "absolute",
        ...s,
        padding: P,
        pointerEvents: "auto"
    }, e[9] = s, e[10] = P, e[11] = M) : M = e[11];
    const O = C ? "row" : "column", N = C ? QPs : void 0;
    let U;
    e[12] !== N || e[13] !== O ? (U = {
        display: "flex",
        flexDirection: O,
        gap: QPs,
        padding: N
    }, e[12] = N, e[13] = O, e[14] = U) : U = e[14];
    let j;
    e[15] === Symbol.for("react.memo_cache_sentinel") ? (j = bJt(ao, {
        title: "Expand table"
    }), e[15] = j) : j = e[15];
    let $;
    e[16] !== l || e[17] !== u || e[18] !== i ? ($ = bJt(ho, {
        "aria-label": "Expand table",
        "data-component": "glass-markdown-table-expand-button",
        icon: "arrows-expand-simple",
        onClick: ()=>{
            l(), u(i);
        },
        size: "sm",
        variant: "ghost"
    }), e[16] = l, e[17] = u, e[18] = i, e[19] = $) : $ = e[19];
    let H;
    e[20] !== $ || e[21] !== T ? (H = bJt(xs, {
        content: j,
        openDelay: 400,
        placement: T,
        children: $
    }), e[20] = $, e[21] = T, e[22] = H) : H = e[22];
    const G = d ? "Copied" : "Copy table";
    let q;
    e[23] !== G ? (q = bJt(ao, {
        title: G
    }), e[23] = G, e[24] = q) : q = e[24];
    const K = d ? "Copied" : "Copy table";
    let V;
    e[25] !== k ? (V = (re)=>{
        re && k();
    }, e[25] = k, e[26] = V) : V = e[26];
    const Y = d ? "success" : void 0;
    let J;
    e[27] !== d || e[28] !== K || e[29] !== V || e[30] !== Y ? (J = bJt(YRe, {
        "aria-label": K,
        "data-action": "copy",
        icon: "copy",
        onPressedChange: V,
        pressed: d,
        pressedIcon: "check",
        size: "sm",
        tone: Y,
        variant: "ghost"
    }), e[27] = d, e[28] = K, e[29] = V, e[30] = Y, e[31] = J) : J = e[31];
    let Q;
    e[32] !== q || e[33] !== J || e[34] !== T ? (Q = bJt(xs, {
        content: q,
        openDelay: 400,
        placement: T,
        children: J
    }), e[32] = q, e[33] = J, e[34] = T, e[35] = Q) : Q = e[35];
    let te;
    e[36] !== A || e[37] !== U || e[38] !== H || e[39] !== Q ? (te = yD0("div", {
        className: A,
        ref: g,
        style: U,
        children: [
            H,
            Q
        ]
    }), e[36] = A, e[37] = U, e[38] = H, e[39] = Q, e[40] = te) : te = e[40];
    let ee;
    return e[41] !== a || e[42] !== r || e[43] !== te || e[44] !== M || e[45] !== n ? (ee = bJt("div", {
        "data-component": "glass-markdown-table-actions",
        "data-placement": r,
        onPointerLeave: a,
        ref: n,
        style: M,
        children: te
    }), e[41] = a, e[42] = r, e[43] = te, e[44] = M, e[45] = n, e[46] = ee) : ee = e[46], ee;
}
import { c as CD0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as TD0, useRef as tnc, useState as l5n } from "./react-runtime/react/esm-index-production.js";
import { jsx as nnc, jsxs as ED0 } from "./react-runtime/react/esm-jsx-runtime-production.js";
function ID0(t, e) {
    const n = e.defaultView?.Node;
    return !!(n && t instanceof n);
}
function xPv(t, e, n) {
    return !!(e && ID0(t, n) && e.contains(t));
}
function APv(t) {
    const { host: e, table: n, pinnedChromeSelector: i } = t, r = eD0(n, e);
    if (!r) return;
    const { mount: s, scroller: o } = r, a = n.getBoundingClientRect(), l = vPv(n, e)?.getBoundingClientRect(), c = _Pv({
        tableRect: a,
        clipRect: l
    }), u = c.right <= QM0(e, s) + .5 ? "outside" : "inside", d = iD0(s), h = u === "inside" ? {
        top: a.top + JPs - d.top,
        right: d.right - XM0({
            edge: c.left,
            visibleLeft: Math.max(a.left, l?.left ?? a.left),
            titlesFromLast: YM0(n)
        })
    } : {
        top: c.top - d.top,
        left: c.left - d.left,
        height: c.bottom - c.top
    }, p = o && i ? tD0({
        table: n,
        scroller: o,
        pinned: e.querySelectorAll(i)
    }) : 0;
    return {
        table: n,
        mount: s,
        placement: u,
        position: h,
        clip: o && p > 0 ? {
            scroller: o,
            start: nD0({
                scroller: o,
                pinnedInset: p,
                railTop: d.top + h.top
            })
        } : void 0
    };
}
function RPv(t) {
    return "left" in t ? t.left : t.right;
}
function PPv(t) {
    return "height" in t ? t.height : 0;
}
function xD0(t, e) {
    return !t || !e ? t === e : t.table === e.table && t.mount === e.mount && t.placement === e.placement && t.clip?.scroller === e.clip?.scroller && t.clip?.start === e.clip?.start && Math.abs(t.position.top - e.position.top) < 1 && Math.abs(RPv(t.position) - RPv(e.position)) < 1 && Math.abs(PPv(t.position) - PPv(e.position)) < 1;
}
export function MPv(t) {
    const e = CD0(24), { enabled: n, hostElement: i, contentKey: r, pinnedChromeSelector: s } = t, o = tnc(null), a = tnc(void 0), l = tnc(void 0), c = cWe(), [u, d] = l5n(void 0), [h, p] = l5n(void 0), [g, f] = l5n(!1), _ = O_(DPv, g), b = n ? i : null, [y, S] = l5n(b), [k, C] = l5n(r), [T, I] = l5n(_), A = y !== b || k !== r;
    (A || T !== _) && (S(b), C(r), I(_), A && f(!1), d(void 0), p(void 0));
    let M;
    e[0] !== c ? (M = ()=>{
        a.current = void 0, c.dispose(), d(void 0);
    }, e[0] = c, e[1] = M) : M = e[1];
    const O = M;
    let N, U;
    if (e[2] !== n || e[3] !== _ || e[4] !== g || e[5] !== O || e[6] !== i || e[7] !== c || e[8] !== s ? (N = ()=>{
        if (!n || !i || !_ && g) {
            a.current = void 0, c.dispose();
            return;
        }
        const K = i.ownerDocument, V = i.getElementsByTagName("table"), Y = (ce)=>xPv(ce, o.current, K), J = (ce, ae)=>{
            l.current = ce, ce && f(!0), d((de)=>xD0(de, ae) ? de : ae);
        }, Q = (ce)=>{
            J(ce, ce && APv({
                host: i,
                table: ce,
                pinnedChromeSelector: s
            }));
        }, te = (ce)=>{
            const ae = ce && APv({
                host: i,
                table: ce,
                pinnedChromeSelector: s
            });
            ae?.placement === "outside" ? J(ce, ae) : J(void 0, void 0);
        }, ee = (ce, ae)=>{
            if (ce && Y(ce)) return;
            const de = fPv(i, ce);
            if (de) {
                Q(de);
                return;
            }
            te(ZM0({
                host: i,
                target: ce,
                point: ae
            }));
        }, re = ()=>{
            c.request(()=>{
                const ce = a.current;
                if (!ce) {
                    d(void 0);
                    return;
                }
                const ae = K.elementFromPoint(ce.x, ce.y);
                ae && Y(ae) ? Q(l.current) : ee(ae, ce);
            });
        }, ie = (ce)=>{
            const ae = {
                x: ce.clientX,
                y: ce.clientY
            };
            a.current = ae, ee(ce.target, ae);
        }, oe = (ce)=>{
            a.current = {
                x: ce.clientX,
                y: ce.clientY
            };
            const ae = ce.target;
            V.length === 0 || !ae || Y(ae) || fPv(i, ae) || re();
        }, se = (ce)=>{
            const ae = ce.relatedTarget;
            ae && Y(ae) || O();
        }, le = ()=>{
            if (!a.current) {
                c.dispose(), d(void 0);
                return;
            }
            re();
        };
        return i.addEventListener("pointerover", ie), i.addEventListener("pointermove", oe), i.addEventListener("pointerleave", se), i.addEventListener("scroll", le, !0), ()=>{
            a.current = void 0, c.dispose(), i.removeEventListener("pointerover", ie), i.removeEventListener("pointermove", oe), i.removeEventListener("pointerleave", se), i.removeEventListener("scroll", le, !0);
        };
    }, U = [
        n,
        _,
        g,
        O,
        i,
        c,
        s
    ], e[2] = n, e[3] = _, e[4] = g, e[5] = O, e[6] = i, e[7] = c, e[8] = s, e[9] = N, e[10] = U) : (N = e[9], U = e[10]), TD0(N, U), !n || !_) return null;
    let j;
    e[11] !== O ? (j = (K)=>{
        K || (p(void 0), O());
    }, e[11] = O, e[12] = j) : j = e[12];
    const $ = h !== void 0;
    let H;
    e[13] !== O || e[14] !== i || e[15] !== u ? (H = u ? nnc(SD0, {
        mount: u.mount,
        children: nnc(kD0, {
            clip: u.clip,
            placement: u.placement,
            position: u.position,
            onExpand: ()=>p(u.table),
            onPointerLeave: (K)=>{
                const V = K.relatedTarget;
                V && i && xPv(V, i, i.ownerDocument) || O();
            },
            table: u.table,
            wrapperRef: o
        })
    }) : null, e[13] = O, e[14] = i, e[15] = u, e[16] = H) : H = e[16];
    let G;
    e[17] !== h ? (G = h ? nnc(gD0, {
        table: h
    }) : null, e[17] = h, e[18] = G) : G = e[18];
    let q;
    return e[19] !== j || e[20] !== $ || e[21] !== H || e[22] !== G ? (q = ED0(AM.Root, {
        motion: "reduced",
        onOpenChange: j,
        open: $,
        children: [
            H,
            G
        ]
    }), e[19] = j, e[20] = $, e[21] = H, e[22] = G, e[23] = q) : q = e[23], q;
}
import { c as AD0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { jsx as inc } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function RD0(t) {
    const e = AD0(10), { filePath: n, markdown: i } = t, { workspace: r } = fg(), s = $i(r, sYe), o = $i(r, xf);
    let a;
    e[0] !== s || e[1] !== n || e[2] !== o ? (a = (d, h)=>(QRv({
            dialogService: s,
            forceExternal: h.button === 1 || (_r ? h.metaKey : h.ctrlKey),
            href: d,
            openerService: o,
            sourceFilePath: n
        }), !0), e[0] = s, e[1] = n, e[2] = o, e[3] = a) : a = e[3];
    const l = a;
    let c;
    e[4] !== i || e[5] !== l ? (c = inc("div", {
        className: "glass-9f619 glass-h8yej3 glass-wnkcuf glass-8x9d4c glass-ack27t glass-1avjwpx glass-1dbk7ps glass-v0g687 glass-1qg3m7i",
        children: inc(dT, {
            allowMath: !0,
            gfm: !0,
            onLinkClick: l,
            children: i
        })
    }), e[4] = i, e[5] = l, e[6] = c) : c = e[6];
    let u;
    return e[7] !== n || e[8] !== c ? (u = inc("div", {
        "data-component": "file-tab-tex-preview",
        "data-file-path": n,
        className: "glass-78zum5 glass-dt5ytf glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-2lwn1j glass-euugli glass-h8yej3 glass-6ikm8r glass-1odjw0f",
        children: c
    }), e[7] = n, e[8] = c, e[9] = u) : u = e[9], u;
}
import { c as MD0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useState as LPv } from "./react-runtime/react/esm-index-production.js";
import { jsx as rnc } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function OPv(t) {
    const e = MD0(13), { videoSrc: n, compactInset: i, isActive: r } = t, s = i === void 0 ? !1 : i, o = r === void 0 ? !0 : r, [a, l] = LPv(!1), [c, u] = LPv(n);
    n !== c && (u(n), l(!1));
    let d;
    e[0] !== n ? (d = (b)=>{
        const y = b.currentTarget, S = y.error;
        !S || S.code === S.MEDIA_ERR_ABORTED || (y.currentSrc || y.src) !== n || l(!0);
    }, e[0] = n, e[1] = d) : d = e[1];
    const h = d;
    if (a) {
        let b;
        e[2] === Symbol.for("react.memo_cache_sentinel") ? (b = {
            0: {
                className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-6s0dn4 glass-l56j7k glass-euugli glass-2lwn1j glass-dx8idz glass-9f619 glass-1n2onr6 glass-1dordt6 glass-1wm8ruf"
            },
            1: {
                className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-6s0dn4 glass-l56j7k glass-euugli glass-2lwn1j glass-9f619 glass-1n2onr6 glass-15wvsb0 glass-1dordt6 glass-1wm8ruf"
            }
        }, e[2] = b) : b = e[2];
        const y = b[!!s << 0];
        let S;
        return e[3] !== y ? (S = rnc("div", {
            "data-component": "glass-video-preview",
            ...y,
            children: "Binary file not shown"
        }), e[3] = y, e[4] = S) : S = e[4], S;
    }
    let p;
    e[5] === Symbol.for("react.memo_cache_sentinel") ? (p = {
        0: {
            className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-6s0dn4 glass-l56j7k glass-euugli glass-2lwn1j glass-dx8idz glass-9f619 glass-1n2onr6"
        },
        1: {
            className: "glass-78zum5 glass-1iyjqo2 glass-s83m0k glass-1t1x2f9 glass-dt5ytf glass-6s0dn4 glass-l56j7k glass-euugli glass-2lwn1j glass-9f619 glass-1n2onr6 glass-15wvsb0"
        }
    }, e[5] = p) : p = e[5];
    const g = p[!!s << 0];
    let f;
    e[6] !== h || e[7] !== o || e[8] !== n ? (f = rnc(g0a, {
        isActive: o,
        onError: h,
        videoUrl: n
    }), e[6] = h, e[7] = o, e[8] = n, e[9] = f) : f = e[9];
    let _;
    return e[10] !== g || e[11] !== f ? (_ = rnc("div", {
        "data-component": "glass-video-preview",
        ...g,
        children: f
    }), e[10] = g, e[11] = f, e[12] = _) : _ = e[12], _;
}
import { c as DD0 } from "./react-runtime/react/esm-compiler-runtime-production.js";
import { useEffect as ND0, useImperativeHandle as LD0, useRef as OD0, useState as FD0 } from "./react-runtime/react/esm-index-production.js";
import { jsx as snc } from "./react-runtime/react/esm-jsx-runtime-production.js";
export function BD0(t) {
    const e = DD0(21), { onGoToLine: n, onClose: i, ref: r } = t, s = et(GT), { isActive: o } = WW(), a = Jh(z0f), l = OD0(null), [c, u] = FD0("");
    let d;
    e[0] === Symbol.for("react.memo_cache_sentinel") ? (d = ()=>{
        l.current?.focus(), l.current?.select();
    }, e[0] = d) : d = e[0];
    const h = d;
    let p, g;
    e[1] === Symbol.for("react.memo_cache_sentinel") ? (p = ()=>({
            focusAndSelect: h
        }), g = [
        h
    ], e[1] = p, e[2] = g) : (p = e[1], g = e[2]), LD0(r, p, g);
    let f;
    e[3] === Symbol.for("react.memo_cache_sentinel") ? (f = {
        tier: "frame",
        select: "all"
    }, e[3] = f) : f = e[3], Lxs(l, f);
    let _, b;
    e[4] !== s ? (_ = ()=>{
        const M = uNl.key;
        return s.setContext(M, !0), ()=>{
            s.setContext(M, !1);
        };
    }, b = [
        s
    ], e[4] = s, e[5] = _, e[6] = b) : (_ = e[5], b = e[6]), ND0(_, b);
    let y;
    e[7] !== o ? (y = {
        enabled: o
    }, e[7] = o, e[8] = y) : y = e[8], mu("fileGoToLineCloseRequested", i, y);
    let S;
    e[9] !== i || e[10] !== n || e[11] !== c ? (S = ()=>{
        const M = parseInt(c.trim(), 10);
        Number.isNaN(M) || n(M) && i();
    }, e[9] = i, e[10] = n, e[11] = c, e[12] = S) : S = e[12];
    const k = S;
    let C;
    e[13] === Symbol.for("react.memo_cache_sentinel") ? (C = (M)=>{
        const O = M.replace(/[^\d]/g, "");
        u(O);
    }, e[13] = C) : C = e[13];
    const T = C;
    let I;
    e[14] !== k ? (I = (M)=>{
        M.key === "Enter" && (M.preventDefault(), k());
    }, e[14] = k, e[15] = I) : I = e[15];
    const A = I;
    let P;
    return e[16] !== a || e[17] !== A || e[18] !== i || e[19] !== c ? (P = snc("div", {
        "data-component": "file-tab-go-to-line-bar",
        className: "glass-10l6tqk glass-13vifvy glass-3m8u43 glass-1x85hfe glass-9f619 glass-ajt8y1 glass-13ly8rp glass-1yxiud8 glass-18d9i69 glass-yab65l glass-47corl",
        children: snc("div", {
            className: "glass-67bb7w",
            children: snc(k$t, {
                inputRef: l,
                query: c,
                onQueryChange: T,
                onKeyDown: A,
                onPrevious: jD0,
                onNext: UD0,
                onClose: i,
                navigationDisabled: !0,
                showNavigation: !1,
                closeShortcut: a,
                placeholder: "Line number",
                inputAriaLabel: "Line number"
            })
        })
    }), e[16] = a, e[17] = A, e[18] = i, e[19] = c, e[20] = P) : P = e[20], P;
}
function UD0() {}
function jD0() {}

export var XRv = {};
Object.defineProperty(XRv, "isGlassTexPreviewLinkTrusted", {
    enumerable: true,
    get: ()=>ZRv
});
Object.defineProperty(XRv, "openGlassTexPreviewLink", {
    enumerable: true,
    get: ()=>QRv
});
Object.defineProperty(XRv, "texSourceToPreviewMarkdown", {
    enumerable: true,
    get: ()=>oP0
});
