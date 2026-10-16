import { require_gif } from "./gif.js";
import { require_gifframe } from "./gifframe.js";
import { require_gifutil } from "./gifutil.js";
import { require_omggif } from "../../../../omggif@1.0.10/node_modules/omggif/omggif.js";
var __wakaru_require_gifcodec_cache;
export function require_gifcodec() {
if (__wakaru_require_gifcodec_cache) return __wakaru_require_gifcodec_cache;
var exports2 = {};
__wakaru_require_gifcodec_cache = exports2;
"use strict";
var Omggif = require_omggif();
var { Gif, GifError: GifError2 } = require_gif();
function GifUtil2() {
    const data = require_gifutil();
    GifUtil2 = function() {
        return data;
    };
    return data;
}
var { GifFrame: GifFrame2 } = require_gifframe();
var PER_GIF_OVERHEAD = 200;
var PER_FRAME_OVERHEAD = 100;
var GifCodec2 = class {
    constructor(options2 = {}){
        this._transparentRGB = null;
        if (typeof options2.transparentRGB === "number" && options2.transparentRGB !== 0) {
            this._transparentRGBA = options2.transparentRGB * 256;
        }
        this._testInitialBufferSize = 0;
    }
    decodeGif(buffer) {
        try {
            let reader;
            try {
                reader = new Omggif.GifReader(buffer);
            } catch (err) {
                throw new GifError2(err);
            }
            const frameCount = reader.numFrames();
            const frames = [];
            const spec = {
                width: reader.width,
                height: reader.height,
                loops: reader.loopCount()
            };
            spec.usesTransparency = false;
            for(let i = 0; i < frameCount; ++i){
                const frameInfo = this._decodeFrame(reader, i, spec.usesTransparency);
                frames.push(frameInfo.frame);
                if (frameInfo.usesTransparency) {
                    spec.usesTransparency = true;
                }
            }
            return Promise.resolve(new Gif(buffer, frames, spec));
        } catch (err) {
            return Promise.reject(err);
        }
    }
    encodeGif(frames, spec = {}) {
        try {
            if (frames === null || frames.length === 0) {
                throw new GifError2("there are no frames");
            }
            const dims = GifUtil2().getMaxDimensions(frames);
            spec = Object.assign({}, spec);
            spec.width = dims.maxWidth;
            spec.height = dims.maxHeight;
            if (spec.loops === void 0) {
                spec.loops = 0;
            }
            spec.colorScope = spec.colorScope || Gif.GlobalColorsPreferred;
            return Promise.resolve(this._encodeGif(frames, spec));
        } catch (err) {
            return Promise.reject(err);
        }
    }
    _decodeFrame(reader, frameIndex, alreadyUsedTransparency) {
        let info2, buffer;
        try {
            info2 = reader.frameInfo(frameIndex);
            buffer = new Buffer(reader.width * reader.height * 4);
            reader.decodeAndBlitFrameRGBA(frameIndex, buffer);
            if (info2.width !== reader.width || info2.height !== reader.height) {
                if (info2.y) {
                    buffer = buffer.slice(info2.y * reader.width * 4);
                }
                if (reader.width > info2.width) {
                    for(let ii2 = 0; ii2 < info2.height; ++ii2){
                        buffer.copy(buffer, ii2 * info2.width * 4, (info2.x + ii2 * reader.width) * 4, (info2.x + ii2 * reader.width) * 4 + info2.width * 4);
                    }
                }
                buffer = buffer.slice(0, info2.width * info2.height * 4);
            }
        } catch (err) {
            throw new GifError2(err);
        }
        let usesTransparency = false;
        if (this._transparentRGBA === null) {
            if (!alreadyUsedTransparency) {
                for(let i = 3; i < buffer.length; i += 4){
                    if (buffer[i] === 0) {
                        usesTransparency = true;
                        i = buffer.length;
                    }
                }
            }
        } else {
            for(let i = 3; i < buffer.length; i += 4){
                if (buffer[i] === 0) {
                    buffer.writeUInt32BE(this._transparentRGBA, i - 3);
                    usesTransparency = true;
                }
            }
        }
        const frame = new GifFrame2(info2.width, info2.height, buffer, {
            xOffset: info2.x,
            yOffset: info2.y,
            disposalMethod: info2.disposal,
            interlaced: info2.interlaced,
            delayCentisecs: info2.delay
        });
        return {
            frame,
            usesTransparency
        };
    }
    _encodeGif(frames, spec) {
        let colorInfo;
        if (spec.colorScope === Gif.LocalColorsOnly) {
            colorInfo = GifUtil2().getColorInfo(frames, 0);
        } else {
            colorInfo = GifUtil2().getColorInfo(frames, 256);
            if (!colorInfo.colors) {
                if (spec.colorScope === Gif.GlobalColorsOnly) {
                    throw new GifError2("Too many color indexes for global color table");
                }
                spec.colorScope = Gif.LocalColorsOnly;
            }
        }
        spec.usesTransparency = colorInfo.usesTransparency;
        const localPalettes = colorInfo.palettes;
        if (spec.colorScope === Gif.LocalColorsOnly) {
            const localSizeEst = 2e3;
            return _encodeLocal(frames, spec, localSizeEst, localPalettes);
        }
        const globalSizeEst = 2e3;
        return _encodeGlobal(frames, spec, globalSizeEst, colorInfo);
    }
    _getSizeEstimateGlobal(globalPalette, frames) {
        if (this._testInitialBufferSize > 0) {
            return this._testInitialBufferSize;
        }
        let sizeEst = PER_GIF_OVERHEAD + 3 * 256;
        const pixelBitWidth = _getPixelBitWidth(globalPalette);
        frames.forEach((frame)=>{
            sizeEst += _getFrameSizeEst(frame, pixelBitWidth);
        });
        return sizeEst;
    }
    _getSizeEstimateLocal(palettes, frames) {
        if (this._testInitialBufferSize > 0) {
            return this._testInitialBufferSize;
        }
        let sizeEst = PER_GIF_OVERHEAD;
        for(let i = 0; i < frames.length; ++i){
            const palette2 = palettes[i];
            const pixelBitWidth = _getPixelBitWidth(palette2);
            sizeEst += _getFrameSizeEst(frames[i], pixelBitWidth);
        }
        return sizeEst;
    }
};
exports2.GifCodec = GifCodec2;
function _colorLookupLinear(colors, color) {
    const index = colors.indexOf(color);
    return index === -1 ? null : index;
}
function _colorLookupBinary(colors, color) {
    var lo2 = 0, hi2 = colors.length - 1, mid;
    while(lo2 <= hi2){
        mid = Math.floor((lo2 + hi2) / 2);
        if (colors[mid] > color) hi2 = mid - 1;
        else if (colors[mid] < color) lo2 = mid + 1;
        else return mid;
    }
    return null;
}
function _encodeGlobal(frames, spec, bufferSizeEst, globalPalette) {
    const extendedGlobalPalette = {
        colors: globalPalette.colors.slice(),
        usesTransparency: globalPalette.usesTransparency
    };
    _extendPaletteToPowerOf2(extendedGlobalPalette);
    const options2 = {
        palette: extendedGlobalPalette.colors,
        loop: spec.loops
    };
    let buffer = new Buffer(bufferSizeEst);
    let gifWriter;
    try {
        gifWriter = new Omggif.GifWriter(buffer, spec.width, spec.height, options2);
    } catch (err) {
        throw new GifError2(err);
    }
    for(let i = 0; i < frames.length; ++i){
        buffer = _writeFrame(gifWriter, i, frames[i], globalPalette, false);
    }
    return new Gif(buffer.slice(0, gifWriter.end()), frames, spec);
}
function _encodeLocal(frames, spec, bufferSizeEst, localPalettes) {
    const options2 = {
        loop: spec.loops
    };
    let buffer = new Buffer(bufferSizeEst);
    let gifWriter;
    try {
        gifWriter = new Omggif.GifWriter(buffer, spec.width, spec.height, options2);
    } catch (err) {
        throw new GifError2(err);
    }
    for(let i = 0; i < frames.length; ++i){
        buffer = _writeFrame(gifWriter, i, frames[i], localPalettes[i], true);
    }
    return new Gif(buffer.slice(0, gifWriter.end()), frames, spec);
}
function _extendPaletteToPowerOf2(palette2) {
    const colors = palette2.colors;
    if (palette2.usesTransparency) {
        colors.push(0);
    }
    const colorCount = colors.length;
    let powerOf2 = 2;
    while(colorCount > powerOf2){
        powerOf2 <<= 1;
    }
    colors.length = powerOf2;
    colors.fill(0, colorCount);
}
function _getFrameSizeEst(frame, pixelBitWidth) {
    let byteLength2 = frame.bitmap.width * frame.bitmap.height;
    byteLength2 = Math.ceil(byteLength2 * pixelBitWidth / 8);
    byteLength2 += Math.ceil(byteLength2 / 255);
    return PER_FRAME_OVERHEAD + byteLength2 + 3 * 256;
}
function _getIndexedImage(frameIndex, frame, palette2) {
    const colors = palette2.colors;
    const colorToIndexFunc = colors.length <= 8 ? (_colorLookupLinear) : _colorLookupBinary;
    const colorBuffer = frame.bitmap.data;
    const indexBuffer = new Buffer(colorBuffer.length / 4);
    let transparentIndex = colors.length;
    let i = 0, j2 = 0;
    while(i < colorBuffer.length){
        if (colorBuffer[i + 3] !== 0) {
            const color = colorBuffer.readUInt32BE(i, true) >> 8 & 16777215;
            indexBuffer[j2] = colorToIndexFunc(colors, color);
        } else {
            indexBuffer[j2] = transparentIndex;
        }
        i += 4;
        ++j2;
    }
    if (palette2.usesTransparency) {
        if (transparentIndex === 256) {
            throw new GifError2(`Frame ${frameIndex} already has 256 colorsand so can't use transparency`);
        }
    } else {
        transparentIndex = null;
    }
    return {
        buffer: indexBuffer,
        transparentIndex
    };
}
function _getPixelBitWidth(palette2) {
    let indexCount = palette2.indexCount;
    let pixelBitWidth = 0;
    --indexCount;
    while(indexCount){
        ++pixelBitWidth;
        indexCount >>= 1;
    }
    return pixelBitWidth > 0 ? pixelBitWidth : 1;
}
function _writeFrame(gifWriter, frameIndex, frame, palette2, isLocalPalette) {
    if (frame.interlaced) {
        throw new GifError2("writing interlaced GIFs is not supported");
    }
    const frameInfo = _getIndexedImage(frameIndex, frame, palette2);
    const options2 = {
        delay: frame.delayCentisecs,
        disposal: frame.disposalMethod,
        transparent: frameInfo.transparentIndex
    };
    if (isLocalPalette) {
        _extendPaletteToPowerOf2(palette2);
        options2.palette = palette2.colors;
    }
    try {
        let buffer = gifWriter.getOutputBuffer();
        let startOfFrame = gifWriter.getOutputBufferPosition();
        let endOfFrame;
        let tryAgain = true;
        while(tryAgain){
            endOfFrame = gifWriter.addFrame(frame.xOffset, frame.yOffset, frame.bitmap.width, frame.bitmap.height, frameInfo.buffer, options2);
            tryAgain = false;
            if (endOfFrame >= buffer.length - 1) {
                const biggerBuffer = new Buffer(buffer.length * 1.5);
                buffer.copy(biggerBuffer);
                gifWriter.setOutputBuffer(biggerBuffer);
                gifWriter.setOutputBufferPosition(startOfFrame);
                buffer = biggerBuffer;
                tryAgain = true;
            }
        }
        return buffer;
    } catch (err) {
        throw new GifError2(err);
    }
}

return exports2;
}
