import { Hn, ws } from "./dom_2.js";
import { o1c } from "./followup-header-motion.js";
import { _On } from "./glass-motion.react.js";
import { OS_ } from "./mm_.js";
import { SFi } from "./react.mjs";
import { E } from "./tslib.es6.js";
import { Component as KVC } from "./react-runtime/react/esm-index-production.js";
var FS_;
export { FS_ };
var __wakaru_QVC_initialized = false;
export function QVC() {
if (__wakaru_QVC_initialized) return;
__wakaru_QVC_initialized = true;
"use strict";
E(), SFi(), Hn(), _On(), o1c(), FS_ = class extends KVC {
    constructor(){
        super(...arguments), this.pinnedTop = null, this.frame = null, this.hold = ()=>{
            const t = this.props.layerRef.current;
            if (t === null || this.pinnedTop === null) return;
            const e = this.pinnedTop - OS_(t);
            t.style.translate = e === 0 ? "" : `0 ${e}px`;
        }, this.follow = ()=>{
            const t = this.props.layerRef.current;
            if (t === null || this.pinnedTop === null) return;
            this.hold();
            const e = ws(t), n = e.requestAnimationFrame(this.follow);
            this.frame = {
                cancel: ()=>e.cancelAnimationFrame(n)
            };
        };
    }
    getSnapshotBeforeUpdate(t) {
        const e = this.props.layerRef.current;
        return t.pinned || !this.props.pinned || e === null ? null : OS_(e);
    }
    componentDidUpdate(t, e, n) {
        n !== null ? (this.pinnedTop = n, this.follow(), queueMicrotask(this.hold)) : t.pinned && !this.props.pinned && this.release();
    }
    componentWillUnmount() {
        this.frame?.cancel();
    }
    release() {
        this.frame?.cancel(), this.frame = null, this.pinnedTop = null;
        const t = this.props.layerRef.current;
        t !== null && (t.style.translate = "");
    }
    render() {
        return this.props.children;
    }
};

}
