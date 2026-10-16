# Live-provider Agent multi-file editing

16 October 2026, Windows x64. This is a real-provider follow-up for OV-103,
using the saved **Codex Easy** provider and model **`gpt-6.1-sol`**. The run
uses the native OpenVision host, native tool execution, review controls and a
disposable project under the ignored `logs/` directory. The provider key and
full prompt/tool arguments are not published.

## Evidence

The retained result is
`logs/live-agent-verification-kUJnj9/result.json`. It records commit
`b578b768288e3b45413546efb9f492379329df44`, requested and reported model
`gpt-6.1-sol`, provider URL `https://codex-easy.ai/v1`, two owned native
hosts, and exit code `0` for both launches.

The workflow completed all of these checks against real inference:

- two disposable JavaScript files were changed while an unrelated Unicode file
  remained byte-for-byte unchanged;
- the first review was rejected with `Undo All` and `Confirm`, restoring both
  original files;
- the same edit was requested again and accepted with `Keep All`;
- editor Undo/Redo was exercised after acceptance; and
- the host was restarted and both accepted files remained unchanged on disk.

The first edit round used three provider turns: one `Read` followed by two
`StrReplace` calls. The retry used two turns with two `StrReplace` calls. This
is evidence that the live provider can drive the native multi-file review path;
it is not a token or request-minimization benchmark. The verifier records only
request shapes, tool names, model IDs and timing metadata.

## What this closes

This closes the **live-provider multi-file edit subcase** of OV-103 on the
verified Windows setup. It does not promote OV-103 or change the fixed
**6/42 Verified (14.29%)** score. Physical disk faults, interruption during an
active write or tool, remaining menu/group and partial-removal failures,
crash/power-loss recovery, other provider families, and macOS/Linux native
coverage remain open gates.

The controlled-provider [edit-history report](rea-agent-edit-history.md) and
[retryable Undo/Redo report](rea-agent-undo-retry.md) remain separate evidence:
they prove producer and failure semantics, while this run proves one real
provider's native success path.
