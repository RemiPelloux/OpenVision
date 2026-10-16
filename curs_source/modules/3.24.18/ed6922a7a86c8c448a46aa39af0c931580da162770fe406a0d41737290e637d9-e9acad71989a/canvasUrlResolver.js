import { Se, we } from "./HVr.js";
import { ZYi } from "./canvasLogger.js";
import { $_e, PA } from "./cgh.js";
import { x } from "./tslib.es6.js";
var oLh;
export { oLh };
var __wakaru_Bs__initialized = false;
export function Bs_() {
if (__wakaru_Bs__initialized) return;
__wakaru_Bs__initialized = true;
"use strict";
x(), Se(), ZYi(), oLh = class extends we {
    constructor(e, t, n, i){
        super(), this.environmentService = e, this.remoteAuthorityResolverService = t, this.tunnelService = n, this.structuredLogService = i, this.canvasTunnels = new Map;
    }
    dispose() {
        for (const { tunnel: e } of this.canvasTunnels.values())e.dispose();
        this.canvasTunnels.clear(), super.dispose();
    }
    async disposeCanvasTunnel(e) {
        const t = this.canvasTunnels.get(e);
        this.canvasTunnels.delete(e), t && await t.tunnel.dispose();
    }
    async getCanvasTunnel(e, t) {
        const n = t.hostname, i = Number(t.port), r = `${n}:${i}`, s = this.canvasTunnels.get(e);
        if (s && s.endpointKey === r) return s.tunnel;
        s && (await s.tunnel.dispose(), this.canvasTunnels.delete(e));
        const o = this.environmentService.remoteAuthority, a = o ? {
            getAddress: async ()=>(await this.remoteAuthorityResolverService.resolveAuthority(o)).authority
        } : void 0;
        let c = await this.tunnelService.getExistingTunnel(n, i);
        if ((!c || typeof c == "string") && (c = await this.tunnelService.openTunnel(a, n, i)), !c || typeof c == "string") throw new Error(typeof c == "string" ? c : "Canvas tunnel is unavailable");
        return this.canvasTunnels.set(e, {
            endpointKey: r,
            tunnel: c
        }), c;
    }
    async getCanvasUrl(e, t) {
        if (!this.environmentService.remoteAuthority) return t;
        const n = new URL(t);
        try {
            const i = await this.getCanvasTunnel(e, n), r = i.localAddress.startsWith("http") ? i.localAddress : `${n.protocol}//${i.localAddress}`;
            return this.structuredLogService && $_e(this.structuredLogService, "Canvas tunnel resolved", {
                canvasId: e
            }), new URL(n.pathname + n.search, r).toString();
        } catch (i) {
            throw this.structuredLogService && PA(this.structuredLogService, "Canvas tunnel resolution failed", {
                canvasId: e,
                error: i instanceof Error ? i.message : String(i)
            }), i;
        }
    }
};

}
