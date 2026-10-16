"use strict";
require.d(exports, {
    EW: ()=>_,
    H1: ()=>A,
    M$: ()=>l,
    QE: ()=>a,
    Wo: ()=>g,
    XX: ()=>s,
    bn: ()=>i,
    gW: ()=>m,
    km: ()=>p,
    nx: ()=>v,
    so: ()=>c
});
var n = require("./module-91398.js");
const s = "agent_exec", o = "agent_host", i = {
    disableConsoleFallback: !0
};
function a(e) {
    return {
        ...e,
        subkey: o
    };
}
function c(e) {
    l("transport", e.level, e.message, e.metadata, e.error);
}
function l(e, t, r, s, a) {
    const c = {
        ...s,
        runtime: o
    };
    try {
        switch(t){
            case "debug":
                n.cursor.logStructuredDebug(e, r, c, i);
                break;
            case "info":
                n.cursor.logStructuredInfo(e, r, c, i);
                break;
            case "warn":
                n.cursor.logStructuredWarn(e, r, c, i);
                break;
            case "error":
                n.cursor.logStructuredError(e, r, a instanceof Error ? a : void 0, c, i);
        }
    } catch  {}
}
let u;
function d() {
    return void 0 === u && (u = n.window.createOutputChannel("Cursor Agent Host", {
        log: !0
    })), u;
}
function p() {
    return d();
}
const m = {
    trace (e) {
        d().trace(e);
    },
    isTraceEnabled () {
        const e = d().logLevel;
        return e !== n.LogLevel.Off && e <= n.LogLevel.Trace;
    },
    info (e) {
        d().info(e);
    },
    warn (e) {
        d().warn(e);
    },
    error (e, t) {
        const r = d();
        t instanceof Error ? r.error(t, e) : void 0 !== t ? r.error(`${e}: ${String(t)}`) : r.error(e);
    },
    dispose () {
        u?.dispose(), u = void 0;
    }
};
let h;
function f() {
    return h ??= n.window.createOutputChannel("Cursor Agent Host Network", {
        log: !0
    }), h;
}
const g = {
    trace (e, ...t) {
        f().trace(e, ...t);
    },
    debug (e, ...t) {
        f().debug(e, ...t);
    },
    info (e, ...t) {
        f().info(e, ...t);
    },
    warn (e, ...t) {
        f().warn(e, ...t);
    },
    error (e, ...t) {
        f().error(e, ...t);
    },
    dispose () {
        h?.dispose(), h = void 0;
    }
};
let y;
function w() {
    return void 0 === y && (y = n.window.createOutputChannel("Cursor Agent Host Storage", {
        log: !0
    })), y;
}
const v = {
    debug (e) {
        w().debug(e);
    },
    info (e) {
        w().info(e);
    },
    warn (e) {
        w().warn(e);
    },
    error (e, t) {
        const r = w();
        t instanceof Error ? r.error(t, e) : void 0 !== t ? r.error(`${e}: ${String(t)}`) : r.error(e);
    },
    dispose () {
        y?.dispose(), y = void 0;
    }
};
function _(e, t) {
    if (m.error(e, t), function(e, t) {
        try {
            n.cursor.logStructuredError(s, e, t instanceof Error ? t : void 0, a(), i);
        } catch  {}
    }(e, t), void 0 !== t) throw t;
    throw new Error(e);
}
async function A(e, t) {
    try {
        return await t();
    } catch (t) {
        _(e, t);
    }
}
