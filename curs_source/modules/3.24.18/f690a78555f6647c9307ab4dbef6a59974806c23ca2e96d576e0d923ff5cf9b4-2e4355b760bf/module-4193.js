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
    fromBinary(e, A) {
        const t = this.getType().runtime.bin, n = t.makeReadOptions(A);
        return t.readMessage(this, n.readerFactory(e), e.byteLength, n), this;
    }
    fromJson(e, A) {
        const t = this.getType(), n = t.runtime.json, r = n.makeReadOptions(A);
        return n.readMessage(t, e, r, this), this;
    }
    fromJsonString(e, A) {
        let t;
        try {
            t = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(t, A);
    }
    toBinary(e) {
        const A = this.getType().runtime.bin, t = A.makeWriteOptions(e), n = t.writerFactory();
        return A.writeMessage(this, n, t), n.finish();
    }
    toJson(e) {
        const A = this.getType().runtime.json, t = A.makeWriteOptions(e);
        return A.writeMessage(this, t);
    }
    toJsonString(e) {
        var A;
        const t = this.toJson(e);
        return JSON.stringify(t, null, null !== (A = null == e ? void 0 : e.prettySpaces) && void 0 !== A ? A : 0);
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
