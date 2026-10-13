# Readable native model menu

13 October 2026. The native model picker now labels provider sections with their
saved names and visible model counts. Model names occupy the primary column;
reasoning appears in a compact secondary badge. The 360-pixel menu uses the native
search, selection, keyboard and parameter-submenu components. Its stylesheet caps
width to the viewport and uses theme colors. Saved models, custom names, transport
IDs, keys and model-specific reasoning definitions are unchanged.

The integration patches the shared section, row and menu owners in both desktop
and glass bundles. It uses structured model/variant metadata to display reasoning;
it does not parse a composed display string or install DOM observers/timers.
First backups are retained by the existing bundle installer.

REA analyzed the original section/row slices retained in
`logs/rea-picker-layout/`, including original source digest and UTF-16 ranges.
Parent Evidence:
`ev_c8c67cb7771dd2016217d67a1b462b30bd8077eb11b409ac2549e677a4d025c4`.
Two slices parsed (4,628 bytes, 1,016 AST nodes); application coverage is partial,
semantic completeness unknown, and external callees remain outside the evidence.

Run `npm run verify:model-menu` for a disposable native profile with synthetic
GPT, DeepSeek and Grok metadata, no saved API keys and no inference requests.
Record `logs/model-menu-olebRd/result.json` confirms all three headings, four
visible models, 360-pixel width, search, Enter selection, empty-search feedback,
and the model reasoning submenu. Screenshots of the grouped menu and reasoning
submenu were inspected for spacing, alignment, labels and clipping. The owned
host exited 0 and no renderer page errors were recorded.

Expanded record `logs/model-menu-SO7d00/result.json` also selects Extra High for
GPT-6.1 Sol, confirms its separate badge, closes and restarts the native app, and
verifies the saved preference in a new chat. DeepSeek's submenu then exposes Off
and omits GPT's Medium/Extra High choices. The actual menu still uses each model's
declared or configured capabilities; no live provider request was made.

The first run `EsBkYq` incorrectly pressed ArrowDown after search had already
focused its only result, selecting Add Models. The verifier now waits for the
matching row's native focus before Enter. A later expanded run `E2AAT3` observed
an unsent chat stuck on Loading Chat after a direct renderer reload. Subsequent
runs `TPh8Cx` and `nCyybv` observed a preference lost when the renderer was reloaded
immediately, before the recovered 200 ms storage debounce. These direct renderer
reloads bypass normal app shutdown. Unsent-chat/abrupt-reload recovery remains an
open lifecycle gate; the final persistence check uses normal close and restart.

The full desktop suite includes two owner-boundary regression tests for this
change. Native Windows evidence does not prove a native glass session, screen
reader completeness, macOS/Linux behavior or a bounded 10,000-row Agent picker.
OV-202/OV-203 remain Partial; the fixed acceptance denominator is unchanged.
