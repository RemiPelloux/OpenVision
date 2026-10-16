"use strict";

const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");

const REQUIRED_RELATIVE_PATHS = [
  "bin/daemon.cjs",
  "bin/worker.js",
  "bin/package.json",
  "node_modules/tree-sitter/package.json",
  "node_modules/tree-sitter/index.js",
  "node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node",
  "node_modules/tree-sitter-bash/package.json",
  "node_modules/tree-sitter-bash/bindings/node/index.js",
  "node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node",
  "node_modules/node-gyp-build/package.json",
];

const TREE_SITTER_NATIVE_RELATIVE_PATHS = [
  "node_modules/tree-sitter/build/Release/tree_sitter_runtime_binding.node",
  "node_modules/tree-sitter-bash/build/Release/tree_sitter_bash_binding.node",
];

function findDaemonPackageRoot() {
  const candidates = [
    path.resolve(__dirname, "../../../../packages/agent-host-daemon"),
    path.resolve(__dirname, "../../../packages/agent-host-daemon"),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(path.join(candidate, "package.json"))) {
      return candidate;
    }
  }
  throw new Error("could not find @anysphere/agent-host-daemon package.json");
}

function missingRuntimeFiles(distRoot) {
  return REQUIRED_RELATIVE_PATHS.map((relativePath) => path.join(distRoot, relativePath)).filter(
    (candidate) => !fs.existsSync(candidate),
  );
}

function daemonBundleRequiresWhichlang(distRoot) {
  const daemonPath = path.join(distRoot, "bin/daemon.cjs");
  if (!fs.existsSync(daemonPath)) {
    return false;
  }
  return fs.readFileSync(daemonPath, "utf8").includes("whichlang-node");
}

function resolveBundleDaemonInvoke(packageRoot) {
  return [process.execPath, [path.join(packageRoot, "scripts/bundle-daemon.cjs")]];
}

function loadBundleDaemonHelpers(packageRoot) {
  return require(path.join(packageRoot, "scripts/bundle-daemon.cjs"));
}

function stripWrongArchDaemonBinNatives(packageRoot) {
  const {
    assertBinNativeUniversalMergeFilenames,
    assertPackagedBinNativeMergeSet,
    normalizeBinNativeFilenames,
    refreshPackagedBinNativeBindings,
    removeWrongArchBinNatives,
    stripOmittedBinNatives,
  } = loadBundleDaemonHelpers(packageRoot);
  const binDir = path.join(packageRoot, "dist", "bin");
  removeWrongArchBinNatives(binDir);
  refreshPackagedBinNativeBindings(binDir);
  stripOmittedBinNatives(binDir);
  normalizeBinNativeFilenames(binDir);
  assertBinNativeUniversalMergeFilenames(binDir);
  assertPackagedBinNativeMergeSet(binDir);
}

function resolveTreeSitterMatchArch(packageRoot) {
  const { resolveConcreteNativeArch, resolveTargetNativeArch } =
    loadBundleDaemonHelpers(packageRoot);
  const target = resolveTargetNativeArch();
  return target === "universal" ? resolveConcreteNativeArch() : target;
}

function treeSitterNativesMatchTarget(packageRoot) {
  const { nativeBindingFileMatchesTarget } = loadBundleDaemonHelpers(packageRoot);
  const distRoot = path.join(packageRoot, "dist");
  const matchArch = resolveTreeSitterMatchArch(packageRoot);
  return TREE_SITTER_NATIVE_RELATIVE_PATHS.every((relativePath) =>
    nativeBindingFileMatchesTarget(path.join(distRoot, relativePath), process.platform, matchArch),
  );
}

function loadShellParserNativeBindings(packageRoot) {
  return require(path.join(packageRoot, "scripts/shell-parser-native-bindings.cjs"));
}

function resolveShellExecRequire(packageRoot) {
  const { createRequire } = require("node:module");
  const shellExecRoot = path.resolve(packageRoot, "../shell-exec");
  return createRequire(path.join(shellExecRoot, "package.json"));
}

function recopyTreeSitterNatives(packageRoot) {
  const { copyShellParserJsOnly, refreshShellParserNativeBindings } =
    loadShellParserNativeBindings(packageRoot);
  const distRoot = path.join(packageRoot, "dist");
  const shellExecRequire = resolveShellExecRequire(packageRoot);
  const repoRoot = path.resolve(packageRoot, "../..");
  copyShellParserJsOnly(distRoot, { shellExecRequire, repoRoot });
  refreshShellParserNativeBindings(distRoot, { shellExecRequire, repoRoot });
}

function assertTreeSitterNativesMatchTarget(packageRoot) {
  if (treeSitterNativesMatchTarget(packageRoot)) {
    return;
  }
  throw new Error(
    "@anysphere/agent-host-daemon tree-sitter natives do not match the vscode target arch. " +
      "A prior host-arch copy was reused; webpack would ship the wrong Mach-O/ELF.",
  );
}

function refreshTreeSitterNativesIfWrongArch(packageRoot) {
  if (treeSitterNativesMatchTarget(packageRoot)) {
    return false;
  }
  recopyTreeSitterNatives(packageRoot);
  assertTreeSitterNativesMatchTarget(packageRoot);
  return true;
}

function ensure() {
  const packageRoot = findDaemonPackageRoot();
  const distRoot = path.join(packageRoot, "dist");
  let missing = missingRuntimeFiles(distRoot);
  if (missing.length === 0) {
    // A prior host-arch bundle can leave tree-chunk .node files
    // that fail "Verify arch of Mach-O objects" on a different vscode arch.
    // whichlang is omitted from the daemon tree on every arch: strip leftover
    // .node files and hashed require("./whichlang-node.*.node") paths first so
    // a leftover native require does not force a rebuild loop.
    stripWrongArchDaemonBinNatives(packageRoot);
    // tree_sitter_*_binding.node has no arch in the name, so the existence
    // check above cannot see a stale host-arch copy. Recopy when the
    // Mach-O/ELF/PE header does not match the vscode target.
    refreshTreeSitterNativesIfWrongArch(packageRoot);
    if (!daemonBundleRequiresWhichlang(distRoot)) {
      return;
    }
    missing = [path.join(distRoot, "bin/daemon.cjs")];
  }

  // gulp compile-extensions-build:cursor loads webpack without compile-dist
  // and without pnpm. bundle-daemon.cjs is enough: it esbuilds from source.
  const [command, args] = resolveBundleDaemonInvoke(packageRoot);
  const result = spawnSync(command, args, {
    cwd: packageRoot,
    stdio: "inherit",
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  stripWrongArchDaemonBinNatives(packageRoot);
  assertTreeSitterNativesMatchTarget(packageRoot);

  missing = missingRuntimeFiles(distRoot);
  if (missing.length > 0) {
    throw new Error(
      `@anysphere/agent-host-daemon bundle-daemon did not produce the packaged runtime tree. Missing: ${missing.join(", ")}`,
    );
  }
  if (daemonBundleRequiresWhichlang(distRoot)) {
    throw new Error(
      "@anysphere/agent-host-daemon daemon.cjs still references whichlang-node after bundle-daemon. " +
        "whichlang is omitted from the daemon tree on every arch.",
    );
  }
}

if (require.main === module) {
  ensure();
}

module.exports = {
  daemonBundleRequiresWhichlang,
  ensure,
  recopyTreeSitterNatives,
  refreshTreeSitterNativesIfWrongArch,
  resolveBundleDaemonInvoke,
  stripWrongArchDaemonBinNatives,
  treeSitterNativesMatchTarget,
};
