import { require_safer } from "../../../../safer-buffer@2.1.2/node_modules/safer-buffer/safer.js";
var __wakaru_require_dbcs_codec_cache;
export function require_dbcs_codec() {
if (__wakaru_require_dbcs_codec_cache) return __wakaru_require_dbcs_codec_cache;
var exports2 = {};
__wakaru_require_dbcs_codec_cache = exports2;
"use strict";
var Buffer4 = require_safer().Buffer;
exports2._dbcs = DBCSCodec;
var UNASSIGNED = -1;
var GB18030_CODE = -2;
var SEQ_START = -10;
var NODE_START = -1e3;
var UNASSIGNED_NODE = new Array(256);
var DEF_CHAR = -1;
for(i = 0; i < 256; i++){
    UNASSIGNED_NODE[i] = UNASSIGNED;
}
var i;
function DBCSCodec(codecOptions, iconv3) {
    this.encodingName = codecOptions.encodingName;
    if (!codecOptions) {
        throw new Error("DBCS codec is called without the data.");
    }
    if (!codecOptions.table) {
        throw new Error("Encoding '" + this.encodingName + "' has no data.");
    }
    var mappingTable = codecOptions.table();
    this.decodeTables = [];
    this.decodeTables[0] = UNASSIGNED_NODE.slice(0);
    this.decodeTableSeq = [];
    for(var i2 = 0; i2 < mappingTable.length; i2++){
        this._addDecodeChunk(mappingTable[i2]);
    }
    if (typeof codecOptions.gb18030 === "function") {
        this.gb18030 = codecOptions.gb18030();
        var commonThirdByteNodeIdx = this.decodeTables.length;
        this.decodeTables.push(UNASSIGNED_NODE.slice(0));
        var commonFourthByteNodeIdx = this.decodeTables.length;
        this.decodeTables.push(UNASSIGNED_NODE.slice(0));
        var firstByteNode = this.decodeTables[0];
        for(var i2 = 129; i2 <= 254; i2++){
            var secondByteNode = this.decodeTables[NODE_START - firstByteNode[i2]];
            for(var j2 = 48; j2 <= 57; j2++){
                if (secondByteNode[j2] === UNASSIGNED) {
                    secondByteNode[j2] = NODE_START - commonThirdByteNodeIdx;
                } else if (secondByteNode[j2] > NODE_START) {
                    throw new Error("gb18030 decode tables conflict at byte 2");
                }
                var thirdByteNode = this.decodeTables[NODE_START - secondByteNode[j2]];
                for(var k2 = 129; k2 <= 254; k2++){
                    if (thirdByteNode[k2] === UNASSIGNED) {
                        thirdByteNode[k2] = NODE_START - commonFourthByteNodeIdx;
                    } else if (thirdByteNode[k2] === NODE_START - commonFourthByteNodeIdx) {
                        continue;
                    } else if (thirdByteNode[k2] > NODE_START) {
                        throw new Error("gb18030 decode tables conflict at byte 3");
                    }
                    var fourthByteNode = this.decodeTables[NODE_START - thirdByteNode[k2]];
                    for(var l = 48; l <= 57; l++){
                        if (fourthByteNode[l] === UNASSIGNED) {
                            fourthByteNode[l] = GB18030_CODE;
                        }
                    }
                }
            }
        }
    }
    this.defaultCharUnicode = iconv3.defaultCharUnicode;
    this.encodeTable = [];
    this.encodeTableSeq = [];
    var skipEncodeChars = {};
    if (codecOptions.encodeSkipVals) {
        for(var i2 = 0; i2 < codecOptions.encodeSkipVals.length; i2++){
            var val = codecOptions.encodeSkipVals[i2];
            if (typeof val === "number") {
                skipEncodeChars[val] = true;
            } else {
                for(var j2 = val.from; j2 <= val.to; j2++){
                    skipEncodeChars[j2] = true;
                }
            }
        }
    }
    this._fillEncodeTable(0, 0, skipEncodeChars);
    if (codecOptions.encodeAdd) {
        for(var uChar in codecOptions.encodeAdd){
            if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar)) {
                this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
            }
        }
    }
    this.defCharSB = this.encodeTable[0][iconv3.defaultCharSingleByte.charCodeAt(0)];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]["?"];
    if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
}
DBCSCodec.prototype.encoder = DBCSEncoder;
DBCSCodec.prototype.decoder = DBCSDecoder;
DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
    var bytes = [];
    for(; addr > 0; addr >>>= 8){
        bytes.push(addr & 255);
    }
    if (bytes.length == 0) {
        bytes.push(0);
    }
    var node = this.decodeTables[0];
    for(var i2 = bytes.length - 1; i2 > 0; i2--){
        var val = node[bytes[i2]];
        if (val == UNASSIGNED) {
            node[bytes[i2]] = NODE_START - this.decodeTables.length;
            this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
        } else if (val <= NODE_START) {
            node = this.decodeTables[NODE_START - val];
        } else {
            throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
        }
    }
    return node;
};
DBCSCodec.prototype._addDecodeChunk = function(chunk) {
    var curAddr = parseInt(chunk[0], 16);
    var writeTable = this._getDecodeTrieNode(curAddr);
    curAddr = curAddr & 255;
    for(var k2 = 1; k2 < chunk.length; k2++){
        var part = chunk[k2];
        if (typeof part === "string") {
            for(var l = 0; l < part.length;){
                var code = part.charCodeAt(l++);
                if (code >= 55296 && code < 56320) {
                    var codeTrail = part.charCodeAt(l++);
                    if (codeTrail >= 56320 && codeTrail < 57344) {
                        writeTable[curAddr++] = 65536 + (code - 55296) * 1024 + (codeTrail - 56320);
                    } else {
                        throw new Error("Incorrect surrogate pair in " + this.encodingName + " at chunk " + chunk[0]);
                    }
                } else if (code > 4080 && code <= 4095) {
                    var len = 4095 - code + 2;
                    var seq2 = [];
                    for(var m2 = 0; m2 < len; m2++){
                        seq2.push(part.charCodeAt(l++));
                    }
                    writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                    this.decodeTableSeq.push(seq2);
                } else {
                    writeTable[curAddr++] = code;
                }
            }
        } else if (typeof part === "number") {
            var charCode = writeTable[curAddr - 1] + 1;
            for(var l = 0; l < part; l++){
                writeTable[curAddr++] = charCode++;
            }
        } else {
            throw new Error("Incorrect type '" + typeof part + "' given in " + this.encodingName + " at chunk " + chunk[0]);
        }
    }
    if (curAddr > 255) {
        throw new Error("Incorrect chunk in " + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
    }
};
DBCSCodec.prototype._getEncodeBucket = function(uCode) {
    var high = uCode >> 8;
    if (this.encodeTable[high] === void 0) {
        this.encodeTable[high] = UNASSIGNED_NODE.slice(0);
    }
    return this.encodeTable[high];
};
DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 255;
    if (bucket[low] <= SEQ_START) {
        this.encodeTableSeq[SEQ_START - bucket[low]][DEF_CHAR] = dbcsCode;
    } else if (bucket[low] == UNASSIGNED) {
        bucket[low] = dbcsCode;
    }
};
DBCSCodec.prototype._setEncodeSequence = function(seq2, dbcsCode) {
    var uCode = seq2[0];
    var bucket = this._getEncodeBucket(uCode);
    var low = uCode & 255;
    var node;
    if (bucket[low] <= SEQ_START) {
        node = this.encodeTableSeq[SEQ_START - bucket[low]];
    } else {
        node = {};
        if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low];
        bucket[low] = SEQ_START - this.encodeTableSeq.length;
        this.encodeTableSeq.push(node);
    }
    for(var j2 = 1; j2 < seq2.length - 1; j2++){
        var oldVal = node[uCode];
        if (typeof oldVal === "object") {
            node = oldVal;
        } else {
            node = node[uCode] = {};
            if (oldVal !== void 0) {
                node[DEF_CHAR] = oldVal;
            }
        }
    }
    uCode = seq2[seq2.length - 1];
    node[uCode] = dbcsCode;
};
DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
    var node = this.decodeTables[nodeIdx];
    var hasValues = false;
    var subNodeEmpty = {};
    for(var i2 = 0; i2 < 256; i2++){
        var uCode = node[i2];
        var mbCode = prefix + i2;
        if (skipEncodeChars[mbCode]) {
            continue;
        }
        if (uCode >= 0) {
            this._setEncodeChar(uCode, mbCode);
            hasValues = true;
        } else if (uCode <= NODE_START) {
            var subNodeIdx = NODE_START - uCode;
            if (!subNodeEmpty[subNodeIdx]) {
                var newPrefix = mbCode << 8 >>> 0;
                if (this._fillEncodeTable(subNodeIdx, newPrefix, skipEncodeChars)) {
                    hasValues = true;
                } else {
                    subNodeEmpty[subNodeIdx] = true;
                }
            }
        } else if (uCode <= SEQ_START) {
            this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
            hasValues = true;
        }
    }
    return hasValues;
};
function DBCSEncoder(options2, codec) {
    this.leadSurrogate = -1;
    this.seqObj = void 0;
    this.encodeTable = codec.encodeTable;
    this.encodeTableSeq = codec.encodeTableSeq;
    this.defaultCharSingleByte = codec.defCharSB;
    this.gb18030 = codec.gb18030;
}
DBCSEncoder.prototype.write = function(str3) {
    var newBuf = Buffer4.alloc(str3.length * (this.gb18030 ? 4 : 3));
    var leadSurrogate = this.leadSurrogate;
    var seqObj = this.seqObj;
    var nextChar = -1;
    var i2 = 0;
    var j2 = 0;
    while(true){
        if (nextChar === -1) {
            if (i2 == str3.length) break;
            var uCode = str3.charCodeAt(i2++);
        } else {
            var uCode = nextChar;
            nextChar = -1;
        }
        if (uCode >= 55296 && uCode < 57344) {
            if (uCode < 56320) {
                if (leadSurrogate === -1) {
                    leadSurrogate = uCode;
                    continue;
                } else {
                    leadSurrogate = uCode;
                    uCode = UNASSIGNED;
                }
            } else {
                if (leadSurrogate !== -1) {
                    uCode = 65536 + (leadSurrogate - 55296) * 1024 + (uCode - 56320);
                    leadSurrogate = -1;
                } else {
                    uCode = UNASSIGNED;
                }
            }
        } else if (leadSurrogate !== -1) {
            nextChar = uCode;
            uCode = UNASSIGNED;
            leadSurrogate = -1;
        }
        var dbcsCode = UNASSIGNED;
        if (seqObj !== void 0 && uCode != UNASSIGNED) {
            var resCode = seqObj[uCode];
            if (typeof resCode === "object") {
                seqObj = resCode;
                continue;
            } else if (typeof resCode === "number") {
                dbcsCode = resCode;
            } else if (resCode == void 0) {
                resCode = seqObj[DEF_CHAR];
                if (resCode !== void 0) {
                    dbcsCode = resCode;
                    nextChar = uCode;
                } else {}
            }
            seqObj = void 0;
        } else if (uCode >= 0) {
            var subtable = this.encodeTable[uCode >> 8];
            if (subtable !== void 0) {
                dbcsCode = subtable[uCode & 255];
            }
            if (dbcsCode <= SEQ_START) {
                seqObj = this.encodeTableSeq[SEQ_START - dbcsCode];
                continue;
            }
            if (dbcsCode == UNASSIGNED && this.gb18030) {
                var idx = findIdx(this.gb18030.uChars, uCode);
                if (idx != -1) {
                    var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
                    newBuf[j2++] = 129 + Math.floor(dbcsCode / 12600);
                    dbcsCode = dbcsCode % 12600;
                    newBuf[j2++] = 48 + Math.floor(dbcsCode / 1260);
                    dbcsCode = dbcsCode % 1260;
                    newBuf[j2++] = 129 + Math.floor(dbcsCode / 10);
                    dbcsCode = dbcsCode % 10;
                    newBuf[j2++] = 48 + dbcsCode;
                    continue;
                }
            }
        }
        if (dbcsCode === UNASSIGNED) {
            dbcsCode = this.defaultCharSingleByte;
        }
        if (dbcsCode < 256) {
            newBuf[j2++] = dbcsCode;
        } else if (dbcsCode < 65536) {
            newBuf[j2++] = dbcsCode >> 8;
            newBuf[j2++] = dbcsCode & 255;
        } else if (dbcsCode < 16777216) {
            newBuf[j2++] = dbcsCode >> 16;
            newBuf[j2++] = dbcsCode >> 8 & 255;
            newBuf[j2++] = dbcsCode & 255;
        } else {
            newBuf[j2++] = dbcsCode >>> 24;
            newBuf[j2++] = dbcsCode >>> 16 & 255;
            newBuf[j2++] = dbcsCode >>> 8 & 255;
            newBuf[j2++] = dbcsCode & 255;
        }
    }
    this.seqObj = seqObj;
    this.leadSurrogate = leadSurrogate;
    return newBuf.slice(0, j2);
};
DBCSEncoder.prototype.end = function() {
    if (this.leadSurrogate === -1 && this.seqObj === void 0) {
        return;
    }
    var newBuf = Buffer4.alloc(10);
    var j2 = 0;
    if (this.seqObj) {
        var dbcsCode = this.seqObj[DEF_CHAR];
        if (dbcsCode !== void 0) {
            if (dbcsCode < 256) {
                newBuf[j2++] = dbcsCode;
            } else {
                newBuf[j2++] = dbcsCode >> 8;
                newBuf[j2++] = dbcsCode & 255;
            }
        } else {}
        this.seqObj = void 0;
    }
    if (this.leadSurrogate !== -1) {
        newBuf[j2++] = this.defaultCharSingleByte;
        this.leadSurrogate = -1;
    }
    return newBuf.slice(0, j2);
};
DBCSEncoder.prototype.findIdx = findIdx;
function DBCSDecoder(options2, codec) {
    this.nodeIdx = 0;
    this.prevBytes = [];
    this.decodeTables = codec.decodeTables;
    this.decodeTableSeq = codec.decodeTableSeq;
    this.defaultCharUnicode = codec.defaultCharUnicode;
    this.gb18030 = codec.gb18030;
}
DBCSDecoder.prototype.write = function(buf) {
    var newBuf = Buffer4.alloc(buf.length * 2);
    var nodeIdx = this.nodeIdx;
    var prevBytes = this.prevBytes;
    var prevOffset = this.prevBytes.length;
    var seqStart = -this.prevBytes.length;
    var uCode;
    for(var i2 = 0, j2 = 0; i2 < buf.length; i2++){
        var curByte = i2 >= 0 ? buf[i2] : prevBytes[i2 + prevOffset];
        var uCode = this.decodeTables[nodeIdx][curByte];
        if (uCode >= 0) {} else if (uCode === UNASSIGNED) {
            uCode = this.defaultCharUnicode.charCodeAt(0);
            i2 = seqStart;
        } else if (uCode === GB18030_CODE) {
            if (i2 >= 3) {
                var ptr = (buf[i2 - 3] - 129) * 12600 + (buf[i2 - 2] - 48) * 1260 + (buf[i2 - 1] - 129) * 10 + (curByte - 48);
            } else {
                var ptr = (prevBytes[i2 - 3 + prevOffset] - 129) * 12600 + ((i2 - 2 >= 0 ? buf[i2 - 2] : prevBytes[i2 - 2 + prevOffset]) - 48) * 1260 + ((i2 - 1 >= 0 ? buf[i2 - 1] : prevBytes[i2 - 1 + prevOffset]) - 129) * 10 + (curByte - 48);
            }
            var idx = findIdx(this.gb18030.gbChars, ptr);
            uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
        } else if (uCode <= NODE_START) {
            nodeIdx = NODE_START - uCode;
            continue;
        } else if (uCode <= SEQ_START) {
            var seq2 = this.decodeTableSeq[SEQ_START - uCode];
            for(var k2 = 0; k2 < seq2.length - 1; k2++){
                uCode = seq2[k2];
                newBuf[j2++] = uCode & 255;
                newBuf[j2++] = uCode >> 8;
            }
            uCode = seq2[seq2.length - 1];
        } else {
            throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);
        }
        if (uCode >= 65536) {
            uCode -= 65536;
            var uCodeLead = 55296 | uCode >> 10;
            newBuf[j2++] = uCodeLead & 255;
            newBuf[j2++] = uCodeLead >> 8;
            uCode = 56320 | uCode & 1023;
        }
        newBuf[j2++] = uCode & 255;
        newBuf[j2++] = uCode >> 8;
        nodeIdx = 0;
        seqStart = i2 + 1;
    }
    this.nodeIdx = nodeIdx;
    this.prevBytes = seqStart >= 0 ? Array.prototype.slice.call(buf, seqStart) : prevBytes.slice(seqStart + prevOffset).concat(Array.prototype.slice.call(buf));
    return newBuf.slice(0, j2).toString("ucs2");
};
DBCSDecoder.prototype.end = function() {
    var ret = "";
    while(this.prevBytes.length > 0){
        ret += this.defaultCharUnicode;
        var bytesArr = this.prevBytes.slice(1);
        this.prevBytes = [];
        this.nodeIdx = 0;
        if (bytesArr.length > 0) {
            ret += this.write(bytesArr);
        }
    }
    this.prevBytes = [];
    this.nodeIdx = 0;
    return ret;
};
function findIdx(table, val) {
    if (table[0] > val) {
        return -1;
    }
    var l = 0;
    var r = table.length;
    while(l < r - 1){
        var mid = l + (r - l + 1 >> 1);
        if (table[mid] <= val) {
            l = mid;
        } else {
            r = mid;
        }
    }
    return l;
}

return exports2;
}
