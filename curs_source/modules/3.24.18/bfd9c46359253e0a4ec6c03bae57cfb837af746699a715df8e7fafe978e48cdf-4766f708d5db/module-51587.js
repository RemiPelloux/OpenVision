"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.finalize = void 0;
const n = require("./module-51078.js");
exports.finalize = function(e) {
    return (t)=>new n.Observable((r)=>{
            t.subscribe(r), r.add(e);
        });
};
