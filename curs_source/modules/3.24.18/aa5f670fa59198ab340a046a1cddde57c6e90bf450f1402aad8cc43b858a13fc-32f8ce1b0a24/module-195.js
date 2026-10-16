require.r(exports);
require.d(exports, {
    Message: ()=>Message
});
class Message {
    equals(other) {
        return this.getType().runtime.util.equals(this.getType(), this, other);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(bytes, options) {
        const type = this.getType(), format = type.runtime.bin, opt = format.makeReadOptions(options);
        format.readMessage(this, opt.readerFactory(bytes), bytes.byteLength, opt);
        return this;
    }
    fromJson(jsonValue, options) {
        const type = this.getType(), format = type.runtime.json, opt = format.makeReadOptions(options);
        format.readMessage(type, jsonValue, opt, this);
        return this;
    }
    fromJsonString(jsonString, options) {
        let json;
        try {
            json = JSON.parse(jsonString);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(json, options);
    }
    toBinary(options) {
        const type = this.getType(), bin = type.runtime.bin, opt = bin.makeWriteOptions(options), writer = opt.writerFactory();
        bin.writeMessage(this, writer, opt);
        return writer.finish();
    }
    toJson(options) {
        const type = this.getType(), json = type.runtime.json, opt = json.makeWriteOptions(options);
        return json.writeMessage(this, opt);
    }
    toJsonString(options) {
        var _a;
        const value = this.toJson(options);
        return JSON.stringify(value, null, (_a = options === null || options === void 0 ? void 0 : options.prettySpaces) !== null && _a !== void 0 ? _a : 0);
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: true
        });
    }
    getType() {
        return Object.getPrototypeOf(this).constructor;
    }
}
