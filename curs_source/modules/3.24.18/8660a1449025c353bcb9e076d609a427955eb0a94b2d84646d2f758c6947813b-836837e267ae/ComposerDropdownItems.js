import { W6k } from "./ComposerDropdownMaxTooltip.js";
import { tCl } from "./ToggleSwitch.js";
import { Ccs, Gr, H6k, z2i } from "./Ycg.js";
import { gs, yt } from "./codicons.js";
import { Bu, Iw } from "./hoverWidget.js";
import { AY, Coe } from "./markdownRenderer_2.js";
import { vo } from "./solidContext.js";
import { Gn, ta } from "./themables.js";
import { E } from "./tslib.es6.js";
import { oye, pme } from "./useComposerHoverTooltip.js";
import { Ppl } from "./useMenuHover.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { Cn, Ee, pi, vt } from "./ze.js";
var qJg, zJg, VJg, KJg, YJg, ggs, XJg, ZJg;
export { KJg, VJg, XJg, YJg, ZJg, ggs, qJg, zJg };
var __wakaru_q6k_initialized = false;
export function q6k() {
if (__wakaru_q6k_initialized) return;
__wakaru_q6k_initialized = true;
"use strict";
E(), at(), at(), pi(), Iw(), gs(), ta(), Coe(), vo(), Ppl(), tCl(), oye(), W6k(), qJg = wt('<span class="text-[12px] py-1">Auto'), zJg = wt('<span class="text-[12px] py-1">MAX Mode'), VJg = (t, e, n, i, r)=>{
    const s = Gr(), { showMenuHover: o, hideMenuHover: a } = Ccs({
        delay: 20,
        position: Bu.LEFT,
        compact: !0
    }), { showHover: l, hideHover: c } = pme({
        position: Bu.LEFT,
        delay: 200
    }), u = vt(()=>t() ? i : !1), d = vt(()=>n.some((g)=>g !== "default")), h = vt(()=>t() && !d()), p = "No additional models available. Add a non-thinking model in Settings.";
    return {
        id: "use-default-model",
        title: "default",
        customTitle: (()=>{
            var g = qJg();
            return g.style.setProperty("color", "var(--composer-unified-context-menu-stateful-color)"), g;
        })(),
        _serializableTitle: ()=>"Auto",
        titleRightIcon: ()=>h() ? null : Ee(z2i, {
                isSelected: t
            }),
        class: "cursor-pointer",
        onFocus: (g)=>{
            if (u() || h()) return;
            const f = g.currentTarget.closest(".composer-unified-context-menu-item");
            o(f || g.currentTarget, "Cursor helps you select the best premium model, based on performance and speed.");
        },
        onBlur: u() || h() ? void 0 : a,
        onMouseEnter: (g)=>{
            h() && l(g, p);
        },
        onMouseLeave: ()=>{
            h() && c();
        },
        onClick: ()=>{
            if (!t()) {
                e("default");
                return;
            }
            if (h()) return;
            const g = r || "composer", f = s.modelConfigService.getPreviousNonDefaultModel(g);
            let _;
            f && n.includes(f) ? _ = f : _ = n.find((b)=>b !== "default"), _ && e(_);
        },
        description: u() ? "Balanced quality and speed, recommended for most tasks" : void 0,
        doNotShowSelected: u() ? !0 : void 0
    };
}, KJg = (t, e)=>{
    const n = document.querySelectorAll(".composer-unified-context-menu-item");
    let i = 1 / 0, r = null;
    return n.forEach((s)=>{
        const o = s.getBoundingClientRect(), a = o.left + o.width / 2, l = o.top + o.height / 2, c = Math.sqrt(Math.pow(t - a, 2) + Math.pow(e - l, 2));
        c < i && (i = c, r = s);
    }), r;
}, YJg = (t, e, n)=>(i)=>{
        let r = i.target;
        for(; r && !r.classList.contains("composer-unified-context-menu-item");)r = r.parentElement;
        if (!r) {
            const o = KJg(i.clientX, i.clientY);
            o && (r = o);
        }
        const s = r || i.currentTarget;
        e(s, t);
    }, ggs = (t, e, n)=>{
    const i = XJg(e);
    return YJg(i, t, n);
}, XJg = (t)=>{
    const e = Gr(), n = document.createElement("div"), i = t.markdownContent;
    if (i !== void 0) {
        const u = {
            value: i,
            supportThemeIcons: !0,
            supportHtml: !0,
            isTrusted: !0
        }, d = e.openerService, p = e.instantiationService.createInstance(AY, {}).render(u);
        p.dispose();
        const g = (f)=>{
            f.tagName.toLowerCase() === "a" && f.addEventListener("mousedown", (_)=>{
                _.preventDefault(), _.stopPropagation();
                const b = f.getAttribute("data-href");
                b && d.open(b, {
                    openExternal: !0
                });
            });
            for (const _ of f.children)g(_);
        };
        return g(p.element), n.appendChild(p.element), n;
    }
    const r = document.createElement("div"), s = document.createElement("div"), o = document.createElement("div"), a = t.primaryText !== "", l = t.secondaryText !== "", c = t.secondaryWarningText;
    if (a && (r.textContent = t.primaryText), l && !a ? (r.textContent = t.secondaryText ?? null, c && (r.style.color = "var(--vscode-editorWarning-foreground)")) : l && (s.textContent = t.secondaryText ?? null, s.style.fontSize = "10px", s.style.whiteSpace = "pre-line", c ? (s.style.color = "var(--vscode-editorWarning-foreground)", s.style.lineHeight = "1.2") : s.style.opacity = "0.5"), t.tertiaryText) {
        const u = t.tertiaryTextUrl;
        if (u) {
            const d = document.createElement("div");
            d.className = "max-tooltip-link", d.style.cursor = "pointer", d.style.display = "inline-flex", d.style.alignItems = "center", d.textContent = t.tertiaryText ?? "", d.onmousedown = (p)=>{
                p.preventDefault(), p.stopPropagation(), e.openerService.open(u, {
                    openExternal: !0
                });
            };
            const h = document.createElement("span");
            h.className = Gn.asClassName(yt.arrowUpRight), d.appendChild(h), o.appendChild(d);
        } else o.textContent = t.tertiaryText ?? "", o.style.fontSize = "10px", o.style.whiteSpace = "pre-line", o.style.opacity = "0.5";
    }
    return n.appendChild(r), n.appendChild(s), n.appendChild(o), n;
}, ZJg = (t)=>{
    const e = vt(()=>t.isMaxEnabled), n = vt(()=>t.isDisabled || t.enforceMaxMode && e()), { showMenuHover: i, hideMenuHover: r } = Ccs({
        delay: 20,
        position: Bu.LEFT,
        compact: !0
    });
    let s;
    return Cn(()=>{
        s = H6k(t.openerService);
    }), {
        id: "max-models",
        title: "MAX Mode",
        customTitle: (()=>{
            var o = zJg();
            return o.style.setProperty("color", "var(--composer-unified-context-menu-stateful-color)"), o;
        })(),
        _serializableTitle: ()=>"MAX Mode",
        titleRightIcon: ()=>Ee(z2i, {
                isSelected: e,
                useGradient: !0
            }),
        class: "cursor-pointer",
        isDisabled: n(),
        onClick: (o)=>{
            if (n()) return;
            const a = t.reactiveStorageService?.applicationUserPersistentStorage.oneTimeSettings.hasAcceptedMaxModeConfirmation;
            if (!e() && !a && t.setShowConfirmation) {
                o?.stopPropagation(), o?.preventDefault(), t.setShowConfirmation(!0);
                return;
            }
            t.onMaxChange(!e());
        },
        onFocus: (o)=>{
            const a = o.currentTarget.closest(".composer-unified-context-menu-item");
            i(a || o.currentTarget, s);
        },
        onBlur: r
    };
};

}
