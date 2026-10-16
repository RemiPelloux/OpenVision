# REA: local user subagent configuration

13 October 2026. Bounded follow-up to [MCP profile isolation](rea-profile-isolation.md),
for installed version 3.21.13. This advances OV-302 without establishing complete
customization or agent feature parity.

## Reconstruction

The workbench previously watched `~/.cursor/agents`; its Customize screen created
new user subagents there. Two extension implementations independently constructed
user subagent readers from the operating-system home directory:

| Owner | Recovered behavior | OpenVision transformation |
| --- | --- | --- |
| Workbench path service | Owns native environment and local home URIs | Owns the validated `<user-data-dir>/User/agents` URI |
| Workbench subagent watcher | Watches the home-based directory | Consumes that URI |
| Customize user subagent creation | Writes a Markdown file, refreshes, opens it | Consumes that URI; retains creation/refresh behavior |
| `cursor-agent-exec/dist/main.js` | Constructs the legacy user reader | Queries the owning workbench command and passes its exact directory |
| `cursor-agent-host/dist/77.js` and `980.js` | Creates disk extensibility and its user reader | Pass the same command result through the native factory |
| Reader classes in both extension main bundles | Compute project/user roots, parse Markdown and reload | Use the supplied directory only for user subagents |

The internal `openvision.internal.userAgentsDirectory` command transports the
native path owner's result to the extension host. It accepts no path argument,
does not modify the environment, and throws if no local file profile is available.
The reader rejects an absent or relative directory instead of falling back to an
original global folder. With external symlinks disabled, traversal of the user
directory is bounded to that directory. Existing explicit third-party import
behavior and project `.openvision/agents` remain supported by their
original branches.

This is deliberately narrower than moving every `homedir()` call: the same
extension also uses home for shell working directories, sandbox policy, plugins,
and other independently owned functionality. Changing the operating-system home
would change those meanings and could redirect unrelated file operations.

`desktop/subagent-paths.mjs` exports `installSubagentPathIsolation(root)`. It must
run after bundle customization and before extension integrity generation. It
patches both workbench variants, both reader bundles, and the two host chunks.
It preserves first originals in `backups/subagent-paths` and caches unchanged
outputs. Unexpected producer/factory contracts fail the build.

## Evidence and limits

REA selected the recovered `raw-bundles/4/subagentsService.js` and
`CustomizeManageView.js` representations:

- Parent `ev_f8de5d79715d1f9eeaff67f560315dee1b75d57133541ce76f326916f3efa06f`.
- Summary `ev_a1d520869bcb760e0e0cf1912ccbe2b8145411d10830c23eec39d69d3d42f309`.
- Two parsed files, 9,809 bytes, 1,580 AST nodes, no parse failures; 36,171
  inventoried files unselected. Partial static coverage is not runtime evidence.

REA also selected the installed `extensions/cursor-agent-exec/dist/main.js`:

- Parent `ev_8f382b0644bc9634e1aeb164be2562a50ee998565e18f2b0d9fa6e6ff487f00b`.
- Summary `ev_a261de1e687725dbbc34ea9cb17b3bb1b283ec55d93ccb60a216ee7bb322fa53`.
- Installed tree SHA-256
  `b0a755c8cb760676c7b918247334f54f75c47381f792a25d9840ca49c9799ff2`.
- One parsed source, 8,479,791 bytes, 1,848,111 AST nodes and 764 recovered
  modules. Semantic analysis exhausted the owned worker heap; semantic coverage
  is truncated and unresolved. The remaining 15,817 files were not selected.

The two installed host activation/factory chunks were analyzed separately:

- Parent `ev_3893a4faa46d3a3ab6b543ab3f97e67bf2dac40a2d6e17e586dd08246795a528`.
- Summary `ev_92fa64e42560db68c937042ea9c4038d0f7959127d4bed0c3dc6896f28d74645`.
- Two parsed sources, 31,611 bytes, 8,285 AST nodes, no parse failures and no
  truncation within the selected sources. Overall graph coverage remains partial;
  15,816 other files and their cross-module relationships remain outside selection.

Focused reading of the preserved readable workbench and extension bundles
established the actual producer, reader, factory and creation methods used by the
transformation. This manual static derivation supplements the bounded REA results;
it is not a claim that REA resolved all extension data flow or recovered original
TypeScript source.

## Verification

`node --test desktop/subagent-paths.test.mjs` exercises the actual transformed
methods from both workbench variants and both native reader implementations.
Two disposable filesystem profiles receive different user subagents. Native
creation writes and opens the correct file; the command and watcher resolve that
same location; native parsing/discovery and reload return only that profile's
fixture. Project lookup and original global file bytes are preserved. Tests also
execute the host activation options and real disk factory, check missing/remote
profile failures, reject changed contracts, and verify backups and idempotence.

The tests use a controlled directory enumerator, native protobuf value stand-in,
watcher and editor adapters. They do not establish native recursive watcher,
symlink traversal, Electron startup, provider selection, subagent execution, or
cross-platform runtime behavior. A live native acceptance check remains required.

## Remaining customization roots

- User skills: discovery, creation, publish/import/delete, managed skill sync and
  agent-store migration each still need coordinated path ownership.
- Plugins: cache/marketplace roots, registry files, installation and plugin-backed
  skills/subagents still have independent home-based producers. This change does
  not isolate plugin-backed subagents.
- Commands, hooks, sandbox policies and daemon paths need their own traced paths.
- Named UI profiles share this launch data-directory scope, as with MCP. Remote
  extension hosts and real macOS/Linux execution are unverified.

OV-302 remains **partial**. No percentage increase or full-isolation claim follows
from these controlled tests alone.
