import { Zv } from "./abstractUpdateService.js";
import { ave } from "./mainCrashMetricTags.js";
import { Pv, ym } from "./platform.js";
import { rve, ztt } from "./reactiveStorageTypes.js";
import { HG } from "./telemetrySource.js";
import { h } from "./tslib.es6.js";
import Qtt from "fs";
import { randomUUID as Xtt } from "crypto";
function jtt(e) {
    if (e === !0) return "true";
    if (e === !1) return "false";
    if (e === void 0) return "implicit-false";
    {
        let t = e;
        return t = t, "true";
    }
}
function Ytt(e) {
    return e.urlProtocol === "cursor-dev" ? "debug" : e.version.includes("nightly") || e.version.includes("-pre") ? "nightly" : "stable";
}
function ive(e, t, n, r) {
    const s = Ytt(t), i = Zv(n), a = {
        ...e,
        channel: s,
        release_track: i,
        connection_type: "local",
        is_background_composer: "false",
        layout: e.layout ?? "unknown",
        "user.is_dev": e["user.is_dev"] ?? "false"
    };
    return ym && (a.platform = ym), Pv && (a.arch = Pv), r !== void 0 && (a[HG] = r), a;
}
var ove, cve, lve, dve, uve;
export { Ytt, cve, dve, ive, jtt, lve, ove, uve };
var __wakaru_Ztt_initialized = false;
export function Ztt() {
if (__wakaru_Ztt_initialized) return;
__wakaru_Ztt_initialized = true;
"use strict";
h(), ztt(), ave(), ave(), ove = "https://api3.cursor.sh", cve = "/aiserver.v1.MetricsService/ReportIncrement", lve = "/aiserver.v1.MetricsService/ReportDistribution", dve = [
    "g",
    "g",
    "H",
    "r"
].slice().reverse().join("") + "iuZiWjUfGNs8z4HHTLHuMD8CccAumgjzjpLmDsDX6c3Eaj7nvzCJMNoVAv3P", uve = class {
    constructor(e, t, n, r, s, i, a = ()=>{}, o){
        this.logService = e, this.productService = t, this.configurationService = n, this.getPrivacyMode = r, this.isEgressLocked = s, this.fetchImpl = i, this.getUserIsDev = a, this.telemetrySource = o;
    }
    uploadIncrement(e, t, n = 1) {
        const r = e === "application.crash" || e === "application.oom", s = ive(r ? t : this._withUserIsDev(t), this.productService, this.configurationService, this.telemetrySource);
        r && this._writeSentinel(e, s), !this.isEgressLocked() && this._post(cve, "reportIncrement", {
            metricsList: [
                {
                    name: e,
                    value: n,
                    tags: s
                }
            ]
        });
    }
    uploadDistribution(e, t, n) {
        if (this.isEgressLocked()) return;
        const r = ive(this._withUserIsDev(t), this.productService, this.configurationService, this.telemetrySource);
        this._post(lve, "reportDistribution", {
            metricsList: [
                {
                    name: e,
                    value: n,
                    tags: r
                }
            ]
        });
    }
    _withUserIsDev(e) {
        const t = this.getUserIsDev();
        return t === void 0 || e["user.is_dev"] !== void 0 ? e : {
            ...e,
            "user.is_dev": t
        };
    }
    _post(e, t, n) {
        const r = this.getPrivacyMode(), s = JSON.stringify(n);
        this.fetchImpl(`${ove}${e}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${dve}`,
                "Connect-Protocol-Version": "1",
                "x-request-id": Xtt(),
                "x-cursor-client-version": this.productService.version,
                "x-cursor-client-type": "ide",
                [rve]: jtt(r ?? void 0)
            },
            body: s
        }).then(async (i)=>{
            if (i.ok) return;
            let a;
            try {
                a = await i.text();
            } catch  {
                a = void 0;
            }
            this.logService.warn(`MainMetricsUploader: ${t} failed with status ${i.status}`, a?.slice(0, 500));
        }).catch((i)=>{
            this.logService.warn(`MainMetricsUploader: ${t} failed`, i);
        });
    }
    _writeSentinel(e, t) {
        const n = process.env.CURSOR_CRASH_METRICS_SENTINEL;
        if (n) try {
            Qtt.appendFileSync(n, JSON.stringify({
                stat: e,
                tags: t,
                ts: Date.now()
            }) + `
`);
        } catch  {}
    }
};

}
