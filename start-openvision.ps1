$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
. (Join-Path $root 'enter-rea.ps1')
$env:OPENVISION_APP_NAME = 'OpenVision'
& $env:REA_NODE_PATH (Join-Path $PSScriptRoot 'desktop\build-source.mjs')
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
& $env:REA_NODE_PATH (Join-Path $PSScriptRoot 'desktop\launch.mjs') @args
exit $LASTEXITCODE
