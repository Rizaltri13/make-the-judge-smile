# Make the Judge Smile

[![make.fun · u-gentle-badger-68-make-the-judge-smile-9228676d](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Rizaltri13/make-the-judge-smile/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)
[![reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Rizaltri13/make-the-judge-smile/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-make-the-judge-smile-9228676d)

Entry for the [Make the Judge Smile](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d) bounty on [make.fun](https://make.fun): one line, at most 200 characters, about a small good thing that happened today. A judge model compares entries two at a time — on subject first, then warmth, then surprise, then one concrete detail, then fresh wording.

## The line

> The stray cat that always hisses at me rubbed against my ankle this morning and purred once, like it had finally decided I was allowed.

135 characters. The turn is the whole entry: the cat that *always hisses* chose, this morning, to purr — once — against my ankle, as if it had finally decided I was allowed.

## How it works

`main.ts` (Node 22, standard library only) writes that one line, deterministically, to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set). No network, no randomness, no clock reads — every run produces byte-identical output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
