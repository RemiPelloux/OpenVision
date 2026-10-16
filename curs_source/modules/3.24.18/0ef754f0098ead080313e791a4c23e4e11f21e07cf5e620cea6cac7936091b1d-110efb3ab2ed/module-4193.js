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
    fromBinary(e, a) {
        const n = this.getType().runtime.bin, t = n.makeReadOptions(a);
        return n.readMessage(this, t.readerFactory(e), e.byteLength, t), this;
    }
    fromJson(e, a) {
        const n = this.getType(), t = n.runtime.json, s = t.makeReadOptions(a);
        return t.readMessage(n, e, s, this), this;
    }
    fromJsonString(e, a) {
        let n;
        try {
            n = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(n, a);
    }
    toBinary(e) {
        const a = this.getType().runtime.bin, n = a.makeWriteOptions(e), t = n.writerFactory();
        return a.writeMessage(this, t, n), t.finish();
    }
    toJson(e) {
        const a = this.getType().runtime.json, n = a.makeWriteOptions(e);
        return a.writeMessage(this, n);
    }
    toJsonString(e) {
        var a;
        const n = this.toJson(e);
        return JSON.stringify(n, null, null !== (a = null == e ? void 0 : e.prettySpaces) && void 0 !== a ? a : 0);
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
