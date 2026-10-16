import { y_e } from "./environmentVariable.js";
import { Eet } from "./environmentVariableCollection.js";
import { yet } from "./environmentVariableShared.js";
import { $e } from "./network.js";
import { Ce } from "./path.js";
import { oe } from "./platform.js";
import { bi } from "./process.js";
import { jn } from "./strings.js";
import { h } from "./tslib.es6.js";
var Zi;
export { Zi };
var __wakaru_Cet_initialized = false;
export function Cet() {
if (__wakaru_Cet_initialized) return;
__wakaru_Cet_initialized = true;
"use strict";
h(), $e(), Ce(), oe(), bi(), jn(), y_e(), yet(), Eet(), Zi = new Map, Zi.set("windows-pwsh", [
    "-noexit",
    "-command",
    'try { . "{0}\\out\\vs\\workbench\\contrib\\terminal\\common\\scripts\\shellIntegration.ps1" } catch {}{1}'
]), Zi.set("windows-pwsh-login", [
    "-l",
    "-noexit",
    "-command",
    'try { . "{0}\\out\\vs\\workbench\\contrib\\terminal\\common\\scripts\\shellIntegration.ps1" } catch {}{1}'
]), Zi.set("pwsh", [
    "-noexit",
    "-command",
    '. "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.ps1"{1}'
]), Zi.set("pwsh-login", [
    "-l",
    "-noexit",
    "-command",
    '. "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.ps1"'
]), Zi.set("zsh", [
    "-i"
]), Zi.set("zsh-login", [
    "-il"
]), Zi.set("bash", [
    "--init-file",
    "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration-bash.sh"
]), Zi.set("fish", [
    "--init-command",
    'source "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.fish"'
]), Zi.set("fish-login", [
    "-l",
    "--init-command",
    'source "{0}/out/vs/workbench/contrib/terminal/common/scripts/shellIntegration.fish"'
]);

}
