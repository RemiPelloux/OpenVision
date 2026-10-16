var gMe;
export { gMe };
var __wakaru_Sxi_initialized = false;
export function Sxi() {
if (__wakaru_Sxi_initialized) return;
__wakaru_Sxi_initialized = true;
gMe = {
    action: [
        "form"
    ],
    cite: [
        "blockquote",
        "del",
        "ins",
        "q"
    ],
    data: [
        "object"
    ],
    formAction: [
        "button",
        "input"
    ],
    href: [
        "a",
        "area",
        "base",
        "link"
    ],
    icon: [
        "menuitem"
    ],
    itemId: null,
    manifest: [
        "html"
    ],
    ping: [
        "a",
        "area"
    ],
    poster: [
        "video"
    ],
    src: [
        "audio",
        "embed",
        "iframe",
        "img",
        "input",
        "script",
        "source",
        "track",
        "video"
    ]
};

}
