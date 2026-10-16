import { createSpan } from "../../../../agent-kv/dist/controlled.js";
import { createLogger } from "../../../../agent-kv/dist/subagent-states.js";
import { init_dist } from "../../../../context/dist/index.js";
import { dedupePreferringAgentStore } from "../../../../dist_exports2.js";
import { init_agent_skills_prompt_order } from "./agent-skills-prompt-order.js";
import { NO_AGENT_STORE_SKILLS, init_skill_dedupe } from "./skill-dedupe.js";
import { BUILTIN_SKILL_CONFIG_DIR, init_skill_discovery } from "./skill-discovery.js";
import { isManagedSkillPath, isPathSuffixMatch, sortAgentSkillsForPromptOrder } from "../../../../mcp_sandbox_policy_exports.js";
var import_node_util11, __addDisposableResource46, __disposeResources46, log4, logger34, MergedAgentSkillsService, MANAGED_SKILL_PATH_SEGMENT;
export { MANAGED_SKILL_PATH_SEGMENT, MergedAgentSkillsService, __addDisposableResource46, __disposeResources46, import_node_util11, log4, logger34 };
var __wakaru_init_agent_skills_service_initialized = false;
export function init_agent_skills_service() {
if (__wakaru_init_agent_skills_service_initialized) return;
__wakaru_init_agent_skills_service_initialized = true;
"use strict";
import_node_util11 = require("node:util");
init_dist();
init_agent_skills_prompt_order();
init_skill_dedupe();
init_skill_discovery();
__addDisposableResource46 = function(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose2, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose2 = value[Symbol.asyncDispose];
        }
        if (dispose2 === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose2 = value[Symbol.dispose];
            if (async) inner = dispose2;
        }
        if (typeof dispose2 !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose2 = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value,
            dispose: dispose2,
            async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
};
__disposeResources46 = (function(SuppressedError2) {
    return function(env) {
        function fail3(e) {
            env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s3 = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s3 === 1) return s3 = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s3 |= 2, Promise.resolve(result).then(next, function(e) {
                            fail3(e);
                            return next();
                        });
                    } else s3 |= 1;
                } catch (e) {
                    fail3(e);
                }
            }
            if (s3 === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    };
})(typeof SuppressedError === "function" ? SuppressedError : function(error3, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error3, e.suppressed = suppressed, e;
});
log4 = (0, import_node_util11.debuglog)("merged-agent-skills");
logger34 = createLogger("merged-agent-skills");
MergedAgentSkillsService = class _MergedAgentSkillsService {
    constructor(services, getDisabledManagedSkillPaths = ()=>[], getPromptSortContext){
        this.services = services;
        this.getDisabledManagedSkillPaths = getDisabledManagedSkillPaths;
        this.getPromptSortContext = getPromptSortContext;
        this.onChangeCallbacks = new Set();
    }
    async getAllAgentSkills(ctx) {
        const env_1 = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const span = __addDisposableResource46(env_1, createSpan(ctx.withName("MergedAgentSkillsService.getAllAgentSkills")), false);
            const allPromises = this.services.map((service)=>service.getAllAgentSkills(span.ctx).catch((err)=>{
                    log4("Failed to load agent skills from service: %s", err instanceof Error ? err.message : String(err));
                    return [];
                }));
            const readDisabledManagedSkillPaths = async ()=>{
                try {
                    return {
                        ok: true,
                        paths: await this.getDisabledManagedSkillPaths()
                    };
                } catch (err) {
                    logger34.warn(span.ctx, "getDisabledManagedSkillPaths failed; failing closed by dropping all managed skills for this call", {
                        error: err instanceof Error ? err.message : String(err)
                    });
                    return {
                        ok: false
                    };
                }
            };
            const [allArrays, disabledPathsRead] = await Promise.all([
                Promise.all(allPromises),
                readDisabledManagedSkillPaths()
            ]);
            const allSkills = allArrays.flat();
            const sortContext = this.getPromptSortContext?.();
            const deduped = dedupePreferringAgentStore(allSkills, sortContext ?? NO_AGENT_STORE_SKILLS);
            let result = deduped;
            if (!disabledPathsRead.ok) {
                result = deduped.filter((skill)=>!isManagedSkillPath(skill.fullPath));
            } else if (disabledPathsRead.paths.length > 0) {
                result = deduped.filter((skill)=>!isPathSuffixMatch(skill.fullPath, disabledPathsRead.paths));
            }
            if (sortContext !== void 0) {
                return sortAgentSkillsForPromptOrder(result, sortContext);
            }
            return result;
        } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        } finally{
            __disposeResources46(env_1);
        }
    }
    reload(ctx) {
        for (const service of this.services){
            service.reload(ctx);
        }
    }
    scheduleDidChangeSkills() {
        if (this.changeTimer !== void 0) {
            return;
        }
        this.changeTimer = setTimeout(()=>{
            this.changeTimer = void 0;
            for (const callback of Array.from(this.onChangeCallbacks)){
                callback();
            }
        }, _MergedAgentSkillsService.CHANGE_COALESCE_MS);
    }
    ensureChangeListenersRegistered() {
        if (this.disposeChangeListeners !== void 0) {
            return;
        }
        this.disposeChangeListeners = this.services.map((service)=>service.onDidChangeSkills(()=>this.scheduleDidChangeSkills()));
    }
    disposeChangeListenersIfUnused() {
        if (this.onChangeCallbacks.size > 0 || this.disposeChangeListeners === void 0) {
            return;
        }
        for (const dispose2 of this.disposeChangeListeners){
            dispose2();
        }
        this.disposeChangeListeners = void 0;
        if (this.changeTimer !== void 0) {
            clearTimeout(this.changeTimer);
            this.changeTimer = void 0;
        }
    }
    onDidChangeSkills(callback) {
        this.onChangeCallbacks.add(callback);
        this.ensureChangeListenersRegistered();
        return ()=>{
            this.onChangeCallbacks.delete(callback);
            this.disposeChangeListenersIfUnused();
        };
    }
    dispose() {
        if (this.changeTimer !== void 0) {
            clearTimeout(this.changeTimer);
            this.changeTimer = void 0;
        }
        this.onChangeCallbacks.clear();
        if (this.disposeChangeListeners !== void 0) {
            for (const dispose2 of this.disposeChangeListeners){
                dispose2();
            }
            this.disposeChangeListeners = void 0;
        }
        for (const service of this.services){
            service.dispose();
        }
    }
};
MergedAgentSkillsService.CHANGE_COALESCE_MS = 1500;
MANAGED_SKILL_PATH_SEGMENT = `/${BUILTIN_SKILL_CONFIG_DIR.configDir}/${BUILTIN_SKILL_CONFIG_DIR.subdir}/`;

}
