require.r(exports);
require.d(exports, {
    protoBase64: ()=>protoBase64
});
let encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
let decTable = [];
for(let i = 0; i < encTable.length; i++)decTable[encTable[i].charCodeAt(0)] = i;
decTable["-".charCodeAt(0)] = encTable.indexOf("+");
decTable["_".charCodeAt(0)] = encTable.indexOf("/");
const protoBase64 = {
    dec (base64Str) {
        let es = base64Str.length * 3 / 4;
        if (base64Str[base64Str.length - 2] == "=") es -= 2;
        else if (base64Str[base64Str.length - 1] == "=") es -= 1;
        let bytes = new Uint8Array(es), bytePos = 0, groupPos = 0, b, p = 0;
        for(let i = 0; i < base64Str.length; i++){
            b = decTable[base64Str.charCodeAt(i)];
            if (b === void 0) {
                switch(base64Str[i]){
                    case "=":
                        groupPos = 0;
                    case "\n":
                    case "\r":
                    case "	":
                    case " ":
                        continue;
                    default:
                        throw Error("invalid base64 string.");
                }
            }
            switch(groupPos){
                case 0:
                    p = b;
                    groupPos = 1;
                    break;
                case 1:
                    bytes[bytePos++] = p << 2 | (b & 48) >> 4;
                    p = b;
                    groupPos = 2;
                    break;
                case 2:
                    bytes[bytePos++] = (p & 15) << 4 | (b & 60) >> 2;
                    p = b;
                    groupPos = 3;
                    break;
                case 3:
                    bytes[bytePos++] = (p & 3) << 6 | b;
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos == 1) throw Error("invalid base64 string.");
        return bytes.subarray(0, bytePos);
    },
    enc (bytes) {
        let base64 = "", groupPos = 0, b, p = 0;
        for(let i = 0; i < bytes.length; i++){
            b = bytes[i];
            switch(groupPos){
                case 0:
                    base64 += encTable[b >> 2];
                    p = (b & 3) << 4;
                    groupPos = 1;
                    break;
                case 1:
                    base64 += encTable[p | b >> 4];
                    p = (b & 15) << 2;
                    groupPos = 2;
                    break;
                case 2:
                    base64 += encTable[p | b >> 6];
                    base64 += encTable[b & 63];
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos) {
            base64 += encTable[p];
            base64 += "=";
            if (groupPos == 1) base64 += "=";
        }
        return base64;
    }
};
