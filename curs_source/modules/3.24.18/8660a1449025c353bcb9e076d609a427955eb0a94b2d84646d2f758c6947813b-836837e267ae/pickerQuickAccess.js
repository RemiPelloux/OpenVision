import { Fvt, Nt, Qe, Vn, Wd, st } from "./Iwo.js";
import { qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { E } from "./tslib.es6.js";
import { To } from "./types_2.js";
import { KCm, u$a } from "./yBp.js";
var Ipe, RGt;
export { Ipe, RGt };
var __wakaru_PGt_initialized = false;
export function PGt() {
if (__wakaru_PGt_initialized) return;
__wakaru_PGt_initialized = true;
"use strict";
E(), qn(), yo(), Qe(), To(), Ipe = ((t)=>(t[t.NO_ACTION = 0] = "NO_ACTION", t[t.CLOSE_PICKER = 1] = "CLOSE_PICKER", t[t.REFRESH_PICKER = 2] = "REFRESH_PICKER", t[t.REMOVE_ITEM = 3] = "REMOVE_ITEM", t))(Ipe || {}), RGt = class extends st {
    constructor(t, e){
        super(), this.prefix = t, this.options = e;
    }
    provide(t, e, n) {
        const i = new Nt;
        t.canAcceptInBackground = !!this.options?.canAcceptInBackground, t.matchOnLabel = t.matchOnDescription = t.matchOnDetail = t.sortByLabel = !1;
        let r;
        const s = i.add(new Vn), o = async ()=>{
            r?.dispose(!0), t.busy = !1;
            const l = s.value = new Nt;
            r = l.add(new El(e));
            const c = r.token;
            let u = t.value.substring(this.prefix.length);
            this.options?.shouldSkipTrimPickFilter || (u = u.trim());
            const d = this._getPicks(u, l, c, n), h = (g, f)=>{
                let _, b;
                if (u$a(g) ? (_ = g.items, b = g.active) : _ = g, _.length === 0) {
                    if (f) return !1;
                    (u.length > 0 || t.hideInput) && this.options?.noResultsPick && (Fvt(this.options.noResultsPick) ? _ = [
                        this.options.noResultsPick(u)
                    ] : _ = [
                        this.options.noResultsPick
                    ]);
                }
                return t.items = _, b && (t.activeItems = [
                    b
                ]), !0;
            }, p = async (g)=>{
                let f = !1, _ = !1;
                await Promise.all([
                    (async ()=>{
                        typeof g.mergeDelay == "number" && (await Wd(g.mergeDelay), c.isCancellationRequested) || _ || (f = h(g.picks, !0));
                    })(),
                    (async ()=>{
                        t.busy = !0;
                        try {
                            const b = await g.additionalPicks;
                            if (c.isCancellationRequested) return;
                            let y, S;
                            u$a(g.picks) ? (y = g.picks.items, S = g.picks.active) : y = g.picks;
                            let k, C;
                            if (u$a(b) ? (k = b.items, C = b.active) : k = b, k.length > 0 || !f) {
                                let T;
                                if (!S && !C) {
                                    const I = t.activeItems[0];
                                    I && y.indexOf(I) !== -1 && (T = I);
                                }
                                h({
                                    items: [
                                        ...y,
                                        ...k
                                    ],
                                    active: S || C || T
                                });
                            }
                        } finally{
                            c.isCancellationRequested || (t.busy = !1), _ = !0;
                        }
                    })()
                ]);
            };
            if (d !== null) if (KCm(d)) await p(d);
            else if (!(d instanceof Promise)) h(d);
            else {
                t.busy = !0;
                try {
                    const g = await d;
                    if (c.isCancellationRequested) return;
                    KCm(g) ? await p(g) : h(g);
                } finally{
                    c.isCancellationRequested || (t.busy = !1);
                }
            }
        };
        i.add(t.onDidChangeValue(()=>o())), o(), i.add(t.onDidAccept((l)=>{
            if (n?.handleAccept) {
                l.inBackground || t.hide(), n.handleAccept?.(t.activeItems[0], l.inBackground);
                return;
            }
            const [c] = t.selectedItems;
            typeof c?.accept == "function" && (l.inBackground || t.hide(), c.accept(t.keyMods, l));
        }));
        const a = async (l, c)=>{
            if (typeof c.trigger != "function") return;
            const u = c.buttons?.indexOf(l) ?? -1;
            if (u >= 0) {
                const d = c.trigger(u, t.keyMods), h = typeof d == "number" ? d : await d;
                if (e.isCancellationRequested) return;
                switch(h){
                    case 0:
                        break;
                    case 1:
                        t.hide();
                        break;
                    case 2:
                        o();
                        break;
                    case 3:
                        {
                            const p = t.items.indexOf(c);
                            if (p !== -1) {
                                const g = t.items.slice(), f = g.splice(p, 1), _ = t.activeItems.filter((y)=>y !== f[0]), b = t.keepScrollPosition;
                                t.keepScrollPosition = !0, t.items = g, _ && (t.activeItems = _), t.keepScrollPosition = b;
                            }
                            break;
                        }
                }
            }
        };
        return i.add(t.onDidTriggerItemButton(({ button: l, item: c })=>a(l, c))), i.add(t.onDidTriggerSeparatorButton(({ button: l, separator: c })=>a(l, c))), i;
    }
};

}
