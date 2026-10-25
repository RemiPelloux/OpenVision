import { createHash } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, rename, rm, stat, writeFile } from "node:fs/promises";
import { execFile as nodeExecFile } from "node:child_process";
import { join } from "node:path";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import { promisify } from "node:util";
import { modellyPluginManifest as manifest } from "./modelly-plugin-manifest.mjs";

const execFile = promisify(nodeExecFile);
const PYTHON_PROBE = [
  "import importlib.metadata as m, json, sys",
  "try:",
  '    version = m.version("modelly-abm")',
  "except m.PackageNotFoundError:",
  "    version = None",
  'print(json.dumps({"major":sys.version_info[0],"minor":sys.version_info[1],"version":version}))',
].join("\n");
const MAX_PIP_OUTPUT_BYTES = 4 * 1024 * 1024;
const DOWNLOAD_TIMEOUT_MS = 5 * 60 * 1000;
const ALLOWED_ARCHIVE_ORIGINS = new Set([
  "https://github.com",
  "https://codeload.github.com",
]);

export class ModellyPluginError extends Error {
  constructor(code, message, options) {
    super(message, options);
    this.name = "ModellyPluginError";
    this.code = code;
  }
}

function pythonCommand(pythonPath) {
  return (
    pythonPath?.trim() || (process.platform === "win32" ? "python" : "python3")
  );
}

async function runPython(pythonPath, args, options = {}) {
  try {
    return await execFile(pythonCommand(pythonPath), args, {
      cwd: options.cwd,
      env: options.env,
      signal: options.signal,
      timeout: options.timeout ?? 120_000,
      maxBuffer: MAX_PIP_OUTPUT_BYTES,
      windowsHide: true,
      encoding: "utf8",
    });
  } catch (error) {
    if (error.code === "ENOENT")
      throw new ModellyPluginError(
        "python-unavailable",
        `Python executable was not found: ${pythonCommand(pythonPath)}`,
        { cause: error },
      );
    if (error.code === "ETIMEDOUT" || error.code === "ABORT_ERR")
      throw new ModellyPluginError(
        "cancelled",
        "Modelly operation was cancelled or timed out.",
        { cause: error },
      );
    throw error;
  }
}

function parseProbe(output) {
  try {
    return JSON.parse(output.trim().split(/\r?\n/).at(-1));
  } catch (error) {
    throw new ModellyPluginError(
      "invalid-python-output",
      "The selected Python executable returned an invalid environment response.",
      { cause: error },
    );
  }
}

export async function inspectModellyEnvironment(pythonPath, options = {}) {
  const execute = options.runPython ?? runPython;
  const result = await execute(pythonPath, ["-c", PYTHON_PROBE], {
    signal: options.signal,
    timeout: 15_000,
  });
  const details = parseProbe(result.stdout ?? result);
  if (!Number.isInteger(details.major) || !Number.isInteger(details.minor))
    throw new ModellyPluginError(
      "invalid-python-output",
      "Could not determine the selected Python version.",
    );
  return {
    pythonPath: pythonCommand(pythonPath),
    pythonVersion: `${details.major}.${details.minor}`,
    version: details.version ?? null,
    supported:
      details.major > 3 || (details.major === 3 && details.minor >= 12),
  };
}

function checkSupportedPython(environment) {
  if (!environment.supported)
    throw new ModellyPluginError(
      "python-version",
      `Modelly requires Python 3.12 or newer; selected ${environment.pythonVersion}.`,
    );
}

function validateRedirect(url) {
  const parsed = new URL(url);
  if (
    !ALLOWED_ARCHIVE_ORIGINS.has(parsed.origin) ||
    parsed.username ||
    parsed.password
  )
    throw new ModellyPluginError(
      "unsafe-redirect",
      "Modelly download redirected outside the official GitHub archive.",
    );
  return parsed.href;
}

async function fetchArchive(fetchImpl, signal) {
  let url = manifest.archiveUrl;
  for (let redirects = 0; redirects <= 3; redirects++) {
    const response = await fetchImpl(url, { redirect: "manual", signal });
    if (response.ok) return response;
    const location = response.headers?.get?.("location");
    await response.body?.cancel?.();
    if ([301, 302, 303, 307, 308].includes(response.status) && location) {
      url = validateRedirect(new URL(location, url).href);
      continue;
    }
    throw new ModellyPluginError(
      "download-failed",
      `Modelly download failed (HTTP ${response.status}).`,
    );
  }
  throw new ModellyPluginError(
    "unsafe-redirect",
    "Modelly download redirected too many times.",
  );
}

