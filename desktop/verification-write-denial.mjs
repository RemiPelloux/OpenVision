import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { realpath, writeFile, lstat } from 'node:fs/promises';
import { relative, isAbsolute, join } from 'node:path';

const execute = promisify(execFile);
async function powershell(script, path, descriptor = '') {
  // A caller running PowerShell 7 can export its module paths to this Windows
  // PowerShell child. Load the child's own ACL module, never change host policy.
  const encoded = Buffer.from(`$ErrorActionPreference = 'Stop'\nImport-Module "$PSHOME\\Modules\\Microsoft.PowerShell.Security\\Microsoft.PowerShell.Security.psd1" -ErrorAction Stop\n${script}`, 'utf16le').toString('base64');
  const { stdout } = await execute('powershell.exe', ['-NoProfile', '-NonInteractive', '-EncodedCommand', encoded], {
    windowsHide: true, timeout: 20000,
    env: { ...process.env, OPENVISION_VERIFY_ACL_PATH: path, OPENVISION_VERIFY_ACL_SDDL: descriptor },
  });
  return stdout.trim();
}

// Native failure fixture only. Deny writes in an owned disposable directory,
// preserve its ACL outside that directory, and restore/verify it on exit.
export async function denyFixtureWrites({ directory, scope }) {
  if (process.platform !== 'win32') throw new Error('Windows ACL fixture required');
  const [target, owned] = await Promise.all([realpath(directory), realpath(scope)]);
  const within = relative(owned, target), stat = await lstat(directory);
  if (!within || within.startsWith('..') || isAbsolute(within) || !stat.isDirectory() || stat.isSymbolicLink())
    throw new Error('Write-denial fixture must be an ordinary descendant of its owned directory');
  const original = await powershell('(Get-Acl -LiteralPath $env:OPENVISION_VERIFY_ACL_PATH).Sddl', target);
  const backup = join(owned, 'write-denial-acl.json');
  await writeFile(backup, JSON.stringify({ target, original }, null, 2), { flag: 'wx' });
  const restore = async () => {
    await powershell(`$fixtureAcl = Get-Acl -LiteralPath $env:OPENVISION_VERIFY_ACL_PATH
$fixtureAcl.SetSecurityDescriptorSddlForm($env:OPENVISION_VERIFY_ACL_SDDL)
Set-Acl -LiteralPath $env:OPENVISION_VERIFY_ACL_PATH -AclObject $fixtureAcl`, target, original);
    const current = await powershell('(Get-Acl -LiteralPath $env:OPENVISION_VERIFY_ACL_PATH).Sddl', target);
    if (current !== original) throw new Error('Fixture ACL restoration did not match its backup');
  };
  try {
    await powershell(`$fixtureAcl = Get-Acl -LiteralPath $env:OPENVISION_VERIFY_ACL_PATH
$fixtureSid = [System.Security.Principal.WindowsIdentity]::GetCurrent().User
$fixtureRule = [System.Security.AccessControl.FileSystemAccessRule]::new($fixtureSid, 'Write,Delete,DeleteSubdirectoriesAndFiles', 'ContainerInherit,ObjectInherit', 'None', 'Deny')
$fixtureAcl.AddAccessRule($fixtureRule)
Set-Acl -LiteralPath $env:OPENVISION_VERIFY_ACL_PATH -AclObject $fixtureAcl`, target);
    return { restore, backup };
  } catch (error) {
    await restore(); throw error;
  }
}
