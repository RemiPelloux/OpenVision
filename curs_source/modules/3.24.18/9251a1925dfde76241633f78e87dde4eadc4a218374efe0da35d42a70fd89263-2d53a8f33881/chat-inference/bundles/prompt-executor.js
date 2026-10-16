import { init_dist } from "../../context/dist/index.js";
import { createKey } from "../../entry_exports.js";
var OutputTokensLimitExceededError, InputTokenLimitError, ProactiveSummarizationThresholdError, compactionEpochKey, summarizedMessageCountKey, currentUserMessageSimulatedFieldsKey, constrainedDecodingRetryKey;
export { InputTokenLimitError, OutputTokensLimitExceededError, ProactiveSummarizationThresholdError, compactionEpochKey, constrainedDecodingRetryKey, currentUserMessageSimulatedFieldsKey, summarizedMessageCountKey };
var __wakaru_init_prompt_executor_initialized = false;
export function init_prompt_executor() {
if (__wakaru_init_prompt_executor_initialized) return;
__wakaru_init_prompt_executor_initialized = true;
"use strict";
init_dist();
OutputTokensLimitExceededError = class extends Error {
    constructor(message = "Provider exceeded max output tokens"){
        super(message);
        this.name = "OutputTokensLimitExceededError";
    }
};
InputTokenLimitError = class extends Error {
    constructor(message = "Input token limit exceeded"){
        super(message);
        this.name = "InputTokenLimitError";
    }
};
ProactiveSummarizationThresholdError = class extends Error {
    constructor(message = "Configured summarization threshold reached"){
        super(message);
        this.name = "ProactiveSummarizationThresholdError";
    }
};
compactionEpochKey = createKey(Symbol("compactionEpoch"), void 0);
summarizedMessageCountKey = createKey(Symbol("summarizedMessageCount"), void 0);
currentUserMessageSimulatedFieldsKey = createKey(Symbol("currentUserMessageSimulatedFields"), void 0);
constrainedDecodingRetryKey = createKey(Symbol("constrainedDecodingRetry"), false);

}
