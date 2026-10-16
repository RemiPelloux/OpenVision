var encTable, decTable, protoBase64;
export { decTable, encTable, protoBase64 };
var __wakaru_init_proto_base64_initialized = false;
export function init_proto_base64() {
if (__wakaru_init_proto_base64_initialized) return;
__wakaru_init_proto_base64_initialized = true;
encTable = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
decTable = [];
for(let i = 0; i < encTable.length; i++)decTable[encTable[i].charCodeAt(0)] = i;
decTable["-".charCodeAt(0)] = encTable.indexOf("+");
decTable["_".charCodeAt(0)] = encTable.indexOf("/");
protoBase64 = {
    dec (base64Str) {
        let es2 = base64Str.length * 3 / 4;
        if (base64Str[base64Str.length - 2] == "=") es2 -= 2;
        else if (base64Str[base64Str.length - 1] == "=") es2 -= 1;
        let bytes = new Uint8Array(es2), bytePos = 0, groupPos = 0, b2, p2 = 0;
        for(let i = 0; i < base64Str.length; i++){
            b2 = decTable[base64Str.charCodeAt(i)];
            if (b2 === void 0) {
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
                    p2 = b2;
                    groupPos = 1;
                    break;
                case 1:
                    bytes[bytePos++] = p2 << 2 | (b2 & 48) >> 4;
                    p2 = b2;
                    groupPos = 2;
                    break;
                case 2:
                    bytes[bytePos++] = (p2 & 15) << 4 | (b2 & 60) >> 2;
                    p2 = b2;
                    groupPos = 3;
                    break;
                case 3:
                    bytes[bytePos++] = (p2 & 3) << 6 | b2;
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos == 1) throw Error("invalid base64 string.");
        return bytes.subarray(0, bytePos);
    },
    enc (bytes) {
        let base642 = "", groupPos = 0, b2, p2 = 0;
        for(let i = 0; i < bytes.length; i++){
            b2 = bytes[i];
            switch(groupPos){
                case 0:
                    base642 += encTable[b2 >> 2];
                    p2 = (b2 & 3) << 4;
                    groupPos = 1;
                    break;
                case 1:
                    base642 += encTable[p2 | b2 >> 4];
                    p2 = (b2 & 15) << 2;
                    groupPos = 2;
                    break;
                case 2:
                    base642 += encTable[p2 | b2 >> 6];
                    base642 += encTable[b2 & 63];
                    groupPos = 0;
                    break;
            }
        }
        if (groupPos) {
            base642 += encTable[p2];
            base642 += "=";
            if (groupPos == 1) base642 += "=";
        }
        return base642;
    }
};

}
