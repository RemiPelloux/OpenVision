"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Message = void 0;
exports.Message = class {
    equals(e) {
        return this.getType().runtime.util.equals(this.getType(), this, e);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(e, n) {
        const a = this.getType().runtime.bin, t = a.makeReadOptions(n);
        return a.readMessage(this, t.readerFactory(e), e.byteLength, t), this;
    }
    fromJson(e, n) {
        const a = this.getType(), t = a.runtime.json, s = t.makeReadOptions(n);
        return t.readMessage(a, e, s, this), this;
    }
    fromJsonString(e, n) {
        let a;
        try {
            a = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(a, n);
    }
    toBinary(e) {
        const n = this.getType().runtime.bin, a = n.makeWriteOptions(e), t = a.writerFactory();
        return n.writeMessage(this, t, a), t.finish();
    }
    toJson(e) {
        const n = this.getType().runtime.json, a = n.makeWriteOptions(e);
        return n.writeMessage(this, a);
    }
    toJsonString(e) {
        var n;
        const a = this.toJson(e);
        return JSON.stringify(a, null, null !== (n = null == e ? void 0 : e.prettySpaces) && void 0 !== n ? n : 0);
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
