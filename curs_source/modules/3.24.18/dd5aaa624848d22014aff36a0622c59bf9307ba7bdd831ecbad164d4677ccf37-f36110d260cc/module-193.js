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
        const n = this.getType().runtime.bin, r = n.makeReadOptions(t);
        return n.readMessage(this, r.readerFactory(e), e.byteLength, r), this;
    }
    fromJson(e, t) {
        const n = this.getType(), r = n.runtime.json, o = r.makeReadOptions(t);
        return r.readMessage(n, e, o, this), this;
    }
    fromJsonString(e, t) {
        let n;
        try {
            n = JSON.parse(e);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(n, t);
    }
    toBinary(e) {
        const t = this.getType().runtime.bin, n = t.makeWriteOptions(e), r = n.writerFactory();
        return t.writeMessage(this, r, n), r.finish();
    }
    toJson(e) {
        const t = this.getType().runtime.json, n = t.makeWriteOptions(e);
        return t.writeMessage(this, n);
    }
    toJsonString(e) {
        var t;
        const n = this.toJson(e);
        return JSON.stringify(n, null, null !== (t = null == e ? void 0 : e.prettySpaces) && void 0 !== t ? t : 0);
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
