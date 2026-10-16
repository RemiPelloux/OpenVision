var __wakaru_require_tree_chunk_napi_cache;
export function require_tree_chunk_napi() {
if (__wakaru_require_tree_chunk_napi_cache) return __wakaru_require_tree_chunk_napi_cache.exports;
var exports2 = {};
var module2 = { exports: exports2 };
__wakaru_require_tree_chunk_napi_cache = module2;
"use strict";
var { createRequire: createRequire4 } = require("node:module");
require = createRequire4(__filename);
var { readFileSync: readFileSync18 } = require("node:fs");
var nativeBinding = null;
var loadErrors = [];
var isMusl = ()=>{
    let musl = false;
    if (process.platform === "linux") {
        musl = isMuslFromFilesystem();
        if (musl === null) {
            musl = isMuslFromReport();
        }
        if (musl === null) {
            musl = isMuslFromChildProcess();
        }
    }
    return musl;
};
var isFileMusl = (f2)=>f2.includes("libc.musl-") || f2.includes("ld-musl-");
var isMuslFromFilesystem = ()=>{
    try {
        return readFileSync18("/usr/bin/ldd", "utf-8").includes("musl");
    } catch  {
        return null;
    }
};
var isMuslFromReport = ()=>{
    let report = null;
    if (typeof process.report?.getReport === "function") {
        process.report.excludeNetwork = true;
        report = process.report.getReport();
    }
    if (!report) {
        return null;
    }
    if (report.header && report.header.glibcVersionRuntime) {
        return false;
    }
    if (Array.isArray(report.sharedObjects)) {
        if (report.sharedObjects.some(isFileMusl)) {
            return true;
        }
    }
    return false;
};
var isMuslFromChildProcess = ()=>{
    try {
        return require("child_process").execSync("ldd --version", {
            encoding: "utf8"
        }).includes("musl");
    } catch (e) {
        return false;
    }
};
function requireNative() {
    if (process.env.NAPI_RS_NATIVE_LIBRARY_PATH) {
        try {
            return require(process.env.NAPI_RS_NATIVE_LIBRARY_PATH);
        } catch (err) {
            loadErrors.push(err);
        }
    } else if (process.platform === "android") {
        if (process.arch === "arm64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-android-arm64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-android-arm64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "arm") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-android-arm-eabi");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-android-arm-eabi/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else {
            loadErrors.push(new Error(`Unsupported architecture on Android ${process.arch}`));
        }
    } else if (process.platform === "win32") {
        if (process.arch === "x64") {
            if (process.report?.getReport?.()?.header?.osName?.startsWith?.("MINGW")) {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-win32-x64-gnu");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-win32-x64-gnu/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-win32-x64-msvc");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-win32-x64-msvc/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else if (process.arch === "ia32") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-win32-ia32-msvc");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-win32-ia32-msvc/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "arm64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-win32-arm64-msvc");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-win32-arm64-msvc/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else {
            loadErrors.push(new Error(`Unsupported architecture on Windows: ${process.arch}`));
        }
    } else if (process.platform === "darwin") {
        try {
            return require("./tree-chunk-napi.win32-x64-msvc.node");
        } catch (e) {
            loadErrors.push(e);
        }
        try {
            const binding = require("@anysphere/tree-chunk-napi-darwin-universal");
            const bindingPackageVersion = require("@anysphere/tree-chunk-napi-darwin-universal/package.json").version;
            if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
            }
            return binding;
        } catch (e) {
            loadErrors.push(e);
        }
        if (process.arch === "x64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-darwin-x64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-darwin-x64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "arm64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-darwin-arm64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-darwin-arm64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else {
            loadErrors.push(new Error(`Unsupported architecture on macOS: ${process.arch}`));
        }
    } else if (process.platform === "freebsd") {
        if (process.arch === "x64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-freebsd-x64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-freebsd-x64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "arm64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-freebsd-arm64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-freebsd-arm64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else {
            loadErrors.push(new Error(`Unsupported architecture on FreeBSD: ${process.arch}`));
        }
    } else if (process.platform === "linux") {
        if (process.arch === "x64") {
            if (isMusl()) {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-x64-musl");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-x64-musl/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-x64-gnu");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-x64-gnu/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else if (process.arch === "arm64") {
            if (isMusl()) {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-arm64-musl");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-arm64-musl/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-arm64-gnu");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-arm64-gnu/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else if (process.arch === "arm") {
            if (isMusl()) {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-arm-musleabihf");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-arm-musleabihf/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-arm-gnueabihf");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-arm-gnueabihf/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else if (process.arch === "loong64") {
            if (isMusl()) {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-loong64-musl");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-loong64-musl/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-loong64-gnu");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-loong64-gnu/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else if (process.arch === "riscv64") {
            if (isMusl()) {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-riscv64-musl");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-riscv64-musl/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            } else {
                try {
                    return require("./tree-chunk-napi.win32-x64-msvc.node");
                } catch (e) {
                    loadErrors.push(e);
                }
                try {
                    const binding = require("@anysphere/tree-chunk-napi-linux-riscv64-gnu");
                    const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-riscv64-gnu/package.json").version;
                    if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                        throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                    }
                    return binding;
                } catch (e) {
                    loadErrors.push(e);
                }
            }
        } else if (process.arch === "ppc64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-linux-ppc64-gnu");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-ppc64-gnu/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "s390x") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-linux-s390x-gnu");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-linux-s390x-gnu/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else {
            loadErrors.push(new Error(`Unsupported architecture on Linux: ${process.arch}`));
        }
    } else if (process.platform === "openharmony") {
        if (process.arch === "arm64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-openharmony-arm64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-openharmony-arm64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "x64") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-openharmony-x64");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-openharmony-x64/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else if (process.arch === "arm") {
            try {
                return require("./tree-chunk-napi.win32-x64-msvc.node");
            } catch (e) {
                loadErrors.push(e);
            }
            try {
                const binding = require("@anysphere/tree-chunk-napi-openharmony-arm");
                const bindingPackageVersion = require("@anysphere/tree-chunk-napi-openharmony-arm/package.json").version;
                if (bindingPackageVersion !== "0.0.0" && process.env.NAPI_RS_ENFORCE_VERSION_CHECK && process.env.NAPI_RS_ENFORCE_VERSION_CHECK !== "0") {
                    throw new Error(`Native binding package version mismatch, expected 0.0.0 but got ${bindingPackageVersion}. You can reinstall dependencies to fix this issue.`);
                }
                return binding;
            } catch (e) {
                loadErrors.push(e);
            }
        } else {
            loadErrors.push(new Error(`Unsupported architecture on OpenHarmony: ${process.arch}`));
        }
    } else {
        loadErrors.push(new Error(`Unsupported OS: ${process.platform}, architecture: ${process.arch}`));
    }
}
nativeBinding = requireNative();
if (!nativeBinding || process.env.NAPI_RS_FORCE_WASI) {
    let wasiBinding = null;
    let wasiBindingError = null;
    try {
        wasiBinding = require("./tree-chunk-napi.wasi.cjs");
        nativeBinding = wasiBinding;
    } catch (err) {
        if (process.env.NAPI_RS_FORCE_WASI) {
            wasiBindingError = err;
        }
    }
    if (!nativeBinding) {
        try {
            wasiBinding = require("@anysphere/tree-chunk-napi-wasm32-wasi");
            nativeBinding = wasiBinding;
        } catch (err) {
            if (process.env.NAPI_RS_FORCE_WASI) {
                wasiBindingError.cause = err;
                loadErrors.push(err);
            }
        }
    }
    if (process.env.NAPI_RS_FORCE_WASI === "error" && !wasiBinding) {
        const error3 = new Error("WASI binding not found and NAPI_RS_FORCE_WASI is set to error");
        error3.cause = wasiBindingError;
        throw error3;
    }
}
if (!nativeBinding) {
    if (loadErrors.length > 0) {
        throw new Error(`Cannot find native binding. npm has a bug related to optional dependencies (https://github.com/npm/cli/issues/4828). Please try \`npm i\` again after removing both package-lock.json and node_modules directory.`, {
            cause: loadErrors.reduce((err, cur)=>{
                cur.cause = err;
                return cur;
            })
        });
    }
    throw new Error(`Failed to load native binding`);
}
module2.exports = nativeBinding;
module2.exports.Chunk = nativeBinding.Chunk;
module2.exports.ChunkerRouter = nativeBinding.ChunkerRouter;
module2.exports.CompressedFileOutline = nativeBinding.CompressedFileOutline;
module2.exports.FileTree = nativeBinding.FileTree;
module2.exports.PartialFileContext = nativeBinding.PartialFileContext;

return module2.exports;
}
