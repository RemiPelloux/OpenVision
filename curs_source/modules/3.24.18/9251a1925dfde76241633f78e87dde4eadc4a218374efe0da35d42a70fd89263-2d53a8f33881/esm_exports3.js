import { import_jpeg_js } from "./node_modules/.pnpm/@jimp+js-jpeg@1.6.0/node_modules/@jimp/js-jpeg/dist/esm/index.js";
import { BmpDecoder } from "./node_modules/.pnpm/bmp-ts@1.0.9/node_modules/bmp-ts/dist/esm/decoder.js";
import { BmpEncoder } from "./node_modules/.pnpm/bmp-ts@1.0.9/node_modules/bmp-ts/dist/esm/encoder.js";
export function jpeg() {
    return {
        mime: "image/jpeg",
        encode: (bitmap, { quality: quality2 = 100 } = {})=>import_jpeg_js.default.encode(bitmap, quality2).data,
        decode: (data, options2)=>import_jpeg_js.default.decode(data, options2)
    };
}
export function maskColor(maskRed, maskGreen, maskBlue, maskAlpha) {
    const maskRedR = ~maskRed + 1 & maskRed;
    const maskGreenR = ~maskGreen + 1 & maskGreen;
    const maskBlueR = ~maskBlue + 1 & maskBlue;
    const maskAlphaR = ~maskAlpha + 1 & maskAlpha;
    const shiftedMaskRedL = maskRed / maskRedR + 1;
    const shiftedMaskGreenL = maskGreen / maskGreenR + 1;
    const shiftedMaskBlueL = maskBlue / maskBlueR + 1;
    const shiftedMaskAlphaL = maskAlpha / maskAlphaR + 1;
    return {
        shiftRed: (x)=>(x & maskRed) / maskRedR * 256 / shiftedMaskRedL,
        shiftGreen: (x)=>(x & maskGreen) / maskGreenR * 256 / shiftedMaskGreenL,
        shiftBlue: (x)=>(x & maskBlue) / maskBlueR * 256 / shiftedMaskBlueL,
        shiftAlpha: maskAlpha !== 0 ? (x)=>(x & maskAlpha) / maskAlphaR * 256 / shiftedMaskAlphaL : ()=>255
    };
}
export function createInteger(numbers) {
    return numbers.reduce((final, n)=>final << 1 | n, 0);
}
export function createColor(color) {
    return color.quad << 24 | color.red << 16 | color.green << 8 | color.blue;
}
export function decode2(bmpData, options2) {
    return new BmpDecoder(bmpData, options2);
}
export function encode(imgData) {
    return new BmpEncoder(imgData);
}

export var esm_exports3 = {};
Object.defineProperty(esm_exports3, "default", {
    enumerable: true,
    get: ()=>jpeg
});
