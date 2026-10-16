import { getMethodLiteral, isTerminal, parseWithCompat, safeParse3 } from "../../../../../../../../../coerce_exports.js";
import { init_interfaces } from "../experimental/tasks/interfaces.js";
import { init_zod_compat } from "../server/zod-compat.js";
import { init_zod_json_schema_compat } from "../server/zod-json-schema-compat.js";
import { CancelTaskRequestSchema, CancelTaskResultSchema, CancelledNotificationSchema, CreateTaskResultSchema, ErrorCode, GetTaskPayloadRequestSchema, GetTaskRequestSchema, GetTaskResultSchema, ListTasksRequestSchema, ListTasksResultSchema, McpError2, PingRequestSchema, ProgressNotificationSchema, RELATED_TASK_META_KEY, TaskStatusNotificationSchema, init_types8, isJSONRPCErrorResponse, isJSONRPCNotification, isJSONRPCRequest, isJSONRPCResultResponse, isTaskAugmentedRequestParams } from "../types.js";
var DEFAULT_REQUEST_TIMEOUT_MSEC, Protocol;
export { DEFAULT_REQUEST_TIMEOUT_MSEC, Protocol };
var __wakaru_init_protocol2_initialized = false;
export function init_protocol2() {
if (__wakaru_init_protocol2_initialized) return;
__wakaru_init_protocol2_initialized = true;
init_zod_compat();
init_types8();
init_interfaces();
init_zod_json_schema_compat();
DEFAULT_REQUEST_TIMEOUT_MSEC = 6e4;
Protocol = class {
    constructor(_options){
        this._options = _options;
        this._requestMessageId = 0;
        this._requestHandlers = new Map();
        this._requestHandlerAbortControllers = new Map();
        this._notificationHandlers = new Map();
        this._responseHandlers = new Map();
        this._progressHandlers = new Map();
        this._timeoutInfo = new Map();
        this._pendingDebouncedNotifications = new Set();
        this._taskProgressTokens = new Map();
        this._requestResolvers = new Map();
        this.setNotificationHandler(CancelledNotificationSchema, (notification)=>{
            this._oncancel(notification);
        });
        this.setNotificationHandler(ProgressNotificationSchema, (notification)=>{
            this._onprogress(notification);
        });
        this.setRequestHandler(PingRequestSchema, (_request)=>({}));
        this._taskStore = _options?.taskStore;
        this._taskMessageQueue = _options?.taskMessageQueue;
        if (this._taskStore) {
            this.setRequestHandler(GetTaskRequestSchema, async (request3, extra)=>{
                const task = await this._taskStore.getTask(request3.params.taskId, extra.sessionId);
                if (!task) {
                    throw new McpError2(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
                }
                return {
                    ...task
                };
            });
            this.setRequestHandler(GetTaskPayloadRequestSchema, async (request3, extra)=>{
                const handleTaskResult = async ()=>{
                    const taskId = request3.params.taskId;
                    if (this._taskMessageQueue) {
                        let queuedMessage;
                        while(queuedMessage = await this._taskMessageQueue.dequeue(taskId, extra.sessionId)){
                            if (queuedMessage.type === "response" || queuedMessage.type === "error") {
                                const message = queuedMessage.message;
                                const requestId = message.id;
                                const resolver = this._requestResolvers.get(requestId);
                                if (resolver) {
                                    this._requestResolvers.delete(requestId);
                                    if (queuedMessage.type === "response") {
                                        resolver(message);
                                    } else {
                                        const errorMessage4 = message;
                                        const error3 = new McpError2(errorMessage4.error.code, errorMessage4.error.message, errorMessage4.error.data);
                                        resolver(error3);
                                    }
                                } else {
                                    const messageType = queuedMessage.type === "response" ? "Response" : "Error";
                                    this._onerror(new Error(`${messageType} handler missing for request ${requestId}`));
                                }
                                continue;
                            }
                            await this._transport?.send(queuedMessage.message, {
                                relatedRequestId: extra.requestId
                            });
                        }
                    }
                    const task = await this._taskStore.getTask(taskId, extra.sessionId);
                    if (!task) {
                        throw new McpError2(ErrorCode.InvalidParams, `Task not found: ${taskId}`);
                    }
                    if (!isTerminal(task.status)) {
                        await this._waitForTaskUpdate(taskId, extra.signal);
                        return await handleTaskResult();
                    }
                    if (isTerminal(task.status)) {
                        const result = await this._taskStore.getTaskResult(taskId, extra.sessionId);
                        this._clearTaskQueue(taskId);
                        return {
                            ...result,
                            _meta: {
                                ...result._meta,
                                [RELATED_TASK_META_KEY]: {
                                    taskId
                                }
                            }
                        };
                    }
                    return await handleTaskResult();
                };
                return await handleTaskResult();
            });
            this.setRequestHandler(ListTasksRequestSchema, async (request3, extra)=>{
                try {
                    const { tasks, nextCursor } = await this._taskStore.listTasks(request3.params?.cursor, extra.sessionId);
                    return {
                        tasks,
                        nextCursor,
                        _meta: {}
                    };
                } catch (error3) {
                    throw new McpError2(ErrorCode.InvalidParams, `Failed to list tasks: ${error3 instanceof Error ? error3.message : String(error3)}`);
                }
            });
            this.setRequestHandler(CancelTaskRequestSchema, async (request3, extra)=>{
                try {
                    const task = await this._taskStore.getTask(request3.params.taskId, extra.sessionId);
                    if (!task) {
                        throw new McpError2(ErrorCode.InvalidParams, `Task not found: ${request3.params.taskId}`);
                    }
                    if (isTerminal(task.status)) {
                        throw new McpError2(ErrorCode.InvalidParams, `Cannot cancel task in terminal status: ${task.status}`);
                    }
                    await this._taskStore.updateTaskStatus(request3.params.taskId, "cancelled", "Client cancelled task execution.", extra.sessionId);
                    this._clearTaskQueue(request3.params.taskId);
                    const cancelledTask = await this._taskStore.getTask(request3.params.taskId, extra.sessionId);
                    if (!cancelledTask) {
                        throw new McpError2(ErrorCode.InvalidParams, `Task not found after cancellation: ${request3.params.taskId}`);
                    }
                    return {
                        _meta: {},
                        ...cancelledTask
                    };
                } catch (error3) {
                    if (error3 instanceof McpError2) {
                        throw error3;
                    }
                    throw new McpError2(ErrorCode.InvalidRequest, `Failed to cancel task: ${error3 instanceof Error ? error3.message : String(error3)}`);
                }
            });
        }
    }
    async _oncancel(notification) {
        if (!notification.params.requestId) {
            return;
        }
        const controller = this._requestHandlerAbortControllers.get(notification.params.requestId);
        controller?.abort(notification.params.reason);
    }
    _setupTimeout(messageId, timeout2, maxTotalTimeout, onTimeout, resetTimeoutOnProgress = false) {
        this._timeoutInfo.set(messageId, {
            timeoutId: setTimeout(onTimeout, timeout2),
            startTime: Date.now(),
            timeout: timeout2,
            maxTotalTimeout,
            resetTimeoutOnProgress,
            onTimeout
        });
    }
    _resetTimeout(messageId) {
        const info2 = this._timeoutInfo.get(messageId);
        if (!info2) return false;
        const totalElapsed = Date.now() - info2.startTime;
        if (info2.maxTotalTimeout && totalElapsed >= info2.maxTotalTimeout) {
            this._timeoutInfo.delete(messageId);
            throw McpError2.fromError(ErrorCode.RequestTimeout, "Maximum total timeout exceeded", {
                maxTotalTimeout: info2.maxTotalTimeout,
                totalElapsed
            });
        }
        clearTimeout(info2.timeoutId);
        info2.timeoutId = setTimeout(info2.onTimeout, info2.timeout);
        return true;
    }
    _cleanupTimeout(messageId) {
        const info2 = this._timeoutInfo.get(messageId);
        if (info2) {
            clearTimeout(info2.timeoutId);
            this._timeoutInfo.delete(messageId);
        }
    }
    async connect(transport) {
        this._transport = transport;
        const _onclose = this.transport?.onclose;
        this._transport.onclose = ()=>{
            _onclose?.();
            this._onclose();
        };
        const _onerror = this.transport?.onerror;
        this._transport.onerror = (error3)=>{
            _onerror?.(error3);
            this._onerror(error3);
        };
        const _onmessage = this._transport?.onmessage;
        this._transport.onmessage = (message, extra)=>{
            _onmessage?.(message, extra);
            if (isJSONRPCResultResponse(message) || isJSONRPCErrorResponse(message)) {
                this._onresponse(message);
            } else if (isJSONRPCRequest(message)) {
                this._onrequest(message, extra);
            } else if (isJSONRPCNotification(message)) {
                this._onnotification(message);
            } else {
                this._onerror(new Error(`Unknown message type: ${JSON.stringify(message)}`));
            }
        };
        await this._transport.start();
    }
    _onclose() {
        const responseHandlers = this._responseHandlers;
        this._responseHandlers = new Map();
        this._progressHandlers.clear();
        this._taskProgressTokens.clear();
        this._pendingDebouncedNotifications.clear();
        const error3 = McpError2.fromError(ErrorCode.ConnectionClosed, "Connection closed");
        this._transport = void 0;
        this.onclose?.();
        for (const handler of responseHandlers.values()){
            handler(error3);
        }
    }
    _onerror(error3) {
        this.onerror?.(error3);
    }
    _onnotification(notification) {
        const handler = this._notificationHandlers.get(notification.method) ?? this.fallbackNotificationHandler;
        if (handler === void 0) {
            return;
        }
        Promise.resolve().then(()=>handler(notification)).catch((error3)=>this._onerror(new Error(`Uncaught error in notification handler: ${error3}`)));
    }
    _onrequest(request3, extra) {
        const handler = this._requestHandlers.get(request3.method) ?? this.fallbackRequestHandler;
        const capturedTransport = this._transport;
        const relatedTaskId = request3.params?._meta?.[RELATED_TASK_META_KEY]?.taskId;
        if (handler === void 0) {
            const errorResponse = {
                jsonrpc: "2.0",
                id: request3.id,
                error: {
                    code: ErrorCode.MethodNotFound,
                    message: "Method not found"
                }
            };
            if (relatedTaskId && this._taskMessageQueue) {
                this._enqueueTaskMessage(relatedTaskId, {
                    type: "error",
                    message: errorResponse,
                    timestamp: Date.now()
                }, capturedTransport?.sessionId).catch((error3)=>this._onerror(new Error(`Failed to enqueue error response: ${error3}`)));
            } else {
                capturedTransport?.send(errorResponse).catch((error3)=>this._onerror(new Error(`Failed to send an error response: ${error3}`)));
            }
            return;
        }
        const abortController = new AbortController();
        this._requestHandlerAbortControllers.set(request3.id, abortController);
        const taskCreationParams = isTaskAugmentedRequestParams(request3.params) ? request3.params.task : void 0;
        const taskStore = this._taskStore ? this.requestTaskStore(request3, capturedTransport?.sessionId) : void 0;
        const fullExtra = {
            signal: abortController.signal,
            sessionId: capturedTransport?.sessionId,
            _meta: request3.params?._meta,
            sendNotification: async (notification)=>{
                const notificationOptions = {
                    relatedRequestId: request3.id
                };
                if (relatedTaskId) {
                    notificationOptions.relatedTask = {
                        taskId: relatedTaskId
                    };
                }
                await this.notification(notification, notificationOptions);
            },
            sendRequest: async (r, resultSchema, options2)=>{
                const requestOptions = {
                    ...options2,
                    relatedRequestId: request3.id
                };
                if (relatedTaskId && !requestOptions.relatedTask) {
                    requestOptions.relatedTask = {
                        taskId: relatedTaskId
                    };
                }
                const effectiveTaskId = requestOptions.relatedTask?.taskId ?? relatedTaskId;
                if (effectiveTaskId && taskStore) {
                    await taskStore.updateTaskStatus(effectiveTaskId, "input_required");
                }
                return await this.request(r, resultSchema, requestOptions);
            },
            authInfo: extra?.authInfo,
            requestId: request3.id,
            requestInfo: extra?.requestInfo,
            taskId: relatedTaskId,
            taskStore,
            taskRequestedTtl: taskCreationParams?.ttl,
            closeSSEStream: extra?.closeSSEStream,
            closeStandaloneSSEStream: extra?.closeStandaloneSSEStream
        };
        Promise.resolve().then(()=>{
            if (taskCreationParams) {
                this.assertTaskHandlerCapability(request3.method);
            }
        }).then(()=>handler(request3, fullExtra)).then(async (result)=>{
            if (abortController.signal.aborted) {
                return;
            }
            const response = {
                result,
                jsonrpc: "2.0",
                id: request3.id
            };
            if (relatedTaskId && this._taskMessageQueue) {
                await this._enqueueTaskMessage(relatedTaskId, {
                    type: "response",
                    message: response,
                    timestamp: Date.now()
                }, capturedTransport?.sessionId);
            } else {
                await capturedTransport?.send(response);
            }
        }, async (error3)=>{
            if (abortController.signal.aborted) {
                return;
            }
            const errorResponse = {
                jsonrpc: "2.0",
                id: request3.id,
                error: {
                    code: Number.isSafeInteger(error3["code"]) ? error3["code"] : ErrorCode.InternalError,
                    message: error3.message ?? "Internal error",
                    ...error3["data"] !== void 0 && {
                        data: error3["data"]
                    }
                }
            };
            if (relatedTaskId && this._taskMessageQueue) {
                await this._enqueueTaskMessage(relatedTaskId, {
                    type: "error",
                    message: errorResponse,
                    timestamp: Date.now()
                }, capturedTransport?.sessionId);
            } else {
                await capturedTransport?.send(errorResponse);
            }
        }).catch((error3)=>this._onerror(new Error(`Failed to send response: ${error3}`))).finally(()=>{
            this._requestHandlerAbortControllers.delete(request3.id);
        });
    }
    _onprogress(notification) {
        const { progressToken, ...params } = notification.params;
        const messageId = Number(progressToken);
        const handler = this._progressHandlers.get(messageId);
        if (!handler) {
            this._onerror(new Error(`Received a progress notification for an unknown token: ${JSON.stringify(notification)}`));
            return;
        }
        const responseHandler = this._responseHandlers.get(messageId);
        const timeoutInfo = this._timeoutInfo.get(messageId);
        if (timeoutInfo && responseHandler && timeoutInfo.resetTimeoutOnProgress) {
            try {
                this._resetTimeout(messageId);
            } catch (error3) {
                this._responseHandlers.delete(messageId);
                this._progressHandlers.delete(messageId);
                this._cleanupTimeout(messageId);
                responseHandler(error3);
                return;
            }
        }
        handler(params);
    }
    _onresponse(response) {
        const messageId = Number(response.id);
        const resolver = this._requestResolvers.get(messageId);
        if (resolver) {
            this._requestResolvers.delete(messageId);
            if (isJSONRPCResultResponse(response)) {
                resolver(response);
            } else {
                const error3 = new McpError2(response.error.code, response.error.message, response.error.data);
                resolver(error3);
            }
            return;
        }
        const handler = this._responseHandlers.get(messageId);
        if (handler === void 0) {
            this._onerror(new Error(`Received a response for an unknown message ID: ${JSON.stringify(response)}`));
            return;
        }
        this._responseHandlers.delete(messageId);
        this._cleanupTimeout(messageId);
        let isTaskResponse = false;
        if (isJSONRPCResultResponse(response) && response.result && typeof response.result === "object") {
            const result = response.result;
            if (result.task && typeof result.task === "object") {
                const task = result.task;
                if (typeof task.taskId === "string") {
                    isTaskResponse = true;
                    this._taskProgressTokens.set(task.taskId, messageId);
                }
            }
        }
        if (!isTaskResponse) {
            this._progressHandlers.delete(messageId);
        }
        if (isJSONRPCResultResponse(response)) {
            handler(response);
        } else {
            const error3 = McpError2.fromError(response.error.code, response.error.message, response.error.data);
            handler(error3);
        }
    }
    get transport() {
        return this._transport;
    }
    async close() {
        await this._transport?.close();
    }
    async *requestStream(request3, resultSchema, options2) {
        const { task } = options2 ?? {};
        if (!task) {
            try {
                const result = await this.request(request3, resultSchema, options2);
                yield {
                    type: "result",
                    result
                };
            } catch (error3) {
                yield {
                    type: "error",
                    error: error3 instanceof McpError2 ? error3 : new McpError2(ErrorCode.InternalError, String(error3))
                };
            }
            return;
        }
        let taskId;
        try {
            const createResult = await this.request(request3, CreateTaskResultSchema, options2);
            if (createResult.task) {
                taskId = createResult.task.taskId;
                yield {
                    type: "taskCreated",
                    task: createResult.task
                };
            } else {
                throw new McpError2(ErrorCode.InternalError, "Task creation did not return a task");
            }
            while(true){
                const task2 = await this.getTask({
                    taskId
                }, options2);
                yield {
                    type: "taskStatus",
                    task: task2
                };
                if (isTerminal(task2.status)) {
                    if (task2.status === "completed") {
                        const result = await this.getTaskResult({
                            taskId
                        }, resultSchema, options2);
                        yield {
                            type: "result",
                            result
                        };
                    } else if (task2.status === "failed") {
                        yield {
                            type: "error",
                            error: new McpError2(ErrorCode.InternalError, `Task ${taskId} failed`)
                        };
                    } else if (task2.status === "cancelled") {
                        yield {
                            type: "error",
                            error: new McpError2(ErrorCode.InternalError, `Task ${taskId} was cancelled`)
                        };
                    }
                    return;
                }
                if (task2.status === "input_required") {
                    const result = await this.getTaskResult({
                        taskId
                    }, resultSchema, options2);
                    yield {
                        type: "result",
                        result
                    };
                    return;
                }
                const pollInterval = task2.pollInterval ?? this._options?.defaultTaskPollInterval ?? 1e3;
                await new Promise((resolve36)=>setTimeout(resolve36, pollInterval));
                options2?.signal?.throwIfAborted();
            }
        } catch (error3) {
            yield {
                type: "error",
                error: error3 instanceof McpError2 ? error3 : new McpError2(ErrorCode.InternalError, String(error3))
            };
        }
    }
    request(request3, resultSchema, options2) {
        const { relatedRequestId, resumptionToken, onresumptiontoken, task, relatedTask } = options2 ?? {};
        return new Promise((resolve36, reject2)=>{
            const earlyReject = (error3)=>{
                reject2(error3);
            };
            if (!this._transport) {
                earlyReject(new Error("Not connected"));
                return;
            }
            if (this._options?.enforceStrictCapabilities === true) {
                try {
                    this.assertCapabilityForMethod(request3.method);
                    if (task) {
                        this.assertTaskCapability(request3.method);
                    }
                } catch (e) {
                    earlyReject(e);
                    return;
                }
            }
            options2?.signal?.throwIfAborted();
            const messageId = this._requestMessageId++;
            const jsonrpcRequest = {
                ...request3,
                jsonrpc: "2.0",
                id: messageId
            };
            if (options2?.onprogress) {
                this._progressHandlers.set(messageId, options2.onprogress);
                jsonrpcRequest.params = {
                    ...request3.params,
                    _meta: {
                        ...request3.params?._meta || {},
                        progressToken: messageId
                    }
                };
            }
            if (task) {
                jsonrpcRequest.params = {
                    ...jsonrpcRequest.params,
                    task
                };
            }
            if (relatedTask) {
                jsonrpcRequest.params = {
                    ...jsonrpcRequest.params,
                    _meta: {
                        ...jsonrpcRequest.params?._meta || {},
                        [RELATED_TASK_META_KEY]: relatedTask
                    }
                };
            }
            const cancel = (reason)=>{
                this._responseHandlers.delete(messageId);
                this._progressHandlers.delete(messageId);
                this._cleanupTimeout(messageId);
                this._transport?.send({
                    jsonrpc: "2.0",
                    method: "notifications/cancelled",
                    params: {
                        requestId: messageId,
                        reason: String(reason)
                    }
                }, {
                    relatedRequestId,
                    resumptionToken,
                    onresumptiontoken
                }).catch((error4)=>this._onerror(new Error(`Failed to send cancellation: ${error4}`)));
                const error3 = reason instanceof McpError2 ? reason : new McpError2(ErrorCode.RequestTimeout, String(reason));
                reject2(error3);
            };
            this._responseHandlers.set(messageId, (response)=>{
                if (options2?.signal?.aborted) {
                    return;
                }
                if (response instanceof Error) {
                    return reject2(response);
                }
                try {
                    const parseResult = safeParse3(resultSchema, response.result);
                    if (!parseResult.success) {
                        reject2(parseResult.error);
                    } else {
                        resolve36(parseResult.data);
                    }
                } catch (error3) {
                    reject2(error3);
                }
            });
            options2?.signal?.addEventListener("abort", ()=>{
                cancel(options2?.signal?.reason);
            });
            const timeout2 = options2?.timeout ?? DEFAULT_REQUEST_TIMEOUT_MSEC;
            const timeoutHandler = ()=>cancel(McpError2.fromError(ErrorCode.RequestTimeout, "Request timed out", {
                    timeout: timeout2
                }));
            this._setupTimeout(messageId, timeout2, options2?.maxTotalTimeout, timeoutHandler, options2?.resetTimeoutOnProgress ?? false);
            const relatedTaskId = relatedTask?.taskId;
            if (relatedTaskId) {
                const responseResolver = (response)=>{
                    const handler = this._responseHandlers.get(messageId);
                    if (handler) {
                        handler(response);
                    } else {
                        this._onerror(new Error(`Response handler missing for side-channeled request ${messageId}`));
                    }
                };
                this._requestResolvers.set(messageId, responseResolver);
                this._enqueueTaskMessage(relatedTaskId, {
                    type: "request",
                    message: jsonrpcRequest,
                    timestamp: Date.now()
                }).catch((error3)=>{
                    this._cleanupTimeout(messageId);
                    reject2(error3);
                });
            } else {
                this._transport.send(jsonrpcRequest, {
                    relatedRequestId,
                    resumptionToken,
                    onresumptiontoken
                }).catch((error3)=>{
                    this._cleanupTimeout(messageId);
                    reject2(error3);
                });
            }
        });
    }
    async getTask(params, options2) {
        return this.request({
            method: "tasks/get",
            params
        }, GetTaskResultSchema, options2);
    }
    async getTaskResult(params, resultSchema, options2) {
        return this.request({
            method: "tasks/result",
            params
        }, resultSchema, options2);
    }
    async listTasks(params, options2) {
        return this.request({
            method: "tasks/list",
            params
        }, ListTasksResultSchema, options2);
    }
    async cancelTask(params, options2) {
        return this.request({
            method: "tasks/cancel",
            params
        }, CancelTaskResultSchema, options2);
    }
    async notification(notification, options2) {
        if (!this._transport) {
            throw new Error("Not connected");
        }
        this.assertNotificationCapability(notification.method);
        const relatedTaskId = options2?.relatedTask?.taskId;
        if (relatedTaskId) {
            const jsonrpcNotification2 = {
                ...notification,
                jsonrpc: "2.0",
                params: {
                    ...notification.params,
                    _meta: {
                        ...notification.params?._meta || {},
                        [RELATED_TASK_META_KEY]: options2.relatedTask
                    }
                }
            };
            await this._enqueueTaskMessage(relatedTaskId, {
                type: "notification",
                message: jsonrpcNotification2,
                timestamp: Date.now()
            });
            return;
        }
        const debouncedMethods = this._options?.debouncedNotificationMethods ?? [];
        const canDebounce = debouncedMethods.includes(notification.method) && !notification.params && !options2?.relatedRequestId && !options2?.relatedTask;
        if (canDebounce) {
            if (this._pendingDebouncedNotifications.has(notification.method)) {
                return;
            }
            this._pendingDebouncedNotifications.add(notification.method);
            Promise.resolve().then(()=>{
                this._pendingDebouncedNotifications.delete(notification.method);
                if (!this._transport) {
                    return;
                }
                let jsonrpcNotification2 = {
                    ...notification,
                    jsonrpc: "2.0"
                };
                if (options2?.relatedTask) {
                    jsonrpcNotification2 = {
                        ...jsonrpcNotification2,
                        params: {
                            ...jsonrpcNotification2.params,
                            _meta: {
                                ...jsonrpcNotification2.params?._meta || {},
                                [RELATED_TASK_META_KEY]: options2.relatedTask
                            }
                        }
                    };
                }
                this._transport?.send(jsonrpcNotification2, options2).catch((error3)=>this._onerror(error3));
            });
            return;
        }
        let jsonrpcNotification = {
            ...notification,
            jsonrpc: "2.0"
        };
        if (options2?.relatedTask) {
            jsonrpcNotification = {
                ...jsonrpcNotification,
                params: {
                    ...jsonrpcNotification.params,
                    _meta: {
                        ...jsonrpcNotification.params?._meta || {},
                        [RELATED_TASK_META_KEY]: options2.relatedTask
                    }
                }
            };
        }
        await this._transport.send(jsonrpcNotification, options2);
    }
    setRequestHandler(requestSchema, handler) {
        const method = getMethodLiteral(requestSchema);
        this.assertRequestHandlerCapability(method);
        this._requestHandlers.set(method, (request3, extra)=>{
            const parsed = parseWithCompat(requestSchema, request3);
            return Promise.resolve(handler(parsed, extra));
        });
    }
    removeRequestHandler(method) {
        this._requestHandlers.delete(method);
    }
    assertCanSetRequestHandler(method) {
        if (this._requestHandlers.has(method)) {
            throw new Error(`A request handler for ${method} already exists, which would be overridden`);
        }
    }
    setNotificationHandler(notificationSchema, handler) {
        const method = getMethodLiteral(notificationSchema);
        this._notificationHandlers.set(method, (notification)=>{
            const parsed = parseWithCompat(notificationSchema, notification);
            return Promise.resolve(handler(parsed));
        });
    }
    removeNotificationHandler(method) {
        this._notificationHandlers.delete(method);
    }
    _cleanupTaskProgressHandler(taskId) {
        const progressToken = this._taskProgressTokens.get(taskId);
        if (progressToken !== void 0) {
            this._progressHandlers.delete(progressToken);
            this._taskProgressTokens.delete(taskId);
        }
    }
    async _enqueueTaskMessage(taskId, message, sessionId) {
        if (!this._taskStore || !this._taskMessageQueue) {
            throw new Error("Cannot enqueue task message: taskStore and taskMessageQueue are not configured");
        }
        const maxQueueSize = this._options?.maxTaskQueueSize;
        await this._taskMessageQueue.enqueue(taskId, message, sessionId, maxQueueSize);
    }
    async _clearTaskQueue(taskId, sessionId) {
        if (this._taskMessageQueue) {
            const messages = await this._taskMessageQueue.dequeueAll(taskId, sessionId);
            for (const message of messages){
                if (message.type === "request" && isJSONRPCRequest(message.message)) {
                    const requestId = message.message.id;
                    const resolver = this._requestResolvers.get(requestId);
                    if (resolver) {
                        resolver(new McpError2(ErrorCode.InternalError, "Task cancelled or completed"));
                        this._requestResolvers.delete(requestId);
                    } else {
                        this._onerror(new Error(`Resolver missing for request ${requestId} during task ${taskId} cleanup`));
                    }
                }
            }
        }
    }
    async _waitForTaskUpdate(taskId, signal) {
        let interval = this._options?.defaultTaskPollInterval ?? 1e3;
        try {
            const task = await this._taskStore?.getTask(taskId);
            if (task?.pollInterval) {
                interval = task.pollInterval;
            }
        } catch  {}
        return new Promise((resolve36, reject2)=>{
            if (signal.aborted) {
                reject2(new McpError2(ErrorCode.InvalidRequest, "Request cancelled"));
                return;
            }
            const timeoutId = setTimeout(resolve36, interval);
            signal.addEventListener("abort", ()=>{
                clearTimeout(timeoutId);
                reject2(new McpError2(ErrorCode.InvalidRequest, "Request cancelled"));
            }, {
                once: true
            });
        });
    }
    requestTaskStore(request3, sessionId) {
        const taskStore = this._taskStore;
        if (!taskStore) {
            throw new Error("No task store configured");
        }
        return {
            createTask: async (taskParams)=>{
                if (!request3) {
                    throw new Error("No request provided");
                }
                return await taskStore.createTask(taskParams, request3.id, {
                    method: request3.method,
                    params: request3.params
                }, sessionId);
            },
            getTask: async (taskId)=>{
                const task = await taskStore.getTask(taskId, sessionId);
                if (!task) {
                    throw new McpError2(ErrorCode.InvalidParams, "Failed to retrieve task: Task not found");
                }
                return task;
            },
            storeTaskResult: async (taskId, status, result)=>{
                await taskStore.storeTaskResult(taskId, status, result, sessionId);
                const task = await taskStore.getTask(taskId, sessionId);
                if (task) {
                    const notification = TaskStatusNotificationSchema.parse({
                        method: "notifications/tasks/status",
                        params: task
                    });
                    await this.notification(notification);
                    if (isTerminal(task.status)) {
                        this._cleanupTaskProgressHandler(taskId);
                    }
                }
            },
            getTaskResult: (taskId)=>{
                return taskStore.getTaskResult(taskId, sessionId);
            },
            updateTaskStatus: async (taskId, status, statusMessage)=>{
                const task = await taskStore.getTask(taskId, sessionId);
                if (!task) {
                    throw new McpError2(ErrorCode.InvalidParams, `Task "${taskId}" not found - it may have been cleaned up`);
                }
                if (isTerminal(task.status)) {
                    throw new McpError2(ErrorCode.InvalidParams, `Cannot update task "${taskId}" from terminal status "${task.status}" to "${status}". Terminal states (completed, failed, cancelled) cannot transition to other states.`);
                }
                await taskStore.updateTaskStatus(taskId, status, statusMessage, sessionId);
                const updatedTask = await taskStore.getTask(taskId, sessionId);
                if (updatedTask) {
                    const notification = TaskStatusNotificationSchema.parse({
                        method: "notifications/tasks/status",
                        params: updatedTask
                    });
                    await this.notification(notification);
                    if (isTerminal(updatedTask.status)) {
                        this._cleanupTaskProgressHandler(taskId);
                    }
                }
            },
            listTasks: (cursor)=>{
                return taskStore.listTasks(cursor, sessionId);
            }
        };
    }
};

}
