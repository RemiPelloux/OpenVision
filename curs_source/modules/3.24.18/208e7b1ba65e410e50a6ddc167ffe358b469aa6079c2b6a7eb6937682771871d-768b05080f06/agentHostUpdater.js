import { IA } from "./agentHarnessErrno.js";
import { AS, CS, DA, LA, NA, OA, PA, RS, Ud, fV, gV, pV, uh, un, vs } from "./agentHarnessLayout.js";
import { Jve, Qve, Wu, Zve, _n, iV, jrt, wf } from "./agentHarnessLock.js";
import { CV, EV, IV, MV, NS, RV, bV, qt, wa } from "./agentHarnessManifest.js";
import { BA, GA, HA, LV, OV, Ts, VA, Vi, qA } from "./agentHarnessSignature.js";
import { a9, aTe, iTe, nTe } from "./agentHostUpdaterConfig.js";
import { aE, c9, dTe, hTe, iE, m9, pTe, uTe } from "./agentHostUpdaterTelemetry.js";
import { Vl, le, oT } from "./async.js";
import { Jn, Mt } from "./cancellation.js";
import { Ve } from "./errors.js";
import { ge } from "./event.js";
import { xd } from "./extensionHostStarter_2.js";
import { Nc } from "./index.ts";
import { J, j } from "./lifecycle.js";
import { En } from "./lifecycleMainService.js";
import { ee, oe } from "./platform.js";
import { We } from "./request_2.js";
import { Yo, ca } from "./stopwatch.js";
import { h } from "./tslib.es6.js";
import * as PV from "crypto";
import * as XGe from "path";
import * as mn from "path";
import * as ph from "fs";
import sn from "fs";
import * as tE from "path";
import * as tn from "fs";
import { fileURLToPath as ust } from "url";
import * as vV from "crypto";
import * as zve from "crypto";
function MBe(e, t, n, r = Math.random) {
    const s = t * 2 ** e, i = Math.min(s, n);
    return r() * i;
}
function aV(e) {
    return _n(e, "ENOSPC") || _n(e, "EDQUOT");
}
function oV(e) {
    return _n(e, "EACCES") || _n(e, "EPERM") || _n(e, "EROFS");
}
function RA(e) {
    return iV(e) !== void 0 && "syscall" in e && typeof e.syscall == "string";
}
function CA(e) {
    if (!Number.isInteger(e) || e <= 0) return !1;
    try {
        return process.kill(e, 0), !0;
    } catch (t) {
        return _n(t, "EPERM");
    }
}
function AA({ generation: e, file: t }) {
    return `generations/${e}/${encodeURIComponent(t)}`;
}
function cV(e) {
    return Array.isArray(e) && e.every((t)=>typeof t == "string");
}
function lV(e) {
    for (const t of e){
        const n = t.codePointAt(0) ?? 0;
        if (n < 32 || n === 127) return !0;
    }
    return !1;
}
function lh(e, t) {
    return typeof e == "string" && e.length > 0 && e.length <= t && !lV(e);
}
function UGe(e, t) {
    const n = (a)=>{
        throw new Error(`${t}: invalid host descriptor: ${a}`);
    };
    if (typeof e != "object" || e === null) return n("not an object");
    const r = e;
    if (r.schema !== RS) return n(`schema ${String(r.schema)}, expected ${RS}`);
    if (typeof r.pid != "number" || !Number.isInteger(r.pid) || r.pid < 0) return n("pid is not a non-negative integer");
    if (typeof r.writtenAt != "string") return n("writtenAt is required");
    if (r.enabledBy !== "gate" && r.enabledBy !== "env") return n('enabledBy must be "gate" or "env"');
    if (typeof r.interfaceRevision != "number" || !Number.isInteger(r.interfaceRevision)) return n("interfaceRevision must be an integer");
    if (!cV(r.requiredCapabilities) || !cV(r.natives)) return n("requiredCapabilities and natives must be string arrays");
    if (r.clientVersion !== void 0 && typeof r.clientVersion != "string") return n("clientVersion must be a string");
    const s = r.floor;
    if (typeof s != "object" || s === null) return n("floor is required");
    const i = s;
    return typeof i.generation != "string" || typeof i.label != "string" ? n("floor.generation and floor.label are required") : i.builtAt !== void 0 && typeof i.builtAt != "string" || i.commit !== void 0 && typeof i.commit != "string" ? n("floor.builtAt and floor.commit must be strings") : i.source !== "floor" && i.source !== "static" ? n('floor.source must be "floor" or "static"') : {
        schema: RS,
        pid: r.pid,
        writtenAt: r.writtenAt,
        enabledBy: r.enabledBy,
        interfaceRevision: r.interfaceRevision,
        requiredCapabilities: r.requiredCapabilities,
        natives: r.natives,
        ...r.clientVersion === void 0 ? {} : {
            clientVersion: r.clientVersion
        },
        floor: {
            generation: i.generation,
            label: i.label,
            ...i.builtAt === void 0 ? {} : {
                builtAt: i.builtAt
            },
            ...i.commit === void 0 ? {} : {
                commit: i.commit
            },
            source: i.source
        },
        ...r.timing === void 0 ? {} : {
            timing: r.timing
        }
    };
}
function xGe(e, t) {
    const n = dV({
        parsed: e,
        where: t,
        what: "last-served record"
    });
    if (n.schema !== OA) throw new Error(`${t}: invalid last-served record: schema ${String(n.schema)}, expected ${OA}`);
    if (typeof n.generation != "string" || !Ud.test(n.generation)) throw new Error(`${t}: invalid last-served record: generation is not a sha256 hex digest`);
    return MA({
        record: n,
        key: "label",
        where: t,
        what: "last-served record"
    }), MA({
        record: n,
        key: "servedAt",
        where: t,
        what: "last-served record"
    }), WGe({
        record: n,
        key: "builtAt",
        where: t,
        what: "last-served record"
    }), uV({
        record: n,
        where: t,
        what: "last-served record"
    }), n.generation;
}
function FGe(e, t) {
    const n = dV({
        parsed: e,
        where: t,
        what: "serving marker"
    });
    if (n.schema !== LA) throw new Error(`${t}: invalid serving marker: schema ${String(n.schema)}, expected ${LA}`);
    const r = uV({
        record: n,
        where: t,
        what: "serving marker"
    });
    if (MA({
        record: n,
        key: "writtenAt",
        where: t,
        what: "serving marker"
    }), !Array.isArray(n.generations) || !n.generations.every((s)=>typeof s == "string" && Ud.test(s))) throw new Error(`${t}: invalid serving marker: generations is not a list of sha256 hex digests`);
    return {
        pid: r,
        generations: n.generations
    };
}
function dV({ parsed: e, where: t, what: n }) {
    if (typeof e != "object" || e === null || Array.isArray(e)) throw new Error(`${t}: invalid ${n}: not an object`);
    return e;
}
function MA({ record: e, key: t, where: n, what: r }) {
    if (typeof e[t] != "string") throw new Error(`${n}: invalid ${r}: ${t} is not a string`);
}
function WGe({ record: e, key: t, where: n, what: r }) {
    if (e[t] !== void 0 && typeof e[t] != "string") throw new Error(`${n}: invalid ${r}: ${t} is not a string`);
}
function uV({ record: e, where: t, what: n }) {
    if (typeof e.pid != "number" || !Number.isInteger(e.pid) || e.pid < 0) throw new Error(`${t}: invalid ${n}: pid is not a non-negative integer`);
    return e.pid;
}
function GGe(e, t) {
    const n = (o)=>{
        throw new un(`${t}: ${o}`, "schema");
    };
    if (typeof e != "object" || e === null) return n("pointer is not an object");
    const r = e;
    if (r.schema !== CS) return n(`schema ${String(r.schema)}, expected ${CS}`);
    if (typeof r.generation != "string" || !(Ud.test(r.generation) || r.generation === vs)) return n(`generation is neither a sha256 hex digest nor ${JSON.stringify(vs)}`);
    const s = {};
    for (const o of [
        "label",
        "publishedAt",
        "reason"
    ]){
        const l = r[o];
        if (l !== void 0) {
            if (!lh(l, AS[o])) return n(`${o} must be 1..${AS[o]} characters without control characters`);
            s[o] = l;
        }
    }
    const i = r.sequence, a = typeof i == "number" && Number.isSafeInteger(i) && i >= 0;
    return {
        schema: CS,
        generation: r.generation,
        ...s,
        ...a ? {
            sequence: i
        } : {}
    };
}
function TV(e) {
    return bV.test(e);
}
function VGe(e) {
    return CV.test(e) || IV.test(e) || e.endsWith(".") || e.endsWith(" ");
}
function UA(e) {
    return e.length > 0 && e.length <= qt.name && !lV(e) && !e.includes("/") && !e.includes("\\") && e !== "." && e !== ".." && e !== "__proto__" && e !== wa && !VGe(e);
}
function $Ge(e, t) {
    let n = 0, r = [
        e
    ];
    for(; r.length > 0 && n < t + 1;){
        n += 1;
        const s = [];
        for (const i of r){
            const a = Array.isArray(i) ? i : typeof i == "object" && i !== null ? Object.values(i) : [];
            for (const o of a)s.push(o);
        }
        r = s;
    }
    return n;
}
function MS(e) {
    return vV.createHash("sha256").update(e).digest("hex");
}
function jGe(e) {
    const t = vV.createHash("sha256");
    for (const n of Object.keys(e).sort())t.update(`${n}
${e[n].sha256}
`);
    return t.digest("hex");
}
function kV(e, t) {
    const n = e.major - t.major || e.minor - t.minor || e.patch - t.patch;
    return n !== 0 ? n : e.pre === void 0 || t.pre === void 0 ? (e.pre === void 0 ? 1 : 0) - (t.pre === void 0 ? 1 : 0) : e.pre[0] - t.pre[0] || e.pre[1] - t.pre[1];
}
function SV(e) {
    return xd(e.startsWith(">=") ? e.slice(2) : e);
}
function mh(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function xA(e, t) {
    return Array.isArray(e) && e.length <= qt.list && e.every(t);
}
function yV(e) {
    if (e === void 0) return;
    if ($Ge(e, qt.packDepth) > qt.packDepth) return `nests deeper than ${qt.packDepth} levels`;
    const t = JSON.stringify(e);
    if (t === void 0 || t.length > qt.packBytes) return `serializes to more than ${qt.packBytes} bytes`;
}
function HGe(e, t) {
    const n = (b)=>{
        throw new un(`${t}: ${b}`, "schema");
    };
    if (!mh(e)) return n("manifest is not an object");
    const r = e;
    if (r.schema !== NS) return n(`schema ${String(r.schema)}, expected ${NS}`);
    const { generation: s, label: i, commit: a, builtAt: o, entry: l, requiredRevision: d } = r;
    if (typeof s != "string" || !Ud.test(s)) return n("generation is not a sha256 hex digest");
    if (!lh(i, qt.label)) return n(`label must be 1..${qt.label} characters without control characters`);
    if (!lh(a, qt.commit)) return n(`commit must be 1..${qt.commit} characters without control characters`);
    if (!lh(o, qt.builtAt)) return n(`builtAt must be 1..${qt.builtAt} characters without control characters`);
    if (typeof l != "string" || !UA(l)) return n(`entry ${JSON.stringify(l)} is not a plain name`);
    if (!xA(r.workers, (b)=>typeof b == "string" && UA(b))) return n("workers must be a list of plain file names");
    const u = r.workers;
    for (const [b, I] of u.entries())if (TV(I)) return n(`workers.${b}: ${I} is a native binary; a generation carries code only`);
    if (!xA(r.natives, (b)=>typeof b == "string" && b.length <= qt.name && EV.test(b))) return n("natives must be a list of package names");
    if (typeof d != "number" || !Number.isInteger(d) || d < 0 || d > qt.requiredRevision) return n("missing requiredRevision");
    if (!xA(r.capabilities, (b)=>typeof b == "string" && b.length <= qt.capability && RV.test(b))) return n("capabilities must be a list of capability names");
    let m;
    if (r.engines !== void 0) {
        const b = mh(r.engines) ? r.engines.cursor : void 0;
        if (typeof b != "string" || SV(b) === void 0) return n("engines.cursor is not >=X.Y.Z, >=X.Y.Z-pre.N or >=X.Y.Z-pre.N.patch.M");
        m = {
            cursor: b
        };
    }
    if (!mh(r.files)) return n("files must be an object");
    const f = Object.entries(r.files);
    if (f.length > qt.files) return n(`lists more than ${qt.files} files`);
    const v = Object.create(null);
    for (const [b, I] of f){
        if (!UA(b)) return n(`file name ${JSON.stringify(b)} is not a plain name`);
        if (TV(b)) return n(`file name ${JSON.stringify(b)} is a native binary; a generation carries code only`);
        if (!mh(I)) return n(`file ${b} needs bytes and a sha256 hex digest`);
        const { bytes: G, sha256: U } = I;
        if (typeof G != "number" || !Number.isInteger(G) || G < 0 || G > qt.fileBytes) return n(`file ${b}: bytes must be an integer in 0..${qt.fileBytes}`);
        if (typeof U != "string" || !Ud.test(U)) return n(`file ${b} needs bytes and a sha256 hex digest`);
        v[b] = {
            bytes: G,
            sha256: U
        };
    }
    if (!Object.hasOwn(v, l)) return n(`entry ${l} is not in files`);
    for (const [b, I] of u.entries())if (!Object.hasOwn(v, I)) return n(`workers.${b}: worker ${I} is not in files`);
    const { mainVersion: T, kind: S } = r;
    if (T !== void 0 && (typeof T != "string" || T.length > qt.mainVersion || xd(T) === void 0)) return n("mainVersion is not X.Y.Z, X.Y.Z-pre.N or X.Y.Z-pre.N.patch.M");
    if (S !== void 0 && !lh(S, qt.kind)) return n(`kind must be 1..${qt.kind} characters without control characters`);
    const k = yV(r.pack);
    if (k !== void 0) return n(`pack ${k}`);
    let y;
    if (r.signature !== void 0) {
        const b = r.signature;
        if (!mh(b) || typeof b.algorithm != "string") return n("signature must be an object naming a string algorithm");
        const I = yV(b);
        if (I !== void 0) return n(`signature ${I}`);
        y = {
            ...b,
            algorithm: b.algorithm
        };
    }
    return {
        schema: NS,
        generation: s,
        label: i,
        commit: a,
        builtAt: o,
        entry: l,
        workers: u,
        natives: r.natives,
        requiredRevision: d,
        capabilities: r.capabilities,
        ...m === void 0 ? {} : {
            engines: m
        },
        files: {
            ...v
        },
        ...T === void 0 ? {} : {
            mainVersion: T
        },
        ...S === void 0 ? {} : {
            kind: S
        },
        ...r.pack === void 0 ? {} : {
            pack: r.pack
        },
        ...y === void 0 ? {} : {
            signature: y
        }
    };
}
function PS(e, t) {
    if (e.byteLength > qt.manifestBytes) throw new un(`${t}: ${e.byteLength} bytes, more than the ${qt.manifestBytes} a manifest may have`, "schema");
    let n;
    try {
        n = JSON.parse(Buffer.from(e).toString("utf8"));
    } catch (r) {
        throw new un(`${t}: not JSON: ${r instanceof Error ? r.message : String(r)}`, "schema");
    }
    return HGe(n, t);
}
function qGe(e) {
    const t = jGe(e.files);
    if (e.generation !== t) throw new un(`generation ${e.generation.slice(0, 12)} does not match its files (${t.slice(0, 12)})`, "hash");
}
function wV(e, t, n) {
    if (n.byteLength !== t.bytes) throw new un(`${e}: ${n.byteLength} bytes downloaded, manifest says ${t.bytes}`, "files");
    const r = MS(n);
    if (r !== t.sha256) throw new un(`${e}: sha256 ${r.slice(0, 12)} downloaded, manifest says ${t.sha256.slice(0, 12)}`, "files");
}
function KGe({ candidateBuiltAt: e, floorBuiltAt: t }) {
    const n = t === void 0 ? Number.NaN : Date.parse(t);
    if (Number.isNaN(n)) return;
    const r = Date.parse(e);
    if (Number.isNaN(r)) return `builtAt ${JSON.stringify(e)} is not a date, so it cannot be ordered against the floor built ${t}`;
    if (r < n) return `built ${e}, before the floor built ${t}; never below the floor`;
}
function zGe({ range: e, clientVersion: t }) {
    const n = e === void 0 ? void 0 : SV(e), r = t === void 0 ? void 0 : xd(t);
    if (!(n === void 0 || r === void 0 || kV(r, n) >= 0)) return `engines.cursor is ${e}; this client is ${t}`;
}
function FA(e) {
    return {
        mainVersion: e.mainVersion,
        builtAt: e.builtAt,
        rollback: e.kind === "rollback"
    };
}
function YGe({ clientVersion: e, clientBuiltAt: t }, n, { lastServed: r } = {}) {
    const s = t === void 0 ? Number.NaN : Date.parse(t);
    if (Number.isNaN(s)) return;
    const i = KGe({
        candidateBuiltAt: n.builtAt,
        floorBuiltAt: t
    }), a = e === void 0 ? void 0 : xd(e);
    if (a === void 0) return i === void 0 ? void 0 : {
        check: "floor",
        message: i
    };
    const o = n.mainVersion === void 0 ? void 0 : xd(n.mainVersion), l = n.rollback === !0 || o === void 0 || kV(o, a) >= 0, d = Date.parse(n.builtAt);
    if (!(d >= s && (r === void 0 || d >= Date.parse(r.builtAt)) && l)) {
        if (a.pre !== void 0) return i !== void 0 ? {
            check: "floor",
            message: i
        } : l ? void 0 : {
            check: "older",
            message: `records ${n.mainVersion}, older than this client's ${e}, and is not a rollback`
        };
        if (o === void 0) return {
            check: "floor",
            message: i ?? `packed ${n.builtAt}, before the module this client last served (packed ${r?.builtAt})`
        };
        if (!(o.major > a.major || o.major === a.major && o.minor > a.minor)) return {
            check: "before_cut",
            message: `records ${n.mainVersion}, from before the ${a.major}.${a.minor} release branch was cut; this client's built-in module already has that code`
        };
    }
}
function JGe(e, t, n) {
    const r = `extension host pid ${t.pid}`;
    if (e.requiredRevision !== t.interfaceRevision) throw new un(`built against interface revision ${e.requiredRevision}; ${r} runs revision ${t.interfaceRevision}`, "revision");
    const s = t.requiredCapabilities.filter((l)=>!e.capabilities.includes(l));
    if (s.length > 0) throw new un(`lacks capabilities ${r} requires: ${s.join(", ")}`, "capabilities");
    const i = e.natives.filter((l)=>!t.natives.includes(l));
    if (i.length > 0) throw new un(`requires natives ${r} does not provide: ${i.join(", ")}`, "natives");
    const a = zGe({
        range: e.engines?.cursor,
        clientVersion: t.clientVersion
    });
    if (a !== void 0) throw new un(a, "client");
    const o = YGe({
        clientVersion: t.clientVersion,
        clientBuiltAt: t.floor.builtAt
    }, FA(e), {
        lastServed: n
    });
    if (o !== void 0) throw new un(o.message, o.check);
}
function eVe(e, t) {
    const n = Buffer.from(e, "utf8");
    return Buffer.concat([
        Buffer.from(`DSSEv1 ${n.length} `, "utf8"),
        n,
        Buffer.from(` ${t.byteLength} `, "utf8"),
        t
    ]);
}
function DV(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function WA(e, t, n) {
    return typeof e == "string" && e.length > 0 && e.length <= t && n.test(e);
}
function tVe() {
    return {
        status: "malformed",
        problem: HA
    };
}
function nVe(e) {
    if (e.byteLength > Vi.bytes) return HA;
    let t;
    try {
        t = JSON.parse(Buffer.from(e).toString("utf8"));
    } catch  {
        return `${Ts} is not JSON`;
    }
    if (!DV(t) || t.schema !== GA) return `${Ts} is not schema ${GA}`;
    if (t.payloadType !== BA) return `${Ts} signs ${JSON.stringify(t.payloadType)}, not a manifest`;
    const { signatures: n } = t;
    if (!Array.isArray(n) || n.length === 0 || n.length > Vi.signatures) return `${Ts} must list 1..${Vi.signatures} signatures`;
    const r = [];
    for (const [s, i] of n.entries()){
        if (!DV(i) || !WA(i.keyId, Vi.keyId, VA) || !WA(i.algorithm, Vi.algorithm, VA) || !WA(i.signature, Vi.signature, LV)) return `${Ts} signatures.${s} needs a keyId, an algorithm and a base64 signature`;
        r.push({
            keyId: i.keyId,
            algorithm: i.algorithm,
            signature: i.signature
        });
    }
    return r;
}
function rVe(e, t, n) {
    try {
        const r = PV.createPublicKey({
            key: Buffer.from(e.spki, "base64"),
            format: "der",
            type: "spki"
        });
        return PV.verify("sha256", t, {
            key: r,
            dsaEncoding: "der"
        }, Buffer.from(n, "base64"));
    } catch  {
        return !1;
    }
}
function sVe({ manifest: e, signature: t, keys: n }) {
    if (t === void 0) return {
        status: "unsigned"
    };
    const r = nVe(t);
    if (typeof r == "string") return {
        status: "malformed",
        problem: r
    };
    const s = eVe(BA, e), i = [], a = [];
    for (const o of r){
        const l = n.find((d)=>d.keyId === o.keyId);
        if (l === void 0 || o.algorithm !== OV) {
            a.push(o.keyId);
            continue;
        }
        if (rVe(l, s, o.signature)) return {
            status: "valid",
            keyId: l.keyId
        };
        i.push(o.keyId);
    }
    return i.length > 0 ? {
        status: "invalid",
        keyIds: i
    } : {
        status: "untrusted",
        keyIds: a
    };
}
function iVe(e) {
    switch(e.status){
        case "valid":
            return `is signed by ${e.keyId}`;
        case "unsigned":
            return `has no ${Ts}`;
        case "untrusted":
            return `is signed only by keys this build does not trust (${e.keyIds.join(", ")})`;
        case "invalid":
            return `has a signature from ${e.keyIds.join(", ")} that does not verify over its manifest`;
        case "malformed":
            return `has an unreadable signature: ${e.problem}`;
    }
}
function aVe(e) {
    const t = XGe.join(e, Ts);
    let n;
    try {
        n = ph.lstatSync(t);
    } catch (s) {
        if (_n(s, "ENOENT")) return;
        throw s;
    }
    if (!n.isFile()) throw new Error(`${Ts} is not a regular file`);
    const r = ph.openSync(t, "r");
    try {
        const s = Math.min(ph.fstatSync(r).size, Vi.bytes + 1), i = Buffer.alloc(s);
        let a = 0;
        for(; a < s;){
            const o = ph.readSync(r, i, a, s - a, a);
            if (o === 0) break;
            a += o;
        }
        return i.subarray(0, a);
    } finally{
        ph.closeSync(r);
    }
}
async function nE(e, { from: t, to: n }, r) {
    const s = Date.now() + r.timeoutMs;
    for(let i = 0;; i++){
        e.assertHeld();
        try {
            await sn.promises.rename(t, n);
            return;
        } catch (a) {
            if (!r.retries(a) || Date.now() >= s) throw a;
        }
        await En(Math.min(100, i * 10));
    }
}
function Brt(e, t) {
    const n = tE.join(e, Jve), r = Vrt(n);
    if (r !== void 0) {
        if (!r.stale) return s9(n, r.pid);
        const l = $rt(n, t);
        if (l !== void 0) return l;
    }
    try {
        sn.mkdirSync(n, {
            recursive: !0
        });
    } catch (l) {
        if (_n(l, "EEXIST")) return s9(n, void 0);
        throw l;
    }
    const s = `${process.pid}-${zve.randomBytes(8).toString("hex")}`, i = tE.join(n, s), a = sn.openSync(i, "wx");
    let o = !1;
    try {
        const l = [];
        for (const d of sn.readdirSync(n)){
            if (d === s) continue;
            const u = Grt(n, d);
            if (u !== void 0) {
                if (!u.stale) return `another agent host updater (pid ${u.pid}) holds ${n}`;
                l.push({
                    name: d,
                    pid: u.pid,
                    why: u.why
                });
            }
        }
        for (const d of l)t.warn(`took over ${n} left by agent host updater pid ${d.pid}, ${d.why}`), sn.rmSync(tE.join(n, d.name), {
            force: !0
        });
        return o = !0, new Zve({
            lockDir: n,
            entryPath: i,
            fd: a
        }, t);
    } finally{
        o || (sn.closeSync(a), sn.rmSync(i, {
            force: !0
        }));
    }
}
function Grt(e, t) {
    const n = Qve.exec(t);
    if (n === null) return;
    const r = Number.parseInt(n[1], 10);
    let s;
    try {
        s = sn.lstatSync(tE.join(e, t));
    } catch (a) {
        return _n(a, "ENOENT") ? void 0 : {
            pid: r,
            stale: !1
        };
    }
    if (!s.isFile()) return;
    const i = Date.now() - s.mtimeMs;
    return i > Wu ? {
        pid: r,
        stale: !0,
        why: `not refreshed for ${Math.round(i / 6e4)} minutes`
    } : CA(r) ? {
        pid: r,
        stale: !1
    } : {
        pid: r,
        stale: !0,
        why: "no longer running"
    };
}
function Vrt(e) {
    const t = sn.statSync(e, {
        throwIfNoEntry: !1
    });
    if (t === void 0 || t.isDirectory()) return;
    let n = "";
    if (t.isFile()) try {
        n = sn.readFileSync(e, "utf8");
    } catch (r) {
        if (_n(r, "ENOENT") || _n(r, "EISDIR")) return;
        throw r;
    }
    return Yve(n, t);
}
function Yve(e, t) {
    const n = Number.parseInt(e, 10);
    if (Number.isInteger(n) && n > 0) return n === process.pid ? {
        pid: n,
        stale: !0,
        why: `pid ${n} reused by this process`
    } : CA(n) ? {
        pid: n,
        stale: !1
    } : {
        pid: n,
        stale: !0,
        why: `pid ${n} no longer running`
    };
    const r = Date.now() - t.mtimeMs;
    return r > Wu ? {
        pid: void 0,
        stale: !0,
        why: `not refreshed for ${Math.round(r / 6e4)} minutes`
    } : {
        pid: void 0,
        stale: !1
    };
}
function s9(e, t) {
    return `an agent host updater of an older version${t === void 0 ? "" : ` (pid ${t})`} holds ${e}`;
}
function $rt(e, t) {
    const n = `${e}.older-${process.pid}-${zve.randomBytes(8).toString("hex")}`;
    sn.writeFileSync(n, "", {
        flag: "wx"
    });
    try {
        sn.renameSync(e, n);
    } catch (i) {
        sn.rmSync(n, {
            force: !0
        });
        const a = sn.statSync(e, {
            throwIfNoEntry: !1
        });
        if (a === void 0 || a.isDirectory()) return;
        throw i;
    }
    const r = sn.statSync(n), s = Yve(r.isFile() ? sn.readFileSync(n, "utf8") : "", r);
    if (s.stale) {
        t.warn(`took over ${e} left as a file by an agent host updater of an older version, ${s.why}`), sn.rmSync(n, {
            force: !0
        });
        return;
    }
    try {
        sn.linkSync(n, e);
    } catch (i) {
        _n(i, "EEXIST") || t.warn(`could not put back ${e}, the lock of an agent host updater of an older version (pid ${s.pid}) claimed for judgment (${We(i)}); its holder finds it gone at its next check`);
    }
    return sn.unlinkSync(n), s9(e, s.pid);
}
function qrt(e, t) {
    const { min: n, max: r } = iTe[e];
    return typeof t == "number" && t > 0 ? Math.min(r, Math.max(n, Math.floor(t))) : void 0;
}
function Krt(e) {
    const t = (n)=>{
        const r = e.flatMap(({ timing: s })=>{
            const i = qrt(n, typeof s == "object" && s !== null ? s[n] : void 0);
            return i === void 0 ? [] : [
                i
            ];
        });
        return r.length === 0 ? void 0 : Math.max(...r);
    };
    return {
        pollIntervalMs: t("pollIntervalMs"),
        requestIdleTimeoutMs: t("requestIdleTimeoutMs")
    };
}
function ist({ current: e, latest: t, cantRun: n }) {
    return e === void 0 ? "none" : t === void 0 ? "unknown" : e !== t ? "behind" : e === vs ? "kill_switch" : n ? "cant_run" : "latest";
}
function ast(e, t) {
    const n = e === void 0 ? Number.NaN : Date.parse(e);
    return Number.isNaN(n) ? "unknown" : dTe.find(([r])=>t - n < r)?.[1] ?? "ge_7d";
}
function o9(e) {
    const t = We(e).replace(aE, ""), n = c9.exec(t)?.[1];
    return n !== void 0 ? n === "401" || n === "403" ? "forbidden" : n === "404" ? "not_found" : n === "429" ? "rate_limit" : n.startsWith("5") ? "http_5xx" : "http_other" : /ERR_PROXY_|ERR_TUNNEL_/.test(t) ? "proxy" : /ERR_CERT_|ERR_SSL_|CERT_|certificate|UNABLE_TO_VERIFY_LEAF_SIGNATURE/.test(t) ? "tls" : /ERR_NETWORK_IO_SUSPENDED/.test(t) ? "suspended" : /TIMED_OUT|ETIMEDOUT|no data for \d+s/.test(t) ? "timeout" : /ENOENT/.test(t) ? "not_found" : /ERR_NAME_NOT_RESOLVED|ERR_INTERNET_DISCONNECTED|ERR_NETWORK_CHANGED|ERR_CONNECTION_|ERR_ADDRESS_UNREACHABLE|ENOTFOUND|EAI_AGAIN|ECONNREFUSED|ECONNRESET|EHOSTUNREACH|ENETUNREACH/.test(t) || /ERR_CONTENT_LENGTH_MISMATCH|ERR_INCOMPLETE_CHUNKED_ENCODING|ERR_EMPTY_RESPONSE|ECONNABORTED|socket hang up|\baborted\b/.test(t) || /unexpected end of file|Z_DATA_ERROR|\bEPIPE\b|\bEPROTO\b|ERR_HTTP2_|ERR_QUIC_/.test(t) ? "network" : /more than the \d+ (?:bytes )?accepted/.test(t) ? "too_large" : "other";
}
function mst(e) {
    return e === void 0 ? {
        kind: "absent"
    } : {
        kind: "bytes",
        bytes: e
    };
}
function pst(e, t) {
    const n = [];
    for (const [r, s] of Object.entries(t.files)){
        const i = tn.lstatSync(mn.join(e, r));
        if (!i.isFile()) throw new un(`${r}: is not a regular file`, "files");
        if (i.size !== s.bytes) throw new un(`${r}: ${i.size} bytes on disk, manifest says ${s.bytes}`, "files");
        n.push(`${r}
${i.size}
${i.mode}
${i.mtimeMs}
${i.ctimeMs}
${i.ino}
`);
    }
    return n.join("");
}
function gTe(e, t) {
    for (const [n, r] of Object.entries(t.files))wV(n, r, tn.readFileSync(mn.join(e, n)));
}
function fTe(e, t, n) {
    for (const r of t)JGe(e, r, n);
}
function _Te(e, t, { lastServed: n, running: r }) {
    if (fTe(e, t, n), r !== void 0 && r.generation !== e.generation && !(Date.parse(e.builtAt) >= Date.parse(r.module.builtAt))) throw new un(`packed ${e.builtAt}, before generation ${r.generation.slice(0, 12)} that runs (packed ${r.module.builtAt}); never backwards`, "behind");
}
function p9(e, t, n) {
    try {
        fTe(e, t, n);
        return;
    } catch (r) {
        return r instanceof un ? {
            check: r.check,
            reason: `${r.check}: ${r.message}`
        } : {
            check: "verify",
            reason: We(r)
        };
    }
}
var ut, h9, g9, f9, vTe, TTe, oE, kTe, Rf, _9, STe, yTe, Cf, cE, wTe;
export { $Ge, $rt, AA, Brt, CA, Cf, DV, FA, FGe, GGe, Grt, HGe, JGe, KGe, Krt, MA, MBe, MS, PS, RA, Rf, STe, SV, TTe, TV, UA, UGe, VGe, Vrt, WA, WGe, YGe, Yve, _9, _Te, aV, aVe, ast, cE, cV, dV, eVe, f9, fTe, g9, gTe, h9, iVe, ist, jGe, kTe, kV, lV, lh, mh, mst, nE, nVe, o9, oE, oV, p9, pst, qGe, qrt, rVe, s9, sVe, tVe, uV, ut, vTe, wTe, wV, xA, xGe, yTe, yV, zGe };
var __wakaru_ETe_initialized = false;
export function ETe() {
if (__wakaru_ETe_initialized) return;
__wakaru_ETe_initialized = true;
"use strict";
h(), Nc(), le(), Mt(), Ve(), j(), oe(), Yo(), uh(), IA(), jrt(), MV(), qA(), aTe(), hTe(), ut = "[AgentHostUpdater]", h9 = 3600 * 1e3, g9 = 2, f9 = {
    baseMs: 1e3,
    capMs: 8e3
}, vTe = 6e4, TTe = 5e3, oE = ".stage-", kTe = new RegExp(`^${NA}\\.\\d+\\.[0-9a-z]+$`), Rf = {
    retries: (e)=>ee && (_n(e, "EACCES") || _n(e, "EPERM") || _n(e, "EBUSY")),
    timeoutMs: 6e4
}, _9 = 1024 * 1024 * 1024, STe = new Set([
    "schema",
    "hash",
    "files",
    "verify",
    "signature"
]), yTe = async (e, { maxBytes: t })=>{
    if (e.protocol !== "file:") throw new Error(`${e.href}: only file: URLs are served from disk`);
    const n = ust(e), { size: r } = await tn.promises.stat(n);
    if (r > t) throw new Error(`${e.href}: ${r} bytes, more than the ${t} accepted`);
    return tn.promises.readFile(n);
}, Cf = class extends Error {
    constructor(e, t){
        const n = typeof t == "string" ? t : We(t);
        super(n.startsWith(`${e.href}: `) ? n : `${e.href}: ${n}`), this.name = "FetchFailed";
    }
}, cE = class extends Error {
    constructor(e){
        super(e), this.name = "SignatureRefused";
    }
}, wTe = class extends J {
    constructor(e){
        super(), this.options = e, this.timer = this._register(new Vl), this.heartbeatTimer = this._register(new oT), this.started = !1, this.lifetime = new Jn, this.ignoredFiles = new Map, this.timing = {
            pollIntervalMs: void 0,
            requestIdleTimeoutMs: void 0
        }, this.lockLog = {
            warn: (t)=>this.options.log.warn(`${ut} ${t}`)
        }, this._register(ge(()=>this.lifetime.dispose(!0))), this.random = e.random ?? Math.random, this.outcomes = new uTe(e.channel, {
            current: ()=>this.currentGeneration(),
            moduleOf: (t)=>this.moduleOf(t)
        }, e), this.channelFile = new pTe(e.rootDir, e.channel, (t)=>e.log.warn(`${ut} ${t}`));
    }
    get rootDir() {
        return this.options.rootDir;
    }
    get versionsDir() {
        return mn.join(this.options.rootDir, pV);
    }
    get currentPointerPath() {
        return mn.join(this.options.rootDir, NA);
    }
    get hostsDir() {
        return mn.join(this.options.rootDir, DA);
    }
    get lastServedPath() {
        return mn.join(this.options.rootDir, gV);
    }
    get servingDir() {
        return mn.join(this.options.rootDir, fV);
    }
    installDirOf(e) {
        return mn.join(this.versionsDir, e);
    }
    get pointerUrl() {
        return this.options.pointerUrl;
    }
    start() {
        this._store.isDisposed || this.started || (this.started = !0, this.options.log.info(`${ut} watching ${this.pointerUrl.href} every ${Math.round(this.pollIntervalMs() / 1e3)}s; installs to ${this.options.rootDir}` + (this.options.enabledOverride ? "; enabled by env" : `; idle until an extension host writes ${DA}/<pid>.json`)), this.schedule(this.options.initialDelayMs ?? this.pollIntervalMs()));
    }
    pollIntervalMs() {
        return this.options.pollIntervalMs ?? this.timing.pollIntervalMs ?? nTe;
    }
    offlineRecheckMs() {
        return Math.min(vTe, this.pollIntervalMs());
    }
    noteTiming(e) {
        if (e.pollIntervalMs === this.timing.pollIntervalMs && e.requestIdleTimeoutMs === this.timing.requestIdleTimeoutMs) return;
        this.timing = e;
        const t = (n)=>`${Math.round(n / 1e3)}s`;
        this.options.log.info(`${ut} timing: polling every ${t(this.pollIntervalMs())}${this.options.pollIntervalMs === void 0 ? "" : ` (${a9})`}, request idle timeout ${e.requestIdleTimeoutMs === void 0 ? "default" : t(e.requestIdleTimeoutMs)} (agent_host_updater_timing ${e.pollIntervalMs === void 0 && e.requestIdleTimeoutMs === void 0 ? "unset" : "set"})`);
    }
    runningHostRecords(e, { what: t, parse: n }) {
        const r = [], s = [], i = [], a = (l, d)=>{
            const u = We(d);
            this.ignoredFiles.get(l) !== u && (this.ignoredFiles.set(l, u), this.options.log.warn(`${ut} ignoring ${t} ${l}: ${u}`), t === "serving marker" && l !== e && !RA(d) && this.noteSidecar("serving")), i.push(`${mn.relative(this.options.rootDir, l)}: ${u}`);
        };
        let o;
        try {
            o = tn.readdirSync(e);
        } catch (l) {
            return _n(l, "ENOENT") || a(e, l), {
                running: r,
                exited: s,
                ignored: i
            };
        }
        for (const l of o){
            if (!/^\d+\.json$/.test(l)) continue;
            const d = mn.join(e, l);
            let u;
            try {
                u = n(JSON.parse(tn.readFileSync(d, "utf8")), d);
            } catch (m) {
                _n(m, "ENOENT") || a(d, m);
                continue;
            }
            if (this.ignoredFiles.delete(d), !CA(u.pid)) {
                s.push(u.pid), this.removeQuietly(d, {
                    what: `${t} of an exited extension host`
                }) && this.options.log.trace(`${ut} removed ${t} of exited extension host pid ${u.pid}`);
                continue;
            }
            r.push(u);
        }
        return {
            running: r,
            exited: s,
            ignored: i
        };
    }
    lastServedGeneration() {
        let e;
        try {
            e = tn.readFileSync(this.lastServedPath, "utf8");
        } catch (t) {
            if (_n(t, "ENOENT")) {
                this.lastServedProblem = void 0;
                return;
            }
            this.noteLastServedProblem(We(t), !1);
            return;
        }
        try {
            const t = xGe(JSON.parse(e), this.lastServedPath);
            return this.lastServedProblem = void 0, t;
        } catch (t) {
            this.noteLastServedProblem(We(t), !RA(t));
            return;
        }
    }
    servingGenerations() {
        const e = new Map;
        for (const t of this.runningHostRecords(this.servingDir, {
            what: "serving marker",
            parse: FGe
        }).running)for (const n of t.generations){
            const r = e.get(n) ?? [];
            r.push(t.pid), e.set(n, r);
        }
        return e;
    }
    noteLastServedProblem(e, t) {
        this.lastServedProblem !== e && (this.lastServedProblem = e, this.options.log.warn(`${ut} ignoring ${this.lastServedPath}: ${e}`), t && this.noteSidecar("last_served"));
    }
    noteSidecar(e) {
        try {
            this.options.onSidecar?.({
                record: e
            });
        } catch (t) {
            this.options.log.warn(`${ut} sidecar rejection not reported: ${We(t)}`);
        }
    }
    schedule(e) {
        this._store.isDisposed || this.timer.cancelAndSet(()=>{
            this.tick().then((t)=>t.kind === "offline" ? this.offlineRecheckMs() : this.pollIntervalMs(), (t)=>(this.pollFailed(t), this.pollIntervalMs())).then((t)=>this.schedule(t));
        }, e);
    }
    pollSoon(e) {
        if (!this.started || this._store.isDisposed) return;
        const t = Math.round(this.random() * TTe);
        this.options.log.trace(`${ut} ${e}: polling in ${t}ms`), this.schedule(t);
    }
    pollFailed(e) {
        const t = We(e);
        if (this.options.log.error(`${ut} poll failed: ${t}`), this.pollErrorTold !== t) {
            this.pollErrorTold = t;
            try {
                this.options.onPollError?.(e);
            } catch (n) {
                this.options.log.warn(`${ut} poll failure not reported: ${We(n)}`);
            }
        }
    }
    tick() {
        return this.inFlight ??= this.outcomes.observe(this.poll()).finally(()=>{
            this.inFlight = void 0, this.noteFollowing();
        }), this.inFlight;
    }
    noteFollowing() {
        if (!this.outcomes.following || this.options.onHeartbeat === void 0 || this._store.isDisposed) return;
        const e = this.followedSinceHeartbeat === void 0;
        this.followedSinceHeartbeat = !0, e && (this.beat(), this.heartbeatTimer.cancelAndSet(()=>this.beat(), h9));
    }
    beat() {
        if (this.followedSinceHeartbeat) {
            this.followedSinceHeartbeat = this.outcomes.following;
            try {
                this.options.onHeartbeat?.(this.heartbeat());
            } catch (e) {
                this.options.log.warn(`${ut} heartbeat not reported: ${We(e)}`);
            }
        }
    }
    heartbeat() {
        const e = Date.now(), t = this.currentGeneration(), n = this.pointerRead;
        return {
            channel: this.options.channel,
            ...this.moduleOf(t),
            state: ist({
                current: t,
                latest: n !== void 0 && e - n.at < h9 ? n.generation : void 0,
                cantRun: t !== void 0 && t === this.cantRun
            }),
            moduleAge: ast(t === void 0 || t === vs ? void 0 : this.builtAtOf(t), e)
        };
    }
    builtAtOf(e) {
        const t = mn.join(this.installDirOf(e), wa);
        try {
            return PS(tn.readFileSync(t), t).builtAt;
        } catch  {
            return;
        }
    }
    currentGeneration() {
        try {
            const e = tn.readFileSync(this.currentPointerPath, "utf8").trim();
            return e === "" ? void 0 : e;
        } catch  {
            return;
        }
    }
    moduleOf(e) {
        if (e === void 0) return {
            moduleVersion: "none"
        };
        const t = this.installedSequence(e);
        return {
            moduleVersion: e.slice(0, 12),
            ...t === void 0 ? {} : {
                moduleSequence: t
            }
        };
    }
    installedSequence(e) {
        try {
            const t = tn.readFileSync(mn.join(this.installDirOf(e), PA), "utf8").trim();
            return /^\d{1,16}$/.test(t) && Number.isSafeInteger(Number(t)) ? Number(t) : void 0;
        } catch  {
            return;
        }
    }
    recordSequence(e, t) {
        if (e.sequence === void 0 || this.installedSequence(e.generation) === e.sequence) return;
        const n = mn.join(this.installDirOf(e.generation), PA), r = `${n}.${process.pid}.${Date.now().toString(36)}`;
        try {
            t.assertHeld(), tn.writeFileSync(r, `${e.sequence}
`), tn.renameSync(r, n);
        } catch (s) {
            this.removeQuietly(r, {
                what: "publish number draft",
                quietly: !0
            }), this.options.log.warn(`${ut} publish number ${e.sequence} of generation ${e.generation.slice(0, 12)} not recorded: ${We(s)}; its metrics carry no module_sequence`);
        }
    }
    async poll() {
        const e = this.runningHostRecords(this.hostsDir, {
            what: "host descriptor",
            parse: UGe
        });
        if (this.noteTiming(Krt(e.running)), e.running.length === 0 && !this.options.enabledOverride) return this.idle(e);
        if (this.outcomes.following || this.options.log.info(`${ut} polling: agent harness on ` + (e.running.length === 0 ? "by env override" : `in ${e.running.map((a)=>`extension host pid ${a.pid} (enabled by ${a.enabledBy}, revision ${a.interfaceRevision}, floor ${a.floor.generation.slice(0, 12)})`).join(", ")}`)), this.outcomes.polling(), this.channelFile.record(), this.options.isOnline?.() === !1) return this.options.log.trace(`${ut} offline: nothing fetched; looking for a network again in ${Math.round(this.offlineRecheckMs() / 1e3)}s`), {
            kind: "offline"
        };
        let t;
        try {
            t = await this.fetch(this.pointerUrl, AS.bytes, "channel");
        } catch (a) {
            return this.fetchUnavailable("channel", a, `channel: ${We(a)}`);
        }
        const n = MS(t);
        let r;
        try {
            r = GGe(JSON.parse(Buffer.from(t).toString("utf8")), this.pointerUrl.href);
        } catch (a) {
            return a instanceof un ? this.refuse({
                generation: void 0,
                publication: n,
                hosts: []
            }, "pointer", We(a)) : this.unavailable("channel_not_json", `channel: ${We(a)}`);
        }
        const s = {
            pointer: r,
            sha256: n
        };
        this.pointerRead = {
            generation: r.generation,
            at: Date.now()
        };
        let i;
        try {
            const a = Brt(this.options.rootDir, this.lockLog);
            if (typeof a == "string") return this.unavailable("lock", a, {
                level: "trace"
            });
            i = a;
        } catch (a) {
            return this.unavailable(aV(a) ? "disk_full" : oV(a) ? "permissions" : "lock", `lock: ${We(a)}`);
        }
        try {
            return await this.pollLayout(s, e.running, i);
        } finally{
            i.release();
        }
    }
    async pollLayout({ pointer: e, sha256: t }, n, r) {
        const s = this.currentGeneration();
        if (e.generation === vs) return this.pointAtFloor(e, s, r);
        const i = this.selectionContext(s, n), a = this.inspectInstall(e.generation);
        if (s === e.generation && a.kind === "verified") {
            const d = this.noteCurrentCompatibility(a.manifest, n, i.lastServed);
            return this.cantRun = d === void 0 ? void 0 : e.generation, this.unavailableReason = void 0, d === void 0 ? {
                kind: "unchanged",
                generation: e.generation
            } : {
                kind: "unchanged",
                generation: e.generation,
                incompatible: d
            };
        }
        const o = {
            generation: e.generation,
            publication: t,
            hosts: n
        };
        if (this.refused?.key === this.refusalKey(o) && this.refused.settled) return {
            kind: "refused",
            generation: e.generation,
            reason: this.refused.reason,
            check: this.refused.check
        };
        s === e.generation ? this.options.log.warn(`${ut} current names generation ${e.generation.slice(0, 12)} but its install ${a.kind === "broken" ? a.problem : "is gone"}; staging it again`) : a.kind === "broken" && this.options.log.warn(`${ut} installed ${this.installDirOf(e.generation)} ${a.problem}; downloading again`);
        let l;
        try {
            tn.mkdirSync(this.versionsDir, {
                recursive: !0
            }), r.assertHeld(), this.sweepStaging(r), a.kind === "verified" ? _Te(a.manifest, n, i) : (l = {
                clock: ca.create()
            }, await this.download(e.generation, n, r, i, l)), this.recordSequence(e, r), await this.flipCurrent(e.generation, r), l?.clock.stop();
        } catch (d) {
            return this.timed(l, e.generation, this.failedStaging(d, o, e.generation));
        }
        return this.refused = void 0, this.unavailableReason = void 0, this.cantRun = void 0, this.prune(new Set([
            e.generation,
            ...s === void 0 ? [] : [
                s
            ]
        ]), r), this.options.log.info(s === e.generation ? `${ut} re-staged generation ${e.generation.slice(0, 12)} that current already named` : `${ut} staged generation ${e.generation.slice(0, 12)}` + (e.label === void 0 ? "" : ` (${e.label})`) + ` from ${this.options.channel}; current was ${s?.slice(0, 12) ?? "unset"}`), this.outcomes.applied("staged", e, s), this.timed(l, e.generation, {
            kind: "staged",
            generation: e.generation,
            previous: s
        });
    }
    failedStaging(e, t, n) {
        const r = n.slice(0, 12);
        return e instanceof wf ? this.unavailable("stage", `generation ${r} not staged: ${e.message}`, {
            generation: n
        }) : e instanceof Cf ? this.fetchUnavailable("fetch", e, `generation ${r} not fetched: ${e.message}`, n) : RA(e) ? this.unavailable(aV(e) ? "disk_full" : oV(e) ? "permissions" : "install", `generation ${r} not installed: ${e.message}`, {
            generation: n
        }) : e instanceof un && e.check === "schema" && e.message.includes(": not JSON:") ? this.unavailable("fetch_not_json", `generation ${r} not json: ${e.message}`, {
            generation: n
        }) : e instanceof cE ? this.refuse(t, "signature", `signature: ${e.message}`) : e instanceof un ? this.refuse(t, e.check, `${e.check}: ${e.message}`) : this.refuse(t, "verify", `verify: ${We(e)}`);
    }
    timed(e, t, n) {
        if (e === void 0 || !(n.kind === "staged" || n.kind === "refused" || n.kind === "unavailable")) return n;
        try {
            this.options.onStage?.({
                result: n.kind,
                channel: this.options.channel,
                ...this.moduleOf(t),
                durationMs: Math.round(e.clock.elapsed()),
                ...e.fetch === void 0 ? {} : {
                    fetch: e.fetch
                }
            });
        } catch (r) {
            this.options.log.warn(`${ut} staging time not reported: ${We(r)}`);
        }
        return n;
    }
    async pointAtFloor(e, t, n) {
        if (t === vs) return this.unavailableReason = void 0, {
            kind: "unchanged",
            generation: vs
        };
        try {
            tn.mkdirSync(this.versionsDir, {
                recursive: !0
            }), await this.flipCurrent(vs, n);
        } catch (r) {
            return this.unavailable("kill_switch", `kill switch not applied: ${We(r)}`);
        }
        return this.refused = void 0, this.unavailableReason = void 0, this.currentIncompatibleReason = void 0, this.prune(new Set(t === void 0 ? [] : [
            t
        ]), n), this.options.log.warn(`${ut} kill switch: channel ${this.options.channel} points at the floor` + (e.reason === void 0 ? "" : ` (${e.reason})`) + `; current was ${t?.slice(0, 12) ?? "unset"}; extension hosts return to their packed floor at the next turn boundary`), this.outcomes.applied("kill_switch", e, t), {
            kind: "floor",
            previous: t
        };
    }
    inspectInstall(e) {
        const t = this.installDirOf(e), n = mn.join(t, wa);
        let r;
        try {
            r = tn.readFileSync(n);
        } catch (s) {
            return _n(s, "ENOENT") || _n(s, "ENOTDIR") ? {
                kind: "absent"
            } : {
                kind: "broken",
                problem: `has an unreadable ${wa} (${We(s)})`
            };
        }
        try {
            this.judgeSignature(e, r, ()=>{
                const a = aVe(t);
                return a === void 0 && this.oversizedSignature === e ? {
                    kind: "too_large"
                } : mst(a);
            });
            const s = PS(r, n);
            this.checkManifest(s, e);
            const i = pst(t, s);
            return (this.verified?.generation !== e || this.verified.stamp !== i) && (gTe(t, s), this.verified = {
                generation: e,
                stamp: i
            }), {
                kind: "verified",
                manifest: s
            };
        } catch (s) {
            return this.verified?.generation === e && (this.verified = void 0), {
                kind: "broken",
                problem: `does not verify (${s instanceof un ? `${s.check}: ${s.message}` : s instanceof cE ? `signature: ${s.message}` : We(s)})`
            };
        }
    }
    noteCurrentCompatibility(e, t, n) {
        const r = p9(e, t, n);
        return this.currentIncompatibleReason !== r?.reason && (this.currentIncompatibleReason = r?.reason, r !== void 0 && this.options.log[iE.has(r.check) ? "info" : "warn"](`${ut} current names generation ${e.generation.slice(0, 12)}, which the extension host cannot run (${r.reason}); it serves its fallback until ${this.options.channel} moves`)), r;
    }
    idle({ exited: e, ignored: t }) {
        const n = [
            ...e.length === 0 ? [] : [
                `extension host pid ${e.join(", ")} not running`
            ],
            ...t.map((a)=>`ignored ${a}`)
        ], r = `no extension host has the agent harness on (${n.length === 0 ? `no descriptor under ${this.hostsDir}` : n.join("; ")})`, s = t.length > 0 ? "host_invalid" : e.length > 0 ? "host_exited" : "no_host", i = this.outcomes.following;
        return (i || this.idleReason !== r) && this.options.log[i ? "info" : "trace"](`${ut} idle: ${r}`), this.idleReason = r, {
            kind: "idle",
            reason: r,
            code: s
        };
    }
    unavailable(e, t, { generation: n, transient: r, level: s = "warn" } = {}) {
        return this.unavailableReason !== t && (this.unavailableReason = t, this.options.log[s](`${ut} unavailable, retrying every poll: ${t}`)), {
            kind: "unavailable",
            reason: t,
            code: e,
            generation: n,
            ...r === void 0 ? {} : {
                transient: r
            }
        };
    }
    fetchUnavailable(e, t, n, r) {
        const s = o9(t);
        return this.unavailable(`${e}_${s}`, n, {
            generation: r,
            transient: m9.has(s) ? {
                phase: e,
                class: s
            } : void 0
        });
    }
    async fetch(e, t, n) {
        let r;
        for(let s = 0;; s++){
            let i;
            try {
                i = await this.options.fetch(e, {
                    maxBytes: t,
                    requestIdleTimeoutMs: this.timing.requestIdleTimeoutMs
                });
            } catch (a) {
                const o = o9(a);
                if (s >= g9 || !m9.has(o) || this.lifetime.token.isCancellationRequested) throw new Cf(e, a);
                r = o;
                const l = Math.round(MBe(s, f9.baseMs, f9.capMs, this.random));
                this.options.log.trace(`${ut} ${o} fetching ${e.href}; attempt ${s + 2} of ${g9 + 1} in ${l}ms`);
                try {
                    await En(l, this.lifetime.token);
                } catch  {
                    throw new Cf(e, a);
                }
                continue;
            }
            if (i.byteLength > t) throw new Error(`${e.href}: ${i.byteLength} bytes, more than the ${t} accepted`);
            return r !== void 0 && this.outcomes.retried({
                class: r,
                phase: n
            }), i;
        }
    }
    refusalKey({ generation: e, publication: t, hosts: n }) {
        const r = new Set(n.map((s)=>`rev=${s.interfaceRevision};caps=${[
                ...s.requiredCapabilities
            ].sort().join(",")};natives=${[
                ...s.natives
            ].sort().join(",")};client=${s.clientVersion ?? ""};floor=${s.floor.builtAt ?? ""}`));
        return `${e ?? "<pointer>"}|${t}|${r.size === 0 ? "no-host" : [
            ...r
        ].sort().join("|")}`;
    }
    refuse(e, t, n) {
        const r = this.refusalKey(e), { generation: s } = e, i = this.refused?.key === r && this.refused.reason === n;
        return i || this.options.log[iE.has(t) ? "info" : "warn"](`${ut} refusing ${s === void 0 ? `pointer ${this.pointerUrl.href}` : `generation ${s.slice(0, 12)}`}: ${n}; current stays ${this.currentGeneration()?.slice(0, 12) ?? "unset"}`), this.refused = {
            key: r,
            generation: s,
            reason: n,
            check: t,
            settled: i || !STe.has(t)
        }, {
            kind: "refused",
            generation: s,
            reason: n,
            check: t
        };
    }
    removeQuietly(e, t) {
        try {
            return tn.rmSync(e, {
                recursive: !0,
                force: !0
            }), !0;
        } catch (n) {
            return _n(n, "ENOENT") ? !0 : (t.quietly || this.options.log.warn(`${ut} could not remove ${t.what} at ${e}: ${We(n)}`), !1);
        }
    }
    async fetchSignature(e) {
        const t = new URL(AA({
            generation: e,
            file: Ts
        }), this.options.baseUrl);
        try {
            return {
                kind: "bytes",
                bytes: await this.fetch(t, Vi.bytes, "fetch")
            };
        } catch (n) {
            const r = n instanceof Cf ? o9(n) : void 0;
            if (r === "not_found" || r === "forbidden") return {
                kind: "absent"
            };
            if (r === "too_large") return {
                kind: "too_large"
            };
            throw n;
        }
    }
    judgeSignature(e, t, n) {
        const r = this.options.signatures;
        if (r === void 0) return;
        const s = n(), i = s.kind === "bytes" ? s.bytes : void 0, a = s.kind === "too_large" ? tVe() : sVe({
            manifest: t,
            signature: i,
            keys: r.keys
        }), o = `generation ${e.slice(0, 12)} ${iVe(a)}`, l = `${e} ${a.status}`;
        if (this.toldSignature !== l && (this.toldSignature = l, this.options.onSignature?.({
            generation: e,
            status: a.status
        }), a.status === "valid" ? this.options.log.info(`${ut} signature: ${o}`) : r.enforce || this.options.log.info(`${ut} signature not enforced in this build: ${o}; staging it anyway`)), a.status !== "valid" && r.enforce) {
            const d = (a.status === "invalid" || a.status === "malformed") && i !== void 0 ? ` (${wa} sha256 ${MS(t).slice(0, 12)}, ${Ts} sha256 ${MS(i).slice(0, 12)})` : "";
            throw new cE(`${o}${d}`);
        }
    }
    checkManifest(e, t, n = [], r) {
        if (e.generation !== t) throw new un(`manifest is for generation ${e.generation.slice(0, 12)}, pointer names ${t.slice(0, 12)}`, "hash");
        qGe(e), r !== void 0 && _Te(e, n, r);
    }
    selectionContext(e, t) {
        const n = this.lastServedGeneration(), r = n === void 0 ? void 0 : this.installedManifest(n), s = r === void 0 ? void 0 : FA(r);
        if (e === void 0 || e === vs) return {
            lastServed: s,
            running: void 0
        };
        const i = this.installedManifest(e), a = i !== void 0 && p9(i, t, s) === void 0 ? {
            generation: e,
            module: FA(i)
        } : void 0;
        return {
            lastServed: s,
            running: a
        };
    }
    installedManifest(e) {
        try {
            const t = mn.join(this.installDirOf(e), wa);
            return PS(tn.readFileSync(t), t);
        } catch  {
            return;
        }
    }
    async download(e, t, n, r, s) {
        const i = new URL(AA({
            generation: e,
            file: wa
        }), this.options.baseUrl), a = await this.fetch(i, qt.manifestBytes, "fetch"), o = this.options.signatures === void 0 ? {
            kind: "absent"
        } : await this.fetchSignature(e);
        this.judgeSignature(e, a, ()=>o), this.oversizedSignature = o.kind === "too_large" ? e : void 0;
        const l = PS(a, i.href);
        this.checkManifest(l, e, t, r);
        const d = Object.values(l.files).reduce((f, v)=>f + v.bytes, 0);
        if (d > _9) throw new un(`${i.href}: declares ${d} bytes of files, more than the ${_9} a generation may have`, "schema");
        const u = {
            durationMs: 0,
            bytes: 0,
            files: 0
        }, m = tn.mkdtempSync(mn.join(this.versionsDir, `${oE}${e.slice(0, 12)}-`));
        try {
            s.fetch = u;
            const f = ca.create();
            try {
                for (const [v, T] of Object.entries(l.files)){
                    const S = await this.fetch(new URL(AA({
                        generation: e,
                        file: v
                    }), this.options.baseUrl), T.bytes, "fetch");
                    wV(v, T, S), u.bytes += S.byteLength, u.files++, tn.writeFileSync(mn.join(m, v), S);
                }
            } finally{
                u.durationMs = Math.round(f.elapsed());
            }
            tn.writeFileSync(mn.join(m, wa), a), o.kind === "bytes" && tn.writeFileSync(mn.join(m, Ts), o.bytes), gTe(m, l), await this.installStaged({
                generation: e,
                stagingDir: m
            }, t, n, r.lastServed);
        } catch (f) {
            throw this.removeQuietly(m, {
                what: "staging directory",
                quietly: !0
            }), f;
        }
        this.options.log.info(`${ut} verified generation ${e.slice(0, 12)} (${l.label}, ${u.files} files, ${u.bytes} bytes fetched in ${u.durationMs}ms) -> ${this.installDirOf(e)}`);
    }
    async installStaged({ generation: e, stagingDir: t }, n, r, s) {
        const i = this.installDirOf(e);
        if (!tn.existsSync(i)) {
            await nE(r, {
                from: t,
                to: i
            }, Rf);
            return;
        }
        const a = this.inspectInstall(e);
        if (a.kind === "verified" && p9(a.manifest, n, s) === void 0) {
            this.options.log.info(`${ut} generation ${e.slice(0, 12)} was installed meanwhile; keeping that copy`), this.removeQuietly(t, {
                what: "staging directory",
                quietly: !0
            });
            return;
        }
        const o = mn.join(this.versionsDir, `${oE}${e.slice(0, 12)}-replaced-${process.pid}-${Date.now().toString(36)}`);
        await nE(r, {
            from: i,
            to: o
        }, Rf), await nE(r, {
            from: t,
            to: i
        }, Rf), this.removeQuietly(o, {
            what: "replaced install",
            quietly: !0
        });
    }
    async flipCurrent(e, t) {
        const n = `${this.currentPointerPath}.${process.pid}.${Date.now().toString(36)}`;
        try {
            tn.writeFileSync(n, `${e}
`), await nE(t, {
                from: n,
                to: this.currentPointerPath
            }, Rf);
        } catch (r) {
            throw this.removeQuietly(n, {
                what: "pointer draft",
                quietly: !0
            }), r;
        }
    }
    sweepStaging(e) {
        for (const n of this.listVersions())n.startsWith(oE) && (e.assertHeld(), this.removeQuietly(mn.join(this.versionsDir, n), {
            what: "staging leftover"
        }));
        let t;
        try {
            t = tn.readdirSync(this.options.rootDir);
        } catch  {
            return;
        }
        for (const n of t)kTe.test(n) && (e.assertHeld(), this.removeQuietly(mn.join(this.options.rootDir, n), {
            what: "pointer draft"
        }));
    }
    prune(e, t) {
        const n = this.lastServedGeneration(), r = this.servingGenerations();
        for (const s of this.listVersions()){
            if (e.has(s) || s === n) continue;
            const i = r.get(s);
            if (i !== void 0) {
                this.options.log.info(`${ut} keeping generation ${s.slice(0, 12)}: extension host pid ${i.join(", ")} still serving it`);
                continue;
            }
            if (s !== this.currentGeneration()) {
                try {
                    t.assertHeld();
                } catch (a) {
                    this.options.log.warn(`${ut} prune stopped: ${We(a)}`);
                    return;
                }
                this.removeQuietly(mn.join(this.versionsDir, s), {
                    what: `generation ${s.slice(0, 12)}`
                }) && this.options.log.trace(`${ut} pruned generation ${s.slice(0, 12)}`);
            }
        }
    }
    listVersions() {
        try {
            return tn.readdirSync(this.versionsDir);
        } catch  {
            return [];
        }
    }
};

}
