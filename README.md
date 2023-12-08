# Turbo caches incomplete results.


* `docs/build.js` creates a file in docs/dist after a delay
* `web/lint.js` fails with exit code 1 before build completes

Steps to reproduce:

1. `pnpm install`
2. `pnpm turbo build lint`
3. `pnpm turbo build`

Expected result:

`apps/docs/dist` is created with content.

Actual result:

`apps/docs/dist` does not exist

```
docs:build: cache hit, replaying logs d7849613a3a4e98d
docs:build:
docs:build: > docs@1.0.0 build /Users/laat/git/turborepo-repro/apps/docs
docs:build: > node build.js
docs:build:

 Tasks:    1 successful, 1 total
Cached:    1 cached, 1 total
  Time:    58ms >>> FULL TURBO
```
