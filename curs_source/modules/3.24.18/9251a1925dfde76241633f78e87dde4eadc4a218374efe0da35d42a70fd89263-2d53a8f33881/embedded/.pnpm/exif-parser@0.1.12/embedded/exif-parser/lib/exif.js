var __wakaru_require_exif_cache;
export function require_exif() {
if (__wakaru_require_exif_cache) return __wakaru_require_exif_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_exif_cache = module2;
function readExifValue(format2, stream3) {
    switch(format2){
        case 1:
            return stream3.nextUInt8();
        case 3:
            return stream3.nextUInt16();
        case 4:
            return stream3.nextUInt32();
        case 5:
            return [
                stream3.nextUInt32(),
                stream3.nextUInt32()
            ];
        case 6:
            return stream3.nextInt8();
        case 8:
            return stream3.nextUInt16();
        case 9:
            return stream3.nextUInt32();
        case 10:
            return [
                stream3.nextInt32(),
                stream3.nextInt32()
            ];
        case 11:
            return stream3.nextFloat();
        case 12:
            return stream3.nextDouble();
        default:
            throw new Error("Invalid format while decoding: " + format2);
    }
}
function getBytesPerComponent(format2) {
    switch(format2){
        case 1:
        case 2:
        case 6:
        case 7:
            return 1;
        case 3:
        case 8:
            return 2;
        case 4:
        case 9:
        case 11:
            return 4;
        case 5:
        case 10:
        case 12:
            return 8;
        default:
            return 0;
    }
}
function readExifTag(tiffMarker, stream3) {
    var tagType = stream3.nextUInt16(), format2 = stream3.nextUInt16(), bytesPerComponent = getBytesPerComponent(format2), components = stream3.nextUInt32(), valueBytes = bytesPerComponent * components, values, value, c;
    if (valueBytes > 4) {
        stream3 = tiffMarker.openWithOffset(stream3.nextUInt32());
    }
    if (format2 === 2) {
        values = stream3.nextString(components);
        var lastNull = values.indexOf("\0");
        if (lastNull !== -1) {
            values = values.substr(0, lastNull);
        }
    } else if (format2 === 7) {
        values = stream3.nextBuffer(components);
    } else if (format2 !== 0) {
        values = [];
        for(c = 0; c < components; ++c){
            values.push(readExifValue(format2, stream3));
        }
    }
    if (valueBytes < 4) {
        stream3.skip(4 - valueBytes);
    }
    return [
        tagType,
        values,
        format2
    ];
}
function readIFDSection(tiffMarker, stream3, iterator) {
    var numberOfEntries = stream3.nextUInt16(), tag, i;
    for(i = 0; i < numberOfEntries; ++i){
        tag = readExifTag(tiffMarker, stream3);
        iterator(tag[0], tag[1], tag[2]);
    }
}
function readHeader(stream3) {
    var exifHeader = stream3.nextString(6);
    if (exifHeader !== "Exif\0\0") {
        throw new Error("Invalid EXIF header");
    }
    var tiffMarker = stream3.mark();
    var tiffHeader = stream3.nextUInt16();
    if (tiffHeader === 18761) {
        stream3.setBigEndian(false);
    } else if (tiffHeader === 19789) {
        stream3.setBigEndian(true);
    } else {
        throw new Error("Invalid TIFF header");
    }
    if (stream3.nextUInt16() !== 42) {
        throw new Error("Invalid TIFF data");
    }
    return tiffMarker;
}
module2.exports = {
    IFD0: 1,
    IFD1: 2,
    GPSIFD: 3,
    SubIFD: 4,
    InteropIFD: 5,
    parseTags: function(stream3, iterator) {
        var tiffMarker;
        try {
            tiffMarker = readHeader(stream3);
        } catch (e) {
            return false;
        }
        var subIfdOffset, gpsOffset, interopOffset;
        var ifd0Stream = tiffMarker.openWithOffset(stream3.nextUInt32()), IFD0 = this.IFD0;
        readIFDSection(tiffMarker, ifd0Stream, function(tagType, value, format2) {
            switch(tagType){
                case 34853:
                    gpsOffset = value[0];
                    break;
                case 34665:
                    subIfdOffset = value[0];
                    break;
                default:
                    iterator(IFD0, tagType, value, format2);
                    break;
            }
        });
        var ifd1Offset = ifd0Stream.nextUInt32();
        if (ifd1Offset !== 0) {
            var ifd1Stream = tiffMarker.openWithOffset(ifd1Offset);
            readIFDSection(tiffMarker, ifd1Stream, iterator.bind(null, this.IFD1));
        }
        if (gpsOffset) {
            var gpsStream = tiffMarker.openWithOffset(gpsOffset);
            readIFDSection(tiffMarker, gpsStream, iterator.bind(null, this.GPSIFD));
        }
        if (subIfdOffset) {
            var subIfdStream = tiffMarker.openWithOffset(subIfdOffset), InteropIFD = this.InteropIFD;
            readIFDSection(tiffMarker, subIfdStream, function(tagType, value, format2) {
                if (tagType === 40965) {
                    interopOffset = value[0];
                } else {
                    iterator(InteropIFD, tagType, value, format2);
                }
            });
        }
        if (interopOffset) {
            var interopStream = tiffMarker.openWithOffset(interopOffset);
            readIFDSection(tiffMarker, interopStream, iterator.bind(null, this.InteropIFD));
        }
        return true;
    }
};

return module2.exports;
}
