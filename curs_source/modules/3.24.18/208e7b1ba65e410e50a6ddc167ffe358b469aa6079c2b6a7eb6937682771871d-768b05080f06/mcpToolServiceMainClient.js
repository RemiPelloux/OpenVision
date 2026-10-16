import { Vy } from "./connect.js";
import { Ye, qe } from "./environmentMainService.js";
import { Tu } from "./firstWindowStartup.js";
import { Tw, YM, cP } from "./firstWindowStartupMainService.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { ome, wKe } from "./mcp_tool_connectweb.js";
import { Tt, et } from "./productService.js";
import { br, fr } from "./state.js";
import { Cn, or } from "./storageMainService.js";
import { Ed, ts, wd } from "./telemetry.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
function MKe(e) {
    const t = Tw(e.accessToken, e.nowMs ?? Date.now());
    if (!t) return;
    const n = e.fetchFn ?? globalThis.fetch.bind(globalThis), r = YM(ome, cP({
        httpClient: PKe(n),
        baseUrl: e.backendUrl && e.backendUrl.length > 0 ? e.backendUrl : ume,
        useBinaryFormat: !1,
        interceptors: [],
        acceptCompression: [],
        sendCompression: null,
        compressMinBytes: Number.MAX_SAFE_INTEGER,
        readMaxBytes: Number.MAX_SAFE_INTEGER,
        writeMaxBytes: Number.MAX_SAFE_INTEGER
    })), s = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`,
        "x-cursor-client-type": "ide",
        "x-cursor-client-version": e.clientVersion
    };
    return e.machineId && (s["x-cursor-checksum"] = e.macMachineId === void 0 ? `${MD}${e.machineId}` : `${MD}${e.machineId}/${e.macMachineId}`), {
        client: r,
        headers: s
    };
}
function PKe(e) {
    return async (t)=>{
        const n = new Headers(t.header);
        n.set("Accept-Encoding", "identity");
        const r = await e(t.url, {
            method: t.method,
            headers: n,
            signal: t.signal,
            body: t.body ? await NKe(t.body) : void 0
        }), s = new Headers(r.headers);
        return s.delete("content-encoding"), s.delete("content-length"), {
            status: r.status,
            header: s,
            body: DKe(r),
            trailer: new Headers
        };
    };
}
async function NKe(e) {
    const t = [];
    let n = 0;
    for await (const i of e)t.push(i), n += i.byteLength;
    if (n === 0) return;
    const r = new Uint8Array(n);
    let s = 0;
    for (const i of t)r.set(i, s), s += i.byteLength;
    return r.buffer;
}
async function* DKe(e) {
    const t = new Uint8Array(await e.arrayBuffer());
    t.byteLength > 0 && (yield t);
}
var ume, MD, mme, PD, yw;
export { DKe, MD, MKe, NKe, PD, PKe, mme, ume, yw };
var __wakaru_OKe_initialized = false;
export function OKe() {
if (__wakaru_OKe_initialized) return;
__wakaru_OKe_initialized = true;
"use strict";
h(), Vy(), wKe(), Ye(), Tu(), ne(), Tt(), br(), or(), ts(), ume = "https://api2.cursor.sh", MD = "00000000", mme = "cursorAuth/accessToken", PD = Q("mcpToolServiceMainClient"), yw = class {
    constructor(e, t, n, r){
        this.applicationStorageMainService = e, this.environmentMainService = t, this.stateService = n, this.productService = r;
    }
    connect() {
        const e = this.environmentMainService.args["test-backend-url"];
        return MKe({
            accessToken: this.applicationStorageMainService.get(mme, -1),
            backendUrl: typeof e == "string" ? e : void 0,
            machineId: this.stateService.getItem(wd),
            macMachineId: this.stateService.getItem(Ed),
            clientVersion: this.productService.version
        });
    }
}, yw = B([
    w(0, Cn),
    w(1, qe),
    w(2, fr),
    w(3, et)
], yw);

}
