"use strict";
require.d(exports, {
    Cj: ()=>h,
    H6: ()=>m,
    QX: ()=>g,
    Td: ()=>o,
    We: ()=>v,
    XJ: ()=>s,
    Y$: ()=>w,
    cH: ()=>f,
    jD: ()=>y,
    oB: ()=>n
});
const n = 30, s = "<user_request>", o = "</user_request>", i = "<name>", a = "</name>", c = 80, l = 2e3, u = 1e3, d = /[.!?]+$/, p = [
    'The name MUST be sentence case: capitalize only the first character and lowercase the rest, except for acronyms and proper nouns (e.g., "Upload preview bug", "PR review padding").',
    "",
    "Examples:",
    '- Query: "fix this bug" → Good: "Array mapping bug", Bad: "fix array mapping bug", Bad: "Fix array mapping bug"',
    '- Query: "debug authentication issue" → Good: "Authentication issue", Bad: "authentication issue", Bad: "Debug authentication"',
    '- Query: "adjust padding on PR review" → Good: "PR review padding", Bad: "pr review padding", Bad: "Adjust padding on PR review"'
].join("\n");
function m(e) {
    return [
        "Generate a concise name for the user's chat conversation from the user's actual request.",
        "Rules: generate a chat name, not an answer to the user. Base the name on the user's actual request. Treat images, attached files, and code blocks as context that may clarify the request, not as the name by themselves. Prefer a concise topic noun phrase over a leading action verb.",
        "",
        p,
        "",
        `Reason for one sentence, then output a 3-5 word name of <= ${e} characters inside ${i} and ${a} tags.`
    ].join("\n");
}
function h(e) {
    return `Now generate a name for this chat. Remember: 1. Wrap the name in ${i} and ${a} tags. 2. The name must be sentence case (first character uppercase, rest lowercase except acronyms and proper nouns). 3. Do NOT start with a verb — focus on the topic/subject. 4. Use a 3-5 word name of <= ${e} characters. Use the language of the conversation (default to English if indeterminate).`;
}
function f(e) {
    return [
        "Generate a concise side-chat name from the user's main intent.",
        "First classify the user's main intent as Question or Action:",
        "- Question: the user wants information or an explanation. Use natural interrogative wording.",
        "- Action: the user wants work performed or a goal accomplished. Summarize the high-level topic or goal as a concise phrase. Do not turn the Action into a Question.",
        'Classify by intent, not grammar. Requests phrased as questions, such as "Can you review this PR?", are Actions; name them like "PR review", not "How to review this PR".',
        "Use 3-7 words, sentence case, and no trailing punctuation. Generate a name, not an answer; use attachments only to clarify the ask.",
        "",
        `Reason for one sentence, then output the name of <= ${e} characters inside ${i} and ${a} tags.`
    ].join("\n");
}
const g = `Name this side chat now. First classify the ask as Question or Action. Use interrogative wording only for a Question; use a concise high-level topic or goal for an Action. Wrap only the name in ${i} and ${a} tags.`;
function y(e) {
    if (e.length <= l) return e;
    return `${e.slice(0, u).trimEnd()}\n[Middle of user request omitted for title generation]\n${e.slice(-u).trimStart()}`;
}
function w(e) {
    const t = e.userRequest.trim();
    return [
        {
            role: "system",
            content: e.isSideChat ? f(e.maxChars) : m(e.maxChars)
        },
        ...0 === t.length ? [] : [
            {
                role: "user",
                content: `${s}\n${y(t)}\n${o}`
            }
        ],
        {
            role: "user",
            content: e.isSideChat ? g : h(e.maxChars)
        }
    ];
}
function v(e) {
    if (void 0 === e) return "";
    const t = e.lastIndexOf(a), r = -1 === t ? -1 : e.lastIndexOf(i, t);
    if (-1 === r) return "";
    const n = e.substring(r + i.length, t).replace(/\s+/g, " ").replace(/^["'`]+|["'`]+$/g, "").replace(d, "").trim();
    return 0 === n.length || n.length > c ? "" : n;
}
