import { liv } from "./BA.js";
import { L3, Rke } from "./SZu.js";
import { __ } from "./tracing_2.js";
import { E } from "./tslib.es6.js";
import { jsx as fKw } from "./react-runtime/react/esm-jsx-runtime-production.js";
import { Fragment as gKw } from "./react-runtime/react/esm-index-production.js";
import { Component as mKw } from "./react-runtime/react/esm-index-production.js";
var Vme;
export { Vme };
var __wakaru_MDe_initialized = false;
export function MDe() {
if (__wakaru_MDe_initialized) return;
__wakaru_MDe_initialized = true;
"use strict";
E(), __(), Vme = class extends mKw {
    constructor(t){
        super(t), this.handleReset = ()=>{
            this.setState((e)=>({
                    hasError: !1,
                    error: null,
                    componentStack: null,
                    resetVersion: e.resetVersion + 1
                }));
        }, this.state = {
            hasError: !1,
            error: null,
            componentStack: null,
            resetVersion: 0
        };
    }
    static getDerivedStateFromError(t) {
        return {
            hasError: !0,
            error: liv(t)
        };
    }
    componentDidCatch(t, e) {
        const n = liv(t);
        Rke({
            category: "glass.error-boundary",
            level: "error",
            message: `Glass boundary crashed: ${this.props.boundaryName}`,
            data: {
                boundaryName: this.props.boundaryName,
                componentStack: e.componentStack
            }
        }), L3(n), console.error(`[GlassErrorBoundary:${this.props.boundaryName}]`, n, e), this.setState({
            componentStack: e.componentStack ?? null
        }), this.props.onError?.(n, e, this.props.boundaryName);
    }
    render() {
        return this.state.hasError ? this.props.fallback ? this.props.fallback({
            boundaryName: this.props.boundaryName,
            error: this.state.error,
            componentStack: this.state.componentStack,
            reset: this.handleReset
        }) : null : fKw(gKw, {
            children: this.props.children
        }, this.state.resetVersion);
    }
};

}
