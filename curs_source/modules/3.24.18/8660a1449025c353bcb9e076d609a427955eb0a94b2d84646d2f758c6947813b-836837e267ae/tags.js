import { Gxr, jJd } from "./binary.js";
import { Hxr, PJd } from "./bool.js";
import { CYo, EYo, MJd, TYo } from "./float.js";
import { AYo, IYo, NJd, xYo } from "./int.js";
import { Lai, b8t } from "./map_2.js";
import { SYo, jHe } from "./merge_2.js";
import { Bai, wYo } from "./null.js";
import { WJd, zxr } from "./omap.js";
import { RYo, qxr } from "./pairs.js";
import { LJd, l4y } from "./schema.js";
import { UJd, c4y } from "./schema_2.js";
import { FYo, p4y } from "./schema_3.js";
import { Oai, S8t } from "./seq.js";
import { Kxr, QJd } from "./set.js";
import { $xr, Fai } from "./string_2.js";
import { Gai, LYo, OYo, eeh } from "./timestamp.js";
import { E } from "./tslib.es6.js";
var UYo, jYo, teh;
export { UYo, jYo, teh };
var __wakaru_m4y_initialized = false;
export function m4y() {
if (__wakaru_m4y_initialized) return;
__wakaru_m4y_initialized = true;
E(), Lai(), wYo(), Oai(), $xr(), PJd(), MJd(), NJd(), l4y(), c4y(), jJd(), SYo(), WJd(), RYo(), p4y(), QJd(), eeh(), UYo = new Map([
    [
        "core",
        LJd
    ],
    [
        "failsafe",
        [
            b8t,
            S8t,
            Fai
        ]
    ],
    [
        "json",
        UJd
    ],
    [
        "yaml11",
        FYo
    ],
    [
        "yaml-1.1",
        FYo
    ]
]), jYo = {
    binary: Gxr,
    bool: Hxr,
    float: EYo,
    floatExp: TYo,
    floatNaN: CYo,
    floatTime: OYo,
    int: xYo,
    intHex: AYo,
    intOct: IYo,
    intTime: LYo,
    map: b8t,
    merge: jHe,
    null: Bai,
    omap: zxr,
    pairs: qxr,
    seq: S8t,
    set: Kxr,
    timestamp: Gai
}, teh = {
    "tag:yaml.org,2002:binary": Gxr,
    "tag:yaml.org,2002:merge": jHe,
    "tag:yaml.org,2002:omap": zxr,
    "tag:yaml.org,2002:pairs": qxr,
    "tag:yaml.org,2002:set": Kxr,
    "tag:yaml.org,2002:timestamp": Gai
};

}
