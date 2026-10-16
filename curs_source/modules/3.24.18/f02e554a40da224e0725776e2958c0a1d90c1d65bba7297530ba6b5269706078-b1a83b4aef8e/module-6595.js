"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Store = void 0;
exports.Store = class {
    constructor(){
        this.synchronous = !1;
    }
    findCookie(t, e, r, n) {
        throw new Error("findCookie is not implemented");
    }
    findCookies(t, e, r = !1, n) {
        throw new Error("findCookies is not implemented");
    }
    putCookie(t, e) {
        throw new Error("putCookie is not implemented");
    }
    updateCookie(t, e, r) {
        throw new Error("updateCookie is not implemented");
    }
    removeCookie(t, e, r, n) {
        throw new Error("removeCookie is not implemented");
    }
    removeCookies(t, e, r) {
        throw new Error("removeCookies is not implemented");
    }
    removeAllCookies(t) {
        throw new Error("removeAllCookies is not implemented");
    }
    getAllCookies(t) {
        throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
};
