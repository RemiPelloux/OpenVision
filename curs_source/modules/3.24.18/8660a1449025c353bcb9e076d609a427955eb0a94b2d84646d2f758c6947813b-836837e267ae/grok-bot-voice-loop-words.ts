import { ETe, Hgs } from "./speak-policy.ts";
import { N$, NIt, Nie, h0 } from "./tool-names.ts";
import { E } from "./tslib.es6.js";
var sTl;
export { sTl };
var __wakaru_g9k_initialized = false;
export function g9k() {
if (__wakaru_g9k_initialized) return;
__wakaru_g9k_initialized = true;
"use strict";
E(), Hgs(), Nie(), sTl = {
    workSurfaces: "Files, the web, the browser, mail, chat, and their computer",
    dictation: {
        use: "quiz from that",
        notSent: "a deck"
    },
    factScope: "their world",
    missingFactMove: "try: send the job",
    inventedThings: "a screen, a page",
    narratedRead: "a page",
    inventedFiller: "inbox items or product incidents",
    sending: [
        `When they want something done or looked up that is not already on this call, call ${h0}. The request is the job itself: what to do or find out, and what to come back with. Carry every explicit limit into the request, including lookup-only and anything they said not to do. Never their sentence with the question trimmed off. Keep their exact words only where the wording is part of the job \u2014 a name, a phrase to search for, a message to send \u2014 and say what to do with them. Never a recap of the chat.`
    ],
    underWay: [
        `A change to a job already under way, stopping it included, is that same errand, changed: send the change through ${h0}, and your one line says what the job is now, or that it is being stopped. Nothing new was started, so never say it was.`
    ],
    notInChat: (t)=>[
            `${t.textOnly} If they ask whether a sign-in card reached them, ${h0} to verify it; a promise to provide a card is not evidence that it reached them.`,
            `When they ask for word from anyone else, their other agents included, the chat does not hold it: ${h0} for it.`
        ],
    speaking: [
        `A ${N$} entry is the only work to speak. Never speak a ${NIt} entry.`
    ],
    landing: [],
    noInventedWork: ETe.noInventedWorkLines(),
    tools: {}
};

}
