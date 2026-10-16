import { Ei, Qe, xr } from "./Iwo.js";
import { E } from "./tslib.es6.js";
var GXu;
export { GXu };
var __wakaru_POe_initialized = false;
export function POe() {
if (__wakaru_POe_initialized) return;
__wakaru_POe_initialized = true;
"use strict";
E(), Ei(), Qe(), GXu = class {
    constructor(t, e){
        this.reducer = t, this.options = e, this.state = {
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
    write(t) {
        if (!this.state.destroyed) {
            if (this.state.flowing) this.emitData(t);
            else if (this.buffer.data.push(t), typeof this.options?.highWaterMark == "number" && this.buffer.data.length > this.options.highWaterMark) return new Promise((e)=>this.pendingWritePromises.push(e));
        }
    }
    error(t) {
        this.state.destroyed || (this.state.flowing ? this.emitError(t) : this.buffer.error.push(t));
    }
    end(t) {
        this.state.destroyed || (typeof t < "u" && this.write(t), this.state.flowing ? (this.emitEnd(), this.destroy()) : this.state.ended = !0);
    }
    emitData(t) {
        this.listeners.data.slice(0).forEach((e)=>e(t));
    }
    emitError(t) {
        this.listeners.error.length === 0 ? xr(t) : this.listeners.error.slice(0).forEach((e)=>e(t));
    }
    emitEnd() {
        this.listeners.end.slice(0).forEach((t)=>t());
    }
    on(t, e) {
        if (!this.state.destroyed) switch(t){
            case "data":
                this.listeners.data.push(e), this.resume();
                break;
            case "end":
                this.listeners.end.push(e), this.state.flowing && this.flowEnd() && this.destroy();
                break;
            case "error":
                this.listeners.error.push(e), this.state.flowing && this.flowErrors();
                break;
        }
    }
    removeListener(t, e) {
        if (this.state.destroyed) return;
        let n;
        switch(t){
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
            const i = n.indexOf(e);
            i >= 0 && n.splice(i, 1);
        }
    }
    flowData() {
        if (this.buffer.data.length === 0) return;
        if (typeof this.reducer == "function") {
            const e = this.buffer.data.length === 1 ? this.buffer.data[0] : this.reducer(this.buffer.data);
            this.emitData(e);
        } else for (const e of this.buffer.data)this.emitData(e);
        this.buffer.data.length = 0;
        const t = [
            ...this.pendingWritePromises
        ];
        this.pendingWritePromises.length = 0, t.forEach((e)=>e());
    }
    flowErrors() {
        if (this.listeners.error.length > 0) {
            for (const t of this.buffer.error)this.emitError(t);
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