async function downloadArchive(cacheDirectory, options = {}) {
  const fetchImpl = options.fetch ?? fetch;
  const destination = join(cacheDirectory, `modelly-${manifest.commit}.zip`);
  await mkdir(cacheDirectory, { recursive: true });
  if (await verifyFile(destination))
    return {
      path: destination,
      bytes: (await stat(destination)).size,
      cached: true,
    };
  const response = await fetchArchive(fetchImpl, options.signal);
  const length = Number(response.headers?.get?.("content-length") ?? 0);
  if (length > manifest.maxArchiveBytes)
    throw new ModellyPluginError(
      "archive-too-large",
      "The Modelly archive exceeds the supported size.",
    );
  const temporary = `${destination}.${process.pid}.${Date.now()}.tmp`;
  const hash = createHash("sha256");
  let bytes = 0;
  let lastReport = 0;
  const progress = options.progress ?? (() => {});
  const measure = new Transform({
    transform(chunk, encoding, callback) {
      bytes += chunk.length;
      if (bytes > manifest.maxArchiveBytes)
        return callback(
          new ModellyPluginError(
            "archive-too-large",
            "The Modelly archive exceeds the supported size.",
          ),
        );
      hash.update(chunk);
      if (bytes - lastReport >= 1024 * 1024) {
        lastReport = bytes;
        progress({
          bytes,
          message: `${Math.ceil(bytes / 1024 / 1024)} MB downloaded`,
        });
      }
      callback(null, chunk);
    },
  });
  try {
    if (response.body)
      await pipeline(
        Readable.fromWeb(response.body),
        measure,
        createWriteStream(temporary, { flags: "wx" }),
        { signal: options.signal },
      );
    else {
      const data = Buffer.from(await response.arrayBuffer());
      if (data.length > manifest.maxArchiveBytes)
        throw new ModellyPluginError(
          "archive-too-large",
          "The Modelly archive exceeds the supported size.",
        );
      hash.update(data);
      bytes = data.length;
      progress({
        bytes,
        message: `${Math.ceil(bytes / 1024 / 1024)} MB downloaded`,
      });
      await writeFile(temporary, data, { flag: "wx" });
    }
    const checksum = hash.digest("hex");
    if (checksum !== manifest.sha256)
      throw new ModellyPluginError(
        "checksum-failed",
        "Modelly archive checksum verification failed. Nothing was installed.",
      );
    await rename(temporary, destination);
    return { path: destination, bytes, cached: false };
  } catch (error) {
    await rm(temporary, { force: true });
    throw error;
  }
}

async function verifyFile(path) {
  let info;
  try {
    info = await stat(path);
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
  if (info.size > manifest.maxArchiveBytes) return false;
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  return hash.digest("hex") === manifest.sha256;
}

export async function downloadModellyArchive(options = {}) {
  if (!options.cacheDirectory)
    throw new ModellyPluginError(
      "cache-directory",
      "A Modelly cache directory is required.",
    );
  return downloadArchive(options.cacheDirectory, options);
}

export async function installModelly(options = {}) {
  if (!options.cacheDirectory)
    throw new ModellyPluginError(
      "cache-directory",
      "A Modelly cache directory is required.",
    );
  const execute = options.runPython ?? runPython;
  const environment = await inspectModellyEnvironment(options.pythonPath, {
    runPython: execute,
    signal: options.signal,
  });
  checkSupportedPython(environment);
  if (environment.version === manifest.version)
    return { status: "already-installed", environment, manifest };
  const download = options.downloadArchive ?? downloadArchive;
  const archive = await download(options.cacheDirectory, options);
  options.progress?.({
    message: "Installing Modelly and its declared dependencies…",
  });
  await execute(
    environment.pythonPath,
    [
      "-m",
      "pip",
      "install",
      "--disable-pip-version-check",
      "--no-input",
      "--no-cache-dir",
      "--upgrade",
      archive.path,
    ],
    { signal: options.signal, timeout: DOWNLOAD_TIMEOUT_MS },
  );
  const installed = await inspectModellyEnvironment(environment.pythonPath, {
    runPython: execute,
    signal: options.signal,
  });
  if (installed.version !== manifest.version)
    throw new ModellyPluginError(
      "verification-failed",
      `Modelly installation finished with version ${installed.version ?? "unknown"}, expected ${manifest.version}.`,
    );
  return { status: "installed", environment: installed, archive, manifest };
}

export async function uninstallModelly(options = {}) {
  const execute = options.runPython ?? runPython;
  const environment = await inspectModellyEnvironment(options.pythonPath, {
    runPython: execute,
    signal: options.signal,
  });
  if (!environment.version) {
    await removeCachedArchive(options.cacheDirectory);
    return { status: "already-absent", environment, manifest };
  }
  await execute(
    environment.pythonPath,
    [
      "-m",
      "pip",
      "uninstall",
      "--disable-pip-version-check",
      "--no-input",
      "--yes",
      manifest.packageName,
    ],
    { signal: options.signal, timeout: 120_000 },
  );
  const remaining = await inspectModellyEnvironment(environment.pythonPath, {
    runPython: execute,
    signal: options.signal,
  });
  if (remaining.version)
    throw new ModellyPluginError(
      "uninstall-failed",
      `Modelly ${remaining.version} is still installed.`,
    );
  await removeCachedArchive(options.cacheDirectory);
  return { status: "removed", environment: remaining, manifest };
}

async function removeCachedArchive(cacheDirectory) {
  if (cacheDirectory)
    await rm(join(cacheDirectory, `modelly-${manifest.commit}.zip`), {
      force: true,
    });
}

export async function modellyStatus(options = {}) {
  try {
    const environment = await inspectModellyEnvironment(options.pythonPath, {
      runPython: options.runPython ?? runPython,
      signal: options.signal,
    });
    return {
      status: !environment.supported
        ? "python-version"
        : environment.version === manifest.version
          ? "installed"
          : environment.version
            ? "different-version"
            : "available",
      error: !environment.supported
        ? `Modelly requires Python 3.12 or newer; selected ${environment.pythonVersion}.`
        : undefined,
      environment,
      manifest,
    };
  } catch (error) {
    return {
      status: error.code ?? "unavailable",
      error: error.message,
      manifest,
    };
  }
}

export { manifest as modellyPluginManifest };
