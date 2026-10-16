import { defineOwn } from "../../../../../external_exports.js";
import { init_esm2 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/index.js";
import { proto3 } from "../../../../../node_modules/.pnpm/_8fe50e43c18d65d89126ee88d56fab73/node_modules/@bufbuild/protobuf/dist/esm/proto3.js";
import { Commit, init_chat_pb } from "./chat_pb.js";
import { ContextStatusUpdate, MissingContextItems, PotentiallyCachedContextItem, init_context_pb } from "./context_pb.js";
import { CppFileDiffHistory, init_cpp_pb } from "./cpp_pb.js";
import { CmdKDebugInfo, CmdKExternalLink, CodeBlock, CursorRule2, ExplicitContext, ImageProto, ModelDetails, init_utils_pb2 } from "./utils_pb.js";
import { CompactMessage, init_compact } from "../../../runtime/compact.js";
var __protoPackage129, __protoMessage3126, RerankCmdKContextRequest, RerankCmdKContextResponse, RerankTerminalCmdKContextRequest, RerankTerminalCmdKContextResponse, TerminalCmdKOptions, CmdKOptions, CmdKUpcomingEdit, CmdKPreviousEdit, StreamHypermodeRequest, StreamCmdKRequest, StreamCmdKRequest_BranchDiff, StreamCmdKRequest_BranchDiff_FileDiff, TimingInfo, StreamTerminalCmdKRequest, CmdKLegacyContext, StreamCmdKResponseContextWrapped, StreamTerminalCmdKResponseContextWrapped, StreamTerminalCmdKResponse, StreamTerminalCmdKResponse_TerminalCommand, StreamTerminalCmdKResponse_Chat, StreamTerminalCmdKResponse_StatusUpdate, StreamCmdKResponse, StreamCmdKResponse_EditStart, StreamCmdKResponse_EditStream, StreamCmdKResponse_EditEnd, StreamCmdKResponse_Chat, StreamCmdKResponse_StatusUpdate, GetRelevantChunksRequest, StreamGetRelevantChunksResponseContextWrapped, GetRelevantChunksResponse, GetRelevantChunksResponse_ChainOfThoughtStream, GetRelevantChunksResponse_CodeBlocks;
export { CmdKLegacyContext, CmdKOptions, CmdKPreviousEdit, CmdKUpcomingEdit, GetRelevantChunksRequest, GetRelevantChunksResponse, GetRelevantChunksResponse_ChainOfThoughtStream, GetRelevantChunksResponse_CodeBlocks, RerankCmdKContextRequest, RerankCmdKContextResponse, RerankTerminalCmdKContextRequest, RerankTerminalCmdKContextResponse, StreamCmdKRequest, StreamCmdKRequest_BranchDiff, StreamCmdKRequest_BranchDiff_FileDiff, StreamCmdKResponse, StreamCmdKResponseContextWrapped, StreamCmdKResponse_Chat, StreamCmdKResponse_EditEnd, StreamCmdKResponse_EditStart, StreamCmdKResponse_EditStream, StreamCmdKResponse_StatusUpdate, StreamGetRelevantChunksResponseContextWrapped, StreamHypermodeRequest, StreamTerminalCmdKRequest, StreamTerminalCmdKResponse, StreamTerminalCmdKResponseContextWrapped, StreamTerminalCmdKResponse_Chat, StreamTerminalCmdKResponse_StatusUpdate, StreamTerminalCmdKResponse_TerminalCommand, TerminalCmdKOptions, TimingInfo, __protoMessage3126, __protoPackage129 };
var __wakaru_init_cmdk_pb_initialized = false;
export function init_cmdk_pb() {
if (__wakaru_init_cmdk_pb_initialized) return;
__wakaru_init_cmdk_pb_initialized = true;
"use strict";
init_esm2();
init_context_pb();
init_utils_pb2();
init_cpp_pb();
init_chat_pb();
init_compact();
__protoPackage129 = "aiserver.v1.";
__protoMessage3126 = class extends CompactMessage {
    static get runtime() {
        return defineOwn(this, "runtime", proto3);
    }
    static $p() {
        return __protoPackage129;
    }
};
RerankCmdKContextRequest = class _RerankCmdKContextRequest extends __protoMessage3126 {
    constructor(data){
        super();
        this.contextItems = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerankCmdKContextRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerankCmdKContextRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerankCmdKContextRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerankCmdKContextRequest, a, b2);
    }
    static $() {
        return [
            "RerankCmdKContextRequest|1 context_items #0*|3 legacy_context #1|2 cmd_k_options #2",
            PotentiallyCachedContextItem,
            CmdKLegacyContext,
            CmdKOptions
        ];
    }
};
RerankCmdKContextResponse = class _RerankCmdKContextResponse extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerankCmdKContextResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerankCmdKContextResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerankCmdKContextResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerankCmdKContextResponse, a, b2);
    }
    static $() {
        return [
            "RerankCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response|3 did_call 8?",
            ContextStatusUpdate,
            MissingContextItems
        ];
    }
};
RerankTerminalCmdKContextRequest = class _RerankTerminalCmdKContextRequest extends __protoMessage3126 {
    constructor(data){
        super();
        this.contextItems = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerankTerminalCmdKContextRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerankTerminalCmdKContextRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerankTerminalCmdKContextRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerankTerminalCmdKContextRequest, a, b2);
    }
    static $() {
        return [
            "RerankTerminalCmdKContextRequest|1 context_items #0*|2 cmd_k_options #1",
            PotentiallyCachedContextItem,
            TerminalCmdKOptions
        ];
    }
};
RerankTerminalCmdKContextResponse = class _RerankTerminalCmdKContextResponse extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _RerankTerminalCmdKContextResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _RerankTerminalCmdKContextResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _RerankTerminalCmdKContextResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_RerankTerminalCmdKContextResponse, a, b2);
    }
    static $() {
        return [
            "RerankTerminalCmdKContextResponse|1 context_status_update #0 response|2 missing_context_items #1 response",
            ContextStatusUpdate,
            MissingContextItems
        ];
    }
};
TerminalCmdKOptions = class _TerminalCmdKOptions extends __protoMessage3126 {
    constructor(data){
        super();
        this.chatMode = false;
        this.adaCmdKContext = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TerminalCmdKOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TerminalCmdKOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TerminalCmdKOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TerminalCmdKOptions, a, b2);
    }
    static $() {
        return [
            "TerminalCmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_web 8?",
            ModelDetails
        ];
    }
};
CmdKOptions = class _CmdKOptions extends __protoMessage3126 {
    constructor(data){
        super();
        this.chatMode = false;
        this.adaCmdKContext = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CmdKOptions().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CmdKOptions().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CmdKOptions().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CmdKOptions, a, b2);
    }
    static $() {
        return [
            "CmdKOptions|3 model_details #0|1 chat_mode 8|2 ada_cmd_k_context 8|4 use_reranker 8?|5 use_web 8?|6 request_is_for_caching 8?",
            ModelDetails
        ];
    }
};
CmdKUpcomingEdit = class _CmdKUpcomingEdit extends __protoMessage3126 {
    constructor(data){
        super();
        this.originalLines = [];
        this.relativePath = "";
        this.extraContextAbove = [];
        this.extraContextBelow = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CmdKUpcomingEdit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CmdKUpcomingEdit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CmdKUpcomingEdit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CmdKUpcomingEdit, a, b2);
    }
    static $() {
        return [
            "CmdKUpcomingEdit|1 original_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"
        ];
    }
};
CmdKPreviousEdit = class _CmdKPreviousEdit extends __protoMessage3126 {
    constructor(data){
        super();
        this.originalLines = [];
        this.newLines = [];
        this.relativePath = "";
        this.extraContextAbove = [];
        this.extraContextBelow = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CmdKPreviousEdit().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CmdKPreviousEdit().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CmdKPreviousEdit().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CmdKPreviousEdit, a, b2);
    }
    static $() {
        return [
            "CmdKPreviousEdit|1 original_lines 9*|2 new_lines 9*|3 relative_path 9|4 extra_context_above 9*|5 extra_context_below 9*"
        ];
    }
};
StreamHypermodeRequest = class _StreamHypermodeRequest extends __protoMessage3126 {
    constructor(data){
        super();
        this.contextItems = [];
        this.sessionId = "";
        this.previousEdits = [];
        this.upcomingEdits = [];
        this.images = [];
        this.links = [];
        this.diffHistory = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamHypermodeRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamHypermodeRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamHypermodeRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamHypermodeRequest, a, b2);
    }
    static $() {
        return [
            "StreamHypermodeRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 hyper_model 9?|15 timing_info #9?",
            PotentiallyCachedContextItem,
            CmdKOptions,
            CmdKDebugInfo,
            CmdKLegacyContext,
            CmdKPreviousEdit,
            CmdKUpcomingEdit,
            ImageProto,
            CmdKExternalLink,
            CppFileDiffHistory,
            TimingInfo
        ];
    }
};
StreamCmdKRequest = class _StreamCmdKRequest extends __protoMessage3126 {
    constructor(data){
        super();
        this.contextItems = [];
        this.sessionId = "";
        this.previousEdits = [];
        this.upcomingEdits = [];
        this.images = [];
        this.links = [];
        this.diffHistory = [];
        this.rules = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKRequest, a, b2);
    }
    static $() {
        return [
            "StreamCmdKRequest|1 context_items #0*|2 cmd_k_options #1|4 cmd_k_debug_info #2|6 session_id 9|5 legacy_context #3|7 previous_edit #4?|8 previous_edits #4*|12 upcoming_edits #5*|9 use_big_cmdk_for_multi_file_edit 8?|10 images #6*|11 links #7*|13 diff_history #8*|14 diff_to_base_branch #9?|15 timing_info #10?|16 rules #11*",
            PotentiallyCachedContextItem,
            CmdKOptions,
            CmdKDebugInfo,
            CmdKLegacyContext,
            CmdKPreviousEdit,
            CmdKUpcomingEdit,
            ImageProto,
            CmdKExternalLink,
            CppFileDiffHistory,
            StreamCmdKRequest_BranchDiff,
            TimingInfo,
            CursorRule2
        ];
    }
};
StreamCmdKRequest_BranchDiff = class _StreamCmdKRequest_BranchDiff extends __protoMessage3126 {
    constructor(data){
        super();
        this.fileDiffs = [];
        this.commits = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKRequest_BranchDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKRequest_BranchDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKRequest_BranchDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKRequest_BranchDiff, a, b2);
    }
    static $() {
        return [
            "StreamCmdKRequest.BranchDiff|1 file_diffs #0*|2 commits #1*",
            StreamCmdKRequest_BranchDiff_FileDiff,
            Commit
        ];
    }
};
StreamCmdKRequest_BranchDiff_FileDiff = class _StreamCmdKRequest_BranchDiff_FileDiff extends __protoMessage3126 {
    constructor(data){
        super();
        this.fileName = "";
        this.diff = "";
        this.tooBig = false;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKRequest_BranchDiff_FileDiff().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKRequest_BranchDiff_FileDiff().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKRequest_BranchDiff_FileDiff().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKRequest_BranchDiff_FileDiff, a, b2);
    }
    static $() {
        return [
            "StreamCmdKRequest.BranchDiff.FileDiff|1 file_name 9|2 diff 9|3 too_big 8"
        ];
    }
};
TimingInfo = class _TimingInfo extends __protoMessage3126 {
    constructor(data){
        super();
        this.userInputTime = 0;
        this.streamCmdkTime = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _TimingInfo().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _TimingInfo().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _TimingInfo().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_TimingInfo, a, b2);
    }
    static $() {
        return [
            "TimingInfo|1 user_input_time 1|2 stream_cmdk_time 1"
        ];
    }
};
StreamTerminalCmdKRequest = class _StreamTerminalCmdKRequest extends __protoMessage3126 {
    constructor(data){
        super();
        this.contextItems = [];
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamTerminalCmdKRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamTerminalCmdKRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamTerminalCmdKRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamTerminalCmdKRequest, a, b2);
    }
    static $() {
        return [
            "StreamTerminalCmdKRequest|1 context_items #0*|2 cmd_k_options #1|6 session_id 9|5 legacy_context #2",
            PotentiallyCachedContextItem,
            TerminalCmdKOptions,
            CmdKLegacyContext
        ];
    }
};
CmdKLegacyContext = class _CmdKLegacyContext extends __protoMessage3126 {
    constructor(data){
        super();
        this.promptCodeBlocks = [];
        this.documentationIdentifiers = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _CmdKLegacyContext().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _CmdKLegacyContext().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _CmdKLegacyContext().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_CmdKLegacyContext, a, b2);
    }
    static $() {
        return [
            "CmdKLegacyContext|4 explicit_context #0|12 prompt_code_blocks #1*|10 documentation_identifiers 9*",
            ExplicitContext,
            CodeBlock
        ];
    }
};
StreamCmdKResponseContextWrapped = class _StreamCmdKResponseContextWrapped extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponseContextWrapped().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponseContextWrapped().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponseContextWrapped().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponseContextWrapped, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response",
            StreamCmdKResponse,
            ContextStatusUpdate,
            MissingContextItems
        ];
    }
};
StreamTerminalCmdKResponseContextWrapped = class _StreamTerminalCmdKResponseContextWrapped extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamTerminalCmdKResponseContextWrapped().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamTerminalCmdKResponseContextWrapped().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamTerminalCmdKResponseContextWrapped().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamTerminalCmdKResponseContextWrapped, a, b2);
    }
    static $() {
        return [
            "StreamTerminalCmdKResponseContextWrapped|1 real_response #0 response|2 context_status_update #1 response|3 missing_context_items #2 response",
            StreamTerminalCmdKResponse,
            ContextStatusUpdate,
            MissingContextItems
        ];
    }
};
StreamTerminalCmdKResponse = class _StreamTerminalCmdKResponse extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamTerminalCmdKResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamTerminalCmdKResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamTerminalCmdKResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamTerminalCmdKResponse, a, b2);
    }
    static $() {
        return [
            "StreamTerminalCmdKResponse|1 terminal_command #0 response|4 chat #1 response|5 status_update #2 response",
            StreamTerminalCmdKResponse_TerminalCommand,
            StreamTerminalCmdKResponse_Chat,
            StreamTerminalCmdKResponse_StatusUpdate
        ];
    }
};
StreamTerminalCmdKResponse_TerminalCommand = class _StreamTerminalCmdKResponse_TerminalCommand extends __protoMessage3126 {
    constructor(data){
        super();
        this.partialCommand = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamTerminalCmdKResponse_TerminalCommand().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamTerminalCmdKResponse_TerminalCommand().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamTerminalCmdKResponse_TerminalCommand().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamTerminalCmdKResponse_TerminalCommand, a, b2);
    }
    static $() {
        return [
            "StreamTerminalCmdKResponse.TerminalCommand|1 partial_command 9"
        ];
    }
};
StreamTerminalCmdKResponse_Chat = class _StreamTerminalCmdKResponse_Chat extends __protoMessage3126 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamTerminalCmdKResponse_Chat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamTerminalCmdKResponse_Chat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamTerminalCmdKResponse_Chat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamTerminalCmdKResponse_Chat, a, b2);
    }
    static $() {
        return [
            "StreamTerminalCmdKResponse.Chat|1 text 9"
        ];
    }
};
StreamTerminalCmdKResponse_StatusUpdate = class _StreamTerminalCmdKResponse_StatusUpdate extends __protoMessage3126 {
    constructor(data){
        super();
        this.messages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamTerminalCmdKResponse_StatusUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamTerminalCmdKResponse_StatusUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamTerminalCmdKResponse_StatusUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamTerminalCmdKResponse_StatusUpdate, a, b2);
    }
    static $() {
        return [
            "StreamTerminalCmdKResponse.StatusUpdate|1 messages 9*"
        ];
    }
};
StreamCmdKResponse = class _StreamCmdKResponse extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponse, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponse|1 edit_start #0 response|2 edit_stream #1 response|3 edit_end #2 response|4 chat #3 response|5 status_update #4 response",
            StreamCmdKResponse_EditStart,
            StreamCmdKResponse_EditStream,
            StreamCmdKResponse_EditEnd,
            StreamCmdKResponse_Chat,
            StreamCmdKResponse_StatusUpdate
        ];
    }
};
StreamCmdKResponse_EditStart = class _StreamCmdKResponse_EditStart extends __protoMessage3126 {
    constructor(data){
        super();
        this.startLineNumber = 0;
        this.editId = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponse_EditStart().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponse_EditStart().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponse_EditStart().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponse_EditStart, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponse.EditStart|1 start_line_number 5|2 edit_id 5|3 max_end_line_number_exclusive 5?|4 file_path 9?"
        ];
    }
};
StreamCmdKResponse_EditStream = class _StreamCmdKResponse_EditStream extends __protoMessage3126 {
    constructor(data){
        super();
        this.text = "";
        this.editId = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponse_EditStream().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponse_EditStream().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponse_EditStream().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponse_EditStream, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponse.EditStream|1 text 9|2 edit_id 5|3 file_path 9?"
        ];
    }
};
StreamCmdKResponse_EditEnd = class _StreamCmdKResponse_EditEnd extends __protoMessage3126 {
    constructor(data){
        super();
        this.endLineNumberExclusive = 0;
        this.editId = 0;
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponse_EditEnd().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponse_EditEnd().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponse_EditEnd().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponse_EditEnd, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponse.EditEnd|1 end_line_number_exclusive 5|2 edit_id 5|3 file_path 9?"
        ];
    }
};
StreamCmdKResponse_Chat = class _StreamCmdKResponse_Chat extends __protoMessage3126 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponse_Chat().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponse_Chat().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponse_Chat().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponse_Chat, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponse.Chat|1 text 9"
        ];
    }
};
StreamCmdKResponse_StatusUpdate = class _StreamCmdKResponse_StatusUpdate extends __protoMessage3126 {
    constructor(data){
        super();
        this.messages = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamCmdKResponse_StatusUpdate().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamCmdKResponse_StatusUpdate().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamCmdKResponse_StatusUpdate().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamCmdKResponse_StatusUpdate, a, b2);
    }
    static $() {
        return [
            "StreamCmdKResponse.StatusUpdate|1 messages 9*"
        ];
    }
};
GetRelevantChunksRequest = class _GetRelevantChunksRequest extends __protoMessage3126 {
    constructor(data){
        super();
        this.codeBlocks = [];
        this.contextItems = [];
        this.sessionId = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetRelevantChunksRequest().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetRelevantChunksRequest().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetRelevantChunksRequest().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetRelevantChunksRequest, a, b2);
    }
    static $() {
        return [
            "GetRelevantChunksRequest|1 code_blocks #0*|2 cmd_k_options #1|3 context_items #2*|4 session_id 9|5 legacy_context #3",
            CodeBlock,
            CmdKOptions,
            PotentiallyCachedContextItem,
            CmdKLegacyContext
        ];
    }
};
StreamGetRelevantChunksResponseContextWrapped = class _StreamGetRelevantChunksResponseContextWrapped extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _StreamGetRelevantChunksResponseContextWrapped().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _StreamGetRelevantChunksResponseContextWrapped().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _StreamGetRelevantChunksResponseContextWrapped().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_StreamGetRelevantChunksResponseContextWrapped, a, b2);
    }
    static $() {
        return [
            "StreamGetRelevantChunksResponseContextWrapped|1 real_response #0 response",
            GetRelevantChunksResponse
        ];
    }
};
GetRelevantChunksResponse = class _GetRelevantChunksResponse extends __protoMessage3126 {
    constructor(data){
        super();
        this.response = {
            case: void 0
        };
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetRelevantChunksResponse().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetRelevantChunksResponse().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetRelevantChunksResponse().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetRelevantChunksResponse, a, b2);
    }
    static $() {
        return [
            "GetRelevantChunksResponse|1 code_blocks #0 response|2 chain_of_thought_stream #1 response",
            GetRelevantChunksResponse_CodeBlocks,
            GetRelevantChunksResponse_ChainOfThoughtStream
        ];
    }
};
GetRelevantChunksResponse_ChainOfThoughtStream = class _GetRelevantChunksResponse_ChainOfThoughtStream extends __protoMessage3126 {
    constructor(data){
        super();
        this.text = "";
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetRelevantChunksResponse_ChainOfThoughtStream().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetRelevantChunksResponse_ChainOfThoughtStream().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetRelevantChunksResponse_ChainOfThoughtStream().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetRelevantChunksResponse_ChainOfThoughtStream, a, b2);
    }
    static $() {
        return [
            "GetRelevantChunksResponse.ChainOfThoughtStream|1 text 9"
        ];
    }
};
GetRelevantChunksResponse_CodeBlocks = class _GetRelevantChunksResponse_CodeBlocks extends __protoMessage3126 {
    constructor(data){
        super();
        this.codeBlocks = [];
        proto3.util.initPartial(data, this);
    }
    static fromBinary(bytes, options2) {
        return new _GetRelevantChunksResponse_CodeBlocks().fromBinary(bytes, options2);
    }
    static fromJson(jsonValue, options2) {
        return new _GetRelevantChunksResponse_CodeBlocks().fromJson(jsonValue, options2);
    }
    static fromJsonString(jsonString, options2) {
        return new _GetRelevantChunksResponse_CodeBlocks().fromJsonString(jsonString, options2);
    }
    static equals(a, b2) {
        return proto3.util.equals(_GetRelevantChunksResponse_CodeBlocks, a, b2);
    }
    static $() {
        return [
            "GetRelevantChunksResponse.CodeBlocks|1 code_blocks #0*",
            CodeBlock
        ];
    }
};

}
