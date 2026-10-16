import { at, ot } from "./configuration.js";
import { E, Jr, Sr, ua } from "./configurationRegistry.js";
import { B } from "./ipc.js";
import { j, ve } from "./lifecycle.js";
import { Ne } from "./nls.js";
import { UI, ns } from "./objects.js";
import { Xs, oe } from "./platform.js";
import { Un, pr, ri } from "./platform_2.js";
import { Ha, Xn } from "./product.js";
import { Tt, et } from "./productService.js";
import { jn } from "./strings.js";
import { II, Vp, Wk, ZB, ts } from "./telemetry.js";
import { ahe, nf } from "./telemetryUtils.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import { Qo } from "./userDataProfile.js";
function mWe(e, t) {
    return LI(e, t, new Set);
}
function LI(e, t, n) {
    if (Sr(e)) return e;
    const r = t(e);
    if (typeof r < "u") return r;
    if (Array.isArray(e)) {
        const s = [];
        for (const i of e)s.push(LI(i, t, n));
        return s;
    }
    if (Un(e)) {
        if (n.has(e)) throw new Error("Cannot clone recursive data-structure");
        n.add(e);
        const s = {};
        for(const i in e)UI.call(e, i) && (s[i] = LI(e[i], t, n));
        return n.delete(e), s;
    }
    return e;
}
function jp(e, t, n = !0) {
    return Un(e) ? (Un(t) && Object.keys(t).forEach((r)=>{
        r in e ? n && (Un(e[r]) && Un(t[r]) ? jp(e[r], t[r], n) : e[r] = t[r]) : e[r] = t[r];
    }), e) : t;
}
function EO(e) {
    const t = e.getValue(Vp), n = e.getValue(II);
    if (e.getValue(Wk) === !1 || n === !1) return 0;
    switch(t ?? "all"){
        case "all":
            return 3;
        case "off":
            return 0;
    }
}
function sJe(e, t) {
    if (!e || !e.includes("/") && !e.includes("\\")) return e;
    let n = e;
    const r = [];
    for (const o of t)for(;;){
        const l = o.exec(e);
        if (!l) break;
        r.push([
            l.index,
            o.lastIndex
        ]);
    }
    const s = /^[\\\/]?(node_modules|node_modules\.asar)[\\\/]/, i = /(file:\/\/)?([a-zA-Z]:(\\\\|\\|\/)|(\\\\|\\|\/))?([\w-\._]+(\\\\|\\|\/))+[\w-\._]*/g;
    let a = 0;
    for(n = "";;){
        const o = i.exec(e);
        if (!o) break;
        const l = r.some(([d, u])=>o.index < u && d < i.lastIndex);
        !s.test(o[0]) && !l && (n += e.substring(a, o.index) + "<REDACTED: user-file-path>", a = i.lastIndex);
    }
    return a < e.length && (n += e.substr(a)), n;
}
function iJe(e) {
    if (!e) return e;
    const t = [
        {
            label: "Google API Key",
            regex: /AIza[A-Za-z0-9_\\\-]{35}/
        },
        {
            label: "Slack Token",
            regex: /xox[pbar]\-[A-Za-z0-9]/
        },
        {
            label: "GitHub Token",
            regex: /(gh[psuro]_[a-zA-Z0-9]{36}|github_pat_[a-zA-Z0-9]{22}_[a-zA-Z0-9]{59})/
        },
        {
            label: "Generic Secret",
            regex: /(key|token|sig|secret|signature|password|passwd|pwd|android:value)[^a-zA-Z0-9]/i
        },
        {
            label: "CLI Credentials",
            regex: /((login|psexec|(certutil|psexec)\.exe).{1,50}(\s-u(ser(name)?)?\s+.{3,100})?\s-(admin|user|vm|root)?p(ass(word)?)?\s+["']?[^$\-\/\s]|(^|[\s\r\n\\])net(\.exe)?.{1,5}(user\s+|share\s+\/user:| user -? secrets ? set) \s + [^ $\s \/])/
        },
        {
            label: "Microsoft Entra ID",
            regex: /eyJ(?:0eXAiOiJKV1Qi|hbGci|[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.)/
        },
        {
            label: "Email",
            regex: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
        }
    ];
    for (const n of t)if (n.regex.test(e)) return `<REDACTED: ${n.label}>`;
    return e;
}
function ihe(e, t) {
    return mWe(e, (n)=>{
        if (n instanceof ahe || Object.hasOwnProperty.call(n, "isTrustedTelemetryValue")) return n.value;
        if (typeof n == "string") {
            let r = n.replaceAll("%20", " ");
            r = sJe(r, t);
            for (const s of t)r = r.replace(s, "");
            return r = iJe(r), r;
        }
    });
}
function oJe() {
    const e = E(2248, null, Xn.nameLong), t = E(2249, null, "https://cursor.com/privacy", "https://cursor.com/security"), n = Xs ? "" : E(2250, null);
    return `
${e} ${t} ${n}
`;
}
var Cu, lhe;
export { Cu, EO, LI, iJe, ihe, jp, lhe, mWe, oJe, sJe };
var __wakaru_cJe_initialized = false;
export function cJe() {
if (__wakaru_cJe_initialized) return;
__wakaru_cJe_initialized = true;
"use strict";
h(), j(), ns(), oe(), jn(), Ne(), at(), ua(), Ha(), Tt(), ri(), ts(), nf(), Cu = class {
    constructor(e, t, n){
        this._configurationService = t, this._productService = n, this._experimentProperties = {}, this._disposables = new ve, this._cleanupPatterns = [], this._appenders = e.appenders, this._commonProperties = e.commonProperties ?? Object.create(null), this.sessionId = this._commonProperties.sessionID, this.machineId = this._commonProperties["common.machineId"], this.macMachineId = this._commonProperties["common.macMachineId"], this.sqmId = this._commonProperties["common.sqmId"], this.devDeviceId = this._commonProperties["common.devDeviceId"], this.firstSessionDate = this._commonProperties["common.firstSessionDate"], this.msftInternal = this._commonProperties["common.msftInternal"], this._piiPaths = e.piiPaths || [], this._telemetryLevel = 3, this._sendErrorTelemetry = !!e.sendErrorTelemetry, this._cleanupPatterns = [
            /(vscode-)?file:\/\/\/.*?\/resources\/app\//gi
        ];
        for (const r of this._piiPaths)this._cleanupPatterns.push(new RegExp(Qo(r), "gi")), r.indexOf("\\") >= 0 && this._cleanupPatterns.push(new RegExp(Qo(r.replace(/\\/g, "/")), "gi"));
        this._updateTelemetryLevel(), this._disposables.add(this._configurationService.onDidChangeConfiguration((r)=>{
            (r.affectsConfiguration(Vp) || r.affectsConfiguration(Wk) || r.affectsConfiguration(II)) && this._updateTelemetryLevel();
        }));
    }
    setExperimentProperty(e, t) {
        this._experimentProperties[e] = t;
    }
    _updateTelemetryLevel() {
        let e = EO(this._configurationService);
        const t = this._productService.enabledTelemetryLevels;
        if (t) {
            this._sendErrorTelemetry = this.sendErrorTelemetry ? t.error : !1;
            const n = t.usage ? 3 : t.error ? 2 : 0;
            e = Math.min(e, n);
        }
        this._telemetryLevel = e;
    }
    get sendErrorTelemetry() {
        return this._sendErrorTelemetry;
    }
    get telemetryLevel() {
        return this._telemetryLevel;
    }
    dispose() {
        this._disposables.dispose();
    }
    _log(e, t, n) {
        this._telemetryLevel < t || (n = jp(n, this._experimentProperties), n = ihe(n, this._cleanupPatterns), n = jp(n, this._commonProperties), this._appenders.forEach((r)=>r.log(e, n)));
    }
    _capture(e, t, n) {
        this._telemetryLevel < t || (n = jp(n, this._experimentProperties), n = ihe(n, this._cleanupPatterns), n = jp(n, this._commonProperties), this._appenders.forEach((r)=>{
            r.capture(e, n);
        }));
    }
    registerAuthId(e) {
        this._appenders.forEach((t)=>t.registerAuthId(e));
    }
    publicLog(e, t) {
        this._log(e, 3, t);
    }
    publicLogError(e, t) {
        this._sendErrorTelemetry && this._log(e, 2, t);
    }
    publicLogError2(e, t) {
        this.publicLogError(e, t);
    }
    publicLogCapture(e, t) {
        this._capture(e, 3, t);
    }
}, Cu.IDLE_START_EVENT_NAME = "UserIdleStart", Cu.IDLE_STOP_EVENT_NAME = "UserIdleStop", Cu = B([
    w(1, ot),
    w(2, et)
], Cu), lhe = pr.as(Jr.Configuration), lhe.registerConfiguration({
    id: ZB,
    order: 1,
    type: "object",
    title: "Crash Reporting",
    properties: {
        [Vp]: {
            type: "string",
            enum: [
                "all",
                "off"
            ],
            enumDescriptions: [
                "Send OS-level crash reports.",
                "Disable crash reporting."
            ],
            markdownDescription: oJe(),
            default: "all",
            restricted: !0,
            scope: 1,
            tags: [
                "usesOnlineServices",
                "telemetry"
            ]
        },
        [Wk]: {
            type: "boolean",
            markdownDescription: Xn.privacyStatementUrl ? E(2252, null, Xn.nameLong, Xn.privacyStatementUrl) : E(2251, null, Xn.nameLong),
            default: !0,
            restricted: !0,
            markdownDeprecationMessage: E(2253, null, `\`#${Vp}#\``),
            scope: 1,
            tags: [
                "usesOnlineServices",
                "telemetry"
            ]
        }
    }
});

}
