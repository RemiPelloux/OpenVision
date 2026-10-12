$ErrorActionPreference = 'Stop'
$preparedNode = Join-Path (Split-Path -Parent $PSScriptRoot) '.tools\node-v24.18.0-win-x64\node.exe'
$nodePath = if ($env:OPENVISION_NODE_PATH) { $env:OPENVISION_NODE_PATH } elseif (Test-Path -LiteralPath $preparedNode) { $preparedNode } else { (Get-Command node -ErrorAction Stop).Source }
$env:OPENVISION_APP_NAME = 'OpenVision'
& $nodePath (Join-Path $PSScriptRoot 'desktop\start.mjs') @args
exit $LASTEXITCODE
