var __wakaru_require_mimeScore_cache;
export function require_mimeScore() {
if (__wakaru_require_mimeScore_cache) return __wakaru_require_mimeScore_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_mimeScore_cache = module2;
var FACET_SCORES = {
    "prs.": 100,
    "x-": 200,
    "x.": 300,
    "vnd.": 400,
    default: 900
};
var SOURCE_SCORES = {
    nginx: 10,
    apache: 20,
    iana: 40,
    default: 30
};
var TYPE_SCORES = {
    application: 1,
    font: 2,
    default: 0
};
module2.exports = function mimeScore(mimeType, source = "default") {
    if (mimeType === "application/octet-stream") {
        return 0;
    }
    const [type2, subtype] = mimeType.split("/");
    const facet = subtype.replace(/(\.|x-).*/, "$1");
    const facetScore = FACET_SCORES[facet] || FACET_SCORES.default;
    const sourceScore = SOURCE_SCORES[source] || SOURCE_SCORES.default;
    const typeScore = TYPE_SCORES[type2] || TYPE_SCORES.default;
    const lengthScore = 1 - mimeType.length / 100;
    return facetScore + sourceScore + typeScore + lengthScore;
};

return module2.exports;
}
