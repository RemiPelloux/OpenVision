# Desktop implementation and tooling

This folder owns OpenVision's durable desktop customizations, application
preparation and assembly, launch/package commands, and desktop verification.
Files in generated `source/` are outputs rather than the place to make durable
product changes.

| Task | Entry point |
| --- | --- |
| Prepare native inputs | `prepare-source.mjs` · `npm run prepare:desktop` |
| Prepare the remote server and SSH resolver (Linux x64) | `prepare-remote.mjs` · `npm run prepare:remote`; verify with `verify-remote-ssh.mjs` · `npm run verify:remote-ssh` ([guide](../docs/guides/remote-ssh.md)) |
| Build the customized application | `build-source.mjs` · `npm run build:desktop` |
| Launch | `start.mjs` · `npm start` |
| Create a portable package | `package-portable.mjs` · `npm run package:windows` or `npm run package:linux`; Linux scripts in `linux-package-scripts.mjs` |
| Verify the Linux package | `verify-package-linux.mjs` · `npm run verify:package:linux` |
| Run the critical native suite | `critical-suite.json`, `verify-critical.mjs` · `npm run verify:critical` |
| Create a portable package | `package-portable.mjs` · `npm run package:windows` or `npm run package:linux` |
| Sign and verify a Linux release | `release-linux.mjs` · `npm run release:linux`; `release-verify.mjs` · `npm run release:verify` |
| Install, upgrade, roll back or uninstall on Linux | `linux-install.mjs` · `npm run install:linux` (packaged as `openvision-install`) |
| Check JavaScript syntax | `check.mjs` · `npm run check:desktop` |
| Calculate feature acceptance | `feature-status.mjs` · `npm run status:features` |

Feature modules and their `*.test.mjs` tests stay together. `verify-*.mjs` and
verification helpers exercise a prepared desktop; read each verifier's scope
before running it because some launch application windows or use a live provider.
Package scripts in [package.json](../package.json) identify the supported suites.

See [installation](../docs/guides/native-runtime.md),
[engineering reports](../docs/engineering/README.md),
[verification scope](../docs/verification/README.md) and the
[repository layout](../docs/engineering/repository-layout.md).
