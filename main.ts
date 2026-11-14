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
  'After supper I asked the agent to write the letter to Mara,',
  'the one I had put off for a month.',
  'Say thank you, I said. Say I miss her.',
  'Keep it short.',
  '',
  'By six it had finished: ten versions,',
  'each correct, each complete.',
  'One of them even sounded like me',
  'on a good day.',
  '',
  'I read them at the kitchen table,',
  'the house quiet, the dishes done,',
  'the coffee gone cold in its cup,',
  'and none of them was mine.',
  '',
  'Until I picked up the pen,',
  'crossed out nine of them,',
  'and wrote at the bottom of the tenth,',
  'in my own hand:',
  '',
  'Forgive me. I was the one who left.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
