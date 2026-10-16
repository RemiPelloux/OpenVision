import { Fkn } from "./Select.js";
import { sp } from "./icon.js";
import { x } from "./tslib.es6.js";
var Lgs, sdl;
export { Lgs, sdl };
var __wakaru_pFg_initialized = false;
export function pFg() {
if (__wakaru_pFg_initialized) return;
__wakaru_pFg_initialized = true;
"use strict";
x(), sp(), Fkn(), Lgs = [
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
], sdl = Lgs.filter((e)=>e.id !== "graph");

}
