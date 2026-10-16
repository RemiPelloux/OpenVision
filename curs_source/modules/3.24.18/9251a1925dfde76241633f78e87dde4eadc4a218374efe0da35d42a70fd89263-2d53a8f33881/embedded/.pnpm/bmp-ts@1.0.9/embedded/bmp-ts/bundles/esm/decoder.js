import { maskColor } from "../../../../../../../esm_exports3.js";
import { header_types_default, init_header_types } from "./header-types.js";
import { init_mask_color } from "./mask-color.js";
import { BmpCompression, init_types7 } from "./types.js";
var BmpDecoder;
export { BmpDecoder };
var __wakaru_init_decoder_initialized = false;
export function init_decoder() {
if (__wakaru_init_decoder_initialized) return;
__wakaru_init_decoder_initialized = true;
init_header_types();
init_mask_color();
init_types7();
BmpDecoder = class {
    flag;
    fileSize;
    reserved1;
    reserved2;
    offset;
    headerSize;
    width;
    height;
    planes;
    bitPP;
    compression;
    rawSize;
    hr;
    vr;
    colors;
    importantColors;
    palette;
    data;
    maskRed;
    maskGreen;
    maskBlue;
    maskAlpha;
    toRGBA;
    pos;
    bottomUp;
    buffer;
    locRed;
    locGreen;
    locBlue;
    locAlpha;
    shiftRed;
    shiftGreen;
    shiftBlue;
    shiftAlpha;
    constructor(buffer, { toRGBA } = {
        toRGBA: false
    }){
        this.buffer = buffer;
        this.toRGBA = !!toRGBA;
        this.pos = 0;
        this.bottomUp = true;
        this.flag = this.buffer.toString("utf-8", 0, this.pos += 2);
        if (this.flag !== "BM") {
            throw new Error("Invalid BMP File");
        }
        this.locRed = this.toRGBA ? 0 : 3;
        this.locGreen = this.toRGBA ? 1 : 2;
        this.locBlue = this.toRGBA ? 2 : 1;
        this.locAlpha = this.toRGBA ? 3 : 0;
        this.parseHeader();
        this.parseRGBA();
    }
    parseHeader() {
        this.fileSize = this.readUInt32LE();
        this.reserved1 = this.buffer.readUInt16LE(this.pos);
        this.pos += 2;
        this.reserved2 = this.buffer.readUInt16LE(this.pos);
        this.pos += 2;
        this.offset = this.readUInt32LE();
        this.headerSize = this.readUInt32LE();
        if (!(this.headerSize in header_types_default)) {
            throw new Error(`Unsupported BMP header size ${this.headerSize}`);
        }
        this.width = this.readUInt32LE();
        this.height = this.readUInt32LE();
        this.height = this.height > 2147483647 ? this.height - 4294967296 : this.height;
        this.planes = this.buffer.readUInt16LE(this.pos);
        this.pos += 2;
        this.bitPP = this.buffer.readUInt16LE(this.pos);
        this.pos += 2;
        this.compression = this.readUInt32LE();
        this.rawSize = this.readUInt32LE();
        this.hr = this.readUInt32LE();
        this.vr = this.readUInt32LE();
        this.colors = this.readUInt32LE();
        this.importantColors = this.readUInt32LE();
        if (this.bitPP === 32) {
            this.maskAlpha = 0;
            this.maskRed = 16711680;
            this.maskGreen = 65280;
            this.maskBlue = 255;
        } else if (this.bitPP === 16) {
            this.maskAlpha = 0;
            this.maskRed = 31744;
            this.maskGreen = 992;
            this.maskBlue = 31;
        }
        if (this.headerSize > header_types_default.BITMAP_INFO_HEADER || this.compression === BmpCompression.BI_BIT_FIELDS || this.compression === BmpCompression.BI_ALPHA_BIT_FIELDS) {
            this.maskRed = this.readUInt32LE();
            this.maskGreen = this.readUInt32LE();
            this.maskBlue = this.readUInt32LE();
        }
        if (this.headerSize > header_types_default.BITMAP_V2_INFO_HEADER || this.compression === BmpCompression.BI_ALPHA_BIT_FIELDS) {
            this.maskAlpha = this.readUInt32LE();
        }
        if (this.headerSize > header_types_default.BITMAP_V3_INFO_HEADER) {
            this.pos += header_types_default.BITMAP_V4_HEADER - header_types_default.BITMAP_V3_INFO_HEADER;
        }
        if (this.headerSize > header_types_default.BITMAP_V4_HEADER) {
            this.pos += header_types_default.BITMAP_V5_HEADER - header_types_default.BITMAP_V4_HEADER;
        }
        if (this.bitPP <= 8 || this.colors > 0) {
            const len = this.colors === 0 ? 1 << this.bitPP : this.colors;
            this.palette = new Array(len);
            for(let i = 0; i < len; i++){
                const blue = this.buffer.readUInt8(this.pos++);
                const green = this.buffer.readUInt8(this.pos++);
                const red = this.buffer.readUInt8(this.pos++);
                const quad = this.buffer.readUInt8(this.pos++);
                this.palette[i] = {
                    red,
                    green,
                    blue,
                    quad
                };
            }
        }
        if (this.height < 0) {
            this.height *= -1;
            this.bottomUp = false;
        }
        const coloShift = maskColor(this.maskRed, this.maskGreen, this.maskBlue, this.maskAlpha);
        this.shiftRed = coloShift.shiftRed;
        this.shiftGreen = coloShift.shiftGreen;
        this.shiftBlue = coloShift.shiftBlue;
        this.shiftAlpha = coloShift.shiftAlpha;
    }
    parseRGBA() {
        this.data = Buffer.alloc(this.width * this.height * 4);
        switch(this.bitPP){
            case 1:
                this.bit1();
                break;
            case 4:
                this.bit4();
                break;
            case 8:
                this.bit8();
                break;
            case 16:
                this.bit16();
                break;
            case 24:
                this.bit24();
                break;
            default:
                this.bit32();
        }
    }
    bit1() {
        const xLen = Math.ceil(this.width / 8);
        const mode = xLen % 4;
        const padding = mode !== 0 ? 4 - mode : 0;
        let lastLine;
        this.scanImage(padding, xLen, (x, line)=>{
            if (line !== lastLine) {
                lastLine = line;
            }
            const b2 = this.buffer.readUInt8(this.pos++);
            const location = line * this.width * 4 + x * 8 * 4;
            for(let i = 0; i < 8; i++){
                if (x * 8 + i < this.width) {
                    const rgb = this.palette[b2 >> 7 - i & 1];
                    this.data[location + i * this.locAlpha] = 0;
                    this.data[location + i * 4 + this.locBlue] = rgb.blue;
                    this.data[location + i * 4 + this.locGreen] = rgb.green;
                    this.data[location + i * 4 + this.locRed] = rgb.red;
                } else {
                    break;
                }
            }
        });
    }
    bit4() {
        if (this.compression === BmpCompression.BI_RLE4) {
            this.data.fill(0);
            let lowNibble = false;
            let lines2 = this.bottomUp ? this.height - 1 : 0;
            let location = 0;
            while(location < this.data.length){
                const a = this.buffer.readUInt8(this.pos++);
                const b2 = this.buffer.readUInt8(this.pos++);
                if (a === 0) {
                    if (b2 === 0) {
                        lines2 += this.bottomUp ? -1 : 1;
                        location = lines2 * this.width * 4;
                        lowNibble = false;
                        continue;
                    }
                    if (b2 === 1) {
                        break;
                    }
                    if (b2 === 2) {
                        const x = this.buffer.readUInt8(this.pos++);
                        const y = this.buffer.readUInt8(this.pos++);
                        lines2 += this.bottomUp ? -y : y;
                        location += y * this.width * 4 + x * 4;
                    } else {
                        let c = this.buffer.readUInt8(this.pos++);
                        for(let i = 0; i < b2; i++){
                            location = this.setPixelData(location, lowNibble ? c & 15 : (c & 240) >> 4);
                            if (i & 1 && i + 1 < b2) {
                                c = this.buffer.readUInt8(this.pos++);
                            }
                            lowNibble = !lowNibble;
                        }
                        if ((b2 + 1 >> 1 & 1) === 1) {
                            this.pos++;
                        }
                    }
                } else {
                    for(let i = 0; i < a; i++){
                        location = this.setPixelData(location, lowNibble ? b2 & 15 : (b2 & 240) >> 4);
                        lowNibble = !lowNibble;
                    }
                }
            }
        } else {
            const xLen = Math.ceil(this.width / 2);
            const mode = xLen % 4;
            const padding = mode !== 0 ? 4 - mode : 0;
            this.scanImage(padding, xLen, (x, line)=>{
                const b2 = this.buffer.readUInt8(this.pos++);
                const location = line * this.width * 4 + x * 2 * 4;
                const first4 = b2 >> 4;
                let rgb = this.palette[first4];
                this.data[location] = 0;
                this.data[location + 1] = rgb.blue;
                this.data[location + 2] = rgb.green;
                this.data[location + 3] = rgb.red;
                if (x * 2 + 1 >= this.width) {
                    return false;
                }
                const last4 = b2 & 15;
                rgb = this.palette[last4];
                this.data[location + 4] = 0;
                this.data[location + 4 + 1] = rgb.blue;
                this.data[location + 4 + 2] = rgb.green;
                this.data[location + 4 + 3] = rgb.red;
            });
        }
    }
    bit8() {
        if (this.compression === BmpCompression.BI_RLE8) {
            this.data.fill(0);
            let lines2 = this.bottomUp ? this.height - 1 : 0;
            let location = 0;
            while(location < this.data.length){
                const a = this.buffer.readUInt8(this.pos++);
                const b2 = this.buffer.readUInt8(this.pos++);
                if (a === 0) {
                    if (b2 === 0) {
                        lines2 += this.bottomUp ? -1 : 1;
                        location = lines2 * this.width * 4;
                        continue;
                    }
                    if (b2 === 1) {
                        break;
                    }
                    if (b2 === 2) {
                        const x = this.buffer.readUInt8(this.pos++);
                        const y = this.buffer.readUInt8(this.pos++);
                        lines2 += this.bottomUp ? -y : y;
                        location += y * this.width * 4 + x * 4;
                    } else {
                        for(let i = 0; i < b2; i++){
                            const c = this.buffer.readUInt8(this.pos++);
                            location = this.setPixelData(location, c);
                        }
                        const shouldIncrement = b2 & true;
                        if (shouldIncrement) {
                            this.pos++;
                        }
                    }
                } else {
                    for(let i = 0; i < a; i++){
                        location = this.setPixelData(location, b2);
                    }
                }
            }
        } else {
            const mode = this.width % 4;
            const padding = mode !== 0 ? 4 - mode : 0;
            this.scanImage(padding, this.width, (x, line)=>{
                const b2 = this.buffer.readUInt8(this.pos++);
                const location = line * this.width * 4 + x * 4;
                if (b2 < this.palette.length) {
                    const rgb = this.palette[b2];
                    this.data[location] = 0;
                    this.data[location + 1] = rgb.blue;
                    this.data[location + 2] = rgb.green;
                    this.data[location + 3] = rgb.red;
                } else {
                    this.data[location] = 0;
                    this.data[location + 1] = 255;
                    this.data[location + 2] = 255;
                    this.data[location + 3] = 255;
                }
            });
        }
    }
    bit16() {
        const padding = this.width % 2 * 2;
        this.scanImage(padding, this.width, (x, line)=>{
            const loc = line * this.width * 4 + x * 4;
            const px = this.buffer.readUInt16LE(this.pos);
            this.pos += 2;
            this.data[loc + this.locRed] = this.shiftRed(px);
            this.data[loc + this.locGreen] = this.shiftGreen(px);
            this.data[loc + this.locBlue] = this.shiftBlue(px);
            this.data[loc + this.locAlpha] = this.shiftAlpha(px);
        });
    }
    bit24() {
        const padding = this.width % 4;
        this.scanImage(padding, this.width, (x, line)=>{
            const loc = line * this.width * 4 + x * 4;
            const blue = this.buffer.readUInt8(this.pos++);
            const green = this.buffer.readUInt8(this.pos++);
            const red = this.buffer.readUInt8(this.pos++);
            this.data[loc + this.locRed] = red;
            this.data[loc + this.locGreen] = green;
            this.data[loc + this.locBlue] = blue;
            this.data[loc + this.locAlpha] = 0;
        });
    }
    bit32() {
        this.scanImage(0, this.width, (x, line)=>{
            const loc = line * this.width * 4 + x * 4;
            const px = this.readUInt32LE();
            this.data[loc + this.locRed] = this.shiftRed(px);
            this.data[loc + this.locGreen] = this.shiftGreen(px);
            this.data[loc + this.locBlue] = this.shiftBlue(px);
            this.data[loc + this.locAlpha] = this.shiftAlpha(px);
        });
    }
    scanImage(padding = 0, width = this.width, processPixel) {
        for(let y = this.height - 1; y >= 0; y--){
            const line = this.bottomUp ? y : this.height - 1 - y;
            for(let x = 0; x < width; x++){
                const result = processPixel.call(this, x, line);
                if (result === false) {
                    return;
                }
            }
            this.pos += padding;
        }
    }
    readUInt32LE() {
        const value = this.buffer.readUInt32LE(this.pos);
        this.pos += 4;
        return value;
    }
    setPixelData(location, rgbIndex) {
        const { blue, green, red } = this.palette[rgbIndex];
        this.data[location + this.locAlpha] = 0;
        this.data[location + 1 + this.locBlue] = blue;
        this.data[location + 2 + this.locGreen] = green;
        this.data[location + 3 + this.locRed] = red;
        return location + 4;
    }
};

}
