$ErrorActionPreference = 'Stop'
. (Join-Path (Split-Path -Parent $PSScriptRoot) 'enter-rea.ps1')
& $env:REA_NODE_PATH (Join-Path $PSScriptRoot 'desktop\import-cli.mjs') @args
exit $LASTEXITCODE
