# WP Playground E2E Playwright Template

A basic configuration template for running WordPress E2E tests using Playwright and WP Playground.

## Getting started

Install dependencies:

```sh
nvm use
npm install
npx playwright intstall
```

## Running tests

The server does not need to be manually started. A fresh instance will be provisioned by Playwright each time the tests are run. See the `webServer` entry in `playwright.config.ts`.

Run all tests:

```sh
npm run test:e2e
```

Run all tests in debug mode:

```sh
npm run test:e2e:debug
```

Run test with a specific browser:

```sh
npm run test:e2e:chromium # or firefox, or webkit.
```
