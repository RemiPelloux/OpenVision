import { require_constants15 } from "./constants.js";
var __wakaru_require_bitpacker_cache;
export function require_bitpacker() {
if (__wakaru_require_bitpacker_cache) return __wakaru_require_bitpacker_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_bitpacker_cache = module2;
"use strict";
var constants14 = require_constants15();
module2.exports = function(dataIn, width, height, options2) {
    let outHasAlpha = [
        constants14.COLORTYPE_COLOR_ALPHA,
        constants14.COLORTYPE_ALPHA
    ].indexOf(options2.colorType) !== -1;
    if (options2.colorType === options2.inputColorType) {
        let bigEndian = (function() {
            let buffer = new ArrayBuffer(2);
            new DataView(buffer).setInt16(0, 256, true);
            return new Int16Array(buffer)[0] !== 256;
        })();
        if (options2.bitDepth === 8 || options2.bitDepth === 16 && bigEndian) {
            return dataIn;
        }
    }
    let data = options2.bitDepth !== 16 ? dataIn : new Uint16Array(dataIn.buffer);
    let maxValue = 255;
    let inBpp = constants14.COLORTYPE_TO_BPP_MAP[options2.inputColorType];
    if (inBpp === 4 && !options2.inputHasAlpha) {
        inBpp = 3;
    }
    let outBpp = constants14.COLORTYPE_TO_BPP_MAP[options2.colorType];
    if (options2.bitDepth === 16) {
        maxValue = 65535;
        outBpp *= 2;
    }
    let outData = Buffer.alloc(width * height * outBpp);
    let inIndex = 0;
    let outIndex = 0;
    let bgColor = options2.bgColor || {};
    if (bgColor.red === void 0) {
        bgColor.red = maxValue;
    }
    if (bgColor.green === void 0) {
        bgColor.green = maxValue;
    }
    if (bgColor.blue === void 0) {
        bgColor.blue = maxValue;
    }
    function getRGBA() {
        let red;
        let green;
        let blue;
        let alpha = maxValue;
        switch(options2.inputColorType){
            case constants14.COLORTYPE_COLOR_ALPHA:
                alpha = data[inIndex + 3];
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants14.COLORTYPE_COLOR:
                red = data[inIndex];
                green = data[inIndex + 1];
                blue = data[inIndex + 2];
                break;
            case constants14.COLORTYPE_ALPHA:
                alpha = data[inIndex + 1];
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            case constants14.COLORTYPE_GRAYSCALE:
                red = data[inIndex];
                green = red;
                blue = red;
                break;
            default:
                throw new Error("input color type:" + options2.inputColorType + " is not supported at present");
        }
        if (options2.inputHasAlpha) {
            if (!outHasAlpha) {
                alpha /= maxValue;
                red = Math.min(Math.max(Math.round((1 - alpha) * bgColor.red + alpha * red), 0), maxValue);
                green = Math.min(Math.max(Math.round((1 - alpha) * bgColor.green + alpha * green), 0), maxValue);
                blue = Math.min(Math.max(Math.round((1 - alpha) * bgColor.blue + alpha * blue), 0), maxValue);
            }
        }
        return {
            red,
            green,
            blue,
            alpha
        };
    }
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            let rgba = getRGBA(data, inIndex);
            switch(options2.colorType){
                case constants14.COLORTYPE_COLOR_ALPHA:
                case constants14.COLORTYPE_COLOR:
                    if (options2.bitDepth === 8) {
                        outData[outIndex] = rgba.red;
                        outData[outIndex + 1] = rgba.green;
                        outData[outIndex + 2] = rgba.blue;
                        if (outHasAlpha) {
                            outData[outIndex + 3] = rgba.alpha;
                        }
                    } else {
                        outData.writeUInt16BE(rgba.red, outIndex);
                        outData.writeUInt16BE(rgba.green, outIndex + 2);
                        outData.writeUInt16BE(rgba.blue, outIndex + 4);
                        if (outHasAlpha) {
                            outData.writeUInt16BE(rgba.alpha, outIndex + 6);
                        }
                    }
                    break;
                case constants14.COLORTYPE_ALPHA:
                case constants14.COLORTYPE_GRAYSCALE:
                    {
                        let grayscale = (rgba.red + rgba.green + rgba.blue) / 3;
                        if (options2.bitDepth === 8) {
                            outData[outIndex] = grayscale;
                            if (outHasAlpha) {
                                outData[outIndex + 1] = rgba.alpha;
                            }
                        } else {
                            outData.writeUInt16BE(grayscale, outIndex);
                            if (outHasAlpha) {
                                outData.writeUInt16BE(rgba.alpha, outIndex + 2);
                            }
                        }
                        break;
                    }
                default:
                    throw new Error("unrecognised color Type " + options2.colorType);
            }
            inIndex += inBpp;
            outIndex += outBpp;
        }
    }
    return outData;
};

return module2.exports;
}
