import { ju } from "./agent_pb.js";
import { kl } from "./browser.ts";
import { VXm } from "./context-stripping.ts";
import { jxe, kde } from "./controlled.ts";
import { Ens, QXm, XXm, eZm, hak, iZm, nZm, nak, rZm, rak, rtl, stl, uak } from "./gYa.js";
import { Ng } from "./index_3.ts";
import { SS } from "./ipa.js";
import { itl } from "./paths.ts";
import { Qok } from "./previous-request-id.ts";
import { Jok } from "./trace-format.ts";
import { eak } from "./transcript-loader.ts";
import { E } from "./tslib.es6.js";
var sZm, oZm, aZm, lZm, cZm, xns, uZm;
export { aZm, cZm, lZm, oZm, sZm, uZm, xns };
var __wakaru_dZm_initialized = false;
export function dZm() {
if (__wakaru_dZm_initialized) return;
__wakaru_dZm_initialized = true;
"use strict";
E(), Ng(), ju(), kl(), VXm(), itl(), itl(), Qok(), Jok(), eak(), sZm = new TextEncoder, oZm = new TextDecoder, aZm = '"__type":"Uint8Array"', lZm = 5e6, cZm = class {
    serialize(t) {
        const e = JSON.stringify(t, nak);
        return sZm.encode(e);
    }
    deserialize(t) {
        const e = oZm.decode(t);
        return e.includes(aZm) ? JSON.parse(e, rak) : JSON.parse(e);
    }
}, xns = new cZm, uZm = class {
    constructor(t, e, n, i = {}){
        this.projectDir = t, this.blobStore = e, this.writeFile = n, this.options = {
            writeText: i.writeText ?? !0,
            writeJson: i.writeJson ?? !1,
            writeJsonl: i.writeJsonl ?? !1,
            pathResolver: i.pathResolver,
            appendFile: i.appendFile,
            fallbackToFullWriteOnIncrementalFailure: i.fallbackToFullWriteOnIncrementalFailure ?? !0
        };
    }
    resolveFilePath(t, e) {
        if (this.options.pathResolver) return this.options.pathResolver(t, e);
        const n = Ens({
            conversationId: t,
            ext: e,
            kind: "primary"
        });
        return `${this.projectDir}/${n}`;
    }
    async writeFromStateFull(t, e, n, i = {}) {
        var r = [];
        try {
            const a = kde(r, SS(t.withName("writeFromState")));
            try {
                const l = await QXm(a.ctx, this.blobStore, e), { overviewFactory: c } = i, u = iZm(i);
                if (l.length === 0 && u.jsonlLines.length === 0) return !0;
                let d;
                if ((this.options.writeText || c) && (d = eZm(l)), this.options.writeText) {
                    const h = d ?? "", p = u.textSuffixes.length > 0 ? h.trim().length > 0 ? `${h}

${u.textSuffixes.join(`
`)}` : u.textSuffixes.join(`
`) : h;
                    p.trim() && await this.writeFile(this.resolveFilePath(n, "txt"), p);
                }
                if (this.options.writeJson) {
                    const h = nZm(l);
                    if (h || u.jsonlLines.length > 0) {
                        const p = {
                            mode: XXm(e.mode),
                            messages: h ? JSON.parse(h) : [],
                            ...u.jsonFields
                        };
                        await this.writeFile(this.resolveFilePath(n, "json"), JSON.stringify(p, null, 2));
                    }
                }
                if (this.options.writeJsonl) {
                    let p = [
                        hak(l),
                        ...u.jsonlLines
                    ].filter((g)=>g.length > 0).join(`
`);
                    if (p && c && d?.trim()) try {
                        const f = (await c(d)).trim();
                        f && (p = uak(p, f));
                    } catch (g) {
                        console.error("[TranscriptStore] Failed to generate transcript overview:", g);
                    }
                    p && await this.writeFile(this.resolveFilePath(n, "jsonl"), stl(p));
                }
                return !0;
            } catch (l) {
                return console.error("[TranscriptStore] Failed to write transcript:", l), !1;
            }
        } catch (a) {
            var s = a, o = !0;
        } finally{
            jxe(r, s, o);
        }
    }
    async writeFromStateIncremental(t, e, n, i, r = {}) {
        var s = [];
        try {
            const l = e.rootPromptMessagesJson.length, c = iZm(r), u = c.jsonlLines.length > 0;
            if (l === i && !u && !r.overviewFactory) return l;
            const d = this.options.appendFile;
            if (!(d && this.options.writeJsonl && !this.options.writeText && !this.options.writeJson && i > 0 && l >= i && (l > i || u) && !r.overviewFactory)) return await this.writeFromStateFull(t, e, n, r) ? l : 0;
            const p = kde(s, SS(t.withName("writeFromStateIncremental")));
            if (l === i && u) try {
                return await d(this.resolveFilePath(n, "jsonl"), stl(c.jsonlLines.join(`
`))), l;
            } catch (g) {
                return console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", g), this.options.fallbackToFullWriteOnIncrementalFailure && await this.writeFromStateFull(t, e, n, r) ? l : 0;
            }
            try {
                const g = e.rootPromptMessagesJson.slice(i), f = await rtl(p.ctx, this.blobStore, g);
                p.span.setAttribute("hydratedBlobCount", f.hydratedBlobCount), p.span.setAttribute("hydratedBlobBytes", f.hydratedBlobBytes), p.span.setAttribute("largestHydratedBlobBytes", f.largestHydratedBlobBytes), p.span.setAttribute("totalDeserializeDurationMs", f.totalDeserializeDurationMs), p.span.setAttribute("omittedOversizeBlobCount", f.omittedOversizeBlobCount), p.span.setAttribute("omittedOversizeBlobBytes", f.omittedOversizeBlobBytes), p.span.setAttribute("largestOmittedOversizeBlobBytes", f.largestOmittedOversizeBlobBytes);
                const _ = [];
                for (const b of f.messages){
                    const y = rZm(b);
                    y && _.push(y);
                }
                if (_.push(...c.jsonlLines), _.length > 0) {
                    const b = stl(_.join(`
`));
                    await d(this.resolveFilePath(n, "jsonl"), b);
                }
                return l;
            } catch (g) {
                return console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", g), this.options.fallbackToFullWriteOnIncrementalFailure && await this.writeFromStateFull(t, e, n, r) ? l : 0;
            }
        } catch (l) {
            var o = l, a = !0;
        } finally{
            jxe(s, o, a);
        }
    }
};

}
