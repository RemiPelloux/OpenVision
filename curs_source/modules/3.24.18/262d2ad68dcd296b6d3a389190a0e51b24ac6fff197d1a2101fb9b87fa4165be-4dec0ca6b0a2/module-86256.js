"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.dateTimestampProvider = void 0, exports.dateTimestampProvider = {
    now: ()=>(exports.dateTimestampProvider.delegate || Date).now(),
    delegate: void 0
};
