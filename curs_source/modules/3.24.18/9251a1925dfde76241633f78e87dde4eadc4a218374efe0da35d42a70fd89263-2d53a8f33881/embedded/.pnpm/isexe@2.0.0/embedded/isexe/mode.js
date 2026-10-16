var __wakaru_require_mode_cache;
export function require_mode() {
if (__wakaru_require_mode_cache) return __wakaru_require_mode_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mode_cache = module2;
module2.exports = isexe;
isexe.sync = sync;
var fs39 = require("fs");
function isexe(path64, options2, cb) {
    fs39.stat(path64, function(er2, stat24) {
        cb(er2, er2 ? false : checkStat(stat24, options2));
    });
}
function sync(path64, options2) {
    return checkStat(fs39.statSync(path64), options2);
}
function checkStat(stat24, options2) {
    return stat24.isFile() && checkMode(stat24, options2);
}
function checkMode(stat24, options2) {
    var mod2 = stat24.mode;
    var uid = stat24.uid;
    var gid = stat24.gid;
    var myUid = options2.uid !== void 0 ? options2.uid : process.getuid && process.getuid();
    var myGid = options2.gid !== void 0 ? options2.gid : process.getgid && process.getgid();
    var u2 = parseInt("100", 8);
    var g2 = parseInt("010", 8);
    var o = parseInt("001", 8);
    var ug = u2 | g2;
    var ret = mod2 & o || mod2 & g2 && gid === myGid || mod2 & u2 && uid === myUid || mod2 & ug && myUid === 0;
    return ret;
}

return module2.exports;
}
