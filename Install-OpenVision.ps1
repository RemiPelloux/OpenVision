param(
    [string]$Destination = (Join-Path $PSScriptRoot 'OpenVision-portable'),
    [switch]$Launch
)
$ErrorActionPreference = 'Stop'
function Get-PackageHash([string]$Path) {
    $stream = [System.IO.File]::OpenRead($Path)
    $algorithm = [System.Security.Cryptography.SHA256]::Create()
    try { return [System.BitConverter]::ToString($algorithm.ComputeHash($stream)).Replace('-', '').ToLowerInvariant() }
    finally { $algorithm.Dispose(); $stream.Dispose() }
}
if (-not [Environment]::Is64BitOperatingSystem -or $env:PROCESSOR_ARCHITECTURE -eq 'ARM64' -or $env:PROCESSOR_ARCHITEW6432 -eq 'ARM64') {
    throw 'This package requires Windows x64. Other native packages are on the roadmap.'
}
$payload = Join-Path $PSScriptRoot 'downloads\windows-x64'
$manifest = Get-Content -LiteralPath (Join-Path $payload 'manifest.json') -Raw | ConvertFrom-Json
$target = [System.IO.Path]::GetFullPath($Destination)
$launcher = Join-Path $target 'OpenVision.cmd'
if (Test-Path -LiteralPath $target) {
    $metadataPath = Join-Path $target 'openvision-package.json'
    if (-not (Test-Path -LiteralPath $metadataPath)) { throw 'Destination exists and is not an OpenVision package. Choose a new destination.' }
    $metadata = Get-Content -LiteralPath $metadataPath -Raw | ConvertFrom-Json
    if ($metadata.name -ne 'OpenVision' -or $metadata.version -ne $manifest.version -or
        -not (Test-Path -LiteralPath $launcher) -or -not (Test-Path -LiteralPath (Join-Path $target 'electron-host\OpenVision.exe'))) {
        throw 'Destination contains another or incomplete version. Choose a new destination; your existing profile is preserved.'
    }
} else {
    $staging = "$target.install-$([Guid]::NewGuid().ToString('N'))"
    New-Item -ItemType Directory -Path $staging | Out-Null
    $archivePath = Join-Path $staging 'portable.zip'
    $outputStream = [System.IO.File]::Open($archivePath, [System.IO.FileMode]::CreateNew)
    try {
        foreach ($chunk in $manifest.chunks) {
            if ($chunk.file -notmatch '^OpenVision-[0-9A-Za-z.\-]+-win32-x64\.zip\.part[0-9]{3}$') { throw 'Invalid package part name.' }
            $part = Join-Path $payload $chunk.file
            if ((Get-Item -LiteralPath $part).Length -ne $chunk.bytes -or
                (Get-PackageHash $part) -ne $chunk.sha256) {
                throw "Missing or damaged package part: $($chunk.file). Download the complete repository again."
            }
            $inputStream = [System.IO.File]::OpenRead($part)
            try { $inputStream.CopyTo($outputStream, 1048576) } finally { $inputStream.Dispose() }
        }
    } finally { $outputStream.Dispose() }
    if ((Get-Item -LiteralPath $archivePath).Length -ne $manifest.bytes -or
        (Get-PackageHash $archivePath) -ne $manifest.sha256) {
        throw 'Complete archive verification failed. The existing app was not modified.'
    }
    Write-Host 'Verified all OpenVision package parts. Extracting the desktop application...'
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    [System.IO.Compression.ZipFile]::ExtractToDirectory($archivePath, $staging)
    $metadata = Get-Content -LiteralPath (Join-Path $staging 'openvision-package.json') -Raw | ConvertFrom-Json
    if ($metadata.name -ne 'OpenVision' -or $metadata.version -ne $manifest.version -or
        -not (Test-Path -LiteralPath (Join-Path $staging 'electron-host\OpenVision.exe'))) {
        throw 'Extracted application identity does not match the package manifest.'
    }
    Remove-Item -LiteralPath $archivePath
    [System.IO.Directory]::Move($staging, $target)
    Write-Host "OpenVision installed in $target"
}
if ($Launch) { & $launcher }
else { Write-Host "Run $launcher to open OpenVision." }
