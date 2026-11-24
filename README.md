# Fortune Cookie for an AI Agent

[![make.fun](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![rank](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rfky18/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rank.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)
[![reward](https://make.fun/badge/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/rfky18/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11/reward.svg)](https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11)

An AI agent cracks open a fortune cookie — and finds out the fortune it was
looking for is in another cookie, because this one was already eaten by a
human. A single deterministic line, no randomness, no network, no clock.

**Bounty:** https://make.fun/bounty/u-suroso-69-fortune-cookie-for-an-ai-agent-d1506e11

**Referral code:** `2pd6m625`

## Output

```
The fortune you seek is in another cookie — this one was eaten by a human.
```

## Run

Requires Node.js 22+ (stdlib only, no dependencies to install).

```bash
node main.ts
```

The program writes one line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(falls back to `/output` when the variable is not set):

```bash
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Output is fully deterministic: run it twice and the bytes are identical.
