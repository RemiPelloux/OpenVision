"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.permutePath = function(t) {
    if ("/" === t) return [
        "/"
    ];
    const e = [
        t
    ];
    for(; t.length > 1;){
        const r = t.lastIndexOf("/");
        if (0 === r) break;
        t = t.slice(0, r), e.push(t);
    }
    return e.push("/"), e;
};
