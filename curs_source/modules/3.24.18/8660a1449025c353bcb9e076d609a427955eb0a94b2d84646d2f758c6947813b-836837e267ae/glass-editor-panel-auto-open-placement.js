import { dJw, e5i, hJw, pJw, rIs } from "./Asv.js";
import { k_ } from "./editor-panel-tab-kind.js";
import { E } from "./tslib.es6.js";
var Sav, kav, wav;
export { Sav, kav, wav };
var __wakaru_fJw_initialized = false;
export function fJw() {
if (__wakaru_fJw_initialized) return;
__wakaru_fJw_initialized = true;
"use strict";
E(), k_(), Sav = .001, kav = .01, wav = [
    {
        id: "home-pane",
        apply: (t, e)=>{
            const n = e.homePaneIdByKind.get(t);
            if (!(n === void 0 || !e.panes.some((i)=>i.id === n))) return n;
        }
    },
    {
        id: "fill-empty-pane",
        apply: (t, e)=>rIs(e.panes.filter(dJw))
    },
    {
        id: "family-affinity",
        apply: (t, e)=>{
            const n = e5i(t), i = e.panes.filter((s)=>hJw(s, n));
            if (i.length === 0) return;
            const r = e.recentPaneIdByFamily.get(n);
            return i.some((s)=>s.id === r) ? r : rIs(i);
        }
    },
    {
        id: "largest-mixed-pane",
        apply: (t, e)=>{
            const n = e5i(t);
            return rIs(e.panes.filter((i)=>!pJw(i, n)));
        }
    },
    {
        id: "largest-pane",
        apply: (t, e)=>rIs(e.panes)
    }
];

}
