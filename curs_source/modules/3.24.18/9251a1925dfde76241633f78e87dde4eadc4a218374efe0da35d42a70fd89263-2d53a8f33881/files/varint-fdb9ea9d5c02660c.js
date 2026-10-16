var TWO_PWR_32_DBL, decimalFrom1e7WithLeadingZeros;
export { TWO_PWR_32_DBL, decimalFrom1e7WithLeadingZeros };
var __wakaru_init_varint_initialized = false;
export function init_varint() {
if (__wakaru_init_varint_initialized) return;
__wakaru_init_varint_initialized = true;
TWO_PWR_32_DBL = 4294967296;
decimalFrom1e7WithLeadingZeros = (digit1e7)=>{
    const partial2 = String(digit1e7);
    return "0000000".slice(partial2.length) + partial2;
};

}
