import { limit255 } from "./dist_exports2.js";
import { names2 } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/utils/composite-modes.js";
import { BlendMode } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/utils/constants.js";
import { import_exif_parser } from "./node_modules/.pnpm/@jimp+core@1.6.0/node_modules/@jimp/core/dist/esm/utils/image-bitmap.js";
import { Edge } from "./node_modules/.pnpm/@jimp+types@1.6.0/node_modules/@jimp/types/dist/esm/index.js";
export function srcOver(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const r = (src.r * src.a + dst.r * dst.a * (1 - src.a)) / a;
    const g2 = (src.g * src.a + dst.g * dst.a * (1 - src.a)) / a;
    const b2 = (src.b * src.a + dst.b * dst.a * (1 - src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function dstOver(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const r = (dst.r * dst.a + src.r * src.a * (1 - dst.a)) / a;
    const g2 = (dst.g * dst.a + src.g * src.a * (1 - dst.a)) / a;
    const b2 = (dst.b * dst.a + src.b * src.a * (1 - dst.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function multiply(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (sra * dra + sra * (1 - dst.a) + dra * (1 - src.a)) / a;
    const g2 = (sga * dga + sga * (1 - dst.a) + dga * (1 - src.a)) / a;
    const b2 = (sba * dba + sba * (1 - dst.a) + dba * (1 - src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function add(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (sra + dra) / a;
    const g2 = (sga + dga) / a;
    const b2 = (sba + dba) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function screen(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (sra * dst.a + dra * src.a - sra * dra + sra * (1 - dst.a) + dra * (1 - src.a)) / a;
    const g2 = (sga * dst.a + dga * src.a - sga * dga + sga * (1 - dst.a) + dga * (1 - src.a)) / a;
    const b2 = (sba * dst.a + dba * src.a - sba * dba + sba * (1 - dst.a) + dba * (1 - src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function overlay(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (2 * dra <= dst.a ? 2 * sra * dra + sra * (1 - dst.a) + dra * (1 - src.a) : sra * (1 + dst.a) + dra * (1 + src.a) - 2 * dra * sra - dst.a * src.a) / a;
    const g2 = (2 * dga <= dst.a ? 2 * sga * dga + sga * (1 - dst.a) + dga * (1 - src.a) : sga * (1 + dst.a) + dga * (1 + src.a) - 2 * dga * sga - dst.a * src.a) / a;
    const b2 = (2 * dba <= dst.a ? 2 * sba * dba + sba * (1 - dst.a) + dba * (1 - src.a) : sba * (1 + dst.a) + dba * (1 + src.a) - 2 * dba * sba - dst.a * src.a) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function darken2(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (Math.min(sra * dst.a, dra * src.a) + sra * (1 - dst.a) + dra * (1 - src.a)) / a;
    const g2 = (Math.min(sga * dst.a, dga * src.a) + sga * (1 - dst.a) + dga * (1 - src.a)) / a;
    const b2 = (Math.min(sba * dst.a, dba * src.a) + sba * (1 - dst.a) + dba * (1 - src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function lighten2(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (Math.max(sra * dst.a, dra * src.a) + sra * (1 - dst.a) + dra * (1 - src.a)) / a;
    const g2 = (Math.max(sga * dst.a, dga * src.a) + sga * (1 - dst.a) + dga * (1 - src.a)) / a;
    const b2 = (Math.max(sba * dst.a, dba * src.a) + sba * (1 - dst.a) + dba * (1 - src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function hardLight(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (2 * sra <= src.a ? 2 * sra * dra + sra * (1 - dst.a) + dra * (1 - src.a) : sra * (1 + dst.a) + dra * (1 + src.a) - 2 * dra * sra - dst.a * src.a) / a;
    const g2 = (2 * sga <= src.a ? 2 * sga * dga + sga * (1 - dst.a) + dga * (1 - src.a) : sga * (1 + dst.a) + dga * (1 + src.a) - 2 * dga * sga - dst.a * src.a) / a;
    const b2 = (2 * sba <= src.a ? 2 * sba * dba + sba * (1 - dst.a) + dba * (1 - src.a) : sba * (1 + dst.a) + dba * (1 + src.a) - 2 * dba * sba - dst.a * src.a) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function difference(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (sra + dra - 2 * Math.min(sra * dst.a, dra * src.a)) / a;
    const g2 = (sga + dga - 2 * Math.min(sga * dst.a, dga * src.a)) / a;
    const b2 = (sba + dba - 2 * Math.min(sba * dst.a, dba * src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function exclusion(src, dst, ops = 1) {
    src.a *= ops;
    const a = dst.a + src.a - dst.a * src.a;
    const sra = src.r * src.a;
    const sga = src.g * src.a;
    const sba = src.b * src.a;
    const dra = dst.r * dst.a;
    const dga = dst.g * dst.a;
    const dba = dst.b * dst.a;
    const r = (sra * dst.a + dra * src.a - 2 * sra * dra + sra * (1 - dst.a) + dra * (1 - src.a)) / a;
    const g2 = (sga * dst.a + dga * src.a - 2 * sga * dga + sga * (1 - dst.a) + dga * (1 - src.a)) / a;
    const b2 = (sba * dst.a + dba * src.a - 2 * sba * dba + sba * (1 - dst.a) + dba * (1 - src.a)) / a;
    return {
        r,
        g: g2,
        b: b2,
        a
    };
}
export function composite(baseImage, src, x = 0, y = 0, options2 = {}) {
    if (!(src instanceof baseImage.constructor)) {
        throw new Error("The source must be a Jimp image");
    }
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x and y must be numbers");
    }
    const { mode = BlendMode.SRC_OVER } = options2;
    let { opacitySource = 1, opacityDest = 1 } = options2;
    if (typeof opacitySource !== "number" || opacitySource < 0 || opacitySource > 1) {
        opacitySource = 1;
    }
    if (typeof opacityDest !== "number" || opacityDest < 0 || opacityDest > 1) {
        opacityDest = 1;
    }
    const blendmode = composite_modes_exports[mode];
    x = Math.round(x);
    y = Math.round(y);
    if (opacityDest !== 1) {
        baseImage.scan((_2, __, idx)=>{
            const v2 = baseImage.bitmap.data[idx + 3] * opacityDest;
            baseImage.bitmap.data[idx + 3] = v2;
        });
    }
    src.scan((sx, sy, idx)=>{
        const dstIdx = baseImage.getPixelIndex(x + sx, y + sy, Edge.CROP);
        if (dstIdx === -1) {
            return;
        }
        const blended = blendmode({
            r: src.bitmap.data[idx + 0] / 255,
            g: src.bitmap.data[idx + 1] / 255,
            b: src.bitmap.data[idx + 2] / 255,
            a: src.bitmap.data[idx + 3] / 255
        }, {
            r: baseImage.bitmap.data[dstIdx + 0] / 255,
            g: baseImage.bitmap.data[dstIdx + 1] / 255,
            b: baseImage.bitmap.data[dstIdx + 2] / 255,
            a: baseImage.bitmap.data[dstIdx + 3] / 255
        }, opacitySource);
        baseImage.bitmap.data[dstIdx + 0] = limit255(blended.r * 255);
        baseImage.bitmap.data[dstIdx + 1] = limit255(blended.g * 255);
        baseImage.bitmap.data[dstIdx + 2] = limit255(blended.b * 255);
        baseImage.bitmap.data[dstIdx + 3] = limit255(blended.a * 255);
    });
    return baseImage;
}
export function getExifOrientation(img) {
    const _exif = img._exif;
    return _exif && _exif.tags && _exif.tags.Orientation || 1;
}
function getExifOrientationTransformation(img) {
    const w2 = img.bitmap.width;
    const h = img.bitmap.height;
    switch(getExifOrientation(img)){
        case 1:
            return null;
        case 2:
            return function(x, y) {
                return [
                    w2 - x - 1,
                    y
                ];
            };
        case 3:
            return function(x, y) {
                return [
                    w2 - x - 1,
                    h - y - 1
                ];
            };
        case 4:
            return function(x, y) {
                return [
                    x,
                    h - y - 1
                ];
            };
        case 5:
            return function(x, y) {
                return [
                    y,
                    x
                ];
            };
        case 6:
            return function(x, y) {
                return [
                    y,
                    h - x - 1
                ];
            };
        case 7:
            return function(x, y) {
                return [
                    w2 - y - 1,
                    h - x - 1
                ];
            };
        case 8:
            return function(x, y) {
                return [
                    w2 - y - 1,
                    x
                ];
            };
        default:
            return null;
    }
}
function transformBitmap(img, width, height, transformation) {
    const _data = img.bitmap.data;
    const _width = img.bitmap.width;
    const data = Buffer.alloc(_data.length);
    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            const [_x, _y] = transformation(x, y);
            const idx = width * y + x << 2;
            const _idx = _width * _y + _x << 2;
            const pixel2 = _data.readUInt32BE(_idx);
            data.writeUInt32BE(pixel2, idx);
        }
    }
    img.bitmap.data = data;
    img.bitmap.width = width;
    img.bitmap.height = height;
    img._exif.tags.Orientation = 1;
}
function exifRotate(img) {
    if (getExifOrientation(img) < 2) {
        return;
    }
    const transformation = getExifOrientationTransformation(img);
    const swapDimensions = getExifOrientation(img) > 4;
    const newWidth = swapDimensions ? img.bitmap.height : img.bitmap.width;
    const newHeight = swapDimensions ? img.bitmap.width : img.bitmap.height;
    if (transformation) {
        transformBitmap(img, newWidth, newHeight, transformation);
    }
}
export async function attemptExifRotate(image2, buffer) {
    try {
        image2._exif = import_exif_parser.default.create(buffer).parse();
        exifRotate(image2);
    } catch  {}
}
export { names2 };

export var composite_modes_exports = {};
Object.defineProperty(composite_modes_exports, "add", {
    enumerable: true,
    get: ()=>add
});
Object.defineProperty(composite_modes_exports, "darken", {
    enumerable: true,
    get: ()=>darken2
});
Object.defineProperty(composite_modes_exports, "difference", {
    enumerable: true,
    get: ()=>difference
});
Object.defineProperty(composite_modes_exports, "dstOver", {
    enumerable: true,
    get: ()=>dstOver
});
Object.defineProperty(composite_modes_exports, "exclusion", {
    enumerable: true,
    get: ()=>exclusion
});
Object.defineProperty(composite_modes_exports, "hardLight", {
    enumerable: true,
    get: ()=>hardLight
});
Object.defineProperty(composite_modes_exports, "lighten", {
    enumerable: true,
    get: ()=>lighten2
});
Object.defineProperty(composite_modes_exports, "multiply", {
    enumerable: true,
    get: ()=>multiply
});
Object.defineProperty(composite_modes_exports, "names", {
    enumerable: true,
    get: ()=>names2
});
Object.defineProperty(composite_modes_exports, "overlay", {
    enumerable: true,
    get: ()=>overlay
});
Object.defineProperty(composite_modes_exports, "screen", {
    enumerable: true,
    get: ()=>screen
});
Object.defineProperty(composite_modes_exports, "srcOver", {
    enumerable: true,
    get: ()=>srcOver
});
