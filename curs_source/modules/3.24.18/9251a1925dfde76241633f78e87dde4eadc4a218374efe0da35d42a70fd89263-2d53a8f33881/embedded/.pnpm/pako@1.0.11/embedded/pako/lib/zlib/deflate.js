import { require_common2 } from "../utils/common.js";
import { require_adler32 } from "./adler32.js";
import { require_crc32 } from "./crc32.js";
import { require_messages } from "./messages.js";
import { require_trees } from "./trees.js";
var __wakaru_require_deflate_cache;
export function require_deflate() {
if (__wakaru_require_deflate_cache) return __wakaru_require_deflate_cache;
var exports2 = {};
__wakaru_require_deflate_cache = exports2;
"use strict";
var utils2 = require_common2();
var trees = require_trees();
var adler32 = require_adler32();
var crc32 = require_crc32();
var msg = require_messages();
var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_BUF_ERROR = -5;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_RLE = 3;
var Z_FIXED = 4;
var Z_DEFAULT_STRATEGY = 0;
var Z_UNKNOWN = 2;
var Z_DEFLATED = 8;
var MAX_MEM_LEVEL = 9;
var MAX_WBITS = 15;
var DEF_MEM_LEVEL = 8;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
function err(strm, errorCode3) {
    strm.msg = msg[errorCode3];
    return errorCode3;
}
function rank(f2) {
    return (f2 << 1) - (f2 > 4 ? 9 : 0);
}
function zero(buf) {
    var len = buf.length;
    while(--len >= 0){
        buf[len] = 0;
    }
}
function flush_pending(strm) {
    var s3 = strm.state;
    var len = s3.pending;
    if (len > strm.avail_out) {
        len = strm.avail_out;
    }
    if (len === 0) {
        return;
    }
    utils2.arraySet(strm.output, s3.pending_buf, s3.pending_out, len, strm.next_out);
    strm.next_out += len;
    s3.pending_out += len;
    strm.total_out += len;
    strm.avail_out -= len;
    s3.pending -= len;
    if (s3.pending === 0) {
        s3.pending_out = 0;
    }
}
function flush_block_only(s3, last) {
    trees._tr_flush_block(s3, s3.block_start >= 0 ? s3.block_start : -1, s3.strstart - s3.block_start, last);
    s3.block_start = s3.strstart;
    flush_pending(s3.strm);
}
function put_byte(s3, b2) {
    s3.pending_buf[s3.pending++] = b2;
}
function putShortMSB(s3, b2) {
    s3.pending_buf[s3.pending++] = b2 >>> 8 & 255;
    s3.pending_buf[s3.pending++] = b2 & 255;
}
function read_buf(strm, buf, start, size) {
    var len = strm.avail_in;
    if (len > size) {
        len = size;
    }
    if (len === 0) {
        return 0;
    }
    strm.avail_in -= len;
    utils2.arraySet(buf, strm.input, strm.next_in, len, start);
    if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
    } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
    }
    strm.next_in += len;
    strm.total_in += len;
    return len;
}
function longest_match(s3, cur_match) {
    var chain_length = s3.max_chain_length;
    var scan2 = s3.strstart;
    var match2;
    var len;
    var best_len = s3.prev_length;
    var nice_match = s3.nice_match;
    var limit = s3.strstart > s3.w_size - MIN_LOOKAHEAD ? s3.strstart - (s3.w_size - MIN_LOOKAHEAD) : 0;
    var _win = s3.window;
    var wmask = s3.w_mask;
    var prev = s3.prev;
    var strend = s3.strstart + MAX_MATCH;
    var scan_end1 = _win[scan2 + best_len - 1];
    var scan_end = _win[scan2 + best_len];
    if (s3.prev_length >= s3.good_match) {
        chain_length >>= 2;
    }
    if (nice_match > s3.lookahead) {
        nice_match = s3.lookahead;
    }
    do {
        match2 = cur_match;
        if (_win[match2 + best_len] !== scan_end || _win[match2 + best_len - 1] !== scan_end1 || _win[match2] !== _win[scan2] || _win[++match2] !== _win[scan2 + 1]) {
            continue;
        }
        scan2 += 2;
        match2++;
        do {}while (_win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && _win[++scan2] === _win[++match2] && scan2 < strend)
        len = MAX_MATCH - (strend - scan2);
        scan2 = strend - MAX_MATCH;
        if (len > best_len) {
            s3.match_start = cur_match;
            best_len = len;
            if (len >= nice_match) {
                break;
            }
            scan_end1 = _win[scan2 + best_len - 1];
            scan_end = _win[scan2 + best_len];
        }
    }while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0)
    if (best_len <= s3.lookahead) {
        return best_len;
    }
    return s3.lookahead;
}
function fill_window(s3) {
    var _w_size = s3.w_size;
    var p2, n, m2, more, str3;
    do {
        more = s3.window_size - s3.lookahead - s3.strstart;
        if (s3.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            utils2.arraySet(s3.window, s3.window, _w_size, _w_size, 0);
            s3.match_start -= _w_size;
            s3.strstart -= _w_size;
            s3.block_start -= _w_size;
            n = s3.hash_size;
            p2 = n;
            do {
                m2 = s3.head[--p2];
                s3.head[p2] = m2 >= _w_size ? m2 - _w_size : 0;
            }while (--n)
            n = _w_size;
            p2 = n;
            do {
                m2 = s3.prev[--p2];
                s3.prev[p2] = m2 >= _w_size ? m2 - _w_size : 0;
            }while (--n)
            more += _w_size;
        }
        if (s3.strm.avail_in === 0) {
            break;
        }
        n = read_buf(s3.strm, s3.window, s3.strstart + s3.lookahead, more);
        s3.lookahead += n;
        if (s3.lookahead + s3.insert >= MIN_MATCH) {
            str3 = s3.strstart - s3.insert;
            s3.ins_h = s3.window[str3];
            s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[str3 + 1]) & s3.hash_mask;
            while(s3.insert){
                s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[str3 + MIN_MATCH - 1]) & s3.hash_mask;
                s3.prev[str3 & s3.w_mask] = s3.head[s3.ins_h];
                s3.head[s3.ins_h] = str3;
                str3++;
                s3.insert--;
                if (s3.lookahead + s3.insert < MIN_MATCH) {
                    break;
                }
            }
        }
    }while (s3.lookahead < MIN_LOOKAHEAD && s3.strm.avail_in !== 0)
}
function deflate_stored(s3, flush) {
    var max_block_size = 65535;
    if (max_block_size > s3.pending_buf_size - 5) {
        max_block_size = s3.pending_buf_size - 5;
    }
    for(;;){
        if (s3.lookahead <= 1) {
            fill_window(s3);
            if (s3.lookahead === 0 && flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
            }
            if (s3.lookahead === 0) {
                break;
            }
        }
        s3.strstart += s3.lookahead;
        s3.lookahead = 0;
        var max_start = s3.block_start + max_block_size;
        if (s3.strstart === 0 || s3.strstart >= max_start) {
            s3.lookahead = s3.strstart - max_start;
            s3.strstart = max_start;
            flush_block_only(s3, false);
            if (s3.strm.avail_out === 0) {
                return BS_NEED_MORE;
            }
        }
        if (s3.strstart - s3.block_start >= s3.w_size - MIN_LOOKAHEAD) {
            flush_block_only(s3, false);
            if (s3.strm.avail_out === 0) {
                return BS_NEED_MORE;
            }
        }
    }
    s3.insert = 0;
    if (flush === Z_FINISH) {
        flush_block_only(s3, true);
        if (s3.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
    }
    if (s3.strstart > s3.block_start) {
        flush_block_only(s3, false);
        if (s3.strm.avail_out === 0) {
            return BS_NEED_MORE;
        }
    }
    return BS_NEED_MORE;
}
function deflate_fast(s3, flush) {
    var hash_head;
    var bflush;
    for(;;){
        if (s3.lookahead < MIN_LOOKAHEAD) {
            fill_window(s3);
            if (s3.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
            }
            if (s3.lookahead === 0) {
                break;
            }
        }
        hash_head = 0;
        if (s3.lookahead >= MIN_MATCH) {
            s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[s3.strstart + MIN_MATCH - 1]) & s3.hash_mask;
            hash_head = s3.prev[s3.strstart & s3.w_mask] = s3.head[s3.ins_h];
            s3.head[s3.ins_h] = s3.strstart;
        }
        if (hash_head !== 0 && s3.strstart - hash_head <= s3.w_size - MIN_LOOKAHEAD) {
            s3.match_length = longest_match(s3, hash_head);
        }
        if (s3.match_length >= MIN_MATCH) {
            bflush = trees._tr_tally(s3, s3.strstart - s3.match_start, s3.match_length - MIN_MATCH);
            s3.lookahead -= s3.match_length;
            if (s3.match_length <= s3.max_lazy_match && s3.lookahead >= MIN_MATCH) {
                s3.match_length--;
                do {
                    s3.strstart++;
                    s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[s3.strstart + MIN_MATCH - 1]) & s3.hash_mask;
                    hash_head = s3.prev[s3.strstart & s3.w_mask] = s3.head[s3.ins_h];
                    s3.head[s3.ins_h] = s3.strstart;
                }while (--s3.match_length !== 0)
                s3.strstart++;
            } else {
                s3.strstart += s3.match_length;
                s3.match_length = 0;
                s3.ins_h = s3.window[s3.strstart];
                s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[s3.strstart + 1]) & s3.hash_mask;
            }
        } else {
            bflush = trees._tr_tally(s3, 0, s3.window[s3.strstart]);
            s3.lookahead--;
            s3.strstart++;
        }
        if (bflush) {
            flush_block_only(s3, false);
            if (s3.strm.avail_out === 0) {
                return BS_NEED_MORE;
            }
        }
    }
    s3.insert = s3.strstart < MIN_MATCH - 1 ? s3.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
        flush_block_only(s3, true);
        if (s3.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
    }
    if (s3.last_lit) {
        flush_block_only(s3, false);
        if (s3.strm.avail_out === 0) {
            return BS_NEED_MORE;
        }
    }
    return BS_BLOCK_DONE;
}
function deflate_slow(s3, flush) {
    var hash_head;
    var bflush;
    var max_insert;
    for(;;){
        if (s3.lookahead < MIN_LOOKAHEAD) {
            fill_window(s3);
            if (s3.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
            }
            if (s3.lookahead === 0) {
                break;
            }
        }
        hash_head = 0;
        if (s3.lookahead >= MIN_MATCH) {
            s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[s3.strstart + MIN_MATCH - 1]) & s3.hash_mask;
            hash_head = s3.prev[s3.strstart & s3.w_mask] = s3.head[s3.ins_h];
            s3.head[s3.ins_h] = s3.strstart;
        }
        s3.prev_length = s3.match_length;
        s3.prev_match = s3.match_start;
        s3.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s3.prev_length < s3.max_lazy_match && s3.strstart - hash_head <= s3.w_size - MIN_LOOKAHEAD) {
            s3.match_length = longest_match(s3, hash_head);
            if (s3.match_length <= 5 && (s3.strategy === Z_FILTERED || s3.match_length === MIN_MATCH && s3.strstart - s3.match_start > 4096)) {
                s3.match_length = MIN_MATCH - 1;
            }
        }
        if (s3.prev_length >= MIN_MATCH && s3.match_length <= s3.prev_length) {
            max_insert = s3.strstart + s3.lookahead - MIN_MATCH;
            bflush = trees._tr_tally(s3, s3.strstart - 1 - s3.prev_match, s3.prev_length - MIN_MATCH);
            s3.lookahead -= s3.prev_length - 1;
            s3.prev_length -= 2;
            do {
                if (++s3.strstart <= max_insert) {
                    s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[s3.strstart + MIN_MATCH - 1]) & s3.hash_mask;
                    hash_head = s3.prev[s3.strstart & s3.w_mask] = s3.head[s3.ins_h];
                    s3.head[s3.ins_h] = s3.strstart;
                }
            }while (--s3.prev_length !== 0)
            s3.match_available = 0;
            s3.match_length = MIN_MATCH - 1;
            s3.strstart++;
            if (bflush) {
                flush_block_only(s3, false);
                if (s3.strm.avail_out === 0) {
                    return BS_NEED_MORE;
                }
            }
        } else if (s3.match_available) {
            bflush = trees._tr_tally(s3, 0, s3.window[s3.strstart - 1]);
            if (bflush) {
                flush_block_only(s3, false);
            }
            s3.strstart++;
            s3.lookahead--;
            if (s3.strm.avail_out === 0) {
                return BS_NEED_MORE;
            }
        } else {
            s3.match_available = 1;
            s3.strstart++;
            s3.lookahead--;
        }
    }
    if (s3.match_available) {
        bflush = trees._tr_tally(s3, 0, s3.window[s3.strstart - 1]);
        s3.match_available = 0;
    }
    s3.insert = s3.strstart < MIN_MATCH - 1 ? s3.strstart : MIN_MATCH - 1;
    if (flush === Z_FINISH) {
        flush_block_only(s3, true);
        if (s3.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
    }
    if (s3.last_lit) {
        flush_block_only(s3, false);
        if (s3.strm.avail_out === 0) {
            return BS_NEED_MORE;
        }
    }
    return BS_BLOCK_DONE;
}
function deflate_rle(s3, flush) {
    var bflush;
    var prev;
    var scan2, strend;
    var _win = s3.window;
    for(;;){
        if (s3.lookahead <= MAX_MATCH) {
            fill_window(s3);
            if (s3.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
            }
            if (s3.lookahead === 0) {
                break;
            }
        }
        s3.match_length = 0;
        if (s3.lookahead >= MIN_MATCH && s3.strstart > 0) {
            scan2 = s3.strstart - 1;
            prev = _win[scan2];
            if (prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2]) {
                strend = s3.strstart + MAX_MATCH;
                do {}while (prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2] && prev === _win[++scan2] && scan2 < strend)
                s3.match_length = MAX_MATCH - (strend - scan2);
                if (s3.match_length > s3.lookahead) {
                    s3.match_length = s3.lookahead;
                }
            }
        }
        if (s3.match_length >= MIN_MATCH) {
            bflush = trees._tr_tally(s3, 1, s3.match_length - MIN_MATCH);
            s3.lookahead -= s3.match_length;
            s3.strstart += s3.match_length;
            s3.match_length = 0;
        } else {
            bflush = trees._tr_tally(s3, 0, s3.window[s3.strstart]);
            s3.lookahead--;
            s3.strstart++;
        }
        if (bflush) {
            flush_block_only(s3, false);
            if (s3.strm.avail_out === 0) {
                return BS_NEED_MORE;
            }
        }
    }
    s3.insert = 0;
    if (flush === Z_FINISH) {
        flush_block_only(s3, true);
        if (s3.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
    }
    if (s3.last_lit) {
        flush_block_only(s3, false);
        if (s3.strm.avail_out === 0) {
            return BS_NEED_MORE;
        }
    }
    return BS_BLOCK_DONE;
}
function deflate_huff(s3, flush) {
    var bflush;
    for(;;){
        if (s3.lookahead === 0) {
            fill_window(s3);
            if (s3.lookahead === 0) {
                if (flush === Z_NO_FLUSH) {
                    return BS_NEED_MORE;
                }
                break;
            }
        }
        s3.match_length = 0;
        bflush = trees._tr_tally(s3, 0, s3.window[s3.strstart]);
        s3.lookahead--;
        s3.strstart++;
        if (bflush) {
            flush_block_only(s3, false);
            if (s3.strm.avail_out === 0) {
                return BS_NEED_MORE;
            }
        }
    }
    s3.insert = 0;
    if (flush === Z_FINISH) {
        flush_block_only(s3, true);
        if (s3.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
    }
    if (s3.last_lit) {
        flush_block_only(s3, false);
        if (s3.strm.avail_out === 0) {
            return BS_NEED_MORE;
        }
    }
    return BS_BLOCK_DONE;
}
function Config(good_length, max_lazy, nice_length, max_chain, func) {
    this.good_length = good_length;
    this.max_lazy = max_lazy;
    this.nice_length = nice_length;
    this.max_chain = max_chain;
    this.func = func;
}
var configuration_table;
configuration_table = [
    new Config(0, 0, 0, 0, deflate_stored),
    new Config(4, 4, 8, 4, deflate_fast),
    new Config(4, 5, 16, 8, deflate_fast),
    new Config(4, 6, 32, 32, deflate_fast),
    new Config(4, 4, 16, 16, deflate_slow),
    new Config(8, 16, 32, 32, deflate_slow),
    new Config(8, 16, 128, 128, deflate_slow),
    new Config(8, 32, 128, 256, deflate_slow),
    new Config(32, 128, 258, 1024, deflate_slow),
    new Config(32, 258, 258, 4096, deflate_slow)
];
function lm_init(s3) {
    s3.window_size = 2 * s3.w_size;
    zero(s3.head);
    s3.max_lazy_match = configuration_table[s3.level].max_lazy;
    s3.good_match = configuration_table[s3.level].good_length;
    s3.nice_match = configuration_table[s3.level].nice_length;
    s3.max_chain_length = configuration_table[s3.level].max_chain;
    s3.strstart = 0;
    s3.block_start = 0;
    s3.lookahead = 0;
    s3.insert = 0;
    s3.match_length = s3.prev_length = MIN_MATCH - 1;
    s3.match_available = 0;
    s3.ins_h = 0;
}
function DeflateState() {
    this.strm = null;
    this.status = 0;
    this.pending_buf = null;
    this.pending_buf_size = 0;
    this.pending_out = 0;
    this.pending = 0;
    this.wrap = 0;
    this.gzhead = null;
    this.gzindex = 0;
    this.method = Z_DEFLATED;
    this.last_flush = -1;
    this.w_size = 0;
    this.w_bits = 0;
    this.w_mask = 0;
    this.window = null;
    this.window_size = 0;
    this.prev = null;
    this.head = null;
    this.ins_h = 0;
    this.hash_size = 0;
    this.hash_bits = 0;
    this.hash_mask = 0;
    this.hash_shift = 0;
    this.block_start = 0;
    this.match_length = 0;
    this.prev_match = 0;
    this.match_available = 0;
    this.strstart = 0;
    this.match_start = 0;
    this.lookahead = 0;
    this.prev_length = 0;
    this.max_chain_length = 0;
    this.max_lazy_match = 0;
    this.level = 0;
    this.strategy = 0;
    this.good_match = 0;
    this.nice_match = 0;
    this.dyn_ltree = new utils2.Buf16(HEAP_SIZE * 2);
    this.dyn_dtree = new utils2.Buf16((2 * D_CODES + 1) * 2);
    this.bl_tree = new utils2.Buf16((2 * BL_CODES + 1) * 2);
    zero(this.dyn_ltree);
    zero(this.dyn_dtree);
    zero(this.bl_tree);
    this.l_desc = null;
    this.d_desc = null;
    this.bl_desc = null;
    this.bl_count = new utils2.Buf16(MAX_BITS + 1);
    this.heap = new utils2.Buf16(2 * L_CODES + 1);
    zero(this.heap);
    this.heap_len = 0;
    this.heap_max = 0;
    this.depth = new utils2.Buf16(2 * L_CODES + 1);
    zero(this.depth);
    this.l_buf = 0;
    this.lit_bufsize = 0;
    this.last_lit = 0;
    this.d_buf = 0;
    this.opt_len = 0;
    this.static_len = 0;
    this.matches = 0;
    this.insert = 0;
    this.bi_buf = 0;
    this.bi_valid = 0;
}
function deflateResetKeep(strm) {
    var s3;
    if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
    }
    strm.total_in = strm.total_out = 0;
    strm.data_type = Z_UNKNOWN;
    s3 = strm.state;
    s3.pending = 0;
    s3.pending_out = 0;
    if (s3.wrap < 0) {
        s3.wrap = -s3.wrap;
    }
    s3.status = s3.wrap ? INIT_STATE : BUSY_STATE;
    strm.adler = s3.wrap === 2 ? 0 : 1;
    s3.last_flush = Z_NO_FLUSH;
    trees._tr_init(s3);
    return Z_OK;
}
function deflateReset(strm) {
    var ret = deflateResetKeep(strm);
    if (ret === Z_OK) {
        lm_init(strm.state);
    }
    return ret;
}
function deflateSetHeader(strm, head) {
    if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
    }
    if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
    }
    strm.state.gzhead = head;
    return Z_OK;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
    if (!strm) {
        return Z_STREAM_ERROR;
    }
    var wrap2 = 1;
    if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
    }
    if (windowBits < 0) {
        wrap2 = 0;
        windowBits = -windowBits;
    } else if (windowBits > 15) {
        wrap2 = 2;
        windowBits -= 16;
    }
    if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
    }
    if (windowBits === 8) {
        windowBits = 9;
    }
    var s3 = new DeflateState();
    strm.state = s3;
    s3.strm = strm;
    s3.wrap = wrap2;
    s3.gzhead = null;
    s3.w_bits = windowBits;
    s3.w_size = 1 << s3.w_bits;
    s3.w_mask = s3.w_size - 1;
    s3.hash_bits = memLevel + 7;
    s3.hash_size = 1 << s3.hash_bits;
    s3.hash_mask = s3.hash_size - 1;
    s3.hash_shift = ~~((s3.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
    s3.window = new utils2.Buf8(s3.w_size * 2);
    s3.head = new utils2.Buf16(s3.hash_size);
    s3.prev = new utils2.Buf16(s3.w_size);
    s3.lit_bufsize = 1 << memLevel + 6;
    s3.pending_buf_size = s3.lit_bufsize * 4;
    s3.pending_buf = new utils2.Buf8(s3.pending_buf_size);
    s3.d_buf = 1 * s3.lit_bufsize;
    s3.l_buf = (1 + 2) * s3.lit_bufsize;
    s3.level = level;
    s3.strategy = strategy;
    s3.method = method;
    return deflateReset(strm);
}
function deflateInit(strm, level) {
    return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
}
function deflate(strm, flush) {
    var old_flush, s3;
    var beg, val;
    if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
    }
    s3 = strm.state;
    if (!strm.output || !strm.input && strm.avail_in !== 0 || s3.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
    }
    s3.strm = strm;
    old_flush = s3.last_flush;
    s3.last_flush = flush;
    if (s3.status === INIT_STATE) {
        if (s3.wrap === 2) {
            strm.adler = 0;
            put_byte(s3, 31);
            put_byte(s3, 139);
            put_byte(s3, 8);
            if (!s3.gzhead) {
                put_byte(s3, 0);
                put_byte(s3, 0);
                put_byte(s3, 0);
                put_byte(s3, 0);
                put_byte(s3, 0);
                put_byte(s3, s3.level === 9 ? 2 : s3.strategy >= Z_HUFFMAN_ONLY || s3.level < 2 ? 4 : 0);
                put_byte(s3, OS_CODE);
                s3.status = BUSY_STATE;
            } else {
                put_byte(s3, (s3.gzhead.text ? 1 : 0) + (s3.gzhead.hcrc ? 2 : 0) + (!s3.gzhead.extra ? 0 : 4) + (!s3.gzhead.name ? 0 : 8) + (!s3.gzhead.comment ? 0 : 16));
                put_byte(s3, s3.gzhead.time & 255);
                put_byte(s3, s3.gzhead.time >> 8 & 255);
                put_byte(s3, s3.gzhead.time >> 16 & 255);
                put_byte(s3, s3.gzhead.time >> 24 & 255);
                put_byte(s3, s3.level === 9 ? 2 : s3.strategy >= Z_HUFFMAN_ONLY || s3.level < 2 ? 4 : 0);
                put_byte(s3, s3.gzhead.os & 255);
                if (s3.gzhead.extra && s3.gzhead.extra.length) {
                    put_byte(s3, s3.gzhead.extra.length & 255);
                    put_byte(s3, s3.gzhead.extra.length >> 8 & 255);
                }
                if (s3.gzhead.hcrc) {
                    strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending, 0);
                }
                s3.gzindex = 0;
                s3.status = EXTRA_STATE;
            }
        } else {
            var header = Z_DEFLATED + (s3.w_bits - 8 << 4) << 8;
            var level_flags = -1;
            if (s3.strategy >= Z_HUFFMAN_ONLY || s3.level < 2) {
                level_flags = 0;
            } else if (s3.level < 6) {
                level_flags = 1;
            } else if (s3.level === 6) {
                level_flags = 2;
            } else {
                level_flags = 3;
            }
            header |= level_flags << 6;
            if (s3.strstart !== 0) {
                header |= PRESET_DICT;
            }
            header += 31 - header % 31;
            s3.status = BUSY_STATE;
            putShortMSB(s3, header);
            if (s3.strstart !== 0) {
                putShortMSB(s3, strm.adler >>> 16);
                putShortMSB(s3, strm.adler & 65535);
            }
            strm.adler = 1;
        }
    }
    if (s3.status === EXTRA_STATE) {
        if (s3.gzhead.extra) {
            beg = s3.pending;
            while(s3.gzindex < (s3.gzhead.extra.length & 65535)){
                if (s3.pending === s3.pending_buf_size) {
                    if (s3.gzhead.hcrc && s3.pending > beg) {
                        strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending - beg, beg);
                    }
                    flush_pending(strm);
                    beg = s3.pending;
                    if (s3.pending === s3.pending_buf_size) {
                        break;
                    }
                }
                put_byte(s3, s3.gzhead.extra[s3.gzindex] & 255);
                s3.gzindex++;
            }
            if (s3.gzhead.hcrc && s3.pending > beg) {
                strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending - beg, beg);
            }
            if (s3.gzindex === s3.gzhead.extra.length) {
                s3.gzindex = 0;
                s3.status = NAME_STATE;
            }
        } else {
            s3.status = NAME_STATE;
        }
    }
    if (s3.status === NAME_STATE) {
        if (s3.gzhead.name) {
            beg = s3.pending;
            do {
                if (s3.pending === s3.pending_buf_size) {
                    if (s3.gzhead.hcrc && s3.pending > beg) {
                        strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending - beg, beg);
                    }
                    flush_pending(strm);
                    beg = s3.pending;
                    if (s3.pending === s3.pending_buf_size) {
                        val = 1;
                        break;
                    }
                }
                if (s3.gzindex < s3.gzhead.name.length) {
                    val = s3.gzhead.name.charCodeAt(s3.gzindex++) & 255;
                } else {
                    val = 0;
                }
                put_byte(s3, val);
            }while (val !== 0)
            if (s3.gzhead.hcrc && s3.pending > beg) {
                strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending - beg, beg);
            }
            if (val === 0) {
                s3.gzindex = 0;
                s3.status = COMMENT_STATE;
            }
        } else {
            s3.status = COMMENT_STATE;
        }
    }
    if (s3.status === COMMENT_STATE) {
        if (s3.gzhead.comment) {
            beg = s3.pending;
            do {
                if (s3.pending === s3.pending_buf_size) {
                    if (s3.gzhead.hcrc && s3.pending > beg) {
                        strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending - beg, beg);
                    }
                    flush_pending(strm);
                    beg = s3.pending;
                    if (s3.pending === s3.pending_buf_size) {
                        val = 1;
                        break;
                    }
                }
                if (s3.gzindex < s3.gzhead.comment.length) {
                    val = s3.gzhead.comment.charCodeAt(s3.gzindex++) & 255;
                } else {
                    val = 0;
                }
                put_byte(s3, val);
            }while (val !== 0)
            if (s3.gzhead.hcrc && s3.pending > beg) {
                strm.adler = crc32(strm.adler, s3.pending_buf, s3.pending - beg, beg);
            }
            if (val === 0) {
                s3.status = HCRC_STATE;
            }
        } else {
            s3.status = HCRC_STATE;
        }
    }
    if (s3.status === HCRC_STATE) {
        if (s3.gzhead.hcrc) {
            if (s3.pending + 2 > s3.pending_buf_size) {
                flush_pending(strm);
            }
            if (s3.pending + 2 <= s3.pending_buf_size) {
                put_byte(s3, strm.adler & 255);
                put_byte(s3, strm.adler >> 8 & 255);
                strm.adler = 0;
                s3.status = BUSY_STATE;
            }
        } else {
            s3.status = BUSY_STATE;
        }
    }
    if (s3.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
            s3.last_flush = -1;
            return Z_OK;
        }
    } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
    }
    if (s3.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
    }
    if (strm.avail_in !== 0 || s3.lookahead !== 0 || flush !== Z_NO_FLUSH && s3.status !== FINISH_STATE) {
        var bstate = s3.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s3, flush) : s3.strategy === Z_RLE ? deflate_rle(s3, flush) : configuration_table[s3.level].func(s3, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
            s3.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) {
                s3.last_flush = -1;
            }
            return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) {
                trees._tr_align(s3);
            } else if (flush !== Z_BLOCK) {
                trees._tr_stored_block(s3, 0, 0, false);
                if (flush === Z_FULL_FLUSH) {
                    zero(s3.head);
                    if (s3.lookahead === 0) {
                        s3.strstart = 0;
                        s3.block_start = 0;
                        s3.insert = 0;
                    }
                }
            }
            flush_pending(strm);
            if (strm.avail_out === 0) {
                s3.last_flush = -1;
                return Z_OK;
            }
        }
    }
    if (flush !== Z_FINISH) {
        return Z_OK;
    }
    if (s3.wrap <= 0) {
        return Z_STREAM_END;
    }
    if (s3.wrap === 2) {
        put_byte(s3, strm.adler & 255);
        put_byte(s3, strm.adler >> 8 & 255);
        put_byte(s3, strm.adler >> 16 & 255);
        put_byte(s3, strm.adler >> 24 & 255);
        put_byte(s3, strm.total_in & 255);
        put_byte(s3, strm.total_in >> 8 & 255);
        put_byte(s3, strm.total_in >> 16 & 255);
        put_byte(s3, strm.total_in >> 24 & 255);
    } else {
        putShortMSB(s3, strm.adler >>> 16);
        putShortMSB(s3, strm.adler & 65535);
    }
    flush_pending(strm);
    if (s3.wrap > 0) {
        s3.wrap = -s3.wrap;
    }
    return s3.pending !== 0 ? Z_OK : Z_STREAM_END;
}
function deflateEnd(strm) {
    var status;
    if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
    }
    status = strm.state.status;
    if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
    }
    strm.state = null;
    return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}
