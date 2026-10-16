import { D_g, y6c } from "./editorTheme.js";
import { x } from "./tslib.es6.js";
var S6c;
export { S6c };
var __wakaru_M_g_initialized = false;
export function M_g() {
if (__wakaru_M_g_initialized) return;
__wakaru_M_g_initialized = true;
"use strict";
x(), D_g(), S6c = class {
    constructor(e, t, n){
        this.configuration = e, this.theme = new y6c(t), this.viewModel = n, this.viewLayout = n.viewLayout;
    }
    addEventHandler(e) {
        this.viewModel.addViewEventHandler(e);
    }
    removeEventHandler(e) {
        this.viewModel.removeViewEventHandler(e);
    }
};

}
