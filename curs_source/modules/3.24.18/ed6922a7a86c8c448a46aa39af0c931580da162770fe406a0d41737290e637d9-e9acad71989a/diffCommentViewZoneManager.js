import { He, Se } from "./HVr.js";
import { q__ } from "./bugbotViewZone.css";
import { X9 } from "./date.js";
import { $Hh } from "./discussionUtils.js";
import { g5, u2 } from "./markdownRenderer_2.js";
import { o5 } from "./qIc.js";
import { tNo } from "./reviewChangesEditorLifetime.js";
import { x } from "./tslib.es6.js";
import { lo, on } from "./window.js";
function eNo(e) {
    return e._store?.isDisposed === !0;
}
function z__(e) {
    const t = [
        e.id,
        e.title ?? "",
        e.description ?? "",
        e.source ?? ""
    ], n = e.metadata;
    if (n) {
        n.avatarUrl && t.push(String(n.avatarUrl)), n.createdAt && t.push(String(n.createdAt));
        const i = n.threadComments;
        if (i) {
            t.push(`threadCount:${i.length}`);
            for (const r of i)t.push(r.id ?? ""), t.push(r.authorLogin ?? ""), t.push(r.avatarUrl ?? ""), t.push(r.body ?? ""), t.push(r.createdAt ?? "");
        }
    }
    if (e.actions) for (const i of e.actions)t.push(`action:${i.id}:${i.label}:${i.pressed ?? !1}`);
    return t.join("|");
}
var HHh;
export { HHh, eNo, z__ };
var __wakaru_Y___initialized = false;
export function Y__() {
if (__wakaru_Y___initialized) return;
__wakaru_Y___initialized = true;
"use strict";
x(), lo(), X9(), Se(), g5(), q__(), tNo(), $Hh(), HHh = class {
    constructor(e){
        this._disposables = new He, this.zonesByCommentId = new Map, this.containersByCommentId = new Map, this.editor = e.editor, this.widget = e.widget, this.comments = e.comments, this.githubPRService = e.githubPRService, this.onCommentPosted = e.onCommentPosted, this.instantiationService = e.instantiationService;
        const t = new He;
        if (this.comments.recomputeInitiallyAndOnChange(t, ()=>{
            this.applyComments();
        }), this._disposables.add(t), !eNo(this.editor)) {
            const n = this.editor.onDidChangeConfiguration(()=>{
                this.layoutAllZones(), this.updateZoneWidths();
            });
            this._disposables.add(n);
            const i = this.editor.onDidLayoutChange?.(()=>{
                this.updateZoneWidths(), this.updateZoneLeftOffsets();
            });
            i && this._disposables.add(i);
            const r = this.editor.onDidScrollChange((s)=>{
                s.scrollLeftChanged && this.updateZoneLeftOffsets();
            });
            this._disposables.add(r);
        }
        this.applyComments();
    }
    renderMarkdownContent(e, t, n) {
        if (t) {
            if (this.instantiationService) try {
                const r = this.instantiationService.createInstance(u2, {}).render({
                    value: t,
                    supportThemeIcons: !0,
                    supportHtml: !0,
                    isTrusted: !1
                });
                e.appendChild(r.element), n && n.push(r);
                return;
            } catch (i) {
                console.warn("[DiffCommentViewZoneManager] Failed to render markdown, falling back to text:", i);
            }
            if (t.includes("`")) {
                const i = t.split("`");
                for(let r = 0; r < i.length; r++)if (r % 2 === 1) {
                    const s = document.createElement("code");
                    s.textContent = i[r], e.appendChild(s);
                } else i[r].length > 0 && e.appendChild(document.createTextNode(i[r]));
            } else e.textContent = t;
        }
    }
    applyComments() {
        const e = this.comments.get(), t = this.editor.getModel();
        if (!t) {
            this.clearAllZones();
            return;
        }
        const n = t.getLineCount(), i = new Map;
        for (const s of e){
            const o = s.locations[0];
            if (!o) continue;
            const a = o.endLine > 0 ? o.endLine : o.startLine > 0 ? o.startLine : 1, c = Math.min(Math.max(a, 1), n);
            i.set(s.id, {
                comment: s,
                anchorLine: c
            });
        }
        const r = [];
        for (const [s, o] of this.zonesByCommentId.entries())if (!i.has(s)) {
            r.push(s), o.resizeObserver?.disconnect();
            for (const a of o.disposables)a.dispose();
            this.editor.changeViewZones((a)=>{
                a.removeZone(o.zoneId);
            });
        }
        for (const s of r)this.zonesByCommentId.delete(s), this.containersByCommentId.delete(s);
        for (const [s, o] of i.entries()){
            const a = this.zonesByCommentId.get(s), c = z__(o.comment);
            if (a && a.contentHash === c) continue;
            if (a) {
                a.resizeObserver?.disconnect();
                for (const u of a.disposables)u.dispose();
                this.editor.changeViewZones((u)=>{
                    u.removeZone(a.zoneId);
                }), this.zonesByCommentId.delete(s), this.containersByCommentId.delete(s);
            }
            const l = this.addZoneForComment(s, o.comment, o.anchorLine);
            l && (l.contentHash = c, this.zonesByCommentId.set(s, l));
        }
    }
    addZoneForComment(e, t, n) {
        let i, r;
        const s = [];
        if (this.widget) {
            const l = this.editor.getModel()?.getLineCount() ?? n;
            this.widget.ensureLineIsVisible(n, !1), n < l && this.widget.ensureLineIsVisible(n + 1, !1);
        }
        if (this.editor.changeViewZones((c)=>{
            const l = this.editor.getOption(68), { root: u, inner: h } = this.createZoneDomNode(t, s);
            this.containersByCommentId.set(e, h);
            const g = {
                afterLineNumber: n,
                heightInPx: 100,
                domNode: u,
                suppressMouseDown: !1
            };
            r = g, i = c.addZone(g);
            const f = this.getEffectiveContentWidth();
            u.style.cssText = `
				display: block !important;
				position: absolute !important;
				z-index: 10;
				width: ${f}px;
				box-sizing: border-box;
				padding-top: ${Math.round(.5 * l)}px;
				padding-bottom: ${Math.round(.5 * l)}px;
				overflow: visible !important;
			`;
            const v = this.getEffectiveContentWidth(), b = Math.max(300, v - 8);
            if (h.style.maxWidth = `${b}px`, h.style.minWidth = "300px", h.style.height = "auto", h.style.paddingTop = `${Math.round(.5 * l)}px`, h.style.paddingBottom = `${Math.round(.5 * l)}px`, !(h.querySelector(".bugbot-thread-container") !== null)) {
                const E = h.querySelector(".bugbot-comment-header");
                E && (E.style.marginBottom = `${Math.round(.44 * l)}px`);
                const A = h.querySelector(".bugbot-comment-content");
                A && (A.style.maxHeight = `${Math.round(4 * l)}px`, A.style.height = `${Math.round(4 * l)}px`, A.style.marginBottom = `${Math.round(.77 * l)}px`, A.style.overflowY = "auto", A.style.overflowX = "hidden");
            }
            const T = h.querySelector(".bugbot-comment-footer");
            T && (T.style.alignItems = "center"), this.updateZoneLeftOffsets();
        }), !i || !r) return;
        const o = this.containersByCommentId.get(e);
        let a = null;
        if (o) {
            const c = i, l = r;
            let u = 0;
            a = new ResizeObserver(()=>{
                const h = this.editor.getOption(68), p = Math.round(h), g = o.scrollHeight + p;
                Math.abs(g - u) > 2 && (u = g, l.heightInPx = g, this.editor.changeViewZones((f)=>{
                    f.layoutZone(c);
                }));
            }), a.observe(o), on.requestAnimationFrame(()=>{
                const h = this.editor.getOption(68), p = Math.round(h), g = o.scrollHeight + p;
                g > 0 && (r.heightInPx = g, this.editor.changeViewZones((f)=>{
                    f.layoutZone(c);
                }));
            });
        }
        return {
            zoneId: i,
            zone: r,
            resizeObserver: a,
            contentHash: "",
            disposables: s
        };
    }
    createZoneDomNode(e, t) {
        const n = document.createElement("div");
        n.className = "bugbot-comment-zone";
        const i = document.createElement("div");
        i.className = "bugbot-comment-zone-inner", n.appendChild(i);
        const r = e.locations[0], s = r?.startLine ?? 1, o = r?.endLine ?? s, a = s === o ? `L${s}` : `L${s}-${o}`, c = e.metadata?.threadComments?.length ?? 0;
        if (e.source === "pr_review" && c > 0) {
            const g = document.createElement("div");
            g.className = "bugbot-zone-header-bar";
            const f = document.createElement("span");
            f.className = "bugbot-zone-line-badge", f.textContent = a, g.appendChild(f);
            const v = document.createElement("div");
            v.className = "bugbot-zone-header-actions";
            const b = e.metadata?.onResolve;
            if (b) {
                const E = document.createElement("button");
                E.type = "button", E.className = "bugbot-zone-header-btn", E.title = "Resolve thread";
                const A = document.createElement("i");
                A.className = "codicon codicon-check", E.appendChild(A), E.addEventListener("mousedown", (R)=>{
                    R.preventDefault(), R.stopPropagation(), b();
                }), v.appendChild(E);
            }
            const y = e.metadata?.onAddToChat, T = e.metadata?.onFixInChat;
            if (y) {
                const E = document.createElement("button");
                E.type = "button", E.className = "bugbot-zone-header-btn", E.title = "Add to Chat";
                const A = document.createElement("i");
                A.className = "codicon codicon-chat-rounded", E.appendChild(A), E.addEventListener("mousedown", (R)=>{
                    R.preventDefault(), R.stopPropagation(), y();
                }), v.appendChild(E);
            } else if (T) {
                const E = document.createElement("button");
                E.type = "button", E.className = "bugbot-zone-header-btn", E.title = "Fix with Agent";
                const A = document.createElement("i");
                A.className = "codicon codicon-sparkle", E.appendChild(A), E.addEventListener("mousedown", (R)=>{
                    R.preventDefault(), R.stopPropagation(), T();
                }), v.appendChild(E);
            }
            g.appendChild(v), i.appendChild(g);
        }
        const u = document.createElement("div");
        u.className = "bugbot-content-container";
        const h = e.metadata?.threadComments;
        if (h && h.length > 0 && e.source === "pr_review") {
            const g = document.createElement("div");
            g.className = "bugbot-thread-container";
            for(let y = 0; y < h.length; y++){
                const T = h[y], E = y === 0, A = document.createElement("div");
                A.className = "bugbot-thread-comment", E || A.classList.add("bugbot-thread-reply");
                const R = document.createElement("div");
                R.className = "bugbot-comment-header";
                const D = document.createElement("div");
                if (D.className = "bugbot-avatar", T.avatarUrl) {
                    const H = document.createElement("img");
                    H.src = T.avatarUrl, H.alt = T.authorLogin || "User avatar", H.style.width = "100%", H.style.height = "100%", H.style.objectFit = "cover", D.appendChild(H);
                } else {
                    const H = document.createElement("i");
                    H.className = "codicon codicon-comment", D.appendChild(H);
                }
                R.appendChild(D);
                const P = document.createElement("div");
                if (P.className = "bugbot-title", P.textContent = T.authorLogin ?? "Comment", R.appendChild(P), T.createdAt) {
                    const H = new Date(T.createdAt), $ = document.createElement("span");
                    $.className = "bugbot-timestamp", $.textContent = o5(H, !0, !0), $.title = H.toLocaleString(), R.appendChild($);
                }
                A.appendChild(R);
                const N = document.createElement("div");
                N.className = "bugbot-comment-content-wrapper";
                const O = document.createElement("div");
                O.className = "bugbot-comment-content bugbot-thread-comment-content";
                const F = T.body ?? "";
                this.renderMarkdownContent(O, F, t), N.appendChild(O), A.appendChild(N), g.appendChild(A);
            }
            const f = ()=>{
                const T = g.scrollHeight > g.clientHeight + 5, E = g.scrollTop + g.clientHeight >= g.scrollHeight - 1;
                g.classList.toggle("has-overflow", T), g.classList.toggle("scrolled-to-bottom", E);
            };
            on.requestAnimationFrame(f), g.addEventListener("wheel", (y)=>{
                const T = g, E = y.deltaY;
                if (E === 0) return;
                const A = T.scrollTop <= 0, R = T.scrollTop + T.clientHeight >= T.scrollHeight - 1, D = E < 0, P = E > 0;
                (D && !A || P && !R) && (y.preventDefault(), y.stopPropagation(), T.scrollTop += E), f();
            }, {
                passive: !1
            }), g.addEventListener("scroll", f), u.appendChild(g);
            const v = e.metadata?.prUrl, b = e.metadata?.threadId;
            if (v && b && this.githubPRService) {
                const y = this.createReplyField(e.id, v, b);
                u.appendChild(y);
            }
        } else if (e.source === "pr_review") {
            const g = document.createElement("div");
            g.className = "bugbot-comment-header";
            const f = document.createElement("div");
            f.className = "bugbot-avatar";
            const v = e.metadata?.avatarUrl;
            if (v) {
                const N = document.createElement("img");
                N.src = v, N.alt = e.title || "User avatar", N.style.width = "100%", N.style.height = "100%", N.style.objectFit = "cover", f.appendChild(N);
            } else {
                const N = document.createElement("i");
                N.className = "codicon codicon-comment", f.appendChild(N);
            }
            g.appendChild(f);
            const b = document.createElement("div");
            b.className = "bugbot-title", b.textContent = e.title ?? "Comment", g.appendChild(b);
            const y = e.metadata?.createdAt;
            if (y) {
                const N = new Date(y), O = document.createElement("span");
                O.className = "bugbot-timestamp", O.textContent = o5(N, !0, !0), O.title = N.toLocaleString(), g.appendChild(O);
            }
            u.appendChild(g);
            const T = document.createElement("div");
            T.className = "bugbot-comment-content-wrapper";
            const E = document.createElement("div");
            E.className = "bugbot-comment-content";
            const A = e.description ?? "";
            this.renderMarkdownContent(E, A, t);
            const R = ()=>{
                const O = E.scrollHeight > E.clientHeight + 5, F = E.scrollTop + E.clientHeight >= E.scrollHeight - 1;
                T.classList.toggle("has-overflow", O), T.classList.toggle("scrolled-to-bottom", F);
            };
            on.requestAnimationFrame(R), E.addEventListener("wheel", (N)=>{
                const O = E, F = N.deltaY;
                if (F === 0) return;
                const H = O.scrollTop <= 0, $ = O.scrollTop + O.clientHeight >= O.scrollHeight - 1, W = F < 0, G = F > 0;
                (W && !H || G && !$) && (N.preventDefault(), N.stopPropagation(), O.scrollTop += F), R();
            }, {
                passive: !1
            }), E.addEventListener("scroll", R), T.appendChild(E), u.appendChild(T);
            const D = e.metadata?.prUrl, P = e.metadata?.threadId;
            if (D && P && this.githubPRService) {
                const N = this.createReplyField(e.id, D, P);
                u.appendChild(N);
            }
        } else {
            const g = document.createElement("div");
            g.className = "bugbot-comment-header";
            const f = document.createElement("div");
            f.className = "bugbot-avatar";
            const v = document.createElement("i");
            let b = "codicon codicon-comment";
            e.source === "test" ? b = "codicon codicon-beaker" : e.source === "bugbot" && (b = "codicon codicon-cursor"), v.className = b, f.appendChild(v), g.appendChild(f);
            const y = document.createElement("div");
            y.className = "bugbot-title", y.textContent = e.title ?? "Comment", g.appendChild(y), u.appendChild(g);
            const T = document.createElement("div");
            T.className = "bugbot-comment-content-wrapper";
            const E = document.createElement("div");
            E.className = "bugbot-comment-content";
            const A = e.description ?? "";
            this.renderMarkdownContent(E, A, t);
            const R = ()=>{
                const P = E.scrollHeight > E.clientHeight + 5, N = E.scrollTop + E.clientHeight >= E.scrollHeight - 1;
                T.classList.toggle("has-overflow", P), T.classList.toggle("scrolled-to-bottom", N);
            };
            on.requestAnimationFrame(R), E.addEventListener("wheel", (D)=>{
                const P = E, N = D.deltaY;
                if (N === 0) return;
                const O = P.scrollTop <= 0, F = P.scrollTop + P.clientHeight >= P.scrollHeight - 1, H = N < 0, $ = N > 0;
                (H && !O || $ && !F) && (D.preventDefault(), D.stopPropagation(), P.scrollTop += N), R();
            }, {
                passive: !1
            }), E.addEventListener("scroll", R), T.appendChild(E), u.appendChild(T);
        }
        const p = e.actions ?? [
            {
                id: "dismiss",
                label: "Dismiss"
            }
        ];
        if (p.length > 0) {
            const g = document.createElement("div");
            g.className = "bugbot-comment-footer";
            const f = document.createElement("div");
            f.className = "bugbot-footer-left";
            const v = document.createElement("div");
            v.className = "bugbot-footer-right";
            for (const b of p){
                const y = document.createElement("button");
                if (y.type = "button", y.dataset.actionId = b.id, b.iconOnly ? (y.className = "bugbot-thumbs-button", b.id === "thumbs_up" ? y.classList.add("bugbot-thumbs-up") : b.id === "thumbs_down" && y.classList.add("bugbot-thumbs-down")) : b.id === "fix_in_chat" ? y.className = "bugbot-fix-button" : y.className = "bugbot-dismiss-button", b.icon) {
                    const T = document.createElement("i");
                    T.className = `codicon codicon-${b.icon}`, b.iconOnly || (T.style.marginRight = "4px"), y.appendChild(T);
                }
                if (b.iconOnly) y.title = b.label;
                else {
                    const T = document.createTextNode(b.label);
                    y.appendChild(T);
                }
                b.togglable && b.pressed && b.pressedClass && y.classList.add(b.pressedClass), y.addEventListener("mousedown", (T)=>{
                    T.preventDefault(), T.stopPropagation(), b.onClick?.();
                }), b.position === "right" ? v.appendChild(y) : f.appendChild(y);
            }
            g.appendChild(f), g.appendChild(v), u.appendChild(g);
        }
        return i.appendChild(u), {
            root: n,
            inner: i
        };
    }
    createReplyField(e, t, n) {
        const i = document.createElement("div");
        i.className = "bugbot-reply-container";
        const r = document.createElement("div");
        r.className = "bugbot-reply-row";
        const s = document.createElement("div");
        s.className = "bugbot-reply-avatar", this.githubPRService && this.githubPRService.getCurrentUserLogin().then((h)=>{
            if (h) {
                const p = document.createElement("img");
                p.src = `https://github.com/${h}.png?size=64`, p.alt = "Your avatar", s.appendChild(p);
            }
        });
        const o = document.createElement("textarea");
        o.className = "bugbot-reply-textarea", o.placeholder = "Reply, '@Cursor' for changes...", o.rows = 1;
        const a = 120, c = ()=>{
            o.style.height = "auto";
            const h = Math.min(o.scrollHeight, a);
            o.style.height = `${h}px`, o.style.overflowY = h >= a ? "auto" : "hidden";
        };
        o.addEventListener("input", c), o.addEventListener("wheel", (h)=>{
            const p = h.deltaY;
            if (p === 0) return;
            const g = o.scrollTop <= 0, f = o.scrollTop + o.clientHeight >= o.scrollHeight - 1, v = p < 0, b = p > 0;
            (v && !g || b && !f) && (h.preventDefault(), h.stopPropagation(), o.scrollTop += p);
        }, {
            passive: !1
        });
        let l = !1;
        const u = async ()=>{
            const h = o.value.trim();
            if (!(!h || l || !this.githubPRService)) {
                l = !0, o.disabled = !0;
                try {
                    await this.githubPRService.replyToReviewThread({
                        prUrl: t,
                        threadId: n,
                        body: h
                    }) ? (o.value = "", c(), this.onCommentPosted?.()) : console.error("[DiffCommentViewZoneManager] Failed to post reply");
                } catch (p) {
                    console.error("[DiffCommentViewZoneManager] Error posting reply:", p);
                } finally{
                    l = !1, o.disabled = !1, o.focus();
                }
            }
        };
        return o.addEventListener("keydown", (h)=>{
            h.key === "Enter" && !h.shiftKey && (h.preventDefault(), u());
        }), r.appendChild(s), r.appendChild(o), i.appendChild(r), i;
    }
    clearAllZones() {
        const e = Array.from(this.zonesByCommentId.values());
        if (e.length !== 0) {
            for (const t of e){
                t.resizeObserver?.disconnect();
                for (const n of t.disposables)n.dispose();
            }
            this.editor.changeViewZones((t)=>{
                for (const n of e)t.removeZone(n.zoneId);
            }), this.zonesByCommentId.clear(), this.containersByCommentId.clear();
        }
    }
    layoutAllZones() {
        this.editor.changeViewZones((e)=>{
            for (const t of this.zonesByCommentId.values())e.layoutZone(t.zoneId);
        });
    }
    getEffectiveContentWidth() {
        const e = this.editor.getLayoutInfo();
        if (this.widget && !this.widget.renderSideBySide) {
            const t = this.widget.getDomNode();
            if (t) return t.clientWidth - e.contentLeft;
        }
        return e.contentWidth;
    }
    updateZoneWidths() {
        const e = this.getEffectiveContentWidth(), t = `${Math.max(300, e - 12)}px`, n = this.editor.getOption(68);
        for (const i of this.containersByCommentId.values()){
            i.style.maxWidth = t, i.style.minWidth = "300px";
            const r = i.querySelector(".bugbot-comment-footer"), s = i.parentElement;
            if (s && (s.style.width = `${e}px`, s.style.paddingTop = `${Math.round(.5 * n)}px`, s.style.paddingBottom = `${Math.round(.5 * n)}px`), i.style.paddingTop = `${Math.round(.5 * n)}px`, i.style.paddingBottom = `${Math.round(.5 * n)}px`, !(i.querySelector(".bugbot-thread-container") !== null)) {
                const a = i.querySelector(".bugbot-comment-header"), c = i.querySelector(".bugbot-comment-content");
                a && (a.style.marginBottom = `${Math.round(.44 * n)}px`), c && (c.style.maxHeight = `${Math.round(4 * n)}px`, c.style.height = `${Math.round(4 * n)}px`, c.style.marginBottom = `${Math.round(.77 * n)}px`, c.style.overflowY = "auto", c.style.overflowX = "hidden");
            }
            r && (r.style.alignItems = "center");
        }
    }
    updateZoneLeftOffsets() {
        const e = this.editor.getScrollLeft();
        for (const t of this.containersByCommentId.values()){
            const n = t.parentElement;
            n && (n.style.transform = `translateX(${Math.max(0, Math.round(e))}px)`), t.style.marginLeft = "0px", t.style.transform = "none";
        }
    }
    dispose() {
        this.clearAllZones(), this._disposables.dispose();
    }
};

}
