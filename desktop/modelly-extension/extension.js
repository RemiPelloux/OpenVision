const path = require("node:path");
const { pathToFileURL } = require("node:url");
const vscode = require("vscode");

let pluginApi;
async function api(context) {
  if (!pluginApi)
    pluginApi = import(
      pathToFileURL(path.join(context.extensionPath, "modelly-plugin.mjs")).href
    );
  return pluginApi;
}

function pythonPath() {
  return (
    vscode.workspace.getConfiguration("openvision.modelly").get("pythonPath") ||
    undefined
  );
}

async function choosePython(config) {
  const current = config.get("pythonPath") || "";
  const value = await vscode.window.showInputBox({
    title: "Modelly Python environment",
    prompt: "Enter a Python executable or leave empty to use Python from PATH.",
    value: current,
    placeHolder: process.platform === "win32" ? "python.exe" : "python3",
  });
  if (value === undefined) return undefined;
  await config.update(
    "pythonPath",
    value.trim(),
    vscode.ConfigurationTarget.Global,
  );
  return value.trim() || undefined;
}

function cacheDirectory(context) {
  return path.join(context.globalStorageUri.fsPath, "modelly");
}

async function statusMessage(context, python) {
  const module = await api(context);
  const status = await module.modellyStatus({ pythonPath: python });
  if (status.status === "installed")
    return `Modelly ${status.environment.version} is installed in Python ${status.environment.pythonVersion}.`;
  if (status.status === "available")
    return `Modelly is not installed in Python ${status.environment.pythonVersion}.`;
  if (status.status === "different-version")
    return `Modelly ${status.environment.version} is installed; OpenVision pins ${status.manifest.version}.`;
  return `Modelly environment check: ${status.error || status.status}.`;
}

function activate(context) {
  const config = vscode.workspace.getConfiguration("openvision.modelly");
  context.subscriptions.push(
    vscode.commands.registerCommand("openvision.modelly.check", async () => {
      try {
        vscode.window.showInformationMessage(
          await statusMessage(context, pythonPath()),
        );
      } catch (error) {
        vscode.window.showErrorMessage(
          `Modelly check failed: ${error.message}`,
        );
      }
    }),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("openvision.modelly.install", async () => {
      if (!vscode.workspace.isTrusted)
        return vscode.window.showErrorMessage(
          "Trust this workspace before installing an optional Python plugin.",
        );
      const python = await choosePython(config);
      if (python === undefined) return;
      const module = await api(context);
      await vscode.window.withProgress(
        {
          location: vscode.ProgressLocation.Notification,
          title: "Install Modelly support",
          cancellable: true,
        },
        async (progress, token) => {
          const controller = new AbortController();
          const cancellation = token.onCancellationRequested(() =>
            controller.abort(),
          );
          try {
            const result = await module.installModelly({
              pythonPath: python,
              cacheDirectory: cacheDirectory(context),
              signal: controller.signal,
              progress: (item) => progress.report(item),
            });
            vscode.window.showInformationMessage(
              result.status === "already-installed"
                ? "Modelly is already installed."
                : "Modelly support installed.",
            );
          } catch (error) {
            vscode.window.showErrorMessage(
              `Modelly installation failed: ${error.message}`,
            );
          } finally {
            cancellation.dispose();
          }
        },
      );
    }),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("openvision.modelly.remove", async () => {
      const answer = await vscode.window.showWarningMessage(
        "Remove Modelly from the selected Python environment?",
        { modal: true },
        "Remove",
      );
      if (answer !== "Remove") return;
      const module = await api(context);
      try {
        const result = await module.uninstallModelly({
          pythonPath: pythonPath(),
          cacheDirectory: cacheDirectory(context),
        });
        vscode.window.showInformationMessage(
          result.status === "already-absent"
            ? "Modelly is already absent."
            : "Modelly support removed.",
        );
      } catch (error) {
        vscode.window.showErrorMessage(
          `Modelly removal failed: ${error.message}`,
        );
      }
    }),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "openvision.modelly.openStarter",
      async () => {
        const notebook = vscode.Uri.file(
          path.join(context.extensionPath, "starter.ipynb"),
        );
        await vscode.commands.executeCommand("vscode.open", notebook);
      },
    ),
  );
}

module.exports = { activate };
