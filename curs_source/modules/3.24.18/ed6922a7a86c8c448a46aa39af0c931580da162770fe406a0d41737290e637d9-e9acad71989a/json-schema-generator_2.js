import { E8t, T8t, UM, x8t } from "./f0s.js";
import { S5i, dAn } from "./json-schema-processors_2.js";
import { _5i } from "./to-json-schema_2.js";
import { x } from "./tslib.es6.js";
var uyu;
export { uyu };
var __wakaru_Hav_initialized = false;
export function Hav() {
if (__wakaru_Hav_initialized) return;
__wakaru_Hav_initialized = true;
x(), dAn(), _5i(), uyu = class {
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
    set counter(e) {
        this.ctx.counter = e;
    }
    get seen() {
        return this.ctx.seen;
    }
    constructor(e){
        let t = e?.target ?? "draft-2020-12";
        t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), this.ctx = T8t({
            processors: S5i,
            target: t,
            ...e?.metadata && {
                metadata: e.metadata
            },
            ...e?.unrepresentable && {
                unrepresentable: e.unrepresentable
            },
            ...e?.override && {
                override: e.override
            },
            ...e?.io && {
                io: e.io
            }
        });
    }
    process(e, t = {
        path: [],
        schemaPath: []
    }) {
        return UM(e, this.ctx, t);
    }
    emit(e, t) {
        t && (t.cycles && (this.ctx.cycles = t.cycles), t.reused && (this.ctx.reused = t.reused), t.external && (this.ctx.external = t.external)), E8t(this.ctx, e);
        const n = x8t(this.ctx, e), { "~standard": i, ...r } = n;
        return r;
    }
};

}
