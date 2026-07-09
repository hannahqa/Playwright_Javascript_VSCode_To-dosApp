# Playwright JavaScript TodoMVC Automation Project

This is a beginner automation testing project using **Playwright** with **JavaScript**.

The project tests a React TodoMVC application by automating common user actions such as adding todo items, completing tasks, filtering tasks, and clearing completed items.

## Application Under Test

TodoMVC React App:

https://todomvc.com/examples/react/dist/

## Tools and Technologies

- Playwright
- JavaScript
- Node.js
- VS Code
- GitHub
- GitHub Desktop

## Project Structure

```text
Playwright_Javascript_VSCode_To-dosApp
├── tests
│   └── todo.spec.js
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Install

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run

Open Playwright Codegen for the TodoMVC React app:

```bash
npx playwright codegen https://todomvc.com/examples/react/dist/
```

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run sanity tests only:

```bash
npx playwright test --grep "@sanity"
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

Run tests in debug mode:

```bash
npx playwright test --debug
```

Open Playwright HTML report:

```bash
npx playwright show-report
```
