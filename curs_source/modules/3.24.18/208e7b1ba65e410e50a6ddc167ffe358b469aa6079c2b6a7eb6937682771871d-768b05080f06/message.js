import { h } from "./tslib.es6.js";
var fe;
export { fe };
var __wakaru_$r_initialized = false;
export function $r() {
if (__wakaru_$r_initialized) return;
__wakaru_$r_initialized = true;
"use strict";
h(), fe = class {
    equals(e) {
        return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, t) {
        const n = this.getType(), r = n.runtime.bin, s = r.makeReadOptions(t);
        return r.readMessage(this, s.readerFactory(e), e.byteLength, s), this;
    }
    fromJson(e, t) {
        const n = this.getType(), r = n.runtime.json, s = r.makeReadOptions(t);
        return r.readMessage(n, e, s, this), this;
    }
    fromJsonString(e, t) {
        let n;
        try {
            n = JSON.parse(e);
        } catch (r) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${r instanceof Error ? r.message : String(r)}`);
        }
        return this.fromJson(n, t);
    }
    toBinary(e) {
        const t = this.getType(), n = t.runtime.bin, r = n.makeWriteOptions(e), s = r.writerFactory();
        return n.writeMessage(this, s, r), s.finish();
    }
    toJson(e) {
        const t = this.getType(), n = t.runtime.json, r = n.makeWriteOptions(e);
        return n.writeMessage(this, r);
    }
    toJsonString(e) {
        const t = this.toJson(e);
        return JSON.stringify(t, null, e?.prettySpaces ?? 0);
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: !0
        });
    }
    getType() {
        return Object.getPrototypeOf(this).constructor;
    }
};

}
