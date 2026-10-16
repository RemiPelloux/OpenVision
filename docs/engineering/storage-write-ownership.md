# Storage write ownership and model discovery

16 October 2026. This follow-up fixes a native provider-discovery failure while
continuing OV-103 review recovery. The fixed acceptance ledger remains **6/42
Verified (14.29%)**; original-source recovery and test counts are separate.

## Observed failure

In disposable Windows run `logs/review-storage-verification-4zfO1O/result.json`,
the model picker displayed `fixture-review`, but Quick Edit still selected
`default` and could not resolve a provider. No inference request was sent.
The native storage trace captured this sequence:

1. Save the provider with zero models.
2. Discover one model and cache the new configuration; its write is pending.
3. An IPC notification for the earlier zero-model configuration replaces that
   newer cache entry despite its pending write.
4. Catalog publication reads zero saved models; global selection remains Auto.

The later one-model notification repairs the storage cache, but does not undo the
already published empty model configuration. The failed app closed with exit 0.
Earlier `kNXa5d` and `13U8DF` runs retain the selection/publication observations;
the `4zfO1O` trace identifies the producing storage boundary. These records use
an instrumented owned overlay, a disposable profile and a controlled HTTP server.

## Recovered contract and correction

The newer published [3.24.18 storage owner](../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/storage.js)
already protects pending and unacknowledged keys. Its SHA-256 is
`ffcf4b8d420c49e173d2db84f1ae7102106b82e3ad0ba1ec2fab9af890fe4242`.
The matching IPC writer is in the same bundle's [entry point](../../curs_source/modules/3.24.18/ed6922a7a86c8c448a46aa39af0c931580da162770fe406a0d41737290e637d9-e9acad71989a/entry.js),
method `updateItems(e, t)`. See the [source index](../../curs_source/modules/3.24.18/README.md)
and [manifest](../../curs_source/manifest.json) for input identities.

OpenVision's prepared runtime is still **3.21.13**. The original storage-class
slice hashes used by the tests are:

| Variant | SHA-256 of the recovered class slice |
| --- | --- |
| Desktop | `da104044ae827ea8d8967ab4c38a3f10a9ac3907db89167358ef9af7c59c9bd5` |
| Glass | `732d0bfd80b9cc59e9fe69b2cfa7b1f708b6bf5b39bd5869630ef0eb9bb3d287` |

The [storage transformation](../../desktop/storage-write-ownership.mjs) ports
that ownership invariant into both older workbench variants:

- Cache notifications cannot replace pending inserts/deletions or unacknowledged
  writes, including writes already moved out of the pending batch.
- The existing IPC chunking owner acknowledges each successful chunk. Keys in
  finished chunks can receive later remote changes while other chunks continue.
- Completion or failure releases the batch's bookkeeping. Failures retain their
  existing rejection semantics; no automatic replay or new durability claim is added.

The existing build owns backups, producer-drift rejection and repeatable
transformation. The new recipe dependency invalidates cached transformations
when this implementation changes. This is a storage-cache/IPC correction, not a
delay, UI retry, alternate model fallback or wholesale upgrade to 3.24.18.

## Verification

`npm run test:provider-storage` passes **49 checks**. Tests execute recovered
storage and IPC methods, reproduce the older failure, cover pending/in-flight
insert/delete, chunk acknowledgement, external changes after acknowledgement,
failure release and both workbench variants. A direct behavior comparison also
executes the published 3.24.18 storage owner. Controlled dependencies establish
those owner semantics, not physical storage durability or complete version parity.

An initial pending-only candidate passed native Quick Edit/recovery in
`logs/review-storage-verification-UinV3t/result.json`. That intermediate result
does not establish the final in-flight/chunk correction. After the complete
correction and service-owned review cleanup, the production build validated
**237 scripts / 124 manifests / 28 local main-process modules**.

| Windows x64 run | Observed result | Scope |
| --- | --- | --- |
| `review-storage-verification-T7zZQj` | Pass: published selection reaches Quick Edit; failed write preserves review; failed read retains the snapshot; cleanup failure retains review and saved recovery; retry clears it; Reject/Save restores exact original bytes | Mounted production callbacks, real model service/SQLite and injected snapshot-service failures; one authenticated fixture inference, only the three injected review errors, host exit 0 |
| `review-storage-verification-SdVfYU` | Expected original-owner defect reproduced: failed snapshot write removes the live review without storing recovery; original text is restored | Same built runtime with only original recovered `addDiff` substituted; one fixture inference, one injected error, host exit 0 |
| `provider-identity-vv4mVE` | Pass: duplicate wire IDs, selection persistence, cross-provider subagent, Tab completion, disabled/removed selections and manual names survive their recorded lifecycle checks | Earlier workbench with the same final storage correction, before service-reference follow-up; 12 authenticated inference/completion requests, four hosts exit 0; controlled providers |

Each run is retained locally as `logs/<run>/result.json`. The final Quick Edit
pair used workbench SHA-256
`aa1f36b577f3e57d9f57045bcd0f6e8cec33b619ea2cfe41fdf57daf5167a952`
and verifier SHA-256
`e4f04efdabffcd07128b6d1f3a946d1405938b979453d6d70965634c533ee7e3`,
on parent commit `7f54c10178f6fa1119837c68b5390c5fc0112444` plus these changes.
The provider-identity workbench hash was
`55c6bb2f2c470020b93ee49064c9cc38d7522109c09102944092f94a946b4e92`;
it is not represented as a run of the later review-reference change.
Both overlays verified that the normal runtime file remained unchanged.
The later [full Agent regression](../recovery/rea-agent-review-recovery.md#final-source-build-regression)
also passes on the final workbench: native multi-file review, repeated-edit
Undo/Redo, normal restart/recovery and command lifecycle, with 29 authenticated
fixture requests and five clean application exits. It does not inject physical
storage faults or establish complete user-facing Undo error recovery.

```sh
npm run test:provider-storage
npm run test:agent-review
npm run check:desktop
npm run build:desktop
npm run verify:review-storage
npm run verify:review-storage -- --original-owner
npm run verify:provider-identity
npm run verify:agent -- --review-recovery
```

The review verifier uses a controlled local model and injected snapshot-service
failures. Its native SQLite/model/handler execution is distinct from physical
I/O failures, user-facing Undo-stack error handling and live provider inference.
The [review report](../recovery/rea-agent-review-recovery.md#created-review-snapshot-ownership)
records that scope and the separate Agent restart regression.

This work does not close full-disk, power-loss, cross-window concurrent edits to
the same provider, remaining Agent interruption gates, native macOS or final
Linux regression coverage. Generic storage IPC acknowledgement is not SQLite
durability; [local rules use a separate durable-save operation](local-rules-concurrency.md#save-acknowledgement).
No RAM, CPU, token-cost or speed improvement is claimed. Key bookkeeping is
released as chunks settle; whole-task cold/warm and process-family costs have
not been measured. The portable preview.6 download is unchanged.
