import { h } from "./tslib.es6.js";
var yke;
export { yke };
var __wakaru_xit_initialized = false;
export function xit() {
if (__wakaru_xit_initialized) return;
__wakaru_xit_initialized = true;
"use strict";
h(), yke = class {
    constructor(e){
        this.service = e;
    }
    listen(e, t) {
        throw new Error(`Event not found: ${t}`);
    }
    async call(e, t, n) {
        switch(t){
            case "isSupported":
                return this.service.isSupported();
            case "hasPermission":
                return this.service.hasPermission();
            case "requestPermission":
                return this.service.requestPermission();
            case "showNotification":
                return this.service.showNotification(n);
            case "setBadgeCount":
                return this.service.setBadgeCount(n);
            case "closeNotification":
                return this.service.closeNotification(n);
        }
        throw new Error(`Method not found: ${t}`);
    }
};

}
