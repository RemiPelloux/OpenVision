"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.NOOP_METER_PROVIDER = exports.NoopMeterProvider = void 0;
const n = require("./module-26746.js");
class o {
    getMeter(e, t, r) {
        return n.NOOP_METER;
    }
}
exports.NoopMeterProvider = o, exports.NOOP_METER_PROVIDER = new o;
