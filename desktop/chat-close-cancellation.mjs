// OV-1001: closing a running chat tab must release its in-flight request.
//
// The recovered Close Tab action (Ctrl+W and the tab's close control) asks
// "The chat is currently running. Are you sure you want to close it?" and, on
// "Close Tab", only hides the composer view (`closeComposer`). Native Linux runs
// observed the provider stream staying open after the tab was gone, so the
// closed chat kept generating and could keep running tools. After the user
// confirms, this customization first cancels the chat through the same service
// method the Cancel Chat and Stop paths use (`cancelCurrentStep`), then closes
// it. Chats that skip the dialog (background-agent or other recovered
// exemptions) and the Cancel button keep their recovered behaviour.

export const marker = '/* OpenVision cancel a running chat when its tab is closed v1 */';

const pattern = /if \(\n(\s+)!([\w$]+) &&\n\s+!([\w$]+) &&\n\s+\(await ([\w$]+)\.openDialog\(\{\n\s+title: "Close Running Tab\?",\n(\s+message: "The chat is currently running\. Are you sure you want to close it\?",\n\s+primaryButton: \{ id: "close", label: "Close Tab" \},\n\s+cancelButton: \{ id: "cancel", label: "Cancel" \},\n\s+dialogIcon: [\w$]+\.warning,\n)\s+\}\)\) !== "close"\n\s+\)\n\s+return;\n(\s+)\}\n(\s+)await ([\w$]+)\.closeComposer\(([\w$]+)\);/g;

export function cancelClosedRunningChat(text) {
  if (text.includes(marker)) return text;
  const matches = [...text.matchAll(pattern)];
  if (matches.length !== 1) throw new Error('Running chat tab close owner changed');
  const [match, indent, background, exempt, dialog, body, closeIndent, callIndent, service, composer] = matches[0];
  // The Cancel Chat action in the same bundle must use the same service method.
  if ((text.match(/async cancelCurrentStep\([\w$]+, [\w$]+\) \{/g) ?? []).length !== 1) throw new Error('Chat cancellation owner changed');
  const replacement = `if (!${background} && !${exempt}) {
${indent}${marker}
${indent}if ((await ${dialog}.openDialog({
${indent}  title: "Close Running Tab?",
${body}${indent}})) !== "close") return;
${indent}try {
${indent}  await ${service}.cancelCurrentStep(${composer});
${indent}} catch (error) {
${indent}  console.error("[composer] Cancelling a closed running chat failed", error);
${indent}}
${indent.slice(2)}}
${closeIndent}}
${callIndent}await ${service}.closeComposer(${composer});`;
  return text.slice(0, matches[0].index) + replacement + text.slice(matches[0].index + match.length);
}
