@echo off
setlocal
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0Install-OpenVision.ps1" -Launch
if errorlevel 1 pause
