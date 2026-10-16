import { import_utif2 } from "./node_modules/.pnpm/@jimp+js-tiff@1.6.0/node_modules/@jimp/js-tiff/dist/esm/index.js";
function getDimensionValue(dimension) {
    if (typeof dimension === "number") {
        return dimension;
    }
    if (dimension instanceof Uint8Array) {
        return dimension[0];
    }
    if (typeof dimension[0] === "string") {
        return parseInt(dimension[0]);
    }
    return dimension[0];
}
export function tiff() {
    return {
        mime: "image/tiff",
        encode: (bitmap)=>{
            const tiff2 = import_utif2.default.encodeImage(bitmap.data, bitmap.width, bitmap.height);
            return Buffer.from(tiff2);
        },
        decode: (data)=>{
            const ifds = import_utif2.default.decode(data);
            const page = ifds[0];
            if (!page) {
                throw new Error("No page found in TIFF");
            }
            if (!page.t256) {
                throw new Error("No image width found in TIFF");
            }
            if (!page.t257) {
                throw new Error("No image height found in TIFF");
            }
            ifds.forEach((ifd)=>{
                import_utif2.default.decodeImage(data, ifd);
            });
            const rgba = import_utif2.default.toRGBA8(page);
            return {
                data: Buffer.from(rgba),
                width: getDimensionValue(page.t256),
                height: getDimensionValue(page.t257)
            };
        }
    };
}
export function Resize(widthOriginal, heightOriginal, targetWidth, targetHeight, blendAlpha, interpolationPass, resizeCallback) {
    this.widthOriginal = Math.abs(Math.floor(widthOriginal) || 0);
    this.heightOriginal = Math.abs(Math.floor(heightOriginal) || 0);
    this.targetWidth = Math.abs(Math.floor(targetWidth) || 0);
    this.targetHeight = Math.abs(Math.floor(targetHeight) || 0);
    this.colorChannels = blendAlpha ? 4 : 3;
    this.interpolationPass = Boolean(interpolationPass);
    this.resizeCallback = typeof resizeCallback === "function" ? resizeCallback : function() {};
    this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels;
    this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels;
    this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels;
    this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal;
    this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight;
    this.initialize();
}

export var esm_exports7 = {};
Object.defineProperty(esm_exports7, "default", {
    enumerable: true,
    get: ()=>tiff
});
