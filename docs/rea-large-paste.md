# Large clipboard pastes

Pasting at least **10,000 UTF-16 code units** into the active chat/Agent composer
saves the complete plain text to `.openvision/paste/paste-<timestamp>-<uuid>.txt`
inside the conversation's project. The active editor's project, then the first
workspace folder, are fallbacks. With no open folder, normal paste remains active
and a notification explains why.

The composer receives a short, atomic text reference with the actual file path.
It does not attach the full file contents as eager model context. The agent can
use Read when it needs the text. Reading the file can still consume tokens;
this change reduces the initial prompt and composer document, not every later
request. Small text and image clipboard handling retain their existing paths.

Writes preserve whitespace, CRLF, trailing newlines and Unicode as UTF-8.
Exclusive creation prevents overwriting existing files. A new local `.gitignore`
containing `*` keeps this scratch folder out of normal Git tracking; an existing
ignore file is preserved. Submission waits for that conversation's pending
writes. Write failure restores the pasted text at its original position if the
reference still exists, reports the error, and leaves the clipboard unchanged.
Undo/removal during the write never reinserts a deleted reference.

Files remain on disk so restored conversations and redo can still refer to
them. Delete old files manually when their conversations no longer need them;
there is no age-based cleanup or project-wide scan on paste.

## REA and source ownership

The source snapshot is the previously recovered Windows application, not a new
vendor update. Its root digest is
`ba01e0c07d13a65493a64fe89dc2cd862dd56bb12ce8dd77617c25d19839d126`.
The full desktop bundle analysis, parent
`ev_c6286786506214dedbcb62a8f3d14e60e436afd48248862bdf2fe98c8ad834b3`,
exhausted its 2 GiB parser heap. It supplies artifact identity but no completed
source graph for this feature.

Focused, verbatim clipboard-plugin slices retain their original paths, byte
ranges and hashes under ignored `logs/rea-paste/provenance.json`. Parent
`ev_6b2badd5c2346aba0ad72664bb17e78137181be2b313590297c3358ee6cbe24b`
analyzed both slices: two parsed files, 3,924 AST nodes, no parse failures.
This is a derived view with omitted enclosing dependencies; semantic coverage
remains partial/unknown (996 unknowns). It does not prove complete bundle recovery.
The complete session evidence is retained in `logs/rea-paste/evidence.json`.

| Recovered owner | Original bundle SHA-256 | Slice SHA-256 |
| --- | --- | --- |
| Desktop `Dxv` | `5a447679d1f3b98e7da3e90c7dc3afe733fd949006e326e798a79a6dd1f2de27` | `10ade40e39365567768cfe8131c4f45c76b469138da12cbaa3aed2e8aff06ea4` |
| Glass `VAm` | `dcb3467c1a2e223223559843683293f73e1a16751258002b94b5ad31fed0ef2d` | `9a555328230d759b4563e5e785b8c26ae10c602fa7f9869a4108c8cb79e828f2` |

Source inspection observed inline multiline expansion, per-character mention
processing and native clipboard command registration. `paste-customization.mjs`
inserts the large-paste decision before that work and joins pending writes at
`submitChatMaybeAbortCurrent`. It validates both recovered owners and is
idempotent. Existing bundle customization backups preserve original source.
The browser helper owns file creation and per-conversation pending operations;
settled promises and their clipboard text are released.

## Verification on Windows, 14 October 2026

- Four helper tests use real temporary filesystem writes and controlled failures
  to cover exact content, concurrent files, submit waiting, failure restoration,
  ordinary/image passthrough and workspace selection. Two recovered-source tests
  cover both variant owners, token isolation and idempotence.
- `logs/paste-verification-NWSvzD/result.json`: real Electron clipboard paste of
  324,030 characters became a 227-character reference. Exact saved UTF-8,
  undo/redo, small inline paste, repeated pastes, Git ignore and a real directory
  creation failure with surrounding-text restoration passed. The native Rules screen
  discovered `.openvision/rules/namespace-check.mdc`. The failure fixture is prepared
  between owned launches to avoid racing Windows directory watchers. The measured paste
  and file check took 166 ms on this machine; this is one run, not a RAM benchmark.
- `logs/live-agent-verification-toyirS/result.json`: real **Codex Easy**, model
  **gpt-6.1-sol**, two HTTP 200 inference requests. A 12,232-character native paste
  was submitted immediately. The initial request contained the file reference
  and neither the payload nor its unique first-line marker. The provider requested
  Read, received the saved file marker in its tool result, and returned it exactly.
  The relay forwarded inference bodies unchanged; the local model catalog is a
  fixture, not evidence of live model discovery. No mock generated the reply.

Commands: `npm run test:paste`, `npm run verify:paste`, and
`npm run verify:agent:live -- --live --model gpt-6.1-sol --paste`.
The live command uses saved credentials and real provider quota. No GitHub
Actions workflow is required. Native macOS/Linux and inactive alternate
ProseMirror composer surfaces remain unverified. Existing feature-story gates
and percentages are unchanged by this scoped improvement.
