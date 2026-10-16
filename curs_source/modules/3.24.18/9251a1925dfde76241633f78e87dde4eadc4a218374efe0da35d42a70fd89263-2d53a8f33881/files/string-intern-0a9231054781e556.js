var cachedSpaces, maxCachedValues, cachedBreakLinesWithSpaces;
export { cachedBreakLinesWithSpaces, cachedSpaces, maxCachedValues };
var __wakaru_init_string_intern_initialized = false;
export function init_string_intern() {
if (__wakaru_init_string_intern_initialized) return;
__wakaru_init_string_intern_initialized = true;
cachedSpaces = new Array(20).fill(0).map((_2, index)=>{
    return " ".repeat(index);
});
maxCachedValues = 200;
cachedBreakLinesWithSpaces = {
    " ": {
        "\n": new Array(maxCachedValues).fill(0).map((_2, index)=>{
            return "\n" + " ".repeat(index);
        }),
        "\r": new Array(maxCachedValues).fill(0).map((_2, index)=>{
            return "\r" + " ".repeat(index);
        }),
        "\r\n": new Array(maxCachedValues).fill(0).map((_2, index)=>{
            return "\r\n" + " ".repeat(index);
        })
    },
    "	": {
        "\n": new Array(maxCachedValues).fill(0).map((_2, index)=>{
            return "\n" + "	".repeat(index);
        }),
        "\r": new Array(maxCachedValues).fill(0).map((_2, index)=>{
            return "\r" + "	".repeat(index);
        }),
        "\r\n": new Array(maxCachedValues).fill(0).map((_2, index)=>{
            return "\r\n" + "	".repeat(index);
        })
    }
};

}
