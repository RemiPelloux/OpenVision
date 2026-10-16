import { require_type } from "../type.js";
var __wakaru_require_timestamp2_cache;
export function require_timestamp2() {
if (__wakaru_require_timestamp2_cache) return __wakaru_require_timestamp2_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_timestamp2_cache = module2;
"use strict";
var Type3 = require_type();
var YAML_DATE_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$");
var YAML_TIMESTAMP_REGEXP = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
function resolveYamlTimestamp(data) {
    if (data === null) return false;
    if (YAML_DATE_REGEXP.exec(data) !== null) return true;
    if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
    return false;
}
function constructYamlTimestamp(data) {
    var match2, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date4;
    match2 = YAML_DATE_REGEXP.exec(data);
    if (match2 === null) match2 = YAML_TIMESTAMP_REGEXP.exec(data);
    if (match2 === null) throw new Error("Date resolve error");
    year = +match2[1];
    month = +match2[2] - 1;
    day = +match2[3];
    if (!match2[4]) {
        return new Date(Date.UTC(year, month, day));
    }
    hour = +match2[4];
    minute = +match2[5];
    second = +match2[6];
    if (match2[7]) {
        fraction = match2[7].slice(0, 3);
        while(fraction.length < 3){
            fraction += "0";
        }
        fraction = +fraction;
    }
    if (match2[9]) {
        tz_hour = +match2[10];
        tz_minute = +(match2[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match2[9] === "-") delta = -delta;
    }
    date4 = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
    if (delta) date4.setTime(date4.getTime() - delta);
    return date4;
}
function representYamlTimestamp(object4) {
    return object4.toISOString();
}
module2.exports = new Type3("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: resolveYamlTimestamp,
    construct: constructYamlTimestamp,
    instanceOf: Date,
    represent: representYamlTimestamp
});

return module2.exports;
}
