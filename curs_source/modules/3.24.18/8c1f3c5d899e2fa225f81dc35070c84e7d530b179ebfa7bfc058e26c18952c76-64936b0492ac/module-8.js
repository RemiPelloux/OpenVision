Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.computeLinesDiff = async function(e) {
    const t = i.linesDiffComputers.getDefault().computeDiff(e.original, e.modified, {
        ignoreTrimWhitespace: e.ignoreTrimWhitespace,
        computeMoves: !1,
        maxComputationTimeMs: e.maxComputationTimeMs,
        shouldGracefullyFallBackOnTimeout: !0,
        skipDiffRefinement: e.skipDiffRefinement
    });
    return {
        changes: t.changes.map((e)=>({
                originalRange: {
                    startLineNumberOneIndexed: e.original.startLineNumber,
                    endLineNumberExclusiveOneIndexed: e.original.endLineNumberExclusive
                },
                modifiedRange: {
                    startLineNumberOneIndexed: e.modified.startLineNumber,
                    endLineNumberExclusiveOneIndexed: e.modified.endLineNumberExclusive
                }
            })),
        timedOut: t.hitTimeout
    };
};
const i = require("./module-233.js");
