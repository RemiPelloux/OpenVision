import { Dnf, F9k, Mnf, O9k, pPi, pTl } from "./Ycg.js";
import { aBe } from "./index_20.ts";
import { jCl } from "./nudge-reply.ts";
import { ETe, hYt } from "./speak-policy.ts";
import { Die, Gle, TTe, Wle, h0 } from "./tool-names.ts";
import { BCl, MIt, Ngs, ktf } from "./tool-replies.ts";
import { E } from "./tslib.es6.js";
var Nnf, mPi, mTl, Lnf, Onf, Fnf, gTl, qgs, fTl, Bnf, Unf, vTl, _Tl, bTl;
export { Bnf, Fnf, Lnf, Nnf, Onf, Unf, _Tl, bTl, fTl, gTl, mPi, mTl, qgs, vTl };
var __wakaru_zgs_initialized = false;
export function zgs() {
if (__wakaru_zgs_initialized) return;
__wakaru_zgs_initialized = true;
"use strict";
E(), aBe(), Nnf = {
    agentName: "Cursor",
    description: "A coding agent in the open workspace."
}, mPi = "A request carries only what the caller newly asked for, not work already sent.", mTl = `the written chat in this agent and your earlier phone calls in this agent. What you two said on a prior call lives here, not in the chat window. "you" is what you said or sent, "them" is what they typed or said. Nothing else is in it: not the files, not the terminal, not the web; anything from those is a ${h0} job.`, Lnf = {
    recall: `If the useful answer might already be in this written chat, call ${Wle} first.`,
    search: `If the useful answer might already be in this chat or an earlier call and is not in the recent lines, call ${Gle} first.`
}, Onf = {
    recall: [
        h0,
        Wle,
        Die,
        TTe
    ],
    search: [
        h0,
        Gle,
        Die,
        TTe
    ]
}, Fnf = {
    ...Nnf,
    loop: O9k("search"),
    notInRecord: [
        `A picture or a file is not in this record: ${h0}.`
    ]
}, gTl = 300, qgs = {
    request: "{request}",
    answer: "{answer}"
}, fTl = Object.freeze({
    receipts: Object.freeze({
        underWay: Object.freeze({
            output: MIt.underWay(),
            instructions: ETe.receiptTurnOwed(F9k("recall"))
        }),
        queued: Object.freeze({
            output: MIt.queuedBehindCurrentWork(),
            instructions: ETe.queuedBehindCurrentWork()
        })
    }),
    staySilentRefusals: Object.freeze({
        theyJustSpoke: hYt.theyJustSpoke,
        receiptOwed: hYt.receiptOwed
    }),
    pauseLine: "The work needs you in the chat. Say that.",
    parkedRefusal: "The agent needs the person in the chat. Say that.",
    stoppedLine: "The work was stopped. Say that it was stopped, and do not invent a result.",
    errorLine: "The work hit an error. Say that it failed, and do not invent a result.",
    noReplyLine: "The work finished without a written reply. Say that.",
    unreadableLine: "A reply is in the chat, but it could not be read on this call. Say that, and do not invent what it says.",
    unknownToolErrorTemplate: MIt.unknownTool("{name}"),
    agentUnreachableAnswer: BCl,
    newsOwed: hYt.newsOwed,
    toolFailedError: ktf,
    sendTaskMissingRequestError: Ngs,
    sendTaskRequestTooLongError: jCl,
    earlierUpdatesAreInTheChat: "Earlier updates are in the chat.",
    typedRequestFrameTemplate: Mnf(qgs),
    ranAfterAnEarlierJobFrameTemplate: Dnf(qgs),
    answersRequestFrameTemplate: pTl(qgs)
}), Bnf = Object.freeze({
    ...fTl,
    stillQueued: (t)=>`Still queued, and not sent: ${t.map((e)=>`"${e}"`).join(", ")}. A stop does not send these. Say that they are still waiting.`,
    queuedBehind: (t)=>{
        switch(t.kind){
            case "running":
                return "work that was already running";
            case "typed":
                return `what they typed in the chat: "${pPi(t.request)}"`;
            case "earlier-request":
                return `the earlier request on this call: "${pPi(t.request)}"`;
        }
    },
    agentNotLoaded: "the agent is not loaded",
    agentDidNotLoad: "the workspace did not load",
    runningJobHandover: Object.freeze({
        steered: "steered into the running job",
        queued: "queued behind the current job, it has not started. The current job will still finish and its result stays in the chat.",
        stopped: "stopped the current job and sent this"
    })
}), Unf = Object.freeze({
    code: "not-enabled",
    message: "Realtime voice is not enabled for this account."
}), vTl = 7, _Tl = 8, bTl = 16;

}
