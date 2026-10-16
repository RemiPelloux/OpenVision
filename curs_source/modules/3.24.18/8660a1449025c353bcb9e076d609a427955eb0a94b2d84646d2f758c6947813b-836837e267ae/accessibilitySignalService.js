import { D, Nt, Pn, Qe, Vn, st } from "./Iwo.js";
import { jn } from "./SZu.js";
import { GS, Ty } from "./accessibility.js";
import { BOe, qn } from "./async.js";
import { tZn, wCo } from "./cache.js";
import { or, yi } from "./configuration.js";
import { Hn, Pr } from "./dom_2.js";
import { It } from "./instantiation.js";
import { Ki, em } from "./network.js";
import { Bt } from "./nls.js";
import { Jc } from "./observable.js";
import { QAe } from "./platformObservableUtils.js";
import { E } from "./tslib.es6.js";
import { fn, rt } from "./uri.js";
import { F, Re } from "./userDataProfile.js";
import { Yv, hgn } from "./utils_10.js";
import { $t, Bs } from "./window.js";
import { Dkr, MHd, PHd, Pj, ZAe, Zo, li, rxy } from "./ze.js";
var xx, Bfn, ACr, Qy, RT, DHd, Bv, Nb;
export { ACr, Bfn, Bv, DHd, Nb, Qy, RT, xx };
var __wakaru_l2_initialized = false;
export function l2() {
if (__wakaru_l2_initialized) return;
__wakaru_l2_initialized = true;
"use strict";
E(), Hn(), Bs(), qn(), wCo(), Pj(), Qe(), Ki(), fn(), Jc(), Bt(), Ty(), or(), It(), QAe(), xx = jn("accessibilitySignalService"), Bfn = Symbol("AcknowledgeDocCommentsToken"), ACr = class extends st {
    constructor(t, e){
        super(), this.configurationService = t, this.accessibilityService = e, this.audioContextResumeBlocked = !1, this.audioContextResumeUnblock = this._register(new Vn), this.playingCustomSounds = new Set, this.sounds = new Map, this.screenReaderAttached = Yv(this, this.accessibilityService.onDidChangeScreenReaderOptimized, ()=>this.accessibilityService.isScreenReaderOptimized()), this.playingSounds = new Set, this._signalConfigValue = new tZn((n)=>ZAe(n.settingsKey, {
                sound: "off",
                announcement: "off"
            }, this.configurationService)), this._signalEnabledState = new tZn({
            getCacheKey: rxy
        }, (n)=>Zo((i)=>{
                const r = this._signalConfigValue.get(n.signal).read(i);
                return !!((n.modality === "sound" || n.modality === void 0) && PHd(r.sound, ()=>this.screenReaderAttached.read(i), n.userGesture) || (n.modality === "announcement" || n.modality === void 0) && PHd(r.announcement, ()=>this.screenReaderAttached.read(i), n.userGesture));
            }).recomputeInitiallyAndOnChange(this._store)), this._register(BOe(()=>void this.ensureAudioContextRunning()));
    }
    getEnabledState(t, e, n) {
        return new hgn(this._signalEnabledState.get({
            signal: t,
            userGesture: e,
            modality: n
        }));
    }
    async playSignal(t, e = {}) {
        const n = e.modality === "announcement" || e.modality === void 0, i = t.announcementMessage;
        n && this.isAnnouncementEnabled(t, e.userGesture) && i && this.accessibilityService.status(i), (e.modality === "sound" || e.modality === void 0) && this.isSoundEnabled(t, e.userGesture) && await this.playSound(t.sound.getSound(), e.allowManyInParallel);
    }
    async playSignals(t) {
        const e = t.map((r)=>"signal" in r ? r.signal : r), n = e.filter((r)=>this.isAnnouncementEnabled(r)).map((r)=>r.announcementMessage);
        n.length && this.accessibilityService.status(n.join(", "));
        const i = new Set(e.filter((r)=>this.isSoundEnabled(r)).map((r)=>r.sound.getSound()));
        await Promise.all(Array.from(i).map((r)=>this.playSound(r, !0)));
    }
    getVolumeInPercent() {
        const t = this.configurationService.getValue("accessibility.signalOptions.volume");
        return typeof t != "number" ? 50 : Math.max(Math.min(t, 100), 0);
    }
    async ensureAudioContextRunning() {
        const t = $t, e = t.AudioContext ?? t.webkitAudioContext;
        if (e) {
            if (this.audioContext || (this.audioContext = new e, this._register(Pn(()=>{
                this.audioContext?.close(), this.audioContext = void 0;
            }))), this.audioContext.state === "suspended") {
                if (this.audioContextResumeBlocked) return;
                try {
                    await this.audioContext.resume();
                } finally{
                    if (this.audioContext?.state === "suspended" && !this.audioContextResumeBlocked) {
                        this.audioContextResumeBlocked = !0;
                        const n = new Nt, i = ()=>{
                            this.audioContextResumeBlocked = !1, this.audioContextResumeUnblock.clear();
                        };
                        n.add(Dkr($t, i, !0)), n.add(li($t, Pr.KEY_DOWN, i, !0)), this.audioContextResumeUnblock.value = n;
                    }
                }
            }
            return this.audioContext.state === "running" ? this.audioContext : void 0;
        }
    }
    async playViaWebAudio(t, e) {
        try {
            const n = await this.ensureAudioContextRunning();
            if (!n) return !1;
            const i = await fetch(t);
            if (!i.ok) return !1;
            const r = await n.decodeAudioData(await i.arrayBuffer()), s = n.createBufferSource();
            s.buffer = r;
            const o = n.createGain();
            return o.gain.value = Math.max(0, Math.min(1, e)), s.connect(o), o.connect(n.destination), s.start(0), !0;
        } catch  {
            return !1;
        }
    }
    async playSound(t, e = !1) {
        if (!e && this.playingSounds.has(t)) return;
        this.playingSounds.add(t);
        const n = em.asBrowserUri(`vs/platform/accessibilitySignal/browser/media/${t.fileName}`).toString(!0);
        try {
            if (await this.playViaWebAudio(n, this.getVolumeInPercent() / 100)) return;
            const i = this.sounds.get(n);
            if (i) i.volume = this.getVolumeInPercent() / 100, i.currentTime = 0, await i.play();
            else {
                const r = await MHd(n, this.getVolumeInPercent() / 100);
                this.sounds.set(n, r);
            }
        } catch (i) {
            i.message.includes("play() can only be initiated by a user gesture") || console.error("Error while playing sound", i);
        } finally{
            this.playingSounds.delete(t);
        }
    }
    async playCustomSound(t, e = !1) {
        if (!t || !e && this.playingCustomSounds.has(t)) return;
        this.playingCustomSounds.add(t);
        let n;
        if (t.startsWith("http://") || t.startsWith("https://")) n = t;
        else {
            let i;
            t.startsWith("file://") ? i = rt.parse(t) : (t.startsWith("/") || /^[a-zA-Z]:/.test(t), i = rt.file(t)), n = em.uriToBrowserUri(i).toString(!0);
        }
        try {
            if (await this.playViaWebAudio(n, this.getVolumeInPercent() / 100)) return;
            const i = this.sounds.get(n);
            if (i) i.volume = this.getVolumeInPercent() / 100, i.currentTime = 0, await i.play();
            else {
                const r = await MHd(n, this.getVolumeInPercent() / 100);
                this.sounds.set(n, r);
            }
        } catch (i) {
            throw (i instanceof Error ? i.message : String(i)).includes("play() can only be initiated by a user gesture") || console.error("Error while playing custom sound", i), i;
        } finally{
            this.playingCustomSounds.delete(t);
        }
    }
    playSignalLoop(t, e) {
        let n = !0;
        const i = ()=>{
            n && this.playSignal(t, {
                allowManyInParallel: !0
            }).finally(()=>{
                setTimeout(()=>{
                    n && i();
                }, e);
            });
        };
        return i(), Pn(()=>n = !1);
    }
    isAnnouncementEnabled(t, e) {
        return t.announcementMessage ? this._signalEnabledState.get({
            signal: t,
            userGesture: !!e,
            modality: "announcement"
        }).get() : !1;
    }
    isSoundEnabled(t, e) {
        return this._signalEnabledState.get({
            signal: t,
            userGesture: !!e,
            modality: "sound"
        }).get();
    }
    onSoundEnabledChanged(t) {
        return this.getEnabledState(t, !1).onDidChange;
    }
    getDelayMs(t, e, n) {
        if (!this.configurationService.getValue("accessibility.signalOptions.debouncePositionChanges")) return 0;
        let i;
        return t.name === Nb.errorAtPosition.name && n === "positional" ? i = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.errorAtPosition") : t.name === Nb.warningAtPosition.name && n === "positional" ? i = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.warningAtPosition") : i = this.configurationService.getValue("accessibility.signalOptions.experimental.delays.general"), e === "sound" ? i.sound : i.announcement;
    }
}, ACr = Re([
    F(0, yi),
    F(1, GS)
], ACr), Qy = class sRb {
    constructor(e){
        this.fileName = e;
    }
    static register(e) {
        return new sRb(e.fileName);
    }
}, Qy.error = Qy.register({
    fileName: "error.mp3"
}), Qy.warning = Qy.register({
    fileName: "warning.mp3"
}), Qy.success = Qy.register({
    fileName: "success.mp3"
}), Qy.foldedArea = Qy.register({
    fileName: "foldedAreas.mp3"
}), Qy.break = Qy.register({
    fileName: "break.mp3"
}), Qy.quickFixes = Qy.register({
    fileName: "quickFixes.mp3"
}), Qy.taskCompleted = Qy.register({
    fileName: "taskCompleted.mp3"
}), Qy.taskFailed = Qy.register({
    fileName: "taskFailed.mp3"
}), Qy.terminalBell = Qy.register({
    fileName: "terminalBell.mp3"
}), Qy.diffLineInserted = Qy.register({
    fileName: "diffLineInserted.mp3"
}), Qy.diffLineDeleted = Qy.register({
    fileName: "diffLineDeleted.mp3"
}), Qy.diffLineModified = Qy.register({
    fileName: "diffLineModified.mp3"
}), Qy.requestSent = Qy.register({
    fileName: "requestSent.mp3"
}), Qy.responseReceived1 = Qy.register({
    fileName: "responseReceived1.mp3"
}), Qy.responseReceived2 = Qy.register({
    fileName: "responseReceived2.mp3"
}), Qy.responseReceived3 = Qy.register({
    fileName: "responseReceived3.mp3"
}), Qy.responseReceived4 = Qy.register({
    fileName: "responseReceived4.mp3"
}), Qy.clear = Qy.register({
    fileName: "clear.mp3"
}), Qy.save = Qy.register({
    fileName: "save.mp3"
}), Qy.format = Qy.register({
    fileName: "format.mp3"
}), Qy.voiceRecordingStarted = Qy.register({
    fileName: "voiceRecordingStarted.mp3"
}), Qy.voiceRecordingStopped = Qy.register({
    fileName: "voiceRecordingStopped.mp3"
}), Qy.progress = Qy.register({
    fileName: "progress.mp3"
}), Qy.chatEditModifiedFile = Qy.register({
    fileName: "chatEditModifiedFile.mp3"
}), Qy.editsKept = Qy.register({
    fileName: "editsKept.mp3"
}), Qy.editsUndone = Qy.register({
    fileName: "editsUndone.mp3"
}), Qy.done1 = Qy.register({
    fileName: "done1.mp3"
}), RT = Qy, DHd = class {
    constructor(t){
        this.randomOneOf = t;
    }
    getSound(t = !1) {
        if (t || this.randomOneOf.length === 1) return this.randomOneOf[0];
        {
            const e = Math.floor(Math.random() * this.randomOneOf.length);
            return this.randomOneOf[e];
        }
    }
}, Bv = class kJc {
    constructor(e, n, i, r, s, o){
        this.sound = e, this.name = n, this.legacySoundSettingsKey = i, this.settingsKey = r, this.legacyAnnouncementSettingsKey = s, this.announcementMessage = o;
    }
    static register(e) {
        const n = new DHd("randomOneOf" in e.sound ? e.sound.randomOneOf : [
            e.sound
        ]), i = new kJc(n, e.name, e.legacySoundSettingsKey, e.settingsKey, e.legacyAnnouncementSettingsKey, e.announcementMessage);
        return kJc._signals.add(i), i;
    }
    static get allAccessibilitySignals() {
        return [
            ...this._signals
        ];
    }
}, Bv._signals = new Set, Bv.errorAtPosition = Bv.register({
    name: D(1709, null),
    sound: RT.error,
    announcementMessage: D(1710, null),
    settingsKey: "accessibility.signals.positionHasError",
    delaySettingsKey: "accessibility.signalOptions.delays.errorAtPosition"
}), Bv.warningAtPosition = Bv.register({
    name: D(1711, null),
    sound: RT.warning,
    announcementMessage: D(1712, null),
    settingsKey: "accessibility.signals.positionHasWarning",
    delaySettingsKey: "accessibility.signalOptions.delays.warningAtPosition"
}), Bv.errorOnLine = Bv.register({
    name: D(1713, null),
    sound: RT.error,
    legacySoundSettingsKey: "audioCues.lineHasError",
    legacyAnnouncementSettingsKey: "accessibility.alert.error",
    announcementMessage: D(1714, null),
    settingsKey: "accessibility.signals.lineHasError"
}), Bv.warningOnLine = Bv.register({
    name: D(1715, null),
    sound: RT.warning,
    legacySoundSettingsKey: "audioCues.lineHasWarning",
    legacyAnnouncementSettingsKey: "accessibility.alert.warning",
    announcementMessage: D(1716, null),
    settingsKey: "accessibility.signals.lineHasWarning"
}), Bv.foldedArea = Bv.register({
    name: D(1717, null),
    sound: RT.foldedArea,
    legacySoundSettingsKey: "audioCues.lineHasFoldedArea",
    legacyAnnouncementSettingsKey: "accessibility.alert.foldedArea",
    announcementMessage: D(1718, null),
    settingsKey: "accessibility.signals.lineHasFoldedArea"
}), Bv.break = Bv.register({
    name: D(1719, null),
    sound: RT.break,
    legacySoundSettingsKey: "audioCues.lineHasBreakpoint",
    legacyAnnouncementSettingsKey: "accessibility.alert.breakpoint",
    announcementMessage: D(1720, null),
    settingsKey: "accessibility.signals.lineHasBreakpoint"
}), Bv.inlineSuggestion = Bv.register({
    name: D(1721, null),
    sound: RT.quickFixes,
    legacySoundSettingsKey: "audioCues.lineHasInlineSuggestion",
    settingsKey: "accessibility.signals.lineHasInlineSuggestion"
}), Bv.terminalQuickFix = Bv.register({
    name: D(1722, null),
    sound: RT.quickFixes,
    legacySoundSettingsKey: "audioCues.terminalQuickFix",
    legacyAnnouncementSettingsKey: "accessibility.alert.terminalQuickFix",
    announcementMessage: D(1723, null),
    settingsKey: "accessibility.signals.terminalQuickFix"
}), Bv.onDebugBreak = Bv.register({
    name: D(1724, null),
    sound: RT.break,
    legacySoundSettingsKey: "audioCues.onDebugBreak",
    legacyAnnouncementSettingsKey: "accessibility.alert.onDebugBreak",
    announcementMessage: D(1725, null),
    settingsKey: "accessibility.signals.onDebugBreak"
}), Bv.noInlayHints = Bv.register({
    name: D(1726, null),
    sound: RT.error,
    legacySoundSettingsKey: "audioCues.noInlayHints",
    legacyAnnouncementSettingsKey: "accessibility.alert.noInlayHints",
    announcementMessage: D(1727, null),
    settingsKey: "accessibility.signals.noInlayHints"
}), Bv.taskCompleted = Bv.register({
    name: D(1728, null),
    sound: RT.taskCompleted,
    legacySoundSettingsKey: "audioCues.taskCompleted",
    legacyAnnouncementSettingsKey: "accessibility.alert.taskCompleted",
    announcementMessage: D(1729, null),
    settingsKey: "accessibility.signals.taskCompleted"
}), Bv.taskFailed = Bv.register({
    name: D(1730, null),
    sound: RT.taskFailed,
    legacySoundSettingsKey: "audioCues.taskFailed",
    legacyAnnouncementSettingsKey: "accessibility.alert.taskFailed",
    announcementMessage: D(1731, null),
    settingsKey: "accessibility.signals.taskFailed"
}), Bv.terminalCommandFailed = Bv.register({
    name: D(1732, null),
    sound: RT.error,
    legacySoundSettingsKey: "audioCues.terminalCommandFailed",
    legacyAnnouncementSettingsKey: "accessibility.alert.terminalCommandFailed",
    announcementMessage: D(1733, null),
    settingsKey: "accessibility.signals.terminalCommandFailed"
}), Bv.terminalCommandSucceeded = Bv.register({
    name: D(1734, null),
    sound: RT.success,
    announcementMessage: D(1735, null),
    settingsKey: "accessibility.signals.terminalCommandSucceeded"
}), Bv.terminalBell = Bv.register({
    name: D(1736, null),
    sound: RT.terminalBell,
    legacySoundSettingsKey: "audioCues.terminalBell",
    legacyAnnouncementSettingsKey: "accessibility.alert.terminalBell",
    announcementMessage: D(1737, null),
    settingsKey: "accessibility.signals.terminalBell"
}), Bv.notebookCellCompleted = Bv.register({
    name: D(1738, null),
    sound: RT.taskCompleted,
    legacySoundSettingsKey: "audioCues.notebookCellCompleted",
    legacyAnnouncementSettingsKey: "accessibility.alert.notebookCellCompleted",
    announcementMessage: D(1739, null),
    settingsKey: "accessibility.signals.notebookCellCompleted"
}), Bv.notebookCellFailed = Bv.register({
    name: D(1740, null),
    sound: RT.taskFailed,
    legacySoundSettingsKey: "audioCues.notebookCellFailed",
    legacyAnnouncementSettingsKey: "accessibility.alert.notebookCellFailed",
    announcementMessage: D(1741, null),
    settingsKey: "accessibility.signals.notebookCellFailed"
}), Bv.diffLineInserted = Bv.register({
    name: D(1742, null),
    sound: RT.diffLineInserted,
    legacySoundSettingsKey: "audioCues.diffLineInserted",
    settingsKey: "accessibility.signals.diffLineInserted"
}), Bv.diffLineDeleted = Bv.register({
    name: D(1743, null),
    sound: RT.diffLineDeleted,
    legacySoundSettingsKey: "audioCues.diffLineDeleted",
    settingsKey: "accessibility.signals.diffLineDeleted"
}), Bv.diffLineModified = Bv.register({
    name: D(1744, null),
    sound: RT.diffLineModified,
    legacySoundSettingsKey: "audioCues.diffLineModified",
    settingsKey: "accessibility.signals.diffLineModified"
}), Bv.chatEditModifiedFile = Bv.register({
    name: D(1745, null),
    sound: RT.chatEditModifiedFile,
    announcementMessage: D(1746, null),
    settingsKey: "accessibility.signals.chatEditModifiedFile"
}), Bv.chatRequestSent = Bv.register({
    name: D(1747, null),
    sound: RT.requestSent,
    legacySoundSettingsKey: "audioCues.chatRequestSent",
    legacyAnnouncementSettingsKey: "accessibility.alert.chatRequestSent",
    announcementMessage: D(1748, null),
    settingsKey: "accessibility.signals.chatRequestSent"
}), Bv.chatResponseReceived = Bv.register({
    name: D(1749, null),
    legacySoundSettingsKey: "audioCues.chatResponseReceived",
    sound: {
        randomOneOf: [
            RT.responseReceived1,
            RT.responseReceived2,
            RT.responseReceived3,
            RT.responseReceived4
        ]
    },
    settingsKey: "accessibility.signals.chatResponseReceived"
}), Bv.codeActionTriggered = Bv.register({
    name: D(1750, null),
    sound: RT.voiceRecordingStarted,
    legacySoundSettingsKey: "audioCues.codeActionRequestTriggered",
    legacyAnnouncementSettingsKey: "accessibility.alert.codeActionRequestTriggered",
    announcementMessage: D(1751, null),
    settingsKey: "accessibility.signals.codeActionTriggered"
}), Bv.codeActionApplied = Bv.register({
    name: D(1752, null),
    legacySoundSettingsKey: "audioCues.codeActionApplied",
    sound: RT.voiceRecordingStopped,
    settingsKey: "accessibility.signals.codeActionApplied"
}), Bv.progress = Bv.register({
    name: D(1753, null),
    sound: RT.progress,
    legacySoundSettingsKey: "audioCues.chatResponsePending",
    legacyAnnouncementSettingsKey: "accessibility.alert.progress",
    announcementMessage: D(1754, null),
    settingsKey: "accessibility.signals.progress"
}), Bv.clear = Bv.register({
    name: D(1755, null),
    sound: RT.clear,
    legacySoundSettingsKey: "audioCues.clear",
    legacyAnnouncementSettingsKey: "accessibility.alert.clear",
    announcementMessage: D(1756, null),
    settingsKey: "accessibility.signals.clear"
}), Bv.save = Bv.register({
    name: D(1757, null),
    sound: RT.save,
    legacySoundSettingsKey: "audioCues.save",
    legacyAnnouncementSettingsKey: "accessibility.alert.save",
    announcementMessage: D(1758, null),
    settingsKey: "accessibility.signals.save"
}), Bv.format = Bv.register({
    name: D(1759, null),
    sound: RT.format,
    legacySoundSettingsKey: "audioCues.format",
    legacyAnnouncementSettingsKey: "accessibility.alert.format",
    announcementMessage: D(1760, null),
    settingsKey: "accessibility.signals.format"
}), Bv.voiceRecordingStarted = Bv.register({
    name: D(1761, null),
    sound: RT.voiceRecordingStarted,
    legacySoundSettingsKey: "audioCues.voiceRecordingStarted",
    settingsKey: "accessibility.signals.voiceRecordingStarted"
}), Bv.voiceRecordingStopped = Bv.register({
    name: D(1762, null),
    sound: RT.voiceRecordingStopped,
    legacySoundSettingsKey: "audioCues.voiceRecordingStopped",
    settingsKey: "accessibility.signals.voiceRecordingStopped"
}), Bv.editsKept = Bv.register({
    name: D(1763, null),
    sound: RT.editsKept,
    announcementMessage: D(1764, null),
    settingsKey: "accessibility.signals.editsKept"
}), Bv.editsUndone = Bv.register({
    name: D(1765, null),
    sound: RT.editsUndone,
    announcementMessage: D(1766, null),
    settingsKey: "accessibility.signals.editsUndone"
}), Nb = Bv;

}
