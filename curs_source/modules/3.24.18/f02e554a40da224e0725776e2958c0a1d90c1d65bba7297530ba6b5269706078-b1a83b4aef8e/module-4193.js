"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.Message = void 0;
exports.Message = class {
    equals(t) {
        return this.getType().runtime.util.equals(this.getType(), this, t);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(t, e) {
        const r = this.getType().runtime.bin, n = r.makeReadOptions(e);
        return r.readMessage(this, n.readerFactory(t), t.byteLength, n), this;
    }
    fromJson(t, e) {
        const r = this.getType(), n = r.runtime.json, s = n.makeReadOptions(e);
        return n.readMessage(r, t, s, this), this;
    }
    fromJsonString(t, e) {
        let r;
        try {
            r = JSON.parse(t);
        } catch (t) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${t instanceof Error ? t.message : String(t)}`);
        }
        return this.fromJson(r, e);
    }
    toBinary(t) {
        const e = this.getType().runtime.bin, r = e.makeWriteOptions(t), n = r.writerFactory();
        return e.writeMessage(this, n, r), n.finish();
    }
    toJson(t) {
        const e = this.getType().runtime.json, r = e.makeWriteOptions(t);
        return e.writeMessage(this, r);
    }
    toJsonString(t) {
        var e;
        const r = this.toJson(t);
        return JSON.stringify(r, null, null !== (e = null == t ? void 0 : t.prettySpaces) && void 0 !== e ? e : 0);
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
