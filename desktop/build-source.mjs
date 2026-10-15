import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { installLocalProfile } from './local-workbench.mjs';
import { installProjectWindows } from './project-window-customization.mjs';
import { projectWorkspace } from './project-workspace.mjs';
import { installModelSettings } from './custom-models.mjs';
import { installCursorImport } from './install-import.mjs';
import { localSettings } from './import-json.mjs';
import { assembleSource, exists, loadRuntime } from './source-assembly.mjs';
import { platformLayout } from './platform.mjs';
import { signMacBundle } from './native-assets.mjs';
import { fileHash } from './import-files.mjs';
import { sourceAssets } from './source-assets.mjs';
import { customizeBundles } from './bundle-customization.mjs';
import { buildExtensionIntegrity } from './extension-integrity.mjs';
import { installAgentRuntime } from './agent-customization.mjs';
import { installContextRuntime } from './context-customization.mjs';
import { installCoreTelemetryPolicy } from './telemetry-customization.mjs';
import { installExtensionTelemetryPolicy } from './telemetry-extensions.mjs';
import { installCompletion } from './completion-customization.mjs';
import { installInlineEdit } from './inline-edit-customization.mjs';
import { installProfilePathIsolation } from './profile-paths.mjs';
import { installSubagentPathIsolation } from './subagent-paths.mjs';
import { installLocalChatTitles } from './local-chat-title.mjs';
import { installOwnedShellProcesses } from './agent-process-customization.mjs';
import { installLazyMcpChannels } from './mcp-lazy-customization.mjs';
import { installMcpAttemptCleanup } from './mcp-attempt-customization.mjs';
import { installMcpCancellation } from './mcp-cancel-customization.mjs';
import { installMcpReconnect } from './mcp-reconnect-customization.mjs';
import { installAgentProviders } from './agent-provider-customization.mjs';
import { installProviderErrorPolicy } from './provider-error-customization.mjs';
import { installAccountIntegrations } from './account-integration-customization.mjs';
import { installAccountProfiles } from './account-profile-customization.mjs';
import { installWelcomeStartup } from './welcome-customization.mjs';
import { installProjectNamespace, restoreNamespaceInputs } from './namespace-build.mjs';
import { installRuleDurability } from './rules-durability-customization.mjs';
import { installExplicitWorktrees } from './git-worktree-customization.mjs';
import { installShutdownOwnership } from './shutdown-customization.mjs';
import { installUtilityProcessOwnership } from './utility-process-customization.mjs';
import { installIsolatedNotifications } from './notification-customization.mjs';
import { installLinuxKeyringSelection } from './linux-keyring-customization.mjs';
import { installApprovalDefault } from './autorun-customization.mjs';
import { installWindowTitles } from './source-branding.mjs';
import { validateGeneratedArtifacts } from './generated-artifact-integrity.mjs';
import { installRenameVersionGuard } from './rename-version-customization.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const marker = join(root, 'build/source-build.json');
const localRecovery = join(root, 'build/recovery');
const recovery = process.env.OPENVISION_RECOVERY_DIR
  ? resolve(process.env.OPENVISION_RECOVERY_DIR)
  : await exists(join(localRecovery, 'reports/installation-manifest.json')) ? localRecovery : resolve(root, '../cursor');
let manifest;
if (await exists(marker)) {
  await loadRuntime(root);
  console.log('Using existing editable OpenVision source build');
} else manifest = await assembleSource(root, recovery);

await mkdir(join(root, 'build'), { recursive: true });
await validateGeneratedArtifacts(root, { preflight: true });
await restoreNamespaceInputs(root);
const layout = platformLayout(root);
await sourceAssets({ root, app: join(root, 'source/app'), executable: layout.executable, layout });
await customizeBundles(root);
await installWelcomeStartup(root);
await installProjectWindows(root);
await installProfilePathIsolation(root);
await installLazyMcpChannels(root);
await installMcpAttemptCleanup(root);
await installMcpCancellation(root);
await installMcpReconnect(root);
await installSubagentPathIsolation(root);
await installAgentRuntime(root);
await installAgentProviders(root);
await installAccountIntegrations(root);
await installAccountProfiles(root);
await installProviderErrorPolicy(root);
await installOwnedShellProcesses(root);
await installContextRuntime(root);
await installCoreTelemetryPolicy(root);
await installShutdownOwnership(root);
await installUtilityProcessOwnership(root);
await installIsolatedNotifications(root);
await installLinuxKeyringSelection(root);
await installExtensionTelemetryPolicy(root);
await installRenameVersionGuard(root);
await installCompletion(root);
await installInlineEdit(root);
await installApprovalDefault(root);
await installLocalChatTitles(root);
await installExplicitWorktrees(root);
await installLocalProfile(root);
await installModelSettings(root);
await copyFile(join(root, 'desktop/local-rules.js'),
  join(root, 'source/app/out/vs/code/electron-sandbox/workbench/openvision-local-rules.js'));
for (const file of ['workspace-memory.js', 'workspace-memory-card.js', 'workspace-memory-card.css', 'legacy-memory.js', 'legacy-memory-review.js'])
  await copyFile(join(root, 'desktop', file), join(root, 'source/app/out/vs/code/electron-sandbox/workbench', `openvision-${file}`));
await installCursorImport(root);
await installRuleDurability(root);
await installWindowTitles(root);
await installProjectNamespace(root, { afterExtensions: async () => {
  const integrity = await buildExtensionIntegrity(root);
  console.log(`Extension integrity: ${integrity.extensions} extensions, ${integrity.files} protected files`);
} });
const artifacts = await validateGeneratedArtifacts(root);
console.log(`Generated artifacts validated: ${artifacts.scripts} scripts, ${artifacts.manifests} manifests, ${artifacts.localModules} local main-process modules`);
const settings = join(root, 'data/local/User/settings.json');
if (!await exists(settings)) {
  await mkdir(dirname(settings), { recursive: true });
  await writeFile(settings, JSON.stringify(localSettings, null, 2) + '\n', { flag: 'wx' });
}
await mkdir(join(root, 'data/local-extensions'), { recursive: true });
await projectWorkspace(root);
if (process.platform === 'darwin') await signMacBundle(layout.bundle);
if (manifest) {
  manifest.executable_sha256 = await fileHash(layout.executable);
  await mkdir(dirname(marker), { recursive: true });
  await writeFile(marker, JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
  console.log(`OpenVision source build complete for ${process.platform}/${process.arch}`);
}
