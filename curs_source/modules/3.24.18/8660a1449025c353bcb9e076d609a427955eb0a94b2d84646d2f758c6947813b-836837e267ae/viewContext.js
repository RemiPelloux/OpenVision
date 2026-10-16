import { CDy, D$d } from "./editorTheme.js";
import { E } from "./tslib.es6.js";
var N$d;
export { N$d };
var __wakaru_TDy_initialized = false;
export function TDy() {
if (__wakaru_TDy_initialized) return;
__wakaru_TDy_initialized = true;
"use strict";
E(), CDy(), N$d = class {
    constructor(t, e, n){
        this.configuration = t, this.theme = new D$d(e), this.viewModel = n, this.viewLayout = n.viewLayout;
    }
    addEventHandler(t) {
        this.viewModel.addViewEventHandler(t);
    }
    removeEventHandler(t) {
        this.viewModel.removeViewEventHandler(t);
    }
};

}
