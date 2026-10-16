import { Gt, Nt, Pn, Qe, en, st } from "./Iwo.js";
import { df, qn } from "./async.js";
import { El, yo } from "./cancellation.js";
import { It, dn } from "./instantiation.js";
import { Eo, Fi } from "./platform_2.js";
import { e4e, ewi, kqe } from "./quickAccess.js";
import { Cl, Gu, kW } from "./quickInput.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
var twi;
export { twi };
var __wakaru_BCm_initialized = false;
export function BCm() {
if (__wakaru_BCm_initialized) return;
__wakaru_BCm_initialized = true;
"use strict";
E(), qn(), yo(), Gt(), Qe(), It(), kqe(), Gu(), Eo(), twi = class extends st {
    constructor(t, e){
        super(), this.quickInputService = t, this.instantiationService = e, this.registry = Fi.as(e4e.Quickaccess), this.mapProviderToDescriptor = new Map, this.lastAcceptedPickerValues = new Map, this.visibleQuickAccess = void 0;
    }
    pick(t = "", e) {
        return this.doShowOrPick(t, !0, e);
    }
    show(t = "", e) {
        this.doShowOrPick(t, !1, e);
    }
    doShowOrPick(t, e, n) {
        const [i, r] = this.getOrInstantiateProvider(t, n?.enabledProviderPrefixes), s = this.visibleQuickAccess, o = s?.descriptor;
        if (s && r && o === r) {
            t !== r.prefix && !n?.preserveValue && (s.picker.value = t), this.adjustValueSelection(s.picker, r, n);
            return;
        }
        if (r && !n?.preserveValue) {
            let p;
            if (s && o && o !== r) {
                const g = s.value.substr(o.prefix.length);
                g && (p = `${r.prefix}${g}`);
            }
            if (!p) {
                const g = i?.defaultFilterValue;
                g === ewi.LAST ? p = this.lastAcceptedPickerValues.get(r) : typeof g == "string" && (p = `${r.prefix}${g}`);
            }
            typeof p == "string" && (t = p);
        }
        const a = s?.picker?.valueSelection, l = s?.picker?.value, c = new Nt, u = c.add(this.quickInputService.createQuickPick({
            useSeparators: !0
        }));
        u.value = t, this.adjustValueSelection(u, r, n), u.placeholder = n?.placeholder ?? r?.placeholder, u.quickNavigate = n?.quickNavigateConfiguration, u.hideInput = !!u.quickNavigate && !s, (typeof n?.itemActivation == "number" || n?.quickNavigateConfiguration) && (u.itemActivation = n?.itemActivation ?? kW.SECOND), u.contextKey = r?.contextKey, u.filterValue = (p)=>p.substring(r ? r.prefix.length : 0);
        let d;
        e && (d = new df, c.add(en.once(u.onWillAccept)((p)=>{
            p.veto(), u.hide();
        }))), c.add(this.registerPickerListeners(u, i, r, t, n));
        const h = c.add(new El);
        if (i && c.add(i.provide(u, h.token, n?.providerOptions)), en.once(u.onDidHide)(()=>{
            u.selectedItems.length === 0 && h.cancel(), c.dispose(), d?.complete(u.selectedItems.slice(0));
        }), u.show(), a && l === t && (u.valueSelection = a), e) return d?.p;
    }
    adjustValueSelection(t, e, n) {
        let i;
        n?.preserveValue ? i = [
            t.value.length,
            t.value.length
        ] : i = [
            e?.prefix.length ?? 0,
            t.value.length
        ], t.valueSelection = i;
    }
    registerPickerListeners(t, e, n, i, r) {
        const s = new Nt, o = this.visibleQuickAccess = {
            picker: t,
            descriptor: n,
            value: i
        };
        return s.add(Pn(()=>{
            o === this.visibleQuickAccess && (this.visibleQuickAccess = void 0);
        })), s.add(t.onDidChangeValue((a)=>{
            const [l] = this.getOrInstantiateProvider(a, r?.enabledProviderPrefixes);
            l !== e ? this.show(a, {
                enabledProviderPrefixes: r?.enabledProviderPrefixes,
                preserveValue: !0,
                providerOptions: r?.providerOptions
            }) : o.value = a;
        })), n && s.add(t.onDidAccept(()=>{
            this.lastAcceptedPickerValues.set(n, t.value);
        })), s;
    }
    getOrInstantiateProvider(t, e) {
        const n = this.registry.getQuickAccessProvider(t);
        if (!n || e && !e?.includes(n.prefix)) return [
            void 0,
            void 0
        ];
        let i = this.mapProviderToDescriptor.get(n);
        return i || (i = this.instantiationService.createInstance(n.ctor), this.mapProviderToDescriptor.set(n, i)), [
            i,
            n
        ];
    }
}, twi = Re([
    F(0, Cl),
    F(1, dn)
], twi);

}
