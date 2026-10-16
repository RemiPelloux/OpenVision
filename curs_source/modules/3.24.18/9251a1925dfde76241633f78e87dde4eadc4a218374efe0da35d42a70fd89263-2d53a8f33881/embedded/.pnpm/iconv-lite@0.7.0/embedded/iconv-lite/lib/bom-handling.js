var __wakaru_require_bom_handling_cache;
export function require_bom_handling() {
if (__wakaru_require_bom_handling_cache) return __wakaru_require_bom_handling_cache;
var exports2 = {};
__wakaru_require_bom_handling_cache = exports2;
"use strict";
var BOMChar = "\uFEFF";
exports2.PrependBOM = PrependBOMWrapper;
function PrependBOMWrapper(encoder2, options2) {
    this.encoder = encoder2;
    this.addBOM = true;
}
PrependBOMWrapper.prototype.write = function(str3) {
    if (this.addBOM) {
        str3 = BOMChar + str3;
        this.addBOM = false;
    }
    return this.encoder.write(str3);
};
PrependBOMWrapper.prototype.end = function() {
    return this.encoder.end();
};
exports2.StripBOM = StripBOMWrapper;
function StripBOMWrapper(decoder2, options2) {
    this.decoder = decoder2;
    this.pass = false;
    this.options = options2 || {};
}
StripBOMWrapper.prototype.write = function(buf) {
    var res = this.decoder.write(buf);
    if (this.pass || !res) {
        return res;
    }
    if (res[0] === BOMChar) {
        res = res.slice(1);
        if (typeof this.options.stripBOM === "function") {
            this.options.stripBOM();
        }
    }
    this.pass = true;
    return res;
};
StripBOMWrapper.prototype.end = function() {
    return this.decoder.end();
};

return exports2;
}
