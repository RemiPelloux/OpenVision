"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.permutePath = function(e) {
    if ("/" === e) return [
        "/"
    ];
    const t = [
        e
    ];
    for(; e.length > 1;){
        const r = e.lastIndexOf("/");
        if (0 === r) break;
        e = e.slice(0, r), t.push(e);
    }
    return t.push("/"), t;
};
