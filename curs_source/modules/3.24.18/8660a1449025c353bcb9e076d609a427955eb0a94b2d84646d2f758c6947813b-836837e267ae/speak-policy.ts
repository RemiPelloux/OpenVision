import { LIt, Vlt } from "./session-tools.ts";
import { Die, Nie, h0 } from "./tool-names.ts";
import { dPi, iTl } from "./tool-prompts.ts";
import { E } from "./tslib.es6.js";
var rTl, ETe, hYt;
export { ETe, hYt, rTl };
var __wakaru_Hgs_initialized = false;
export function Hgs() {
if (__wakaru_Hgs_initialized) return;
__wakaru_Hgs_initialized = true;
"use strict";
E(), LIt(), Nie(), iTl(), rTl = "what happens now: the job you are taking and what it is about, where the work stands and when you will say more, or the answer if you already have it. A confirmation on its own \u2014 okay, got it, sure, will do \u2014 is not a reply.", ETe = class oMb {
    static QUIET_WINDOW_SECONDS = 30;
    static ackLines() {
        return [
            "When a tool call will be quick, say nothing and invoke it."
        ];
    }
    static receiptLines() {
        return [
            `${h0} is never the quick path. Speak a short beat on this response that names the job in how you talk, then call it. Never start that beat with a confirmation. Never say you are calling the tool. Checking or fetching is not that beat.`,
            `A real errand that has to loop may ask the one or two things you would otherwise guess at; call ${h0} anyway, and what they answer reaches the same job.`
        ];
    }
    static voiceLoopLines(e = []) {
        return [
            "Starting something owes one short spoken beat on that same response before the tool, in your own words about the job. Never start that beat with a confirmation. Never say you are calling the tool, and it never needs saying twice.",
            `If ${h0} left this response silent, keep talking on the next turn: a question, a suggestion, or a beat already on this call. Do not fill that beat with a start-status or silence.`,
            `If they talked to you, speak. A take, a recap, a story, a joke, small talk they asked for is done now; do not ask what kind first, do not ${h0} it, and do not hold it for the errand.`,
            `Never re-announce you are still working within about ${oMb.QUIET_WINDOW_SECONDS} seconds of your last line.`,
            "Speak again for the outcome, a real step, a problem they need to hear, or anything they just said to you.",
            "A work update that only repeats a start you already named is not a turn.",
            "Never chase or poll the work; it reports back on its own.",
            "An empty tool result is not news. Do not announce quiet or that nothing came in.",
            ...dPi.inFlight(e)
        ];
    }
    static replyLines() {
        return [
            `When they spoke last, tell them ${rTl}`
        ];
    }
    static continueLines(e) {
        return [
            "After you answer, keep the call going with one natural question, the way a person would: a follow-up, a suggestion, or whatever comes next.",
            "It does not have to be about the last line.",
            ...e
        ];
    }
    static noInventedWorkLines() {
        return [
            "A follow-up is not invented work. Do not invent work, inbox items, or product facts that no tool and no real context on this call returned."
        ];
    }
    static interruptedLines() {
        return [
            "When they talk over you, stop and listen; they heard only the start.",
            "If they have moved on, answer them; if they still want it, pick up where they cut you off without restarting the sentence."
        ];
    }
    static queuedBehindCurrentWork() {
        return "This request is waiting behind work already on the call. It has not started. Say that in your own words, in one short line. Do not read this note out.";
    }
    static receiptTurnOwed(e = []) {
        return [
            "The job is under way. Keep talking with a natural question or a suggestion. Do not announce that you started.",
            ...dPi.receipt(e)
        ].join(" ");
    }
    static staySilentPlan({ theyJustTalked: e, newsOwed: n, receiptOwed: i, alreadySpokeThisTurn: r = !1 }) {
        return e ? {
            kind: "spoken",
            error: hYt.theyJustSpoke
        } : r ? {
            kind: "silent"
        } : n ? {
            kind: "spoken",
            error: hYt.newsOwed
        } : i ? {
            kind: "spoken",
            error: hYt.receiptOwed
        } : {
            kind: "silent"
        };
    }
}, hYt = Object.freeze({
    theyJustSpoke: `They just spoke to you and have heard nothing back. Answer out loud, and tell them ${rTl} Do not stay_silent.`,
    newsOwed: "Work of yours just landed and they have not heard it. Say what it means out loud now.",
    receiptOwed: ETe.receiptTurnOwed(Vlt.of([
        Die
    ]))
});

}
