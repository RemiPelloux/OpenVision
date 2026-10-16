import { GPe, n3 } from "./Aeg.js";
import { Qe, st } from "./Iwo.js";
import { vis } from "./canvasLogger.js";
import { E } from "./tslib.es6.js";
var qSg;
export { qSg };
var __wakaru_eTk_initialized = false;
export function eTk() {
if (__wakaru_eTk_initialized) return;
__wakaru_eTk_initialized = true;
"use strict";
E(), Qe(), vis(), qSg = class extends st {
    constructor(t, e, n, i){
        super(), this.environmentService = t, this.remoteAuthorityResolverService = e, this.tunnelService = n, this.structuredLogService = i, this.canvasTunnels = new Map;
    }
    dispose() {
        for (const { tunnel: t } of this.canvasTunnels.values())t.dispose();
        this.canvasTunnels.clear(), super.dispose();
    }
    async disposeCanvasTunnel(t) {
        const e = this.canvasTunnels.get(t);
        this.canvasTunnels.delete(t), e && await e.tunnel.dispose();
    }
    async getCanvasTunnel(t, e) {
        const n = e.hostname, i = Number(e.port), r = `${n}:${i}`, s = this.canvasTunnels.get(t);
        if (s && s.endpointKey === r) return s.tunnel;
        s && (await s.tunnel.dispose(), this.canvasTunnels.delete(t));
        const o = this.environmentService.remoteAuthority, a = o ? {
            getAddress: async ()=>(await this.remoteAuthorityResolverService.resolveAuthority(o)).authority
        } : void 0;
        let l = await this.tunnelService.getExistingTunnel(n, i);
        if ((!l || typeof l == "string") && (l = await this.tunnelService.openTunnel(a, n, i)), !l || typeof l == "string") throw new Error(typeof l == "string" ? l : "Canvas tunnel is unavailable");
        return this.canvasTunnels.set(t, {
            endpointKey: r,
            tunnel: l
        }), l;
    }
    async getCanvasUrl(t, e) {
        if (!this.environmentService.remoteAuthority) return e;
        const n = new URL(e);
        try {
            const i = await this.getCanvasTunnel(t, n), r = i.localAddress.startsWith("http") ? i.localAddress : `${n.protocol}//${i.localAddress}`;
            return this.structuredLogService && GPe(this.structuredLogService, "Canvas tunnel resolved", {
                canvasId: t
            }), new URL(n.pathname + n.search, r).toString();
        } catch (i) {
            throw this.structuredLogService && n3(this.structuredLogService, "Canvas tunnel resolution failed", {
                canvasId: t,
                error: i instanceof Error ? i.message : String(i)
            }), i;
        }
    }
};

}
