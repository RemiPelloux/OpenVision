import { f__ } from "./comment-input-position.ts";
import { v__ } from "./launch-group-membership.ts";
import { vHh } from "./picked-element.ts";
import { x } from "./tslib.es6.js";
function z0t(e, t) {
    return `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${t})`;
}
var esr, ___, b__, y__;
export { ___, b__, esr, y__, z0t };
var __wakaru__Hh_initialized = false;
export function _Hh() {
if (__wakaru__Hh_initialized) return;
__wakaru__Hh_initialized = true;
x(), vHh(), f__(), v__(), vHh(), esr = [
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
], ___ = esr.map((e)=>e.name), b__ = esr.map(({ rgb: e })=>({
        fill: z0t(e, .04),
        stroke: z0t(e, .5),
        scribbleStroke: z0t(e, .92)
    })), y__ = esr.map(({ rgb: e })=>({
        border: z0t(e, 1),
        bg: z0t(e, .1),
        hoverBorder: z0t(e, .3),
        hoverBg: z0t(e, .02)
    }));

}
