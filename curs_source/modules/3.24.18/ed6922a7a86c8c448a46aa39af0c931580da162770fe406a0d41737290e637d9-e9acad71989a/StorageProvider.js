import { hfd } from "./A3u.js";
import { $E, Pee } from "./Log_3.js";
import { GSt, VSt } from "./SafeJs.js";
import { x } from "./tslib.es6.js";
var _Ht, lHi, Cto, uHi, e1e, V3;
export { Cto, V3, _Ht, e1e, lHi, uHi };
var __wakaru_DJe_initialized = false;
export function DJe() {
if (__wakaru_DJe_initialized) return;
__wakaru_DJe_initialized = true;
"use strict";
x(), Pee(), VSt(), _Ht = {}, lHi = {
    isReady: ()=>!0,
    isReadyResolver: ()=>null,
    getProviderName: ()=>"InMemory",
    getItem: (e)=>_Ht[e] ? _Ht[e] : null,
    setItem: (e, t)=>{
        _Ht[e] = t;
    },
    removeItem: (e)=>{
        delete _Ht[e];
    },
    getAllKeys: ()=>Object.keys(_Ht)
}, Cto = null;
try {
    const e = GSt();
    e && e.localStorage && typeof e.localStorage.getItem == "function" && (Cto = {
        isReady: ()=>!0,
        isReadyResolver: ()=>null,
        getProviderName: ()=>"LocalStorage",
        getItem: (t)=>e.localStorage.getItem(t),
        setItem: (t, n)=>e.localStorage.setItem(t, n),
        removeItem: (t)=>e.localStorage.removeItem(t),
        getAllKeys: ()=>Object.keys(e.localStorage)
    });
} catch  {
    $E.warn("Failed to setup localStorageProvider.");
}
uHi = Cto ?? lHi, e1e = uHi, V3 = {
    isReady: ()=>e1e.isReady(),
    isReadyResolver: ()=>e1e.isReadyResolver(),
    getProviderName: ()=>e1e.getProviderName(),
    getItem: (e)=>hfd(()=>e1e.getItem(e)),
    setItem: (e, t)=>hfd(()=>e1e.setItem(e, t)),
    removeItem: (e)=>e1e.removeItem(e),
    getAllKeys: ()=>e1e.getAllKeys(),
    _setProvider: (e)=>{
        uHi = e, e1e = e;
    },
    _setDisabled: (e)=>{
        e ? e1e = lHi : e1e = uHi;
    }
};

}
