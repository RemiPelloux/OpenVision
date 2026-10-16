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
        const t = this.getType().runtime.bin, a = t.makeReadOptions(n);
        return t.readMessage(this, a.readerFactory(e), e.byteLength, a), this;
    }
    fromJson(e, n) {
        const t = this.getType(), a = t.runtime.json, s = a.makeReadOptions(n);
        return a.readMessage(t, e, s, this), this;
    }
    fromJsonString(e, n) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(t, n);
    }
    toBinary(e) {
        const n = this.getType().runtime.bin, t = n.makeWriteOptions(e), a = t.writerFactory();
        return n.writeMessage(this, a, t), a.finish();
    }
    toJson(e) {
        const n = this.getType().runtime.json, t = n.makeWriteOptions(e);
        return n.writeMessage(this, t);
    }
    toJsonString(e) {
        var n;
        const t = this.toJson(e);
        return JSON.stringify(t, null, null !== (n = null == e ? void 0 : e.prettySpaces) && void 0 !== n ? n : 0);
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
