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
    fromBinary(e, t) {
        const A = this.getType().runtime.bin, n = A.makeReadOptions(t);
        return A.readMessage(this, n.readerFactory(e), e.byteLength, n), this;
    }
    fromJson(e, t) {
        const A = this.getType(), n = A.runtime.json, r = n.makeReadOptions(t);
        return n.readMessage(A, e, r, this), this;
    }
    fromJsonString(e, t) {
        let A;
        try {
            A = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(A, t);
    }
    toBinary(e) {
        const t = this.getType().runtime.bin, A = t.makeWriteOptions(e), n = A.writerFactory();
        return t.writeMessage(this, n, A), n.finish();
    }
    toJson(e) {
        const t = this.getType().runtime.json, A = t.makeWriteOptions(e);
        return t.writeMessage(this, A);
    }
    toJsonString(e) {
        var t;
        const A = this.toJson(e);
        return JSON.stringify(A, null, null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t ? t : 0);
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
