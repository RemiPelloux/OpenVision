require.d(exports, {
    An: ()=>l,
    E5: ()=>m,
    e5: ()=>d,
    h2: ()=>u,
    jX: ()=>p
});
var s = require(91105), o = require(91398), a = require(30306);
const c = "mcp", i = {
    disableConsoleFallback: !0
}, n = (async ()=>{
    try {
        return await o.cursor.checkFeatureGate("mcp_structured_logging");
    } catch  {
        return !1;
    }
})();
class l {
    constructor(e){
        this.options = e;
    }
    log(e, t) {
        var r;
        r = ()=>{
            const e = this.buildMcpMetadata(t.metadata), r = t.error instanceof Error ? t.error : void 0;
            switch(t.level){
                case "debug":
                    o.cursor.logStructuredDebug(c, t.message, e, i);
                    break;
                case "info":
                    o.cursor.logStructuredInfo(c, t.message, e, i);
                    break;
                case "warn":
                    o.cursor.logStructuredWarn(c, t.message, e, i);
                    break;
                case "error":
                    o.cursor.logStructuredError(c, t.message, r, e, i);
                    break;
                default:
                    {
                        const e = t.level;
                        throw new Error(`Unhandled log level: ${e}`);
                    }
            }
        }, n.then((e)=>{
            e && r();
        });
    }
    buildMcpMetadata(e) {
        const t = {
            subkey: this.options.subkey,
            mcp_version: this.options.mcpVersion
        };
        if (void 0 !== this.options.identifier && (t.identifier = this.options.identifier), e) for (const [r, s] of Object.entries(e))t[r] = s;
        return {
            mcpMeta: t
        };
    }
}
class u {
    constructor(e, t = s.utt){
        this.backend = e, this.metadataKey = t;
    }
    log(e, t) {
        if (!0 !== t.metadata?.[this.metadataKey]) return;
        const r = {
            ...t.metadata ?? {}
        };
        delete r[this.metadataKey], this.backend.log(e, {
            ...t,
            metadata: r
        });
    }
}
class p {
    constructor(e){
        this.outputChannel = e;
    }
    log(e, t) {
        const { level: r, message: s, metadata: o, error: a } = t;
        let c = s;
        if (o && Object.keys(o).length > 0) try {
            c += ` ${JSON.stringify(o)}`;
        } catch  {
            c += " [metadata not serializable]";
        }
        switch(r){
            case "debug":
                this.outputChannel.debug(c), a && this.outputChannel.debug(this.formatError(a));
                break;
            case "info":
                this.outputChannel.info(c), a && this.outputChannel.info(this.formatError(a));
                break;
            case "warn":
                this.outputChannel.warn(c), a && this.outputChannel.warn(this.formatError(a));
                break;
            case "error":
                this.outputChannel.error(c), a && this.outputChannel.error(this.formatError(a));
                break;
            default:
                throw new Error(`Unhandled log level: ${r}`);
        }
    }
    formatError(e) {
        return e instanceof Error ? `${e.message}\n${e.stack ?? ""}` : String(e);
    }
}
const h = "agent_exec";
class d {
    log(e, t) {
        const { level: r, message: s, metadata: c, error: i } = t, n = i instanceof Error ? i : void 0, l = (0, a.QE)(c);
        switch(r){
            case "debug":
                o.cursor.logStructuredDebug(h, s, c);
                break;
            case "info":
                o.cursor.logStructuredInfo(h, s, c);
                break;
            case "warn":
                o.cursor.logStructuredWarn(h, s, l, a.bn);
                break;
            case "error":
                o.cursor.logStructuredError(h, s, n, l, a.bn);
                break;
            default:
                throw new Error(`Unhandled log level: ${r}`);
        }
    }
}
class m {
    record(e, t, r, s) {
        o.cursor.metricsGauge({
            stat: t.name,
            value: r,
            tags: s
        });
    }
    increment(e, t, r, s) {
        o.cursor.metricsIncrement({
            stat: t.name,
            value: r ?? 1,
            tags: s
        });
    }
    gauge(e, t, r, s) {
        o.cursor.metricsGauge({
            stat: t.name,
            value: r,
            tags: s
        });
    }
    histogram(e, t, r, s) {
        o.cursor.metricsDistribution({
            stat: t.name,
            value: r,
            tags: s
        });
    }
}
