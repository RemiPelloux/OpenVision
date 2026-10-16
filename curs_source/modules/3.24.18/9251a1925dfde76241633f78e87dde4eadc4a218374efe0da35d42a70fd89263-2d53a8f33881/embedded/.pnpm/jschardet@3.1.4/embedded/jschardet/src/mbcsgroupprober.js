import { require_big5prober } from "./big5prober.js";
import { require_charsetgroupprober } from "./charsetgroupprober.js";
import { require_eucjpprober } from "./eucjpprober.js";
import { require_euckrprober } from "./euckrprober.js";
import { require_euctwprober } from "./euctwprober.js";
import { require_gb2312prober } from "./gb2312prober.js";
import { require_sjisprober } from "./sjisprober.js";
import { require_utf8prober } from "./utf8prober.js";
var __wakaru_require_mbcsgroupprober_cache;
export function require_mbcsgroupprober() {
if (__wakaru_require_mbcsgroupprober_cache) return __wakaru_require_mbcsgroupprober_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mbcsgroupprober_cache = module2;
var CharSetGroupProber = require_charsetgroupprober();
var Big5Prober = require_big5prober();
var UTF8Prober = require_utf8prober();
var SJISProber = require_sjisprober();
var EUCJPProber = require_eucjpprober();
var GB2312Prober = require_gb2312prober();
var EUCKRProber = require_euckrprober();
var EUCTWProber = require_euctwprober();
function MBCSGroupProber() {
    CharSetGroupProber.apply(this);
    this._mProbers = [
        new UTF8Prober(),
        new SJISProber(),
        new EUCJPProber(),
        new GB2312Prober(),
        new EUCKRProber(),
        new Big5Prober(),
        new EUCTWProber()
    ];
    const supportedCharsetNames = this._mProbers.map((prober)=>prober.getCharsetName());
    this.getSupportedCharsetNames = function() {
        return supportedCharsetNames;
    };
    this.reset();
}
MBCSGroupProber.prototype = new CharSetGroupProber();
module2.exports = MBCSGroupProber;

return module2.exports;
}
