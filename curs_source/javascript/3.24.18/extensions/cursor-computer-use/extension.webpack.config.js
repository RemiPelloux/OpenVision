//@ts-check

"use strict";

const path = require("path");
const withDefaults = require("../cursor.webpack.config");

module.exports = withDefaults({
  context: __dirname,
  entry: {
    extension: "./src/extension.ts",
  },
});

// Both libwebp encoder builds: the scalar one every platform can run and the
// SIMD one the Windows codec path prefers (`screenshot-codec.ts` picks at
// runtime and reads the file beside the bundle).
module.exports.module.rules.push({
  test: /@jsquash[\\/]webp[\\/]codec[\\/]enc[\\/]webp_enc(_simd)?\.wasm$/,
  type: "asset/resource",
});
// '[base]' emits the assets as dist/webp_enc.wasm and dist/webp_enc_simd.wasm,
// same as an inline generator filename would — but the bundle-size generator
// greps the first `filename:` in this file for the JS bundle name, and an
// asset rule's generator filename would shadow dist/extension.js in the
// generated list.
module.exports.output.assetModuleFilename = "[base]";

// Bundle the shared sidecar protocol from source (like @anysphere/cursor-network
// in the shared config) so packaging does not depend on the package's dist build.
module.exports.resolve = module.exports.resolve || {};
module.exports.resolve.alias = {
  ...module.exports.resolve.alias,
  "@anysphere/computer-use/protocol$": path.resolve(
    __dirname,
    "../../../packages/computer-use/protocol/sidecar-protocol.ts",
  ),
  // The sidecar crate's checked-in Cursor product profile, bundled from the
  // same file the crate, the release pipeline, and the CLI installer read.
  "@anysphere/computer-use/windows/profiles/cursor-product-profile.json$": path.resolve(
    __dirname,
    "../../../packages/computer-use/windows/profiles/cursor-product-profile.json",
  ),
  // The protocol source imports `zod/v3`; resolve it from this extension's
  // node_modules because the walk-up from packages/computer-use finds no
  // install in the vscode CI checkout.
  "zod/v3$": path.join(withDefaults.resolveWorkspaceModule(__dirname, "zod"), "v3/index.js"),
};
