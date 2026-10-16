"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.baggageEntryMetadataFromString = exports.createBaggage = void 0;
const n = require("./module-30071.js"), s = require("./module-91169.js"), o = require("./module-7778.js"), i = n.DiagAPI.instance();
exports.createBaggage = function(e = {}) {
    return new s.BaggageImpl(new Map(Object.entries(e)));
}, exports.baggageEntryMetadataFromString = function(e) {
    return "string" != typeof e && (i.error("Cannot create baggage metadata from unknown type: " + typeof e), e = ""), {
        __TYPE__: o.baggageEntryMetadataSymbol,
        toString: ()=>e
    };
};
