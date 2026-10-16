import { require_bitmapimage } from "./bitmapimage.js";
import { require_gif } from "./gif.js";
var __wakaru_require_gifframe_cache;
export function require_gifframe() {
if (__wakaru_require_gifframe_cache) return __wakaru_require_gifframe_cache;
var exports2 = {};
__wakaru_require_gifframe_cache = exports2;
"use strict";
var BitmapImage2 = require_bitmapimage();
var { GifError: GifError2 } = require_gif();
var GifFrame2 = class _GifFrame extends BitmapImage2 {
    constructor(...args){
        super(...args);
        if (args[0] instanceof _GifFrame) {
            const source = args[0];
            this.xOffset = source.xOffset;
            this.yOffset = source.yOffset;
            this.disposalMethod = source.disposalMethod;
            this.delayCentisecs = source.delayCentisecs;
            this.interlaced = source.interlaced;
        } else {
            const lastArg = args[args.length - 1];
            let options2 = {};
            if (typeof lastArg === "object" && !(lastArg instanceof BitmapImage2)) {
                options2 = lastArg;
            }
            this.xOffset = options2.xOffset || 0;
            this.yOffset = options2.yOffset || 0;
            this.disposalMethod = options2.disposalMethod !== void 0 ? options2.disposalMethod : _GifFrame.DisposeToBackgroundColor;
            this.delayCentisecs = options2.delayCentisecs || 8;
            this.interlaced = options2.interlaced || false;
        }
    }
    getPalette() {
        const colorSet = new Set();
        const buf = this.bitmap.data;
        let i = 0;
        let usesTransparency = false;
        while(i < buf.length){
            if (buf[i + 3] === 0) {
                usesTransparency = true;
            } else {
                const color = buf.readUInt32BE(i, true) >> 8 & 16777215;
                colorSet.add(color);
            }
            i += 4;
        }
        const colors = new Array(colorSet.size);
        const iter = colorSet.values();
        for(i = 0; i < colors.length; ++i){
            colors[i] = iter.next().value;
        }
        colors.sort((a, b2)=>a - b2);
        let indexCount = colors.length;
        if (usesTransparency) {
            ++indexCount;
        }
        return {
            colors,
            usesTransparency,
            indexCount
        };
    }
};
GifFrame2.DisposeToAnything = 0;
GifFrame2.DisposeNothing = 1;
GifFrame2.DisposeToBackgroundColor = 2;
GifFrame2.DisposeToPrevious = 3;
exports2.GifFrame = GifFrame2;

return exports2;
}
