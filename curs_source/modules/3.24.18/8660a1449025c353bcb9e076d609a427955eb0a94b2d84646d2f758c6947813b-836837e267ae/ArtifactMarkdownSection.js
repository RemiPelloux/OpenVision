import { IoC } from "./ArtifactMarkdownRenderer.js";
import { S9e } from "./SimpleMarkdown.react.js";
import { Am, cs } from "./Sol.js";
import { Ok, _Me, aS } from "./Ycg.js";
import { FS } from "./button_4.js";
import { mk } from "./gallerySection.js";
import { eD } from "./scrollableDiv.js";
import { E } from "./tslib.es6.js";
import { at } from "./web.js";
import { wt } from "./yBp.js";
import { pi } from "./ze.js";
var oqv, aqv, lqv, cqv, uqv, dqv, hqv, pqv, xuc, mqv, gqv, ZFn, QFn, z9i, JFn, fqv;
export { JFn, QFn, ZFn, aqv, cqv, dqv, fqv, gqv, hqv, lqv, mqv, oqv, pqv, uqv, xuc, z9i };
var __wakaru_AoC_initialized = false;
export function AoC() {
if (__wakaru_AoC_initialized) return;
__wakaru_AoC_initialized = true;
"use strict";
E(), at(), at(), at(), at(), pi(), Am(), IoC(), aS(), S9e(), FS(), eD(), mk(), oqv = wt("<div><h2>Artifact Markdown Renderer Test</h2><p>Tests rendering markdown with embedded artifact references (images and videos from /opt/cursor/artifacts/). Enter a bcId to test with real artifacts, or view the comparison without artifacts."), aqv = wt('<div><input type=text placeholder="Enter bcId (e.g., abc123-def456-...)">'), lqv = wt("<div><strong>Current bcId:</strong> <code>"), cqv = wt("<div><h3>Markdown Input</h3><div></div><textarea>"), uqv = wt("<span>(no bcId - artifacts will show as loading/error)"), dqv = wt("<div><h3>Regular Markdown Output<span>(for comparison)"), hqv = wt("<div><div><h3>ArtifactMarkdownRenderer Output"), pqv = Ok(_Me), xuc = `# Agent Summary

The agent has completed the requested task. Here are the results:

- An *italic* sentence.
- A **bold** sentence.

## A Screenshot I took

Here is a screenshot, isn't it beautiful?
<img src="/opt/cursor/artifacts/logo.svg" alt="Generated Logo" />


Here I am trying to reference it as a file path:
![Logo as File Path](/opt/cursor/artifacts/logo.svg)

## A demo video

I used the screen recording feature to record a video of the agent working.

<video src="/opt/cursor/artifacts/spinning_cursor.mp4" controls></video>

The artifacts above demonstrate the agent's ability to generate visual content.
`, mqv = `Evidence screenshots:

![Screenshot A](/opt/cursor/artifacts/gap_a_missing.png)
![Screenshot B](/opt/cursor/artifacts/gap_b_missing.png)
`, gqv = `# Regular Markdown

This is a sample markdown document **without** any artifact references.

## Features

- Regular markdown rendering
- *Italic* and **bold** text
- Lists and headings

\`\`\`typescript
// Code blocks work too
const hello = "world";
console.log(hello);
\`\`\`

> This is a blockquote
`, ZFn = cs(""), QFn = cs(null), z9i = cs(xuc), JFn = cs(!0), fqv = cs(null, (t, e)=>{
    const n = t(ZFn).trim();
    n && e(QFn, n);
});

}
