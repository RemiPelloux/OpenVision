import { parseExpressionAt } from '../tooling/dependencies.mjs';

const marker = '/* OpenVision autocomplete preparation debounce v1 */';

export function debounceCompletionPreparation(text, variant) {
  const local = { desktop: 'zc.localMode', glass: 'Rl.localMode' }[variant];
  if (!local) throw new Error('Unknown autocomplete workbench variant');
  if (text.includes(marker)) return text;
  const anchor = 'async getStream({', start = text.indexOf(anchor);
  if (start < 0 || text.indexOf(anchor, start + anchor.length) !== -1)
    throw new Error('Autocomplete preparation owner missing or ambiguous');
  const owner = parseExpressionAt(text, text.lastIndexOf('class ', start), { ecmaVersion: 'latest' });
  const method = owner.body?.body?.find(item => item.key?.name === 'immediatelyFireCppFromTrigger')?.value;
  const [, editor, controller, generation] = method?.params ?? [];
  const source = method && text.slice(method.start, method.end);
  if (!method?.async || ![editor, controller, generation].every(item => item?.type === 'Identifier') ||
      !source.includes('.getValue()') || !source.includes('await this.executeBeforeTabFileReadHook(') ||
      !source.includes('await this.runCpp(')) throw new Error('Autocomplete preparation contract changed');
  // Keep the later dispatch debounce: a slow hook can be superseded after this check.
  const guard = `\n${marker}
    if (${local}) {
      const openvisionModel = ${editor.name}.getModel();
      const openvisionVersion = openvisionModel?.getVersionId();
      if (${controller.name}.signal.aborted || !openvisionModel ||
          await this.debouncer.shouldDebounce(${generation.name}) ||
          ${controller.name}.signal.aborted || openvisionModel.isDisposed() ||
          ${editor.name}.getModel() !== openvisionModel ||
          openvisionModel.getVersionId() !== openvisionVersion) {
        ${controller.name}.abort();
        this.streams = this.streams.filter(item => item.generationUUID !== ${generation.name});
        return;
      }
    }\n`;
  return text.slice(0, method.body.start + 1) + guard + text.slice(method.body.start + 1);
}
