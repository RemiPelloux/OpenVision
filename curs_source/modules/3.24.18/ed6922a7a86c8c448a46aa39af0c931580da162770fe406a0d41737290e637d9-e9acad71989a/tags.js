import { pZc, qwi } from "./binary.js";
import { Vwi, rZc } from "./bool.js";
import { Ccs, Tcs, sZc, wcs } from "./float.js";
import { Ecs, Ics, aZc, xcs } from "./int.js";
import { byn, ogt } from "./map_2.js";
import { MRe, ycs } from "./merge_2.js";
import { kcs, kyn } from "./null.js";
import { Kwi, fZc } from "./omap.js";
import { Acs, zwi } from "./pairs.js";
import { WEg, cZc } from "./schema.js";
import { GEg, hZc } from "./schema_2.js";
import { Ocs, zEg } from "./schema_3.js";
import { cgt, yyn } from "./seq.js";
import { TZc, Xwi } from "./set.js";
import { Gwi, Syn } from "./string_2.js";
import { Iyn, Lcs, Ncs, xZc } from "./timestamp.js";
import { x } from "./tslib.es6.js";
var Bcs, Ucs, IZc;
export { Bcs, IZc, Ucs };
var __wakaru_KEg_initialized = false;
export function KEg() {
if (__wakaru_KEg_initialized) return;
__wakaru_KEg_initialized = true;
x(), byn(), kcs(), yyn(), Gwi(), rZc(), sZc(), aZc(), WEg(), GEg(), pZc(), ycs(), fZc(), Acs(), zEg(), TZc(), xZc(), Bcs = new Map([
    [
        "core",
        cZc
    ],
    [
        "failsafe",
        [
            ogt,
            cgt,
            Syn
        ]
    ],
    [
        "json",
        hZc
    ],
    [
        "yaml11",
        Ocs
    ],
    [
        "yaml-1.1",
        Ocs
    ]
]), Ucs = {
    binary: qwi,
    bool: Vwi,
    float: Tcs,
    floatExp: Ccs,
    floatNaN: wcs,
    floatTime: Ncs,
    int: xcs,
    intHex: Ics,
    intOct: Ecs,
    intTime: Lcs,
    map: ogt,
    merge: MRe,
    null: kyn,
    omap: Kwi,
    pairs: zwi,
    seq: cgt,
    set: Xwi,
    timestamp: Iyn
}, IZc = {
    "tag:yaml.org,2002:binary": qwi,
    "tag:yaml.org,2002:merge": MRe,
    "tag:yaml.org,2002:omap": Kwi,
    "tag:yaml.org,2002:pairs": zwi,
    "tag:yaml.org,2002:set": Xwi,
    "tag:yaml.org,2002:timestamp": Iyn
};

}
