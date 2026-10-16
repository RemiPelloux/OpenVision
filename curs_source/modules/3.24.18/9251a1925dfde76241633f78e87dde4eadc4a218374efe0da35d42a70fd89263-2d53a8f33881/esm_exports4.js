import { scan } from "./dist_exports2.js";
import { decode2, encode } from "./esm_exports3.js";
import { BmpCompression } from "./node_modules/.pnpm/bmp-ts@1.0.9/node_modules/bmp-ts/dist/esm/types.js";
function encode2(image2, options2 = {}) {
    scan({
        bitmap: image2
    }, 0, 0, image2.width, image2.height, function(_2, __, index) {
        const red = image2.data[index + 0];
        const green = image2.data[index + 1];
        const blue = image2.data[index + 2];
        const alpha = image2.data[index + 3];
        image2.data[index + 0] = alpha;
        image2.data[index + 1] = blue;
        image2.data[index + 2] = green;
        image2.data[index + 3] = red;
    });
    return encode({
        ...image2,
        ...options2
    }).data;
}
function decode3(data, options2) {
    const result = decode2(data, options2);
    scan({
        bitmap: result
    }, 0, 0, result.width, result.height, function(_2, __, index) {
        const blue = result.data[index + 1];
        const green = result.data[index + 2];
        const red = result.data[index + 3];
        result.data[index + 0] = red;
        result.data[index + 1] = green;
        result.data[index + 2] = blue;
        result.data[index + 3] = 255;
    });
    return result;
}
export function msBmp() {
    return {
        mime: "image/x-ms-bmp",
        encode: encode2,
        decode: decode3
    };
}
export function bmp() {
    return {
        mime: "image/bmp",
        encode: encode2,
        decode: decode3
    };
}
export { BmpCompression };

export var esm_exports4 = {};
Object.defineProperty(esm_exports4, "BmpCompression", {
    enumerable: true,
    get: ()=>BmpCompression
});
Object.defineProperty(esm_exports4, "default", {
    enumerable: true,
    get: ()=>bmp
});
Object.defineProperty(esm_exports4, "msBmp", {
    enumerable: true,
    get: ()=>msBmp
});
