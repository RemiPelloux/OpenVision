import { aXt } from "./Ycg.js";
import { xtw } from "./comment-input-position.ts";
import { Ptw } from "./launch-group-membership.ts";
import { Nyf } from "./picked-element.ts";
import { E } from "./tslib.es6.js";
var Wyf, Gyf, qyf, lXt, zyf, Vyf, Kyf, RDn, Fbs, Bbs, nDi, Yyf, Ubs, PDn;
export { Bbs, Fbs, Gyf, Kyf, PDn, RDn, Ubs, Vyf, Wyf, Yyf, lXt, nDi, qyf, zyf };
var __wakaru_ece_initialized = false;
export function ece() {
if (__wakaru_ece_initialized) return;
__wakaru_ece_initialized = true;
E(), Nyf(), xtw(), Ptw(), Nyf(), Wyf = 48, Gyf = 120, qyf = 12, lXt = 5, zyf = 2, Vyf = [
    8,
    6
], Kyf = 2.5, RDn = 0, Fbs = [
    {
        name: "blue",
        rgb: [
            58,
            150,
            221
        ],
        cssVar: "--cursor-blue"
    },
    {
        name: "purple",
        rgb: [
            155,
            89,
            182
        ],
        cssVar: "--cursor-purple"
    },
    {
        name: "green",
        rgb: [
            39,
            174,
            96
        ],
        cssVar: "--cursor-green"
    },
    {
        name: "orange",
        rgb: [
            242,
            153,
            74
        ],
        cssVar: "--cursor-orange"
    },
    {
        name: "cyan",
        rgb: [
            0,
            184,
            169
        ],
        cssVar: "--cursor-cyan"
    },
    {
        name: "magenta",
        rgb: [
            219,
            68,
            134
        ],
        cssVar: "--cursor-magenta"
    },
    {
        name: "red",
        rgb: [
            235,
            87,
            87
        ],
        cssVar: "--cursor-red"
    },
    {
        name: "yellow",
        rgb: [
            170,
            175,
            18
        ],
        cssVar: "--cursor-yellow"
    }
], Bbs = Fbs.map((t)=>t.name), nDi = Fbs.map(({ rgb: t })=>({
        fill: aXt(t, .04),
        stroke: aXt(t, .5),
        scribbleStroke: aXt(t, .92)
    })), Yyf = Fbs.map(({ rgb: t })=>({
        border: aXt(t, 1),
        bg: aXt(t, .1),
        hoverBorder: aXt(t, .3),
        hoverBg: aXt(t, .02)
    })), Ubs = [
    1,
    2,
    3,
    4,
    5,
    6,
    7
], PDn = 2e3;

}
