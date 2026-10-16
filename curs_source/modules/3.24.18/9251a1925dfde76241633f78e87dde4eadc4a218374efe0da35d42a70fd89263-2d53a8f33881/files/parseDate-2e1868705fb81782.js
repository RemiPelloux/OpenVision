var __wakaru_require_parseDate_cache;
export function require_parseDate() {
if (__wakaru_require_parseDate_cache) return __wakaru_require_parseDate_cache;
var exports2 = {};
__wakaru_require_parseDate_cache = exports2;
"use strict";
Object.defineProperty(exports2, "__esModule", {
    value: true
});
exports2.parseDate = parseDate;
var DATE_DELIM = /[\x09\x20-\x2F\x3B-\x40\x5B-\x60\x7B-\x7E]/;
var MONTH_TO_NUM = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11
};
function parseDigits(token, minDigits, maxDigits, trailingOK) {
    let count2 = 0;
    while(count2 < token.length){
        const c = token.charCodeAt(count2);
        if (c <= 47 || c >= 58) {
            break;
        }
        count2++;
    }
    if (count2 < minDigits || count2 > maxDigits) {
        return;
    }
    if (!trailingOK && count2 != token.length) {
        return;
    }
    return parseInt(token.slice(0, count2), 10);
}
function parseTime(token) {
    const parts = token.split(":");
    const result = [
        0,
        0,
        0
    ];
    if (parts.length !== 3) {
        return;
    }
    for(let i = 0; i < 3; i++){
        const trailingOK = i == 2;
        const numPart = parts[i];
        if (numPart === void 0) {
            return;
        }
        const num = parseDigits(numPart, 1, 2, trailingOK);
        if (num === void 0) {
            return;
        }
        result[i] = num;
    }
    return result;
}
function parseMonth(token) {
    token = String(token).slice(0, 3).toLowerCase();
    switch(token){
        case "jan":
            return MONTH_TO_NUM.jan;
        case "feb":
            return MONTH_TO_NUM.feb;
        case "mar":
            return MONTH_TO_NUM.mar;
        case "apr":
            return MONTH_TO_NUM.apr;
        case "may":
            return MONTH_TO_NUM.may;
        case "jun":
            return MONTH_TO_NUM.jun;
        case "jul":
            return MONTH_TO_NUM.jul;
        case "aug":
            return MONTH_TO_NUM.aug;
        case "sep":
            return MONTH_TO_NUM.sep;
        case "oct":
            return MONTH_TO_NUM.oct;
        case "nov":
            return MONTH_TO_NUM.nov;
        case "dec":
            return MONTH_TO_NUM.dec;
        default:
            return;
    }
}
function parseDate(cookieDate) {
    if (!cookieDate) {
        return;
    }
    const tokens = cookieDate.split(DATE_DELIM);
    let hour;
    let minute;
    let second;
    let dayOfMonth;
    let month;
    let year;
    for(let i = 0; i < tokens.length; i++){
        const token = (tokens[i] ?? "").trim();
        if (!token.length) {
            continue;
        }
        if (second === void 0) {
            const result = parseTime(token);
            if (result) {
                hour = result[0];
                minute = result[1];
                second = result[2];
                continue;
            }
        }
        if (dayOfMonth === void 0) {
            const result = parseDigits(token, 1, 2, true);
            if (result !== void 0) {
                dayOfMonth = result;
                continue;
            }
        }
        if (month === void 0) {
            const result = parseMonth(token);
            if (result !== void 0) {
                month = result;
                continue;
            }
        }
        if (year === void 0) {
            const result = parseDigits(token, 2, 4, true);
            if (result !== void 0) {
                year = result;
                if (year >= 70 && year <= 99) {
                    year += 1900;
                } else if (year >= 0 && year <= 69) {
                    year += 2e3;
                }
            }
        }
    }
    if (dayOfMonth === void 0 || month === void 0 || year === void 0 || hour === void 0 || minute === void 0 || second === void 0 || dayOfMonth < 1 || dayOfMonth > 31 || year < 1601 || hour > 23 || minute > 59 || second > 59) {
        return;
    }
    return new Date(Date.UTC(year, month, dayOfMonth, hour, minute, second));
}

return exports2;
}
