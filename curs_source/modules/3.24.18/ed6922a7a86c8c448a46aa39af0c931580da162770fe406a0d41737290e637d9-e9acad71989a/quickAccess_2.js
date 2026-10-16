import { Ct, He, Se, bt, rn, we } from "./HVr.js";
import { C, ie } from "./actions_2.js";
import { Am, bn } from "./async.js";
import { Ar, Eo } from "./cancellation.js";
import { Ze, _t } from "./instantiation.js";
import { kn, rr } from "./platform_2.js";
import { IX, P$, pWt } from "./quickAccess.js";
import { Gs, Ya, wW } from "./quickInput.js";
import { x } from "./tslib.es6.js";
var SNn;
export { SNn };
var __wakaru_fFd_initialized = false;
export function fFd() {
if (__wakaru_fFd_initialized) return;
__wakaru_fFd_initialized = true;
"use strict";
x(), bn(), Ar(), bt(), Se(), Ze(), IX(), Ya(), rr(), SNn = class extends we {
    constructor(e, t){
        super(), this.quickInputService = e, this.instantiationService = t, this.registry = kn.as(P$.Quickaccess), this.mapProviderToDescriptor = new Map, this.lastAcceptedPickerValues = new Map, this.visibleQuickAccess = void 0;
    }
    pick(e = "", t) {
        return this.doShowOrPick(e, !0, t);
    }
    show(e = "", t) {
        this.doShowOrPick(e, !1, t);
    }
    doShowOrPick(e, t, n) {
        const [i, r] = this.getOrInstantiateProvider(e, n?.enabledProviderPrefixes), s = this.visibleQuickAccess, o = s?.descriptor;
        if (s && r && o === r) {
            e !== r.prefix && !n?.preserveValue && (s.picker.value = e), this.adjustValueSelection(s.picker, r, n);
            return;
        }
        if (r && !n?.preserveValue) {
            let g;
            if (s && o && o !== r) {
                const f = s.value.substr(o.prefix.length);
                f && (g = `${r.prefix}${f}`);
            }
            if (!g) {
                const f = i?.defaultFilterValue;
                f === pWt.LAST ? g = this.lastAcceptedPickerValues.get(r) : typeof f == "string" && (g = `${r.prefix}${f}`);
            }
            typeof g == "string" && (e = g);
        }
        const a = s?.picker?.valueSelection, c = s?.picker?.value, l = new He, u = l.add(this.quickInputService.createQuickPick({
            useSeparators: !0
        }));
        u.value = e, this.adjustValueSelection(u, r, n), u.placeholder = n?.placeholder ?? r?.placeholder, u.quickNavigate = n?.quickNavigateConfiguration, u.hideInput = !!u.quickNavigate && !s, (typeof n?.itemActivation == "number" || n?.quickNavigateConfiguration) && (u.itemActivation = n?.itemActivation ?? wW.SECOND), u.contextKey = r?.contextKey, u.filterValue = (g)=>g.substring(r ? r.prefix.length : 0);
        let h;
        t && (h = new Am, l.add(Ct.once(u.onWillAccept)((g)=>{
            g.veto(), u.hide();
        }))), l.add(this.registerPickerListeners(u, i, r, e, n));
        const p = l.add(new Eo);
        if (i && l.add(i.provide(u, p.token, n?.providerOptions)), Ct.once(u.onDidHide)(()=>{
            u.selectedItems.length === 0 && p.cancel(), l.dispose(), h?.complete(u.selectedItems.slice(0));
        }), u.show(), a && c === e && (u.valueSelection = a), t) return h?.p;
    }
    adjustValueSelection(e, t, n) {
        let i;
        n?.preserveValue ? i = [
            e.value.length,
            e.value.length
        ] : i = [
            t?.prefix.length ?? 0,
            e.value.length
        ], e.valueSelection = i;
    }
    registerPickerListeners(e, t, n, i, r) {
        const s = new He, o = this.visibleQuickAccess = {
            picker: e,
            descriptor: n,
            value: i
        };
        return s.add(rn(()=>{
            o === this.visibleQuickAccess && (this.visibleQuickAccess = void 0);
        })), s.add(e.onDidChangeValue((a)=>{
            const [c] = this.getOrInstantiateProvider(a, r?.enabledProviderPrefixes);
            c !== t ? this.show(a, {
                enabledProviderPrefixes: r?.enabledProviderPrefixes,
                preserveValue: !0,
                providerOptions: r?.providerOptions
            }) : o.value = a;
        })), n && s.add(e.onDidAccept(()=>{
            this.lastAcceptedPickerValues.set(n, e.value);
        })), s;
    }
    getOrInstantiateProvider(e, t) {
        const n = this.registry.getQuickAccessProvider(e);
        if (!n || t && !t?.includes(n.prefix)) return [
            void 0,
            void 0
        ];
        let i = this.mapProviderToDescriptor.get(n);
        return i || (i = this.instantiationService.createInstance(n.ctor), this.mapProviderToDescriptor.set(n, i)), [
            i,
            n
        ];
    }
}, SNn = ie([
    C(0, Gs),
    C(1, _t)
], SNn);

}
