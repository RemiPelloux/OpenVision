import { Swr } from "./common-lisp.mjs";
import { Kyr } from "./dotenv.mjs";
import { Jyr } from "./elixir.mjs";
import { t2r } from "./elm.mjs";
import { C2r } from "./erb.mjs";
import { $2r } from "./erlang.mjs";
import { M2r } from "./fish.mjs";
import { j2r } from "./fsharp.mjs";
import { F2r } from "./go.mjs";
import { QLt } from "./graphql.mjs";
import { B2r } from "./groovy.mjs";
import { XLt } from "./haml.mjs";
import { G2r } from "./haskell.mjs";
import { Z2r } from "./hcl.mjs";
import { X2r } from "./hlsl.mjs";
import { Q2r } from "./ini.mjs";
import { YLt } from "./java.mjs";
import { nwr } from "./json5.mjs";
import { awr } from "./jsonc.mjs";
import { JLt } from "./jsx.mjs";
import { pwr } from "./julia.mjs";
import { hwr } from "./kotlin.mjs";
import { _wr } from "./latex.mjs";
import { xwr } from "./less.mjs";
import { gRe } from "./lua.mjs";
import { Twr } from "./make.mjs";
import { hhe } from "./markdown.mjs";
import { _Re } from "./python.mjs";
import { kRe } from "./r.mjs";
import { yRe } from "./ruby.mjs";
import { GJ } from "./xml.mjs";
import { bRe } from "./yaml.mjs";
var TY = Object.defineProperty, E_i = Object.getOwnPropertyDescriptor, HAt = Object.getOwnPropertyNames, A_i = Object.prototype.hasOwnProperty, oYn = (r)=>{
    throw TypeError(r);
}, $_i = (r, e, a)=>e in r ? TY(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : r[e] = a, ui = (r, e)=>{
    for(var a in e)TY(r, a, {
        get: e[a],
        enumerable: !0
    });
}, sYn = (r, e, a, s)=>{
    if (e && typeof e == "object" || typeof e == "function") for (let l of HAt(e))!A_i.call(r, l) && l !== a && TY(r, l, {
        get: ()=>e[l],
        enumerable: !(s = E_i(e, l)) || s.enumerable
    });
    return r;
}, ZAt = (r, e, a)=>e.has(r) || oYn("Cannot " + a);
export var Xyr = {};
ui(Xyr, {
    default: ()=>Jyr
});
export var Qyr = {};
ui(Qyr, {
    default: ()=>t2r
});
export var n2r = {};
ui(n2r, {
    default: ()=>XLt
});
export var a2r = {};
ui(a2r, {
    default: ()=>YLt
});
export var c2r = {};
ui(c2r, {
    default: ()=>GJ
});
export var u2r = {};
ui(u2r, {
    default: ()=>JLt
});
export var m2r = {};
ui(m2r, {
    default: ()=>QLt
});
export var g2r = {};
ui(g2r, {
    default: ()=>gRe
});
export var y2r = {};
ui(y2r, {
    default: ()=>bRe
});
export var _2r = {};
ui(_2r, {
    default: ()=>yRe
});
export var v2r = {};
ui(v2r, {
    default: ()=>C2r
});
export var S2r = {};
ui(S2r, {
    default: ()=>hhe
});
export var A2r = {};
ui(A2r, {
    default: ()=>$2r
});
export var I2r = {};
ui(I2r, {
    default: ()=>M2r
});
export var R2r = {};
ui(R2r, {
    default: ()=>j2r
});
export var L2r = {};
ui(L2r, {
    default: ()=>F2r
});
export var O2r = {};
ui(O2r, {
    default: ()=>B2r
});
export var q2r = {};
ui(q2r, {
    default: ()=>G2r
});
export var W2r = {};
ui(W2r, {
    default: ()=>Z2r
});
export var V2r = {};
ui(V2r, {
    default: ()=>X2r
});
export var Y2r = {};
ui(Y2r, {
    default: ()=>Q2r
});
export var ewr = {};
ui(ewr, {
    default: ()=>nwr
});
export var rwr = {};
ui(rwr, {
    default: ()=>awr
});
export var owr = {};
ui(owr, {
    default: ()=>_Re
});
export var cwr = {};
ui(cwr, {
    default: ()=>kRe
});
export var uwr = {};
ui(uwr, {
    default: ()=>pwr
});
export var mwr = {};
ui(mwr, {
    default: ()=>hwr
});
export var ywr = {};
ui(ywr, {
    default: ()=>_wr
});
export var kwr = {};
ui(kwr, {
    default: ()=>xwr
});
export var Ewr = {};
ui(Ewr, {
    default: ()=>Swr
});
export var $wr = {};
ui($wr, {
    default: ()=>Twr
});
export { $_i, Kyr, ZAt, oYn, sYn, ui };

export var Zyr = {};
Object.defineProperty(Zyr, "default", {
    enumerable: true,
    get: ()=>Kyr
});
