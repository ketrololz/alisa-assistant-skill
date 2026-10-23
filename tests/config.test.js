import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
test('Vercel exposes /api', () => { const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url))); assert.equal(config.rewrites[0].source, '/api'); });
