import { __toESM } from "../../../../../../../agent-host/dist/storage/sqlite-store.js";
import { createEventSourceParserStream, extractResponseHeaders, isAbortError2, parseJSON2, removeUndefinedEntries, safeParseJSON } from "../../../../../../../mcp_sandbox_policy_exports.js";
import { APICallError, EmptyResponseBodyError, InvalidArgumentError, init_dist22 } from "../../../../../@ai-sdk+provider@1.1.3/node_modules/@ai-sdk/provider/dist/index.mjs";
import { customAlphabet, init_non_secure } from "../../../../../nanoid@3.3.18/node_modules/nanoid/non-secure/index.js";
import { require_secure_json_parse } from "../../../../../secure-json-parse@2.7.0/node_modules/secure-json-parse/index.js";
var import_secure_json_parse, createIdGenerator, generateId, validatorSymbol, getOriginalFetch2, postJsonToApi, postFormDataToApi, postToApi, createJsonErrorResponseHandler, createEventSourceResponseHandler, createJsonResponseHandler, createBinaryResponseHandler, btoa2, atob2;
export { atob2, btoa2, createBinaryResponseHandler, createEventSourceResponseHandler, createIdGenerator, createJsonErrorResponseHandler, createJsonResponseHandler, generateId, getOriginalFetch2, import_secure_json_parse, postFormDataToApi, postJsonToApi, postToApi, validatorSymbol };
var __wakaru_init_dist23_initialized = false;
export function init_dist23() {
if (__wakaru_init_dist23_initialized) return;
__wakaru_init_dist23_initialized = true;
init_dist22();
init_non_secure();
init_dist22();
init_dist22();
import_secure_json_parse = __toESM(require_secure_json_parse(), 1);
init_dist22();
init_dist22();
init_dist22();
init_dist22();
createIdGenerator = ({ prefix, size: defaultSize = 16, alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator = "-" } = {})=>{
    const generator = customAlphabet(alphabet, defaultSize);
    if (prefix == null) {
        return generator;
    }
    if (alphabet.includes(separator)) {
        throw new InvalidArgumentError({
            argument: "separator",
            message: `The separator "${separator}" must not be part of the alphabet "${alphabet}".`
        });
    }
    return (size)=>`${prefix}${separator}${generator(size)}`;
};
generateId = createIdGenerator();
validatorSymbol = Symbol.for("vercel.ai.validator");
getOriginalFetch2 = ()=>globalThis.fetch;
postJsonToApi = async ({ url: url2, headers, body, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 })=>postToApi({
        url: url2,
        headers: {
            "Content-Type": "application/json",
            ...headers
        },
        body: {
            content: JSON.stringify(body),
            values: body
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch: fetch2
    });
postFormDataToApi = async ({ url: url2, headers, formData, failedResponseHandler, successfulResponseHandler, abortSignal, fetch: fetch2 })=>postToApi({
        url: url2,
        headers,
        body: {
            content: formData,
            values: Object.fromEntries(formData.entries())
        },
        failedResponseHandler,
        successfulResponseHandler,
        abortSignal,
        fetch: fetch2
    });
postToApi = async ({ url: url2, headers = {}, body, successfulResponseHandler, failedResponseHandler, abortSignal, fetch: fetch2 = getOriginalFetch2() })=>{
    try {
        const response = await fetch2(url2, {
            method: "POST",
            headers: removeUndefinedEntries(headers),
            body: body.content,
            signal: abortSignal
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!response.ok) {
            let errorInformation;
            try {
                errorInformation = await failedResponseHandler({
                    response,
                    url: url2,
                    requestBodyValues: body.values
                });
            } catch (error3) {
                if (isAbortError2(error3) || APICallError.isInstance(error3)) {
                    throw error3;
                }
                throw new APICallError({
                    message: "Failed to process error response",
                    cause: error3,
                    statusCode: response.status,
                    url: url2,
                    responseHeaders,
                    requestBodyValues: body.values
                });
            }
            throw errorInformation.value;
        }
        try {
            return await successfulResponseHandler({
                response,
                url: url2,
                requestBodyValues: body.values
            });
        } catch (error3) {
            if (error3 instanceof Error) {
                if (isAbortError2(error3) || APICallError.isInstance(error3)) {
                    throw error3;
                }
            }
            throw new APICallError({
                message: "Failed to process successful response",
                cause: error3,
                statusCode: response.status,
                url: url2,
                responseHeaders,
                requestBodyValues: body.values
            });
        }
    } catch (error3) {
        if (isAbortError2(error3)) {
            throw error3;
        }
        if (error3 instanceof TypeError && error3.message === "fetch failed") {
            const cause = error3.cause;
            if (cause != null) {
                throw new APICallError({
                    message: `Cannot connect to API: ${cause.message}`,
                    cause,
                    url: url2,
                    requestBodyValues: body.values,
                    isRetryable: true
                });
            }
        }
        throw error3;
    }
};
createJsonErrorResponseHandler = ({ errorSchema, errorToMessage, isRetryable })=>async ({ response, url: url2, requestBodyValues })=>{
        const responseBody = await response.text();
        const responseHeaders = extractResponseHeaders(response);
        if (responseBody.trim() === "") {
            return {
                responseHeaders,
                value: new APICallError({
                    message: response.statusText,
                    url: url2,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
        try {
            const parsedError = parseJSON2({
                text: responseBody,
                schema: errorSchema
            });
            return {
                responseHeaders,
                value: new APICallError({
                    message: errorToMessage(parsedError),
                    url: url2,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    data: parsedError,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response, parsedError)
                })
            };
        } catch (parseError) {
            return {
                responseHeaders,
                value: new APICallError({
                    message: response.statusText,
                    url: url2,
                    requestBodyValues,
                    statusCode: response.status,
                    responseHeaders,
                    responseBody,
                    isRetryable: isRetryable == null ? void 0 : isRetryable(response)
                })
            };
        }
    };
createEventSourceResponseHandler = (chunkSchema)=>async ({ response })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (response.body == null) {
            throw new EmptyResponseBodyError({});
        }
        return {
            responseHeaders,
            value: response.body.pipeThrough(new TextDecoderStream()).pipeThrough(createEventSourceParserStream()).pipeThrough(new TransformStream({
                transform ({ data }, controller) {
                    if (data === "[DONE]") {
                        return;
                    }
                    controller.enqueue(safeParseJSON({
                        text: data,
                        schema: chunkSchema
                    }));
                }
            }))
        };
    };
createJsonResponseHandler = (responseSchema2)=>async ({ response, url: url2, requestBodyValues })=>{
        const responseBody = await response.text();
        const parsedResult = safeParseJSON({
            text: responseBody,
            schema: responseSchema2
        });
        const responseHeaders = extractResponseHeaders(response);
        if (!parsedResult.success) {
            throw new APICallError({
                message: "Invalid JSON response",
                cause: parsedResult.error,
                statusCode: response.status,
                responseHeaders,
                responseBody,
                url: url2,
                requestBodyValues
            });
        }
        return {
            responseHeaders,
            value: parsedResult.value,
            rawValue: parsedResult.rawValue
        };
    };
createBinaryResponseHandler = ()=>async ({ response, url: url2, requestBodyValues })=>{
        const responseHeaders = extractResponseHeaders(response);
        if (!response.body) {
            throw new APICallError({
                message: "Response body is empty",
                url: url2,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0
            });
        }
        try {
            const buffer = await response.arrayBuffer();
            return {
                responseHeaders,
                value: new Uint8Array(buffer)
            };
        } catch (error3) {
            throw new APICallError({
                message: "Failed to read response as array buffer",
                url: url2,
                requestBodyValues,
                statusCode: response.status,
                responseHeaders,
                responseBody: void 0,
                cause: error3
            });
        }
    };
({ btoa: btoa2, atob: atob2 } = globalThis);

}
