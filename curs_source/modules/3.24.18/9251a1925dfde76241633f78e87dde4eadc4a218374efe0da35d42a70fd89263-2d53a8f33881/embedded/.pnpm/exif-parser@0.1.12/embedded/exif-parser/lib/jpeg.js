var __wakaru_require_jpeg_cache;
export function require_jpeg() {
if (__wakaru_require_jpeg_cache) return __wakaru_require_jpeg_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_jpeg_cache = module2;
module2.exports = {
    parseSections: function(stream3, iterator) {
        var len, markerType;
        stream3.setBigEndian(true);
        while(stream3.remainingLength() > 0 && markerType !== 218){
            if (stream3.nextUInt8() !== 255) {
                throw new Error("Invalid JPEG section offset");
            }
            markerType = stream3.nextUInt8();
            if (markerType >= 208 && markerType <= 217 || markerType === 218) {
                len = 0;
            } else {
                len = stream3.nextUInt16() - 2;
            }
            iterator(markerType, stream3.branch(0, len));
            stream3.skip(len);
        }
    },
    getSizeFromSOFSection: function(stream3) {
        stream3.skip(1);
        return {
            height: stream3.nextUInt16(),
            width: stream3.nextUInt16()
        };
    },
    getSectionName: function(markerType) {
        var name17, index;
        switch(markerType){
            case 216:
                name17 = "SOI";
                break;
            case 196:
                name17 = "DHT";
                break;
            case 219:
                name17 = "DQT";
                break;
            case 221:
                name17 = "DRI";
                break;
            case 218:
                name17 = "SOS";
                break;
            case 254:
                name17 = "COM";
                break;
            case 217:
                name17 = "EOI";
                break;
            default:
                if (markerType >= 224 && markerType <= 239) {
                    name17 = "APP";
                    index = markerType - 224;
                } else if (markerType >= 192 && markerType <= 207 && markerType !== 196 && markerType !== 200 && markerType !== 204) {
                    name17 = "SOF";
                    index = markerType - 192;
                } else if (markerType >= 208 && markerType <= 215) {
                    name17 = "RST";
                    index = markerType - 208;
                }
                break;
        }
        var nameStruct = {
            name: name17
        };
        if (typeof index === "number") {
            nameStruct.index = index;
        }
        return nameStruct;
    }
};

return module2.exports;
}
