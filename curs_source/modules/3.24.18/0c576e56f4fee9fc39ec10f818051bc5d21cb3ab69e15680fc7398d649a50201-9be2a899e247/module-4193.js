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
        const r = this.getType().runtime.bin, n = r.makeReadOptions(t);
        return r.readMessage(this, n.readerFactory(e), e.byteLength, n), this;
    }
    fromJson(e, t) {
        const r = this.getType(), n = r.runtime.json, o = n.makeReadOptions(t);
        return n.readMessage(r, e, o, this), this;
    }
    fromJsonString(e, t) {
        let r;
        try {
            r = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(r, t);
    }
    toBinary(e) {
        const t = this.getType().runtime.bin, r = t.makeWriteOptions(e), n = r.writerFactory();
        return t.writeMessage(this, n, r), n.finish();
    }
    toJson(e) {
        const t = this.getType().runtime.json, r = t.makeWriteOptions(e);
        return t.writeMessage(this, r);
    }
    toJsonString(e) {
        var t;
        const r = this.toJson(e);
        return JSON.stringify(r, null, null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t ? t : 0);
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
