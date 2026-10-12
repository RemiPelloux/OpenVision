$ErrorActionPreference = 'Stop'
$preparedNode = Join-Path (Split-Path -Parent $PSScriptRoot) '.tools\node-v24.18.0-win-x64\node.exe'
$nodePath = if ($env:OPENVISION_NODE_PATH) { $env:OPENVISION_NODE_PATH } elseif (Test-Path -LiteralPath $preparedNode) { $preparedNode } else { (Get-Command node -ErrorAction Stop).Source }
& $nodePath (Join-Path $PSScriptRoot 'desktop\import-cli.mjs') @args
exit $LASTEXITCODE
