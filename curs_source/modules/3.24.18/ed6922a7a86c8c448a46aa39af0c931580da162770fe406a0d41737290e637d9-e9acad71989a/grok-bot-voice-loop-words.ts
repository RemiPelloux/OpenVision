import { crr, fhe } from "./speak-policy.ts";
import { ES, Fq, Nnt, t9 } from "./tool-names.ts";
import { x } from "./tslib.es6.js";
var VMo;
export { VMo };
var __wakaru_np__initialized = false;
export function np_() {
if (__wakaru_np__initialized) return;
__wakaru_np__initialized = true;
"use strict";
x(), crr(), Fq(), VMo = {
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
        `When they want something done or looked up that is not already on this call, call ${ES}. The request is the job itself: what to do or find out, and what to come back with. Carry every explicit limit into the request, including lookup-only and anything they said not to do. Never their sentence with the question trimmed off. Keep their exact words only where the wording is part of the job \u2014 a name, a phrase to search for, a message to send \u2014 and say what to do with them. Never a recap of the chat.`
    ],
    underWay: [
        `A change to a job already under way, stopping it included, is that same errand, changed: send the change through ${ES}, and your one line says what the job is now, or that it is being stopped. Nothing new was started, so never say it was.`
    ],
    notInChat: (e)=>[
            `${e.textOnly} If they ask whether a sign-in card reached them, ${ES} to verify it; a promise to provide a card is not evidence that it reached them.`,
            `When they ask for word from anyone else, their other agents included, the chat does not hold it: ${ES} for it.`
        ],
    speaking: [
        `A ${t9} entry is the only work to speak. Never speak a ${Nnt} entry.`
    ],
    landing: [],
    noInventedWork: fhe.noInventedWorkLines(),
    tools: {}
};

}
