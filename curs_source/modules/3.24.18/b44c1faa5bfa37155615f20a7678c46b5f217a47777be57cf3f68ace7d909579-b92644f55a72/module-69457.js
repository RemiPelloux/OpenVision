"use strict";
require.d(exports, {
    Ng: ()=>h,
    cC: ()=>m
});
var n = require("./module-73024.js"), s = require("./module-51455.js"), o = require("./module-76760.js");
const i = (0, require("./module-37949.js").h)("agent-host"), a = 262144, c = 52428800, l = BigInt(0);
class u extends Error {
    constructor(e){
        super(`Agent host file not found (${e})`), this.code = "FILE_NOT_FOUND", this.name = "AgentHostFileNotFoundError", this.reason = e;
    }
}
class d extends Error {
    constructor(e){
        super(`Agent host file changed during read: ${e}`), this.code = "FILE_CHANGED", this.name = "AgentHostFileChangedError";
    }
}
class p extends Error {
    constructor(e){
        super(`Agent host file read_offset ${e.readOffset} is past the end of the file (${e.totalBytes} bytes)`), this.code = "FILE_OUT_OF_RANGE", this.name = "AgentHostFileOutOfRangeError", this.readOffset = e.readOffset, this.totalBytes = e.totalBytes;
    }
}
function m(e) {
    if (0 === e.length || e.includes("\0")) throw new Error("Agent host file path must be a non-empty path");
    if (!(0, o.isAbsolute)(e)) throw new Error("Agent host file path must be absolute");
    return (0, o.resolve)(e);
}
async function* h(e, t, r, n = w) {
    if (v(e), r.readOffset < l || r.readLimit < l) throw new Error("Agent host file read_offset and read_limit must be non-negative");
    let s, o;
    try {
        s = await n(t);
    } catch (t) {
        throw v(e), function(e) {
            switch(e instanceof Error && "code" in e ? String(e.code) : void 0){
                case "ENOENT":
                case "ENOTDIR":
                case "ELOOP":
                    return new u("missing");
                case "EISDIR":
                case "ENXIO":
                    return new u("not_a_regular_file");
                case "EACCES":
                case "EPERM":
                    return new u("unreadable");
                default:
                    return new Error("Agent host file open failed", {
                        cause: e
                    });
            }
        }(t);
    }
    const m = ()=>o ??= s.close(), h = ()=>{
        m().catch((t)=>{
            i.debug(e, "File close after cancel failed", {
                error: t
            });
        });
    };
    e.signal.addEventListener("abort", h, {
        once: !0
    });
    try {
        yield* async function*(e, t, r) {
            const n = await t.stat({
                bigint: !0
            });
            if (v(e), !n.isFile()) throw new u("not_a_regular_file");
            const s = n.size, o = n.mtimeMs;
            if (void 0 !== r.cachedMtimeMs && r.cachedMtimeMs === o) return void (yield {
                totalBytes: s,
                mtimeMs: o,
                result: {
                    case: "notModified",
                    value: {}
                }
            });
            if (r.readOffset > s) throw new p({
                readOffset: r.readOffset,
                totalBytes: s
            });
            const i = BigInt(c);
            if (r.readLimit === l && s > i) return void (yield {
                totalBytes: s,
                mtimeMs: o,
                result: {
                    case: "tooLarge",
                    value: {
                        maxBytes: i
                    }
                }
            });
            const d = r.readOffset + r.readLimit, m = r.readLimit === l || d > s ? s : d;
            let h = r.readOffset;
            do {
                v(e);
                const r = m - h, i = Number(r < BigInt(a) ? r : BigInt(a)), c = await f(t, h, i);
                v(e);
                const l = h + BigInt(c.byteLength);
                l === s && await g(t, s), await y(t, n), v(e), yield {
                    totalBytes: s,
                    mtimeMs: o,
                    result: {
                        case: "chunk",
                        value: {
                            offset: h,
                            data: c
                        }
                    }
                }, h = l;
            }while (h < m)
        }(e, s, r);
    } catch (t) {
        if (v(e), function(e) {
            return e instanceof u || e instanceof d || e instanceof p;
        }(t)) throw t;
        throw new Error("Agent host file read failed", {
            cause: t
        });
    } finally{
        e.signal.removeEventListener("abort", h), await m();
    }
}
async function f(e, t, r) {
    if (0 === r) return new Uint8Array(0);
    const n = new Uint8Array(r), { bytesRead: s } = await e.read(n, 0, r, Number(t));
    if (0 === s) throw new d("ended before its reported size");
    return n.subarray(0, s);
}
async function g(e, t) {
    const { bytesRead: r } = await e.read(new Uint8Array(1), 0, 1, Number(t));
    if (0 !== r) throw new d("bytes past its reported size");
}
async function y(e, t) {
    const r = await e.stat({
        bigint: !0
    });
    if (r.size !== t.size || r.mtimeNs !== t.mtimeNs || r.ctimeNs !== t.ctimeNs) throw new d("size, mtime, or ctime moved");
}
function w(e) {
    return (0, s.open)(e, n.constants.O_RDONLY | (n.constants.O_NONBLOCK ?? 0));
}
function v(e) {
    if (!e.signal.aborted) return;
    const t = new Error("Agent host file read canceled");
    throw t.name = "AbortError", t;
}
