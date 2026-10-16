import { require_common2 } from "../utils/common.js";
var __wakaru_require_trees_cache;
export function require_trees() {
if (__wakaru_require_trees_cache) return __wakaru_require_trees_cache;
var exports2 = {};
__wakaru_require_trees_cache = exports2;
"use strict";
var utils2 = require_common2();
var Z_FIXED = 4;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN = 2;
function zero(buf) {
    var len = buf.length;
    while(--len >= 0){
        buf[len] = 0;
    }
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = ([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
]);
var extra_dbits = ([
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
]);
var extra_blbits = ([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
]);
var bl_order = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
];
var DIST_CODE_LEN = 512;
var static_ltree = new Array((L_CODES + 2) * 2);
zero(static_ltree);
var static_dtree = new Array(D_CODES * 2);
zero(static_dtree);
var _dist_code = new Array(DIST_CODE_LEN);
zero(_dist_code);
var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
zero(_length_code);
var base_length = new Array(LENGTH_CODES);
zero(base_length);
var base_dist = new Array(D_CODES);
zero(base_dist);
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
    this.static_tree = static_tree;
    this.extra_bits = extra_bits;
    this.extra_base = extra_base;
    this.elems = elems;
    this.max_length = max_length;
    this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
    this.dyn_tree = dyn_tree;
    this.max_code = 0;
    this.stat_desc = stat_desc;
}
function d_code(dist) {
    return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
function put_short(s3, w2) {
    s3.pending_buf[s3.pending++] = w2 & 255;
    s3.pending_buf[s3.pending++] = w2 >>> 8 & 255;
}
function send_bits(s3, value, length) {
    if (s3.bi_valid > Buf_size - length) {
        s3.bi_buf |= value << s3.bi_valid & 65535;
        put_short(s3, s3.bi_buf);
        s3.bi_buf = value >> Buf_size - s3.bi_valid;
        s3.bi_valid += length - Buf_size;
    } else {
        s3.bi_buf |= value << s3.bi_valid & 65535;
        s3.bi_valid += length;
    }
}
function send_code(s3, c, tree) {
    send_bits(s3, tree[c * 2], tree[c * 2 + 1]);
}
function bi_reverse(code, len) {
    var res = 0;
    do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
    }while (--len > 0)
    return res >>> 1;
}
function bi_flush(s3) {
    if (s3.bi_valid === 16) {
        put_short(s3, s3.bi_buf);
        s3.bi_buf = 0;
        s3.bi_valid = 0;
    } else if (s3.bi_valid >= 8) {
        s3.pending_buf[s3.pending++] = s3.bi_buf & 255;
        s3.bi_buf >>= 8;
        s3.bi_valid -= 8;
    }
}
function gen_bitlen(s3, desc) {
    var tree = desc.dyn_tree;
    var max_code = desc.max_code;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var extra = desc.stat_desc.extra_bits;
    var base = desc.stat_desc.extra_base;
    var max_length = desc.stat_desc.max_length;
    var h;
    var n, m2;
    var bits;
    var xbits;
    var f2;
    var overflow = 0;
    for(bits = 0; bits <= MAX_BITS; bits++){
        s3.bl_count[bits] = 0;
    }
    tree[s3.heap[s3.heap_max] * 2 + 1] = 0;
    for(h = s3.heap_max + 1; h < HEAP_SIZE; h++){
        n = s3.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
            bits = max_length;
            overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
            continue;
        }
        s3.bl_count[bits]++;
        xbits = 0;
        if (n >= base) {
            xbits = extra[n - base];
        }
        f2 = tree[n * 2];
        s3.opt_len += f2 * (bits + xbits);
        if (has_stree) {
            s3.static_len += f2 * (stree[n * 2 + 1] + xbits);
        }
    }
    if (overflow === 0) {
        return;
    }
    do {
        bits = max_length - 1;
        while(s3.bl_count[bits] === 0){
            bits--;
        }
        s3.bl_count[bits]--;
        s3.bl_count[bits + 1] += 2;
        s3.bl_count[max_length]--;
        overflow -= 2;
    }while (overflow > 0)
    for(bits = max_length; bits !== 0; bits--){
        n = s3.bl_count[bits];
        while(n !== 0){
            m2 = s3.heap[--h];
            if (m2 > max_code) {
                continue;
            }
            if (tree[m2 * 2 + 1] !== bits) {
                s3.opt_len += (bits - tree[m2 * 2 + 1]) * tree[m2 * 2];
                tree[m2 * 2 + 1] = bits;
            }
            n--;
        }
    }
}
function gen_codes(tree, max_code, bl_count) {
    var next_code = new Array(MAX_BITS + 1);
    var code = 0;
    var bits;
    var n;
    for(bits = 1; bits <= MAX_BITS; bits++){
        next_code[bits] = code = code + bl_count[bits - 1] << 1;
    }
    for(n = 0; n <= max_code; n++){
        var len = tree[n * 2 + 1];
        if (len === 0) {
            continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
    }
}
function tr_static_init() {
    var n;
    var bits;
    var length;
    var code;
    var dist;
    var bl_count = new Array(MAX_BITS + 1);
    length = 0;
    for(code = 0; code < LENGTH_CODES - 1; code++){
        base_length[code] = length;
        for(n = 0; n < 1 << extra_lbits[code]; n++){
            _length_code[length++] = code;
        }
    }
    _length_code[length - 1] = code;
    dist = 0;
    for(code = 0; code < 16; code++){
        base_dist[code] = dist;
        for(n = 0; n < 1 << extra_dbits[code]; n++){
            _dist_code[dist++] = code;
        }
    }
    dist >>= 7;
    for(; code < D_CODES; code++){
        base_dist[code] = dist << 7;
        for(n = 0; n < 1 << extra_dbits[code] - 7; n++){
            _dist_code[256 + dist++] = code;
        }
    }
    for(bits = 0; bits <= MAX_BITS; bits++){
        bl_count[bits] = 0;
    }
    n = 0;
    while(n <= 143){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    while(n <= 255){
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
    }
    while(n <= 279){
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
    }
    while(n <= 287){
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
    }
    gen_codes(static_ltree, L_CODES + 1, bl_count);
    for(n = 0; n < D_CODES; n++){
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
    }
    static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
    static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
    static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
}
function init_block(s3) {
    var n;
    for(n = 0; n < L_CODES; n++){
        s3.dyn_ltree[n * 2] = 0;
    }
    for(n = 0; n < D_CODES; n++){
        s3.dyn_dtree[n * 2] = 0;
    }
    for(n = 0; n < BL_CODES; n++){
        s3.bl_tree[n * 2] = 0;
    }
    s3.dyn_ltree[END_BLOCK * 2] = 1;
    s3.opt_len = s3.static_len = 0;
    s3.last_lit = s3.matches = 0;
}
function bi_windup(s3) {
    if (s3.bi_valid > 8) {
        put_short(s3, s3.bi_buf);
    } else if (s3.bi_valid > 0) {
        s3.pending_buf[s3.pending++] = s3.bi_buf;
    }
    s3.bi_buf = 0;
    s3.bi_valid = 0;
}
function copy_block(s3, buf, len, header) {
    bi_windup(s3);
    if (header) {
        put_short(s3, len);
        put_short(s3, ~len);
    }
    utils2.arraySet(s3.pending_buf, s3.window, buf, len, s3.pending);
    s3.pending += len;
}
function smaller(tree, n, m2, depth) {
    var _n2 = n * 2;
    var _m2 = m2 * 2;
    return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m2];
}
function pqdownheap(s3, tree, k2) {
    var v2 = s3.heap[k2];
    var j2 = k2 << 1;
    while(j2 <= s3.heap_len){
        if (j2 < s3.heap_len && smaller(tree, s3.heap[j2 + 1], s3.heap[j2], s3.depth)) {
            j2++;
        }
        if (smaller(tree, v2, s3.heap[j2], s3.depth)) {
            break;
        }
        s3.heap[k2] = s3.heap[j2];
        k2 = j2;
        j2 <<= 1;
    }
    s3.heap[k2] = v2;
}
function compress_block(s3, ltree, dtree) {
    var dist;
    var lc;
    var lx = 0;
    var code;
    var extra;
    if (s3.last_lit !== 0) {
        do {
            dist = s3.pending_buf[s3.d_buf + lx * 2] << 8 | s3.pending_buf[s3.d_buf + lx * 2 + 1];
            lc = s3.pending_buf[s3.l_buf + lx];
            lx++;
            if (dist === 0) {
                send_code(s3, lc, ltree);
            } else {
                code = _length_code[lc];
                send_code(s3, code + LITERALS + 1, ltree);
                extra = extra_lbits[code];
                if (extra !== 0) {
                    lc -= base_length[code];
                    send_bits(s3, lc, extra);
                }
                dist--;
                code = d_code(dist);
                send_code(s3, code, dtree);
                extra = extra_dbits[code];
                if (extra !== 0) {
                    dist -= base_dist[code];
                    send_bits(s3, dist, extra);
                }
            }
        }while (lx < s3.last_lit)
    }
    send_code(s3, END_BLOCK, ltree);
}
function build_tree(s3, desc) {
    var tree = desc.dyn_tree;
    var stree = desc.stat_desc.static_tree;
    var has_stree = desc.stat_desc.has_stree;
    var elems = desc.stat_desc.elems;
    var n, m2;
    var max_code = -1;
    var node;
    s3.heap_len = 0;
    s3.heap_max = HEAP_SIZE;
    for(n = 0; n < elems; n++){
        if (tree[n * 2] !== 0) {
            s3.heap[++s3.heap_len] = max_code = n;
            s3.depth[n] = 0;
        } else {
            tree[n * 2 + 1] = 0;
        }
    }
    while(s3.heap_len < 2){
        node = s3.heap[++s3.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s3.depth[node] = 0;
        s3.opt_len--;
        if (has_stree) {
            s3.static_len -= stree[node * 2 + 1];
        }
    }
    desc.max_code = max_code;
    for(n = s3.heap_len >> 1; n >= 1; n--){
        pqdownheap(s3, tree, n);
    }
    node = elems;
    do {
        n = s3.heap[1];
        s3.heap[1] = s3.heap[s3.heap_len--];
        pqdownheap(s3, tree, 1);
        m2 = s3.heap[1];
        s3.heap[--s3.heap_max] = n;
        s3.heap[--s3.heap_max] = m2;
        tree[node * 2] = tree[n * 2] + tree[m2 * 2];
        s3.depth[node] = (s3.depth[n] >= s3.depth[m2] ? s3.depth[n] : s3.depth[m2]) + 1;
        tree[n * 2 + 1] = tree[m2 * 2 + 1] = node;
        s3.heap[1] = node++;
        pqdownheap(s3, tree, 1);
    }while (s3.heap_len >= 2)
    s3.heap[--s3.heap_max] = s3.heap[1];
    gen_bitlen(s3, desc);
    gen_codes(tree, max_code, s3.bl_count);
}
function scan_tree(s3, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count2 = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    tree[(max_code + 1) * 2 + 1] = 65535;
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count2 < max_count && curlen === nextlen) {
            continue;
        } else if (count2 < min_count) {
            s3.bl_tree[curlen * 2] += count2;
        } else if (curlen !== 0) {
            if (curlen !== prevlen) {
                s3.bl_tree[curlen * 2]++;
            }
            s3.bl_tree[REP_3_6 * 2]++;
        } else if (count2 <= 10) {
            s3.bl_tree[REPZ_3_10 * 2]++;
        } else {
            s3.bl_tree[REPZ_11_138 * 2]++;
        }
        count2 = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
}
function send_tree(s3, tree, max_code) {
    var n;
    var prevlen = -1;
    var curlen;
    var nextlen = tree[0 * 2 + 1];
    var count2 = 0;
    var max_count = 7;
    var min_count = 4;
    if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
    }
    for(n = 0; n <= max_code; n++){
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count2 < max_count && curlen === nextlen) {
            continue;
        } else if (count2 < min_count) {
            do {
                send_code(s3, curlen, s3.bl_tree);
            }while (--count2 !== 0)
        } else if (curlen !== 0) {
            if (curlen !== prevlen) {
                send_code(s3, curlen, s3.bl_tree);
                count2--;
            }
            send_code(s3, REP_3_6, s3.bl_tree);
            send_bits(s3, count2 - 3, 2);
        } else if (count2 <= 10) {
            send_code(s3, REPZ_3_10, s3.bl_tree);
            send_bits(s3, count2 - 3, 3);
        } else {
            send_code(s3, REPZ_11_138, s3.bl_tree);
            send_bits(s3, count2 - 11, 7);
        }
        count2 = 0;
        prevlen = curlen;
        if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
        } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
        } else {
            max_count = 7;
            min_count = 4;
        }
    }
}
function build_bl_tree(s3) {
    var max_blindex;
    scan_tree(s3, s3.dyn_ltree, s3.l_desc.max_code);
    scan_tree(s3, s3.dyn_dtree, s3.d_desc.max_code);
    build_tree(s3, s3.bl_desc);
    for(max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--){
        if (s3.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
            break;
        }
    }
    s3.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    return max_blindex;
}
function send_all_trees(s3, lcodes, dcodes, blcodes) {
    var rank;
    send_bits(s3, lcodes - 257, 5);
    send_bits(s3, dcodes - 1, 5);
    send_bits(s3, blcodes - 4, 4);
    for(rank = 0; rank < blcodes; rank++){
        send_bits(s3, s3.bl_tree[bl_order[rank] * 2 + 1], 3);
    }
    send_tree(s3, s3.dyn_ltree, lcodes - 1);
    send_tree(s3, s3.dyn_dtree, dcodes - 1);
}
function detect_data_type(s3) {
    var black_mask = 4093624447;
    var n;
    for(n = 0; n <= 31; n++, black_mask >>>= 1){
        if (black_mask & 1 && s3.dyn_ltree[n * 2] !== 0) {
            return Z_BINARY;
        }
    }
    if (s3.dyn_ltree[9 * 2] !== 0 || s3.dyn_ltree[10 * 2] !== 0 || s3.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
    }
    for(n = 32; n < LITERALS; n++){
        if (s3.dyn_ltree[n * 2] !== 0) {
            return Z_TEXT;
        }
    }
    return Z_BINARY;
}
var static_init_done = false;
function _tr_init(s3) {
    if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
    }
    s3.l_desc = new TreeDesc(s3.dyn_ltree, static_l_desc);
    s3.d_desc = new TreeDesc(s3.dyn_dtree, static_d_desc);
    s3.bl_desc = new TreeDesc(s3.bl_tree, static_bl_desc);
    s3.bi_buf = 0;
    s3.bi_valid = 0;
    init_block(s3);
}
function _tr_stored_block(s3, buf, stored_len, last) {
    send_bits(s3, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
    copy_block(s3, buf, stored_len, true);
}
function _tr_align(s3) {
    send_bits(s3, STATIC_TREES << 1, 3);
    send_code(s3, END_BLOCK, static_ltree);
    bi_flush(s3);
}
function _tr_flush_block(s3, buf, stored_len, last) {
    var opt_lenb, static_lenb;
    var max_blindex = 0;
    if (s3.level > 0) {
        if (s3.strm.data_type === Z_UNKNOWN) {
            s3.strm.data_type = detect_data_type(s3);
        }
        build_tree(s3, s3.l_desc);
        build_tree(s3, s3.d_desc);
        max_blindex = build_bl_tree(s3);
        opt_lenb = s3.opt_len + 3 + 7 >>> 3;
        static_lenb = s3.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
            opt_lenb = static_lenb;
        }
    } else {
        opt_lenb = static_lenb = stored_len + 5;
    }
    if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s3, buf, stored_len, last);
    } else if (s3.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s3, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s3, static_ltree, static_dtree);
    } else {
        send_bits(s3, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s3, s3.l_desc.max_code + 1, s3.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s3, s3.dyn_ltree, s3.dyn_dtree);
    }
    init_block(s3);
    if (last) {
        bi_windup(s3);
    }
}
function _tr_tally(s3, dist, lc) {
    s3.pending_buf[s3.d_buf + s3.last_lit * 2] = dist >>> 8 & 255;
    s3.pending_buf[s3.d_buf + s3.last_lit * 2 + 1] = dist & 255;
    s3.pending_buf[s3.l_buf + s3.last_lit] = lc & 255;
    s3.last_lit++;
    if (dist === 0) {
        s3.dyn_ltree[lc * 2]++;
    } else {
        s3.matches++;
        dist--;
        s3.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s3.dyn_dtree[d_code(dist) * 2]++;
    }
    return s3.last_lit === s3.lit_bufsize - 1;
}
exports2._tr_init = _tr_init;
exports2._tr_stored_block = _tr_stored_block;
exports2._tr_flush_block = _tr_flush_block;
exports2._tr_tally = _tr_tally;
exports2._tr_align = _tr_align;

return exports2;
}
