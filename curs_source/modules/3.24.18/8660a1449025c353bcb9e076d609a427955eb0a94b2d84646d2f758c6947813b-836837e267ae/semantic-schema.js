import { EAa, zm1 } from "./ipa.js";
import { PAa } from "./semantic-ladders.js";
import { EHt, Qne } from "./shared_3.js";
import { E } from "./tslib.es6.js";
var mRp, gRp, _Hr, OMa, bHr;
export { OMa, _Hr, bHr, gRp, mRp };
var __wakaru_FMa_initialized = false;
export function FMa() {
if (__wakaru_FMa_initialized) return;
__wakaru_FMa_initialized = true;
"use strict";
E(), PAa(), EHt(), mRp = new Set(Qne), gRp = zm1("light"), _Hr = {
    foreground: {
        op: "ref",
        ref: "base"
    },
    textPrimary: {
        op: "ref",
        ref: "base"
    },
    textSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 74
    },
    textTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 60
    },
    textQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 36
    },
    textInvert: {
        op: "ref",
        ref: "editor"
    },
    textMedia: {
        op: "mixWhite",
        whitePercent: 100
    },
    textActive: {
        op: "ref",
        ref: "textPrimary"
    },
    textFocused: {
        op: "ref",
        ref: "textPrimary"
    },
    textOnPrimary: {
        op: "ref",
        ref: "onPrimary"
    },
    textOnPrimarySecondary: {
        op: "mixTransparent",
        ref: "onPrimary",
        percent: 74
    },
    ...gRp,
    textAccent: {
        op: "ref",
        ref: "accent"
    },
    textLink: {
        op: "ref",
        ref: "textBluePrimary"
    },
    bgLinkHover: {
        op: "ref",
        ref: "bgBlueSecondary"
    },
    iconPrimary: {
        op: "ref",
        ref: "base"
    },
    iconSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 66
    },
    iconTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 52
    },
    iconQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 28
    },
    iconAccentPrimary: {
        op: "ref",
        ref: "accent"
    },
    iconOnPrimary: {
        op: "ref",
        ref: "onPrimary"
    },
    iconOnPrimarySecondary: {
        op: "mixTransparent",
        ref: "onPrimary",
        percent: 66
    },
    bgPrimary: {
        op: "mixTransparent",
        ref: "base",
        percent: 20
    },
    bgSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 14
    },
    bgTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 8
    },
    bgQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 6
    },
    bgQuinary: {
        op: "mixTransparent",
        ref: "base",
        percent: 4
    },
    bgMedia: {
        op: "mixBlack",
        blackPercent: 72
    },
    bgMediaHover: {
        op: "mixBlack",
        blackPercent: 54
    },
    bgElevated: {
        op: "ref",
        ref: "editor"
    },
    bgChrome: {
        op: "ref",
        ref: "chrome"
    },
    bgCard: {
        op: "ref",
        ref: "bgQuaternary"
    },
    bgInput: {
        op: "ref",
        ref: "editor"
    },
    bgInputField: {
        op: "mixTransparentOverlay",
        ref: "base",
        percent: 3
    },
    bgInputSurface: {
        op: "ref",
        ref: "bgQuaternary"
    },
    bgEditor: {
        op: "ref",
        ref: "editor"
    },
    bgSidebar: {
        op: "ref",
        ref: "sidebar"
    },
    bgDiffInserted: {
        op: "ref",
        ref: "diffAddedLineBackground"
    },
    bgDiffRemoved: {
        op: "ref",
        ref: "diffRemovedLineBackground"
    },
    bgGitAddedHover: {
        op: "mixTwo",
        k1: "base",
        p1: 10,
        k2: "added"
    },
    bgGitModifiedHover: {
        op: "mixTwo",
        k1: "base",
        p1: 10,
        k2: "modified"
    },
    bgGitRemovedHover: {
        op: "mixTwo",
        k1: "base",
        p1: 10,
        k2: "removed"
    },
    bgGitUntrackedHover: {
        op: "mixTwo",
        k1: "base",
        p1: 10,
        k2: "untracked"
    },
    bgActive: {
        op: "mixTransparent",
        ref: "base",
        percent: 16
    },
    bgFocused: {
        op: "mixTransparent",
        ref: "base",
        percent: 22
    },
    bgAccent: {
        op: "ref",
        ref: "accent"
    },
    bgAccentHover: {
        op: "mixTwo",
        k1: "base",
        p1: 10,
        k2: "accent"
    },
    strokeControlDivider: {
        op: "mixBlack",
        blackPercent: 16
    },
    strokeControlDividerMonochrome: {
        op: "mixTransparent",
        ref: "editor",
        percent: 16
    },
    strokePrimary: {
        op: "mixTransparent",
        ref: "base",
        percent: 20
    },
    strokeSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 12
    },
    strokeMedia: {
        op: "mixWhite",
        whitePercent: 12
    },
    strokeTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 8
    },
    strokeTertiaryOpaque: {
        op: "mixTwo",
        k1: "base",
        p1: 8,
        k2: "chrome"
    },
    strokeQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 4
    },
    strokeFocused: {
        op: "ref",
        ref: "focus",
        fadePercent: 15
    },
    strokeHighContrast: {
        op: "mixTransparent",
        ref: "base",
        percent: 0
    },
    shadowPrimary: {
        op: "mixBlack",
        blackPercent: 20
    },
    shadowSecondary: {
        op: "mixTransparent",
        ref: "shadowPrimary",
        percent: 60
    },
    shadowTertiary: {
        op: "mixTransparent",
        ref: "shadowPrimary",
        percent: 30
    },
    shadowWorkbench: {
        op: "shadow",
        candidates: [
            {
                x: 0,
                y: 0,
                blur: 8,
                spread: 2,
                primaryMixPercent: 40
            }
        ]
    },
    boxShadowSm: {
        op: "shadow",
        candidates: [
            {
                x: 0,
                y: 2,
                blur: 8,
                spread: 0,
                shadowToken: "shadowSecondary"
            }
        ]
    },
    boxShadowBase: {
        op: "shadow",
        candidates: [
            {
                x: 0,
                y: 0,
                blur: 8,
                spread: 2,
                shadowToken: "shadowPrimary"
            }
        ]
    },
    boxShadowSoft: {
        op: "shadow",
        candidates: [
            {
                x: 0,
                y: 0,
                blur: 8,
                spread: 2,
                shadowToken: "shadowTertiary"
            }
        ]
    },
    boxShadowPopup: {
        op: "shadow",
        candidates: [
            {
                x: 0,
                y: 3,
                blur: 8,
                spread: 0,
                shadowToken: "shadowSecondary"
            },
            {
                x: 0,
                y: 2,
                blur: 5,
                spread: 0,
                shadowToken: "shadowSecondary"
            },
            {
                x: 0,
                y: 1,
                blur: 1,
                spread: 0,
                shadowToken: "shadowSecondary"
            }
        ]
    },
    boxShadowLg: {
        op: "shadow",
        candidates: [
            {
                inset: !0,
                x: 0,
                y: 0,
                blur: 4,
                spread: 0,
                literalColor: "oklch(1 0 0 / 0.05)"
            },
            {
                x: 0,
                y: 0,
                blur: 3,
                spread: 0,
                shadowToken: "shadowSecondary"
            },
            {
                x: 0,
                y: 16,
                blur: 24,
                spread: 0,
                shadowToken: "shadowTertiary"
            }
        ]
    },
    boxShadowXl: {
        op: "shadow",
        candidates: [
            {
                inset: !0,
                x: 0,
                y: 0,
                blur: 4,
                spread: 0,
                literalColor: "oklch(1 0 0 / 0.05)"
            },
            {
                x: 0,
                y: 0,
                blur: 6,
                spread: 8,
                shadowToken: "shadowSecondary"
            },
            {
                x: 0,
                y: 24,
                blur: 16,
                spread: 6,
                shadowToken: "shadowTertiary"
            }
        ]
    },
    buttonDangerBackground: {
        op: "ref",
        ref: "bgDangerPrimary"
    },
    buttonDangerForeground: {
        op: "ref",
        ref: "textInvert"
    },
    buttonDangerHoverBackground: {
        op: "mixBlackRef",
        ref: "danger",
        colorPercent: 85
    },
    buttonDangerActiveBackground: {
        op: "ref",
        ref: "buttonDangerHoverBackground"
    },
    buttonDangerSoftBackground: {
        op: "ref",
        ref: "bgDangerQuaternary"
    },
    buttonDangerSoftHoverBackground: {
        op: "ref",
        ref: "bgDangerTertiary"
    },
    controlDisabledBackground: {
        op: "ref",
        ref: "bgQuinary"
    },
    controlDisabledBorder: {
        op: "ref",
        ref: "strokeTertiary"
    },
    controlDisabledForeground: {
        op: "ref",
        ref: "textQuaternary"
    },
    buttonPrimaryBackground: {
        op: "ref",
        ref: "bgAccent"
    },
    buttonPrimaryForeground: {
        op: "ref",
        ref: "textOnPrimary"
    },
    buttonPrimaryHoverBackground: {
        op: "ref",
        ref: "bgAccentHover"
    },
    buttonPrimaryActiveBackground: {
        op: "ref",
        ref: "buttonPrimaryHoverBackground"
    },
    buttonSecondaryBackground: {
        op: "ref",
        ref: "bgTertiary"
    },
    buttonSecondaryForeground: {
        op: "ref",
        ref: "textPrimary"
    },
    buttonSecondaryHoverBackground: {
        op: "ref",
        ref: "bgSecondary"
    },
    buttonSuccessBackground: {
        op: "ref",
        ref: "bgSuccessPrimary"
    },
    buttonSuccessForeground: {
        op: "ref",
        ref: "textInvert"
    },
    buttonSuccessHoverBackground: {
        op: "mixWhiteRef",
        ref: "success",
        colorPercent: 85
    },
    buttonSuccessActiveBackground: {
        op: "ref",
        ref: "buttonSuccessHoverBackground"
    },
    buttonSuccessSoftBackground: {
        op: "ref",
        ref: "bgSuccessQuaternary"
    },
    buttonSuccessSoftHoverBackground: {
        op: "ref",
        ref: "bgSuccessTertiary"
    },
    buttonWarningBackground: {
        op: "ref",
        ref: "bgWarningPrimary"
    },
    buttonWarningForeground: {
        op: "ref",
        ref: "textInvert"
    },
    buttonWarningHoverBackground: {
        op: "mixTwoOklab",
        k1: "base",
        p1: 10,
        k2: "warn"
    },
    buttonWarningActiveBackground: {
        op: "ref",
        ref: "buttonWarningHoverBackground"
    },
    buttonWarningSoftBackground: {
        op: "ref",
        ref: "bgWarningQuaternary"
    },
    buttonWarningSoftHoverBackground: {
        op: "ref",
        ref: "bgWarningTertiary"
    },
    titlebarActiveForeground: {
        op: "ref",
        ref: "textSecondary"
    },
    titlebarInactiveForeground: {
        op: "ref",
        ref: "textTertiary"
    },
    commandCenterForeground: {
        op: "ref",
        ref: "textSecondary"
    },
    commandCenterBackground: {
        op: "ref",
        ref: "bgTertiary"
    },
    commandCenterBorder: {
        op: "ref",
        ref: "strokeSecondary"
    },
    commandCenterActiveForeground: {
        op: "ref",
        ref: "textSecondary"
    },
    commandCenterActiveBorder: {
        op: "ref",
        ref: "strokePrimary"
    },
    commandCenterActiveBackground: {
        op: "ref",
        ref: "bgSecondary"
    },
    commandCenterInactiveForeground: {
        op: "ref",
        ref: "textTertiary"
    },
    commandCenterInactiveBorder: {
        op: "ref",
        ref: "strokeSecondary"
    },
    terminalBackground: {
        op: "ref",
        ref: "chrome"
    },
    terminalForeground: {
        op: "ref",
        ref: "textPrimary"
    },
    terminalSelectionBackground: {
        op: "mixTransparent",
        ref: "base",
        percent: 12
    },
    scrollbarThumbBackground: {
        op: "mixTransparentOverlay",
        ref: "base",
        percent: 14
    },
    scrollbarThumbHoverBackground: {
        op: "mixTransparentOverlay",
        ref: "base",
        percent: 22
    },
    scrollbarThumbActiveBackground: {
        op: "mixTransparentOverlay",
        ref: "base",
        percent: 26
    },
    scrollbarShadow: {
        op: "ref",
        ref: "shadowPrimary"
    },
    progressBarBackground: {
        op: "ref",
        ref: "accent"
    },
    toolbarHoverBackground: {
        op: "ref",
        ref: "bgTertiary"
    },
    inputBorder: {
        op: "ref",
        ref: "strokeSecondary"
    },
    inputPlaceholderForeground: {
        op: "ref",
        ref: "textQuaternary"
    },
    editorForeground: {
        op: "ref",
        ref: "textPrimary"
    },
    editorLineHighlightBackground: {
        op: "mixTransparent",
        ref: "base",
        percent: 8
    },
    editorLineNumberForeground: {
        op: "ref",
        ref: "textTertiary"
    },
    editorLineNumberActiveForeground: {
        op: "ref",
        ref: "textPrimary"
    },
    editorCursorForeground: {
        op: "ref",
        ref: "textPrimary"
    },
    editorSelectionBackground: {
        op: "mixTransparent",
        ref: "accent",
        percent: 42
    },
    editorInactiveSelectionBackground: {
        op: "mixTransparent",
        ref: "accent",
        percent: 30
    },
    editorSelectionHighlightBackground: {
        op: "mixTransparentAlpha",
        key: "accent",
        percent: 32,
        alpha: 128 / 255
    },
    editorWidgetBackground: {
        op: "ref",
        ref: "bgElevated"
    },
    editorWidgetBorder: {
        op: "ref",
        ref: "strokeSecondary"
    },
    editorWidgetForeground: {
        op: "ref",
        ref: "textPrimary"
    },
    editorGutterBackground: {
        op: "ref",
        ref: "editor"
    },
    editorWhitespaceForeground: {
        op: "mixTransparent",
        ref: "base",
        percent: 22
    },
    editorBracketMatchBackground: {
        op: "mixTransparent",
        ref: "success",
        percent: 22
    },
    editorBracketMatchBorder: {
        op: "mixTransparent",
        ref: "base",
        percent: 52
    },
    editorIndentGuideBackground: {
        op: "mixTransparent",
        ref: "base",
        percent: 22
    },
    editorIndentGuideActiveBackground: {
        op: "mixTransparent",
        ref: "base",
        percent: 40
    },
    editorFindMatchBackground: {
        op: "mixTransparent",
        ref: "warn",
        percent: 72
    },
    editorFindMatchHighlightBackground: {
        op: "mixTransparentOverlay",
        ref: "warn",
        percent: 32
    },
    bgSearchMatch: {
        op: "mixTransparentOverlay",
        ref: "yellow",
        percent: 22
    },
    bgSearchMatchCurrent: {
        op: "mixTransparentOverlay",
        ref: "yellow",
        percent: 32
    },
    textCodeBlockBackground: {
        op: "ref",
        ref: "bgElevated"
    },
    textLinkActive: {
        op: "ref",
        ref: "accent"
    }
}, OMa = {
    textPrimary: {
        op: "ref",
        ref: "base"
    },
    textSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 84
    },
    textTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 72
    },
    textQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 60
    },
    textGitAddedSecondary: {
        op: "mixTransparent",
        ref: "added",
        percent: 88
    },
    textGitAddedTertiary: {
        op: "mixTransparent",
        ref: "added",
        percent: 76
    },
    textGitAddedQuaternary: {
        op: "mixTransparent",
        ref: "added",
        percent: 64
    },
    textGitModifiedSecondary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 88
    },
    textGitModifiedTertiary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 76
    },
    textGitModifiedQuaternary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 64
    },
    textGitRemovedSecondary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 88
    },
    textGitRemovedTertiary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 76
    },
    textGitRemovedQuaternary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 64
    },
    textGitUntrackedSecondary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 88
    },
    textGitUntrackedTertiary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 76
    },
    textGitUntrackedQuaternary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 64
    },
    textRedSecondary: {
        op: "mixTransparent",
        ref: "red",
        percent: 88
    },
    textYellowSecondary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 88
    },
    textGreenSecondary: {
        op: "mixTransparent",
        ref: "green",
        percent: 88
    },
    textMagentaSecondary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 88
    },
    textPurpleSecondary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 88
    },
    textCyanSecondary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 88
    },
    textBlueSecondary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 88
    },
    textOrangeSecondary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 88
    },
    textAccentSecondary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 88
    },
    iconGitAddedSecondary: {
        op: "mixTransparent",
        ref: "added",
        percent: 80
    },
    iconGitAddedTertiary: {
        op: "mixTransparent",
        ref: "added",
        percent: 68
    },
    iconGitAddedQuaternary: {
        op: "mixTransparent",
        ref: "added",
        percent: 56
    },
    iconGitModifiedSecondary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 80
    },
    iconGitModifiedTertiary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 68
    },
    iconGitModifiedQuaternary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 56
    },
    iconGitRemovedSecondary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 80
    },
    iconGitRemovedTertiary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 68
    },
    iconGitRemovedQuaternary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 56
    },
    iconGitUntrackedSecondary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 80
    },
    iconGitUntrackedTertiary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 68
    },
    iconGitUntrackedQuaternary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 56
    },
    iconRedSecondary: {
        op: "mixTransparent",
        ref: "red",
        percent: 80
    },
    iconYellowSecondary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 80
    },
    iconGreenSecondary: {
        op: "mixTransparent",
        ref: "green",
        percent: 80
    },
    iconMagentaSecondary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 80
    },
    iconPurpleSecondary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 80
    },
    iconCyanSecondary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 80
    },
    iconBlueSecondary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 80
    },
    iconOrangeSecondary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 80
    },
    iconAccentSecondary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 80
    },
    iconPrimary: {
        op: "ref",
        ref: "base"
    },
    iconSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 76
    },
    iconTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 64
    },
    iconQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 52
    },
    bgPrimary: {
        op: "mixTransparent",
        ref: "base",
        percent: 36
    },
    bgSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 24
    },
    bgTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 14
    },
    bgQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 8
    },
    bgQuinary: {
        op: "mixTransparent",
        ref: "base",
        percent: 5
    },
    bgInputField: {
        op: "ref",
        ref: "bgInput"
    },
    bgInputSurface: {
        op: "ref",
        ref: "bgInput"
    },
    bgYellowSecondary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 24
    },
    bgRedSecondary: {
        op: "mixTransparent",
        ref: "red",
        percent: 24
    },
    bgGreenSecondary: {
        op: "mixTransparent",
        ref: "green",
        percent: 24
    },
    bgMagentaSecondary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 24
    },
    bgCyanSecondary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 24
    },
    bgBlueSecondary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 24
    },
    strokePrimary: {
        op: "mixTransparent",
        ref: "base",
        percent: 48
    },
    strokeSecondary: {
        op: "mixTransparent",
        ref: "base",
        percent: 36
    },
    strokeTertiary: {
        op: "mixTransparent",
        ref: "base",
        percent: 28
    },
    strokeTertiaryOpaque: {
        op: "mixTwo",
        k1: "base",
        p1: 28,
        k2: "chrome"
    },
    strokeQuaternary: {
        op: "mixTransparent",
        ref: "base",
        percent: 20
    },
    strokeGitAdded: {
        op: "mixTransparent",
        ref: "added",
        percent: 80
    },
    strokeGitAddedSecondary: {
        op: "mixTransparent",
        ref: "added",
        percent: 56
    },
    strokeGitModified: {
        op: "mixTransparent",
        ref: "modified",
        percent: 80
    },
    strokeGitModifiedSecondary: {
        op: "mixTransparent",
        ref: "modified",
        percent: 56
    },
    strokeGitRemoved: {
        op: "mixTransparent",
        ref: "removed",
        percent: 80
    },
    strokeGitRemovedSecondary: {
        op: "mixTransparent",
        ref: "removed",
        percent: 56
    },
    strokeGitUntracked: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 80
    },
    strokeGitUntrackedSecondary: {
        op: "mixTransparent",
        ref: "untracked",
        percent: 56
    },
    strokeAccent: {
        op: "mixTransparent",
        ref: "accent",
        percent: 80
    },
    strokeAccentSecondary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 56
    },
    strokeRedPrimary: {
        op: "mixTransparent",
        ref: "red",
        percent: 80
    },
    strokeRedSecondary: {
        op: "mixTransparent",
        ref: "red",
        percent: 56
    },
    strokeYellowPrimary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 80
    },
    strokeYellowSecondary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 56
    },
    strokeGreenPrimary: {
        op: "mixTransparent",
        ref: "green",
        percent: 80
    },
    strokeGreenSecondary: {
        op: "mixTransparent",
        ref: "green",
        percent: 56
    },
    strokeMagentaPrimary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 80
    },
    strokeMagentaSecondary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 56
    },
    strokeCyanPrimary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 80
    },
    strokeCyanSecondary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 56
    },
    strokeBluePrimary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 80
    },
    strokeBlueSecondary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 56
    },
    strokeFocused: {
        op: "ref",
        ref: "focus",
        fadePercent: 100
    },
    strokeHighContrast: {
        op: "mixTransparent",
        ref: "base",
        percent: 36
    },
    textRedTertiary: {
        op: "mixTransparent",
        ref: "red",
        percent: 76
    },
    textOrangeTertiary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 76
    },
    textYellowTertiary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 76
    },
    textGreenTertiary: {
        op: "mixTransparent",
        ref: "green",
        percent: 76
    },
    textCyanTertiary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 76
    },
    textBlueTertiary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 76
    },
    textMagentaTertiary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 76
    },
    textPurpleTertiary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 76
    },
    textAccentTertiary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 76
    },
    textRedQuaternary: {
        op: "mixTransparent",
        ref: "red",
        percent: 64
    },
    textOrangeQuaternary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 64
    },
    textYellowQuaternary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 64
    },
    textGreenQuaternary: {
        op: "mixTransparent",
        ref: "green",
        percent: 64
    },
    textCyanQuaternary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 64
    },
    textBlueQuaternary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 64
    },
    textMagentaQuaternary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 64
    },
    textPurpleQuaternary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 64
    },
    textAccentQuaternary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 64
    },
    iconRedTertiary: {
        op: "mixTransparent",
        ref: "red",
        percent: 68
    },
    iconOrangeTertiary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 68
    },
    iconYellowTertiary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 68
    },
    iconGreenTertiary: {
        op: "mixTransparent",
        ref: "green",
        percent: 68
    },
    iconCyanTertiary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 68
    },
    iconBlueTertiary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 68
    },
    iconMagentaTertiary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 68
    },
    iconPurpleTertiary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 68
    },
    iconAccentTertiary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 68
    },
    iconRedQuaternary: {
        op: "mixTransparent",
        ref: "red",
        percent: 56
    },
    iconOrangeQuaternary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 56
    },
    iconYellowQuaternary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 56
    },
    iconGreenQuaternary: {
        op: "mixTransparent",
        ref: "green",
        percent: 56
    },
    iconCyanQuaternary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 56
    },
    iconBlueQuaternary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 56
    },
    iconMagentaQuaternary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 56
    },
    iconPurpleQuaternary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 56
    },
    iconAccentQuaternary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 56
    },
    strokePurplePrimary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 80
    },
    strokePurpleSecondary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 56
    },
    strokeRedTertiary: {
        op: "mixTransparent",
        ref: "red",
        percent: 40
    },
    strokeOrangeTertiary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 40
    },
    strokeYellowTertiary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 40
    },
    strokeGreenTertiary: {
        op: "mixTransparent",
        ref: "green",
        percent: 40
    },
    strokeCyanTertiary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 40
    },
    strokeBlueTertiary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 40
    },
    strokeMagentaTertiary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 40
    },
    strokePurpleTertiary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 40
    },
    strokeAccentTertiary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 40
    },
    strokeRedQuaternary: {
        op: "mixTransparent",
        ref: "red",
        percent: 28
    },
    strokeOrangeQuaternary: {
        op: "mixTransparent",
        ref: "orange",
        percent: 28
    },
    strokeYellowQuaternary: {
        op: "mixTransparent",
        ref: "yellow",
        percent: 28
    },
    strokeGreenQuaternary: {
        op: "mixTransparent",
        ref: "green",
        percent: 28
    },
    strokeCyanQuaternary: {
        op: "mixTransparent",
        ref: "cyan",
        percent: 28
    },
    strokeBlueQuaternary: {
        op: "mixTransparent",
        ref: "blue",
        percent: 28
    },
    strokeMagentaQuaternary: {
        op: "mixTransparent",
        ref: "magenta",
        percent: 28
    },
    strokePurpleQuaternary: {
        op: "mixTransparent",
        ref: "purple",
        percent: 28
    },
    strokeAccentQuaternary: {
        op: "mixTransparent",
        ref: "accent",
        percent: 28
    }
}, bHr = {
    light: {
        shadowPrimary: {
            op: "mixBlack",
            blackPercent: 6
        },
        boxShadowPopup: {
            op: "shadow",
            candidates: [
                {
                    x: 0,
                    y: 6,
                    blur: 18,
                    spread: 0,
                    literalColor: "lch(0% 0 0 / 0.02)"
                },
                {
                    x: 0,
                    y: 3,
                    blur: 9,
                    spread: 0,
                    literalColor: "lch(0% 0 0 / 0.04)"
                },
                {
                    x: 0,
                    y: 1,
                    blur: 1,
                    spread: 0,
                    literalColor: "lch(0% 0 0 / 0.04)"
                }
            ]
        }
    },
    dark: {
        ...EAa("dark")
    },
    lightHighContrast: {
        ...EAa("lightHighContrast"),
        ...OMa
    },
    darkHighContrast: {
        ...EAa("darkHighContrast"),
        ...OMa
    }
};

}
