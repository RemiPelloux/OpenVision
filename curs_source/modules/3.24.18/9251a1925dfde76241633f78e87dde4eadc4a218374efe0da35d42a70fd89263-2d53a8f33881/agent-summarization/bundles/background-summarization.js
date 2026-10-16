var BackgroundSummarizationMode, DISABLED_BACKGROUND_SUMMARIZATION_PROPS;
export { BackgroundSummarizationMode, DISABLED_BACKGROUND_SUMMARIZATION_PROPS };
var __wakaru_init_background_summarization_initialized = false;
export function init_background_summarization() {
if (__wakaru_init_background_summarization_initialized) return;
__wakaru_init_background_summarization_initialized = true;
"use strict";
(function(BackgroundSummarizationMode2) {
    BackgroundSummarizationMode2["Background"] = "Background";
    BackgroundSummarizationMode2["BackgroundAndPersistIfCompleted"] = "BackgroundAndPersistIfCompleted";
    BackgroundSummarizationMode2["WaitForCompletion"] = "WaitForCompletion";
    BackgroundSummarizationMode2["WaitForCompletionIfStarted"] = "WaitForCompletionIfStarted";
})(BackgroundSummarizationMode || (BackgroundSummarizationMode = {}));
DISABLED_BACKGROUND_SUMMARIZATION_PROPS = {
    unusedTokensThresholdToStartBackgroundSummarization: void 0,
    unusedPercentTokensThresholdToStartBackgroundSummarization: void 0,
    unusedTokensThresholdToPersistBackgroundSummarization: void 0,
    unusedPercentTokensThresholdToPersistBackgroundSummarization: void 0
};

}
