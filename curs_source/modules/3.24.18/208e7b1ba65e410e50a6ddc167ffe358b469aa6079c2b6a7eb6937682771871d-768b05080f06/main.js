import { s3 } from "./agentHostUpdate.config.contribution.js";
import { Dct, tm } from "./app.js";
import { $I, Kp } from "./argv.js";
import { sh } from "./argvHelper.js";
import { Vn } from "./arrays.js";
import { Qn, le } from "./async.js";
import { J2e, Yct } from "./bufferLog.js";
import { Js } from "./buildFlags.js";
import { at, ot } from "./configuration.js";
import { E } from "./configurationRegistry.js";
import { G2e, Lct } from "./configurationService.js";
import { Hd, pe } from "./descriptors.js";
import { Wct, ub } from "./diagnosticsService.js";
import { a7 } from "./dialogMainService.js";
import { o7 } from "./dialogs.js";
import { bt } from "./diskFileSystemProviderServer_2.js";
import { FS, uM } from "./diskFileSystemProvider_2.js";
import { Pi, Ye, qe } from "./environmentMainService.js";
import { Db } from "./environmentService_2.js";
import { Ka } from "./errorMessage.js";
import { v4 } from "./errorTelemetry_2.js";
import { Nv, Ve } from "./errors.js";
import { O, se } from "./event.js";
import { VI } from "./extensionHostDebugIpc_2.js";
import { Lr, c3, l3, o3 } from "./extpath.js";
import { Ult, kb } from "./filePolicyService.js";
import { nm, qct } from "./fileService.js";
import { Blt, I9e } from "./fileUserDataProvider.js";
import { Wt, cn } from "./files.js";
import { Y2e, zct } from "./instantiationService.js";
import { Oe, Qr } from "./ipc.js";
import { J3 } from "./ipc.net.js";
import { ST, rF, rp, zl } from "./ipc.net_2.js";
import { $l, BR, Zs, gm, ha, nT } from "./labels.js";
import { xc } from "./launchMainService.js";
import { j, ve } from "./lifecycle.js";
import { Vt, ht, ls } from "./lifecycleMainService.js";
import { $f, FOe, Hf, JE, Ua, WOe, jf, xOe } from "./localModeDataImportMainService.js";
import { KOe, QOe, Qu, Uo, XE, XOe, Zu, fU, qf, t2e } from "./localModeDataImport_2.js";
import { Z, op, rd, t6, te } from "./log.js";
import { C9e, Wlt } from "./logService.js";
import { A9e, Glt } from "./logger.js";
import { Aa, Ape, Ro } from "./loggerService_2.js";
import { rc } from "./nativeHostMainService.js";
import { Olt, Zf } from "./nativePolicyService.js";
import { $, $e } from "./network.js";
import { Ne } from "./nls.js";
import { Ce, L, _t, xn } from "./path.js";
import { At, sa } from "./performance.js";
import { gn, ie } from "./pfs.js";
import { ee, oe, os, q } from "./platform.js";
import { bo, cO, fi } from "./policy.js";
import { Ei, bi } from "./process.js";
import { Ha, Xn } from "./product.js";
import { Tt, et } from "./productService.js";
import { Hg, Su } from "./protocol.js";
import { Plt, Tb } from "./requestService_2.js";
import { fs, li } from "./request_2.js";
import { Xct, pb } from "./rpcDevtoolsMainService.js";
import { BS, gM } from "./serviceCollection.js";
import { Ru, hO } from "./sign.js";
import { Dlt, E9e } from "./signService.js";
import { br, fr, q0 } from "./state.js";
import { DI, s7 } from "./stateService.js";
import { jn } from "./strings.js";
import { jG, kS } from "./telemetrySource.js";
import { bO, nf } from "./telemetryUtils.js";
import { KT, gc, no, wn } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { hA, wG } from "./tunnel.js";
import { Qf, klt } from "./tunnelService.js";
import { fm } from "./unc.js";
import { Rxe } from "./update.config.contribution.js";
import { x, ye } from "./uri.js";
import { Br, Oi } from "./uriIdentity.js";
import { Flt, e_ } from "./uriIdentityService.js";
import { Ob } from "./userDataPath.js";
import { $k, Rc, Wi } from "./userDataProfile_3.js";
import { $ct } from "./wait.js";
import { p0 } from "./windowImpl.js";
import { unlinkSync as $lt } from "fs";
import { writeFileSync as Bct } from "fs";
import { promises as Ct } from "fs";
import { tmpdir as Gct } from "os";
import { app as M9e } from "electron";
import { promises as N9e } from "fs";
import { dialog as P9e } from "electron";
import { createConnection as _4e } from "net";
import { createServer as f4e } from "net";
import mGe from "assert";
function Fx(e) {
    if (typeof e != "string") return;
    const t = [
        "\\\\.\\UNC\\",
        "\\\\?\\UNC\\",
        "\\\\"
    ];
    let n;
    for (const r of t){
        if (e.indexOf(r) !== 0) continue;
        const i = e.indexOf("\\", r.length);
        if (i === -1) continue;
        const a = e.substring(r.length, i);
        if (a) {
            n = a;
            break;
        }
    }
    return n;
}
function m5(e, t = " ") {
    const n = PUe(e, t);
    return Zo(n, t);
}
function PUe(e, t) {
    if (!e || !t) return e;
    const n = t.length;
    let r = 0;
    if (n === 1) {
        const s = t.charCodeAt(0);
        for(; r < e.length && e.charCodeAt(r) === s;)r++;
    } else for(; e.startsWith(t, r);)r += n;
    return e.substring(r);
}
function Zo(e, t) {
    if (!e || !t) return e;
    const n = t.length, r = e.length;
    if (n === 1) {
        let i = r;
        const a = t.charCodeAt(0);
        for(; i > 0 && e.charCodeAt(i - 1) === a;)i--;
        return e.substring(0, i);
    }
    let s = r;
    for(; s > 0 && e.endsWith(t, s);)s -= n;
    return e.substring(0, s);
}
function Pxe(e, t = ee) {
    const n = t ? o3 : c3;
    return !(!e || e.length === 0 || /^\s+$/.test(e) || (n.lastIndex = 0, n.test(e)) || t && l3.test(e) || e === "." || e === ".." || t && e[e.length - 1] === "." || t && e.length !== e.trim().length || e.length > 255);
}
function y4e(e) {
    return new Promise((t, n)=>{
        const r = f4e();
        r.on("error", n), r.listen(e, ()=>{
            r.removeListener("error", n), t(new rF(r));
        });
    });
}
function w4e(e, t) {
    return new Promise((n, r)=>{
        const s = _4e(e, ()=>{
            s.removeListener("error", r), n(J3.fromSocket(new rp(s, `ipc-client${t}`), t));
        });
        s.once("error", r);
    });
}
function a5e(e) {
    if (e.verbose) return 1;
    if (typeof e.logLevel == "string") {
        const t = c5e(e.logLevel.toLowerCase());
        if (t !== void 0) return t;
    }
    return op;
}
function c5e(e) {
    switch(e){
        case "trace":
            return 1;
        case "debug":
            return 2;
        case "info":
            return 3;
        case "warn":
            return 4;
        case "error":
            return 5;
        case "critical":
            return 5;
        case "off":
            return 0;
    }
}
function uGe(e, t) {
    const n = t[jG];
    return e[kS] !== void 0 || typeof n != "string" || n.length === 0 ? e : {
        ...e,
        [kS]: n
    };
}
function pGe(e, t, n) {
    const r = (d, u)=>{
        console.warn(E(1915, null, d, u));
    }, s = (d)=>{
        console.warn(E(1916, null, d));
    }, i = (d, u)=>{
        console.warn(E(1917, null, d, u));
    }, a = (d)=>({
            onUnknownOption: (u)=>{
                $I.includes(d) || console.warn(E(1918, null, u, d));
            },
            onMultipleValues: r,
            onEmptyValue: s,
            onDeprecatedOption: i,
            getSubcommandReporter: $I.includes(d) ? a : void 0
        }), l = VI(e, n, t ? {
        onUnknownOption: (d)=>{
            console.warn(E(1919, null, d));
        },
        onMultipleValues: r,
        onEmptyValue: s,
        onDeprecatedOption: i,
        getSubcommandReporter: a
    } : void 0);
    return l.goto && l._.forEach((d)=>mGe(/^(\w:)?[^:]+(:\d*){0,2}:?$/.test(d), E(1920, null))), l;
}
function hGe(e) {
    const t = e.findIndex((n)=>!/^-/.test(n));
    if (t > -1) return [
        ...e.slice(0, t),
        ...e.slice(t + 1)
    ];
}
function gGe(e) {
    let [, ...t] = e;
    process.env.VSCODE_DEV && (t = hGe(t) || []);
    const n = !xc(process.env);
    return uGe(pGe(t, n, Kp), process.env);
}
function fGe(e, ...t) {
    const n = e.indexOf("--");
    return n === -1 ? e.push(...t) : e.splice(n, 0, ...t), e;
}
async function xot(e, t, n) {
    if (!Js.localMode) return;
    const r = JE(e);
    Hot(e, n), Got(e, n);
    const s = L(e, "User"), i = L(e, Qu), a = await ie.exists(r), o = await ie.exists(s), l = await ie.exists(i);
    if (!a && (o || !l)) return;
    const d = await WOe(e);
    try {
        await zot(e, n);
        let u;
        try {
            u = $ot(JSON.parse(await Ct.readFile(r, "utf8")));
        } catch (m) {
            if (Xu(m)) return;
            await hU(e, r, m, n);
            return;
        }
        if (t !== u.relaunchToken && jf(u.requestedByPid)) {
            n.warn("[local-mode-data-import] another launch is waiting for the requesting process to relaunch");
            return;
        }
        if (t !== u.relaunchToken) {
            await Ct.rm(r, {
                force: !0
            }), await Ua(L(e, Uo), n), n.warn("[local-mode-data-import] discarded an import marker without its one-time relaunch token");
            return;
        }
        if (!await Yot(u.requestedByPid, KOe)) {
            const m = new Error(`Requesting process ${u.requestedByPid} did not exit before import`);
            await hU(e, r, m, n);
            return;
        }
        try {
            await Wot(e, n), await Ct.rm(r, {
                force: !0
            }), await Ct.rm(L(e, qf), {
                force: !0
            }), n.info("[local-mode-data-import] imported Cursor user data");
        } catch (m) {
            if (await hU(e, r, m, n), m instanceof Zu) throw m;
        }
    } finally{
        await d();
    }
}
async function Wot(e, t) {
    const n = L(e, "User"), r = L(e, Uo), s = L(e, Qu);
    if (!await ie.exists(r)) throw new Error("Prepared Cursor user data is missing");
    let i = !1;
    try {
        await ie.exists(n) && (await ie.rename(n, s), i = !0), await ie.rename(r, n);
    } catch (a) {
        if (i && !await ie.exists(n)) try {
            await ie.rename(s, n);
        } catch (o) {
            throw new Zu(`Import failed and the original User directory could not be restored: ${vl(o)}`);
        }
        throw a;
    }
    await Bot(e, s, t), t.info(`[local-mode-data-import] activated prepared user data at ${n}`);
}
async function Bot(e, t, n) {
    if (!await ie.exists(t)) return;
    const r = L(e, `${XE}${Date.now()}`);
    try {
        await ie.rename(t, r);
    } catch (s) {
        n.warn(`[local-mode-data-import] failed to retain ${r}: ${vl(s)}`), await Ua(t, n);
        return;
    }
    n.info(`[local-mode-data-import] kept pre-import user data at ${r}`);
}
function Got(e, t) {
    Ct.readdir(e, {
        withFileTypes: !0
    }).then(async (n)=>{
        const r = n.filter((s)=>s.isDirectory() && s.name.startsWith(XE)).map((s)=>({
                name: s.name,
                createdAt: Number.parseInt(s.name.slice(XE.length), 10)
            })).sort((s, i)=>i.createdAt - s.createdAt);
        for (const [s, i] of r.entries()){
            const a = !Number.isSafeInteger(i.createdAt) || Date.now() - i.createdAt >= XOe;
            s < QOe && !a || await Ua(L(e, i.name), t);
        }
    }).catch((n)=>{
        t.warn(`[local-mode-data-import] failed to prune retained backups: ${vl(n)}`);
    });
}
function $ot(e) {
    if (!$f(e) || e.version !== 1 || typeof e.requestedByPid != "number" || !Number.isSafeInteger(e.requestedByPid) || typeof e.relaunchToken != "string" || !p0(e.relaunchToken)) throw new Error("Invalid pending local-mode data import marker");
    return {
        version: 1,
        requestedByPid: e.requestedByPid,
        relaunchToken: e.relaunchToken
    };
}
async function hU(e, t, n, r) {
    const s = vl(n);
    r.error(`[local-mode-data-import] ${s}`);
    const i = {
        version: 1,
        kind: "error",
        message: s
    };
    await xOe(L(e, qf), i), await Ct.rm(t, {
        force: !0
    }), await Ua(L(e, Uo), r);
}
function Hot(e, t) {
    Ct.readdir(e, {
        withFileTypes: !0
    }).then((n)=>{
        const r = [
            fU,
            `${Uo}.cleanup-`,
            `${Qu}.cleanup-`
        ];
        for (const s of n)s.isDirectory() && r.some((i)=>s.name.startsWith(i)) && FOe(L(e, s.name), t);
    }).catch((n)=>{
        t.warn(`[local-mode-data-import] failed to scan detached cleanup directories: ${vl(n)}`);
    });
}
async function zot(e, t) {
    const n = L(e, "User"), r = L(e, Uo), s = L(e, Qu), i = await ie.exists(n), a = await ie.exists(s);
    if (!i && a) try {
        await ie.rename(s, n);
    } catch (o) {
        throw new Zu(`Could not restore the original User directory after an interrupted import: ${vl(o)}`);
    }
    else i && a && await Ua(s, t);
    await ie.exists(JE(e)) || await Ua(r, t);
}
async function Yot(e, t) {
    const n = Date.now() + t;
    for(; jf(e);){
        if (Date.now() >= n) return !1;
        await new Promise((r)=>setTimeout(r, 100));
    }
    return !0;
}
function Xu(e) {
    return Hf(e, "ENOENT");
}
function vl(e) {
    return e instanceof Error ? e.message : String(e);
}
function Vct(e) {
    const t = rc(Gct());
    try {
        return Bct(t, ""), e && console.log(`Marker file for --wait created: ${t}`), t;
    } catch (n) {
        e && console.error(`Failed to create marker file for --wait: ${n}`);
        return;
    }
}
var D9e, O9e;
export { $ot, Bot, D9e, Fx, Got, Hot, O9e, PUe, Pxe, Vct, Wot, Xu, Yot, Zo, a5e, c5e, fGe, gGe, hGe, hU, m5, pGe, uGe, vl, w4e, xot, y4e, zot };
var __wakaru_jlt_initialized = false;
export function jlt() {
if (__wakaru_jlt_initialized) return;
__wakaru_jlt_initialized = true;
"use strict";
h(), Rxe(), s3(), ye(), Vn(), le(), Ka(), Ve(), Lr(), se(), ha(), $e(), Ce(), sa(), oe(), bi(), jn(), gn(), Qr(), ST(), Dct(), Ne(), at(), Lct(), Wct(), Ye(), sh(), Ob(), $ct(), Wt(), qct(), uM(), Hd(), zct(), gM(), Vt(), Yct(), te(), Ha(), Tt(), Hg(), Xct(), hA(), klt(), fs(), Plt(), hO(), Dlt(), br(), nf(), gc(), Rc(), fi(), Olt(), Ult(), j(), Oi(), Flt(), Ro(), Wlt(), o7(), s7(), Blt(), fm(), Glt(), t2e(), D9e = class {
    main() {
        try {
            this.startup();
        } catch (e) {
            console.error(e.message), M9e.exit(1);
        }
    }
    async startup() {
        v4((d)=>console.error(d));
        const e = this.resolveArgs();
        try {
            await xot(Db(e, Xn.nameShort), e["local-mode-data-import-token"], console);
        } catch (d) {
            P9e.showErrorBox(E(154, null), bt(d)), M9e.exit(1);
            return;
        }
        this.removeLocalModeDataImportTokenFromProcessArgs();
        const [t, n, r, s, i, a, o, l] = this.createServices(e);
        try {
            try {
                await this.initServices(r, l, s, i, o);
            } catch (d) {
                throw this.handleStartupDataDirError(r, o, d), d;
            }
            await t.invokeFunction(async (d)=>{
                const u = d.get(Z), m = d.get(ht), f = d.get(cn), v = d.get(rd), T = await this.claimInstance(u, r, m, t, o, !0);
                ie.writeFile(r.mainLockfile, String(process.pid)).catch((k)=>{
                    u.warn(`app#startup(): Error writing main lockfile: ${k.stack}`);
                });
                const S = v.createLogger("main", {
                    name: E(155, null)
                });
                return a.logger = new A9e(S), O.once(m.onWillShutdown)((k)=>{
                    f.dispose(), s.dispose(), k.join("instanceLockfile", N9e.unlink(r.mainLockfile).catch(()=>{}));
                }), t.createInstance(tm, T, n).startup();
            });
        } catch (d) {
            t.invokeFunction(this.quit, d);
        }
    }
    createServices(e) {
        const t = new BS, n = new ve;
        process.once("exit", ()=>n.dispose());
        const r = {
            _serviceBrand: void 0,
            ...Xn
        };
        t.set(et, r);
        const s = new Pi(e, r), i = this.patchEnvironment(s);
        t.set(qe, s);
        const a = new Ape(a5e(s), s.logsHome);
        t.set(Aa, a);
        const o = new J2e(a.getLogLevel()), l = n.add(new C9e(o, [
            new t6(a.getLogLevel())
        ]));
        t.set(Z, l);
        const d = new nm(l);
        t.set(cn, d);
        const u = new FS(l);
        d.registerProvider($.file, u);
        const m = new e_(d);
        t.set(Br, m);
        const f = new DI(1, s, l, d);
        t.set(q0, f), t.set(fr, f);
        const v = new $k(f, m, s, d, l);
        t.set(Wi, v), d.registerProvider($.vscodeUserData, new I9e($.file, u, $.vscodeUserData, v, m, l));
        let T;
        ee && r.win32RegValueName ? T = n.add(new Zf(l, r.win32RegValueName)) : q && r.darwinBundleIdentifier ? T = n.add(new Zf(l, r.darwinBundleIdentifier)) : s.policyFile ? T = n.add(new kb(s.policyFile, d, l)) : T = new cO, t.set(bo, T);
        const S = new G2e(v.defaultProfile.settingsResource, d, T, l);
        return t.set(ot, S), t.set(ht, new pe(ls, void 0, !1)), t.set(li, new pe(Tb, void 0, !0)), t.set(no, new pe(KT)), t.set(Ru, new pe(E9e, void 0, !1)), t.set(wG, new pe(Qf)), t.set(Su, new pb(s, v, l, S)), [
            new Y2e(t, !0),
            i,
            s,
            S,
            f,
            o,
            r,
            v
        ];
    }
    removeLocalModeDataImportTokenFromProcessArgs() {
        const e = "--local-mode-data-import-token=";
        for(let t = process.argv.length - 1; t >= 0; t--)process.argv[t].startsWith(e) && process.argv.splice(t, 1);
    }
    patchEnvironment(e) {
        const t = {
            VSCODE_IPC_HOOK: e.mainIPCHandle
        };
        return [
            "VSCODE_NLS_CONFIG",
            "VSCODE_PORTABLE"
        ].forEach((n)=>{
            const r = process.env[n];
            typeof r == "string" && (t[n] = r);
        }), Object.assign(process.env, t), t;
    }
    async initServices(e, t, n, r, s) {
        await Qn.settled([
            Promise.all([
                this.allowWindowsUNCPath(e.extensionsPath),
                e.codeCachePath,
                e.logsHome.with({
                    scheme: $.file
                }).fsPath,
                t.defaultProfile.globalStorageHome.with({
                    scheme: $.file
                }).fsPath,
                e.workspaceStorageHome.with({
                    scheme: $.file
                }).fsPath,
                e.localHistoryHome.with({
                    scheme: $.file
                }).fsPath,
                e.backupHome
            ].map((i)=>i ? N9e.mkdir(i, {
                    recursive: !0
                }) : void 0)),
            r.init(),
            n.initialize()
        ]), t.init();
    }
    allowWindowsUNCPath(e) {
        if (ee) {
            const t = Fx(e);
            t && gm(t);
        }
        return e;
    }
    async claimInstance(e, t, n, r, s, i) {
        let a;
        try {
            At("code/willStartMainServer"), a = await y4e(t.mainIPCHandle), At("code/didStartMainServer"), O.once(n.onWillShutdown)(()=>a.dispose());
        } catch (o) {
            if (o.code !== "EADDRINUSE") throw this.handleStartupDataDirError(t, s, o), o;
            let l;
            try {
                l = await w4e(t.mainIPCHandle, "main");
            } catch (f) {
                if (!i || ee || f.code !== "ECONNREFUSED") throw f.code === "EPERM" && this.showStartupWarningDialog(E(156, null, s.nameShort), E(157, null), s), f;
                try {
                    $lt(t.mainIPCHandle);
                } catch (v) {
                    throw e.warn("Could not delete obsolete instance handle", v), v;
                }
                return this.claimInstance(e, t, n, r, s, !1);
            }
            if (t.extensionTestsLocationURI && !t.debugExtensionHost.break) {
                const f = `Running extension tests from the command line is currently only supported if no other instance of ${s.nameShort} is running.`;
                throw e.error(f), l.dispose(), new Error(f);
            }
            let d;
            !t.args.wait && !t.args.status && (d = setTimeout(()=>{
                this.showStartupWarningDialog(E(158, null, s.nameShort), E(159, null), s);
            }, 1e4));
            const u = Oe.toService(l.getChannel("launch"), {
                disableMarshalling: !0
            }), m = Oe.toService(l.getChannel("diagnostics"), {
                disableMarshalling: !0
            });
            if (t.args.status) return r.invokeFunction(async ()=>{
                const f = new ub(bO, s), v = await m.getMainDiagnostics(), T = await m.getRemoteDiagnostics({
                    includeProcesses: !0,
                    includeWorkspaceMetadata: !0
                }), S = await f.getDiagnostics(v, T);
                throw console.log(S), new Nv;
            });
            throw ee && await this.windowsAllowSetForegroundWindow(u, e), e.trace("Sending env to running instance..."), await u.start(t.args, process.env), l.dispose(), d && clearTimeout(d), new Nv("Sent env to running instance. Terminating...");
        }
        if (t.args.status) throw console.log(E(160, null, s.nameShort)), new Nv("Terminating...");
        return process.env.VSCODE_PID = String(process.pid), a;
    }
    handleStartupDataDirError(e, t, n) {
        if (n.code === "EACCES" || n.code === "EPERM") {
            const r = wn([
                e.userDataPath,
                e.extensionsPath,
                zl
            ]).map((s)=>$l(x.file(s), {
                    os,
                    tildify: e
                }));
            this.showStartupWarningDialog(E(161, null), E(162, null, bt(n), r.join(`
`)), t);
        }
    }
    showStartupWarningDialog(e, t, n) {
        P9e.showMessageBoxSync(a7({
            type: "warning",
            buttons: [
                E(163, null)
            ],
            message: e,
            detail: t
        }, n).options);
    }
    async windowsAllowSetForegroundWindow(e, t) {
        if (ee) {
            const n = await e.getMainProcessId();
            t.trace("Sending some foreground love to the running instance:", n);
            try {
                (await import("windows-foreground-love")).allowSetForegroundWindow(n);
            } catch (r) {
                t.error(r);
            }
        }
    }
    quit(e, t) {
        const n = e.get(Z), r = e.get(ht);
        let s = 0;
        t && (t.isExpected ? t.message && n.trace(t.message) : (s = 1, t.stack ? n.error(t.stack) : n.error(`Startup error: ${t.toString()}`))), r.kill(s);
    }
    resolveArgs() {
        const e = this.validatePaths(gGe(process.argv));
        if (e.wait && !e.waitMarkerFilePath) {
            const t = Vct(e.verbose);
            t && (fGe(process.argv, "--waitMarkerFilePath", t), e.waitMarkerFilePath = t);
        }
        return e;
    }
    validatePaths(e) {
        if (e["open-url"] && (e._urls = e._, e._ = []), !e.remote) {
            const t = this.doValidatePaths(e._, e.goto);
            e._ = t;
        }
        return e;
    }
    doValidatePaths(e, t) {
        const n = Ei(), r = e.map((a)=>{
            let o = String(a), l;
            t && (l = nT(o), o = l.path), o && (o = this.preparePath(n, o));
            const d = BR(o, n), u = _t(d);
            return u && !Pxe(u) ? null : t && l ? (l.path = d, this.toPath(l)) : d;
        }), s = ee || q, i = Zs(r, (a)=>a && s ? a.toLowerCase() : a || "");
        return wn(i);
    }
    preparePath(e, t) {
        return ee && (t = Zo(t, '"')), t = m5(m5(t, " "), "	"), ee && (t = xn(e, t), t = Zo(t, ".")), t;
    }
    toPath(e) {
        const t = [
            e.path
        ];
        return typeof e.line == "number" && t.push(String(e.line)), typeof e.column == "number" && t.push(String(e.column)), t.join(":");
    }
}, O9e = new D9e, O9e.main();

}
