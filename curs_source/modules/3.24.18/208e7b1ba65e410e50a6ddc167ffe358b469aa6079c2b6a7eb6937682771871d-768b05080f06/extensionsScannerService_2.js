import { Fr, ii } from "./environment.js";
import { Du, M1 } from "./extensionsProfileScannerService.js";
import { c_e, l_e } from "./extensionsScannerService.js";
import { Wt, cn } from "./files.js";
import { ne, ni } from "./instantiation.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { Tt, et } from "./productService.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Ls, Us } from "./userDataProfile.js";
var N1;
export { N1 };
var __wakaru_jZe_initialized = false;
export function jZe() {
if (__wakaru_jZe_initialized) return;
__wakaru_jZe_initialized = true;
"use strict";
h(), ye(), Fr(), M1(), l_e(), Wt(), ne(), te(), Tt(), Oi(), Us(), N1 = class extends c_e {
    constructor(e, t, n, r, s, i, a, o){
        super(x.file(s.builtinExtensionsPath), x.file(s.extensionsPath), s.userHome, e.defaultProfile, e, t, n, r, s, i, a, o);
    }
}, N1 = B([
    w(0, Ls),
    w(1, Du),
    w(2, cn),
    w(3, Z),
    w(4, ii),
    w(5, et),
    w(6, Br),
    w(7, ni)
], N1);

}
