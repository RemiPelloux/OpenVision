$ErrorActionPreference = 'Stop'
Get-CimInstance Win32_Process | ForEach-Object {
    [PSCustomObject]@{
        pid = [int]$_.ProcessId
        parentPid = [int]$_.ParentProcessId
        name = $_.Name
        createdMs = if ($_.CreationDate) { ([DateTimeOffset]$_.CreationDate).ToUnixTimeMilliseconds() } else { $null }
        workingSetBytes = [double]$_.WorkingSetSize
        privateBytes = [double]$_.PrivatePageCount
    }
} | ConvertTo-Json -Compress
