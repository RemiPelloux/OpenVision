import { completionQualityCorpus, corpusCase } from './completion-quality-corpus.mjs';

// Recorded fixture replies for proving the quality harness without quota.
// They are authored here, not captured from a model, and every result that
// uses them is labelled as a fixture run.
export const qualityFixtureSets = Object.freeze(['good', 'bad', 'truncated', 'markdown']);

export function qualityFixtureReply(set, context, corpus = completionQualityCorpus) {
  const entry = corpus.map(corpusCase).find(item => item.language === context.language &&
    item.before.endsWith(context.prefix) && item.after.startsWith(context.suffix));
  if (!entry) return { content: '' };
  const answer = entry.exact[0];
  const usage = { prompt_tokens: Math.ceil((context.prefix.length + context.suffix.length) / 4) + 60,
    completion_tokens: Math.ceil(answer.length / 4) };
  usage.total_tokens = usage.prompt_tokens + usage.completion_tokens;
  if (set === 'good') return { content: answer, usage };
  // Parseable in most languages but never the requested code.
  if (set === 'bad') return { content: 'unrelatedValue', usage };
  if (set === 'truncated') return { content: answer.slice(0, Math.ceil(answer.length / 2)), finish_reason: 'length' };
  if (set === 'markdown') return { content: `\`\`\`${entry.language}\n${answer}\n\`\`\``, usage };
  throw Error(`Unknown fixture set ${set}`);
}
