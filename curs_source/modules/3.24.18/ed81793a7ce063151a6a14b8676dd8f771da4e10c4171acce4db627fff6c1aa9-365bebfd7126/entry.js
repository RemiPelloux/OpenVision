var n = {};
require.r(n), require.d(n, {
    activate: ()=>i,
    deactivate: ()=>a
});
require("./module-2916.js"), require("./module-3261.js"), require("./module-7157.js"), require("./module-112.js"), require("./module-5263.js"), require("./module-2861.js"), require("./module-3825.js"), require("./module-789.js"), require("./module-6878.js"), require("./module-3007.js"), require("./module-254.js"), require("./module-5767.js"), require("./module-3277.js"), require("./module-2502.js"), require("./module-6247.js"), require("./module-7037.js"), require("./module-3486.js"), require("./module-1789.js"), require("./module-116.js"), require("./module-3749.js"), require("./module-985.js"), require("./module-7496.js");
const o = require("os");
if (void 0 === globalThis.navigator) {
    const t = process.version.match(/^v(\d+)/)?.[1] || "0", r = "function" == typeof o.availableParallelism ? o.availableParallelism() : o.cpus().length;
    let e = "en-US";
    try {
        const t = Intl.DateTimeFormat().resolvedOptions().locale;
        t && (e = t);
    } catch  {}
    const n = process.platform, i = `Node.js/${t}`;
    Object.defineProperty(globalThis, "navigator", {
        value: {
            hardwareConcurrency: r,
            language: e,
            languages: [
                e
            ],
            platform: n,
            userAgent: i
        },
        writable: !1,
        configurable: !1,
        enumerable: !0
    });
}
function i(t) {}
function a() {}
var u = exports;
for(var s in n)u[s] = n[s];
n.__esModule && Object.defineProperty(u, "__esModule", {
    value: !0
});
