# Windows Agent command ownership and cancellation

13 October 2026. Owner: OpenVision desktop runtime. Scope: local Windows x64
Agent commands using the recovered three-pipe PowerShell execution path.

## Failure and correction

The native run `logs/agent-verification-0ulh12` showed that clicking Stop ended
the Agent turn but left the command's Node process alive beyond the verifier's
10-second deadline. The command had registered a nonce-authenticated connection
to the verifier; that connection remained open until fixture cleanup.

The recovered `ot` shell-spawn owner forwarded cancellation to `ChildProcess.kill`.
On this Windows path the shell is not a POSIX process group. Terminating the
shell did not terminate its child. A process count or disappearance of the Stop
button would have missed the failure.

OpenVision now launches this path with REA **6.4.0** `WindowsOwnedProcess` and its
packaged Node-API 8 addon. The native owner assigns the process atomically to an
unnamed Job Object before it runs. Canceling targets the retained job handle;
it does not issue a delayed kill against a numeric PID. Closing the job requires
zero active members and settled output. Failed cleanup remains owned and reports
an error. Owner-process death also closes the job.

The adapter preserves stdin, stdout, stderr, cwd and the recovered environment
normalization. It emits the expected spawn event after callers attach listeners.
The native module is loaded on the first command, not on idle IDE startup.
No permission, approval or sandbox-policy check is bypassed. Other platforms,
Windows ARM64, sandboxed routes and extra-pipe shell adapters retain their
existing execution paths; this change does not verify their cancellation.

## Reproducible validation

After preparing the desktop build with the pinned Node runtime:

```sh
npm ci --prefix tooling
npm run build:desktop
npm run test:agent-process
npm run verify:agent
```

The five focused checks cover both recovered host/exec producers, preserved
platform/policy routing, actual stdin/Unicode/environment handling, cancellation
of a detached descendant, survival of an unrelated child, pre-cancellation and
rejection of unsupported pipe configurations. These tests require a prepared
build and the original owner backups created during assembly. The three native
checks are explicitly skipped outside Windows x64.

The expanded native verifier drives the actual Agent and approval cards. It
checks that neither command runs before approval, that **Skip** produces a rejected
tool result and no output file, and that **Run** creates the expected file with
the selected cwd and Unicode output. For a running command it clicks Stop,
requires closure of the authenticated fixture connection, and makes a read-only
liveness check of the registered process. Cleanup instructions go only through
the fixture's owned connection; no cleanup kill is selected by PID.

The successful intermediate run `agent-verification-8t4ubX` measured **156 ms**
for command Stop and **102 ms** for canceling a provider stream. These are local
observations, not guarantees. It also passed edits, rollback, keep, restart,
conversation continuation and two owned Electron host exits with code 0.
The 73-test desktop suite and syntax checks pass. The final run is recorded in
the [native Agent report](rea-agent-runtime.md).

Earlier `agent-verification-qTmDh5` exposed an approval-card timing error in the
verifier: it selected the application Run menu before the card appeared. The
verifier now waits for the unique command description and pending approval.
`agent-verification-KqXUBm` passed command cancellation but looked for an old
offscreen transcript row after restart. The restart check now observes the
recent reply and still requires prior user context in the continued request.
Both failed records are retained; neither is represented as a passing full run.

## REA provenance

Exact Acorn-delimited pre-change owner slices are retained with full source
digests in `logs/rea-command-cancellation/provenance.json`. REA parent Evidence
`ev_3fef46b794c8999544be882e42e6493462fe54315a81f67b9246d6ee022f9638`
parsed both slices (364 visited AST nodes). Full returned Evidence is retained
in `logs/rea-command-cancellation-evidence.json`.

| Owner | Original source SHA-256 | UTF-16 range |
| --- | --- | --- |
| Agent exec | `b2771fab2b0cdf3065719f70ba7c90b152db0b9420340260a371ef6f1fa78d71` | `[10973461, 10974799)` |
| Agent host | `f98a50c5c4572ae3b85c6706df241cab59bace154c27121004198096a2d9db1b` | `[9973238, 9974576)` |

These are analyst-selected slices of modified recovered JavaScript, not a
complete application graph. External callees remain outside the selected static
analysis. Native checks establish the behavioral failure and the fix.

## Packaging and remaining gates

The dependency is pinned in `tooling/package-lock.json`. The desktop build copies
only the required REA loader/process modules, metadata, native manifest/addon and
Zod runtime dependency into its owned output directory, retaining the upstream
MIT license. The loader verifies version, platform, ABI and artifact SHA-256.
The addon and recovered bundles remain ignored build outputs. No compiler or
unrelated global runtime is installed, and no GitHub Actions are used.

OV-103 and OV-1001 remain Partial. Live-provider tool compatibility, native
search, editor undo after kept changes, conflict/crash recovery, background
handoffs, every shell/platform and resource behavior across long sessions still
need evidence. These additional checks do not change the accepted 42-story
denominator or establish 95% completion.
