# Complete OpenVision desktop payload

`windows-x64/` contains the complete **0.2.0-preview.5** portable application,
split into seven ordinary Git files below GitHub's per-file size limit.
`manifest.json` records each part's size and SHA-256 plus the complete archive hash.
There is no Git LFS dependency and no runtime download during installation.

From the repository root, double-click **Run-OpenVision.cmd** or run
**Install-OpenVision.ps1**. Do not unzip individual parts; the installer joins,
verifies and extracts them using bounded streaming copies.

For a single ZIP download, use [OpenVision releases](https://github.com/RemiPelloux/OpenVision/releases).
Installation, editable code, profiles and manual updates are covered in the
[installation guide](../docs/guides/native-runtime.md). Preserve bundled license notices.
