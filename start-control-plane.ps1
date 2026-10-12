$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
. (Join-Path $root 'enter-rea.ps1')
$env:OPENVISION_APP_NAME = 'OpenVision'
& $env:REA_NODE_PATH (Join-Path $PSScriptRoot 'src\server.mjs')
