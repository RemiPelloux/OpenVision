import { Jer, Yer, _ki } from "./IconButton.types.ts";
import { V$e, fTt } from "./button-variant-membership.ts";
import { Ger, l$t } from "./control-icon-size.ts";
import { Uer, c$t, kIe, s$t } from "./control-tone.stylex.ts";
import { Z$e, mTt, uTt } from "./control-tone.ts";
import { I4, hTt } from "./filled-button.stylex.ts";
import { Ome, wki } from "./icon-button.stylex.ts";
import { H$e, aJn, lTt } from "./icon.tsx";
import { K$e, bTt, gTt, sP, wme } from "./non-filled-button.stylex.ts";
import { i } from "./plugin-brand-icon.js";
import { Ho, wn } from "./stylex.mjs";
function p$t(r) {
    if (r !== void 0 && H$e(r)) return wn(etr.root, lTt(r));
    const e = {
        className: "ui-3nfvp2 ui-6s0dn4 ui-l56j7k ui-1oai4fc ui-higkf7 ui-1tachi3 ui-o5v014"
    };
    return r === void 0 ? e : {
        ...e,
        style: {
            ...e.style,
            "--icon-size": typeof r == "number" ? `${r}px` : r
        }
    };
}
function m$t(r, e, a, s, l) {
    if (s || l) return;
    const u = `${r}-${typeof e == "string" ? e : "custom"}-${a}`;
    if (g$t.has(u)) return;
    g$t.add(u);
    const p = r === "IconButton" ? "button" : "toggle";
    console.warn(`[${r}] Icon-only ${p} with icon="${typeof e == "string" ? e : "custom"}" is missing an accessible name. Add aria-label or aria-labelledby to ensure screen reader users can understand the ${p}'s purpose.`);
}
function Qer({ variant: r, rounded: e, frame: a, size: s, tone: l, indicatorDot: u }) {
    return {
        "data-variant": r,
        "data-rounded": e || void 0,
        "data-frame": a,
        "data-size": s,
        "data-tone": l,
        "data-fg-channel": "icon",
        "data-indicator-dot": u || void 0
    };
}
function f$t({ enforcedRootStyle: r, frame: e, indicatorDot: a, rootStyle: s, rounded: l, size: u, tone: p, variant: m }) {
    const b = V$e(m, p);
    return {
        dataAttrs: Qer({
            frame: e,
            indicatorDot: a,
            rounded: l,
            size: u,
            tone: p,
            variant: m
        }),
        rootAttrs: wn(Ome.root, I4.appearance, b.applyControlTone && kIe.foreground, b.applyControlTone && p !== void 0 && s$t[p], m === "ghost" && (p === "secondary" || p === "tertiary") && Uer[p], b.applyFilledColors && I4.colors, b.applyNonFilledBackground && sP.background, (m === "outline" || m === "ghost") && wme(p) && gTt[p], m === "outline" && sP.outline, m === "outline" && wme(p) && bTt[p], m === "media" && I4.media, I4.press, u !== "xs" && Ome.size[u], l && Ome.rounded, e === "content" && u !== "xs" && Ome.contentFrame[u], r, s)
    };
}
function h$t({ size: r, iconSize: e, disabled: a, variant: s, tone: l, enforced: u }) {
    const p = r ?? u?.iconButtonSize ?? Yer, m = s ?? u?.iconButtonVariant ?? Jer, b = p === "xs" ? void 0 : l$t[p];
    return {
        size: p,
        innerIconSize: e ?? u?.iconButtonIconSize ?? b,
        disabled: a ?? u?.disabled,
        variant: m,
        tone: uTt(l ?? u?.iconButtonTone ?? (m === "primary" ? mTt : void 0))
    };
}
var g$t, etr;
export { Qer, etr, f$t, g$t, h$t, m$t, p$t };
var __wakaru_ttr_initialized = false;
export function ttr() {
if (__wakaru_ttr_initialized) return;
__wakaru_ttr_initialized = true;
"use strict";
Ho(), fTt(), c$t(), hTt(), wki(), K$e(), Ger(), Z$e(), aJn(), _ki(), g$t = new Set, etr = {
    root: {
        k1xSpc: "ui-3nfvp2",
        kGNEyG: "ui-6s0dn4",
        kjj79g: "ui-l56j7k",
        kzqmXN: "ui-1oai4fc",
        kZKoxP: "ui-higkf7",
        kGuDYH: "ui-1tachi3",
        kLWn49: "ui-o5v014",
        $$css: !0
    }
}, i(p$t, "iconButtonCustomIconAttrs"), i(m$t, "warnMissingIconButtonLabel"), i(Qer, "iconButtonChromeDataAttrs"), i(f$t, "resolveIconButtonSurface"), i(h$t, "resolveIconButtonProps");

}
