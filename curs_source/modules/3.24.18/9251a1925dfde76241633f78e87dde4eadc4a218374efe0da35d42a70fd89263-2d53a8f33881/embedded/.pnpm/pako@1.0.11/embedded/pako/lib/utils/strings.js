import { require_common2 } from "./common.js";
var __wakaru_require_strings_cache;
export function require_strings() {
if (__wakaru_require_strings_cache) return __wakaru_require_strings_cache;
var exports2 = {};
__wakaru_require_strings_cache = exports2;
"use strict";
var utils2 = require_common2();
var STR_APPLY_OK = true;
var STR_APPLY_UIA_OK = true;
try {
    String.fromCharCode.apply(null, [
        0
    ]);
} catch (__) {
    STR_APPLY_OK = false;
}
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (__) {
    STR_APPLY_UIA_OK = false;
}
var _utf8len = new utils2.Buf8(256);
for(q2 = 0; q2 < 256; q2++){
    _utf8len[q2] = q2 >= 252 ? 6 : q2 >= 248 ? 5 : q2 >= 240 ? 4 : q2 >= 224 ? 3 : q2 >= 192 ? 2 : 1;
}
var q2;
_utf8len[254] = _utf8len[254] = 1;
exports2.string2buf = function(str3) {
    var buf, c, c2, m_pos, i, str_len = str3.length, buf_len = 0;
    for(m_pos = 0; m_pos < str_len; m_pos++){
        c = str3.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
            c2 = str3.charCodeAt(m_pos + 1);
            if ((c2 & 64512) === 56320) {
                c = 65536 + (c - 55296 << 10) + (c2 - 56320);
                m_pos++;
            }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
    }
    buf = new utils2.Buf8(buf_len);
    for(i = 0, m_pos = 0; i < buf_len; m_pos++){
        c = str3.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
            c2 = str3.charCodeAt(m_pos + 1);
            if ((c2 & 64512) === 56320) {
                c = 65536 + (c - 55296 << 10) + (c2 - 56320);
                m_pos++;
            }
        }
        if (c < 128) {
            buf[i++] = c;
        } else if (c < 2048) {
            buf[i++] = 192 | c >>> 6;
            buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
            buf[i++] = 224 | c >>> 12;
            buf[i++] = 128 | c >>> 6 & 63;
            buf[i++] = 128 | c & 63;
        } else {
            buf[i++] = 240 | c >>> 18;
            buf[i++] = 128 | c >>> 12 & 63;
            buf[i++] = 128 | c >>> 6 & 63;
            buf[i++] = 128 | c & 63;
        }
    }
    return buf;
};
function buf2binstring(buf, len) {
    if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
            return String.fromCharCode.apply(null, utils2.shrinkBuf(buf, len));
        }
    }
    var result = "";
    for(var i = 0; i < len; i++){
        result += String.fromCharCode(buf[i]);
    }
    return result;
}
exports2.buf2binstring = function(buf) {
    return buf2binstring(buf, buf.length);
};
exports2.binstring2buf = function(str3) {
    var buf = new utils2.Buf8(str3.length);
    for(var i = 0, len = buf.length; i < len; i++){
        buf[i] = str3.charCodeAt(i);
    }
    return buf;
};
exports2.buf2string = function(buf, max) {
    var i, out, c, c_len;
    var len = max || buf.length;
    var utf16buf = new Array(len * 2);
    for(out = 0, i = 0; i < len;){
        c = buf[i++];
        if (c < 128) {
            utf16buf[out++] = c;
            continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
            utf16buf[out++] = 65533;
            i += c_len - 1;
            continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while(c_len > 1 && i < len){
            c = c << 6 | buf[i++] & 63;
            c_len--;
        }
        if (c_len > 1) {
            utf16buf[out++] = 65533;
            continue;
        }
        if (c < 65536) {
            utf16buf[out++] = c;
        } else {
            c -= 65536;
            utf16buf[out++] = 55296 | c >> 10 & 1023;
            utf16buf[out++] = 56320 | c & 1023;
        }
    }
    return buf2binstring(utf16buf, out);
};
exports2.utf8border = function(buf, max) {
    var pos;
    max = max || buf.length;
    if (max > buf.length) {
        max = buf.length;
    }
    pos = max - 1;
    while(pos >= 0 && (buf[pos] & 192) === 128){
        pos--;
    }
    if (pos < 0) {
        return max;
    }
    if (pos === 0) {
        return max;
    }
    return pos + _utf8len[buf[pos]] > max ? pos : max;
};

return exports2;
}
