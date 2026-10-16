import { require_common2 } from "./utils/common.js";
import { require_strings } from "./utils/strings.js";
import { require_constants16 } from "./zlib/constants.js";
import { require_gzheader } from "./zlib/gzheader.js";
import { require_inflate } from "./zlib/inflate.js";
import { require_messages } from "./zlib/messages.js";
import { require_zstream } from "./zlib/zstream.js";
var __wakaru_require_inflate2_cache;
export function require_inflate2() {
if (__wakaru_require_inflate2_cache) return __wakaru_require_inflate2_cache;
var exports2 = {};
__wakaru_require_inflate2_cache = exports2;
"use strict";
var zlib_inflate = require_inflate();
var utils2 = require_common2();
var strings = require_strings();
var c = require_constants16();
var msg = require_messages();
var ZStream = require_zstream();
var GZheader = require_gzheader();
var toString2 = Object.prototype.toString;
function Inflate(options2) {
    if (!(this instanceof Inflate)) return new Inflate(options2);
    this.options = utils2.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
    }, options2 || {});
    var opt = this.options;
    if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
            opt.windowBits = -15;
        }
    }
    if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options2 && options2.windowBits)) {
        opt.windowBits += 32;
    }
    if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
        }
    }
    this.err = 0;
    this.msg = "";
    this.ended = false;
    this.chunks = [];
    this.strm = new ZStream();
    this.strm.avail_out = 0;
    var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);
    if (status !== c.Z_OK) {
        throw new Error(msg[status]);
    }
    this.header = new GZheader();
    zlib_inflate.inflateGetHeader(this.strm, this.header);
    if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
            opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString2.call(opt.dictionary) === "[object ArrayBuffer]") {
            opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
            status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
            if (status !== c.Z_OK) {
                throw new Error(msg[status]);
            }
        }
    }
}
Inflate.prototype.push = function(data, mode) {
    var strm = this.strm;
    var chunkSize = this.options.chunkSize;
    var dictionary = this.options.dictionary;
    var status, _mode;
    var next_out_utf8, tail, utf8str;
    var allowBufError = false;
    if (this.ended) {
        return false;
    }
    _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
    if (typeof data === "string") {
        strm.input = strings.binstring2buf(data);
    } else if (toString2.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
    } else {
        strm.input = data;
    }
    strm.next_in = 0;
    strm.avail_in = strm.input.length;
    do {
        if (strm.avail_out === 0) {
            strm.output = new utils2.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status === c.Z_NEED_DICT && dictionary) {
            status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        }
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
        }
        if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
                if (this.options.to === "string") {
                    next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                    tail = strm.next_out - next_out_utf8;
                    utf8str = strings.buf2string(strm.output, next_out_utf8);
                    strm.next_out = tail;
                    strm.avail_out = chunkSize - tail;
                    if (tail) {
                        utils2.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                    }
                    this.onData(utf8str);
                } else {
                    this.onData(utils2.shrinkBuf(strm.output, strm.next_out));
                }
            }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
            allowBufError = true;
        }
    }while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END)
    if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
    }
    if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
    }
    if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
    }
    return true;
};
Inflate.prototype.onData = function(chunk) {
    this.chunks.push(chunk);
};
Inflate.prototype.onEnd = function(status) {
    if (status === c.Z_OK) {
        if (this.options.to === "string") {
            this.result = this.chunks.join("");
        } else {
            this.result = utils2.flattenChunks(this.chunks);
        }
    }
    this.chunks = [];
    this.err = status;
    this.msg = this.strm.msg;
};
function inflate(input, options2) {
    var inflator = new Inflate(options2);
    inflator.push(input, true);
    if (inflator.err) {
        throw inflator.msg || msg[inflator.err];
    }
    return inflator.result;
}
function inflateRaw(input, options2) {
    options2 = options2 || {};
    options2.raw = true;
    return inflate(input, options2);
}
exports2.Inflate = Inflate;
exports2.inflate = inflate;
exports2.inflateRaw = inflateRaw;
exports2.ungzip = inflate;

return exports2;
}
