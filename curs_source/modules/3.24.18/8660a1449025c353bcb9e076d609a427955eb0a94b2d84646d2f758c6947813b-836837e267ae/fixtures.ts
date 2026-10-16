import { P1f } from "./Ycg.js";
import { E } from "./tslib.es6.js";
var dMl, M1f, D1f, N1f, L1f, O1f, F1f, B1f, U1f, mrw;
export { B1f, D1f, F1f, L1f, M1f, N1f, O1f, U1f, dMl, mrw };
var __wakaru_grw_initialized = false;
export function grw() {
if (__wakaru_grw_initialized) return;
__wakaru_grw_initialized = true;
"use strict";
E(), dMl = 4, M1f = [
    {
        id: "latin-prose-short",
        scriptClass: "latin-prose",
        text: "The build finished before lunch, and the reviewer approved the small change.",
        whiteSpace: "normal"
    },
    {
        id: "latin-prose-medium",
        scriptClass: "latin-prose",
        text: "A narrow panel rewards concise sentences. Wider panels keep related clauses together, so the reader can scan without losing context. Both layouts should preserve the same words and punctuation.",
        whiteSpace: "normal"
    },
    {
        id: "latin-prose-long",
        scriptClass: "latin-prose",
        text: "The transcript opens with a compact status update. A later paragraph explains why the operation paused and what will happen next. The user scrolls upward while new text arrives below the fold. Stable line counts keep the visible rows in place. Once the stream settles, the final block can be admitted again. The browser remains responsible for painting and selection.",
        whiteSpace: "normal"
    }
], D1f = [
    {
        id: "latin-markdown-release-notes",
        scriptClass: "latin-markdown",
        text: `## Release notes

The **layout ledger** now records committed row heights before paint. See the [verification guide](https://example.com/verify) for the expected checks.`,
        whiteSpace: "normal"
    },
    {
        id: "latin-markdown-review-list",
        scriptClass: "latin-markdown",
        text: `### Review checklist

- Confirm the font shorthand matches the rendered text.
- Compare every configured width.
- Record any prediction miss before changing admission.`,
        whiteSpace: "normal"
    }
], N1f = [
    {
        id: "code-typescript-tabs",
        scriptClass: "code",
        text: P1f(`type Job = {
	id: string;
	state: "queued" | "running";
};
function start(job: Job) {
	if (job.state === "running") return job;
	return { ...job, state: "running" };
}`),
        whiteSpace: "pre-wrap"
    },
    {
        id: "code-shell-tabs",
        scriptClass: "code",
        text: P1f(`for file in "$@"; do
	if [ -f "$file" ]; then
		printf "%s\\n" "$file"
	fi
done`),
        whiteSpace: "pre-wrap"
    }
], L1f = [
    {
        id: "cjk-japanese-weather",
        scriptClass: "cjk",
        text: "\u671D\u306E\u96E8\u304C\u4E0A\u304C\u308B\u3068\u3001\u99C5\u524D\u306E\u901A\u308A\u306B\u67D4\u3089\u304B\u306A\u5149\u304C\u5DEE\u3057\u8FBC\u3093\u3060\u3002\u5E97\u54E1\u306F\u770B\u677F\u3092\u5916\u3078\u904B\u3073\u3001\u6700\u521D\u306E\u5BA2\u3092\u8FCE\u3048\u308B\u6E96\u5099\u3092\u59CB\u3081\u305F\u3002",
        whiteSpace: "normal"
    },
    {
        id: "cjk-japanese-layout",
        scriptClass: "cjk",
        text: "\u9577\u3044\u4F1A\u8A71\u3067\u306F\u3001\u753B\u9762\u306B\u898B\u3048\u3066\u3044\u308B\u884C\u306E\u4F4D\u7F6E\u304C\u5909\u308F\u3089\u306A\u3044\u3053\u3068\u304C\u91CD\u8981\u3067\u3059\u3002\u65B0\u3057\u3044\u6587\u7AE0\u304C\u8FFD\u52A0\u3055\u308C\u3066\u3082\u3001\u8AAD\u3093\u3067\u3044\u308B\u5834\u6240\u306F\u305D\u306E\u307E\u307E\u4FDD\u305F\u308C\u307E\u3059\u3002",
        whiteSpace: "normal"
    },
    {
        id: "cjk-chinese-station",
        scriptClass: "cjk",
        text: "\u6E05\u6668\u7684\u8F66\u7AD9\u9010\u6E10\u70ED\u95F9\u8D77\u6765\uFF0C\u5E7F\u64AD\u63D0\u9192\u65C5\u5BA2\u63D0\u524D\u51C6\u5907\u8F66\u7968\u3002\u7A97\u5916\u7684\u96FE\u6162\u6162\u6563\u53BB\uFF0C\u8FDC\u5904\u7684\u5C71\u7EBF\u53D8\u5F97\u6E05\u6670\u3002",
        whiteSpace: "normal"
    },
    {
        id: "cjk-chinese-layout",
        scriptClass: "cjk",
        text: "\u6D88\u606F\u6301\u7EED\u5230\u8FBE\u65F6\uFF0C\u5DF2\u7ECF\u663E\u793A\u7684\u6BB5\u843D\u4E0D\u5E94\u8BE5\u7A81\u7136\u79FB\u52A8\u3002\u7A33\u5B9A\u7684\u6362\u884C\u7ED3\u679C\u53EF\u4EE5\u8BA9\u6EDA\u52A8\u4F4D\u7F6E\u4FDD\u6301\u53EF\u9884\u6D4B\u3002",
        whiteSpace: "normal"
    }
], O1f = [
    {
        id: "mixed-cjk-latin-api",
        scriptClass: "mixed-cjk-latin",
        text: "\u65B0\u3057\u3044 API \u306F `prepare` \u3068 `layout` \u3092\u5206\u3051\u3066\u547C\u3073\u51FA\u3057\u307E\u3059\u3002The prepared text can then be reused at 280px, 420px, and 640px.",
        whiteSpace: "normal"
    },
    {
        id: "mixed-cjk-latin-cache",
        scriptClass: "mixed-cjk-latin",
        text: "\u7F13\u5B58\u547D\u4E2D\u65F6\u663E\u793A cache hit\uFF0C\u5B57\u4F53\u548C\u6587\u672C\u7247\u6BB5\u5171\u540C\u51B3\u5B9A\u952E\u503C\u3002\u66F4\u65B0 locale \u540E\u9700\u8981\u91CD\u65B0\u51C6\u5907\u5185\u5BB9\uFF0C\u4F46\u5BBD\u5EA6\u53D8\u5316\u53EA\u89E6\u53D1\u5E03\u5C40\u8BA1\u7B97\u3002",
        whiteSpace: "normal"
    }
], F1f = [
    {
        id: "emoji-zwj-professions",
        scriptClass: "emoji",
        text: "The release crew includes \u{1F469}\u200D\u{1F4BB}, \u{1F468}\u{1F3FD}\u200D\u{1F527}, and \u{1F9D1}\u{1F3FF}\u200D\u{1F680}. Their status stays readable beside \u2705, \u26A0\uFE0F, and \u{1F680}.",
        whiteSpace: "normal"
    },
    {
        id: "emoji-zwj-families",
        scriptClass: "emoji",
        text: "A family \u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} meets friends \u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1} under the \u{1F3F3}\uFE0F\u200D\u{1F308} flag. Combined emoji must remain intact when a line wraps.",
        whiteSpace: "normal"
    }
], B1f = [
    {
        id: "arabic-rtl-library",
        scriptClass: "arabic-rtl",
        text: "\u0648\u0635\u0644\u062A \u0627\u0644\u062D\u0627\u0641\u0644\u0629 \u0625\u0644\u0649 \u0627\u0644\u0645\u0643\u062A\u0628\u0629 \u0642\u0628\u0644 \u0627\u0644\u063A\u0631\u0648\u0628 \u0628\u0642\u0644\u064A\u0644. \u0623\u0639\u0627\u062F \u0627\u0644\u0637\u0644\u0627\u0628 \u0643\u062A\u0628\u0647\u0645 \u062B\u0645 \u062C\u0644\u0633\u0648\u0627 \u0641\u064A \u0627\u0644\u0642\u0627\u0639\u0629 \u0627\u0644\u0647\u0627\u062F\u0626\u0629 \u0644\u0644\u0645\u0631\u0627\u062C\u0639\u0629.",
        whiteSpace: "normal"
    },
    {
        id: "arabic-rtl-messages",
        scriptClass: "arabic-rtl",
        text: "\u062A\u0635\u0644 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u062A\u0628\u0627\u0639\u0627 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0642\u0631\u0627\u0621\u0629. \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u0642\u0649 \u0627\u0644\u0633\u0637\u0631 \u0627\u0644\u0638\u0627\u0647\u0631 \u0641\u064A \u0645\u0643\u0627\u0646\u0647 \u062D\u062A\u0649 \u064A\u0642\u0631\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0646\u0647\u0627\u064A\u0629.",
        whiteSpace: "normal"
    }
], U1f = [
    {
        id: "mixed-rtl-ltr-release",
        scriptClass: "mixed-rtl-ltr",
        text: "\u062A\u0645 \u0646\u0634\u0631 \u0627\u0644\u0625\u0635\u062F\u0627\u0631 v2.4 \u0628\u0639\u062F \u0646\u062C\u0627\u062D build 817\u060C \u0648\u064A\u0645\u0643\u0646 \u0645\u0631\u0627\u062C\u0639\u0629 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u0641\u064A release-notes.md.",
        whiteSpace: "normal"
    },
    {
        id: "mixed-rtl-ltr-command",
        scriptClass: "mixed-rtl-ltr",
        text: "\u0634\u063A\u0651\u0644 \u0627\u0644\u0623\u0645\u0631 pnpm test \u062B\u0645 \u0627\u0641\u062A\u062D report.json \u0644\u0644\u062A\u0623\u0643\u062F \u0645\u0646 \u0627\u0644\u0646\u062A\u064A\u062C\u0629. The final status should read passed.",
        whiteSpace: "normal"
    }
], mrw = [
    ...M1f,
    ...D1f,
    ...N1f,
    ...L1f,
    ...O1f,
    ...F1f,
    ...B1f,
    ...U1f
];

}
