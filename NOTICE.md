# Licensing and distribution

OpenVision is an independent AI coding workspace. The repository includes
OpenVision customization source, verification tools, documentation, original
branding and a complete Windows x64 portable application payload.

The project owner has stated that they hold distribution rights for the supplied
application code and license. Publication proceeds on that stated authority;
this notice does not independently verify or expand those rights.

No project-wide license has been selected. Public access does not by itself
grant general rights to redistribute or relicense the project. Third-party
software retains its respective ownership and applicable terms. Original
`LICENSE.txt`, `ThirdPartyNotices.txt`, Chromium notices and dependency licenses
remain included in the portable package; OpenVision branding does not replace them.

Editable application JavaScript is included. Native hosts, addons and WASM remain
compiled implementations; this release does not claim their original source or
an independent source rebuild. See the [installation guide](docs/guides/native-runtime.md)
and [Rust roadmap](docs/planning/rust/rust-roadmap.md).

## Optional Modelly plugin

OpenVision can download the pinned `modelly-abm` source archive from the official
[Modelly repository](https://github.com/RemiPelloux/Modelly) after an explicit
user action. The plugin records commit `627459ae349045ccb525248626d16d030689714c`,
Apache-2.0 licensing and the upstream `NOTICE` requirement, and verifies the
archive SHA-256 before installation. Modelly is not bundled in the desktop
runtime; when installed, its own license, copyright and dependency notices
remain applicable in the selected Python environment.
