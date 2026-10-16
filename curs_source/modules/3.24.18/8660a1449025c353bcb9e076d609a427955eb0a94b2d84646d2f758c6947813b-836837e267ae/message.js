import { E } from "./tslib.es6.js";
var Dm;
export { Dm };
var __wakaru_Ude_initialized = false;
export function Ude() {
if (__wakaru_Ude_initialized) return;
__wakaru_Ude_initialized = true;
"use strict";
E(), Dm = class {
    equals(t) {
        return this.getType().runtime.util.equals(this.getType(), this, t);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(t, e) {
        const n = this.getType(), i = n.runtime.bin, r = i.makeReadOptions(e);
        return i.readMessage(this, r.readerFactory(t), t.byteLength, r), this;
    }
    fromJson(t, e) {
        const n = this.getType(), i = n.runtime.json, r = i.makeReadOptions(e);
        return i.readMessage(n, t, r, this), this;
    }
    fromJsonString(t, e) {
        let n;
        try {
            n = JSON.parse(t);
        } catch (i) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${i instanceof Error ? i.message : String(i)}`);
        }
        return this.fromJson(n, e);
    }
    toBinary(t) {
        const e = this.getType(), n = e.runtime.bin, i = n.makeWriteOptions(t), r = i.writerFactory();
        return n.writeMessage(this, r, i), r.finish();
    }
    toJson(t) {
        const e = this.getType(), n = e.runtime.json, i = n.makeWriteOptions(t);
        return n.writeMessage(this, i);
    }
    toJsonString(t) {
        const e = this.toJson(t);
        return JSON.stringify(e, null, t?.prettySpaces ?? 0);
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
