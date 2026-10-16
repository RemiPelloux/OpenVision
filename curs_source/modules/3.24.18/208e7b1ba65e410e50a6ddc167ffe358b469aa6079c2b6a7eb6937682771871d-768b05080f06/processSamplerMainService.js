import { Ye, qe } from "./environmentMainService.js";
import { Q, ne } from "./instantiation.js";
import { B } from "./ipc.js";
import { Z, te } from "./log.js";
import { _a } from "./sentry.js";
import { gs } from "./storageMain.js";
import { w } from "./themeMainService.js";
import { h } from "./tslib.es6.js";
import * as Fo from "fs";
import * as R2e from "path";
import { spawn as yct } from "child_process";
var BU, ob;
export { BU, ob };
var __wakaru_wct_initialized = false;
export function wct() {
if (__wakaru_wct_initialized) return;
__wakaru_wct_initialized = true;
"use strict";
h(), ne(), te(), Ye(), _a(), BU = Q("processSamplerMainService"), ob = class {
    constructor(e, t){
        this.environmentMainService = e, this.logService = t;
    }
    async isAvailable() {
        if (process.platform !== "darwin") return !1;
        try {
            return await Fo.promises.access("/usr/bin/sample", Fo.constants.X_OK), !0;
        } catch  {
            return !1;
        }
    }
    _logsHomeFsPath() {
        return this.environmentMainService.logsHome.fsPath;
    }
    async captureProcessSample(e, t, n = 10, r) {
        if (process.platform !== "darwin") {
            this.logService.trace("[processSampler] Not macOS, skipping.");
            return;
        }
        try {
            await Fo.promises.access("/usr/bin/sample", Fo.constants.X_OK);
        } catch  {
            this.logService.info("[processSampler] '/usr/bin/sample' not found or not executable.");
            return;
        }
        const s = R2e.join(this._logsHomeFsPath(), "exthost-samples");
        await Fo.promises.mkdir(s, {
            recursive: !0
        });
        const i = new Date().toISOString().replace(/[:.]/g, "-"), a = R2e.join(s, `sample-${t ?? "exthost"}-${e}-${i}.txt`);
        return this.logService.info(`[processSampler] Sampling pid ${e} for ${n} seconds -> ${a}`), new Promise((o)=>{
            const l = yct("/usr/bin/sample", [
                String(e),
                String(n),
                "-mayDie",
                "-file",
                a
            ]);
            let d = !1, u = "";
            l.stderr?.on("data", (f)=>{
                u += f.toString();
            });
            const m = (f, v)=>{
                d || (d = !0, f ? (this.logService.info(`[processSampler] Sample saved: ${a}`), o(a)) : (this.logService.warn(`[processSampler] Sample failed for pid ${e}, exit code: ${v}, stderr: ${u}`), o(void 0)));
            };
            l.on("error", (f)=>{
                this.logService.error("[processSampler] spawn error", f), m(!1);
            }), l.on("close", async (f)=>{
                if (f === 0) try {
                    await Fo.promises.access(a, Fo.constants.F_OK), m(!0, f);
                } catch  {
                    this.logService.warn(`[processSampler] Sample command succeeded but file was not created: ${a}`), m(!1, f);
                }
                else m(!1, f);
            }), setTimeout(()=>{
                try {
                    l.kill("SIGKILL");
                } catch  {}
                m(!1, -1);
            }, 2e4);
        }).then(async (o)=>{
            if (o && r) try {
                const l = await Fo.promises.readFile(o, "utf8");
                gs(new Error(r), {
                    attachments: [
                        {
                            filename: `${t}.txt`,
                            data: l,
                            contentType: "text/plain"
                        }
                    ],
                    captureContext: {
                        tags: {
                            upload_type: `${t}`
                        }
                    }
                });
            } catch (l) {
                this.logService.error("[processSampler] Failed to upload sample", l);
            }
            return o;
        });
    }
}, ob = B([
    w(0, qe),
    w(1, Z)
], ob);

}
