import { applyElicitationDefaults, assertClientRequestTaskCapability, assertToolsCallTaskCapability, getObjectShape, getSupportedElicitationModes, isZ4Schema, mergeCapabilities, safeParse3 } from "../../../../../../../../../coerce_exports.js";
import { ExperimentalClientTasks, init_client } from "../experimental/tasks/client.js";
import { init_helpers } from "../experimental/tasks/helpers.js";
import { init_zod_compat } from "../server/zod-compat.js";
import { Protocol, init_protocol2 } from "../shared/protocol.js";
import { CallToolResultSchema, CompleteResultSchema, CreateMessageRequestSchema, CreateMessageResultSchema, CreateTaskResultSchema, ElicitRequestSchema, ElicitResultSchema, EmptyResultSchema, ErrorCode, GetPromptResultSchema, InitializeResultSchema, LATEST_PROTOCOL_VERSION, ListChangedOptionsBaseSchema, ListPromptsResultSchema, ListResourceTemplatesResultSchema, ListResourcesResultSchema, ListToolsResultSchema, McpError2, PromptListChangedNotificationSchema, ReadResourceResultSchema, ResourceListChangedNotificationSchema, SUPPORTED_PROTOCOL_VERSIONS, ToolListChangedNotificationSchema, init_types8 } from "../types.js";
import { AjvJsonSchemaValidator, init_ajv_provider } from "../validation/ajv-provider.js";
var Client;
export { Client };
var __wakaru_init_client2_initialized = false;
export function init_client2() {
if (__wakaru_init_client2_initialized) return;
__wakaru_init_client2_initialized = true;
init_protocol2();
init_types8();
init_ajv_provider();
init_zod_compat();
init_client();
init_helpers();
Client = class extends Protocol {
    constructor(_clientInfo, options2){
        super(options2);
        this._clientInfo = _clientInfo;
        this._cachedToolOutputValidators = new Map();
        this._cachedKnownTaskTools = new Set();
        this._cachedRequiredTaskTools = new Set();
        this._listChangedDebounceTimers = new Map();
        this._capabilities = options2?.capabilities ?? {};
        this._jsonSchemaValidator = options2?.jsonSchemaValidator ?? new AjvJsonSchemaValidator();
        if (options2?.listChanged) {
            this._pendingListChangedConfig = options2.listChanged;
        }
    }
    _setupListChangedHandlers(config2) {
        if (config2.tools && this._serverCapabilities?.tools?.listChanged) {
            this._setupListChangedHandler("tools", ToolListChangedNotificationSchema, config2.tools, async ()=>{
                const result = await this.listTools();
                return result.tools;
            });
        }
        if (config2.prompts && this._serverCapabilities?.prompts?.listChanged) {
            this._setupListChangedHandler("prompts", PromptListChangedNotificationSchema, config2.prompts, async ()=>{
                const result = await this.listPrompts();
                return result.prompts;
            });
        }
        if (config2.resources && this._serverCapabilities?.resources?.listChanged) {
            this._setupListChangedHandler("resources", ResourceListChangedNotificationSchema, config2.resources, async ()=>{
                const result = await this.listResources();
                return result.resources;
            });
        }
    }
    get experimental() {
        if (!this._experimental) {
            this._experimental = {
                tasks: new ExperimentalClientTasks(this)
            };
        }
        return this._experimental;
    }
    registerCapabilities(capabilities) {
        if (this.transport) {
            throw new Error("Cannot register capabilities after connecting to transport");
        }
        this._capabilities = mergeCapabilities(this._capabilities, capabilities);
    }
    setRequestHandler(requestSchema, handler) {
        const shape = getObjectShape(requestSchema);
        const methodSchema = shape?.method;
        if (!methodSchema) {
            throw new Error("Schema is missing a method literal");
        }
        let methodValue;
        if (isZ4Schema(methodSchema)) {
            const v4Schema = methodSchema;
            const v4Def = v4Schema._zod?.def;
            methodValue = v4Def?.value ?? v4Schema.value;
        } else {
            const v3Schema = methodSchema;
            const legacyDef = v3Schema._def;
            methodValue = legacyDef?.value ?? v3Schema.value;
        }
        if (typeof methodValue !== "string") {
            throw new Error("Schema method literal must be a string");
        }
        const method = methodValue;
        if (method === "elicitation/create") {
            const wrappedHandler = async (request3, extra)=>{
                const validatedRequest = safeParse3(ElicitRequestSchema, request3);
                if (!validatedRequest.success) {
                    const errorMessage4 = validatedRequest.error instanceof Error ? validatedRequest.error.message : String(validatedRequest.error);
                    throw new McpError2(ErrorCode.InvalidParams, `Invalid elicitation request: ${errorMessage4}`);
                }
                const { params } = validatedRequest.data;
                params.mode = params.mode ?? "form";
                const { supportsFormMode, supportsUrlMode } = getSupportedElicitationModes(this._capabilities.elicitation);
                if (params.mode === "form" && !supportsFormMode) {
                    throw new McpError2(ErrorCode.InvalidParams, "Client does not support form-mode elicitation requests");
                }
                if (params.mode === "url" && !supportsUrlMode) {
                    throw new McpError2(ErrorCode.InvalidParams, "Client does not support URL-mode elicitation requests");
                }
                const result = await Promise.resolve(handler(request3, extra));
                if (params.task) {
                    const taskValidationResult = safeParse3(CreateTaskResultSchema, result);
                    if (!taskValidationResult.success) {
                        const errorMessage4 = taskValidationResult.error instanceof Error ? taskValidationResult.error.message : String(taskValidationResult.error);
                        throw new McpError2(ErrorCode.InvalidParams, `Invalid task creation result: ${errorMessage4}`);
                    }
                    return taskValidationResult.data;
                }
                const validationResult = safeParse3(ElicitResultSchema, result);
                if (!validationResult.success) {
                    const errorMessage4 = validationResult.error instanceof Error ? validationResult.error.message : String(validationResult.error);
                    throw new McpError2(ErrorCode.InvalidParams, `Invalid elicitation result: ${errorMessage4}`);
                }
                const validatedResult = validationResult.data;
                const requestedSchema = params.mode === "form" ? params.requestedSchema : void 0;
                if (params.mode === "form" && validatedResult.action === "accept" && validatedResult.content && requestedSchema) {
                    if (this._capabilities.elicitation?.form?.applyDefaults) {
                        try {
                            applyElicitationDefaults(requestedSchema, validatedResult.content);
                        } catch  {}
                    }
                }
                return validatedResult;
            };
            return super.setRequestHandler(requestSchema, wrappedHandler);
        }
        if (method === "sampling/createMessage") {
            const wrappedHandler = async (request3, extra)=>{
                const validatedRequest = safeParse3(CreateMessageRequestSchema, request3);
                if (!validatedRequest.success) {
                    const errorMessage4 = validatedRequest.error instanceof Error ? validatedRequest.error.message : String(validatedRequest.error);
                    throw new McpError2(ErrorCode.InvalidParams, `Invalid sampling request: ${errorMessage4}`);
                }
                const { params } = validatedRequest.data;
                const result = await Promise.resolve(handler(request3, extra));
                if (params.task) {
                    const taskValidationResult = safeParse3(CreateTaskResultSchema, result);
                    if (!taskValidationResult.success) {
                        const errorMessage4 = taskValidationResult.error instanceof Error ? taskValidationResult.error.message : String(taskValidationResult.error);
                        throw new McpError2(ErrorCode.InvalidParams, `Invalid task creation result: ${errorMessage4}`);
                    }
                    return taskValidationResult.data;
                }
                const validationResult = safeParse3(CreateMessageResultSchema, result);
                if (!validationResult.success) {
                    const errorMessage4 = validationResult.error instanceof Error ? validationResult.error.message : String(validationResult.error);
                    throw new McpError2(ErrorCode.InvalidParams, `Invalid sampling result: ${errorMessage4}`);
                }
                return validationResult.data;
            };
            return super.setRequestHandler(requestSchema, wrappedHandler);
        }
        return super.setRequestHandler(requestSchema, handler);
    }
    assertCapability(capability, method) {
        if (!this._serverCapabilities?.[capability]) {
            throw new Error(`Server does not support ${capability} (required for ${method})`);
        }
    }
    async connect(transport, options2) {
        await super.connect(transport);
        if (transport.sessionId !== void 0) {
            return;
        }
        try {
            const result = await this.request({
                method: "initialize",
                params: {
                    protocolVersion: LATEST_PROTOCOL_VERSION,
                    capabilities: this._capabilities,
                    clientInfo: this._clientInfo
                }
            }, InitializeResultSchema, options2);
            if (result === void 0) {
                throw new Error(`Server sent invalid initialize result: ${result}`);
            }
            if (!SUPPORTED_PROTOCOL_VERSIONS.includes(result.protocolVersion)) {
                throw new Error(`Server's protocol version is not supported: ${result.protocolVersion}`);
            }
            this._serverCapabilities = result.capabilities;
            this._serverVersion = result.serverInfo;
            if (transport.setProtocolVersion) {
                transport.setProtocolVersion(result.protocolVersion);
            }
            this._instructions = result.instructions;
            await this.notification({
                method: "notifications/initialized"
            });
            if (this._pendingListChangedConfig) {
                this._setupListChangedHandlers(this._pendingListChangedConfig);
                this._pendingListChangedConfig = void 0;
            }
        } catch (error3) {
            void this.close();
            throw error3;
        }
    }
    getServerCapabilities() {
        return this._serverCapabilities;
    }
    getServerVersion() {
        return this._serverVersion;
    }
    getInstructions() {
        return this._instructions;
    }
    assertCapabilityForMethod(method) {
        switch(method){
            case "logging/setLevel":
                if (!this._serverCapabilities?.logging) {
                    throw new Error(`Server does not support logging (required for ${method})`);
                }
                break;
            case "prompts/get":
            case "prompts/list":
                if (!this._serverCapabilities?.prompts) {
                    throw new Error(`Server does not support prompts (required for ${method})`);
                }
                break;
            case "resources/list":
            case "resources/templates/list":
            case "resources/read":
            case "resources/subscribe":
            case "resources/unsubscribe":
                if (!this._serverCapabilities?.resources) {
                    throw new Error(`Server does not support resources (required for ${method})`);
                }
                if (method === "resources/subscribe" && !this._serverCapabilities.resources.subscribe) {
                    throw new Error(`Server does not support resource subscriptions (required for ${method})`);
                }
                break;
            case "tools/call":
            case "tools/list":
                if (!this._serverCapabilities?.tools) {
                    throw new Error(`Server does not support tools (required for ${method})`);
                }
                break;
            case "completion/complete":
                if (!this._serverCapabilities?.completions) {
                    throw new Error(`Server does not support completions (required for ${method})`);
                }
                break;
            case "initialize":
                break;
            case "ping":
                break;
        }
    }
    assertNotificationCapability(method) {
        switch(method){
            case "notifications/roots/list_changed":
                if (!this._capabilities.roots?.listChanged) {
                    throw new Error(`Client does not support roots list changed notifications (required for ${method})`);
                }
                break;
            case "notifications/initialized":
                break;
            case "notifications/cancelled":
                break;
            case "notifications/progress":
                break;
        }
    }
    assertRequestHandlerCapability(method) {
        if (!this._capabilities) {
            return;
        }
        switch(method){
            case "sampling/createMessage":
                if (!this._capabilities.sampling) {
                    throw new Error(`Client does not support sampling capability (required for ${method})`);
                }
                break;
            case "elicitation/create":
                if (!this._capabilities.elicitation) {
                    throw new Error(`Client does not support elicitation capability (required for ${method})`);
                }
                break;
            case "roots/list":
                if (!this._capabilities.roots) {
                    throw new Error(`Client does not support roots capability (required for ${method})`);
                }
                break;
            case "tasks/get":
            case "tasks/list":
            case "tasks/result":
            case "tasks/cancel":
                if (!this._capabilities.tasks) {
                    throw new Error(`Client does not support tasks capability (required for ${method})`);
                }
                break;
            case "ping":
                break;
        }
    }
    assertTaskCapability(method) {
        assertToolsCallTaskCapability(this._serverCapabilities?.tasks?.requests, method, "Server");
    }
    assertTaskHandlerCapability(method) {
        if (!this._capabilities) {
            return;
        }
        assertClientRequestTaskCapability(this._capabilities.tasks?.requests, method, "Client");
    }
    async ping(options2) {
        return this.request({
            method: "ping"
        }, EmptyResultSchema, options2);
    }
    async complete(params, options2) {
        return this.request({
            method: "completion/complete",
            params
        }, CompleteResultSchema, options2);
    }
    async setLoggingLevel(level, options2) {
        return this.request({
            method: "logging/setLevel",
            params: {
                level
            }
        }, EmptyResultSchema, options2);
    }
    async getPrompt(params, options2) {
        return this.request({
            method: "prompts/get",
            params
        }, GetPromptResultSchema, options2);
    }
    async listPrompts(params, options2) {
        return this.request({
            method: "prompts/list",
            params
        }, ListPromptsResultSchema, options2);
    }
    async listResources(params, options2) {
        return this.request({
            method: "resources/list",
            params
        }, ListResourcesResultSchema, options2);
    }
    async listResourceTemplates(params, options2) {
        return this.request({
            method: "resources/templates/list",
            params
        }, ListResourceTemplatesResultSchema, options2);
    }
    async readResource(params, options2) {
        return this.request({
            method: "resources/read",
            params
        }, ReadResourceResultSchema, options2);
    }
    async subscribeResource(params, options2) {
        return this.request({
            method: "resources/subscribe",
            params
        }, EmptyResultSchema, options2);
    }
    async unsubscribeResource(params, options2) {
        return this.request({
            method: "resources/unsubscribe",
            params
        }, EmptyResultSchema, options2);
    }
    async callTool(params, resultSchema = CallToolResultSchema, options2) {
        if (this.isToolTaskRequired(params.name)) {
            throw new McpError2(ErrorCode.InvalidRequest, `Tool "${params.name}" requires task-based execution. Use client.experimental.tasks.callToolStream() instead.`);
        }
        const result = await this.request({
            method: "tools/call",
            params
        }, resultSchema, options2);
        const validator2 = this.getToolOutputValidator(params.name);
        if (validator2) {
            if (!result.structuredContent && !result.isError) {
                throw new McpError2(ErrorCode.InvalidRequest, `Tool ${params.name} has an output schema but did not return structured content`);
            }
            if (result.structuredContent) {
                try {
                    const validationResult = validator2(result.structuredContent);
                    if (!validationResult.valid) {
                        throw new McpError2(ErrorCode.InvalidParams, `Structured content does not match the tool's output schema: ${validationResult.errorMessage}`);
                    }
                } catch (error3) {
                    if (error3 instanceof McpError2) {
                        throw error3;
                    }
                    throw new McpError2(ErrorCode.InvalidParams, `Failed to validate structured content: ${error3 instanceof Error ? error3.message : String(error3)}`);
                }
            }
        }
        return result;
    }
    isToolTask(toolName) {
        if (!this._serverCapabilities?.tasks?.requests?.tools?.call) {
            return false;
        }
        return this._cachedKnownTaskTools.has(toolName);
    }
    isToolTaskRequired(toolName) {
        return this._cachedRequiredTaskTools.has(toolName);
    }
    cacheToolMetadata(tools) {
        this._cachedToolOutputValidators.clear();
        this._cachedKnownTaskTools.clear();
        this._cachedRequiredTaskTools.clear();
        for (const tool of tools){
            if (tool.outputSchema) {
                const toolValidator = this._jsonSchemaValidator.getValidator(tool.outputSchema);
                this._cachedToolOutputValidators.set(tool.name, toolValidator);
            }
            const taskSupport = tool.execution?.taskSupport;
            if (taskSupport === "required" || taskSupport === "optional") {
                this._cachedKnownTaskTools.add(tool.name);
            }
            if (taskSupport === "required") {
                this._cachedRequiredTaskTools.add(tool.name);
            }
        }
    }
    getToolOutputValidator(toolName) {
        return this._cachedToolOutputValidators.get(toolName);
    }
    async listTools(params, options2) {
        const result = await this.request({
            method: "tools/list",
            params
        }, ListToolsResultSchema, options2);
        this.cacheToolMetadata(result.tools);
        return result;
    }
    _setupListChangedHandler(listType, notificationSchema, options2, fetcher) {
        const parseResult = ListChangedOptionsBaseSchema.safeParse(options2);
        if (!parseResult.success) {
            throw new Error(`Invalid ${listType} listChanged options: ${parseResult.error.message}`);
        }
        if (typeof options2.onChanged !== "function") {
            throw new Error(`Invalid ${listType} listChanged options: onChanged must be a function`);
        }
        const { autoRefresh, debounceMs } = parseResult.data;
        const { onChanged } = options2;
        const refresh = async ()=>{
            if (!autoRefresh) {
                onChanged(null, null);
                return;
            }
            try {
                const items = await fetcher();
                onChanged(null, items);
            } catch (e) {
                const error3 = e instanceof Error ? e : new Error(String(e));
                onChanged(error3, null);
            }
        };
        const handler = ()=>{
            if (debounceMs) {
                const existingTimer = this._listChangedDebounceTimers.get(listType);
                if (existingTimer) {
                    clearTimeout(existingTimer);
                }
                const timer2 = setTimeout(refresh, debounceMs);
                this._listChangedDebounceTimers.set(listType, timer2);
            } else {
                refresh();
            }
        };
        this.setNotificationHandler(notificationSchema, handler);
    }
    async sendRootsListChanged() {
        return this.notification({
            method: "notifications/roots/list_changed"
        });
    }
};

}
