import { Nde, QR } from "./Log_2.js";
import { QQu } from "./SZu.js";
import { E6t, I6t } from "./SafeJs.js";
import { E } from "./tslib.es6.js";
var Xdn, mgr, tEo, ggr, $Oe, u7;
export { $Oe, Xdn, ggr, mgr, tEo, u7 };
var __wakaru_a_t_initialized = false;
export function a_t() {
if (__wakaru_a_t_initialized) return;
__wakaru_a_t_initialized = true;
"use strict";
E(), Nde(), I6t(), Xdn = {}, mgr = {
    isReady: ()=>!0,
    isReadyResolver: ()=>null,
    getProviderName: ()=>"InMemory",
    getItem: (t)=>Xdn[t] ? Xdn[t] : null,
    setItem: (t, e)=>{
        Xdn[t] = e;
    },
    removeItem: (t)=>{
        delete Xdn[t];
    },
    getAllKeys: ()=>Object.keys(Xdn)
}, tEo = null;
try {
    const t = E6t();
    t && t.localStorage && typeof t.localStorage.getItem == "function" && (tEo = {
        isReady: ()=>!0,
        isReadyResolver: ()=>null,
        getProviderName: ()=>"LocalStorage",
        getItem: (e)=>t.localStorage.getItem(e),
        setItem: (e, n)=>t.localStorage.setItem(e, n),
        removeItem: (e)=>t.localStorage.removeItem(e),
        getAllKeys: ()=>Object.keys(t.localStorage)
    });
} catch  {
    QR.warn("Failed to setup localStorageProvider.");
}
ggr = tEo ?? mgr, $Oe = ggr, u7 = {
    isReady: ()=>$Oe.isReady(),
    isReadyResolver: ()=>$Oe.isReadyResolver(),
    getProviderName: ()=>$Oe.getProviderName(),
    getItem: (t)=>QQu(()=>$Oe.getItem(t)),
    setItem: (t, e)=>QQu(()=>$Oe.setItem(t, e)),
    removeItem: (t)=>$Oe.removeItem(t),
    getAllKeys: ()=>$Oe.getAllKeys(),
    _setProvider: (t)=>{
        ggr = t, $Oe = t;
    },
    _setDisabled: (t)=>{
        t ? $Oe = mgr : $Oe = ggr;
    }
};

}
