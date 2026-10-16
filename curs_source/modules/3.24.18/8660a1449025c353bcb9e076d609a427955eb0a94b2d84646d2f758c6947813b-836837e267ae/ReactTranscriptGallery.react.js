import { Mt } from "./index_197.js";
import { xcC } from "./reactTranscriptGalleryData.js";
import { J1s } from "./richLinkPresentationProvider.js";
import { tw } from "./tool-approval-types.js";
import { E } from "./tslib.es6.js";
import { jsx as SEe } from "./react-runtime/react/esm-jsx-runtime-production.js";
var kXv, wXv, CXv, TXv, EXv;
export { CXv, EXv, TXv, kXv, wXv };
var __wakaru_RcC_initialized = false;
export function RcC() {
if (__wakaru_RcC_initialized) return;
__wakaru_RcC_initialized = true;
"use strict";
E(), Mt(), J1s(), xcC(), kXv = [
    "detailed",
    "compact-shells",
    "compact-ungrouped",
    "compact-grouped",
    "compact-all-grouped"
], wXv = {
    "--conversation-text-inset": "11px",
    "--conversation-block-inset": "11px",
    "--conversation-tool-card-padding-x": "10px",
    "--conversation-tool-card-padding-y": "8px",
    "--conversation-tool-card-gap": "6px",
    "--conversation-tool-card-padding-tight-x": "calc(var(--conversation-tool-card-padding-x) - 2px)",
    "--conversation-text-font-size": "var(--cursor-font-size-lg, 14px)",
    "--conversation-tool-font-size": "var(--cursor-font-size-lg, 14px)",
    "--conversation-font-size": "var(--conversation-tool-font-size)",
    "--conversation-line-height": "var(--cursor-line-height-lg, 22px)",
    "--conversation-block-gap": "16px",
    "--conversation-list-before-gap": "8px",
    "--conversation-list-after-gap": "18px",
    "--conversation-heading-after-gap": "4px",
    "--conversation-embedded-block-before-gap": "12px",
    "--conversation-list-item-gap": "8px",
    "--react-composer-transcript-row-gap": "14px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
    width: "100%",
    maxWidth: 680,
    boxSizing: "border-box",
    padding: 16,
    borderRadius: 8,
    border: "1px solid var(--vscode-panel-border)",
    background: "var(--vscode-editor-background)"
}, CXv = ()=>({
        copyMessage: ()=>{},
        replyToMessage: ()=>{},
        forkChat: ()=>{},
        timestampLabel: "2m ago",
        timestampTitle: "Today at 2:14 PM",
        timestampSubtitle: "Worked for 2m 15s",
        moreSections: [
            {
                id: "dev",
                items: [
                    {
                        id: "copy-request-id",
                        label: "Copy request ID",
                        icon: "copy",
                        onSelect: ()=>{}
                    }
                ]
            }
        ]
    }), TXv = ()=>SEe("span", {
        style: {
            fontSize: 12,
            color: "var(--vscode-descriptionForeground)"
        },
        children: "3 files changed \xB7 +48 \u221212"
    }), EXv = {
    autorunMode: tw.SMART_AUTO,
    sandboxAutoRunSettingEnabled: !0,
    availableAutorunModes: [
        {
            mode: tw.SMART_AUTO,
            label: "Auto-review (with Sandbox)",
            sandboxBacked: !0
        },
        {
            mode: tw.SMART_AUTO,
            label: "Auto-review",
            sandboxBacked: !1
        },
        {
            mode: tw.ASK_EVERY_TIME,
            label: "Ask Every Time"
        },
        {
            mode: tw.USE_ALLOWLIST,
            label: "Use Allowlist"
        }
    ],
    onSetAutorunMode: ()=>{},
    onApprovalDecision: ()=>{},
    onAddToAllowlist: ()=>{}
};

}
