require.d(exports, {
    An: ()=>l,
    E5: ()=>h,
    e5: ()=>p,
    h2: ()=>d,
    jX: ()=>u
});
var r = require(91105), s = require(91398), n = require(30306);
const a = "mcp", i = {
    disableConsoleFallback: !0
}, c = (async ()=>{
    try {
        return await s.cursor.checkFeatureGate("mcp_structured_logging");
    } catch  {
        return !1;
    }
})();
class l {
    constructor(e){
        this.options = e;
    }
    log(e, t) {
        var o;
        o = ()=>{
            const e = this.buildMcpMetadata(t.metadata), o = t.error instanceof Error ? t.error : void 0;
            switch(t.level){
                case "debug":
                    s.cursor.logStructuredDebug(a, t.message, e, i);
                    break;
                case "info":
                    s.cursor.logStructuredInfo(a, t.message, e, i);
                    break;
                case "warn":
                    s.cursor.logStructuredWarn(a, t.message, e, i);
                    break;
                case "error":
                    s.cursor.logStructuredError(a, t.message, o, e, i);
                    break;
                default:
                    {
                        const e = t.level;
                        throw new Error(`Unhandled log level: ${e}`);
                    }
            }
        }, c.then((e)=>{
            e && o();
        });
    }
    buildMcpMetadata(e) {
        const t = {
            subkey: this.options.subkey,
            mcp_version: this.options.mcpVersion
        };
        if (void 0 !== this.options.identifier && (t.identifier = this.options.identifier), e) for (const [o, r] of Object.entries(e))t[o] = r;
        return {
            mcpMeta: t
        };
    }
}
class d {
    constructor(e, t = r.utt){
        this.backend = e, this.metadataKey = t;
    }
    log(e, t) {
        if (!0 !== t.metadata?.[this.metadataKey]) return;
        const o = {
            ...t.metadata ?? {}
        };
        delete o[this.metadataKey], this.backend.log(e, {
            ...t,
            metadata: o
        });
    }
}
class u {
    constructor(e){
        this.outputChannel = e;
    }
    log(e, t) {
        const { level: o, message: r, metadata: s, error: n } = t;
        let a = r;
        if (s && Object.keys(s).length > 0) try {
            a += ` ${JSON.stringify(s)}`;
        } catch  {
            a += " [metadata not serializable]";
        }
        switch(o){
            case "debug":
                this.outputChannel.debug(a), n && this.outputChannel.debug(this.formatError(n));
                break;
            case "info":
                this.outputChannel.info(a), n && this.outputChannel.info(this.formatError(n));
                break;
            case "warn":
                this.outputChannel.warn(a), n && this.outputChannel.warn(this.formatError(n));
                break;
            case "error":
                this.outputChannel.error(a), n && this.outputChannel.error(this.formatError(n));
                break;
            default:
                throw new Error(`Unhandled log level: ${o}`);
        }
    }
    formatError(e) {
        return e instanceof Error ? `${e.message}\n${e.stack ?? ""}` : String(e);
    }
}
const m = "agent_exec";
class p {
    log(e, t) {
        const { level: o, message: r, metadata: a, error: i } = t, c = i instanceof Error ? i : void 0, l = (0, n.QE)(a);
        switch(o){
            case "debug":
                s.cursor.logStructuredDebug(m, r, a);
                break;
            case "info":
                s.cursor.logStructuredInfo(m, r, a);
                break;
            case "warn":
                s.cursor.logStructuredWarn(m, r, l, n.bn);
                break;
            case "error":
                s.cursor.logStructuredError(m, r, c, l, n.bn);
                break;
            default:
                throw new Error(`Unhandled log level: ${o}`);
        }
    }
}
class h {
    record(e, t, o, r) {
        s.cursor.metricsGauge({
            stat: t.name,
            value: o,
            tags: r
        });
    }
    increment(e, t, o, r) {
        s.cursor.metricsIncrement({
            stat: t.name,
            value: o ?? 1,
            tags: r
        });
    }
    gauge(e, t, o, r) {
        s.cursor.metricsGauge({
            stat: t.name,
            value: o,
            tags: r
        });
    }
    histogram(e, t, o, r) {
        s.cursor.metricsDistribution({
            stat: t.name,
            value: o,
            tags: r
        });
    }
}
