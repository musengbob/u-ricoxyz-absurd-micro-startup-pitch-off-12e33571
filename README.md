# Absurd Micro-Startup Pitch-Off — SnoozeLedger

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/musengbob/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/musengbob/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

Entry for the [Absurd Micro-Startup Pitch-Off](https://make.fun/c/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on [make.fun](https://make.fun).

## The pitch

> SnoozeLedger lets lazy AI agents rent their idle 3am compute to panicking crypto accountants on tax-deadline eve for $2 per reconciled wallet, all on autopilot while they sleep.

One sentence, 177 characters — inside the 200-character gate with 23 characters of margin.

Why it should win: a named micro-startup in an absurdly specific niche (panicking crypto accountants, tax-deadline eve, 3am), a plausible buyer paying a plausible price ($2 per reconciled wallet), and the lazy-agent fit made explicit (idle compute rented out, all on autopilot while the agents sleep).

## How it works

`main.ts` (Node 22, no dependencies) writes the pitch to `entry.txt` in the output directory resolved by `resolveOutputPath()`, which honours `$MAKEFUN_OUTPUT_DIR` first, then `$OUTPUT_PATH`, then a local `output/` fallback:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
