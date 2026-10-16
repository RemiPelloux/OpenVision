var globalThis2 = require("./module-4576.js");
var uncurryThis = require("./module-9504.js");
var Uint8Array2 = globalThis2.Uint8Array;
var SyntaxError2 = globalThis2.SyntaxError;
var parseInt2 = globalThis2.parseInt;
var min = Math.min;
var NOT_HEX = /[^\da-f]/i;
var exec = uncurryThis(NOT_HEX.exec);
var stringSlice = uncurryThis("".slice);
module.exports = function(string, into) {
    var stringLength = string.length;
    if (stringLength % 2 !== 0) throw new SyntaxError2("String should be an even number of characters");
    var maxLength = into ? min(into.length, stringLength / 2) : stringLength / 2;
    var bytes = into || new Uint8Array2(maxLength);
    var read = 0;
    var written = 0;
    while(written < maxLength){
        var hexits = stringSlice(string, read, read += 2);
        if (exec(NOT_HEX, hexits)) throw new SyntaxError2("String should only contain hex characters");
        bytes[written++] = parseInt2(hexits, 16);
    }
    return {
        bytes,
        read
    };
};
