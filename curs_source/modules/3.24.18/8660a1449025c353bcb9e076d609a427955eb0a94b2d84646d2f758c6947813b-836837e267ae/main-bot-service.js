import { Qe, st } from "./Iwo.js";
import { sC } from "./backendClient.js";
import { dp } from "./connect.js";
import { Vc, yp } from "./glass-command-service.js";
import { hC, ow } from "./glass-environment-service.js";
import { Zu, eu } from "./glass-log-service.js";
import { ul, zc } from "./glass-notification-service.js";
import { Xf, xf } from "./glass-opener-service.js";
import { Nu, xc } from "./glass-storage-service.js";
import { BS, tg } from "./glass-toast.js";
import { Uwc } from "./grok-bot-transcript-tail.js";
import { wjg } from "./grok_bot_connectweb.js";
import { NSl, Qyl, _Sl, aSl, bSl, vSl, xps, z2n } from "./grok_bot_pb.js";
import { AA_, K9s, RA_, TA_, ThT, gwc, v0c } from "./mE_.js";
import { CA_ } from "./main-bot-agent-storage.js";
import { IA_ } from "./main-bot-links.js";
import { HE, t7e } from "./main-bot-name.js";
import { f0c, xA_ } from "./main-bot-transcript-session.js";
import { Yn } from "./notification.js";
import { fwc } from "./tracked-promise.js";
import { E } from "./tslib.es6.js";
import { F, Re } from "./userDataProfile.js";
import { Hu } from "./utils_pb.js";
var _0c, PA_, Y9s, b0c, MA_, wUi, y0c;
export { MA_, PA_, Y9s, _0c, b0c, wUi, y0c };
var __wakaru_DA__initialized = false;
export function DA_() {
if (__wakaru_DA__initialized) return;
__wakaru_DA__initialized = true;
"use strict";
E(), dp(), wjg(), xps(), Hu(), Qe(), sC(), yp(), hC(), Zu(), zc(), BS(), Xf(), xc(), CA_(), t7e(), fwc(), IA_(), xA_(), Uwc(), _0c = {
    kind: "accepted"
}, PA_ = {
    kind: "pending"
}, Y9s = "[glass main-bot]", b0c = `Couldn't reach ${HE}. Check your connection.`, MA_ = "Error", wUi = class extends st {
    constructor(t, e, n, i, r, s, o){
        super(), this.notificationService = e, this.logService = n, this.storageService = i, this.transcripts = new Map, this.transcriptTransport = {
            watch: (a, l)=>this.watchTranscript(a, l),
            list: (a, l)=>this.listTranscriptEntries(a, l)
        }, this.backendClient = this._register(t), this.links = TA_({
            commandService: r,
            environmentService: s,
            openerService: o
        });
    }
    logTranscript(t) {
        this.logService.debug(`${Y9s} ${t}`);
    }
    openTranscript(t) {
        let e = this.transcripts.get(t);
        return e === void 0 && (e = new f0c({
            agentId: t,
            transport: this.transcriptTransport,
            log: (n)=>this.logTranscript(n)
        }), this._store.isDisposed ? e.dispose() : this.transcripts.set(t, e)), e;
    }
    releaseTranscript(t) {
        const e = this.transcripts.get(t);
        e !== void 0 && (this.transcripts.delete(t), e.dispose());
    }
    forgetUser() {
        for (const t of [
            ...this.transcripts.keys()
        ])this.releaseTranscript(t);
        this.forgetEnsure();
    }
    dispose() {
        this.forgetUser(), super.dispose();
    }
    async *watchTranscript(t, e) {
        yield* (await this.backendClient.get()).watchGrokBotTranscripts(t, {
            signal: e
        });
    }
    async listTranscriptEntries(t, e) {
        return (await this.backendClient.get()).listGrokBotTranscriptEntries(t, {
            signal: e
        });
    }
    async markRead(t) {
        try {
            await (await this.backendClient.get()).setGrokBotAgentClientState(new aSl({
                agentId: t,
                markRead: !0
            }));
        } catch (e) {
            this.logService.warn(`${Y9s} mark read failed`, e);
        }
    }
    ensure() {
        if (this.ensurePromise === void 0) {
            const t = gwc(this.ensureOnce());
            this.ensurePromise = t, t.then((e)=>{
                this.ensurePromise === t && !this._store.isDisposed && ThT(this.storageService, e.agentId);
            }, ()=>{});
        }
        return this.ensurePromise;
    }
    forgetEnsure() {
        this.ensurePromise = void 0;
    }
    async ensureOnce() {
        let t;
        try {
            ({ agent: t } = await (await this.backendClient.get()).ensureGrokBotCursorMainBot(new NSl));
        } catch (e) {
            throw v0c(e);
        }
        if (t === void 0) throw new Error("EnsureGrokBotCursorMainBot returned no agent");
        return t;
    }
    notifyUnsent(t) {
        this.notificationService.notify({
            severity: Yn.Error,
            message: `Message to ${HE} not sent: ${t}`,
            id: tg.mainBotSendFailed
        });
    }
    async interrupt(t) {
        try {
            await (await this.backendClient.get()).interruptGrokBotAgentRun(new bSl({
                agentId: t,
                reason: "glass:stop"
            }));
        } catch (e) {
            this.logService.warn(`${Y9s} interrupt failed`, e);
        }
    }
    async send(t) {
        let e, n;
        try {
            e = await this.backendClient.get(), n = t.agentId ?? (await this.ensure()).agentId;
        } catch (r) {
            return K9s(r, !1);
        }
        const i = new vSl({
            agentId: n,
            messageId: t.messageId,
            text: t.text,
            richText: t.richText,
            sentAtMs: BigInt(Date.now()),
            attachmentPaths: [],
            attachmentNames: [],
            source: Qyl.GLASS,
            ...t.replyToId === void 0 ? {} : {
                replyToId: t.replyToId
            }
        });
        try {
            const r = await e.sendGrokBotUserMessage(i);
            return this.noteServerAnswered(n), AA_(r);
        } catch (r) {
            return RA_(r) ? this.resolveLostSend(e, i, v0c(r)) : K9s(r, !1);
        }
    }
    noteServerAnswered(t) {
        this.transcripts.get(t)?.reconnectNow();
    }
    async resolveLostSend(t, e, n) {
        let i;
        try {
            i = await t.getGrokBotSendStatus(new _Sl({
                agentId: e.agentId,
                messageId: e.messageId
            }));
        } catch (r) {
            return K9s(r, !0);
        }
        switch(this.noteServerAnswered(e.agentId), i.status){
            case z2n.ACCEPTED:
            case z2n.PENDING:
                return _0c;
            case z2n.REJECTED:
                return {
                    kind: "refused",
                    code: i.rejectionCode ?? "rejected",
                    message: n.message
                };
            case z2n.NOT_FOUND:
                try {
                    return AA_(await t.sendGrokBotUserMessage(e));
                } catch (r) {
                    return K9s(r, RA_(r));
                }
            default:
                return PA_;
        }
    }
}, wUi = Re([
    F(1, ul),
    F(2, eu),
    F(3, Nu),
    F(4, Vc),
    F(5, ow),
    F(6, xf)
], wUi), y0c = new WeakMap;

}
