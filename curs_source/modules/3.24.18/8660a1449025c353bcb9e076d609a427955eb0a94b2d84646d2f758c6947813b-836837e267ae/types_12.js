import { Ljr, Qwn } from "./GrokBotIcon.js";
import { pd } from "./background_composer_pb.js";
import { Bie } from "./cloud-agent-source-category.ts";
import { lAl } from "./custom-agents-presentation.js";
import { Mt } from "./index_197.js";
import { qvs } from "./index_26.ts";
import { E } from "./tslib.es6.js";
var Vvs, omf, amf, PYt, lmf, MYt, cmf, zVe, cAl, umf, dmf, hmf, jMn, DYt, Gzk, VVe, ITe, uAl, dAl, xTe, XPi, act, $Mn, NYt, ZPi, KVe, qzk, pmf;
export { $Mn, DYt, Gzk, ITe, KVe, MYt, NYt, PYt, VVe, Vvs, XPi, ZPi, act, amf, cAl, cmf, dAl, dmf, hmf, jMn, lmf, omf, pmf, qzk, uAl, umf, xTe, zVe };
var __wakaru_o9_initialized = false;
export function o9() {
if (__wakaru_o9_initialized) return;
__wakaru_o9_initialized = true;
"use strict";
E(), qvs(), Mt(), pd(), lAl(), Vvs = [
    "workspace",
    "repository",
    "environmentInstance",
    "time",
    "status",
    "environment"
], omf = [
    "updated",
    "status"
], amf = [
    "updated",
    "manual"
], PYt = [
    "needs_attention",
    "error",
    "unread_only",
    "running",
    "draft",
    "done"
], lmf = [
    "needs_attention",
    "error",
    "running",
    "draft",
    "done"
], MYt = [
    "source:desktop",
    "source:mobile",
    "source:web",
    "source:cli",
    "source:sand",
    "source:setup",
    "source:slack",
    "source:linear",
    "source:scm",
    "source:third_party",
    "source:sdk",
    "source:api",
    "source:automations",
    "source:bugbot_autofix",
    "source:qabot_frontend",
    "source:local"
], cmf = [
    "sdk",
    "automations",
    "api",
    "bugbot_autofix",
    "qabot_frontend",
    "local"
], zVe = MYt.filter((t)=>!cmf.some((e)=>t === `source:${e}`)), cAl = {
    showLocal: !1,
    showSand: !1,
    showThirdParty: !1
}, umf = "M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z", dmf = "M2.886 4.18A11.982 11.982 0 0 1 11.99 0C18.624 0 24 5.376 24 12.009c0 3.64-1.62 6.903-4.18 9.105L2.887 4.18ZM1.817 5.626l16.556 16.556c-.524.33-1.075.62-1.65.866L.951 7.277c.247-.575.537-1.126.866-1.65ZM.322 9.163l14.515 14.515c-.71.172-1.443.282-2.195.322L0 11.358a12 12 0 0 1 .322-2.195Zm-.17 4.862 9.823 9.824a12.02 12.02 0 0 1-9.824-9.824Z", hmf = [
    "M27.2 80c0 7.3-5.9 13.2-13.2 13.2C6.7 93.2.8 87.3.8 80c0-7.3 5.9-13.2 13.2-13.2h13.2V80zm6.6 0c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2v33c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V80z",
    "M47 27c-7.3 0-13.2-5.9-13.2-13.2C33.8 6.5 39.7.6 47 .6c7.3 0 13.2 5.9 13.2 13.2V27H47zm0 6.7c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H13.9C6.6 60.1.7 54.2.7 46.9c0-7.3 5.9-13.2 13.2-13.2H47z",
    "M99.9 46.9c0-7.3 5.9-13.2 13.2-13.2 7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H99.9V46.9zm-6.6 0c0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V13.8C66.9 6.5 72.8.6 80.1.6c7.3 0 13.2 5.9 13.2 13.2v33.1z",
    "M80.1 99.8c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2-7.3 0-13.2-5.9-13.2-13.2V99.8h13.2zm0-6.6c-7.3 0-13.2-5.9-13.2-13.2 0-7.3 5.9-13.2 13.2-13.2h33.1c7.3 0 13.2 5.9 13.2 13.2 0 7.3-5.9 13.2-13.2 13.2H80.1z"
], jMn = {
    "source:desktop": {
        label: Bie.desktop,
        icon: "laptop"
    },
    "source:sand": {
        label: Bie.sand,
        brandIcon: {
            viewBox: Ljr,
            paths: [
                Qwn
            ],
            fillRule: "evenodd"
        }
    },
    "source:web": {
        label: Bie.web,
        icon: "window"
    },
    "source:mobile": {
        label: Bie.mobile,
        icon: "device-mobile"
    },
    "source:slack": {
        label: Bie.slack,
        brandIcon: {
            viewBox: "0 0 127 127",
            paths: hmf
        }
    },
    "source:linear": {
        label: Bie.linear,
        brandIcon: {
            viewBox: "0 0 24 24",
            paths: [
                dmf
            ]
        }
    },
    "source:scm": {
        label: Bie.scm,
        icon: "github"
    },
    "source:cli": {
        label: Bie.cli,
        icon: "terminal"
    },
    "source:third_party": {
        label: "Claude Code",
        brandIcon: {
            viewBox: "0 0 24 24",
            paths: [
                umf
            ],
            fillRule: "evenodd"
        }
    },
    "source:setup": {
        label: Bie.setup,
        icon: "cog"
    },
    "source:sdk": {
        label: Bie.sdk,
        icon: "brackets-curly"
    },
    "source:automations": {
        label: Bie.automations,
        icon: "robot"
    },
    "source:api": {
        label: Bie.api,
        icon: "code"
    },
    "source:bugbot_autofix": {
        label: Bie.bugbot_autofix,
        icon: "bugbot"
    },
    "source:qabot_frontend": {
        label: Bie.qabot_frontend,
        icon: "robot"
    },
    "source:local": {
        label: Bie.local,
        icon: "laptop"
    },
    "source:internal": {
        label: Bie.internal,
        icon: "server"
    }
}, DYt = [
    "git:draft",
    "git:open",
    "git:merged",
    "git:closed",
    "git:none"
], Gzk = [
    ...PYt,
    ...DYt
], VVe = [
    "running",
    "draft",
    "done",
    "needs_attention",
    "error",
    "unread_only",
    "cloud",
    "local",
    ...DYt,
    ...zVe
], ITe = {
    workspace: !1,
    environment: "auto",
    branch: !1,
    environmentIcon: !0,
    timestamp: !0,
    source: !1,
    prState: !0
}, uAl = 100, dAl = 100, xTe = {
    groupBy: "repository",
    sortAgentsBy: "updated",
    sortGroupsBy: "manual",
    filter: {
        show: [
            ...VVe
        ]
    },
    subtitle: {
        ...ITe
    },
    compact: !0,
    sectionOrderByGroupBy: {},
    collapsedSectionIdsByGroupBy: {},
    removedSectionIds: []
}, XPi = 5, act = 8, $Mn = "More", NYt = {
    folded: "folder",
    expanded: "folder-open"
}, ZPi = "folders", KVe = {
    back: {
        id: "back",
        iconName: "arrow-left",
        label: "Back",
        placeholderContent: "",
        showsAgentSelector: !1,
        editorPanelType: "none"
    },
    "new-agent": {
        id: "new-agent",
        iconName: "agent",
        label: "New Agent",
        placeholderContent: "",
        showsAgentSelector: !0,
        editorPanelType: "full"
    },
    "new-project": {
        id: "new-project",
        iconName: "cube",
        label: "New Project",
        placeholderContent: "",
        showsAgentSelector: !0,
        editorPanelType: "full"
    },
    search: {
        id: "search",
        iconName: "magnifying-glass",
        label: "Search",
        placeholderContent: "",
        showsAgentSelector: !1,
        editorPanelType: "none"
    },
    automations: {
        id: "automations",
        iconName: "robot",
        label: "Automations",
        placeholderContent: "",
        showsAgentSelector: !1,
        editorPanelType: "configuration"
    },
    marketplace: {
        id: "marketplace",
        iconName: "extensions",
        label: "Marketplace",
        placeholderContent: "Cursor Marketplace",
        showsAgentSelector: !1,
        editorPanelType: "configuration"
    },
    settings: {
        id: "settings",
        iconName: "settings-gear",
        label: "Settings",
        placeholderContent: "Cursor Settings",
        showsAgentSelector: !1,
        editorPanelType: "configuration"
    },
    "main-bot": {
        id: "main-bot",
        iconName: "agent",
        label: "Tech Lead",
        placeholderContent: "",
        showsAgentSelector: !1,
        editorPanelType: "none"
    }
}, qzk = [
    KVe["new-agent"],
    KVe.marketplace
], pmf = [
    KVe.back
];

}
