var __wakaru_require_omggif_cache;
export function require_omggif() {
if (__wakaru_require_omggif_cache) return __wakaru_require_omggif_cache;
var exports2 = {};
__wakaru_require_omggif_cache = exports2;
"use strict";
function GifWriter(buf, width, height, gopts) {
    var p2 = 0;
    var gopts = gopts === void 0 ? {} : gopts;
    var loop_count = gopts.loop === void 0 ? null : gopts.loop;
    var global_palette = gopts.palette === void 0 ? null : gopts.palette;
    if (width <= 0 || height <= 0 || width > 65535 || height > 65535) throw new Error("Width/Height invalid.");
    function check_palette_and_num_colors(palette2) {
        var num_colors = palette2.length;
        if (num_colors < 2 || num_colors > 256 || num_colors & num_colors - 1) {
            throw new Error("Invalid code/color length, must be power of 2 and 2 .. 256.");
        }
        return num_colors;
    }
    buf[p2++] = 71;
    buf[p2++] = 73;
    buf[p2++] = 70;
    buf[p2++] = 56;
    buf[p2++] = 57;
    buf[p2++] = 97;
    var gp_num_colors_pow2 = 0;
    var background = 0;
    if (global_palette !== null) {
        var gp_num_colors = check_palette_and_num_colors(global_palette);
        while(gp_num_colors >>= 1)++gp_num_colors_pow2;
        gp_num_colors = 1 << gp_num_colors_pow2;
        --gp_num_colors_pow2;
        if (gopts.background !== void 0) {
            background = gopts.background;
            if (background >= gp_num_colors) throw new Error("Background index out of range.");
            if (background === 0) throw new Error("Background index explicitly passed as 0.");
        }
    }
    buf[p2++] = width & 255;
    buf[p2++] = width >> 8 & 255;
    buf[p2++] = height & 255;
    buf[p2++] = height >> 8 & 255;
    buf[p2++] = (global_palette !== null ? 128 : 0) | gp_num_colors_pow2;
    buf[p2++] = background;
    buf[p2++] = 0;
    if (global_palette !== null) {
        for(var i = 0, il = global_palette.length; i < il; ++i){
            var rgb = global_palette[i];
            buf[p2++] = rgb >> 16 & 255;
            buf[p2++] = rgb >> 8 & 255;
            buf[p2++] = rgb & 255;
        }
    }
    if (loop_count !== null) {
        if (loop_count < 0 || loop_count > 65535) throw new Error("Loop count invalid.");
        buf[p2++] = 33;
        buf[p2++] = 255;
        buf[p2++] = 11;
        buf[p2++] = 78;
        buf[p2++] = 69;
        buf[p2++] = 84;
        buf[p2++] = 83;
        buf[p2++] = 67;
        buf[p2++] = 65;
        buf[p2++] = 80;
        buf[p2++] = 69;
        buf[p2++] = 50;
        buf[p2++] = 46;
        buf[p2++] = 48;
        buf[p2++] = 3;
        buf[p2++] = 1;
        buf[p2++] = loop_count & 255;
        buf[p2++] = loop_count >> 8 & 255;
        buf[p2++] = 0;
    }
    var ended = false;
    this.addFrame = function(x, y, w2, h, indexed_pixels, opts) {
        if (ended === true) {
            --p2;
            ended = false;
        }
        opts = opts === void 0 ? {} : opts;
        if (x < 0 || y < 0 || x > 65535 || y > 65535) throw new Error("x/y invalid.");
        if (w2 <= 0 || h <= 0 || w2 > 65535 || h > 65535) throw new Error("Width/Height invalid.");
        if (indexed_pixels.length < w2 * h) throw new Error("Not enough pixels for the frame size.");
        var using_local_palette = true;
        var palette2 = opts.palette;
        if (palette2 === void 0 || palette2 === null) {
            using_local_palette = false;
            palette2 = global_palette;
        }
        if (palette2 === void 0 || palette2 === null) throw new Error("Must supply either a local or global palette.");
        var num_colors = check_palette_and_num_colors(palette2);
        var min_code_size = 0;
        while(num_colors >>= 1)++min_code_size;
        num_colors = 1 << min_code_size;
        var delay3 = opts.delay === void 0 ? 0 : opts.delay;
        var disposal = opts.disposal === void 0 ? 0 : opts.disposal;
        if (disposal < 0 || disposal > 3) throw new Error("Disposal out of range.");
        var use_transparency = false;
        var transparent_index = 0;
        if (opts.transparent !== void 0 && opts.transparent !== null) {
            use_transparency = true;
            transparent_index = opts.transparent;
            if (transparent_index < 0 || transparent_index >= num_colors) throw new Error("Transparent color index.");
        }
        if (disposal !== 0 || use_transparency || delay3 !== 0) {
            buf[p2++] = 33;
            buf[p2++] = 249;
            buf[p2++] = 4;
            buf[p2++] = disposal << 2 | (use_transparency === true ? 1 : 0);
            buf[p2++] = delay3 & 255;
            buf[p2++] = delay3 >> 8 & 255;
            buf[p2++] = transparent_index;
            buf[p2++] = 0;
        }
        buf[p2++] = 44;
        buf[p2++] = x & 255;
        buf[p2++] = x >> 8 & 255;
        buf[p2++] = y & 255;
        buf[p2++] = y >> 8 & 255;
        buf[p2++] = w2 & 255;
        buf[p2++] = w2 >> 8 & 255;
        buf[p2++] = h & 255;
        buf[p2++] = h >> 8 & 255;
        buf[p2++] = using_local_palette === true ? 128 | min_code_size - 1 : 0;
        if (using_local_palette === true) {
            for(var i2 = 0, il2 = palette2.length; i2 < il2; ++i2){
                var rgb2 = palette2[i2];
                buf[p2++] = rgb2 >> 16 & 255;
                buf[p2++] = rgb2 >> 8 & 255;
                buf[p2++] = rgb2 & 255;
            }
        }
        p2 = GifWriterOutputLZWCodeStream(buf, p2, min_code_size < 2 ? 2 : min_code_size, indexed_pixels);
        return p2;
    };
    this.end = function() {
        if (ended === false) {
            buf[p2++] = 59;
            ended = true;
        }
        return p2;
    };
    this.getOutputBuffer = function() {
        return buf;
    };
    this.setOutputBuffer = function(v2) {
        buf = v2;
    };
    this.getOutputBufferPosition = function() {
        return p2;
    };
    this.setOutputBufferPosition = function(v2) {
        p2 = v2;
    };
}
function GifWriterOutputLZWCodeStream(buf, p2, min_code_size, index_stream) {
    buf[p2++] = min_code_size;
    var cur_subblock = p2++;
    var clear_code = 1 << min_code_size;
    var code_mask = clear_code - 1;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;
    var cur_code_size = min_code_size + 1;
    var cur_shift = 0;
    var cur = 0;
    function emit_bytes_to_buffer(bit_block_size) {
        while(cur_shift >= bit_block_size){
            buf[p2++] = cur & 255;
            cur >>= 8;
            cur_shift -= 8;
            if (p2 === cur_subblock + 256) {
                buf[cur_subblock] = 255;
                cur_subblock = p2++;
            }
        }
    }
    function emit_code(c) {
        cur |= c << cur_shift;
        cur_shift += cur_code_size;
        emit_bytes_to_buffer(8);
    }
    var ib_code = index_stream[0] & code_mask;
    var code_table = {};
    emit_code(clear_code);
    for(var i = 1, il = index_stream.length; i < il; ++i){
        var k2 = index_stream[i] & code_mask;
        var cur_key = ib_code << 8 | k2;
        var cur_code = code_table[cur_key];
        if (cur_code === void 0) {
            cur |= ib_code << cur_shift;
            cur_shift += cur_code_size;
            while(cur_shift >= 8){
                buf[p2++] = cur & 255;
                cur >>= 8;
                cur_shift -= 8;
                if (p2 === cur_subblock + 256) {
                    buf[cur_subblock] = 255;
                    cur_subblock = p2++;
                }
            }
            if (next_code === 4096) {
                emit_code(clear_code);
                next_code = eoi_code + 1;
                cur_code_size = min_code_size + 1;
                code_table = {};
            } else {
                if (next_code >= 1 << cur_code_size) ++cur_code_size;
                code_table[cur_key] = next_code++;
            }
            ib_code = k2;
        } else {
            ib_code = cur_code;
        }
    }
    emit_code(ib_code);
    emit_code(eoi_code);
    emit_bytes_to_buffer(1);
    if (cur_subblock + 1 === p2) {
        buf[cur_subblock] = 0;
    } else {
        buf[cur_subblock] = p2 - cur_subblock - 1;
        buf[p2++] = 0;
    }
    return p2;
}
function GifReader(buf) {
    var p2 = 0;
    if (buf[p2++] !== 71 || buf[p2++] !== 73 || buf[p2++] !== 70 || buf[p2++] !== 56 || (buf[p2++] + 1 & 253) !== 56 || buf[p2++] !== 97) {
        throw new Error("Invalid GIF 87a/89a header.");
    }
    var width = buf[p2++] | buf[p2++] << 8;
    var height = buf[p2++] | buf[p2++] << 8;
    var pf0 = buf[p2++];
    var global_palette_flag = pf0 >> 7;
    var num_global_colors_pow2 = pf0 & 7;
    var num_global_colors = 1 << num_global_colors_pow2 + 1;
    var background = buf[p2++];
    buf[p2++];
    var global_palette_offset = null;
    var global_palette_size = null;
    if (global_palette_flag) {
        global_palette_offset = p2;
        global_palette_size = num_global_colors;
        p2 += num_global_colors * 3;
    }
    var no_eof = true;
    var frames = [];
    var delay3 = 0;
    var transparent_index = null;
    var disposal = 0;
    var loop_count = null;
    this.width = width;
    this.height = height;
    while(no_eof && p2 < buf.length){
        switch(buf[p2++]){
            case 33:
                switch(buf[p2++]){
                    case 255:
                        if (buf[p2] !== 11 || buf[p2 + 1] == 78 && buf[p2 + 2] == 69 && buf[p2 + 3] == 84 && buf[p2 + 4] == 83 && buf[p2 + 5] == 67 && buf[p2 + 6] == 65 && buf[p2 + 7] == 80 && buf[p2 + 8] == 69 && buf[p2 + 9] == 50 && buf[p2 + 10] == 46 && buf[p2 + 11] == 48 && buf[p2 + 12] == 3 && buf[p2 + 13] == 1 && buf[p2 + 16] == 0) {
                            p2 += 14;
                            loop_count = buf[p2++] | buf[p2++] << 8;
                            p2++;
                        } else {
                            p2 += 12;
                            while(true){
                                var block_size = buf[p2++];
                                if (!(block_size >= 0)) throw Error("Invalid block size");
                                if (block_size === 0) break;
                                p2 += block_size;
                            }
                        }
                        break;
                    case 249:
                        if (buf[p2++] !== 4 || buf[p2 + 4] !== 0) throw new Error("Invalid graphics extension block.");
                        var pf1 = buf[p2++];
                        delay3 = buf[p2++] | buf[p2++] << 8;
                        transparent_index = buf[p2++];
                        if ((pf1 & 1) === 0) transparent_index = null;
                        disposal = pf1 >> 2 & 7;
                        p2++;
                        break;
                    case 254:
                        while(true){
                            var block_size = buf[p2++];
                            if (!(block_size >= 0)) throw Error("Invalid block size");
                            if (block_size === 0) break;
                            p2 += block_size;
                        }
                        break;
                    default:
                        throw new Error("Unknown graphic control label: 0x" + buf[p2 - 1].toString(16));
                }
                break;
            case 44:
                var x = buf[p2++] | buf[p2++] << 8;
                var y = buf[p2++] | buf[p2++] << 8;
                var w2 = buf[p2++] | buf[p2++] << 8;
                var h = buf[p2++] | buf[p2++] << 8;
                var pf2 = buf[p2++];
                var local_palette_flag = pf2 >> 7;
                var interlace_flag = pf2 >> 6 & 1;
                var num_local_colors_pow2 = pf2 & 7;
                var num_local_colors = 1 << num_local_colors_pow2 + 1;
                var palette_offset = global_palette_offset;
                var palette_size = global_palette_size;
                var has_local_palette = false;
                if (local_palette_flag) {
                    var has_local_palette = true;
                    palette_offset = p2;
                    palette_size = num_local_colors;
                    p2 += num_local_colors * 3;
                }
                var data_offset = p2;
                p2++;
                while(true){
                    var block_size = buf[p2++];
                    if (!(block_size >= 0)) throw Error("Invalid block size");
                    if (block_size === 0) break;
                    p2 += block_size;
                }
                frames.push({
                    x,
                    y,
                    width: w2,
                    height: h,
                    has_local_palette,
                    palette_offset,
                    palette_size,
                    data_offset,
                    data_length: p2 - data_offset,
                    transparent_index,
                    interlaced: !!interlace_flag,
                    delay: delay3,
                    disposal
                });
                break;
            case 59:
                no_eof = false;
                break;
            default:
                throw new Error("Unknown gif block: 0x" + buf[p2 - 1].toString(16));
                break;
        }
    }
    this.numFrames = function() {
        return frames.length;
    };
    this.loopCount = function() {
        return loop_count;
    };
    this.frameInfo = function(frame_num) {
        if (frame_num < 0 || frame_num >= frames.length) throw new Error("Frame index out of range.");
        return frames[frame_num];
    };
    this.decodeAndBlitFrameBGRA = function(frame_num, pixels) {
        var frame = this.frameInfo(frame_num);
        var num_pixels = frame.width * frame.height;
        var index_stream = new Uint8Array(num_pixels);
        GifReaderLZWOutputIndexStream(buf, frame.data_offset, index_stream, num_pixels);
        var palette_offset2 = frame.palette_offset;
        var trans = frame.transparent_index;
        if (trans === null) trans = 256;
        var framewidth = frame.width;
        var framestride = width - framewidth;
        var xleft = framewidth;
        var opbeg = (frame.y * width + frame.x) * 4;
        var opend = ((frame.y + frame.height) * width + frame.x) * 4;
        var op = opbeg;
        var scanstride = framestride * 4;
        if (frame.interlaced === true) {
            scanstride += width * 4 * 7;
        }
        var interlaceskip = 8;
        for(var i = 0, il = index_stream.length; i < il; ++i){
            var index = index_stream[i];
            if (xleft === 0) {
                op += scanstride;
                xleft = framewidth;
                if (op >= opend) {
                    scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
                    op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
                    interlaceskip >>= 1;
                }
            }
            if (index === trans) {
                op += 4;
            } else {
                var r = buf[palette_offset2 + index * 3];
                var g2 = buf[palette_offset2 + index * 3 + 1];
                var b2 = buf[palette_offset2 + index * 3 + 2];
                pixels[op++] = b2;
                pixels[op++] = g2;
                pixels[op++] = r;
                pixels[op++] = 255;
            }
            --xleft;
        }
    };
    this.decodeAndBlitFrameRGBA = function(frame_num, pixels) {
        var frame = this.frameInfo(frame_num);
        var num_pixels = frame.width * frame.height;
        var index_stream = new Uint8Array(num_pixels);
        GifReaderLZWOutputIndexStream(buf, frame.data_offset, index_stream, num_pixels);
        var palette_offset2 = frame.palette_offset;
        var trans = frame.transparent_index;
        if (trans === null) trans = 256;
        var framewidth = frame.width;
        var framestride = width - framewidth;
        var xleft = framewidth;
        var opbeg = (frame.y * width + frame.x) * 4;
        var opend = ((frame.y + frame.height) * width + frame.x) * 4;
        var op = opbeg;
        var scanstride = framestride * 4;
        if (frame.interlaced === true) {
            scanstride += width * 4 * 7;
        }
        var interlaceskip = 8;
        for(var i = 0, il = index_stream.length; i < il; ++i){
            var index = index_stream[i];
            if (xleft === 0) {
                op += scanstride;
                xleft = framewidth;
                if (op >= opend) {
                    scanstride = framestride * 4 + width * 4 * (interlaceskip - 1);
                    op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
                    interlaceskip >>= 1;
                }
            }
            if (index === trans) {
                op += 4;
            } else {
                var r = buf[palette_offset2 + index * 3];
                var g2 = buf[palette_offset2 + index * 3 + 1];
                var b2 = buf[palette_offset2 + index * 3 + 2];
                pixels[op++] = r;
                pixels[op++] = g2;
                pixels[op++] = b2;
                pixels[op++] = 255;
            }
            --xleft;
        }
    };
}
function GifReaderLZWOutputIndexStream(code_stream, p2, output, output_length) {
    var min_code_size = code_stream[p2++];
    var clear_code = 1 << min_code_size;
    var eoi_code = clear_code + 1;
    var next_code = eoi_code + 1;
    var cur_code_size = min_code_size + 1;
    var code_mask = (1 << cur_code_size) - 1;
    var cur_shift = 0;
    var cur = 0;
    var op = 0;
    var subblock_size = code_stream[p2++];
    var code_table = new Int32Array(4096);
    var prev_code = null;
    while(true){
        while(cur_shift < 16){
            if (subblock_size === 0) break;
            cur |= code_stream[p2++] << cur_shift;
            cur_shift += 8;
            if (subblock_size === 1) {
                subblock_size = code_stream[p2++];
            } else {
                --subblock_size;
            }
        }
        if (cur_shift < cur_code_size) break;
        var code = cur & code_mask;
        cur >>= cur_code_size;
        cur_shift -= cur_code_size;
        if (code === clear_code) {
            next_code = eoi_code + 1;
            cur_code_size = min_code_size + 1;
            code_mask = (1 << cur_code_size) - 1;
            prev_code = null;
            continue;
        } else if (code === eoi_code) {
            break;
        }
        var chase_code = code < next_code ? code : prev_code;
        var chase_length = 0;
        var chase = chase_code;
        while(chase > clear_code){
            chase = code_table[chase] >> 8;
            ++chase_length;
        }
        var k2 = chase;
        var op_end = op + chase_length + (chase_code !== code ? 1 : 0);
        if (op_end > output_length) {
            console.log("Warning, gif stream longer than expected.");
            return;
        }
        output[op++] = k2;
        op += chase_length;
        var b2 = op;
        if (chase_code !== code) output[op++] = k2;
        chase = chase_code;
        while(chase_length--){
            chase = code_table[chase];
            output[--b2] = chase & 255;
            chase >>= 8;
        }
        if (prev_code !== null && next_code < 4096) {
            code_table[next_code++] = prev_code << 8 | k2;
            if (next_code >= code_mask + 1 && cur_code_size < 12) {
                ++cur_code_size;
                code_mask = code_mask << 1 | 1;
            }
        }
        prev_code = code;
    }
    if (op !== output_length) {
        console.log("Warning, gif stream shorter than expected.");
    }
    return output;
}
try {
    exports2.GifWriter = GifWriter;
    exports2.GifReader = GifReader;
} catch (e) {}

return exports2;
}
