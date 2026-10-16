"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Deferred = void 0;
exports.Deferred = class {
    constructor(){
        this.resolve = ()=>null, this.reject = ()=>null, this.promise = new Promise((e, t)=>{
            this.reject = t, this.resolve = e;
        });
    }
};
