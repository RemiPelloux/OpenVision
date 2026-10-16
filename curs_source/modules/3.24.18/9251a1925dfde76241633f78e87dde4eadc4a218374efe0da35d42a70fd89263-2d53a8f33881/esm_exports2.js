import { PNGColorType, PNGFilterType } from "./node_modules/.pnpm/@jimp+js-png@1.6.0/node_modules/@jimp/js-png/dist/esm/constants.js";
import { import_pngjs } from "./node_modules/.pnpm/@jimp+js-png@1.6.0/node_modules/@jimp/js-png/dist/esm/index.js";
export function png() {
    return {
        mime: "image/png",
        hasAlpha: true,
        encode: (bitmap, { deflateLevel = 9, deflateStrategy = 3, filterType = PNGFilterType.AUTO, colorType, inputHasAlpha = true, ...options2 } = {})=>{
            const png2 = new import_pngjs.PNG({
                width: bitmap.width,
                height: bitmap.height
            });
            png2.data = bitmap.data;
            return import_pngjs.PNG.sync.write(png2, {
                ...options2,
                deflateLevel,
                deflateStrategy,
                filterType,
                colorType: typeof colorType !== "undefined" ? colorType : inputHasAlpha ? PNGColorType.COLOR_ALPHA : PNGColorType.COLOR,
                inputHasAlpha
            });
        },
        decode: (data, options2)=>{
            const result = import_pngjs.PNG.sync.read(data, options2);
            return {
                data: result.data,
                width: result.width,
                height: result.height
            };
        }
    };
}
export { PNGColorType, PNGFilterType };

export var esm_exports2 = {};
Object.defineProperty(esm_exports2, "PNGColorType", {
    enumerable: true,
    get: ()=>PNGColorType
});
Object.defineProperty(esm_exports2, "PNGFilterType", {
    enumerable: true,
    get: ()=>PNGFilterType
});
Object.defineProperty(esm_exports2, "default", {
    enumerable: true,
    get: ()=>png
});
