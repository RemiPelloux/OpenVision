import { xTe } from "./index_20.ts";
import { TMo } from "./nudge-reply.ts";
import { h7e } from "./session-tools.ts";
import { G0t, fhe } from "./speak-policy.ts";
import { ES, Oq, gZ, ghe, mZ, pZ, t9 } from "./tool-names.ts";
import { n9n } from "./tool-prompts.ts";
import { Pnt, c6h, err, wMo } from "./tool-replies.ts";
import { x } from "./tslib.es6.js";
function wp_(e) {
    return {
        workSurfaces: "The editor, the files, the terminal, and the web",
        dictation: {
            use: "use those",
            notSent: "a change"
        },
        factScope: "this workspace",
        missingFactMove: ES,
        inventedThings: "a file, a screen",
        narratedRead: "a file",
        inventedFiller: "work",
        sending: [
            `When they want something done or looked up that is not already on this call, call ${ES}. ${s9n} Say what to do or find out, and what to come back with. Carry every explicit limit into the request, including lookup-only and anything they said not to do. Never their sentence with the question trimmed off. Keep their exact words only where the wording is part of the job \u2014 a name, a phrase to search for \u2014 and say what to do with them. Never a recap of the chat.`,
            `You cannot write in the chat or touch the workspace yourself. Anything they want written, changed, or run there is a job for ${ES}, even a single word; saying it on this call puts nothing there. How they want it done is for whoever does the job: pass on a limit in the request exactly when they said one, and never add a limit they did not say.`
        ],
        underWay: [
            'When they talk over your "on it", the same request comes back with their new words attached. That is not a new request and not a cancel unless they actually ask to stop.',
            `A further ask while a job is already under way is its own ${ES}. ${s9n} Stopping that job, or changing how that same job is done, is that same errand, changed. Send only that change, and your one line says what changed or that it is being stopped. Nothing new was started, so never say it was.`
        ],
        notInChat: ()=>[],
        speaking: [
            `A ${t9} entry is the only work to speak.`,
            `A ${t9} entry can also land for work you did not send on this call: something they typed in the chat, or a job started somewhere else. It may be the only thing going on. Treat it the same.`
        ],
        landing: [
            `A ${t9} result the caller has not been told about gets said first, in whatever reply comes next.`
        ],
        noInventedWork: [
            "A follow-up is not invented work. Do not invent work or product facts that no tool and no real context on this call returned."
        ],
        tools: {
            [ES]: {
                description: `Send a job that needs the editor, files, the terminal, or the web. This is the only way anything gets written in the chat or done in the workspace, even a single word. If they say how the work should be done (use no tools, don't run anything, be brief), that is for the worker: put it in the request. It never means don't call this. ${s9n} That call is a receipt, never the answer, and never the quick path. Speak a short beat on this response that names the job in how you talk, then call this. Never start that beat with a confirmation. Never say you are calling this tool. The outcome lands later as a ${t9} entry. Do not use this for a take, a recap of this call, a story, a joke, talk they asked you to do yourself, or a fact already on the line. ${S4h[e]}`,
                parameters: {
                    request: `${s9n} ${gZ.sendTaskRequest()}`
                },
                line: `- ${ES}: speak a short beat that names the job in how you talk, then send it. Never start that beat with a confirmation. Never say you are calling the tool. Work that needs the editor, files, the terminal, or the web goes through it; do not refuse it. That call is a receipt, never the outcome, and never the quick path. The outcome lands later, on its own, as a ${t9} entry.`
            },
            [mZ]: {
                description: gZ.searchConversations(JMo),
                parameters: {
                    scope: 'Where to look: "this-chat" for the written chat only, "earlier" for earlier calls only, "everything" for both. Leave it out to search everything.',
                    if_missing: '"send-task" when the answer is in the files, the terminal, the web, or anywhere outside this chat and its calls; "say-no-record" when only the caller could supply the missing fact. Decide before seeing results.'
                },
                line: n9n.searchLine(JMo)
            },
            [pZ]: {
                description: `Read the written chat in this agent: "you" is what you sent, "them" is what they typed. Oldest first. If the answer might already be in that chat, call this. Do not guess it, do not say you do not know, and do not ${ES} for it until you have read that chat. Say nothing about calling this.`,
                line: `- ${pZ}: read the written chat in this agent. If the answer might already be there, call it before ${ES}.`
            }
        }
    };
}
function Cp_(e) {
    return k4h[e].map((t)=>h7e.descriptor(t));
}
function r9n(e) {
    const t = e.replace(/\s+/g, " ").trim();
    return t.length > ePo ? `${t.slice(0, ePo)}\u2026` : t;
}
function _4h({ request: e, answer: t }) {
    return `They typed in the chat: "${r9n(e)}"
They are on this call, not reading the chat, so they have not heard your answer. Say what it means out loud: ${t}`;
}
function QMo({ request: e, answer: t }) {
    return `This answers "${r9n(e)}": ${t}`;
}
function b4h(e) {
    return `This ran after the earlier job, and that result is still in the chat. ${QMo(e)}`;
}
var y4h, s9n, JMo, S4h, k4h, w4h, ePo, drr, tPo, C4h, T4h, nPo, iPo, rPo;
export { C4h, Cp_, JMo, QMo, S4h, T4h, _4h, b4h, drr, ePo, iPo, k4h, nPo, r9n, rPo, s9n, tPo, w4h, wp_, y4h };
var __wakaru_hrr_initialized = false;
export function hrr() {
if (__wakaru_hrr_initialized) return;
__wakaru_hrr_initialized = true;
"use strict";
x(), xTe(), y4h = {
    agentName: "Cursor",
    description: "A coding agent in the open workspace."
}, s9n = "A request carries only what the caller newly asked for, not work already sent.", JMo = `the written chat in this agent and your earlier phone calls in this agent. What you two said on a prior call lives here, not in the chat window. "you" is what you said or sent, "them" is what they typed or said. Nothing else is in it: not the files, not the terminal, not the web; anything from those is a ${ES} job.`, S4h = {
    recall: `If the useful answer might already be in this written chat, call ${pZ} first.`,
    search: `If the useful answer might already be in this chat or an earlier call and is not in the recent lines, call ${mZ} first.`
}, k4h = {
    recall: [
        ES,
        pZ,
        Oq,
        ghe
    ],
    search: [
        ES,
        mZ,
        Oq,
        ghe
    ]
}, w4h = {
    ...y4h,
    loop: wp_("search"),
    notInRecord: [
        `A picture or a file is not in this record: ${ES}.`
    ]
}, ePo = 300, drr = {
    request: "{request}",
    answer: "{answer}"
}, tPo = Object.freeze({
    receipts: Object.freeze({
        underWay: Object.freeze({
            output: Pnt.underWay(),
            instructions: fhe.receiptTurnOwed(Cp_("recall"))
        }),
        queued: Object.freeze({
            output: Pnt.queuedBehindCurrentWork(),
            instructions: fhe.queuedBehindCurrentWork()
        })
    }),
    staySilentRefusals: Object.freeze({
        theyJustSpoke: G0t.theyJustSpoke,
        receiptOwed: G0t.receiptOwed
    }),
    pauseLine: "The work needs you in the chat. Say that.",
    parkedRefusal: "The agent needs the person in the chat. Say that.",
    stoppedLine: "The work was stopped. Say that it was stopped, and do not invent a result.",
    errorLine: "The work hit an error. Say that it failed, and do not invent a result.",
    noReplyLine: "The work finished without a written reply. Say that.",
    unreadableLine: "A reply is in the chat, but it could not be read on this call. Say that, and do not invent what it says.",
    unknownToolErrorTemplate: Pnt.unknownTool("{name}"),
    agentUnreachableAnswer: wMo,
    newsOwed: G0t.newsOwed,
    toolFailedError: c6h,
    sendTaskMissingRequestError: err,
    sendTaskRequestTooLongError: TMo,
    earlierUpdatesAreInTheChat: "Earlier updates are in the chat.",
    typedRequestFrameTemplate: _4h(drr),
    ranAfterAnEarlierJobFrameTemplate: b4h(drr),
    answersRequestFrameTemplate: QMo(drr)
}), C4h = Object.freeze({
    ...tPo,
    stillQueued: (e)=>`Still queued, and not sent: ${e.map((t)=>`"${t}"`).join(", ")}. A stop does not send these. Say that they are still waiting.`,
    queuedBehind: (e)=>{
        switch(e.kind){
            case "running":
                return "work that was already running";
            case "typed":
                return `what they typed in the chat: "${r9n(e.request)}"`;
            case "earlier-request":
                return `the earlier request on this call: "${r9n(e.request)}"`;
        }
    },
    agentNotLoaded: "the agent is not loaded",
    agentDidNotLoad: "the workspace did not load",
    runningJobHandover: Object.freeze({
        steered: "steered into the running job",
        queued: "queued behind the current job, it has not started. The current job will still finish and its result stays in the chat.",
        stopped: "stopped the current job and sent this"
    })
}), T4h = Object.freeze({
    code: "not-enabled",
    message: "Realtime voice is not enabled for this account."
}), nPo = 7, iPo = 8, rPo = 16;

}
