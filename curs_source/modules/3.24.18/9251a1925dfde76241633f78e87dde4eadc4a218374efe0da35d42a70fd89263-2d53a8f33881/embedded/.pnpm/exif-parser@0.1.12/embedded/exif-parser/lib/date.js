var __wakaru_require_date_cache;
export function require_date() {
if (__wakaru_require_date_cache) return __wakaru_require_date_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_date_cache = module2;
function parseNumber(s3) {
    return parseInt(s3, 10);
}
var hours = 3600;
var minutes = 60;
function parseDateTimeParts(dateParts, timeParts) {
    dateParts = dateParts.map(parseNumber);
    timeParts = timeParts.map(parseNumber);
    var year = dateParts[0];
    var month = dateParts[1] - 1;
    var day = dateParts[2];
    var hours2 = timeParts[0];
    var minutes2 = timeParts[1];
    var seconds = timeParts[2];
    var date4 = Date.UTC(year, month, day, hours2, minutes2, seconds, 0);
    var timestamp2 = date4 / 1e3;
    return timestamp2;
}
function parseDateWithTimezoneFormat(dateTimeStr) {
    var dateParts = dateTimeStr.substr(0, 10).split("-");
    var timeParts = dateTimeStr.substr(11, 8).split(":");
    var timezoneStr = dateTimeStr.substr(19, 6);
    var timezoneParts = timezoneStr.split(":").map(parseNumber);
    var timezoneOffset = timezoneParts[0] * hours + timezoneParts[1] * minutes;
    var timestamp2 = parseDateTimeParts(dateParts, timeParts);
    timestamp2 -= timezoneOffset;
    if (typeof timestamp2 === "number" && !isNaN(timestamp2)) {
        return timestamp2;
    }
}
function parseDateWithSpecFormat(dateTimeStr) {
    var parts = dateTimeStr.split(" "), dateParts = parts[0].split(":"), timeParts = parts[1].split(":");
    var timestamp2 = parseDateTimeParts(dateParts, timeParts);
    if (typeof timestamp2 === "number" && !isNaN(timestamp2)) {
        return timestamp2;
    }
}
function parseExifDate(dateTimeStr) {
    var isSpecFormat = dateTimeStr.length === 19 && dateTimeStr.charAt(4) === ":";
    var isTimezoneFormat = dateTimeStr.length === 25 && dateTimeStr.charAt(10) === "T";
    var timestamp2;
    if (isTimezoneFormat) {
        return parseDateWithTimezoneFormat(dateTimeStr);
    } else if (isSpecFormat) {
        return parseDateWithSpecFormat(dateTimeStr);
    }
}
module2.exports = {
    parseDateWithSpecFormat,
    parseDateWithTimezoneFormat,
    parseExifDate
};

return module2.exports;
}
