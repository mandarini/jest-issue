# Import `enum` in Storybook-configured app

1. `yarn` to install dependencies
2. `nx test web` to run the tests for the `web` app

Look at the following files:

- `enum` declaration: [`libs/data/src/lib/data.ts`](libs/data/src/lib/data.ts)
- `enum` usage in `web` app component: [`apps/web/src/app/kater/kater.tsx`](apps/web/src/app/kater/kater.tsx)
- `enum` usage in `web` app story: [`apps/web/src/app/kater/kater.stories.tsx`](apps/web/src/app/kater/kater.stories.tsx)
