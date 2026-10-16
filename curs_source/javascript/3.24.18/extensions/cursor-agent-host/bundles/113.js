"use strict";
((exports.id = 113),
  (exports.ids = [113]),
  (exports.modules = {
    85113: (t, r, n) => {
      n.d(r, {
        pB: () => at,
        Xn: () => qt,
        ww: () => lt,
        wb: () => ut,
        HG: () => ct,
        DL: () => St,
        pj: () => dt,
        a: () => gt,
        q_: () => Jt,
      });
      var s = n(36038),
        e = n(13574),
        o = n(43081),
        i = n(55094),
        a = n(67918),
        u = n(91448),
        c = n(8592);
      const l = "agent.v1.";
      class m extends c.HL {
        static get runtime() {
          return (0, c.kU)(this, "runtime", s.proto3);
        }
        static $p() {
          return l;
        }
      }
      var f = (0, c.QT)(
          s.proto3,
          l,
          "AgentHostPluginSource",
          [
            [0, "UNSPECIFIED"],
            [1, "CLAUDE_PLUGIN"],
            [2, "CURSOR_FIRST_PARTY"],
            [3, "CURSOR_THIRD_PARTY"],
            [4, "USER_LOCAL"],
            [5, "EXTENSION"],
          ],
          1,
        ),
        p = (0, c.QT)(s.proto3, l, "AgentHostCCPluginSourceType", [
          [0, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_UNSPECIFIED"],
          [1, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_MARKETPLACE"],
          [2, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_GITHUB"],
          [3, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_URL"],
          [4, "AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_LOCAL"],
        ]),
        g = (0, c.QT)(
          s.proto3,
          l,
          "AgentHostPluginLoadFailureErrorType",
          [
            [0, "UNSPECIFIED"],
            [1, "CLONE"],
            [2, "INSTALL"],
            [3, "PARSE"],
            [4, "MANIFEST"],
            [5, "TIMEOUT"],
            [6, "UNKNOWN"],
          ],
          1,
        );
      class J extends m {
        constructor(t) {
          (super(),
            (this.name = ""),
            (this.sourceType = p.AGENT_HOST_CC_PLUGIN_SOURCE_TYPE_UNSPECIFIED),
            (this.raw = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new J().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new J().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new J().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(J, t, r);
        }
        static $() {
          return [
            "AgentHostCCPluginSourceInfo|1 name 9|2 source_type #0|3 marketplace 9?|4 github_repo 9?|5 git_url 9?|6 local_path 9?|7 version 9?|8 raw 9",
            p,
          ];
        }
      }
      class S extends m {
        constructor(t) {
          (super(),
            (this.name = ""),
            (this.version = ""),
            (this.configuredVariables = {}),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new S().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new S().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new S().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(S, t, r);
        }
        static $() {
          return [
            "AgentHostCursorPluginSourceInfo|1 name 9|2 version 9|3 plugin_db_id 9?|4 configured_variables 9,9|5 marketplace 9?|6 marketplace_db_id 9?|7 is_team_required 8?",
          ];
        }
      }
      class d extends m {
        constructor(t) {
          (super(), (this.name = ""), (this.localPath = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new d().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new d().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new d().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(d, t, r);
        }
        static $() {
          return ["AgentHostUserLocalPluginSourceInfo|1 name 9|2 local_path 9"];
        }
      }
      class w extends m {
        constructor(t) {
          (super(),
            (this.name = ""),
            (this.localPath = ""),
            (this.extensionId = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new w().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new w().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new w().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(w, t, r);
        }
        static $() {
          return ["AgentHostExtensionPluginSourceInfo|1 name 9|2 local_path 9|3 extension_id 9"];
        }
      }
      class _ extends m {
        constructor(t) {
          (super(),
            (this.source = f.UNSPECIFIED),
            (this.sourceInfo = { case: void 0 }),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new _().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new _().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new _().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(_, t, r);
        }
        static $() {
          return [
            "AgentHostPluginIdentifier|1 source #0|2 claude_plugin #1 source_info|3 cursor_marketplace #2 source_info|4 user_local #3 source_info|5 extension #4 source_info",
            f,
            J,
            S,
            d,
            w,
          ];
        }
      }
      class h extends m {
        constructor(t) {
          (super(),
            (this.installPath = ""),
            (this.configuredVariables = {}),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new h().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new h().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new h().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(h, t, r);
        }
        static $() {
          return [
            "AgentHostPluginDescriptor|1 identifier #0|2 install_path 9|3 load_error 9?|4 display_name 9?|5 version 9?|6 description 9?|7 author_name 9?|8 configured_variables 9,9",
            _,
          ];
        }
      }
      class q extends m {
        constructor(t) {
          (super(),
            (this.pluginName = ""),
            (this.errorMessage = ""),
            (this.errorType = g.UNSPECIFIED),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new q().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new q().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new q().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(q, t, r);
        }
        static $() {
          return [
            "AgentHostPluginLoadFailure|1 plugin_name 9|2 plugin_id 9?|3 plugin_db_id 9?|4 marketplace_name 9?|5 error_message 9|6 error_type #0",
            g,
          ];
        }
      }
      class y extends m {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new y().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new y().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new y().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(y, t, r);
        }
        static $() {
          return ["AgentHostPluginsSnapshotArgs"];
        }
      }
      class B extends m {
        constructor(t) {
          (super(),
            (this.plugins = []),
            (this.incomplete = !1),
            (this.failures = []),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new B().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new B().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new B().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(B, t, r);
        }
        static $() {
          return [
            "AgentHostPluginsSnapshotResult|1 plugins #0*|2 incomplete 8|3 failures #1*",
            h,
            q,
          ];
        }
      }
      class A extends m {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new A().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new A().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new A().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(A, t, r);
        }
        static $() {
          return ["AgentHostPluginsReloadArgs"];
        }
      }
      class P extends m {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new P().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new P().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new P().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(P, t, r);
        }
        static $() {
          return ["AgentHostPluginsReloadResult|1 snapshot #0", B];
        }
      }
      class x extends c.HL {
        static get runtime() {
          return (0, c.kU)(this, "runtime", s.proto3);
        }
        static $p() {
          return "agent.v1.";
        }
      }
      class H extends x {
        constructor(t) {
          (super(), (this.sessionId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new H().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new H().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new H().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(H, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreExtraEnvArgs|1 session_id 9|2 conversation_id 9?"];
        }
      }
      class C extends x {
        constructor(t) {
          (super(), (this.env = {}), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new C().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new C().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new C().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(C, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreExtraEnvResult|1 env 9,9"];
        }
      }
      class v extends x {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new v().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new v().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new v().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(v, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreSkillRootsArgs"];
        }
      }
      class $ extends x {
        constructor(t) {
          (super(),
            (this.skillDirs = []),
            (this.userHomeDirectory = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new $().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new $().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new $().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals($, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreSkillRootsResult|1 skill_dirs 9*|2 user_home_directory 9"];
        }
      }
      class R extends x {
        constructor(t) {
          (super(),
            (this.parentConversationId = ""),
            (this.childConversationId = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new R().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new R().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new R().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(R, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreApplySubagentMountsArgs|1 parent_conversation_id 9|2 child_conversation_id 9|3 register_local_shell_mounts 8?",
          ];
        }
      }
      class b extends x {
        constructor(t) {
          (super(),
            (this.applied = !1),
            (this.inheritedSourceIds = []),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new b().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new b().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new b().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(b, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreApplySubagentMountsResult|1 applied 8|2 inherited_source_ids 9*",
          ];
        }
      }
      class I extends x {
        constructor(t) {
          (super(), (this.childConversationId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new I().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new I().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new I().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(I, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreClearSubagentMountsArgs|1 child_conversation_id 9"];
        }
      }
      class E extends x {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new E().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new E().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new E().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(E, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreClearSubagentMountsResult"];
        }
      }
      class k extends x {
        constructor(t) {
          (super(), (this.agentIds = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new k().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new k().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new k().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(k, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreFlushSubagentArgs|1 agent_ids 9*"];
        }
      }
      class N extends x {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new N().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new N().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new N().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(N, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreFlushSubagentResult"];
        }
      }
      class T extends x {
        constructor(t) {
          (super(), (this.agentId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new T().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new T().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new T().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(T, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreScopePathsArgs|1 agent_id 9|2 mount 9?|3 sync_agent_path 9?|4 is_project_store 8?",
          ];
        }
      }
      class U extends x {
        constructor(t) {
          (super(),
            (this.scope = ""),
            (this.path = ""),
            (this.rootLinkPolicy = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new U().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new U().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new U().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(U, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreScopeDescriptor|1 scope 9|2 path 9|3 root_link_policy 9"];
        }
      }
      class L extends x {
        constructor(t) {
          (super(), (this.scope = ""), (this.reason = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new L().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new L().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new L().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(L, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreScopeUnavailable|1 scope 9|2 reason 9"];
        }
      }
      class O extends x {
        constructor(t) {
          (super(),
            (this.scopes = []),
            (this.unavailableScopes = []),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new O().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new O().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new O().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(O, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreScopePathsResult|1 scopes #0*|2 unavailable_scopes #1*",
            U,
            L,
          ];
        }
      }
      class D extends x {
        constructor(t) {
          (super(),
            (this.v = 0),
            (this.eventId = ""),
            (this.journalEpoch = ""),
            (this.seq = s.protoInt64.zero),
            (this.tsMs = s.protoInt64.zero),
            (this.kind = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new D().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new D().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new D().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(D, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreConflictNoticeEvent|1 v 13|2 event_id 9|3 journal_epoch 9|4 seq 4|5 ts_ms 4|6 kind 9|7 store_id 9?|8 original_rel_path 9?|9 conflict_rel_path 9?|10 original_abs_path 9?|11 conflict_abs_path 9?|12 preserved_bytes 4?|13 scope_kind 9?|14 limit_bytes 4?|15 usage_bytes 4?|16 source 9?|17 remote_only 8?",
          ];
        }
      }
      class G extends x {
        constructor(t) {
          (super(), (this.writtenPaths = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new G().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new G().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new G().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(G, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreConflictNoticeSyncAndPeekArgs|1 conversation_id 9?|2 written_paths 9*|3 timeout_ms 13?|4 eager 8?",
          ];
        }
      }
      class F extends x {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new F().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new F().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new F().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(F, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreConflictNoticePeekArgs|1 conversation_id 9?"];
        }
      }
      class M extends x {
        constructor(t) {
          (super(), (this.eventIds = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new M().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new M().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new M().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(M, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreConflictNoticeAckArgs|1 event_ids 9*|2 conversation_id 9?"];
        }
      }
      class Y extends x {
        constructor(t) {
          (super(), (this.eventIds = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Y().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Y().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Y().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Y, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreConflictNoticeReleaseArgs|1 event_ids 9*|2 conversation_id 9?",
          ];
        }
      }
      class K extends x {
        constructor(t) {
          (super(), (this.writtenPaths = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new K().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new K().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new K().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(K, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreConflictNoticeNoteDeferredArgs|1 conversation_id 9?|2 written_paths 9*",
          ];
        }
      }
      class W extends x {
        constructor(t) {
          (super(), (this.events = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new W().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new W().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new W().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(W, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreConflictNoticeCompleted|1 events #0*|2 reminder 9?|3 gap 8?",
            D,
          ];
        }
      }
      class j extends x {
        constructor(t) {
          (super(), (this.events = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new j().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new j().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new j().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(j, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreConflictNoticeTimedOut|1 events #0*|2 reminder 9?", D];
        }
      }
      class Q extends x {
        constructor(t) {
          (super(), (this.error = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Q().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Q().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Q().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Q, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreConflictNoticeFailed|1 error 9"];
        }
      }
      class z extends x {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new z().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new z().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new z().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(z, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreConflictNoticeEmpty"];
        }
      }
      class V extends x {
        constructor(t) {
          (super(), (this.count = 0), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new V().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new V().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new V().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(V, t, r);
        }
        static $() {
          return ["AgentHostAgentStoreConflictNoticeCount|1 count 13"];
        }
      }
      class X extends x {
        constructor(t) {
          (super(), (this.result = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new X().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new X().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new X().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(X, t, r);
        }
        static $() {
          return [
            "AgentHostAgentStoreConflictNoticeResult|1 completed #0 result|2 not_applicable #1 result|3 mount_passive #1 result|4 timed_out #2 result|5 failed #3 result|6 acked #4 result|7 released #4 result|8 noted #4 result",
            W,
            z,
            j,
            Q,
            V,
          ];
        }
      }
      var Z = n(11197),
        tt = n(88107),
        rt = n(12544),
        nt = n(11491),
        st = n(86209),
        et = n(89396);
      const ot = "agent.v1.";
      class it extends c.HL {
        static get runtime() {
          return (0, c.kU)(this, "runtime", s.proto3);
        }
        static $p() {
          return ot;
        }
      }
      var at = (0, c.QT)(
          s.proto3,
          ot,
          "AgentExecApprovalMode",
          [
            [0, "UNSPECIFIED"],
            [1, "UNRESTRICTED"],
            [2, "ALLOWLIST"],
            [3, "ASK_EVERY_TIME"],
          ],
          1,
        ),
        ut = (0, c.QT)(
          s.proto3,
          ot,
          "AgentReadBoundary",
          [
            [0, "UNSPECIFIED"],
            [1, "SYSTEM"],
            [2, "WORKSPACE"],
          ],
          1,
        );
      s.proto3;
      class ct extends it {
        constructor(t) {
          (super(),
            (this.clientInstanceId = ""),
            (this.workspacePaths = []),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new ct().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new ct().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new ct().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(ct, t, r);
        }
        static $() {
          return ["OpenAgentHostSurfaceChannelRequest|1 client_instance_id 9|2 workspace_paths 9*"];
        }
      }
      class lt extends it {
        constructor(t) {
          (super(), (this.event = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new lt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new lt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new lt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(lt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceChannelEvent|1 invocation #0 event|2 heartbeat #1 event|3 auth_refresh #2 event",
            pt,
            mt,
            ft,
          ];
        }
      }
      class mt extends it {
        constructor(t) {
          (super(), (this.epochMs = s.protoInt64.zero), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new mt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new mt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new mt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(mt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceChannelHeartbeat|1 epoch_ms 4"];
        }
      }
      class ft extends it {
        constructor(t) {
          (super(), (this.reason = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new ft().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new ft().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new ft().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(ft, t, r);
        }
        static $() {
          return ["AgentHostSurfaceAuthRefreshRequest|1 reason 9"];
        }
      }
      class pt extends it {
        constructor(t) {
          (super(),
            (this.callbackId = ""),
            (this.sessionId = ""),
            (this.targetClientInstanceId = ""),
            (this.kind = { case: void 0 }),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new pt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new pt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new pt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(pt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceCallbackInvocation|1 callback_id 9|2 session_id 9|3 target_client_instance_id 9|4 root_session_id 9?|12 permissions_pull #0 kind|14 conversation_search #1 kind|15 file_change_notify #2 kind|16 hook #3 kind|17 git #4 kind|18 canvas #5 kind|19 agent_host_plugins #6 kind|20 agent_host_agent_store #7 kind|21 mcp_writer #8 kind|22 cloud_subagent #9 kind|24 saved_model_parameters #10 kind|25 required_global_commands #11 kind|26 find_subagent #12 kind|27 request_context #13 kind",
            _t,
            yt,
            At,
            Pt,
            Ht,
            vt,
            Rt,
            It,
            kt,
            Lt,
            Wt,
            Qt,
            Vt,
            tr,
          ];
        }
      }
      class gt extends it {
        constructor(t) {
          (super(),
            (this.callbackId = ""),
            (this.clientInstanceId = ""),
            (this.result = { case: void 0 }),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new gt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new gt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new gt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(gt, t, r);
        }
        static $() {
          return [
            "RespondAgentHostSurfaceCallbackRequest|1 callback_id 9|2 client_instance_id 9|12 permissions #0 result|13 conversation_search #1 result|14 hook #2 result|15 git #3 result|16 canvas #4 result|17 agent_host_plugins #5 result|18 agent_host_agent_store #6 result|19 mcp_writer #7 result|20 cloud_subagent #8 result|22 saved_model_parameters #9 result|23 required_global_commands #10 result|24 find_subagent #11 result|25 request_context #12 result|99 error #13 result",
            ht,
            Bt,
            xt,
            Ct,
            $t,
            bt,
            Et,
            Nt,
            Kt,
            jt,
            zt,
            Xt,
            rr,
            wt,
          ];
        }
      }
      class Jt extends it {
        constructor(t) {
          (super(), (this.accepted = !1), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Jt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Jt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Jt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Jt, t, r);
        }
        static $() {
          return ["RespondAgentHostSurfaceCallbackResponse|1 accepted 8"];
        }
      }
      class St extends it {
        constructor(t) {
          (super(),
            (this.sessionId = ""),
            (this.clientInstanceId = ""),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new St().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new St().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new St().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(St, t, r);
        }
        static $() {
          return [
            "PushAgentHostSessionPermissionsRequest|1 session_id 9|2 client_instance_id 9|3 permissions #0",
            qt,
          ];
        }
      }
      class dt extends it {
        constructor(t) {
          (super(), (this.accepted = !1), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new dt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new dt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new dt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(dt, t, r);
        }
        static $() {
          return ["PushAgentHostSessionPermissionsResponse|1 accepted 8"];
        }
      }
      class wt extends it {
        constructor(t) {
          (super(), (this.message = ""), (this.code = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new wt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new wt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new wt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(wt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCallbackError|1 message 9|2 code 9"];
        }
      }
      class _t extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new _t().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new _t().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new _t().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(_t, t, r);
        }
        static $() {
          return ["AgentHostSurfacePermissionsPullRequest"];
        }
      }
      class ht extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new ht().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new ht().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new ht().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(ht, t, r);
        }
        static $() {
          return ["AgentHostSurfacePermissionsSnapshot|1 permissions #0", qt];
        }
      }
      class qt extends it {
        constructor(t) {
          (super(),
            (this.allow = []),
            (this.deny = []),
            (this.approvalMode = at.UNSPECIFIED),
            (this.smartAllowlistDenylist = []),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new qt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new qt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new qt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(qt, t, r);
        }
        static $() {
          return [
            "AgentExecPermissions|1 allow 9*|2 deny 9*|3 approval_mode #0|4 read_boundary #1?|5 user_sandbox_data_folder_name 9?|6 user_configured_policy #2|7 dashboard_terminal_allowlist_overridden_by_permissions_file 8?|8 smart_allowlist_enabled 8?|9 smart_allowlist_denylist 9*|10 prompt_workspace_writes 8?",
            at,
            ut,
            e.Mw,
          ];
        }
      }
      class yt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new yt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new yt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new yt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(yt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceConversationSearchRequest|1 args #0", o.$m];
        }
      }
      class Bt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Bt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Bt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Bt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Bt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceConversationSearchResult|1 result #0", o.pT];
        }
      }
      class At extends it {
        constructor(t) {
          (super(), (this.path = ""), (this.toolCallId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new At().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new At().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new At().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(At, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceFileChangeNotify|1 path 9|2 before 9?|3 after 9?|4 tool_call_id 9",
          ];
        }
      }
      class Pt extends it {
        constructor(t) {
          (super(), (this.step = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Pt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Pt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Pt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Pt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceHookRequest|1 step 9|2 request #0", i.Kw];
        }
      }
      class xt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new xt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new xt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new xt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(xt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceHookResult|1 response #0", i.w5];
        }
      }
      class Ht extends it {
        constructor(t) {
          (super(), (this.request = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Ht().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Ht().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Ht().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Ht, t, r);
        }
        static $() {
          return ["AgentHostSurfaceGitRequest|1 git_diff #0 request", a.GetDiffRequest];
        }
      }
      class Ct extends it {
        constructor(t) {
          (super(), (this.result = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Ct().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Ct().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Ct().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Ct, t, r);
        }
        static $() {
          return ["AgentHostSurfaceGitResult|1 git_diff #0 result", a.GetDiffResponse];
        }
      }
      class vt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new vt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new vt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new vt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(vt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCanvasRequest|1 args #0", u.yN];
        }
      }
      class $t extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new $t().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new $t().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new $t().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals($t, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCanvasResult|1 result #0", u.GL];
        }
      }
      class Rt extends it {
        constructor(t) {
          (super(), (this.operation = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Rt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Rt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Rt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Rt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfacePluginsRequest|1 snapshot #0 operation|2 reload #1 operation",
            y,
            A,
          ];
        }
      }
      class bt extends it {
        constructor(t) {
          (super(), (this.result = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new bt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new bt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new bt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(bt, t, r);
        }
        static $() {
          return ["AgentHostSurfacePluginsResult|1 snapshot #0 result|2 reload #1 result", B, P];
        }
      }
      class It extends it {
        constructor(t) {
          (super(), (this.operation = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new It().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new It().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new It().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(It, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceAgentStoreRequest|1 extra_env #0 operation|2 skill_roots #1 operation|3 conflict_notice_sync_and_peek #2 operation|4 conflict_notice_peek #3 operation|5 conflict_notice_ack #4 operation|6 conflict_notice_release #5 operation|7 conflict_notice_note_deferred #6 operation|8 apply_subagent_mounts #7 operation|9 clear_subagent_mounts #8 operation|10 flush_subagent #9 operation|11 scope_paths #10 operation",
            H,
            v,
            G,
            F,
            M,
            Y,
            K,
            R,
            I,
            k,
            T,
          ];
        }
      }
      class Et extends it {
        constructor(t) {
          (super(), (this.result = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Et().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Et().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Et().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Et, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceAgentStoreResult|1 extra_env #0 result|2 skill_roots #1 result|3 conflict_notice #2 result|4 apply_subagent_mounts #3 result|5 clear_subagent_mounts #4 result|6 flush_subagent #5 result|7 scope_paths #6 result",
            C,
            $,
            X,
            b,
            E,
            N,
            O,
          ];
        }
      }
      class kt extends it {
        constructor(t) {
          (super(), (this.operation = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new kt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new kt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new kt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(kt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceMcpWriterRequest|1 mcp #0 operation|2 list_mcp_resources #1 operation|3 read_mcp_resource #2 operation|4 mcp_allowlist_precheck #3 operation|5 mcp_state #4 operation",
            Z.E_,
            Z.kj,
            Z.DI,
            tt.c,
            Z.Km,
          ];
        }
      }
      class Nt extends it {
        constructor(t) {
          (super(), (this.result = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Nt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Nt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Nt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Nt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceMcpWriterResult|1 mcp #0 result|2 list_mcp_resources #1 result|3 read_mcp_resource #2 result|4 mcp_allowlist_precheck #3 result|5 mcp_state #4 result",
            Z.iz,
            Z.kP,
            Z.ZD,
            tt.M,
            Z._W,
          ];
        }
      }
      class Tt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Tt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Tt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Tt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Tt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCloudSubagentCreateOrResume|1 args #0", rt.Pw];
        }
      }
      class Ut extends it {
        constructor(t) {
          (super(), (this.agentId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Ut().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Ut().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Ut().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Ut, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCloudSubagentRun|1 agent_id 9|2 args #0", rt.Pw];
        }
      }
      class Lt extends it {
        constructor(t) {
          (super(), (this.operation = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Lt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Lt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Lt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Lt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceCloudSubagentRequest|1 create_or_resume #0 operation|2 run #1 operation",
            Tt,
            Ut,
          ];
        }
      }
      class Ot extends it {
        constructor(t) {
          (super(), (this.agentId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Ot().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Ot().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Ot().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Ot, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCloudSubagentCreateOrResumeResult|1 agent_id 9"];
        }
      }
      class Dt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Dt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Dt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Dt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Dt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCloudSubagentCompleted|1 final_message 9?|2 tool_call_count 5?"];
        }
      }
      class Gt extends it {
        constructor(t) {
          (super(),
            (this.backgroundReason = nt.qL.UNSPECIFIED),
            s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Gt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Gt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Gt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Gt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceCloudSubagentBackground|1 background_reason #0|2 transcript_path 9?|3 final_message 9?|4 tool_call_count 5?",
            nt.qL,
          ];
        }
      }
      class Ft extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Ft().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Ft().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Ft().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Ft, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCloudSubagentAborted|1 error 9?"];
        }
      }
      class Mt extends it {
        constructor(t) {
          (super(), (this.error = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Mt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Mt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Mt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Mt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceCloudSubagentFailed|1 error 9"];
        }
      }
      class Yt extends it {
        constructor(t) {
          (super(), (this.outcome = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Yt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Yt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Yt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Yt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceCloudSubagentRunResult|1 completed #0 outcome|2 background #1 outcome|3 aborted #2 outcome|4 failed #3 outcome",
            Dt,
            Gt,
            Ft,
            Mt,
          ];
        }
      }
      class Kt extends it {
        constructor(t) {
          (super(), (this.result = { case: void 0 }), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Kt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Kt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Kt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Kt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceCloudSubagentResult|1 create_or_resume #0 result|2 run #1 result",
            Ot,
            Yt,
          ];
        }
      }
      class Wt extends it {
        constructor(t) {
          (super(), (this.modelId = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Wt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Wt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Wt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Wt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceSavedModelParametersRequest|1 model_id 9|2 max_mode 8?|3 root_session_id 9?",
          ];
        }
      }
      class jt extends it {
        constructor(t) {
          (super(), (this.parameters = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new jt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new jt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new jt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(jt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceSavedModelParametersResult|1 parameters #0*", st.SR];
        }
      }
      class Qt extends it {
        constructor(t) {
          (super(), (this.subagentType = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Qt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Qt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Qt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Qt, t, r);
        }
        static $() {
          return [
            "AgentHostSurfaceRequiredGlobalCommandsRequest|1 subagent_type 9|2 root_session_id 9?",
          ];
        }
      }
      class zt extends it {
        constructor(t) {
          (super(), (this.commands = []), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new zt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new zt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new zt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(zt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceRequiredGlobalCommandsResult|1 commands #0*", Zt];
        }
      }
      class Vt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Vt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Vt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Vt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Vt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceFindSubagentRequest"];
        }
      }
      class Xt extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Xt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Xt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Xt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Xt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceFindSubagentResult"];
        }
      }
      class Zt extends it {
        constructor(t) {
          (super(), (this.name = ""), (this.content = ""), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new Zt().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new Zt().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new Zt().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(Zt, t, r);
        }
        static $() {
          return ["AgentHostSurfaceGlobalCommand|1 name 9|2 content 9"];
        }
      }
      class tr extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new tr().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new tr().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new tr().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(tr, t, r);
        }
        static $() {
          return ["AgentHostSurfaceRequestContextRequest|1 args #0", et._K];
        }
      }
      class rr extends it {
        constructor(t) {
          (super(), s.proto3.util.initPartial(t, this));
        }
        static fromBinary(t, r) {
          return new rr().fromBinary(t, r);
        }
        static fromJson(t, r) {
          return new rr().fromJson(t, r);
        }
        static fromJsonString(t, r) {
          return new rr().fromJsonString(t, r);
        }
        static equals(t, r) {
          return s.proto3.util.equals(rr, t, r);
        }
        static $() {
          return ["AgentHostSurfaceRequestContextResult|1 request_context #0", et.bb];
        }
      }
    },
  }));
//# sourceMappingURL=http://go/sourcemap/sourcemaps/be4c9e5350d77747b42cd467cbd3370a753d4640/extensions/cursor-agent-host/dist/113.js.map
