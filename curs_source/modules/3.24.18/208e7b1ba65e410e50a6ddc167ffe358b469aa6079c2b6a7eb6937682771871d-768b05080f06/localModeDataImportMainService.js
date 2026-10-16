import { Js, Rl } from "./buildFlags.js";
import { Yl } from "./constants.js";
import { Xl, wT } from "./encryptionService.js";
import { Ye, qe } from "./environmentMainService.js";
import { B } from "./ipc.js";
import { Vt, ht } from "./lifecycleMainService.js";
import { dU } from "./localModeDataImport.js";
import { $Oe, HOe, JOe, Qu, TU, Uo, VOe, YOe, ZOe, Zu, _U, e2e, fU, jOe, kU, qOe, qf, t2e, vU, zOe } from "./localModeDataImport_2.js";
import { Z, te } from "./log.js";
import { Xu, vl } from "./main.js";
import { L, on, st, xn } from "./path.js";
import { ie } from "./pfs.js";
import { ds } from "./storage_2.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { vt } from "./uuid.js";
import { p0 } from "./windowImpl.js";
import { promises as Ct } from "fs";
import { homedir as mU } from "os";
function Vf() {
    switch(process.platform){
        case "win32":
            {
                const e = process.env.APPDATA;
                return e ? L(e, "Cursor") : L(process.env.USERPROFILE ?? mU(), "AppData", "Roaming", "Cursor");
            }
        case "darwin":
            return L(mU(), "Library", "Application Support", "Cursor");
        case "linux":
            return L(process.env.XDG_CONFIG_HOME ?? L(mU(), ".config"), "Cursor");
        default:
            throw new Error(`Unsupported platform: ${process.platform}`);
    }
}
function JE(e) {
    return L(e, VOe);
}
async function pU(e = Vf()) {
    try {
        return (await Ct.stat(L(e, "User"))).isDirectory();
    } catch  {
        return !1;
    }
}
async function IOe(e = Vf()) {
    let t;
    try {
        t = await Ct.readFile(L(e, jOe), "utf8");
    } catch  {
        return !1;
    }
    const n = Number.parseInt(t.trim(), 10);
    return !Number.isSafeInteger(n) || n <= 0 ? !1 : jf(n);
}
async function Oot(e, t = Vf()) {
    const n = AOe(e);
    if (!await ie.exists(n)) return 0;
    const r = await MOe(n);
    if (r === void 0) return;
    if (r.size === 0) return 0;
    const s = AOe(t), i = await ie.exists(s) ? await MOe(s) : new Set;
    if (i === void 0) return;
    let a = 0;
    for (const o of r)i.has(o) || a++;
    return a;
}
function AOe(e) {
    return L(e, "User", "globalStorage", _U);
}
async function MOe(e) {
    if (!await ie.exists(e)) return;
    let t;
    try {
        t = await DOe(e, !0);
    } catch  {
        return;
    }
    try {
        const n = await OOe(t, "SELECT key FROM cursorDiskKV WHERE key >= ? AND key < ?", [
            kU,
            HOe
        ]), r = new Set;
        for (const s of n){
            const i = s.key.slice(kU.length);
            i.length > 0 && !i.startsWith(qOe) && r.add(i);
        }
        return r;
    } catch  {
        return;
    } finally{
        await LOe(t).catch(()=>{});
    }
}
async function Lot(e, t, n) {
    if (!Js.localMode) throw new Error("Cursor data import is only available in local mode");
    const r = Vf();
    await BOe(r, e);
    const s = vt(), i = {
        version: 1,
        requestedByPid: process.pid,
        relaunchToken: s
    }, a = await WOe(e);
    try {
        await Ct.rm(JE(e), {
            force: !0
        }), await Fot(r, e, t, n), await xOe(JE(e), i), await Ct.rm(L(e, qf), {
            force: !0
        });
    } catch (o) {
        throw await Ua(L(e, Uo), n), o;
    } finally{
        await a();
    }
    return s;
}
async function Uot(e) {
    const t = L(e, qf);
    try {
        return jot(JSON.parse(await Ct.readFile(t, "utf8"))).message;
    } catch  {
        return;
    } finally{
        await Ct.rm(t, {
            force: !0
        }).catch(()=>{});
    }
}
async function Fot(e, t, n, r) {
    if (await BOe(e, t), !await pU(e)) throw new Error("No Cursor user data was found to import");
    if (await IOe(e)) throw new Error("Quit existing Cursor, then select Save again");
    const s = L(e, "User"), i = L(t, Uo), a = L(t, Qu), o = L(i, "globalStorage", _U), l = {
        hasOpenAIBaseUrl: !0,
        openAIBaseUrl: n.baseUrl,
        hasUseOpenAIKey: !0,
        useOpenAIKey: !0,
        defaultAgentRunMode: n.defaultAgentRunMode,
        encryptedKey: n.encryptedApiKey,
        legacyKey: void 0
    };
    await Ua(i, r), await Ua(a, r), await ie.copy(s, i, {
        preserveSymlinks: !0
    }), await Vot(o, l), await Ct.rm(`${o}.backup`, {
        force: !0
    }), r.info(`[local-mode-data-import] prepared ${i} from ${s}`);
}
async function Vot(e, t) {
    if (!await ie.exists(e)) throw new Error("Imported Cursor global storage database is missing");
    const n = await DOe(e);
    try {
        const r = await OOe(n, "SELECT key, value FROM ItemTable WHERE key IN (?, ?)", [
            Yl,
            ds
        ]), s = new Map(r.map((o)=>[
                o.key,
                o.value
            ])), i = UOe(s.get(Yl), Yl) ?? {};
        if (t.hasOpenAIBaseUrl ? i.openAIBaseUrl = t.openAIBaseUrl : delete i.openAIBaseUrl, t.hasUseOpenAIKey ? i.useOpenAIKey = t.useOpenAIKey : delete i.useOpenAIKey, t.defaultAgentRunMode === "allowlist_without_sandbox") {
            const o = $f(i.composerState) ? i.composerState : {}, d = (Array.isArray(o.modes4) ? o.modes4 : []).find((u)=>typeof u == "object" && u !== null && u.id === "agent");
            d !== void 0 && (d.autoRun = !0, d.fullAutoRun = !1, d.smartModeAutoRun = !1), i.composerState = o;
        }
        const a = UOe(s.get(ds), ds) ?? {};
        a[Yl] = 0, POe(a, vU, t.encryptedKey !== void 0), POe(a, TU, t.legacyKey !== void 0), t.defaultAgentRunMode === "allowlist_without_sandbox" && (a["cursor/sandboxAutoRunSettingEnabled"] = 0, a["cursor/localAgentTeamDefaultRunModeApplied"] = 0), a[dU] = 1, await Ju(n, "BEGIN IMMEDIATE", []);
        try {
            await Yu(n, Yl, JSON.stringify(i)), await NOe(n, vU, t.encryptedKey), await NOe(n, TU, t.legacyKey), t.defaultAgentRunMode === "allowlist_without_sandbox" && (await Yu(n, "cursor/sandboxAutoRunSettingEnabled", "false"), await Yu(n, "cursor/localAgentTeamDefaultRunModeApplied", "true")), await Yu(n, dU, "true"), await Yu(n, ds, JSON.stringify(a)), await Ju(n, "COMMIT", []);
        } catch (o) {
            throw await Ju(n, "ROLLBACK", []), o;
        }
    } finally{
        await LOe(n);
    }
}
function POe(e, t, n) {
    n ? e[t] = 1 : delete e[t];
}
async function NOe(e, t, n) {
    if (n === void 0) {
        await Ju(e, "DELETE FROM ItemTable WHERE key = ?", [
            t
        ]);
        return;
    }
    await Yu(e, t, n);
}
async function Yu(e, t, n) {
    await Ju(e, "INSERT INTO ItemTable (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value", [
        t,
        n
    ]);
}
async function DOe(e, t = !1) {
    const r = (await import("@vscode/sqlite3")).default.Database, s = t ? ZOe : e2e, i = await new Promise((a, o)=>{
        const l = new r(e, s, (d)=>{
            d ? o(d) : a(l);
        });
    });
    return await Ju(i, `PRAGMA busy_timeout = ${JOe}`, []), i;
}
async function OOe(e, t, n) {
    return new Promise((r, s)=>{
        e.all(t, n, (i, a)=>i ? s(i) : r(a));
    });
}
async function Ju(e, t, n) {
    return new Promise((r, s)=>{
        e.run(t, n, (i)=>i ? s(i) : r());
    });
}
async function LOe(e) {
    return new Promise((t, n)=>{
        e.close((r)=>r ? n(r) : t());
    });
}
function UOe(e, t) {
    if (e === void 0) return;
    const n = JSON.parse(typeof e == "string" ? e : e.toString("utf8"));
    if (!$f(n)) throw new Error(`Storage value ${t} is not a JSON object`);
    return n;
}
function $f(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
}
function jot(e) {
    if (!$f(e) || e.version !== 1 || e.kind !== "error" || typeof e.message != "string") throw new Error("Invalid local-mode data import result");
    return {
        version: 1,
        kind: "error",
        message: e.message
    };
}
async function xOe(e, t) {
    await Ct.mkdir(st(e), {
        recursive: !0
    });
    const n = `${e}.${process.pid}.${vt()}.tmp`;
    await Ct.writeFile(n, JSON.stringify(t), {
        encoding: "utf8",
        mode: 384
    }), await Ct.rm(e, {
        force: !0
    }), await Ct.rename(n, e);
}
async function Ua(e, t) {
    if (!await ie.exists(e)) return;
    const n = L(st(e), `${fU}${vt()}`);
    try {
        await ie.rename(e, n);
    } catch (r) {
        if (Xu(r)) return;
        throw r;
    }
    FOe(n, t);
}
function FOe(e, t) {
    ie.rm(e).catch((n)=>{
        t.warn(`[local-mode-data-import] failed to remove ${e}: ${vl(n)}`);
    });
}
async function WOe(e) {
    await Ct.mkdir(e, {
        recursive: !0
    });
    const t = L(e, $Oe), n = L(t, "pid"), r = Date.now() + zOe, s = vt();
    for(;;){
        let i = !1;
        try {
            await Ct.mkdir(t), i = !0;
        } catch (o) {
            if (!Hf(o, "EEXIST")) throw o;
        }
        if (i) {
            try {
                await Ct.writeFile(n, JSON.stringify({
                    pid: process.pid,
                    token: s
                }), {
                    encoding: "utf8",
                    mode: 384
                });
            } catch (o) {
                throw await Ct.rm(t, {
                    recursive: !0,
                    force: !0
                }), o;
            }
            return async ()=>{
                (await gU(n))?.token === s && await Ct.rm(t, {
                    recursive: !0,
                    force: !0
                });
            };
        }
        const a = await gU(n);
        if (a === void 0) {
            if (await Kot(t) >= YOe) {
                await qot(t);
                continue;
            }
            if (Date.now() >= r) throw new Zu("Timed out waiting for another local-mode data import");
            await new Promise((o)=>setTimeout(o, 100));
            continue;
        }
        if (jf(a.pid)) {
            if (Date.now() >= r) throw new Zu(`Timed out waiting for local-mode data import process ${a.pid}`);
            await new Promise((o)=>setTimeout(o, 100));
            continue;
        }
        try {
            await Ct.unlink(n);
        } catch (o) {
            if (!Xu(o)) throw o;
            continue;
        }
        try {
            await Ct.rmdir(t);
        } catch (o) {
            if (!Xu(o) && !Hf(o, "ENOTEMPTY")) throw o;
        }
    }
}
async function qot(e) {
    const t = L(e, "cleanup");
    let n;
    try {
        n = await Ct.open(t, "wx", 384), await n.writeFile(JSON.stringify({
            pid: process.pid,
            token: vt()
        }), "utf8"), await n.close(), n = void 0, await Ct.rm(e, {
            recursive: !0,
            force: !0
        });
    } catch (r) {
        if (await n?.close(), Hf(r, "EEXIST")) {
            const s = await gU(t);
            if (s !== void 0 && !jf(s.pid)) try {
                await Ct.unlink(t);
            } catch (i) {
                if (!Xu(i)) throw i;
            }
            return;
        }
        if (Xu(r)) return;
        throw r;
    }
}
async function Kot(e) {
    try {
        return Date.now() - (await Ct.stat(e)).mtimeMs;
    } catch  {
        return Number.POSITIVE_INFINITY;
    }
}
async function gU(e) {
    for(let t = 0; t < 5; t++)try {
        const n = JSON.parse(await Ct.readFile(e, "utf8"));
        return $f(n) && typeof n.pid == "number" && Number.isSafeInteger(n.pid) && n.pid > 0 && typeof n.token == "string" && p0(n.token) ? {
            pid: n.pid,
            token: n.token
        } : void 0;
    } catch  {
        await new Promise((n)=>setTimeout(n, 20));
    }
}
async function BOe(e, t) {
    const n = await GOe(e), r = await GOe(t);
    if (n === r) throw new Error("Source and target Cursor user-data paths must be different");
}
async function GOe(e) {
    let t;
    try {
        t = await Ct.realpath(e);
    } catch  {
        t = xn(on(e));
    }
    return process.platform === "win32" ? t.toLowerCase() : t;
}
function jf(e) {
    try {
        return process.kill(e, 0), !0;
    } catch (t) {
        return !Hf(t, "ESRCH");
    }
}
function Hf(e, t) {
    return typeof e == "object" && e !== null && "code" in e && e.code === t;
}
var QE;
export { $f, AOe, BOe, DOe, FOe, Fot, GOe, Hf, IOe, JE, Ju, Kot, LOe, Lot, MOe, NOe, OOe, Oot, POe, QE, UOe, Ua, Uot, Vf, Vot, WOe, Yu, gU, jf, jot, pU, qot, xOe };
var __wakaru_Jot_initialized = false;
export function Jot() {
if (__wakaru_Jot_initialized) return;
__wakaru_Jot_initialized = true;
"use strict";
h(), Rl(), Ye(), wT(), Vt(), te(), t2e(), QE = class {
    constructor(e, t, n, r){
        this.environmentMainService = e, this.encryptionMainService = t, this.lifecycleMainService = n, this.logService = r;
    }
    async getAvailability() {
        if (!Js.localMode) return {
            kind: "unavailable"
        };
        this.previousImportErrorPromise ??= Uot(this.environmentMainService.userDataPath);
        const e = await this.previousImportErrorPromise;
        return e !== void 0 ? {
            kind: "error",
            message: e,
            replacedChatCount: await this.countReplacedChats()
        } : await pU() ? {
            kind: "available",
            replacedChatCount: await this.countReplacedChats()
        } : {
            kind: "unavailable"
        };
    }
    async countReplacedChats() {
        try {
            return await Oot(this.environmentMainService.userDataPath);
        } catch (e) {
            this.logService.warn(`[local-mode-data-import] failed to count replaced chats: ${e instanceof Error ? e.message : String(e)}`);
            return;
        }
    }
    async stageImport(e) {
        if (!Js.localMode) return {
            kind: "error",
            message: "Cursor data import is only available in local mode"
        };
        const t = Vf();
        if (!await pU(t)) return {
            kind: "source-missing"
        };
        if (await IOe(t)) return {
            kind: "source-running"
        };
        try {
            const n = e.baseUrl.trim(), r = e.apiKey.trim();
            if (!n || !r) return {
                kind: "error",
                message: "Base URL and API Key are required."
            };
            const s = await this.encryptionMainService.encrypt(r);
            return {
                kind: "staged",
                relaunchToken: await Lot(this.environmentMainService.userDataPath, {
                    baseUrl: n,
                    encryptedApiKey: s,
                    defaultAgentRunMode: e.defaultAgentRunMode
                }, this.logService)
            };
        } catch (n) {
            return {
                kind: "error",
                message: n instanceof Error ? n.message : String(n)
            };
        }
    }
    async relaunchPreparedImport(e) {
        if (!Js.localMode) throw new Error("Cursor data import is only available in local mode");
        await this.lifecycleMainService.relaunch({
            addArgs: [
                `--local-mode-data-import-token=${e}`
            ]
        });
    }
}, QE = B([
    w(0, qe),
    w(1, Xl),
    w(2, ht),
    w(3, Z)
], QE);

}
