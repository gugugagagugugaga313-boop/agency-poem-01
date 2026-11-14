// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem
// about agency to /output/entry.txt. The poem is deterministic: the same bytes
// on every run. The gate takes UTF-8 text of 1 to 1,000 characters that is not
// only white space, and the judge reads exactly the bytes written, so the poem
// is written with no trailing line end.
//
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'By six the agent had finished everything:',
  'ten versions of the letter, the plan, the day.',
  'Each correct. Each complete.',
  'None of them mine.',
  '',
  'Until I pointed and said this one —',
  'the one with the window open,',
  'the sentence that sounds like me',
  'on a good day.',
  '',
  'It did the making.',
  'I did the choosing.',
  'That was the arrangement all along:',
  'not the hands.',
  'The yes.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
