import { eMe } from "./attention.js";
import { dur } from "./autolink.js";
import { CRt } from "./block-quote.js";
import { SRt } from "./character-escape.js";
import { ERt } from "./character-reference.js";
import { TRt } from "./code-fenced.js";
import { tMe } from "./code-indented.js";
import { Eur } from "./code-text.js";
import { Bur } from "./definition_2.js";
import { Gur } from "./hard-break-escape.js";
import { Zur } from "./heading-atx.js";
import { Qur } from "./html-flow.js";
import { rdr } from "./html-text.js";
import { DRt } from "./index_81.js";
import { rMe } from "./label-end.js";
import { fdr } from "./label-start-image.js";
import { gdr } from "./label-start-link.js";
import { iMe } from "./line-ending.js";
import { Ew } from "./list_2.js";
import { LRt } from "./setext-underline.js";
import { $fr, Mfr } from "./text_2.js";
import { Ffe } from "./thematic-break_2.js";
var Pfr, jfr, Lfr, Dfr, Ffr, Ofr, zfr, Bfr, qfr;
export { Bfr, Dfr, Ffr, Lfr, Ofr, Pfr, jfr, qfr, zfr };
var __wakaru_Ixi_initialized = false;
export function Ixi() {
if (__wakaru_Ixi_initialized) return;
__wakaru_Ixi_initialized = true;
DRt(), Mfr(), Pfr = {
    42: Ew,
    43: Ew,
    45: Ew,
    48: Ew,
    49: Ew,
    50: Ew,
    51: Ew,
    52: Ew,
    53: Ew,
    54: Ew,
    55: Ew,
    56: Ew,
    57: Ew,
    62: CRt
}, jfr = {
    91: Bur
}, Lfr = {
    [-2]: tMe,
    [-1]: tMe,
    32: tMe
}, Dfr = {
    35: Zur,
    42: Ffe,
    45: [
        LRt,
        Ffe
    ],
    60: Qur,
    61: LRt,
    95: Ffe,
    96: TRt,
    126: TRt
}, Ffr = {
    38: ERt,
    92: SRt
}, Ofr = {
    [-5]: iMe,
    [-4]: iMe,
    [-3]: iMe,
    33: fdr,
    38: ERt,
    42: eMe,
    60: [
        dur,
        rdr
    ],
    91: gdr,
    92: [
        Gur,
        SRt
    ],
    93: rMe,
    95: eMe,
    96: Eur
}, zfr = {
    null: [
        eMe,
        $fr
    ]
}, Bfr = {
    null: [
        42,
        95
    ]
}, qfr = {
    null: []
};

}
