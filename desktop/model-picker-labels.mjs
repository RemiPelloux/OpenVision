const marker = '/* OpenVision readable unavailable model labels */';

export function readablePickerLabels(text, variant) {
  if (text.includes(marker)) return text;
  const flag = variant === 'desktop' ? 'zc' : variant === 'glass' ? 'Rl' : undefined;
  if (!flag) throw new Error(`Unknown workbench variant: ${variant}`);
  const missing = /if \(!([\w$]+)\) return ([\w$]+)\.modelId;(?=\s+const ([\w$]+) = [\w$]+\([^;]+;\s+return \(\s+\3\?\.displayNameOutsidePicker)/g;
  if ([...text.matchAll(missing)].length !== 1) throw new Error('Missing model display owner changed');
  text = text.replace(missing, (_match, model, selection) => `${marker}
  if (!${model}) return ${flag}.localMode && ${selection}.modelId?.startsWith('openvision-model:')
    ? 'Unavailable model' : ${selection}.modelId;`);
  const submenu = /"aria-label": `\$\{([\w$]+)\.name\} parameters`/g;
  if ([...text.matchAll(submenu)].length !== 1) throw new Error('Model parameter menu label owner changed');
  return text.replace(submenu, (_match, model) => `"aria-label": \`\${${flag}.localMode && ${model}.providerId
    ? (${model}.inputboxShortModelName || ${model}.clientDisplayName || ${model}.name) : ${model}.name} parameters\``);
}
