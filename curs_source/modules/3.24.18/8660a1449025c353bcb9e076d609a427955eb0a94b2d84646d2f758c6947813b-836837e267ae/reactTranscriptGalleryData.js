import { ju } from "./agent_pb.js";
import { bs, sd } from "./chat_pb.js";
import { o9l } from "./composerTranscriptEntries.js";
import { y2l } from "./composerTranscriptProjection.js";
import { cbs } from "./composerTranscriptRowHydration.js";
import { $Mi } from "./composerTranscriptTailStatus.js";
import { mo, tf } from "./composer_pb.js";
import { ebt } from "./create_plan_tool_pb.js";
import { U4t } from "./edit_tool_pb.js";
import { Wti } from "./glob_tool_pb.js";
import { F4t } from "./grep_tool_pb.js";
import { Mt } from "./index_197.js";
import { zke } from "./mcp_exec_pb.js";
import { fmn } from "./mcp_tool_pb.js";
import { X_t } from "./read_tool_pb.js";
import { $te } from "./shell_exec_pb.js";
import { N4t } from "./shell_tool_pb.js";
import { oqe } from "./toolCallHumanReviewTypes.js";
import { Pu } from "./tools_pb.js";
import { E } from "./tslib.es6.js";
var lBi, Den, _dc, bdc, gXv, fXv, vXv, _Xv, bXv, yXv;
export { Den, _Xv, _dc, bXv, bdc, fXv, gXv, lBi, vXv, yXv };
var __wakaru_xcC_initialized = false;
export function xcC() {
if (__wakaru_xcC_initialized) return;
__wakaru_xcC_initialized = true;
"use strict";
E(), Mt(), ju(), ebt(), U4t(), Wti(), F4t(), zke(), fmn(), X_t(), $te(), N4t(), sd(), tf(), Pu(), oqe(), o9l(), y2l(), cbs(), $Mi(), lBi = Date.UTC(2024, 0, 1, 12, 0, 0), Den = bs.AI, _dc = bs.HUMAN, bdc = mo.TOOL_FORMER, gXv = mo.THINKING, fXv = `export function Settings() {
	return (
		<div className="settings">
			<h1>Settings</h1>
		</div>
	);
}`, vXv = `import { Toggle } from "./Toggle";
import { useTheme } from "../hooks/useTheme";

export function Settings() {
	const { darkMode, toggle } = useTheme();
	return (
		<div className="settings">
			<h1>Settings</h1>
			<Toggle checked={darkMode} onChange={toggle} label="Dark mode" />
		</div>
	);
}`, _Xv = `export function useTheme() {
	const [darkMode, setDarkMode] = useState(false);
	return { darkMode, toggle: () => setDarkMode(v => !v) };
}`, bXv = `export function useTheme() {
	const [darkMode, setDarkMode] = useState(
		() => localStorage.getItem("theme") === "dark"
	);
	useEffect(() => {
		localStorage.setItem("theme", darkMode ? "dark" : "light");
	}, [darkMode]);
	return { darkMode, toggle: () => setDarkMode(v => !v) };
}`, yXv = [
    "## Dark mode toggle added",
    "",
    "I added a `useTheme` hook and wired a toggle into the settings page.",
    "",
    "- Reads the saved preference from `localStorage`",
    "- Falls back to the system `prefers-color-scheme`",
    "- Toggles the `.dark` class on the document root",
    "",
    "```tsx",
    "const { darkMode, toggle } = useTheme();",
    "```",
    "",
    "See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/CSS/prefers-color-scheme) for details."
].join(`
`);

}
