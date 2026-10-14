# Save All includes files without tabs

OpenVision's global **Save All** and public `workspace.saveAll` now save dirty
text-file models even when an extension or Agent modified them without opening
an editor tab. **Save All in Group** retains its group scope. The existing model
services own save participants, untitled destinations and conflict handling.

The recovered public API delegated to the editor service, whose inventory only
enumerated editor groups. The global command separately enumerated the same
groups. A real pre-fix run at `logs/save-all-verification-5C5vAD/result.json`
returned true while both a local file and an extension filesystem document
remained dirty and their persisted content stayed unchanged.

The fix snapshots dirty models without a primary editor, runs native editor
saves, then saves the remaining models once through the text-file service. A
queue owned by that service serializes overlapping API and command operations.
Failures return false; the fix neither retries failed visible editors nor forces
overwrites. `includeUntitled: false` leaves untitled content unsaved. The untitled
service now exposes its own model inventory rather than consumers accessing its
private map. Named global commands are patched independently of group commands.

## Verification

The candidate passed at `logs/save-all-verification-2MMdsl/result.json`. After
integration and desktop/Glass build validation, the assembled runtime passed at
`logs/save-all-verification-VsBVP3/result.json` with no candidate overlay changes.
Its desktop workbench SHA-256 is
`f5e44f0c2a9cc9a682b9da9bb91f289bd08ba952cb2901826496b4ff54633aff`.

- Hidden local and registered-filesystem documents persist through the public API.
- Untitled files are skipped or saved according to the caller's choice.
- Repeated Save All does not write clean documents again.
- The visible global Save All command saves a newly modified hidden document.
- A declared filesystem provider's permission rejection returns false and keeps
  dirty content. This is a real extension API failure fixture, not a Windows ACL test.
- A conflicting real external disk write survives; the dirty local buffer remains.
- The unrelated file is unchanged, and the selected input runtime remains unchanged.

`npm run verify:language` also passed at `logs/language-verification-eb6tNI/result.json`
after removing the per-document save workaround. Native three-file TypeScript
rename, undo and redo now use the public Save All API and verify exact disk bytes.
The same run retains TS/JS diagnostics, formatting, bounded tsserver changes,
large-file navigation and conflicting-save/revert coverage.

Windows x64 only. Provider dialogs, arbitrary custom editors, every diff editor
layout and physical full-disk behavior are not established by this fixture.
No AI requests are sent and no speed/RAM improvement is inferred from these checks.
