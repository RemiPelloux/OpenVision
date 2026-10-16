import { Se, ns, si } from "./HVr.js";
import { x } from "./tslib.es6.js";
var hIc;
export { hIc };
var __wakaru_nwe_initialized = false;
export function nwe() {
if (__wakaru_nwe_initialized) return;
__wakaru_nwe_initialized = true;
"use strict";
x(), si(), Se(), hIc = class {
    constructor(e, t){
        this.reducer = e, this.options = t, this.state = {
            flowing: !1,
            ended: !1,
            destroyed: !1
        }, this.buffer = {
            data: [],
            error: []
        }, this.listeners = {
            data: [],
            error: [],
            end: []
        }, this.pendingWritePromises = [];
    }
    pause() {
        this.state.destroyed || (this.state.flowing = !1);
    }
    resume() {
        this.state.destroyed || this.state.flowing || (this.state.flowing = !0, this.flowData(), this.flowErrors(), this.flowEnd());
    }
    write(e) {
        if (!this.state.destroyed) {
            if (this.state.flowing) this.emitData(e);
            else if (this.buffer.data.push(e), typeof this.options?.highWaterMark == "number" && this.buffer.data.length > this.options.highWaterMark) return new Promise((t)=>this.pendingWritePromises.push(t));
        }
    }
    error(e) {
        this.state.destroyed || (this.state.flowing ? this.emitError(e) : this.buffer.error.push(e));
    }
    end(e) {
        this.state.destroyed || (typeof e < "u" && this.write(e), this.state.flowing ? (this.emitEnd(), this.destroy()) : this.state.ended = !0);
    }
    emitData(e) {
        this.listeners.data.slice(0).forEach((t)=>t(e));
    }
    emitError(e) {
        this.listeners.error.length === 0 ? ns(e) : this.listeners.error.slice(0).forEach((t)=>t(e));
    }
    emitEnd() {
        this.listeners.end.slice(0).forEach((e)=>e());
    }
    on(e, t) {
        if (!this.state.destroyed) switch(e){
            case "data":
                this.listeners.data.push(t), this.resume();
                break;
            case "end":
                this.listeners.end.push(t), this.state.flowing && this.flowEnd() && this.destroy();
                break;
            case "error":
                this.listeners.error.push(t), this.state.flowing && this.flowErrors();
                break;
        }
    }
    removeListener(e, t) {
        if (this.state.destroyed) return;
        let n;
        switch(e){
            case "data":
                n = this.listeners.data;
                break;
            case "end":
                n = this.listeners.end;
                break;
            case "error":
                n = this.listeners.error;
                break;
        }
        if (n) {
            const i = n.indexOf(t);
            i >= 0 && n.splice(i, 1);
        }
    }
    flowData() {
        if (this.buffer.data.length === 0) return;
        if (typeof this.reducer == "function") {
            const t = this.buffer.data.length === 1 ? this.buffer.data[0] : this.reducer(this.buffer.data);
            this.emitData(t);
        } else for (const t of this.buffer.data)this.emitData(t);
        this.buffer.data.length = 0;
        const e = [
            ...this.pendingWritePromises
        ];
        this.pendingWritePromises.length = 0, e.forEach((t)=>t());
    }
    flowErrors() {
        if (this.listeners.error.length > 0) {
            for (const e of this.buffer.error)this.emitError(e);
            this.buffer.error.length = 0;
        }
    }
    flowEnd() {
        return this.state.ended ? (this.emitEnd(), this.listeners.end.length > 0) : !1;
    }
    destroy() {
        this.state.destroyed || (this.state.destroyed = !0, this.state.ended = !0, this.buffer.data.length = 0, this.buffer.error.length = 0, this.listeners.data.length = 0, this.listeners.error.length = 0, this.listeners.end.length = 0, this.pendingWritePromises.length = 0);
    }
};

}
