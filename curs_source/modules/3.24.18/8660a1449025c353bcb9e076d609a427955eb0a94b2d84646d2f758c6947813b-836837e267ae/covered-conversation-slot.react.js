import { MTe, bXt } from "./keepAliveLayoutMeasure.js";
import { E } from "./tslib.es6.js";
import { createContext as KUC } from "./react-runtime/react/esm-index-production.js";
import { Component as VUC } from "./react-runtime/react/esm-index-production.js";
import { jsx as w__ } from "./react-runtime/react/esm-jsx-runtime-production.js";
var S7i, C__;
export { C__, S7i };
var __wakaru_y6s_initialized = false;
export function y6s() {
if (__wakaru_y6s_initialized) return;
__wakaru_y6s_initialized = true;
"use strict";
E(), MTe(), S7i = KUC(!1), C__ = class extends VUC {
    constructor(){
        super(...arguments), this.state = {
            held: null
        };
    }
    static getDerivedStateFromProps(t) {
        return t.covered ? null : {
            held: t.children
        };
    }
    render() {
        const { covered: t } = this.props, { held: e } = this.state;
        return e == null ? null : w__("div", {
            ...{
                0: {
                    className: "glass-jp7ctv"
                },
                1: {
                    className: "glass-1s85apg"
                }
            }[!!t << 0],
            ...t ? {
                [bXt]: ""
            } : {},
            children: w__(S7i.Provider, {
                value: t,
                children: e
            })
        });
    }
};

}
