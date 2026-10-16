import { require_date } from "./date.js";
import { require_exif } from "./exif.js";
var __wakaru_require_simplify_cache;
export function require_simplify() {
if (__wakaru_require_simplify_cache) return __wakaru_require_simplify_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_simplify_cache = module2;
var exif = require_exif();
var date4 = require_date();
var degreeTags = [
    {
        section: exif.GPSIFD,
        type: 2,
        name: "GPSLatitude",
        refType: 1,
        refName: "GPSLatitudeRef",
        posVal: "N"
    },
    {
        section: exif.GPSIFD,
        type: 4,
        name: "GPSLongitude",
        refType: 3,
        refName: "GPSLongitudeRef",
        posVal: "E"
    }
];
var dateTags = [
    {
        section: exif.SubIFD,
        type: 306,
        name: "ModifyDate"
    },
    {
        section: exif.SubIFD,
        type: 36867,
        name: "DateTimeOriginal"
    },
    {
        section: exif.SubIFD,
        type: 36868,
        name: "CreateDate"
    },
    {
        section: exif.SubIFD,
        type: 306,
        name: "ModifyDate"
    }
];
module2.exports = {
    castDegreeValues: function(getTagValue, setTagValue) {
        degreeTags.forEach(function(t) {
            var degreeVal = getTagValue(t);
            if (degreeVal) {
                var degreeRef = getTagValue({
                    section: t.section,
                    type: t.refType,
                    name: t.refName
                });
                var degreeNumRef = degreeRef === t.posVal ? 1 : -1;
                var degree = (degreeVal[0] + degreeVal[1] / 60 + degreeVal[2] / 3600) * degreeNumRef;
                setTagValue(t, degree);
            }
        });
    },
    castDateValues: function(getTagValue, setTagValue) {
        dateTags.forEach(function(t) {
            var dateStrVal = getTagValue(t);
            if (dateStrVal) {
                var timestamp2 = date4.parseExifDate(dateStrVal);
                if (typeof timestamp2 !== "undefined") {
                    setTagValue(t, timestamp2);
                }
            }
        });
    },
    simplifyValue: function(values, format2) {
        if (Array.isArray(values)) {
            values = values.map(function(value) {
                if (format2 === 10 || format2 === 5) {
                    return value[0] / value[1];
                }
                return value;
            });
            if (values.length === 1) {
                values = values[0];
            }
        }
        return values;
    }
};

return module2.exports;
}
