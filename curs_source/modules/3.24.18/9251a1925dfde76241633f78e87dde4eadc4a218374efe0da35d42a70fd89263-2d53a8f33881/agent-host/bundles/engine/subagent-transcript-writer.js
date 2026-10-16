import { createLogger } from "../../../agent-kv/dist/subagent-states.js";
import { TranscriptStore, init_dist28 } from "../../../agent-transcript/dist/index.js";
import { init_dist } from "../../../context/dist/index.js";
import { getTranscriptRelativePath } from "../../../mcp_sandbox_policy_exports.js";
import { nodeFileWriter } from "../../../tree_chunk_napi_exports.js";
var import_promises52, import_node_path94, logger124, SubagentTranscriptWriter;
export { SubagentTranscriptWriter, import_node_path94, import_promises52, logger124 };
var __wakaru_init_subagent_transcript_writer_initialized = false;
export function init_subagent_transcript_writer() {
if (__wakaru_init_subagent_transcript_writer_initialized) return;
__wakaru_init_subagent_transcript_writer_initialized = true;
"use strict";
import_promises52 = require("node:fs/promises");
import_node_path94 = require("node:path");
init_dist28();
init_dist();
logger124 = createLogger("agent-host:subagent-transcript-writer");
SubagentTranscriptWriter = class {
    constructor(options2){
        this.writeChain = Promise.resolve();
        this.conversationId = options2.conversationId;
        const pathResolver = (conversationId, ext2)=>(0, import_node_path94.join)(options2.projectDir, getTranscriptRelativePath({
                conversationId,
                ext: ext2,
                kind: "subagent",
                parentConversationId: options2.parentConversationId
            }));
        this.transcriptPath = pathResolver(options2.conversationId, "jsonl");
        this.transcriptStore = new TranscriptStore(options2.projectDir, options2.blobStore, nodeFileWriter, {
            writeText: false,
            writeJsonl: true,
            pathResolver
        });
    }
    getTranscriptPath() {
        return this.transcriptPath;
    }
    async ensureTranscriptFile(ctx) {
        let ensuredPath;
        await this.enqueueWrite(ctx, async ()=>{
            await (0, import_promises52.mkdir)((0, import_node_path94.dirname)(this.transcriptPath), {
                recursive: true
            });
            await (0, import_promises52.writeFile)(this.transcriptPath, "", {
                flag: "a"
            });
            ensuredPath = this.transcriptPath;
        });
        return ensuredPath;
    }
    writeFromState(ctx, state) {
        void this.enqueueWrite(ctx, async ()=>{
            await this.transcriptStore.writeFromStateFull(ctx, state, this.conversationId);
        });
    }
    writeTurnEnded(ctx, state, turnEnded) {
        return this.enqueueWrite(ctx, async ()=>{
            await this.transcriptStore.writeFromStateFull(ctx, state, this.conversationId, {
                turnEnded
            });
        });
    }
    waitForPendingWrites() {
        return this.writeChain;
    }
    enqueueWrite(ctx, operation) {
        this.writeChain = this.writeChain.then(async ()=>{
            try {
                await operation();
            } catch (error3) {
                logger124.warn(ctx, "Subagent transcript write failed", {
                    conversationId: this.conversationId,
                    error: String(error3)
                });
            }
        });
        return this.writeChain;
    }
};

}
