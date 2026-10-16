import { Chn, Ehn, Thn, uO } from "./SZu.js";
import { EQn, fvr } from "./json-schema-processors.js";
import { pvr } from "./to-json-schema.js";
import { E } from "./tslib.es6.js";
var nad;
export { nad };
var __wakaru_STy_initialized = false;
export function STy() {
if (__wakaru_STy_initialized) return;
__wakaru_STy_initialized = true;
E(), EQn(), pvr(), nad = class {
    get metadataRegistry() {
        return this.ctx.metadataRegistry;
    }
    get target() {
        return this.ctx.target;
    }
    get unrepresentable() {
        return this.ctx.unrepresentable;
    }
    get override() {
        return this.ctx.override;
    }
    get io() {
        return this.ctx.io;
    }
    get counter() {
        return this.ctx.counter;
    }
    set counter(t) {
        this.ctx.counter = t;
    }
    get seen() {
        return this.ctx.seen;
    }
    constructor(t){
        let e = t?.target ?? "draft-2020-12";
        e === "draft-4" && (e = "draft-04"), e === "draft-7" && (e = "draft-07"), this.ctx = Chn({
            processors: fvr,
            target: e,
            ...t?.metadata && {
                metadata: t.metadata
            },
            ...t?.unrepresentable && {
                unrepresentable: t.unrepresentable
            },
            ...t?.override && {
                override: t.override
            },
            ...t?.io && {
                io: t.io
            }
        });
    }
    process(t, e = {
        path: [],
        schemaPath: []
    }) {
        return uO(t, this.ctx, e);
    }
    emit(t, e) {
        e && (e.cycles && (this.ctx.cycles = e.cycles), e.reused && (this.ctx.reused = e.reused), e.external && (this.ctx.external = e.external)), Thn(this.ctx, t);
        const n = Ehn(this.ctx, t), { "~standard": i, ...r } = n;
        return r;
    }
};

}
