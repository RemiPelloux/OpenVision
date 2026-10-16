import { Obn } from "./Select.js";
import { fd } from "./icon.js";
import { E } from "./tslib.es6.js";
var eMr, Hna;
export { Hna, eMr };
var __wakaru_Wna_initialized = false;
export function Wna() {
if (__wakaru_Wna_initialized) return;
__wakaru_Wna_initialized = true;
"use strict";
E(), fd(), Obn(), eMr = [
    {
        id: "kanban",
        label: "Board",
        iconName: "board-kanban"
    },
    {
        id: "list",
        label: "List",
        iconName: "list-bullets"
    },
    {
        id: "grid",
        label: "Grid",
        iconName: "grid"
    },
    {
        id: "graph",
        label: "Graph",
        iconName: "graph"
    }
], Hna = eMr.filter((t)=>t.id !== "graph");

}
