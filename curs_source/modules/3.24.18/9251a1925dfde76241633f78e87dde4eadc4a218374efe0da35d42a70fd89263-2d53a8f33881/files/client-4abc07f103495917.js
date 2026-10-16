import { CallToolResultSchema, ErrorCode, McpError2, init_types8 } from "../../types.js";
var ExperimentalClientTasks;
export { ExperimentalClientTasks };
var __wakaru_init_client_initialized = false;
export function init_client() {
if (__wakaru_init_client_initialized) return;
__wakaru_init_client_initialized = true;
init_types8();
ExperimentalClientTasks = class {
    constructor(_client){
        this._client = _client;
    }
    async *callToolStream(params, resultSchema = CallToolResultSchema, options2) {
        const clientInternal = this._client;
        const optionsWithTask = {
            ...options2,
            task: options2?.task ?? (clientInternal.isToolTask(params.name) ? {} : void 0)
        };
        const stream3 = clientInternal.requestStream({
            method: "tools/call",
            params
        }, resultSchema, optionsWithTask);
        const validator2 = clientInternal.getToolOutputValidator(params.name);
        for await (const message of stream3){
            if (message.type === "result" && validator2) {
                const result = message.result;
                if (!result.structuredContent && !result.isError) {
                    yield {
                        type: "error",
                        error: new McpError2(ErrorCode.InvalidRequest, `Tool ${params.name} has an output schema but did not return structured content`)
                    };
                    return;
                }
                if (result.structuredContent) {
                    try {
                        const validationResult = validator2(result.structuredContent);
                        if (!validationResult.valid) {
                            yield {
                                type: "error",
                                error: new McpError2(ErrorCode.InvalidParams, `Structured content does not match the tool's output schema: ${validationResult.errorMessage}`)
                            };
                            return;
                        }
                    } catch (error3) {
                        if (error3 instanceof McpError2) {
                            yield {
                                type: "error",
                                error: error3
                            };
                            return;
                        }
                        yield {
                            type: "error",
                            error: new McpError2(ErrorCode.InvalidParams, `Failed to validate structured content: ${error3 instanceof Error ? error3.message : String(error3)}`)
                        };
                        return;
                    }
                }
            }
            yield message;
        }
    }
    async getTask(taskId, options2) {
        return this._client.getTask({
            taskId
        }, options2);
    }
    async getTaskResult(taskId, resultSchema, options2) {
        return this._client.getTaskResult({
            taskId
        }, resultSchema, options2);
    }
    async listTasks(cursor, options2) {
        return this._client.listTasks(cursor ? {
            cursor
        } : void 0, options2);
    }
    async cancelTask(taskId, options2) {
        return this._client.cancelTask({
            taskId
        }, options2);
    }
    requestStream(request3, resultSchema, options2) {
        return this._client.requestStream(request3, resultSchema, options2);
    }
};

}
