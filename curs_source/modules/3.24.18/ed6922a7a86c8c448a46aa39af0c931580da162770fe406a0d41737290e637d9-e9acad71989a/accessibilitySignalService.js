import { He, S, Se, cn, rn, we } from "./HVr.js";
import { Op, ym } from "./accessibility.js";
import { C, ie } from "./actions_2.js";
import { bn, kge } from "./async.js";
import { Upn, vNt } from "./cache.js";
import { Cn, qt } from "./configuration.js";
import { Fn, en } from "./dom_2.js";
import { Ze } from "./instantiation.js";
import { Gd, li } from "./network.js";
import { rt } from "./nls.js";
import { qa } from "./observable.js";
import { H7 } from "./platformObservableUtils.js";
import { Ds, Jie, Lmn, Xt, _4c, _W, jdg, v4c, vn } from "./qIc.js";
import { x } from "./tslib.es6.js";
import { Ee, Qt } from "./uri.js";
import { qp, r2t } from "./utils_10.js";
import { lo, on } from "./window.js";
var A0, cFt, tbi, i_, Aw, b4c, vg, Uf;
export { A0, Aw, Uf, b4c, cFt, i_, tbi, vg };
var __wakaru_KT_initialized = false;
export function KT() {
if (__wakaru_KT_initialized) return;
__wakaru_KT_initialized = true;
"use strict";
x(), en(), lo(), bn(), Upn(), Jie(), Se(), li(), Qt(), qa(), rt(), Op(), Cn(), Ze(), H7(), A0 = vn("accessibilitySignalService"), cFt = Symbol("AcknowledgeDocCommentsToken"), tbi = class extends we {
    constructor(e, t){
        super(), this.configurationService = e, this.accessibilityService = t, this.audioContextResumeBlocked = !1, this.audioContextResumeUnblock = this._register(new cn), this.playingCustomSounds = new Set, this.sounds = new Map, this.screenReaderAttached = qp(this, this.accessibilityService.onDidChangeScreenReaderOptimized, ()=>this.accessibilityService.isScreenReaderOptimized()), this.playingSounds = new Set, this._signalConfigValue = new vNt((n)=>_W(n.settingsKey, {
                sound: "off",
                announcement: "off"
            }, this.configurationService)), this._signalEnabledState = new vNt({
            getCacheKey: jdg
        }, (n)=>Ds((i)=>{
                const r = this._signalConfigValue.get(n.signal).read(i);
                return !!((n.modality === "sound" || n.modality === void 0) && v4c(r.sound, ()=>this.screenReaderAttached.read(i), n.userGesture) || (n.modality === "announcement" || n.modality === void 0) && v4c(r.announcement, ()=>this.screenReaderAttached.read(i), n.userGesture));
            }).recomputeInitiallyAndOnChange(this._store)), this._register(kge(()=>void this.ensureAudioContextRunning()));
    }
    getEnabledState(e, t, n) {
        return new r2t(this._signalEnabledState.get({
            signal: e,
            userGesture: t,
            modality: n
        }));
    }
    async playSignal(e, t = {}) {
        const n = t.modality === "announcement" || t.modality === void 0, i = e.announcementMessage;
        n && this.isAnnouncementEnabled(e, t.userGesture) && i && this.accessibilityService.status(i), (t.modality === "sound" || t.modality === void 0) && this.isSoundEnabled(e, t.userGesture) && await this.playSound(e.sound.getSound(), t.allowManyInParallel);
    }
    async playSignals(e) {
        const t = e.map((r)=>"signal" in r ? r.signal : r), n = t.filter((r)=>this.isAnnouncementEnabled(r)).map((r)=>r.announcementMessage);
        n.length && this.accessibilityService.status(n.join(", "));
        const i = new Set(t.filter((r)=>this.isSoundEnabled(r)).map((r)=>r.sound.getSound()));
        await Promise.all(Array.from(i).map((r)=>this.playSound(r, !0)));
    }
    getVolumeInPercent() {
        const e = this.configurationService.getValue("accessibility.signalOptions.volume");
        return typeof e != "number" ? 50 : Math.max(Math.min(e, 100), 0);
    }
    async ensureAudioContextRunning() {
        const e = on, t = e.AudioContext ?? e.webkitAudioContext;
        if (t) {
            if (this.audioContext || (this.audioContext = new t, this._register(rn(()=>{
                this.audioContext?.close(), this.audioContext = void 0;
            }))), this.audioContext.state === "suspended") {
                if (this.audioContextResumeBlocked) return;
                try {
                    await this.audioContext.resume();
                } finally{
                    if (this.audioContext?.state === "suspended" && !this.audioContextResumeBlocked) {
                        this.audioContextResumeBlocked = !0;
                        const n = new He, i = ()=>{
                            this.audioContextResumeBlocked = !1, this.audioContextResumeUnblock.clear();
                        };
                        n.add(Lmn(on, i, !0)), n.add(Xt(on, Fn.KEY_DOWN, i, !0)), this.audioContextResumeUnblock.value = n;
                    }
                }
            }
            return this.audioContext.state === "running" ? this.audioContext : void 0;
        }
    }
    async playViaWebAudio(e, t) {
        try {
            const n = await this.ensureAudioContextRunning();
            if (!n) return !1;
            const i = await fetch(e);
            if (!i.ok) return !1;
            const r = await n.decodeAudioData(await i.arrayBuffer()), s = n.createBufferSource();
            s.buffer = r;
            const o = n.createGain();
            return o.gain.value = Math.max(0, Math.min(1, t)), s.connect(o), o.connect(n.destination), s.start(0), !0;
        } catch  {
            return !1;
        }
    }
    async playSound(e, t = !1) {
        if (!t && this.playingSounds.has(e)) return;
        this.playingSounds.add(e);
        const n = Gd.asBrowserUri(`vs/platform/accessibilitySignal/browser/media/${e.fileName}`).toString(!0);
        try {
            if (await this.playViaWebAudio(n, this.getVolumeInPercent() / 100)) return;
            const i = this.sounds.get(n);
            if (i) i.volume = this.getVolumeInPercent() / 100, i.currentTime = 0, await i.play();
            else {
                const r = await _4c(n, this.getVolumeInPercent() / 100);
                this.sounds.set(n, r);
            }
        } catch (i) {
            i.message.includes("play() can only be initiated by a user gesture") || console.error("Error while playing sound", i);
        } finally{
            this.playingSounds.delete(e);
        }
    }
    async playCustomSound(e, t = !1) {
        if (!e || !t && this.playingCustomSounds.has(e)) return;
        this.playingCustomSounds.add(e);
        let n;
        if (e.startsWith("http://") || e.startsWith("https://")) n = e;
        else {
            let i;
            e.startsWith("file://") ? i = Ee.parse(e) : (e.startsWith("/") || /^[a-zA-Z]:/.test(e), i = Ee.file(e)), n = Gd.uriToBrowserUri(i).toString(!0);
        }
        try {
            if (await this.playViaWebAudio(n, this.getVolumeInPercent() / 100)) return;
            const i = this.sounds.get(n);
            if (i) i.volume = this.getVolumeInPercent() / 100, i.currentTime = 0, await i.play();
            else {
                const r = await _4c(n, this.getVolumeInPercent() / 100);
                this.sounds.set(n, r);
            }
        } catch (i) {
            throw (i instanceof Error ? i.message : String(i)).includes("play() can only be initiated by a user gesture") || console.error("Error while playing custom sound", i), i;
        } finally{
            this.playingCustomSounds.delete(e);
        }
    }
    playSignalLoop(e, t) {
        let n = !0;
        const i = ()=>{
            n && this.playSignal(e, {
                allowManyInParallel: !0
            }).finally(()=>{
                setTimeout(()=>{
                    n && i();
                }, t);
            });
        };
        return i(), rn(()=>n = !1);
    }
    isAnnouncementEnabled(e, t) {
        return e.announcementMessage ? this._signalEnabledState.get({
            signal: e,
            userGesture: !!t,
            modality: "announcement"
        }).get() : !1;
    }
    isSoundEnabled(e, t) {
        return this._signalEnabledState.get({
            signal: e,
            userGesture: !!t,
            modality: "sound"
        }).get();
    }
    onSoundEnabledChanged(e) {
        return this.getEnabledState(e, !1).onDidChange;
    }
    getDelayMs(e, t, n) {
        if (!this.configurationService.getValue("accessibility.signalOptions.debouncePositionChanges")) return 0;
        let i;
        return e.name === Uf.errorAtPosition.name && n === "positional" ? i = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.errorAtPosition") : e.name === Uf.warningAtPosition.name && n === "positional" ? i = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.warningAtPosition") : i = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.general"), t === "sound" ? i.sound : i.announcement;
    }
}, tbi = ie([
    C(0, qt),
    C(1, ym)
], tbi), i_ = class Lkm {
    constructor(t){
        this.fileName = t;
    }
    static register(t) {
        return new Lkm(t.fileName);
    }
}, i_.error = i_.register({
    fileName: "error.mp3"
}), i_.warning = i_.register({
    fileName: "warning.mp3"
}), i_.success = i_.register({
    fileName: "success.mp3"
}), i_.foldedArea = i_.register({
    fileName: "foldedAreas.mp3"
}), i_.break = i_.register({
    fileName: "break.mp3"
}), i_.quickFixes = i_.register({
    fileName: "quickFixes.mp3"
}), i_.taskCompleted = i_.register({
    fileName: "taskCompleted.mp3"
}), i_.taskFailed = i_.register({
    fileName: "taskFailed.mp3"
}), i_.terminalBell = i_.register({
    fileName: "terminalBell.mp3"
}), i_.diffLineInserted = i_.register({
    fileName: "diffLineInserted.mp3"
}), i_.diffLineDeleted = i_.register({
    fileName: "diffLineDeleted.mp3"
}), i_.diffLineModified = i_.register({
    fileName: "diffLineModified.mp3"
}), i_.requestSent = i_.register({
    fileName: "requestSent.mp3"
}), i_.responseReceived1 = i_.register({
    fileName: "responseReceived1.mp3"
}), i_.responseReceived2 = i_.register({
    fileName: "responseReceived2.mp3"
}), i_.responseReceived3 = i_.register({
    fileName: "responseReceived3.mp3"
}), i_.responseReceived4 = i_.register({
    fileName: "responseReceived4.mp3"
}), i_.clear = i_.register({
    fileName: "clear.mp3"
}), i_.save = i_.register({
    fileName: "save.mp3"
}), i_.format = i_.register({
    fileName: "format.mp3"
}), i_.voiceRecordingStarted = i_.register({
    fileName: "voiceRecordingStarted.mp3"
}), i_.voiceRecordingStopped = i_.register({
    fileName: "voiceRecordingStopped.mp3"
}), i_.progress = i_.register({
    fileName: "progress.mp3"
}), i_.chatEditModifiedFile = i_.register({
    fileName: "chatEditModifiedFile.mp3"
}), i_.editsKept = i_.register({
    fileName: "editsKept.mp3"
}), i_.editsUndone = i_.register({
    fileName: "editsUndone.mp3"
}), i_.done1 = i_.register({
    fileName: "done1.mp3"
}), Aw = i_, b4c = class {
    constructor(e){
        this.randomOneOf = e;
    }
    getSound(e = !1) {
        if (e || this.randomOneOf.length === 1) return this.randomOneOf[0];
        {
            const t = Math.floor(Math.random() * this.randomOneOf.length);
            return this.randomOneOf[t];
        }
    }
}, vg = class UIa {
    constructor(t, n, i, r, s, o){
        this.sound = t, this.name = n, this.legacySoundSettingsKey = i, this.settingsKey = r, this.legacyAnnouncementSettingsKey = s, this.announcementMessage = o;
    }
    static register(t) {
        const n = new b4c("randomOneOf" in t.sound ? t.sound.randomOneOf : [
            t.sound
        ]), i = new UIa(n, t.name, t.legacySoundSettingsKey, t.settingsKey, t.legacyAnnouncementSettingsKey, t.announcementMessage);
        return UIa._signals.add(i), i;
    }
    static get allAccessibilitySignals() {
        return [
            ...this._signals
        ];
    }
}, vg._signals = new Set, vg.errorAtPosition = vg.register({
    name: S(1709, null),
    sound: Aw.error,
    announcementMessage: S(1710, null),
    settingsKey: "accessibility.signals.positionHasError",
    delaySettingsKey: "accessibility.signalOptions.delays.errorAtPosition"
}), vg.warningAtPosition = vg.register({
    name: S(1711, null),
    sound: Aw.warning,
    announcementMessage: S(1712, null),
    settingsKey: "accessibility.signals.positionHasWarning",
    delaySettingsKey: "accessibility.signalOptions.delays.warningAtPosition"
}), vg.errorOnLine = vg.register({
    name: S(1713, null),
    sound: Aw.error,
    legacySoundSettingsKey: "audioCues.lineHasError",
    legacyAnnouncementSettingsKey: "accessibility.alert.error",
    announcementMessage: S(1714, null),
    settingsKey: "accessibility.signals.lineHasError"
}), vg.warningOnLine = vg.register({
    name: S(1715, null),
    sound: Aw.warning,
    legacySoundSettingsKey: "audioCues.lineHasWarning",
    legacyAnnouncementSettingsKey: "accessibility.alert.warning",
    announcementMessage: S(1716, null),
    settingsKey: "accessibility.signals.lineHasWarning"
}), vg.foldedArea = vg.register({
    name: S(1717, null),
    sound: Aw.foldedArea,
    legacySoundSettingsKey: "audioCues.lineHasFoldedArea",
    legacyAnnouncementSettingsKey: "accessibility.alert.foldedArea",
    announcementMessage: S(1718, null),
    settingsKey: "accessibility.signals.lineHasFoldedArea"
}), vg.break = vg.register({
    name: S(1719, null),
    sound: Aw.break,
    legacySoundSettingsKey: "audioCues.lineHasBreakpoint",
    legacyAnnouncementSettingsKey: "accessibility.alert.breakpoint",
    announcementMessage: S(1720, null),
    settingsKey: "accessibility.signals.lineHasBreakpoint"
}), vg.inlineSuggestion = vg.register({
    name: S(1721, null),
    sound: Aw.quickFixes,
    legacySoundSettingsKey: "audioCues.lineHasInlineSuggestion",
    settingsKey: "accessibility.signals.lineHasInlineSuggestion"
}), vg.terminalQuickFix = vg.register({
    name: S(1722, null),
    sound: Aw.quickFixes,
    legacySoundSettingsKey: "audioCues.terminalQuickFix",
    legacyAnnouncementSettingsKey: "accessibility.alert.terminalQuickFix",
    announcementMessage: S(1723, null),
    settingsKey: "accessibility.signals.terminalQuickFix"
}), vg.onDebugBreak = vg.register({
    name: S(1724, null),
    sound: Aw.break,
    legacySoundSettingsKey: "audioCues.onDebugBreak",
    legacyAnnouncementSettingsKey: "accessibility.alert.onDebugBreak",
    announcementMessage: S(1725, null),
    settingsKey: "accessibility.signals.onDebugBreak"
}), vg.noInlayHints = vg.register({
    name: S(1726, null),
    sound: Aw.error,
    legacySoundSettingsKey: "audioCues.noInlayHints",
    legacyAnnouncementSettingsKey: "accessibility.alert.noInlayHints",
    announcementMessage: S(1727, null),
    settingsKey: "accessibility.signals.noInlayHints"
}), vg.taskCompleted = vg.register({
    name: S(1728, null),
    sound: Aw.taskCompleted,
    legacySoundSettingsKey: "audioCues.taskCompleted",
    legacyAnnouncementSettingsKey: "accessibility.alert.taskCompleted",
    announcementMessage: S(1729, null),
    settingsKey: "accessibility.signals.taskCompleted"
}), vg.taskFailed = vg.register({
    name: S(1730, null),
    sound: Aw.taskFailed,
    legacySoundSettingsKey: "audioCues.taskFailed",
    legacyAnnouncementSettingsKey: "accessibility.alert.taskFailed",
    announcementMessage: S(1731, null),
    settingsKey: "accessibility.signals.taskFailed"
}), vg.terminalCommandFailed = vg.register({
    name: S(1732, null),
    sound: Aw.error,
    legacySoundSettingsKey: "audioCues.terminalCommandFailed",
    legacyAnnouncementSettingsKey: "accessibility.alert.terminalCommandFailed",
    announcementMessage: S(1733, null),
    settingsKey: "accessibility.signals.terminalCommandFailed"
}), vg.terminalCommandSucceeded = vg.register({
    name: S(1734, null),
    sound: Aw.success,
    announcementMessage: S(1735, null),
    settingsKey: "accessibility.signals.terminalCommandSucceeded"
}), vg.terminalBell = vg.register({
    name: S(1736, null),
    sound: Aw.terminalBell,
    legacySoundSettingsKey: "audioCues.terminalBell",
    legacyAnnouncementSettingsKey: "accessibility.alert.terminalBell",
    announcementMessage: S(1737, null),
    settingsKey: "accessibility.signals.terminalBell"
}), vg.notebookCellCompleted = vg.register({
    name: S(1738, null),
    sound: Aw.taskCompleted,
    legacySoundSettingsKey: "audioCues.notebookCellCompleted",
    legacyAnnouncementSettingsKey: "accessibility.alert.notebookCellCompleted",
    announcementMessage: S(1739, null),
    settingsKey: "accessibility.signals.notebookCellCompleted"
}), vg.notebookCellFailed = vg.register({
    name: S(1740, null),
    sound: Aw.taskFailed,
    legacySoundSettingsKey: "audioCues.notebookCellFailed",
    legacyAnnouncementSettingsKey: "accessibility.alert.notebookCellFailed",
    announcementMessage: S(1741, null),
    settingsKey: "accessibility.signals.notebookCellFailed"
}), vg.diffLineInserted = vg.register({
    name: S(1742, null),
    sound: Aw.diffLineInserted,
    legacySoundSettingsKey: "audioCues.diffLineInserted",
    settingsKey: "accessibility.signals.diffLineInserted"
}), vg.diffLineDeleted = vg.register({
    name: S(1743, null),
    sound: Aw.diffLineDeleted,
    legacySoundSettingsKey: "audioCues.diffLineDeleted",
    settingsKey: "accessibility.signals.diffLineDeleted"
}), vg.diffLineModified = vg.register({
    name: S(1744, null),
    sound: Aw.diffLineModified,
    legacySoundSettingsKey: "audioCues.diffLineModified",
    settingsKey: "accessibility.signals.diffLineModified"
}), vg.chatEditModifiedFile = vg.register({
    name: S(1745, null),
    sound: Aw.chatEditModifiedFile,
    announcementMessage: S(1746, null),
    settingsKey: "accessibility.signals.chatEditModifiedFile"
}), vg.chatRequestSent = vg.register({
    name: S(1747, null),
    sound: Aw.requestSent,
    legacySoundSettingsKey: "audioCues.chatRequestSent",
    legacyAnnouncementSettingsKey: "accessibility.alert.chatRequestSent",
    announcementMessage: S(1748, null),
    settingsKey: "accessibility.signals.chatRequestSent"
}), vg.chatResponseReceived = vg.register({
    name: S(1749, null),
    legacySoundSettingsKey: "audioCues.chatResponseReceived",
    sound: {
        randomOneOf: [
            Aw.responseReceived1,
            Aw.responseReceived2,
            Aw.responseReceived3,
            Aw.responseReceived4
        ]
    },
    settingsKey: "accessibility.signals.chatResponseReceived"
}), vg.codeActionTriggered = vg.register({
    name: S(1750, null),
    sound: Aw.voiceRecordingStarted,
    legacySoundSettingsKey: "audioCues.codeActionRequestTriggered",
    legacyAnnouncementSettingsKey: "accessibility.alert.codeActionRequestTriggered",
    announcementMessage: S(1751, null),
    settingsKey: "accessibility.signals.codeActionTriggered"
}), vg.codeActionApplied = vg.register({
    name: S(1752, null),
    legacySoundSettingsKey: "audioCues.codeActionApplied",
    sound: Aw.voiceRecordingStopped,
    settingsKey: "accessibility.signals.codeActionApplied"
}), vg.progress = vg.register({
    name: S(1753, null),
    sound: Aw.progress,
    legacySoundSettingsKey: "audioCues.chatResponsePending",
    legacyAnnouncementSettingsKey: "accessibility.alert.progress",
    announcementMessage: S(1754, null),
    settingsKey: "accessibility.signals.progress"
}), vg.clear = vg.register({
    name: S(1755, null),
    sound: Aw.clear,
    legacySoundSettingsKey: "audioCues.clear",
    legacyAnnouncementSettingsKey: "accessibility.alert.clear",
    announcementMessage: S(1756, null),
    settingsKey: "accessibility.signals.clear"
}), vg.save = vg.register({
    name: S(1757, null),
    sound: Aw.save,
    legacySoundSettingsKey: "audioCues.save",
    legacyAnnouncementSettingsKey: "accessibility.alert.save",
    announcementMessage: S(1758, null),
    settingsKey: "accessibility.signals.save"
}), vg.format = vg.register({
    name: S(1759, null),
    sound: Aw.format,
    legacySoundSettingsKey: "audioCues.format",
    legacyAnnouncementSettingsKey: "accessibility.alert.format",
    announcementMessage: S(1760, null),
    settingsKey: "accessibility.signals.format"
}), vg.voiceRecordingStarted = vg.register({
    name: S(1761, null),
    sound: Aw.voiceRecordingStarted,
    legacySoundSettingsKey: "audioCues.voiceRecordingStarted",
    settingsKey: "accessibility.signals.voiceRecordingStarted"
}), vg.voiceRecordingStopped = vg.register({
    name: S(1762, null),
    sound: Aw.voiceRecordingStopped,
    legacySoundSettingsKey: "audioCues.voiceRecordingStopped",
    settingsKey: "accessibility.signals.voiceRecordingStopped"
}), vg.editsKept = vg.register({
    name: S(1763, null),
    sound: Aw.editsKept,
    announcementMessage: S(1764, null),
    settingsKey: "accessibility.signals.editsKept"
}), vg.editsUndone = vg.register({
    name: S(1765, null),
    sound: Aw.editsUndone,
    announcementMessage: S(1766, null),
    settingsKey: "accessibility.signals.editsUndone"
}), Uf = vg;

}
