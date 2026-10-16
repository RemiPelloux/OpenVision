import { NFl, x1w } from "./BA.js";
import { Nt, Qe } from "./Iwo.js";
import { I1w } from "./bugbotViewZone.css";
import { yY } from "./date.js";
import { eLf } from "./discussionUtils.js";
import { AY, Coe } from "./markdownRenderer_2.js";
import { LFl } from "./reviewChangesEditorLifetime.js";
import { E } from "./tslib.es6.js";
import { $t, Bs } from "./window.js";
import { bY } from "./ze.js";
var tLf;
export { tLf };
var __wakaru_R1w_initialized = false;
export function R1w() {
if (__wakaru_R1w_initialized) return;
__wakaru_R1w_initialized = true;
"use strict";
E(), Bs(), yY(), Qe(), Coe(), I1w(), LFl(), eLf(), tLf = class {
    constructor(t){
        this._disposables = new Nt, this.zonesByCommentId = new Map, this.containersByCommentId = new Map, this.editor = t.editor, this.widget = t.widget, this.comments = t.comments, this.githubPRService = t.githubPRService, this.onCommentPosted = t.onCommentPosted, this.instantiationService = t.instantiationService;
        const e = new Nt;
        if (this.comments.recomputeInitiallyAndOnChange(e, ()=>{
            this.applyComments();
        }), this._disposables.add(e), !NFl(this.editor)) {
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
    renderMarkdownContent(t, e, n) {
        if (e) {
            if (this.instantiationService) try {
                const r = this.instantiationService.createInstance(AY, {}).render({
                    value: e,
                    supportThemeIcons: !0,
                    supportHtml: !0,
                    isTrusted: !1
                });
                t.appendChild(r.element), n && n.push(r);
                return;
            } catch (i) {
                console.warn("[DiffCommentViewZoneManager] Failed to render markdown, falling back to text:", i);
            }
            if (e.includes("`")) {
                const i = e.split("`");
                for(let r = 0; r < i.length; r++)if (r % 2 === 1) {
                    const s = document.createElement("code");
                    s.textContent = i[r], t.appendChild(s);
                } else i[r].length > 0 && t.appendChild(document.createTextNode(i[r]));
            } else t.textContent = e;
        }
    }
    applyComments() {
        const t = this.comments.get(), e = this.editor.getModel();
        if (!e) {
            this.clearAllZones();
            return;
        }
        const n = e.getLineCount(), i = new Map;
        for (const s of t){
            const o = s.locations[0];
            if (!o) continue;
            const a = o.endLine > 0 ? o.endLine : o.startLine > 0 ? o.startLine : 1, l = Math.min(Math.max(a, 1), n);
            i.set(s.id, {
                comment: s,
                anchorLine: l
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
            const a = this.zonesByCommentId.get(s), l = x1w(o.comment);
            if (a && a.contentHash === l) continue;
            if (a) {
                a.resizeObserver?.disconnect();
                for (const u of a.disposables)u.dispose();
                this.editor.changeViewZones((u)=>{
                    u.removeZone(a.zoneId);
                }), this.zonesByCommentId.delete(s), this.containersByCommentId.delete(s);
            }
            const c = this.addZoneForComment(s, o.comment, o.anchorLine);
            c && (c.contentHash = l, this.zonesByCommentId.set(s, c));
        }
    }
    addZoneForComment(t, e, n) {
        let i, r;
        const s = [];
        if (this.widget) {
            const c = this.editor.getModel()?.getLineCount() ?? n;
            this.widget.ensureLineIsVisible(n, !1), n < c && this.widget.ensureLineIsVisible(n + 1, !1);
        }
        if (this.editor.changeViewZones((l)=>{
            const c = this.editor.getOption(68), { root: u, inner: d } = this.createZoneDomNode(e, s);
            this.containersByCommentId.set(t, d);
            const p = {
                afterLineNumber: n,
                heightInPx: 100,
                domNode: u,
                suppressMouseDown: !1
            };
            r = p, i = l.addZone(p);
            const g = this.getEffectiveContentWidth();
            u.style.cssText = `
				display: block !important;
				position: absolute !important;
				z-index: 10;
				width: ${g}px;
				box-sizing: border-box;
				padding-top: ${Math.round(.5 * c)}px;
				padding-bottom: ${Math.round(.5 * c)}px;
				overflow: visible !important;
			`;
            const f = this.getEffectiveContentWidth(), _ = Math.max(300, f - 8);
            if (d.style.maxWidth = `${_}px`, d.style.minWidth = "300px", d.style.height = "auto", d.style.paddingTop = `${Math.round(.5 * c)}px`, d.style.paddingBottom = `${Math.round(.5 * c)}px`, !(d.querySelector(".bugbot-thread-container") !== null)) {
                const S = d.querySelector(".bugbot-comment-header");
                S && (S.style.marginBottom = `${Math.round(.44 * c)}px`);
                const k = d.querySelector(".bugbot-comment-content");
                k && (k.style.maxHeight = `${Math.round(4 * c)}px`, k.style.height = `${Math.round(4 * c)}px`, k.style.marginBottom = `${Math.round(.77 * c)}px`, k.style.overflowY = "auto", k.style.overflowX = "hidden");
            }
            const y = d.querySelector(".bugbot-comment-footer");
            y && (y.style.alignItems = "center"), this.updateZoneLeftOffsets();
        }), !i || !r) return;
        const o = this.containersByCommentId.get(t);
        let a = null;
        if (o) {
            const l = i, c = r;
            let u = 0;
            a = new ResizeObserver(()=>{
                const d = this.editor.getOption(68), h = Math.round(d), p = o.scrollHeight + h;
                Math.abs(p - u) > 2 && (u = p, c.heightInPx = p, this.editor.changeViewZones((g)=>{
                    g.layoutZone(l);
                }));
            }), a.observe(o), $t.requestAnimationFrame(()=>{
                const d = this.editor.getOption(68), h = Math.round(d), p = o.scrollHeight + h;
                p > 0 && (r.heightInPx = p, this.editor.changeViewZones((g)=>{
                    g.layoutZone(l);
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
    createZoneDomNode(t, e) {
        const n = document.createElement("div");
        n.className = "bugbot-comment-zone";
        const i = document.createElement("div");
        i.className = "bugbot-comment-zone-inner", n.appendChild(i);
        const r = t.locations[0], s = r?.startLine ?? 1, o = r?.endLine ?? s, a = s === o ? `L${s}` : `L${s}-${o}`, l = t.metadata?.threadComments?.length ?? 0;
        if (t.source === "pr_review" && l > 0) {
            const p = document.createElement("div");
            p.className = "bugbot-zone-header-bar";
            const g = document.createElement("span");
            g.className = "bugbot-zone-line-badge", g.textContent = a, p.appendChild(g);
            const f = document.createElement("div");
            f.className = "bugbot-zone-header-actions";
            const _ = t.metadata?.onResolve;
            if (_) {
                const S = document.createElement("button");
                S.type = "button", S.className = "bugbot-zone-header-btn", S.title = "Resolve thread";
                const k = document.createElement("i");
                k.className = "codicon codicon-check", S.appendChild(k), S.addEventListener("mousedown", (C)=>{
                    C.preventDefault(), C.stopPropagation(), _();
                }), f.appendChild(S);
            }
            const b = t.metadata?.onAddToChat, y = t.metadata?.onFixInChat;
            if (b) {
                const S = document.createElement("button");
                S.type = "button", S.className = "bugbot-zone-header-btn", S.title = "Add to Chat";
                const k = document.createElement("i");
                k.className = "codicon codicon-chat-rounded", S.appendChild(k), S.addEventListener("mousedown", (C)=>{
                    C.preventDefault(), C.stopPropagation(), b();
                }), f.appendChild(S);
            } else if (y) {
                const S = document.createElement("button");
                S.type = "button", S.className = "bugbot-zone-header-btn", S.title = "Fix with Agent";
                const k = document.createElement("i");
                k.className = "codicon codicon-sparkle", S.appendChild(k), S.addEventListener("mousedown", (C)=>{
                    C.preventDefault(), C.stopPropagation(), y();
                }), f.appendChild(S);
            }
            p.appendChild(f), i.appendChild(p);
        }
        const u = document.createElement("div");
        u.className = "bugbot-content-container";
        const d = t.metadata?.threadComments;
        if (d && d.length > 0 && t.source === "pr_review") {
            const p = document.createElement("div");
            p.className = "bugbot-thread-container";
            for(let b = 0; b < d.length; b++){
                const y = d[b], S = b === 0, k = document.createElement("div");
                k.className = "bugbot-thread-comment", S || k.classList.add("bugbot-thread-reply");
                const C = document.createElement("div");
                C.className = "bugbot-comment-header";
                const T = document.createElement("div");
                if (T.className = "bugbot-avatar", y.avatarUrl) {
                    const O = document.createElement("img");
                    O.src = y.avatarUrl, O.alt = y.authorLogin || "User avatar", O.style.width = "100%", O.style.height = "100%", O.style.objectFit = "cover", T.appendChild(O);
                } else {
                    const O = document.createElement("i");
                    O.className = "codicon codicon-comment", T.appendChild(O);
                }
                C.appendChild(T);
                const I = document.createElement("div");
                if (I.className = "bugbot-title", I.textContent = y.authorLogin ?? "Comment", C.appendChild(I), y.createdAt) {
                    const O = new Date(y.createdAt), N = document.createElement("span");
                    N.className = "bugbot-timestamp", N.textContent = bY(O, !0, !0), N.title = O.toLocaleString(), C.appendChild(N);
                }
                k.appendChild(C);
                const A = document.createElement("div");
                A.className = "bugbot-comment-content-wrapper";
                const P = document.createElement("div");
                P.className = "bugbot-comment-content bugbot-thread-comment-content";
                const M = y.body ?? "";
                this.renderMarkdownContent(P, M, e), A.appendChild(P), k.appendChild(A), p.appendChild(k);
            }
            const g = ()=>{
                const y = p.scrollHeight > p.clientHeight + 5, S = p.scrollTop + p.clientHeight >= p.scrollHeight - 1;
                p.classList.toggle("has-overflow", y), p.classList.toggle("scrolled-to-bottom", S);
            };
            $t.requestAnimationFrame(g), p.addEventListener("wheel", (b)=>{
                const y = p, S = b.deltaY;
                if (S === 0) return;
                const k = y.scrollTop <= 0, C = y.scrollTop + y.clientHeight >= y.scrollHeight - 1, T = S < 0, I = S > 0;
                (T && !k || I && !C) && (b.preventDefault(), b.stopPropagation(), y.scrollTop += S), g();
            }, {
                passive: !1
            }), p.addEventListener("scroll", g), u.appendChild(p);
            const f = t.metadata?.prUrl, _ = t.metadata?.threadId;
            if (f && _ && this.githubPRService) {
                const b = this.createReplyField(t.id, f, _);
                u.appendChild(b);
            }
        } else if (t.source === "pr_review") {
            const p = document.createElement("div");
            p.className = "bugbot-comment-header";
            const g = document.createElement("div");
            g.className = "bugbot-avatar";
            const f = t.metadata?.avatarUrl;
            if (f) {
                const A = document.createElement("img");
                A.src = f, A.alt = t.title || "User avatar", A.style.width = "100%", A.style.height = "100%", A.style.objectFit = "cover", g.appendChild(A);
            } else {
                const A = document.createElement("i");
                A.className = "codicon codicon-comment", g.appendChild(A);
            }
            p.appendChild(g);
            const _ = document.createElement("div");
            _.className = "bugbot-title", _.textContent = t.title ?? "Comment", p.appendChild(_);
            const b = t.metadata?.createdAt;
            if (b) {
                const A = new Date(b), P = document.createElement("span");
                P.className = "bugbot-timestamp", P.textContent = bY(A, !0, !0), P.title = A.toLocaleString(), p.appendChild(P);
            }
            u.appendChild(p);
            const y = document.createElement("div");
            y.className = "bugbot-comment-content-wrapper";
            const S = document.createElement("div");
            S.className = "bugbot-comment-content";
            const k = t.description ?? "";
            this.renderMarkdownContent(S, k, e);
            const C = ()=>{
                const P = S.scrollHeight > S.clientHeight + 5, M = S.scrollTop + S.clientHeight >= S.scrollHeight - 1;
                y.classList.toggle("has-overflow", P), y.classList.toggle("scrolled-to-bottom", M);
            };
            $t.requestAnimationFrame(C), S.addEventListener("wheel", (A)=>{
                const P = S, M = A.deltaY;
                if (M === 0) return;
                const O = P.scrollTop <= 0, N = P.scrollTop + P.clientHeight >= P.scrollHeight - 1, U = M < 0, j = M > 0;
                (U && !O || j && !N) && (A.preventDefault(), A.stopPropagation(), P.scrollTop += M), C();
            }, {
                passive: !1
            }), S.addEventListener("scroll", C), y.appendChild(S), u.appendChild(y);
            const T = t.metadata?.prUrl, I = t.metadata?.threadId;
            if (T && I && this.githubPRService) {
                const A = this.createReplyField(t.id, T, I);
                u.appendChild(A);
            }
        } else {
            const p = document.createElement("div");
            p.className = "bugbot-comment-header";
            const g = document.createElement("div");
            g.className = "bugbot-avatar";
            const f = document.createElement("i");
            let _ = "codicon codicon-comment";
            t.source === "test" ? _ = "codicon codicon-beaker" : t.source === "bugbot" && (_ = "codicon codicon-cursor"), f.className = _, g.appendChild(f), p.appendChild(g);
            const b = document.createElement("div");
            b.className = "bugbot-title", b.textContent = t.title ?? "Comment", p.appendChild(b), u.appendChild(p);
            const y = document.createElement("div");
            y.className = "bugbot-comment-content-wrapper";
            const S = document.createElement("div");
            S.className = "bugbot-comment-content";
            const k = t.description ?? "";
            this.renderMarkdownContent(S, k, e);
            const C = ()=>{
                const I = S.scrollHeight > S.clientHeight + 5, A = S.scrollTop + S.clientHeight >= S.scrollHeight - 1;
                y.classList.toggle("has-overflow", I), y.classList.toggle("scrolled-to-bottom", A);
            };
            $t.requestAnimationFrame(C), S.addEventListener("wheel", (T)=>{
                const I = S, A = T.deltaY;
                if (A === 0) return;
                const P = I.scrollTop <= 0, M = I.scrollTop + I.clientHeight >= I.scrollHeight - 1, O = A < 0, N = A > 0;
                (O && !P || N && !M) && (T.preventDefault(), T.stopPropagation(), I.scrollTop += A), C();
            }, {
                passive: !1
            }), S.addEventListener("scroll", C), y.appendChild(S), u.appendChild(y);
        }
        const h = t.actions ?? [
            {
                id: "dismiss",
                label: "Dismiss"
            }
        ];
        if (h.length > 0) {
            const p = document.createElement("div");
            p.className = "bugbot-comment-footer";
            const g = document.createElement("div");
            g.className = "bugbot-footer-left";
            const f = document.createElement("div");
            f.className = "bugbot-footer-right";
            for (const _ of h){
                const b = document.createElement("button");
                if (b.type = "button", b.dataset.actionId = _.id, _.iconOnly ? (b.className = "bugbot-thumbs-button", _.id === "thumbs_up" ? b.classList.add("bugbot-thumbs-up") : _.id === "thumbs_down" && b.classList.add("bugbot-thumbs-down")) : _.id === "fix_in_chat" ? b.className = "bugbot-fix-button" : b.className = "bugbot-dismiss-button", _.icon) {
                    const y = document.createElement("i");
                    y.className = `codicon codicon-${_.icon}`, _.iconOnly || (y.style.marginRight = "4px"), b.appendChild(y);
                }
                if (_.iconOnly) b.title = _.label;
                else {
                    const y = document.createTextNode(_.label);
                    b.appendChild(y);
                }
                _.togglable && _.pressed && _.pressedClass && b.classList.add(_.pressedClass), b.addEventListener("mousedown", (y)=>{
                    y.preventDefault(), y.stopPropagation(), _.onClick?.();
                }), _.position === "right" ? f.appendChild(b) : g.appendChild(b);
            }
            p.appendChild(g), p.appendChild(f), u.appendChild(p);
        }
        return i.appendChild(u), {
            root: n,
            inner: i
        };
    }
    createReplyField(t, e, n) {
        const i = document.createElement("div");
        i.className = "bugbot-reply-container";
        const r = document.createElement("div");
        r.className = "bugbot-reply-row";
        const s = document.createElement("div");
        s.className = "bugbot-reply-avatar", this.githubPRService && this.githubPRService.getCurrentUserLogin().then((d)=>{
            if (d) {
                const h = document.createElement("img");
                h.src = `https://github.com/${d}.png?size=64`, h.alt = "Your avatar", s.appendChild(h);
            }
        });
        const o = document.createElement("textarea");
        o.className = "bugbot-reply-textarea", o.placeholder = "Reply, '@Cursor' for changes...", o.rows = 1;
        const a = 120, l = ()=>{
            o.style.height = "auto";
            const d = Math.min(o.scrollHeight, a);
            o.style.height = `${d}px`, o.style.overflowY = d >= a ? "auto" : "hidden";
        };
        o.addEventListener("input", l), o.addEventListener("wheel", (d)=>{
            const h = d.deltaY;
            if (h === 0) return;
            const p = o.scrollTop <= 0, g = o.scrollTop + o.clientHeight >= o.scrollHeight - 1, f = h < 0, _ = h > 0;
            (f && !p || _ && !g) && (d.preventDefault(), d.stopPropagation(), o.scrollTop += h);
        }, {
            passive: !1
        });
        let c = !1;
        const u = async ()=>{
            const d = o.value.trim();
            if (!(!d || c || !this.githubPRService)) {
                c = !0, o.disabled = !0;
                try {
                    await this.githubPRService.replyToReviewThread({
                        prUrl: e,
                        threadId: n,
                        body: d
                    }) ? (o.value = "", l(), this.onCommentPosted?.()) : console.error("[DiffCommentViewZoneManager] Failed to post reply");
                } catch (h) {
                    console.error("[DiffCommentViewZoneManager] Error posting reply:", h);
                } finally{
                    c = !1, o.disabled = !1, o.focus();
                }
            }
        };
        return o.addEventListener("keydown", (d)=>{
            d.key === "Enter" && !d.shiftKey && (d.preventDefault(), u());
        }), r.appendChild(s), r.appendChild(o), i.appendChild(r), i;
    }
    clearAllZones() {
        const t = Array.from(this.zonesByCommentId.values());
        if (t.length !== 0) {
            for (const e of t){
                e.resizeObserver?.disconnect();
                for (const n of e.disposables)n.dispose();
            }
            this.editor.changeViewZones((e)=>{
                for (const n of t)e.removeZone(n.zoneId);
            }), this.zonesByCommentId.clear(), this.containersByCommentId.clear();
        }
    }
    layoutAllZones() {
        this.editor.changeViewZones((t)=>{
            for (const e of this.zonesByCommentId.values())t.layoutZone(e.zoneId);
        });
    }
    getEffectiveContentWidth() {
        const t = this.editor.getLayoutInfo();
        if (this.widget && !this.widget.renderSideBySide) {
            const e = this.widget.getDomNode();
            if (e) return e.clientWidth - t.contentLeft;
        }
        return t.contentWidth;
    }
    updateZoneWidths() {
        const t = this.getEffectiveContentWidth(), e = `${Math.max(300, t - 12)}px`, n = this.editor.getOption(68);
        for (const i of this.containersByCommentId.values()){
            i.style.maxWidth = e, i.style.minWidth = "300px";
            const r = i.querySelector(".bugbot-comment-footer"), s = i.parentElement;
            if (s && (s.style.width = `${t}px`, s.style.paddingTop = `${Math.round(.5 * n)}px`, s.style.paddingBottom = `${Math.round(.5 * n)}px`), i.style.paddingTop = `${Math.round(.5 * n)}px`, i.style.paddingBottom = `${Math.round(.5 * n)}px`, !(i.querySelector(".bugbot-thread-container") !== null)) {
                const a = i.querySelector(".bugbot-comment-header"), l = i.querySelector(".bugbot-comment-content");
                a && (a.style.marginBottom = `${Math.round(.44 * n)}px`), l && (l.style.maxHeight = `${Math.round(4 * n)}px`, l.style.height = `${Math.round(4 * n)}px`, l.style.marginBottom = `${Math.round(.77 * n)}px`, l.style.overflowY = "auto", l.style.overflowX = "hidden");
            }
            r && (r.style.alignItems = "center");
        }
    }
    updateZoneLeftOffsets() {
        const t = this.editor.getScrollLeft();
        for (const e of this.containersByCommentId.values()){
            const n = e.parentElement;
            n && (n.style.transform = `translateX(${Math.max(0, Math.round(t))}px)`), e.style.marginLeft = "0px", e.style.transform = "none";
        }
    }
    dispose() {
        this.clearAllZones(), this._disposables.dispose();
    }
};

}
