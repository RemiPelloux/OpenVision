// OV-604 decision prep: `npm run verify:completion -- --next-edit-absent`
// proves today's local Tab path shows no next-edit jump hint and sends no
// cursor-prediction traffic while typing. The recovered client has two
// producers: fused predictions carried by StreamCpp (cursorPredictionTarget)
// and the AiService.StreamNextCursorPrediction RPC. Both are watched.
import { saveFile, pressTab, until } from './verify-completion-editing.mjs';

// DOM produced by the recovered prediction UI (hint widget, dimmed preview, tooltip anchor).
export const predictionSelectors = ['.cursor-prediction-hint-line-widget', '.cursor-prediction-dimmed-line',
  '.cursor-prediction-dimmed-line-inline', '#cpp-cursor-prediction-tooltip-hover-over-element-1234'];
export const predictionTraffic = /StreamNextCursorPrediction|aiserver\.v1\.CppService|StreamCpp|cursor-prediction/i;

export function predictionRequests(urls) {
  return urls.filter(url => predictionTraffic.test(url));
}

// Register before any typing so every renderer request of the session is seen.
export function watchPredictionTraffic(page) {
  const urls = [];
  page.on('request', request => urls.push(request.url()));
  return urls;
}

export async function observePredictionDom(page) {
  await page.evaluate(selectors => {
    const seen = globalThis.openvisionPredictionNodes = [];
    const check = node => {
      if (!(node instanceof Element)) return;
      for (const selector of selectors)
        if (node.matches(selector) || node.querySelector(selector)) seen.push(selector);
    };
    selectors.forEach(selector => document.querySelectorAll(selector).forEach(() => seen.push(selector)));
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(check)))
      .observe(document.body, { subtree: true, childList: true });
  }, predictionSelectors);
}

export async function verifyNextEditAbsent({ page, file, requests, urls, setPhase }, result) {
  setPhase('next-edit');
  const before = requests.filter(request => request.phase === 'next-edit').length;
  await page.keyboard.press('Escape');
  await page.keyboard.press('ControlOrMeta+a');
  await page.keyboard.insertText('function first() {\n  return 0;\n}\n\nfunction second() {\n  return 0;\n}\n');
  await saveFile(page, file);
  // Edit one site, accept a suggestion, then move: the pattern a next-edit jump would follow.
  for (const line of [2, 6]) {
    await page.keyboard.press('ControlOrMeta+Home');
    for (let index = 1; index < line; index++) await page.keyboard.press('ArrowDown');
    await page.keyboard.press('End');
    const sent = requests.length;
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.insertText(' ');
    await until(page, () => requests.length > sent, `No autocomplete request while editing line ${line}`);
    await page.locator('.cursor-ghost-text').first().waitFor({ timeout: 25000 });
    await pressTab(page);
    await page.waitForTimeout(1500);
  }
  await saveFile(page, file);
  await page.waitForTimeout(3000);
  const nodes = await page.evaluate(() => globalThis.openvisionPredictionNodes ?? null);
  if (nodes === null) throw new Error('Prediction DOM observer was not installed');
  const present = await page.evaluate(selectors => selectors.filter(selector => document.querySelector(selector)), predictionSelectors);
  const traffic = predictionRequests(urls);
  Object.assign(result, { completion_requests: requests.filter(request => request.phase === 'next-edit').length - before,
    renderer_requests: urls.length, prediction_requests: traffic, prediction_nodes: nodes, prediction_nodes_present: present });
  if (traffic.length) throw new Error(`Cursor-prediction traffic observed: ${traffic.join(', ')}`);
  if (nodes.length || present.length) throw new Error(`Next-edit jump hint shown: ${[...nodes, ...present].join(', ')}`);
  return result;
}
