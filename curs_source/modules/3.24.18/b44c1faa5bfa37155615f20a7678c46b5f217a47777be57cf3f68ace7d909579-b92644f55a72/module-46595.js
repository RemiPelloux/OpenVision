"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Store = void 0;
exports.Store = class {
    constructor(){
        this.synchronous = !1;
    }
    findCookie(e, t, r, n) {
        throw new Error("findCookie is not implemented");
    }
    findCookies(e, t, r = !1, n) {
        throw new Error("findCookies is not implemented");
    }
    putCookie(e, t) {
        throw new Error("putCookie is not implemented");
    }
    updateCookie(e, t, r) {
        throw new Error("updateCookie is not implemented");
    }
    removeCookie(e, t, r, n) {
        throw new Error("removeCookie is not implemented");
    }
    removeCookies(e, t, r) {
        throw new Error("removeCookies is not implemented");
    }
    removeAllCookies(e) {
        throw new Error("removeAllCookies is not implemented");
    }
    getAllCookies(e) {
        throw new Error("getAllCookies is not implemented (therefore jar cannot be serialized)");
    }
};
