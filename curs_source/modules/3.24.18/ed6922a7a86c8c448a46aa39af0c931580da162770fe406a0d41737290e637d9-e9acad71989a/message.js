import { x } from "./tslib.es6.js";
var yg;
export { yg };
var __wakaru_IJ_initialized = false;
export function IJ() {
if (__wakaru_IJ_initialized) return;
__wakaru_IJ_initialized = true;
"use strict";
x(), yg = class {
    equals(e) {
        return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, t) {
        const n = this.getType(), i = n.runtime.bin, r = i.makeReadOptions(t);
        return i.readMessage(this, r.readerFactory(e), e.byteLength, r), this;
    }
    fromJson(e, t) {
        const n = this.getType(), i = n.runtime.json, r = i.makeReadOptions(t);
        return i.readMessage(n, e, r, this), this;
    }
    fromJsonString(e, t) {
        let n;
        try {
            n = JSON.parse(e);
        } catch (i) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
        }
        return this.fromJson(n, t);
    }
    toBinary(e) {
        const t = this.getType(), n = t.runtime.bin, i = n.makeWriteOptions(e), r = i.writerFactory();
        return n.writeMessage(this, r, i), r.finish();
    }
    toJson(e) {
        const t = this.getType(), n = t.runtime.json, i = n.makeWriteOptions(e);
        return n.writeMessage(this, i);
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
