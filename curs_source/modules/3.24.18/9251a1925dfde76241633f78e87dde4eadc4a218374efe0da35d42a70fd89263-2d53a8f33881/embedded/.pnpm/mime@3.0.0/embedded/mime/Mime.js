var __wakaru_require_Mime_cache;
export function require_Mime() {
if (__wakaru_require_Mime_cache) return __wakaru_require_Mime_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_Mime_cache = module2;
"use strict";
function Mime() {
    this._types = Object.create(null);
    this._extensions = Object.create(null);
    for(let i = 0; i < arguments.length; i++){
        this.define(arguments[i]);
    }
    this.define = this.define.bind(this);
    this.getType = this.getType.bind(this);
    this.getExtension = this.getExtension.bind(this);
}
Mime.prototype.define = function(typeMap, force) {
    for(let type2 in typeMap){
        let extensions = typeMap[type2].map(function(t) {
            return t.toLowerCase();
        });
        type2 = type2.toLowerCase();
        for(let i = 0; i < extensions.length; i++){
            const ext2 = extensions[i];
            if (ext2[0] === "*") {
                continue;
            }
            if (!force && ext2 in this._types) {
                throw new Error('Attempt to change mapping for "' + ext2 + '" extension from "' + this._types[ext2] + '" to "' + type2 + '". Pass `force=true` to allow this, otherwise remove "' + ext2 + '" from the list of extensions for "' + type2 + '".');
            }
            this._types[ext2] = type2;
        }
        if (force || !this._extensions[type2]) {
            const ext2 = extensions[0];
            this._extensions[type2] = ext2[0] !== "*" ? ext2 : ext2.substr(1);
        }
    }
};
Mime.prototype.getType = function(path64) {
    path64 = String(path64);
    let last = path64.replace(/^.*[/\\]/, "").toLowerCase();
    let ext2 = last.replace(/^.*\./, "").toLowerCase();
    let hasPath = last.length < path64.length;
    let hasDot = ext2.length < last.length - 1;
    return (hasDot || !hasPath) && this._types[ext2] || null;
};
Mime.prototype.getExtension = function(type2) {
    type2 = /^\s*([^;\s]*)/.test(type2) && RegExp.$1;
    return type2 && this._extensions[type2.toLowerCase()] || null;
};
module2.exports = Mime;

return module2.exports;
}
