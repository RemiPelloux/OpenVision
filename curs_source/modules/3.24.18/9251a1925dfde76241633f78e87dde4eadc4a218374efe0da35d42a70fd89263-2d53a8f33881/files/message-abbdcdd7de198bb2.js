var Message;
export { Message };
var __wakaru_init_message_initialized = false;
export function init_message() {
if (__wakaru_init_message_initialized) return;
__wakaru_init_message_initialized = true;
Message = class {
    equals(other) {
        return this.getType().runtime.util.equals(this.getType(), this, other);
    }
    clone() {
        return this.getType().runtime.util.clone(this);
    }
    fromBinary(bytes, options2) {
        const type2 = this.getType(), format2 = type2.runtime.bin, opt = format2.makeReadOptions(options2);
        format2.readMessage(this, opt.readerFactory(bytes), bytes.byteLength, opt);
        return this;
    }
    fromJson(jsonValue, options2) {
        const type2 = this.getType(), format2 = type2.runtime.json, opt = format2.makeReadOptions(options2);
        format2.readMessage(type2, jsonValue, opt, this);
        return this;
    }
    fromJsonString(jsonString, options2) {
        let json2;
        try {
            json2 = JSON.parse(jsonString);
        } catch (e) {
            throw new Error(`cannot decode ${this.getType().typeName} from JSON: ${e instanceof Error ? e.message : String(e)}`);
        }
        return this.fromJson(json2, options2);
    }
    toBinary(options2) {
        const type2 = this.getType(), bin = type2.runtime.bin, opt = bin.makeWriteOptions(options2), writer = opt.writerFactory();
        bin.writeMessage(this, writer, opt);
        return writer.finish();
    }
    toJson(options2) {
        const type2 = this.getType(), json2 = type2.runtime.json, opt = json2.makeWriteOptions(options2);
        return json2.writeMessage(this, opt);
    }
    toJsonString(options2) {
        var _a18;
        const value = this.toJson(options2);
        return JSON.stringify(value, null, (_a18 = options2 === null || options2 === void 0 ? void 0 : options2.prettySpaces) !== null && _a18 !== void 0 ? _a18 : 0);
    }
    toJSON() {
        return this.toJson({
            emitDefaultValues: true
        });
    }
    getType() {
        return Object.getPrototypeOf(this).constructor;
    }
};

}
