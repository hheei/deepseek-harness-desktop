import type { PresetTable } from '../../../shared/model-presets'

export const PRESET_FIXTURE: PresetTable = {
  'claude-3-5-sonnet': {
    input: ['text', 'image'],
    reasoning: false,
    reasoningEfforts: false,
    contextWindow: 200000,
    maxTokens: 8192,
  },
  'deepseek-reasoner': {
    input: ['text'],
    reasoning: true,
    reasoningEfforts: { low: 'low', medium: 'medium', high: 'high' },
    contextWindow: 131072,
    maxTokens: 65536,
  },
  'gemini-2.5-flash': {
    input: ['text', 'image'],
    reasoning: true,
    reasoningEfforts: { low: 'low', medium: 'medium', high: 'high' },
    contextWindow: 1048576,
    maxTokens: 65535,
  },
  'gpt-4o': {
    input: ['text', 'image'],
    reasoning: false,
    reasoningEfforts: false,
    contextWindow: 128000,
    maxTokens: 16384,
  },
  'kimi-k2-thinking': {
    input: ['text'],
    reasoning: true,
    reasoningEfforts: { low: 'low', medium: 'medium', high: 'high' },
    contextWindow: 262144,
    maxTokens: 262144,
  },
  'mimo-v2-flash': {
    input: ['text'],
    reasoning: true,
    reasoningEfforts: { low: 'low', medium: 'medium', high: 'high' },
    contextWindow: 131072,
    maxTokens: 32768,
  },
  'o3': {
    input: ['text', 'image'],
    reasoning: true,
    reasoningEfforts: { low: 'low', medium: 'medium', high: 'high' },
    contextWindow: 200000,
    maxTokens: 100000,
  },
  'qwen3-32b': {
    input: ['text'],
    reasoning: true,
    reasoningEfforts: { low: 'low', medium: 'medium', high: 'high' },
    contextWindow: 40960,
    maxTokens: 40960,
  },
}
