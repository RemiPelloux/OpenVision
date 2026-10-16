import { init_dist5 } from "../../agent-kv/dist/index.js";
import { ProtoSerde, utf8Serde } from "../../agent-kv/dist/serde.js";
import { fromRedactedCoreMessage, jsonReplacer2, parseCoreMessageJson, toRedactedCoreMessage } from "../../mcp_sandbox_policy_exports.js";
import { AgentConversationTurnStructure, ConversationPlan, ConversationStateStructure, ConversationStep, ConversationSummary, ConversationSummaryArchive, ConversationTurn, ConversationTurnStructure, FileState, ShellCommand, ShellOutput, UserMessage, init_agent_pb } from "../../proto/dist/generated/agent/v1/agent_pb.js";
import { TodoItem, init_todo_tool_pb } from "../../proto/dist/generated/agent/v1/todo_tool_pb.js";
import { PrivacyCapability } from "../../redaction/dist/classification.js";
import { init_dist27 } from "../../redaction/dist/index.js";
var fastCoreMessageParseEnabled, UINT8ARRAY_MARKER, STRICT_HEX_RE, CoreMessageSerde2, coreMessageSerde2, RedactedCoreMessageSerde, RedactedProtoSerde, conversationTurnSerde, todoItemSerde2, agentConversationTurnStructureSerde, userMessageSerde2, conversationStepSerde2, conversationStateStructureSerde2, conversationTurnStructureSerde2, conversationSummarySerde2, conversationSummaryArchiveSerde, conversationPlanSerde, shellCommandSerde2, shellOutputSerde2, fileStateSerde;
export { CoreMessageSerde2, RedactedCoreMessageSerde, RedactedProtoSerde, STRICT_HEX_RE, UINT8ARRAY_MARKER, agentConversationTurnStructureSerde, conversationPlanSerde, conversationStateStructureSerde2, conversationStepSerde2, conversationSummaryArchiveSerde, conversationSummarySerde2, conversationTurnSerde, conversationTurnStructureSerde2, coreMessageSerde2, fastCoreMessageParseEnabled, fileStateSerde, shellCommandSerde2, shellOutputSerde2, todoItemSerde2, userMessageSerde2 };
var __wakaru_init_serde2_initialized = false;
export function init_serde2() {
if (__wakaru_init_serde2_initialized) return;
__wakaru_init_serde2_initialized = true;
"use strict";
init_dist5();
init_agent_pb();
init_todo_tool_pb();
init_dist27();
fastCoreMessageParseEnabled = false;
UINT8ARRAY_MARKER = '"__type":"Uint8Array"';
STRICT_HEX_RE = /^[0-9a-f]*$/;
CoreMessageSerde2 = class {
    serialize(value) {
        const json2 = JSON.stringify(value, jsonReplacer2);
        return utf8Serde.serialize(json2);
    }
    deserialize(blob) {
        const json2 = utf8Serde.deserialize(blob);
        return parseCoreMessageJson(json2);
    }
    getBlobType() {
        return {
            kind: "json"
        };
    }
};
coreMessageSerde2 = new CoreMessageSerde2();
RedactedCoreMessageSerde = class {
    constructor(privacyMode){
        this.privacyMode = privacyMode;
    }
    serialize(value) {
        const plainMessage = fromRedactedCoreMessage(value, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        const json2 = JSON.stringify(plainMessage, jsonReplacer2);
        return utf8Serde.serialize(json2);
    }
    deserialize(blob) {
        const json2 = utf8Serde.deserialize(blob);
        const plainMessage = parseCoreMessageJson(json2);
        return toRedactedCoreMessage(plainMessage, this.privacyMode);
    }
    getBlobType() {
        return {
            kind: "json"
        };
    }
};
RedactedProtoSerde = class {
    constructor(protoType, toRedacted, fromRedacted, privacyMode){
        this.protoType = protoType;
        this.toRedacted = toRedacted;
        this.fromRedacted = fromRedacted;
        this.privacyMode = privacyMode;
    }
    serialize(value) {
        const plainProto = this.fromRedacted(value, PrivacyCapability.UNSAFE_ALWAYS_ALLOWED);
        return plainProto.toBinary();
    }
    deserialize(blob) {
        const plainProto = this.protoType.fromBinary(blob);
        return this.toRedacted(plainProto, this.privacyMode);
    }
    getBlobType() {
        return {
            kind: "proto",
            typeName: this.protoType.typeName
        };
    }
};
conversationTurnSerde = new ProtoSerde(ConversationTurn);
todoItemSerde2 = new ProtoSerde(TodoItem);
agentConversationTurnStructureSerde = new ProtoSerde(AgentConversationTurnStructure);
userMessageSerde2 = new ProtoSerde(UserMessage);
conversationStepSerde2 = new ProtoSerde(ConversationStep);
conversationStateStructureSerde2 = new ProtoSerde(ConversationStateStructure);
conversationTurnStructureSerde2 = new ProtoSerde(ConversationTurnStructure);
conversationSummarySerde2 = new ProtoSerde(ConversationSummary);
conversationSummaryArchiveSerde = new ProtoSerde(ConversationSummaryArchive);
conversationPlanSerde = new ProtoSerde(ConversationPlan);
shellCommandSerde2 = new ProtoSerde(ShellCommand);
shellOutputSerde2 = new ProtoSerde(ShellOutput);
fileStateSerde = new ProtoSerde(FileState);

}
