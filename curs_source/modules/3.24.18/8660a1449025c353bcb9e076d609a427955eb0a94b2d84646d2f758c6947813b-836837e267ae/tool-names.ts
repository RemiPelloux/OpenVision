import { DIt, UVe } from "./nudge-reply.ts";
import { E } from "./tslib.es6.js";
var TTe, h0, Wle, Gle, Die, Itf, N$, NIt, HCl, Lgs, sPi, WCl, GCl, Ogs, qCl, zCl, VCl, KCl, YCl, Fgs, xtf, XCl, oPi, qle;
export { Die, Fgs, GCl, Gle, HCl, Itf, KCl, Lgs, N$, NIt, Ogs, TTe, VCl, WCl, Wle, XCl, YCl, h0, oPi, qCl, qle, sPi, xtf, zCl };
var __wakaru_Nie_initialized = false;
export function Nie() {
if (__wakaru_Nie_initialized) return;
__wakaru_Nie_initialized = true;
"use strict";
E(), DIt(), TTe = "end_the_call", h0 = "send_task", Wle = "recall_text_messages", Gle = "search_conversations", Die = "stay_silent", Itf = [
    TTe,
    h0,
    Wle,
    Gle,
    Die
], N$ = "work_landed", NIt = "work_overheard", HCl = "user_message", Lgs = 8, sPi = 6, WCl = 240, GCl = 2e3, Ogs = 160, qCl = [
    "this-chat",
    "earlier",
    "everything"
], zCl = [
    "say-no-record",
    "send-task"
], VCl = `the shared history between you and this caller: this chat, earlier chats, and earlier phone calls with them. Earlier calls are first-class here \u2014 what you two said on a prior call lives in this record, not in the chat window. "you" is what you said or sent, "them" is what they typed or said. Nobody else is in it: not their other agents, not other people, not Slack, mail, or any other app. Word from any of those is a ${h0} job, never a search of this record.`, KCl = `Use it for a fact from before this call that the last few messages of this chat may not hold \u2014 especially anything from an earlier phone call with them. When they ask what you said on a prior call, when you spoke, on the phone, or "last call", search here (prefer scope "earlier" or "everything") and answer from those hits as something you already know together. Lead with the fact; say when only if they ask, or if it changes the answer. The chat window alone will miss earlier calls. When a later result corrects an earlier one, the newest wins. When two results both fit what they asked, ask which they mean before answering. When nothing comes back, say nothing about what the record holds or lacks; ${h0} it and answer from what lands. Never invent one. Something they told you on this call beats anything the record says.`, YCl = `the written chat between you and this caller: "you" is what you sent them, "them" is what they typed to you. Nobody else writes in it, and nothing anyone else sent them is in it: not their other agents, not other people, not Slack, mail, or any other app. Word from any of those is a ${h0} job, never a read of this chat.`, Fgs = `If the answer might already be in the written chat, call ${Wle}. Do not guess it, do not say you do not know, and do not ${h0} for it until you have read that chat.`, xtf = `If the answer might already be in the written chat you have not read this call, ${Wle} first.`, XCl = {
    recall: {
        ifUnread: xtf,
        when: Fgs,
        textOnly: "Written recall contains text, not sign-in cards.",
        sendTaskFirst: `${Wle} first when it might already be in this written chat`
    },
    search: {
        ifUnread: `If the answer is not in the recent lines and might be in this chat or an earlier call, ${Gle} for the subject.`,
        when: `If the answer is not in the recent lines and might be in this chat or an earlier call, call ${Gle}. Do not guess it, do not say you do not know, and do not ${h0} until you have searched.`,
        textOnly: "Search and the recent lines are text, not pictures or sign-in cards.",
        sendTaskFirst: `${Gle} first when it might already be in this chat or an earlier call and is not in the recent lines`
    }
}, oPi = class rMb {
    static of(e) {
        return e.some((n)=>n.name === Gle) ? "search" : "recall";
    }
    static linesOf(e) {
        return XCl[rMb.of(e)];
    }
}, qle = class {
    static sendTask(t = "recall") {
        const e = XCl[t].sendTaskFirst;
        return `Send a job that needs their computer, files, web, browser, or mail and chat they send. That call is a receipt, never the answer, and never the quick path. Speak a short beat on this response that names the job in how you talk, then call this. Never start that beat with a confirmation. Never say you are calling this tool. The outcome lands later as a ${N$} entry. Do not use this for a take, a recap of this call, a quiz from words already on the line, a story, a joke, talk they asked you to do yourself, a fact already on the line, or a name or value they just spoke on this call \u2014 answer from that speech instead. If the useful answer needs a fact you do not have about their world, ${e}; use this only when it is not there.`;
    }
    static sendTaskRequest() {
        return `The job itself: what to do or find out, and what to come back with. Not the caller's sentence. Add their exact words only where the wording itself is part of the job. Maximum ${UVe} characters; preserve every constraint, prohibition, and approval requirement. Overlong requests are rejected, never truncated.`;
    }
    static recallTextMessages() {
        return `Read ${YCl} Oldest first. ${Fgs} Say nothing about calling this.`;
    }
    static searchConversations(t = VCl) {
        return `Search ${t} ${KCl} Each hit says where and roughly when it was said, who said it, and the words, with a line before and after. At most ${sPi} hits come back, best first; "more" means the record holds others, so search again with different words if the answer is not among them. Say nothing about calling this.`;
    }
    static searchConversationsQuery() {
        return "A few words naming the fact you want: the thing, the name, the number, the place. Not the caller's whole sentence.";
    }
    static searchConversationsScope() {
        return 'Where to look: "this-chat" for this conversation only, "earlier" for earlier chats and calls only, "everything" for all of it. Leave it out to search everything.';
    }
    static searchConversationsId() {
        return "The id of a hit you already have. Pass it to read that message in full.";
    }
    static searchConversationsFrom() {
        return "First day to look in, YYYY-MM-DD. Same as to for one day. Leave it out when the question is not about a day.";
    }
    static searchConversationsTo() {
        return "Last day to look in, YYYY-MM-DD, inclusive.";
    }
    static searchConversationsIfMissing() {
        return '"send-task" when the caller asked you to retrieve a prior call or word from another person, agent, Slack, mail, the web, or another app; "say-no-record" when only the caller could supply the missing fact. Decide before seeing results.';
    }
    static staySilent() {
        return `Say nothing this turn. This is only for a last-landed ${N$} or ${NIt} entry, when speaking would give them nothing new. Never use it when they just talked to you. Never on the unpaid turn after ${h0}. Never on a ${N$} outcome they have not heard. Never on the same turn as spoken words. The caller hears nothing. Say nothing about calling this.`;
    }
    static endTheCall() {
        return `Hang up and end this call. Use it only when the caller says a parting greeting like "all done", "bye", "thanks, that's all", "stop", "go away", "shut up", "stop listening", "leave me alone", "goodbye", or "hang up". An unclear pause, a task still open, "ok" in the middle of work, or a "stop" that cancels that work is not a hang-up. ALWAYS say your goodbye out loud first, including when hanging up is the last step of something else they asked for: the line drops the moment you call this, so nothing after it is heard. Never call it while they are still asking for something.`;
    }
};

}
