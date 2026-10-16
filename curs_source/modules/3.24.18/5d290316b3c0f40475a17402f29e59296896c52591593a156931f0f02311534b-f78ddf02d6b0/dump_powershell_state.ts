import { h } from "./tslib.es6.js";
var ng, sg, ig, og;
export { ig, ng, og, sg };
var __wakaru_K9_initialized = false;
export function K9() {
if (__wakaru_K9_initialized) return;
__wakaru_K9_initialized = true;
"use strict";
h(), ng = `
function Dump-PowerShellState {
    param(
        [Parameter(Mandatory = $true)]
        [string]$OutputFile
    )

    function Emit {
        param([string]$Content)
        Add-Content -Path $OutputFile -Value $Content -Encoding UTF8
    }

    if (Test-Path $OutputFile) {
        Remove-Item $OutputFile -Force
    }
    New-Item -Path $OutputFile -ItemType File -Force | Out-Null
    #Log-Timing "file_init"

    Emit $PWD.Path
    #Log-Timing "working_dir"

    function ShouldPersistEnvVar {
        param([string]$Name)
        if ($Name -eq 'CURSOR_CONVERSATION_ID') {
            return $false
        }
        if ($Name -eq 'CURSOR_REQUEST_ID') {
            return $false
        }
        if ($Name -like 'CURSOR_AGENT_STORE*') {
            return $false
        }
        if ($Name -like '*CURSOR_SANDBOX*') {
            return $false
        }
        if ($Name -eq 'ELECTRON_RUN_AS_NODE') {
            return $false
        }
        return $true
    }

    $envVars = Get-ChildItem Env: | Sort-Object Name
    foreach ($var in $envVars) {
        if (-not (ShouldPersistEnvVar -Name $var.Name)) {
            continue
        }
        $encoded = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes([string]$var.Value))
        Emit ('Set-Item -LiteralPath ''Env:{0}'' -Value ([System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String(''{1}'')))' -f $var.Name, $encoded)
    }
    #Log-Timing "environment"

    $aliases = Get-Alias | Sort-Object Name
    foreach ($alias in $aliases) {
        $definition = $alias.Definition

        if ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::ReadOnly) {
        }
        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::Constant) {
        }
        elseif ($alias.Options -band [System.Management.Automation.ScopedItemOptions]::AllScope) {
        }
        else {
            Emit ('Set-Alias -Name "{0}" -Value "{1}"' -f $alias.Name, $definition)
        }
    }

    #Log-Timing "finalize"
}
`, sg = `
try { [Console]::OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }
try { [Console]::InputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }
try { $global:OutputEncoding = [System.Text.UTF8Encoding]::new($false) } catch { }
`, ig = (e, t, r, n, s)=>`
${s?.utf8Console ? sg : ""}
${e}

Set-Location '${t}'

# Execute user command
${r}
$COMMAND_EXIT_CODE = $LASTEXITCODE

${ng}
Dump-PowerShellState -OutputFile "${n}"

exit $COMMAND_EXIT_CODE
`, og = ig;

}
