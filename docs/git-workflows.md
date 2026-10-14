# Native Git and worktree workflows

OpenVision's explicit worktree commands now work with automatic worktree
detection disabled. **Git: Create Worktree** creates a separate checkout;
**Git: Delete Worktree** lists existing worktrees on demand. A dirty worktree
requires a separate force-delete decision. Cancel preserves its files.

## Producing-boundary fix

The recovered Git extension defaulted `git.detectWorktrees` to false. Its
filesystem inventory returned an empty list whenever that preference was false,
including when the user explicitly requested a worktree operation. The native
run `logs/git-verification-qkQUnR/result.json` created a worktree successfully but
could not select it for deletion. Git's own log states that worktree detection
was disabled at the time of the explicit operation.

`git-worktree-customization.mjs` adds an explicit-request parameter to the
inventory owner. The repository operation wrapper sets it only for the named
`GetWorktrees` operation. Ordinary status refreshes still call the default
inventory and honor the disabled setting. The existing filesystem parser owns
paths and ref metadata; no duplicate parser, polling loop or client-side repair
is added. Backups preserve the exact previous extension, and source-shape checks
reject unexpected owners or contracts before modification.

The focused production-function check observes zero inventory scans for a
status refresh with detection disabled, one for an explicit request, then still
zero additional scans on the next status refresh. This is a call-count check,
not a measured CPU/RAM or latency improvement. A completed before/after workflow
comparison is unavailable because the original explicit command fails.

## Native acceptance evidence

`npm run verify:git` launches disposable native Windows profiles with a declared
extension driver. The driver uses the shipped `vscode.git` API and real Git;
the outer verifier drives real worktree pickers, cancellation, the diff editor
and conflict CodeLens. It never registers a mock source-control provider.
Only fixture repositories are mutated. Fixture setup uses CLI Git to initialize
the repository and a second worktree that must remain untouched.

The completed normal-shutdown run is
`logs/git-verification-zevpAv/result.json`, 14 October 2026. It uses
Git **2.55.0.windows.3**, bundled `vscode.git` **1.0.0**, desktop workbench SHA-256
`f5e44f0c2a9cc9a682b9da9bb91f289bd08ba952cb2901826496b4ff54633aff`, and Git extension
SHA-256 `62da3a56a76f737b66a7ac94a1bcc2984ad937d310342f0250e94fe2f1ba8d90`.

| Accepted clause | Native evidence |
| --- | --- |
| Branch creation | Public Git API creates/checks out `codex/feature`, commits its change, returns to main and commits the conflicting change |
| Worktree creation | Actual Create Worktree picker selects the feature branch and owned destination; disk contents match that branch |
| Diff review | Actual diff editor shows original and changed Unicode text; provider diff contains the exact addition |
| Conflicting edits | Checkout refuses an overlapping uncommitted change; main branch, dirty contents and untracked file survive |
| Lock recovery | Real fixture `index.lock` rejects staging; its bytes and user work survive; only the fixture's own lock is removed |
| Dirty-worktree safety | Native deletion fails, Force Delete dialog appears, Cancel preserves modified and untracked files |
| Selected cleanup | Worktree edits are committed through the native Git API; only that now-clean worktree is deleted |
| Other worktree safety | Separate keeper worktree and its untracked file remain registered and byte-identical |
| Merge interruption | Merge conflict and MERGE_HEAD survive application shutdown/reopen; unrelated dirty and untracked files survive |
| Resolution | Actual Accept Both Changes CodeLens produces exact expected content; native stage/commit creates a two-parent merge commit |

Final main status is exactly a modified `keep.txt` and untracked `untracked.txt`.
Both owned hosts exited 0, with no renderer page errors. The test does not claim
all diagnostic logs are error-free: the deliberately rejected checkout, lock and
dirty removal produce errors. A removed workspace folder also generated an
expected stale-directory status warning before closure.

The initial `qkQUnR` failure led to the production fix. The second `g3UvKf` run
passed explicit listing and dirty-delete cancellation but its test driver tried
to open a repository outside the workspace while the profile forbade that.
The driver now explicitly adds its owned worktree to the disposable workspace
before opening it. Existing user settings and the outside-workspace restriction
were not weakened. Both failed results remain retained.

## Forced host exit and story disposition

`npm run verify:git -- --abrupt` passed at
`logs/git-verification-wTse8r/result.json`. The complete native sequence, including
relaunch, took 44.60 seconds after initial driver activation; this includes the
existing Git extension's deliberate lock-error retries and is not a performance
benchmark. Before exit, the verifier also asserted that the worktree edit and
new file had not appeared in the main checkout.

While MERGE_HEAD and conflicting files were present, the verifier invoked
`process.exit(23)` in its own launched Electron main process through the already
owned Inspector connection. Windows terminated it with status **3221226505**
(`0xC0000409`), bypassing normal quit handlers. The verifier records that actual
status rather than reporting the requested 23. After relaunch, the same merge
state and exact unrelated file bytes were present. Actual Accept Both Changes,
stage and commit completed successfully; the final host exited 0. The keeper
worktree and its untracked file remained intact. No renderer errors occurred.

The preceding `6ClyfO` attempt stopped because its harness incorrectly required
exit code 23; it did not claim recovery. The final run above requires and records
an abnormal owned-host exit before inspecting recovery. This is controlled host
termination, not a simulation of power failure during a Git object/index write.

**OV-404 is Verified for its accepted local Windows contract.** The table above
maps every clause to native evidence, including isolation, owned-only cleanup,
dirty/untracked preservation and interruption recovery. The 42-story denominator
is unchanged. Cross-platform and general physical failure recovery remain with
OV-902/903 and OV-1004; no completion of those stories follows from this one.

## Coverage limits

This matrix covers local Windows repositories. Remote authentication, fetch/push,
submodules, Git LFS, rebase/cherry-pick and other platforms are not established.
Physical power loss and disk corruption require the separate release recovery
story. No AI-provider requests occur. Token use for inference is zero; agent
analysis tokens, CPU time and peak process-family memory were not measured.
