import { tu } from "./BA.js";
import { UKe, hOi, hee, pee } from "./agentAppearanceSettings.js";
import { OQf } from "./browserIntegrationSettings.js";
import { Mze } from "./customizeManageCommandDescriptors.js";
import { Jis, Srl, _rl, brl, dN, drl, grl, hrl, mrl, nrs, trs, uat, yrl } from "./settingsScrollIds.js";
import { E } from "./tslib.es6.js";
var aWl, Bnv, Unv;
export { Bnv, Unv, aWl };
var __wakaru_lWl_initialized = false;
export function lWl() {
if (__wakaru_lWl_initialized) return;
__wakaru_lWl_initialized = true;
"use strict";
E(), Mze(), hOi(), OQf(), dN(), aWl = "Agent Voice", Bnv = {
    "background-composer": [
        "connect slack",
        "manage settings"
    ],
    voice: [
        "voice mode",
        "dictation",
        "read aloud",
        "speech"
    ],
    indexing: [
        "indexing",
        "codebase index",
        "code intelligence",
        "lsp",
        "language server",
        "cursor tab",
        "tab"
    ],
    "git-prs": [
        "pull requests",
        "prs",
        "agent review",
        "bugbot",
        "review",
        "self-driving",
        "fsd",
        "git & prs",
        "git",
        "worktrees"
    ]
}, Unv = [
    tu("general", "sign-in", {
        label: "Sign In",
        condition: "signed-out",
        description: "Sign in to get started with Cursor's AI features"
    }),
    tu("general", "cursor-account", {
        label: "Cursor Account",
        condition: "signed-in",
        description: "Manage your account and billing"
    }),
    tu("general", "preferences", {
        label: "Preferences",
        surface: "ide"
    }),
    tu("general", "editor-settings", {
        label: "Editor Settings",
        surface: "ide",
        description: "Configure font, formatting, minimap and more"
    }),
    tu("general", "keyboard-shortcuts", {
        label: "Keyboard Shortcuts",
        surface: "ide",
        description: "Configure keyboard shortcuts"
    }),
    tu("general", "import-vscode", {
        label: "Import Settings from VS Code",
        surface: "ide",
        description: "Import settings, extensions, and keybindings from VS Code"
    }),
    tu("general", "reset-dialogs", {
        label: 'Reset "Don\u2019t Ask Again" Dialogs',
        surface: "ide",
        description: "See warnings and tips that you\u2019ve hidden"
    }),
    tu("general", "layout", {
        label: "Layout",
        surface: "ide"
    }),
    tu("general", "conversation-density", {
        label: "Conversation Density",
        surface: "ide",
        description: "Choose how much detail Agent tool calls show in the conversation",
        aliases: [
            "conversation density",
            "tool calls",
            "terminal",
            "shell",
            "edit file",
            "compact"
        ]
    }),
    tu("general", "status-bar", {
        label: "Status Bar",
        surface: "ide"
    }),
    tu("general", "review-controls", {
        label: "Review Control Location",
        surface: "ide"
    }),
    tu("general", "auto-hide-editor", {
        label: "Auto-Hide Editor When Empty",
        surface: "ide"
    }),
    tu("general", "chat-editor-tabs", {
        label: "Open Chat as Editor Tabs",
        surface: "ide"
    }),
    tu("general", "startup", {
        label: "Startup"
    }),
    tu("general", "tips", {
        label: "Tips",
        surface: "glass",
        description: "Show rotating tips on the empty screen",
        aliases: [
            "tips",
            "rotating tips",
            "new chat",
            "empty screen"
        ]
    }),
    tu("general", "open-agents-on-startup", {
        label: "Window Restoration",
        description: "Controls which windows Cursor restores on startup",
        aliases: [
            "startup",
            "agents window",
            "launch",
            "open agents window on startup"
        ]
    }),
    tu("general", "auto-continue-interrupted-agents", {
        label: "Continue Interrupted Agents",
        surface: "glass",
        description: "Automatically resume working on agents and their subagents after a reload or restart",
        elementId: hrl,
        aliases: [
            "automatically resume",
            "continue agents",
            "continue working",
            "relaunch agents",
            "reload",
            "resume interrupted agents",
            "resume working",
            "subagents"
        ]
    }),
    tu("general", "notifications", {
        label: "Notifications"
    }),
    tu("general", "system-notifications", {
        label: "System Notifications",
        description: "Show system notifications when Agent completes or needs attention"
    }),
    tu("general", "cloud-agent-approval-notifications-while-focused", {
        label: "Cloud Agent Approval Banners While Focused",
        description: "Also show the approval banner while Cursor is focused; the request card in the agent conversation always shows"
    }),
    tu("general", "warning-notifications", {
        label: "Warning Notifications",
        surface: "glass",
        description: "Show notifications for less urgent issues"
    }),
    tu("general", "menu-bar-icon", {
        label: "Menu Bar Icon",
        condition: "macos",
        description: "Show Cursor in the menu bar"
    }),
    tu("general", "system-tray-icon", {
        label: "System Tray Icon",
        condition: "not-macos",
        description: "Show Cursor in the system tray"
    }),
    tu("general", "completion-sound", {
        label: "Completion Sound",
        description: "Play a sound when Agent finishes responding"
    }),
    tu("general", "verify-extension-signatures", {
        label: "Verify Extension Signatures",
        condition: "extension-signature-verification"
    }),
    tu("profile", "email", {
        label: "Email",
        surface: "glass",
        description: "Account email shown on the profile page",
        aliases: [
            "email",
            "account email"
        ]
    }),
    tu("profile", "profile-image", {
        label: "Profile Image",
        surface: "glass",
        description: "Upload or remove the profile photo",
        aliases: [
            "avatar",
            "photo",
            "picture",
            "profile picture"
        ]
    }),
    tu("profile", "first-name", {
        label: "First Name",
        surface: "glass",
        description: "Name shown on the public profile page",
        aliases: [
            "name",
            "display name"
        ]
    }),
    tu("profile", "last-name", {
        label: "Last Name",
        surface: "glass",
        description: "Name shown on the public profile page",
        aliases: [
            "name",
            "display name",
            "surname"
        ]
    }),
    tu("profile", "handle", {
        label: "Handle",
        surface: "glass",
        description: "Claim a handle for your public profile page",
        aliases: [
            "claim",
            "claim handle",
            "username",
            "profile URL",
            "public profile"
        ]
    }),
    tu("profile", "links", {
        label: "Links",
        surface: "glass",
        description: "Social and website links on the public profile page",
        aliases: [
            "link",
            "github",
            "linkedin",
            "website",
            "x.com",
            "twitter"
        ]
    }),
    tu("profile", "public-profile", {
        label: "Public Profile",
        surface: "glass",
        description: "Make the cursor.com profile page visible to anyone with the link",
        aliases: [
            "visibility",
            "private",
            "public profile"
        ]
    }),
    tu("appearance", "follow-system", {
        label: "Follow System Color Scheme",
        surface: "glass",
        condition: "custom-theme",
        description: "Match the active theme to your OS dark/light setting",
        aliases: [
            "system",
            "theme",
            "dark mode",
            "light mode"
        ]
    }),
    tu("appearance", "theme", {
        label: "Theme",
        surface: "glass",
        condition: "single-theme",
        description: "Choose which theme to use",
        aliases: [
            "dark mode",
            "light mode",
            "high contrast",
            "system",
            "color theme",
            "cursor theme"
        ]
    }),
    tu("appearance", "light-theme", {
        label: "Light Theme",
        surface: "glass",
        condition: "follow-system-theme",
        description: "Choose the theme used when your system is in light mode",
        aliases: [
            "theme",
            "light mode",
            "system",
            "color theme"
        ]
    }),
    tu("appearance", "dark-theme", {
        label: "Dark Theme",
        surface: "glass",
        condition: "follow-system-theme",
        description: "Choose the theme used when your system is in dark mode",
        aliases: [
            "theme",
            "dark mode",
            "system",
            "color theme"
        ]
    }),
    tu("appearance", "follow-system-high-contrast", {
        label: "Follow System High Contrast",
        surface: "glass",
        condition: "theme-sync-with-ide",
        description: "Switch to a high contrast theme when your OS is in a high contrast mode",
        aliases: [
            "high contrast",
            "contrast",
            "accessibility",
            "system",
            "theme"
        ]
    }),
    tu("appearance", "high-contrast-light-theme", {
        label: "High Contrast Light Theme",
        surface: "glass",
        condition: "follow-system-high-contrast",
        description: "Choose the theme used when your system is in light high contrast mode",
        aliases: [
            "high contrast",
            "contrast",
            "accessibility",
            "light mode",
            "theme"
        ]
    }),
    tu("appearance", "high-contrast-dark-theme", {
        label: "High Contrast Dark Theme",
        surface: "glass",
        condition: "follow-system-high-contrast",
        description: "Choose the theme used when your system is in dark high contrast mode",
        aliases: [
            "high contrast",
            "contrast",
            "accessibility",
            "dark mode",
            "theme"
        ]
    }),
    tu("appearance", "manage-themes", {
        label: "Manage Themes",
        surface: "glass",
        condition: "custom-theme",
        description: "Create your own themes, tweak the vibe, and import your favorites",
        aliases: [
            "theme",
            "custom theme",
            "import theme"
        ]
    }),
    tu("appearance", "colors", {
        label: "Colors",
        surface: "glass"
    }),
    tu("appearance", "hue", {
        label: "Hue",
        surface: "glass",
        description: "Choose a tint color",
        aliases: [
            "hue",
            "tint",
            "custom",
            "color"
        ]
    }),
    tu("appearance", "intensity", {
        label: "Intensity",
        surface: "glass",
        description: "Control how strongly the tint is applied",
        aliases: [
            "intensity",
            "tint",
            "custom"
        ]
    }),
    tu("appearance", "reduce-transparency", {
        label: "Reduce Transparency",
        surface: "glass",
        description: "Replace translucent surfaces with opaque backgrounds",
        aliases: [
            "transparency",
            "vibrancy",
            "opaque",
            "accessibility"
        ]
    }),
    tu("appearance", "agent-conversations", {
        label: "Agent Conversations",
        surface: "glass"
    }),
    tu("appearance", "tool-call-density", {
        label: "Tool Call Density",
        surface: "glass",
        description: "Adjust how much detail is shown for tool calls",
        aliases: [
            "conversation density",
            "tool calls",
            "terminal",
            "shell",
            "edit file",
            "compact",
            "grouped"
        ]
    }),
    tu("appearance", "chat-max-width", {
        label: UKe.label,
        surface: "glass",
        description: UKe.description,
        aliases: UKe.searchAliases
    }),
    tu("appearance", "code-word-wrap", {
        label: hee.label,
        surface: "glass",
        description: hee.description,
        aliases: hee.searchAliases
    }),
    tu("appearance", "themed-diff-backgrounds", {
        label: pee.label,
        surface: "glass",
        description: pee.description,
        aliases: pee.searchAliases
    }),
    tu("appearance", "typography", {
        label: "Typography",
        surface: "glass"
    }),
    tu("appearance", "ui-font-size", {
        label: "UI Font Size",
        surface: "glass",
        description: "Font size for the Cursor user interface",
        aliases: [
            "font size",
            "window scale",
            "zoom",
            "ui scale"
        ]
    }),
    tu("appearance", "code-font-size", {
        label: "Code Font Size",
        surface: "glass",
        description: "Font size for code editors and diffs",
        aliases: [
            "font size",
            "editor font",
            "diff font",
            "code scale"
        ]
    }),
    tu("appearance", "ui-font-family", {
        label: "UI Font Family",
        surface: "glass",
        description: "Override the Cursor user interface typeface",
        aliases: [
            "font family",
            "typeface",
            "ui font",
            "sans serif"
        ]
    }),
    tu("appearance", "code-font-family", {
        label: "Code Font Family",
        surface: "glass",
        description: "Override the font for code editors and diffs",
        aliases: [
            "font family",
            "monospace",
            "editor font",
            "code font"
        ]
    }),
    tu("appearance", "font-smoothing", {
        label: "Font Smoothing",
        surface: "glass",
        condition: "macos",
        description: "Use native macOS font anti-aliasing",
        aliases: [
            "font smoothing",
            "antialiasing",
            "sharp text",
            "crisp text"
        ]
    }),
    tu("appearance", "motion", {
        label: "Motion",
        surface: "glass"
    }),
    tu("appearance", "reduce-motion", {
        label: "Reduce Motion",
        surface: "glass",
        description: "Minimize interface animations",
        aliases: [
            "reduce motion",
            "animation",
            "accessibility",
            "motion"
        ]
    }),
    tu("appearance", "fun", {
        label: "Fun",
        surface: "glass",
        condition: "confetti"
    }),
    tu("appearance", "confetti", {
        label: "Give the Agent a Confetti Cannon",
        surface: "glass",
        condition: "confetti",
        description: "Allow the agent to celebrate with a shower of confetti",
        aliases: [
            "confetti",
            "celebration",
            "celebrations",
            "cannon",
            "agent",
            "fun"
        ]
    }),
    tu("appearance", "privacy", {
        label: "Privacy",
        surface: "glass"
    }),
    tu("appearance", "hide-email", {
        label: "Hide Email Address",
        surface: "glass",
        description: "Partially mask your email address in the Cursor user interface"
    }),
    tu("plan-usage", "monthly-limit", {
        label: "Monthly Limit",
        description: "Set a fixed amount or make on-demand usage unlimited",
        aliases: [
            "monthly",
            "monthly limit",
            "limit",
            "spend limit",
            "spending limit",
            "hard limit",
            "on-demand limit"
        ]
    }),
    tu("indexing", "cursor-tab", {
        label: "Cursor Tab",
        description: "Context-aware, multi-line suggestions around your cursor based on recent edits",
        elementId: nrs
    }),
    tu("chat", "conversation", {
        label: "Conversation"
    }),
    tu("chat", "usage-summary", {
        label: "Usage Summary",
        condition: "usage-summary",
        description: "When to show the usage summary at the bottom of the chat pane"
    }),
    tu("chat", "text-size", {
        label: "Text Size",
        surface: "ide",
        description: "Adjust the conversation text size"
    }),
    tu("chat", "default-environment", {
        label: "Default Environment",
        surface: "glass",
        description: "Where new agents start by default",
        aliases: [
            "default agent environment",
            "new agent environment",
            "last used",
            "new worktree"
        ],
        condition: "new-agent-default-environment"
    }),
    tu("chat", "queue-messages", {
        label: "Queue Messages",
        condition: "not-agent-steering",
        description: "Adjust the default behavior of sending a message while Agent is running"
    }),
    tu("chat", "new-messages", {
        label: "New Messages",
        condition: "agent-steering",
        description: "What sending a message while Agent is running does",
        aliases: [
            "queue",
            "queue messages"
        ]
    }),
    tu("chat", "queue-manual-send", {
        label: "Manually Sent Messages from Queue",
        condition: "agent-steering",
        description: "What the queued-message Send Now action does",
        aliases: [
            "queue",
            "send now",
            "steer",
            "manual send"
        ]
    }),
    tu("chat", "code-word-wrap", {
        label: hee.label,
        surface: "ide",
        description: hee.description,
        aliases: hee.searchAliases
    }),
    tu("chat", "agent-autocomplete", {
        label: "Agent Autocomplete",
        description: "Contextual suggestions while prompting Agent"
    }),
    tu("chat", "follow-up-prompt-suggestions", {
        label: "Follow-Up Prompt Suggestions",
        condition: "prompt-suggestions",
        description: "Suggest a follow-up for the Agent"
    }),
    tu("chat", "auto-approve-transitions", {
        label: "Auto-Approve Mode Transitions",
        description: "Allow agent to switch to modes without asking. When off, skips if unanswered within 15 seconds."
    }),
    tu("chat", "voice-submit-keywords", {
        label: "Voice Submit Keywords",
        condition: "not-realtime-voice"
    }),
    tu("voice", "agent-voice", {
        label: aWl,
        description: "Default voice for voice chats",
        aliases: [
            "default voice",
            "voice picker"
        ]
    }),
    tu("voice", "speed", {
        label: "Speed",
        description: "How quickly the voice speaks in voice chats",
        aliases: [
            "voice speed",
            "speech rate"
        ]
    }),
    tu("voice", "language", {
        label: "Language",
        description: "Language used in voice chats",
        aliases: [
            "voice language"
        ]
    }),
    tu("voice", "submit-keywords", {
        label: "Submit Keywords",
        condition: "realtime-voice",
        description: "Words that send your prompt while you dictate",
        aliases: [
            "voice submit keywords",
            "voice",
            "dictation"
        ]
    }),
    tu("chat", "context-tools", {
        label: "Context and Tools"
    }),
    tu("chat", "web-search", {
        label: "Web Search Tool",
        description: "Allow Agent to search the web for relevant information",
        aliases: [
            "auto accept web search",
            "skip web search approval"
        ]
    }),
    tu("chat", "web-fetch", {
        label: "Web Fetch Tool",
        description: "Allow Agent to fetch content from URLs"
    }),
    tu("chat", "wait-auth", {
        label: "Wait for MCP Authentication",
        description: "Wait indefinitely; otherwise skip prompts after 30 seconds",
        aliases: [
            "mcp",
            "authentication",
            "auth",
            "oauth",
            "timeout",
            "wait"
        ],
        elementId: _rl
    }),
    tu("chat", "execution-approvals", {
        label: "Execution and Approvals",
        aliases: [
            "command allowlist",
            "command blocklist",
            "command denylist",
            "external file protection",
            "fetch domain allowlist",
            "file deletion protection",
            "mcp allowlist",
            "mcp tools protection",
            "smart allowlist"
        ]
    }),
    tu("chat", "run-mode", {
        label: "Run Mode",
        aliases: [
            "sandbox"
        ],
        elementId: drl
    }),
    tu("chat", "file-read-access", {
        label: "Read Access",
        description: "Control whether agents can read files outside the workspace without approval.",
        aliases: [
            "read access",
            "agent read access",
            "read boundary",
            "workspace read",
            "system read",
            "file read"
        ],
        elementId: mrl,
        condition: "sandbox-read-control-portal"
    }),
    tu("chat", "read-allowlist", {
        label: "Read Allowlist",
        description: "File paths and glob patterns agents can read without approval.",
        aliases: [
            "file read allowlist",
            "path allowlist",
            "read access",
            "path patterns"
        ],
        elementId: grl,
        condition: "sandbox-read-control-portal"
    }),
    tu("chat", "terminal-editing", {
        label: "Terminal and Editing"
    }),
    tu("chat", "legacy-terminal", {
        label: "Legacy Terminal Tool",
        description: "Use legacy terminal tool on unsupported shells"
    }),
    tu("chat", "auto-parse-links", {
        label: "Auto-Parse Links",
        description: "Automatically parse links pasted into Quick Edit"
    }),
    tu("indexing", "lsp", {
        label: "LSP",
        surface: "glass",
        aliases: [
            "language server",
            "code intelligence"
        ],
        elementId: Srl
    }),
    tu("indexing", "lsp-enabled", {
        label: "Enable LSPs",
        surface: "glass",
        description: "Enable language server by default to provide code intelligence in workspaces",
        aliases: [
            "language server",
            "code intelligence"
        ]
    }),
    tu("indexing", "lsp-worktrees-enabled", {
        label: "Enable LSPs for Worktrees",
        surface: "glass",
        description: "Enable language server by default to provide code intelligence in agent worktree workspaces",
        aliases: [
            "language server",
            "worktree"
        ]
    }),
    tu("indexing", "lsp-max-local-workspaces", {
        label: "Maximum Local LSP Workspaces",
        surface: "glass",
        description: "Maximum local workspaces that can run language servers at the same time",
        aliases: [
            "language server",
            "local",
            "limit"
        ]
    }),
    tu("indexing", "lsp-max-remote-workspaces", {
        label: "Maximum Remote LSP Workspaces",
        surface: "glass",
        description: "Maximum remote workspaces that can run language servers at the same time",
        aliases: [
            "language server",
            "remote",
            "SSH",
            "limit"
        ]
    }),
    tu("chat", "themed-diff-backgrounds", {
        label: pee.label,
        surface: "ide",
        description: pee.description,
        aliases: pee.searchAliases
    }),
    tu("chat", "inline-diffs", {
        label: "Inline Diffs",
        surface: "ide",
        description: "Show inline diff decorations in the editor",
        aliases: [
            "jump to next diff on accept"
        ]
    }),
    tu("chat", "auto-format", {
        label: "Auto Format on Agent Finish",
        surface: "ide",
        description: "Automatically format files when Agent finishes"
    }),
    tu("chat", "skills-sync", {
        label: "Sync Skills for Cloud Agents",
        surface: "glass",
        description: "Cursor syncs your local skills so they can be used with Cloud Agents",
        aliases: [
            "skills",
            ".cursor/skills",
            "cloud agents",
            "agent store"
        ]
    }),
    tu("chat", "toolbar-selection", {
        label: "Toolbar on Selection",
        surface: "ide",
        description: "Show Add to Chat and Quick Edit buttons"
    }),
    tu("chat", "terminal-hint", {
        label: "Terminal Hint",
        surface: "ide",
        description: "Show the Cmd/Ctrl+K hint in Terminal"
    }),
    tu("chat", "terminal-preview-box", {
        label: "Preview Box for Terminal Cmd/Ctrl+K",
        surface: "ide",
        description: "Use the preview box instead of shell streaming",
        elementId: brl
    }),
    tu("models", "task-models", {
        label: "Task Models"
    }),
    tu("models", "explore-subagent-model", {
        label: "Explore Subagent Model",
        description: "Choose the model used by Explore subagent for initial research"
    }),
    tu("models", "gateway", {
        label: "Gateway",
        condition: "local-mode",
        description: "Configure the local agent LLM gateway",
        aliases: [
            "gateway",
            "local agent",
            "base url",
            "api key"
        ]
    }),
    tu("git-prs", "pull-requests", {
        label: "Pull Requests",
        condition: "signed-in"
    }),
    tu("git-prs", "review-provider", {
        label: "Review Provider",
        condition: "signed-in",
        aliases: [
            "pull request",
            "pr",
            "github",
            "graphite",
            "origin",
            "cursor review"
        ]
    }),
    tu("git-prs", "pr-link-destination", {
        label: "PR Link Destination",
        condition: "signed-in",
        description: "Open pull request links inside Cursor or the default browser",
        aliases: [
            "pull request",
            "pr",
            "open in browser"
        ]
    }),
    tu("git-prs", "attribution", {
        label: "Attribution"
    }),
    tu("git-prs", "commit-attribution", {
        label: "Commit Attribution"
    }),
    tu("git-prs", "pr-attribution", {
        label: "PR Attribution"
    }),
    tu("git-prs", "branches", {
        label: "Branches"
    }),
    tu("git-prs", "branch-prefix", {
        label: "Branch Prefix",
        description: "Prefix for new Agent branches"
    }),
    tu("git-prs", "self-driving", {
        label: "Self-Driving PRs",
        surface: "glass",
        condition: "full-self-driving",
        elementId: uat,
        aliases: [
            "fsd",
            "self-driving"
        ]
    }),
    tu("git-prs", "allow-agents", {
        label: "Allow Agents on My PRs",
        surface: "glass",
        condition: "full-self-driving",
        elementId: uat,
        description: "Enable or disable Self-driving for PRs owned by this account",
        aliases: [
            "fsd",
            "self-driving",
            "disable self-driving"
        ]
    }),
    tu("git-prs", "auto-start", {
        label: "Start When I Open a PR",
        surface: "glass",
        condition: "full-self-driving",
        elementId: uat,
        description: "Start Self-driving automatically for enabled repositories",
        aliases: [
            "auto start",
            "pr creation",
            "fsd"
        ]
    }),
    tu("git-prs", "default-mode", {
        label: "Default Mode",
        surface: "glass",
        condition: "full-self-driving",
        elementId: uat,
        description: "Choose whether automatically started agents suggest or apply changes",
        aliases: [
            "suggest",
            "apply",
            "fsd mode"
        ]
    }),
    tu("git-prs", "post-slack", {
        label: "Post to Slack",
        surface: "glass",
        condition: "full-self-driving",
        elementId: uat,
        description: "Post Self-driving updates to Slack",
        aliases: [
            "slack notifications",
            "slack channel",
            "fsd"
        ]
    }),
    tu("chat", "third-party-configs", {
        label: "Include Third-Party Plugins, Skills, and Other Configs",
        description: "Automatically import agent configs from other tools",
        elementId: Jis
    }),
    tu("chat", "import-claude-agents", {
        label: "Import Claude Code Conversations",
        surface: "glass",
        condition: "import-cc-conversation",
        description: "Sync chats and continue them in Cursor",
        elementId: yrl
    }),
    tu("indexing", "codebase", {
        label: "Codebase"
    }),
    tu("indexing", "cursorignore-files", {
        label: "Ignore Files in .cursorignore",
        surface: "ide",
        description: "Files to exclude from indexing in addition to .gitignore"
    }),
    tu("indexing", "ignore-files", {
        label: "Ignore Files"
    }),
    tu("indexing", "hierarchical-ignore", {
        label: "Hierarchical Cursor Ignore",
        description: "Apply .cursorignore files to subdirectories"
    }),
    tu("indexing", "ignore-symlinks", {
        label: "Ignore Symlinks in Cursor Ignore Search",
        description: "Skip symlinks during discovery"
    }),
    tu("browser", "http-compatibility", {
        label: "HTTP Compatibility Mode",
        description: "Configure HTTP compatibility for proxies and VPNs"
    }),
    tu("browser", "required-domains", {
        label: "Required Domains",
        description: "Domains required for Cursor"
    }),
    tu("browser", "diagnostics", {
        label: "Network Diagnostics",
        description: "Check connectivity to all Cursor services"
    }),
    tu("beta", "update-access", {
        label: "Update Access"
    }),
    tu("beta", "dedicated-local-agent-runtime", {
        label: "Dedicated Agent Runtime",
        surface: "ide",
        description: "Run Private Inference in a separate local process to isolate it from remote workspace activity. Reload Cursor after changing this setting."
    }),
    tu("git-prs", "cleanup", {
        label: "Worktree Cleanup",
        description: "Cursor periodically removes old worktrees to free disk space",
        elementId: trs,
        aliases: [
            "worktrees",
            "cleanup"
        ]
    }),
    tu("git-prs", "max-count", {
        label: "Max Worktrees",
        description: "Maximum retained Cursor-managed worktrees",
        aliases: [
            "max",
            "worktree",
            "count",
            "limit",
            "retention"
        ]
    }),
    tu("git-prs", "max-size", {
        label: "Max Total Size (GB)",
        description: "Maximum aggregate worktree size",
        aliases: [
            "size",
            "disk",
            "storage",
            "gb",
            "gigabytes",
            "limit"
        ]
    }),
    tu("git-prs", "managed", {
        label: "Cursor-Managed Worktrees"
    }),
    tu("developer", "tracing", {
        label: "Tracing"
    }),
    tu("developer", "local-trace", {
        label: "Local Trace Mode",
        aliases: [
            "rpc",
            "trace",
            "tracing",
            "devtools",
            "network",
            "performance"
        ]
    }),
    tu("developer", "continuous-rpc", {
        label: "Continuous RPC File Recording",
        aliases: [
            "rpc",
            "tracer",
            "recording",
            "perfetto"
        ]
    })
];

}
