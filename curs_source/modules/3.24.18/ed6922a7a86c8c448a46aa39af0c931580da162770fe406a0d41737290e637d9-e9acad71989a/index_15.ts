import { S_ } from "./De_3.js";
import { zd } from "./agent_pb.js";
import { Yu } from "./browser.ts";
import { _dh } from "./context-stripping.ts";
import { QQ, ege } from "./controlled.ts";
import { Gp } from "./index_3.ts";
import { Obo } from "./paths.ts";
import { P8v } from "./previous-request-id.ts";
import { L8v } from "./trace-format.ts";
import { N8v } from "./transcript-loader.ts";
import { x } from "./tslib.es6.js";
import { Adh, Bbo, F8v, Fbo, Idh, Sdh, Tdh, U8v, j8v, pYi, wdh, xdh, z8v } from "./xmo.js";
var Rdh, Ddh, Mdh, Pdh, Ldh, Ndh, Odh;
export { Ddh, Ldh, Mdh, Ndh, Odh, Pdh, Rdh };
var __wakaru_Fdh_initialized = false;
export function Fdh() {
if (__wakaru_Fdh_initialized) return;
__wakaru_Fdh_initialized = true;
"use strict";
x(), Gp(), zd(), Yu(), _dh(), Obo(), Obo(), P8v(), L8v(), N8v(), Rdh = new TextEncoder, Ddh = new TextDecoder, Mdh = '"__type":"Uint8Array"', Pdh = 5e6, Ldh = class {
    serialize(e) {
        const t = JSON.stringify(e, F8v);
        return Rdh.encode(t);
    }
    deserialize(e) {
        const t = Ddh.decode(e);
        return t.includes(Mdh) ? JSON.parse(t, U8v) : JSON.parse(t);
    }
}, Ndh = new Ldh, Odh = class {
    constructor(e, t, n, i = {}){
        this.projectDir = e, this.blobStore = t, this.writeFile = n, this.options = {
            writeText: i.writeText ?? !0,
            writeJson: i.writeJson ?? !1,
            writeJsonl: i.writeJsonl ?? !1,
            pathResolver: i.pathResolver,
            appendFile: i.appendFile,
            fallbackToFullWriteOnIncrementalFailure: i.fallbackToFullWriteOnIncrementalFailure ?? !0
        };
    }
    resolveFilePath(e, t) {
        if (this.options.pathResolver) return this.options.pathResolver(e, t);
        const n = pYi({
            conversationId: e,
            ext: t,
            kind: "primary"
        });
        return `${this.projectDir}/${n}`;
    }
    async writeFromStateFull(e, t, n, i = {}) {
        var r = [];
        try {
            const a = QQ(r, S_(e.withName("writeFromState")));
            try {
                const c = await wdh(a.ctx, this.blobStore, t), { overviewFactory: l } = i, u = Idh(i);
                if (c.length === 0 && u.jsonlLines.length === 0) return !0;
                let h;
                if ((this.options.writeText || l) && (h = Tdh(c)), this.options.writeText) {
                    const p = h ?? "", g = u.textSuffixes.length > 0 ? p.trim().length > 0 ? `${p}

${u.textSuffixes.join(`
`)}` : u.textSuffixes.join(`
`) : p;
                    g.trim() && await this.writeFile(this.resolveFilePath(n, "txt"), g);
                }
                if (this.options.writeJson) {
                    const p = xdh(c);
                    if (p || u.jsonlLines.length > 0) {
                        const g = {
                            mode: Sdh(t.mode),
                            messages: p ? JSON.parse(p) : [],
                            ...u.jsonFields
                        };
                        await this.writeFile(this.resolveFilePath(n, "json"), JSON.stringify(g, null, 2));
                    }
                }
                if (this.options.writeJsonl) {
                    let g = [
                        z8v(c),
                        ...u.jsonlLines
                    ].filter((f)=>f.length > 0).join(`
`);
                    if (g && l && h?.trim()) try {
                        const v = (await l(h)).trim();
                        v && (g = j8v(g, v));
                    } catch (f) {
                        console.error("[TranscriptStore] Failed to generate transcript overview:", f);
                    }
                    g && await this.writeFile(this.resolveFilePath(n, "jsonl"), Bbo(g));
                }
                return !0;
            } catch (c) {
                return console.error("[TranscriptStore] Failed to write transcript:", c), !1;
            }
        } catch (a) {
            var s = a, o = !0;
        } finally{
            ege(r, s, o);
        }
    }
    async writeFromStateIncremental(e, t, n, i, r = {}) {
        var s = [];
        try {
            const c = t.rootPromptMessagesJson.length, l = Idh(r), u = l.jsonlLines.length > 0;
            if (c === i && !u && !r.overviewFactory) return c;
            const h = this.options.appendFile;
            if (!(h && this.options.writeJsonl && !this.options.writeText && !this.options.writeJson && i > 0 && c >= i && (c > i || u) && !r.overviewFactory)) return await this.writeFromStateFull(e, t, n, r) ? c : 0;
            const g = QQ(s, S_(e.withName("writeFromStateIncremental")));
            if (c === i && u) try {
                return await h(this.resolveFilePath(n, "jsonl"), Bbo(l.jsonlLines.join(`
`))), c;
            } catch (f) {
                return console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", f), this.options.fallbackToFullWriteOnIncrementalFailure && await this.writeFromStateFull(e, t, n, r) ? c : 0;
            }
            try {
                const f = t.rootPromptMessagesJson.slice(i), v = await Fbo(g.ctx, this.blobStore, f);
                g.span.setAttribute("hydratedBlobCount", v.hydratedBlobCount), g.span.setAttribute("hydratedBlobBytes", v.hydratedBlobBytes), g.span.setAttribute("largestHydratedBlobBytes", v.largestHydratedBlobBytes), g.span.setAttribute("totalDeserializeDurationMs", v.totalDeserializeDurationMs), g.span.setAttribute("omittedOversizeBlobCount", v.omittedOversizeBlobCount), g.span.setAttribute("omittedOversizeBlobBytes", v.omittedOversizeBlobBytes), g.span.setAttribute("largestOmittedOversizeBlobBytes", v.largestOmittedOversizeBlobBytes);
                const b = [];
                for (const y of v.messages){
                    const T = Adh(y);
                    T && b.push(T);
                }
                if (b.push(...l.jsonlLines), b.length > 0) {
                    const y = Bbo(b.join(`
`));
                    await h(this.resolveFilePath(n, "jsonl"), y);
                }
                return c;
            } catch (f) {
                return console.error(this.options.fallbackToFullWriteOnIncrementalFailure ? "[TranscriptStore] Failed to append transcript, falling back to full write:" : "[TranscriptStore] Failed to append transcript:", f), this.options.fallbackToFullWriteOnIncrementalFailure && await this.writeFromStateFull(e, t, n, r) ? c : 0;
            }
        } catch (c) {
            var o = c, a = !0;
        } finally{
            ege(s, o, a);
        }
    }
};

}