function deflateSetDictionary(strm, dictionary) {
    var dictLength = dictionary.length;
    var s3;
    var str3, n;
    var wrap2;
    var avail;
    var next;
    var input;
    var tmpDict;
    if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
    }
    s3 = strm.state;
    wrap2 = s3.wrap;
    if (wrap2 === 2 || wrap2 === 1 && s3.status !== INIT_STATE || s3.lookahead) {
        return Z_STREAM_ERROR;
    }
    if (wrap2 === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
    }
    s3.wrap = 0;
    if (dictLength >= s3.w_size) {
        if (wrap2 === 0) {
            zero(s3.head);
            s3.strstart = 0;
            s3.block_start = 0;
            s3.insert = 0;
        }
        tmpDict = new utils2.Buf8(s3.w_size);
        utils2.arraySet(tmpDict, dictionary, dictLength - s3.w_size, s3.w_size, 0);
        dictionary = tmpDict;
        dictLength = s3.w_size;
    }
    avail = strm.avail_in;
    next = strm.next_in;
    input = strm.input;
    strm.avail_in = dictLength;
    strm.next_in = 0;
    strm.input = dictionary;
    fill_window(s3);
    while(s3.lookahead >= MIN_MATCH){
        str3 = s3.strstart;
        n = s3.lookahead - (MIN_MATCH - 1);
        do {
            s3.ins_h = (s3.ins_h << s3.hash_shift ^ s3.window[str3 + MIN_MATCH - 1]) & s3.hash_mask;
            s3.prev[str3 & s3.w_mask] = s3.head[s3.ins_h];
            s3.head[s3.ins_h] = str3;
            str3++;
        }while (--n)
        s3.strstart = str3;
        s3.lookahead = MIN_MATCH - 1;
        fill_window(s3);
    }
    s3.strstart += s3.lookahead;
    s3.block_start = s3.strstart;
    s3.insert = s3.lookahead;
    s3.lookahead = 0;
    s3.match_length = s3.prev_length = MIN_MATCH - 1;
    s3.match_available = 0;
    strm.next_in = next;
    strm.input = input;
    strm.avail_in = avail;
    s3.wrap = wrap2;
    return Z_OK;
}
exports2.deflateInit = deflateInit;
exports2.deflateInit2 = deflateInit2;
exports2.deflateReset = deflateReset;
exports2.deflateResetKeep = deflateResetKeep;
exports2.deflateSetHeader = deflateSetHeader;
exports2.deflate = deflate;
exports2.deflateEnd = deflateEnd;
exports2.deflateSetDictionary = deflateSetDictionary;
exports2.deflateInfo = "pako deflate (from Nodeca project)";

return exports2;
}
