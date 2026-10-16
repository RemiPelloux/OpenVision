import { EFd, Hao } from "./A3u.js";
import { He, Kl, Se, cn, we, wqe } from "./HVr.js";
import { bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { x } from "./tslib.es6.js";
import { gr } from "./types_2.js";
var L$, Uee;
export { L$, Uee };
var __wakaru_Rde_initialized = false;
export function Rde() {
if (__wakaru_Rde_initialized) return;
__wakaru_Rde_initialized = true;
"use strict";
x(), bn(), Ar(), Se(), gr(), L$ = ((e)=>(e[e.NO_ACTION = 0] = "NO_ACTION", e[e.CLOSE_PICKER = 1] = "CLOSE_PICKER", e[e.REFRESH_PICKER = 2] = "REFRESH_PICKER", e[e.REMOVE_ITEM = 3] = "REMOVE_ITEM", e))(L$ || {}), Uee = class extends we {
    constructor(e, t){
        super(), this.prefix = e, this.options = t;
    }
    provide(e, t, n) {
        const i = new He;
        e.canAcceptInBackground = !!this.options?.canAcceptInBackground, e.matchOnLabel = e.matchOnDescription = e.matchOnDetail = e.sortByLabel = !1;
        let r;
        const s = i.add(new cn), o = async ()=>{
            r?.dispose(!0), e.busy = !1;
            const c = s.value = new He;
            r = c.add(new Eo(t));
            const l = r.token;
            let u = e.value.substring(this.prefix.length);
            this.options?.shouldSkipTrimPickFilter || (u = u.trim());
            const h = this._getPicks(u, c, l, n), p = (f, v)=>{
                let b, y;
                if (Hao(f) ? (b = f.items, y = f.active) : b = f, b.length === 0) {
                    if (v) return !1;
                    (u.length > 0 || e.hideInput) && this.options?.noResultsPick && (wqe(this.options.noResultsPick) ? b = [
                        this.options.noResultsPick(u)
                    ] : b = [
                        this.options.noResultsPick
                    ]);
                }
                return e.items = b, y && (e.activeItems = [
                    y
                ]), !0;
            }, g = async (f)=>{
                let v = !1, b = !1;
                await Promise.all([
                    (async ()=>{
                        typeof f.mergeDelay == "number" && (await Kl(f.mergeDelay), l.isCancellationRequested) || b || (v = p(f.picks, !0));
                    })(),
                    (async ()=>{
                        e.busy = !0;
                        try {
                            const y = await f.additionalPicks;
                            if (l.isCancellationRequested) return;
                            let T, E;
                            Hao(f.picks) ? (T = f.picks.items, E = f.picks.active) : T = f.picks;
                            let A, R;
                            if (Hao(y) ? (A = y.items, R = y.active) : A = y, A.length > 0 || !v) {
                                let D;
                                if (!E && !R) {
                                    const P = e.activeItems[0];
                                    P && T.indexOf(P) !== -1 && (D = P);
                                }
                                p({
                                    items: [
                                        ...T,
                                        ...A
                                    ],
                                    active: E || R || D
                                });
                            }
                        } finally{
                            l.isCancellationRequested || (e.busy = !1), b = !0;
                        }
                    })()
                ]);
            };
            if (h !== null) if (EFd(h)) await g(h);
            else if (!(h instanceof Promise)) p(h);
            else {
                e.busy = !0;
                try {
                    const f = await h;
                    if (l.isCancellationRequested) return;
                    EFd(f) ? await g(f) : p(f);
                } finally{
                    l.isCancellationRequested || (e.busy = !1);
                }
            }
        };
        i.add(e.onDidChangeValue(()=>o())), o(), i.add(e.onDidAccept((c)=>{
            if (n?.handleAccept) {
                c.inBackground || e.hide(), n.handleAccept?.(e.activeItems[0], c.inBackground);
                return;
            }
            const [l] = e.selectedItems;
            typeof l?.accept == "function" && (c.inBackground || e.hide(), l.accept(e.keyMods, c));
        }));
        const a = async (c, l)=>{
            if (typeof l.trigger != "function") return;
            const u = l.buttons?.indexOf(c) ?? -1;
            if (u >= 0) {
                const h = l.trigger(u, e.keyMods), p = typeof h == "number" ? h : await h;
                if (t.isCancellationRequested) return;
                switch(p){
                    case 0:
                        break;
                    case 1:
                        e.hide();
                        break;
                    case 2:
                        o();
                        break;
                    case 3:
                        {
                            const g = e.items.indexOf(l);
                            if (g !== -1) {
                                const f = e.items.slice(), v = f.splice(g, 1), b = e.activeItems.filter((T)=>T !== v[0]), y = e.keepScrollPosition;
                                e.keepScrollPosition = !0, e.items = f, b && (e.activeItems = b), e.keepScrollPosition = y;
                            }
                            break;
                        }
                }
            }
        };
        return i.add(e.onDidTriggerItemButton(({ button: c, item: l })=>a(c, l))), i.add(e.onDidTriggerSeparatorButton(({ button: c, separator: l })=>a(c, l))), i;
    }
};

}
