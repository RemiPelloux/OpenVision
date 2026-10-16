"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.performanceTimestampProvider = void 0, exports.performanceTimestampProvider = {
    now: ()=>(exports.performanceTimestampProvider.delegate || performance).now(),
    delegate: void 0
};
