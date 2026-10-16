import { Am, cs } from "./Sol.js";
import { ZoC } from "./colorTokens.js";
import { Hn } from "./dom_2.js";
import { mk } from "./gallerySection.js";
import { eD } from "./scrollableDiv.js";
import { vo } from "./solidContext.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var bzv, yzv, Szv, kzv, wzv, Czv, e6n, _en, Q9i, ben, J9i, yen, Sen, Tzv, Ezv;
export { Czv, Ezv, J9i, Q9i, Sen, Szv, Tzv, _en, ben, bzv, e6n, kzv, wzv, yen, yzv };
var __wakaru_raC_initialized = false;
export function raC() {
if (__wakaru_raC_initialized) return;
__wakaru_raC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), at(), at(), at(), at(), Am(), pi(), Hn(), vo(), ZoC(), eD(), mk(), bzv = wt("<span>Copied!"), yzv = wt("<div><div></div><span>: "), Szv = wt("<button>Clear Search"), kzv = wt('<div><input type=text placeholder="Enter color (#RRGGBB, rgb(r,g,b), etc.)"autofocus><button>Find'), wzv = wt("<div><div></div><span>Search color: <!> (Showing similar colors below)"), Czv = wt('<div><div><input type=text placeholder="Search colors..."><button></button></div><div></div><div><button>'), e6n = cs(""), _en = cs(null), Q9i = cs(!1), ben = cs(!1), J9i = cs(""), yen = cs([]), Sen = cs(""), Tzv = cs(null, (t, e, n)=>{
    e(Sen, n.searchColor), e(yen, n.distances), n.distances.length > 0 && e(_en, 0), e(ben, !1);
}), Ezv = cs(null, (t, e)=>{
    e(e6n, ""), e(yen, []), e(Sen, ""), e(_en, null);
});

}
