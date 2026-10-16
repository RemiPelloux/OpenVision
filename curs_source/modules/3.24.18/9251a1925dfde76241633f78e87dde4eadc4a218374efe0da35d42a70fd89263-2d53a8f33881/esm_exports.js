import { cssColorToHex, scan, scanIterator } from "./dist_exports2.js";
import { attemptExifRotate, composite, getExifOrientation } from "./composite_modes_exports.js";
import { emptyBitmap, import_await_to_js, import_core8, import_lite } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/index.js";
import { BlendMode, HorizontalAlign, VerticalAlign } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/utils/constants.js";
import { import_fs6, readFile9, writeFile6 } from "./node_modules/.pnpm/@jimp+file-ops@1.6.0/node_modules/@jimp/file-ops/dist/esm/index.js";
import { Edge } from "./node_modules/.pnpm/@jimp+types@1.6.0/node_modules/@jimp/types/dist/esm/index.js";
function bufferFromArrayBuffer(arrayBuffer) {
    const buffer = Buffer.alloc(arrayBuffer.byteLength);
    const view = new Uint8Array(arrayBuffer);
    for(let i = 0; i < buffer.length; ++i){
        buffer[i] = view[i];
    }
    return buffer;
}
export function createJimp({ plugins: pluginsArg, formats: formatsArg } = {}) {
    const plugins = pluginsArg || [];
    const formats = (formatsArg || []).map((format2)=>format2());
    const CustomJimp = class Jimp {
        bitmap = emptyBitmap;
        background = 0;
        formats = [];
        mime;
        constructor(options2 = emptyBitmap){
            this.formats = formats;
            if ("data" in options2) {
                this.bitmap = options2;
            } else {
                this.bitmap = {
                    data: Buffer.alloc(options2.width * options2.height * 4),
                    width: options2.width,
                    height: options2.height
                };
                if (options2.color) {
                    this.background = typeof options2.color === "string" ? cssColorToHex(options2.color) : options2.color;
                    for(let i = 0; i < this.bitmap.data.length; i += 4){
                        this.bitmap.data.writeUInt32BE(this.background, i);
                    }
                }
            }
            for (const methods2 of plugins){
                for(const key in methods2){
                    this[key] = (...args)=>{
                        const result = methods2[key]?.(this, ...args);
                        if (typeof result === "object" && "bitmap" in result) {
                            this.bitmap = result.bitmap;
                            return this;
                        }
                        return result;
                    };
                }
            }
        }
        static async read(url2, options2) {
            if (Buffer.isBuffer(url2) || url2 instanceof ArrayBuffer) {
                return this.fromBuffer(url2);
            }
            if ((0, import_fs6.existsSync)(url2)) {
                return this.fromBuffer(await readFile9(url2));
            }
            const [fetchErr, response] = await (0, import_await_to_js.to)(fetch(url2));
            if (fetchErr) {
                throw new Error(`Could not load Buffer from URL: ${url2}`);
            }
            if (!response.ok) {
                throw new Error(`HTTP Status ${response.status} for url ${url2}`);
            }
            const [arrayBufferErr, data] = await (0, import_await_to_js.to)(response.arrayBuffer());
            if (arrayBufferErr) {
                throw new Error(`Could not load Buffer from ${url2}`);
            }
            const buffer = bufferFromArrayBuffer(data);
            return this.fromBuffer(buffer, options2);
        }
        static fromBitmap(bitmap) {
            let data;
            if (bitmap.data instanceof Buffer) {
                data = Buffer.from(bitmap.data);
            }
            if (bitmap.data instanceof Uint8Array || bitmap.data instanceof Uint8ClampedArray) {
                data = Buffer.from(bitmap.data.buffer);
            }
            if (Array.isArray(bitmap.data)) {
                data = Buffer.concat(bitmap.data.map((hex)=>Buffer.from(hex.toString(16).padStart(8, "0"), "hex")));
            }
            if (!data) {
                throw new Error("data must be a Buffer");
            }
            if (typeof bitmap.height !== "number" || typeof bitmap.width !== "number") {
                throw new Error("bitmap must have width and height");
            }
            return new CustomJimp({
                height: bitmap.height,
                width: bitmap.width,
                data
            });
        }
        static async fromBuffer(buffer, options2) {
            const actualBuffer = buffer instanceof ArrayBuffer ? bufferFromArrayBuffer(buffer) : buffer;
            const mime2 = await import_core8.default.fromBuffer(actualBuffer);
            if (!mime2 || !mime2.mime) {
                throw new Error("Could not find MIME for Buffer");
            }
            const format2 = formats.find((format3)=>format3.mime === mime2.mime);
            if (!format2 || !format2.decode) {
                throw new Error(`Mime type ${mime2.mime} does not support decoding`);
            }
            const image2 = new CustomJimp(await format2.decode(actualBuffer, options2?.[format2.mime]));
            image2.mime = mime2.mime;
            attemptExifRotate(image2, actualBuffer);
            return image2;
        }
        inspect() {
            return "<Jimp " + (this.bitmap === emptyBitmap ? "pending..." : this.bitmap.width + "x" + this.bitmap.height) + ">";
        }
        toString() {
            return "[object Jimp]";
        }
        get width() {
            return this.bitmap.width;
        }
        get height() {
            return this.bitmap.height;
        }
        async getBuffer(mime2, options2) {
            const format2 = this.formats.find((format3)=>format3.mime === mime2);
            if (!format2 || !format2.encode) {
                throw new Error(`Unsupported MIME type: ${mime2}`);
            }
            let outputImage;
            if (format2.hasAlpha) {
                outputImage = this;
            } else {
                outputImage = new CustomJimp({
                    width: this.bitmap.width,
                    height: this.bitmap.height,
                    color: this.background
                });
                composite(outputImage, this);
            }
            return format2.encode(outputImage.bitmap, options2);
        }
        async getBase64(mime2, options2) {
            const data = await this.getBuffer(mime2, options2);
            return "data:" + mime2 + ";base64," + data.toString("base64");
        }
        async write(path64, options2) {
            const mimeType = import_lite.default.getType(path64);
            await writeFile6(path64, await this.getBuffer(mimeType, options2));
        }
        clone() {
            return new CustomJimp({
                ...this.bitmap,
                data: Buffer.from(this.bitmap.data)
            });
        }
        getPixelIndex(x, y, edgeHandling) {
            let xi2;
            let yi2;
            if (!edgeHandling) {
                edgeHandling = Edge.EXTEND;
            }
            if (typeof x !== "number" || typeof y !== "number") {
                throw new Error("x and y must be numbers");
            }
            x = Math.round(x);
            y = Math.round(y);
            xi2 = x;
            yi2 = y;
            if (edgeHandling === Edge.EXTEND) {
                if (x < 0) xi2 = 0;
                if (x >= this.bitmap.width) xi2 = this.bitmap.width - 1;
                if (y < 0) yi2 = 0;
                if (y >= this.bitmap.height) yi2 = this.bitmap.height - 1;
            }
            if (edgeHandling === Edge.WRAP) {
                if (x < 0) {
                    xi2 = this.bitmap.width + x;
                }
                if (x >= this.bitmap.width) {
                    xi2 = x % this.bitmap.width;
                }
                if (y < 0) {
                    yi2 = this.bitmap.height + y;
                }
                if (y >= this.bitmap.height) {
                    yi2 = y % this.bitmap.height;
                }
            }
            let i = this.bitmap.width * yi2 + xi2 << 2;
            if (xi2 < 0 || xi2 >= this.bitmap.width) {
                i = -1;
            }
            if (yi2 < 0 || yi2 >= this.bitmap.height) {
                i = -1;
            }
            return i;
        }
        getPixelColor(x, y) {
            if (typeof x !== "number" || typeof y !== "number") {
                throw new Error("x and y must be numbers");
            }
            const idx = this.getPixelIndex(x, y);
            return this.bitmap.data.readUInt32BE(idx);
        }
        setPixelColor(hex, x, y) {
            if (typeof hex !== "number" || typeof x !== "number" || typeof y !== "number") {
                throw new Error("hex, x and y must be numbers");
            }
            const idx = this.getPixelIndex(x, y);
            this.bitmap.data.writeUInt32BE(hex, idx);
            return this;
        }
        hasAlpha() {
            const { width, height, data } = this.bitmap;
            const byteLen = width * height << 2;
            for(let idx = 3; idx < byteLen; idx += 4){
                if (data[idx] !== 255) {
                    return true;
                }
            }
            return false;
        }
        composite(src, x = 0, y = 0, options2 = {}) {
            return composite(this, src, x, y, options2);
        }
        scan(x, y, w2, h, f2) {
            return scan(this, x, y, w2, h, f2);
        }
        scanIterator(x = 0, y = 0, w2 = this.bitmap.width, h = this.bitmap.height) {
            if (typeof x !== "number" || typeof y !== "number") {
                throw new Error("x and y must be numbers");
            }
            if (typeof w2 !== "number" || typeof h !== "number") {
                throw new Error("w and h must be numbers");
            }
            return scanIterator(this, x, y, w2, h);
        }
    };
    return CustomJimp;
}
export { BlendMode, HorizontalAlign, VerticalAlign, composite, getExifOrientation };

export var esm_exports = {};
Object.defineProperty(esm_exports, "BlendMode", {
    enumerable: true,
    get: ()=>BlendMode
});
Object.defineProperty(esm_exports, "HorizontalAlign", {
    enumerable: true,
    get: ()=>HorizontalAlign
});
Object.defineProperty(esm_exports, "VerticalAlign", {
    enumerable: true,
    get: ()=>VerticalAlign
});
Object.defineProperty(esm_exports, "composite", {
    enumerable: true,
    get: ()=>composite
});
Object.defineProperty(esm_exports, "createJimp", {
    enumerable: true,
    get: ()=>createJimp
});
Object.defineProperty(esm_exports, "getExifOrientation", {
    enumerable: true,
    get: ()=>getExifOrientation
});
