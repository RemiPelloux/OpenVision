import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_streams_cache;
export function require_streams() {
if (__wakaru_require_streams_cache) return __wakaru_require_streams_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_streams_cache = module2;
"use strict";
var Buffer4 = require_safer().Buffer;
module2.exports = function(streamModule) {
    var Transform2 = streamModule.Transform;
    function IconvLiteEncoderStream(conv, options2) {
        this.conv = conv;
        options2 = options2 || {};
        options2.decodeStrings = false;
        Transform2.call(this, options2);
    }
    IconvLiteEncoderStream.prototype = Object.create(Transform2.prototype, {
        constructor: {
            value: IconvLiteEncoderStream
        }
    });
    IconvLiteEncoderStream.prototype._transform = function(chunk, encoding, done) {
        if (typeof chunk !== "string") {
            return done(new Error("Iconv encoding stream needs strings as its input."));
        }
        try {
            var res = this.conv.write(chunk);
            if (res && res.length) this.push(res);
            done();
        } catch (e) {
            done(e);
        }
    };
    IconvLiteEncoderStream.prototype._flush = function(done) {
        try {
            var res = this.conv.end();
            if (res && res.length) this.push(res);
            done();
        } catch (e) {
            done(e);
        }
    };
    IconvLiteEncoderStream.prototype.collect = function(cb) {
        var chunks = [];
        this.on("error", cb);
        this.on("data", function(chunk) {
            chunks.push(chunk);
        });
        this.on("end", function() {
            cb(null, Buffer4.concat(chunks));
        });
        return this;
    };
    function IconvLiteDecoderStream(conv, options2) {
        this.conv = conv;
        options2 = options2 || {};
        options2.encoding = this.encoding = "utf8";
        Transform2.call(this, options2);
    }
    IconvLiteDecoderStream.prototype = Object.create(Transform2.prototype, {
        constructor: {
            value: IconvLiteDecoderStream
        }
    });
    IconvLiteDecoderStream.prototype._transform = function(chunk, encoding, done) {
        if (!Buffer4.isBuffer(chunk) && !(chunk instanceof Uint8Array)) {
            return done(new Error("Iconv decoding stream needs buffers as its input."));
        }
        try {
            var res = this.conv.write(chunk);
            if (res && res.length) this.push(res, this.encoding);
            done();
        } catch (e) {
            done(e);
        }
    };
    IconvLiteDecoderStream.prototype._flush = function(done) {
        try {
            var res = this.conv.end();
            if (res && res.length) this.push(res, this.encoding);
            done();
        } catch (e) {
            done(e);
        }
    };
    IconvLiteDecoderStream.prototype.collect = function(cb) {
        var res = "";
        this.on("error", cb);
        this.on("data", function(chunk) {
            res += chunk;
        });
        this.on("end", function() {
            cb(null, res);
        });
        return this;
    };
    return {
        IconvLiteEncoderStream,
        IconvLiteDecoderStream
    };
};

return module2.exports;
}
