var __wakaru_require_windows_cache;
export function require_windows() {
if (__wakaru_require_windows_cache) return __wakaru_require_windows_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_windows_cache = module2;
module2.exports = isexe;
isexe.sync = sync;
var fs39 = require("fs");
function checkPathExt(path64, options2) {
    var pathext = options2.pathExt !== void 0 ? options2.pathExt : process.env.PATHEXT;
    if (!pathext) {
        return true;
    }
    pathext = pathext.split(";");
    if (pathext.indexOf("") !== -1) {
        return true;
    }
    for(var i = 0; i < pathext.length; i++){
        var p2 = pathext[i].toLowerCase();
        if (p2 && path64.substr(-p2.length).toLowerCase() === p2) {
            return true;
        }
    }
    return false;
}
function checkStat(stat24, path64, options2) {
    if (!stat24.isSymbolicLink() && !stat24.isFile()) {
        return false;
    }
    return checkPathExt(path64, options2);
}
function isexe(path64, options2, cb) {
    fs39.stat(path64, function(er2, stat24) {
        cb(er2, er2 ? false : checkStat(stat24, path64, options2));
    });
}
function sync(path64, options2) {
    return checkStat(fs39.statSync(path64), path64, options2);
}

return module2.exports;
}
