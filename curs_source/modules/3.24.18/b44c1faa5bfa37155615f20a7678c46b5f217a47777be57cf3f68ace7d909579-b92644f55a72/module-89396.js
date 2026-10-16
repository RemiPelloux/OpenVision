"use strict";
require.d(exports, {
    TT: ()=>C,
    DS: ()=>S,
    Jy: ()=>T,
    SW: ()=>L,
    Lz: ()=>E,
    $q: ()=>g,
    ag: ()=>R,
    ip: ()=>P,
    q8: ()=>B,
    iT: ()=>F,
    Ww: ()=>U,
    bb: ()=>J,
    _K: ()=>y,
    GE: ()=>b,
    nf: ()=>_,
    vB: ()=>O,
    sG: ()=>N,
    nq: ()=>A,
    _G: ()=>w,
    T3: ()=>M,
    CB: ()=>q,
    yb: ()=>D,
    yW: ()=>v,
    ng: ()=>k,
    uw: ()=>x,
    X7: ()=>I
});
var n = require("./module-36038.js"), s = require("./module-8592.js");
const o = "agent.v1.";
s.HL;
var i = (0, s.QT)(n.proto3, o, "PackageType", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "CURSOR_PROJECT"
    ],
    [
        2,
        "CURSOR_PERSONAL"
    ],
    [
        3,
        "CLAUDE_SKILL"
    ],
    [
        4,
        "CLAUDE_PLUGIN"
    ]
], 1);
var a = require("./module-43955.js"), c = require("./module-91881.js"), l = require("./module-34175.js"), u = require("./module-72730.js"), d = require("./module-11491.js"), p = require("./module-83133.js"), m = require("./module-38427.js");
const h = "agent.v1.";
class f extends s.HL {
    static get runtime() {
        return (0, s.kU)(this, "runtime", n.proto3);
    }
    static $p() {
        return h;
    }
}
var g = (0, s.QT)(n.proto3, h, "MountedAgentStoreKind", [
    [
        0,
        "UNSPECIFIED"
    ],
    [
        1,
        "SELF"
    ],
    [
        2,
        "PEER"
    ],
    [
        3,
        "SHARE"
    ],
    [
        4,
        "PRINCIPAL"
    ]
], 1);
class y extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new y).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new y).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new y).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(y, e, t);
    }
    static $() {
        return [
            "RequestContextArgs|2 notes_session_id 9?|3 workspace_id 9?|4 read_only_pinned_tree_sha 9?|5 read_only_plugin_cache_root 9?|7 use_cached 8?|8 wait_for_workspace_cache 8?"
        ];
    }
}
class w extends f {
    constructor(e){
        super(), this.result = {
            case: void 0
        }, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new w).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new w).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new w).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(w, e, t);
    }
    static $() {
        return [
            "RequestContextResult|1 success #0 result|2 error #1 result|3 rejected #2 result",
            v,
            _,
            A
        ];
    }
}
class v extends f {
    constructor(e){
        super(), n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new v).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new v).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new v).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(v, e, t);
    }
    static $() {
        return [
            "RequestContextSuccess|1 request_context #0|2 served_from_disk_cache 8?",
            J
        ];
    }
}
class _ extends f {
    constructor(e){
        super(), this.error = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new _).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new _).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new _).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(_, e, t);
    }
    static $() {
        return [
            "RequestContextError|1 error 9"
        ];
    }
}
class A extends f {
    constructor(e){
        super(), this.reason = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new A).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new A).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new A).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(A, e, t);
    }
    static $() {
        return [
            "RequestContextRejected|1 reason 9"
        ];
    }
}
class S extends f {
    constructor(e){
        super(), this.path = "", this.status = "", this.branchName = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new S).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new S).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new S).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(S, e, t);
    }
    static $() {
        return [
            "GitRepoInfo|1 path 9|2 status 9|3 branch_name 9|4 remote_url 9?|5 previous_branch_is_ancestor 8?|6 is_origin_backed 8?"
        ];
    }
}
class b extends f {
    constructor(e){
        super(), this.osVersion = "", this.workspacePaths = [], this.shell = "", this.sandboxEnabled = !1, this.terminalsFolder = "", this.agentSharedNotesFolder = "", this.agentConversationNotesFolder = "", this.timeZone = "", this.projectFolder = "", this.agentTranscriptsFolder = "", this.sandboxNetworkExplicitAllowlist = [], this.mountedAgentStores = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new b).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new b).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new b).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(b, e, t);
    }
    static $() {
        return [
            "RequestContextEnv|1 os_version 9|2 workspace_paths 9*|3 shell 9|5 sandbox_enabled 8|7 terminals_folder 9|8 agent_shared_notes_folder 9|9 agent_conversation_notes_folder 9|10 time_zone 9|11 project_folder 9|12 agent_transcripts_folder 9|13 artifacts_folder 9?|14 sandbox_supported 8?|16 sandbox_network_has_defaults 8?|17 sandbox_network_explicit_allowlist 9*|18 secret_redaction_enabled 8?|19 computer_use_supported 8?|20 is_working_dir_home_dir 8?|21 process_working_directory 9?|22 smart_mode_classifier_auto_mode_enabled 8?|23 dev_force_next_smart_mode_classifier_block_token 9?|24 dev_delay_next_smart_mode_classifier_token 9?|25 mounted_agent_stores #0*|26 user_agent_store_web_context #1?|27 dev_mock_prompt_time #2?|28 agent_store_dynamic_mount_enabled 8?",
            E,
            I,
            n.Timestamp
        ];
    }
}
class E extends f {
    constructor(e){
        super(), this.path = "", this.kind = g.UNSPECIFIED, this.readOnly = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new E).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new E).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new E).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(E, e, t);
    }
    static $() {
        return [
            "MountedAgentStore|1 path 9|2 kind #0|3 alias 9?|4 read_only 8|5 inherited_from_path 9?",
            g
        ];
    }
}
class I extends f {
    constructor(e){
        super(), this.storeId = "", this.portalBaseUrl = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new I).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new I).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new I).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(I, e, t);
    }
    static $() {
        return [
            "UserAgentStoreWebContext|1 store_id 9|2 portal_base_url 9"
        ];
    }
}
class C extends f {
    constructor(e){
        super(), this.logPath = "", this.serverEndpoint = "", this.sessionId = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new C).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new C).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new C).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(C, e, t);
    }
    static $() {
        return [
            "DebugModeConfig|1 log_path 9|2 server_endpoint 9|3 session_id 9"
        ];
    }
}
class k extends f {
    constructor(e){
        super(), this.name = "", this.description = "", this.folderPath = "", this.enabled = !1, this.readmeFilePath = "", this.packageType = i.UNSPECIFIED, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new k).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new k).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new k).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(k, e, t);
    }
    static $() {
        return [
            "SkillDescriptor|1 name 9|2 description 9|3 folder_path 9|4 enabled 8|5 parse_error 9?|6 readme_file_path 9|7 package_type #0",
            i
        ];
    }
}
class x extends f {
    constructor(e){
        super(), this.skillDescriptors = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new x).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new x).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new x).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(x, e, t);
    }
    static $() {
        return [
            "SkillOptions|1 skill_descriptors #0*",
            k
        ];
    }
}
class T extends f {
    constructor(e){
        super(), this.configuredSteps = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new T).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new T).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new T).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(T, e, t);
    }
    static $() {
        return [
            "HooksConfigInfo|1 configured_steps 9*"
        ];
    }
}
class R extends f {
    constructor(e){
        super(), this.allowInstructions = [], this.blockInstructions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new R).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new R).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new R).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(R, e, t);
    }
    static $() {
        return [
            "PermissionsAutoRunInstructions|1 allow_instructions 9*|2 block_instructions 9*"
        ];
    }
}
class B extends f {
    constructor(e){
        super(), this.startLineNumber = 0, this.endLineNumberExclusive = 0, this.beforeContextLines = [], this.removedLines = [], this.addedLines = [], this.afterContextLines = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new B).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new B).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new B).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(B, e, t);
    }
    static $() {
        return [
            "PrecomputedHumanChangeRenderedDiff|1 start_line_number 5|2 end_line_number_exclusive 5|3 before_context_lines 9*|4 removed_lines 9*|5 added_lines 9*|6 after_context_lines 9*"
        ];
    }
}
class P extends f {
    constructor(e){
        super(), this.path = "", this.renderedDiffs = [], this.isNewFile = !1, this.isDeletedFile = !1, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new P).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new P).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new P).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(P, e, t);
    }
    static $() {
        return [
            "PrecomputedHumanChange|1 path 9|2 rendered_diffs #0*|3 is_new_file 8|4 is_deleted_file 8",
            B
        ];
    }
}
class J extends f {
    constructor(e){
        super(), this.rules = [], this.repositoryInfo = [], this.tools = [], this.gitRepos = [], this.projectLayouts = [], this.mcpInstructions = [], this.fileContents = {}, this.customSubagents = [], this.agentSkills = [], this.precomputedHumanChanges = [], this.nonFileRules = [], this.disabledTeamRules = [], this.adminCommandDenylist = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new J).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new J).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new J).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(J, e, t);
    }
    static $() {
        return [
            "RequestContext|2 rules #0*|4 env #1|6 repository_info #2*|7 tools #3*|8 conversation_notes_listing 9?|9 shared_notes_listing 9?|11 git_repos #4*|13 project_layouts #5*|14 mcp_instructions #6*|15 debug_mode_config #7?|16 cloud_rule 9?|17 web_search_enabled 8?|18 skill_options #8?|19 repository_info_should_query_prod 8?|20 file_contents 9,9|21 user_intent_summary 9?|22 custom_subagents #9*|23 mcp_file_system_options #10?|24 web_fetch_enabled 8?|25 hooks_additional_context 9?|26 commit_attribution_message 9?|27 pr_attribution_message 9?|28 hooks_config #11?|29 agent_skills #12*|30 precomputed_human_changes #13*|31 recently_added_plugin #14?|32 supports_mcp_auth 8?|33 git_repo_info_complete 8?|34 mcp_meta_tool_options #15?|35 read_lints_enabled 8?|36 mcp_info_complete 8?|37 non_file_rules #0*|38 matched_installed_plugin #16?|39 rules_info_complete 8?|40 env_info_complete 8?|41 repository_info_complete 8?|42 custom_subagents_info_complete 8?|43 agent_skills_info_complete 8?|44 mcp_file_system_info_complete 8?|45 git_status_info_complete 8?|46 user_permissions_auto_run #17?|47 project_permissions_auto_run #17?|48 admin_permissions_auto_run #17?|49 disabled_team_rules 9*|50 search_conversations_enabled 8?|51 send_message_enabled 8?|52 admin_command_denylist 9*|53 system_prompt_override #18?",
            a.DX,
            b,
            c.D,
            l.gd,
            S,
            u.vq,
            l.I0,
            C,
            x,
            d.zz,
            l.Is,
            T,
            p.N,
            P,
            F,
            l.U_,
            L,
            R,
            m.$
        ];
    }
}
class M extends f {
    constructor(e){
        super(), this.rules = [], this.nonFileRules = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new M).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new M).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new M).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(M, e, t);
    }
    static $() {
        return [
            "RequestContextRulesPart|1 rules #0*|2 non_file_rules #0*|3 cloud_rule 9?",
            a.DX
        ];
    }
}
class q extends f {
    constructor(e){
        super(), this.agentSkills = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new q).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new q).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new q).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(q, e, t);
    }
    static $() {
        return [
            "RequestContextSkillsPart|1 agent_skills #0*|2 skill_options #1?",
            p.N,
            x
        ];
    }
}
class D extends f {
    constructor(e){
        super(), this.customSubagents = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new D).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new D).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new D).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(D, e, t);
    }
    static $() {
        return [
            "RequestContextSubagentsPart|1 custom_subagents #0*",
            d.zz
        ];
    }
}
class O extends f {
    constructor(e){
        super(), this.tools = [], this.mcpInstructions = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new O).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new O).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new O).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(O, e, t);
    }
    static $() {
        return [
            "RequestContextMcpsPart|1 tools #0*|2 mcp_instructions #1*|3 mcp_file_system_options #2?|4 mcp_meta_tool_options #3?",
            l.gd,
            l.I0,
            l.Is,
            l.U_
        ];
    }
}
class N extends f {
    constructor(e){
        super(), this.rulesBlobId = new Uint8Array(0), this.rulesByteLength = 0, this.skillsBlobId = new Uint8Array(0), this.skillsByteLength = 0, this.subagentsBlobId = new Uint8Array(0), this.subagentsByteLength = 0, this.mcpsBlobId = new Uint8Array(0), this.mcpsByteLength = 0, n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new N).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new N).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new N).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(N, e, t);
    }
    static $() {
        return [
            "RequestContextPartReferences|1 rules_blob_id 12|2 rules_byte_length 13|3 skills_blob_id 12|4 skills_byte_length 13|5 subagents_blob_id 12|6 subagents_byte_length 13|7 mcps_blob_id 12|8 mcps_byte_length 13|9 dynamic_context #0",
            J
        ];
    }
}
class F extends f {
    constructor(e){
        super(), this.displayName = "", this.description = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new F).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new F).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new F).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(F, e, t);
    }
    static $() {
        return [
            "RecentlyAddedPlugin|1 display_name 9|2 description 9|3 skills #0*|4 subagents #0*|5 hooks #0*|6 rules #0*|7 commands #0*|8 mcp_servers 9*",
            U
        ];
    }
}
class U extends f {
    constructor(e){
        super(), this.name = "", this.description = "", n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new U).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new U).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new U).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(U, e, t);
    }
    static $() {
        return [
            "RecentlyAddedPlugin.CapabilityDescriptor|1 name 9|2 description 9"
        ];
    }
}
class L extends f {
    constructor(e){
        super(), this.displayName = "", this.description = "", this.matchedKeyword = "", this.skills = [], this.subagents = [], this.hooks = [], this.rules = [], this.commands = [], this.mcpServers = [], n.proto3.util.initPartial(e, this);
    }
    static fromBinary(e, t) {
        return (new L).fromBinary(e, t);
    }
    static fromJson(e, t) {
        return (new L).fromJson(e, t);
    }
    static fromJsonString(e, t) {
        return (new L).fromJsonString(e, t);
    }
    static equals(e, t) {
        return n.proto3.util.equals(L, e, t);
    }
    static $() {
        return [
            "MatchedInstalledPlugin|1 display_name 9|2 description 9|3 matched_keyword 9|4 skills #0*|5 subagents #0*|6 hooks #0*|7 rules #0*|8 commands #0*|9 mcp_servers 9*",
            U
        ];
    }
}
