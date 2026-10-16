require.r(exports);
require.d(exports, {
    protoDelimited: ()=>protoDelimited
});
var _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__ = require("./module-25.js");
const protoDelimited = {
    enc (message, options) {
        const opt = message.getType().runtime.bin.makeWriteOptions(options);
        return opt.writerFactory().bytes(message.toBinary(opt)).finish();
    },
    dec (type, bytes, options) {
        const opt = type.runtime.bin.makeReadOptions(options);
        return type.fromBinary(opt.readerFactory(bytes).bytes(), opt);
    },
    async *decStream (type, iterable) {
        function append(buffer2, chunk) {
            const n = new Uint8Array(buffer2.byteLength + chunk.byteLength);
            n.set(buffer2);
            n.set(chunk, buffer2.length);
            return n;
        }
        let buffer = new Uint8Array(0);
        for await (const chunk of iterable){
            buffer = append(buffer, chunk);
            for(;;){
                const size = protoDelimited.peekSize(buffer);
                if (size.eof) {
                    break;
                }
                if (size.offset + size.size > buffer.byteLength) {
                    break;
                }
                yield protoDelimited.dec(type, buffer);
                buffer = buffer.subarray(size.offset + size.size);
            }
        }
        if (buffer.byteLength > 0) {
            throw new Error("incomplete data");
        }
    },
    peekSize (data) {
        const sizeEof = {
            eof: true,
            size: null,
            offset: null
        };
        for(let i = 0; i < 10; i++){
            if (i > data.byteLength) {
                return sizeEof;
            }
            if ((data[i] & 128) == 0) {
                const reader = new _binary_encoding_js__WEBPACK_IMPORTED_MODULE_0__.BinaryReader(data);
                let size;
                try {
                    size = reader.uint32();
                } catch (e) {
                    if (e instanceof RangeError) {
                        return sizeEof;
                    }
                    throw e;
                }
                return {
                    eof: false,
                    size,
                    offset: reader.pos
                };
            }
        }
        throw new Error("invalid varint");
    }
};
