# Demo Web Shop Automation

UI automation testing project for the **Demo Web Shop** application using **Playwright** and the **Page Object Model (POM)**.

## Project Overview

This project automates three UI testing scenarios:

### Q1 — Invalid Login

- Attempt to log in using an invalid email/password combination.
- Verify that the appropriate error message is displayed.
- Verify that the user is not logged in.

### Q2 — Register + Add Product to Cart

- Register a new customer.
- Log in with the newly registered account.
- Navigate to a product category.
- Select a product.
- Add the product to the shopping cart.
- Verify that the correct product and quantity appear in the cart.

### Q3 — Product Search → Checkout → Order Confirmation

- Search for a product.
- Verify that the correct product appears in the search results.
- Open the product.
- Increase the quantity.
- Add the product to the shopping cart.
- Check the agreement/terms checkbox.
- Proceed to checkout.
- Complete the order.
- Verify the order confirmation.
- Verify the order details.

## Technology Stack

- **Language:** JavaScript
- **Automation Framework:** Playwright
- **Test Runner:** Playwright Test
- **Design Pattern:** Page Object Model (POM)
- **Browser:** Chromium and Firefox
- **Reporting:** Playwright HTML Report and Allure Report
- **Version Control:** Git and GitHub

## Project Structure

```text
Demo_Web_Shop_Automation/
│
├── pages/
│   └── Page Object classes
│
├── test-data/
│   └── Test data used by the automation tests
│
├── tests/
│   ├── invalidLogin.spec.js
│   └── Other scenario test files
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Conducting the test steps

1. Install the following before running the project:

- Node.js
- npm
- Playwright browsers
- Allure Commandline

Check Node.js and npm:

```bash
node --version
npm --version
```

Check Allure:

```bash
allure --version
```

2. Installation

**Git Workflow**

This project follows a feature-branch workflow. A separate branch is maintained for each assignment question and completed work is merged into the `main` branch.

Clone the repository:

```bash
git clone https://github.com/humayrasiddika22/Demo_Web_Shop_Automation.git
```

Navigate to the project directory:

```bash
cd Demo_Web_Shop_Automation
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

3. Running Tests

**Run all tests**

```bash
npx playwright test
```

**Run all tests in headed mode**

```bash
npx playwright test --headed
```

**Run Q1 — Invalid Login**

```bash
npx playwright test tests/q1_invalidLogin.spec.js
```

To run Q1 with the browser visible:

```bash
npx playwright test tests/q1_invalidLogin.spec.js --headed
```

**Run Q2 — Register + Add Product to Cart**

Run the Q2 test file from the `tests` directory:

```bash
npx playwright test tests/<Q2-test-file>.spec.js
```

**Run Q3 — Product Search and Checkout**

Run the Q3 test file from the `tests` directory:

```bash
npx playwright test tests/<Q3-test-file>.spec.js
```

> Replace the Q2 and Q3 placeholders with the actual filenames used in the repository.

**Running Tests Independently**

Each scenario is designed to be runnable independently.
For example:

```bash
npx playwright test tests/q1_invalidLogin.spec.js --headed
```

Q2 and Q3 can also be executed individually by specifying their respective test files.

4.  Playwright HTML Report

The project is configured to generate the Playwright HTML report after test execution.
Run the tests:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

The generated report is stored in:

```text
playwright-report/
```

The report contains test results, execution information, errors and test attachments.

5. Allure Report

The project uses `allure-playwright` to generate Allure test results.
Run the tests:

```bash
npx playwright test
```

Generate the Allure report:

```bash
allure generate allure-results --clean -o allure-report
```

Open the Allure report:

```bash
allure open allure-report
```

The generated Allure report is stored in:

```text
allure-report/
```

Allure results are stored in:

```text
allure-results/
```

6. Screenshots

Screenshots are configured in Playwright and are captured during test execution.
The Playwright configuration uses:

```javascript
screenshot: 'on'
```

This allows screenshots to be attached to the generated test reports.

## Report Generation Flow

```text
Run Playwright Tests
        │
        ├── Playwright HTML Report
        │       └── playwright-report/
        │
        └── Allure Test Results
                └── allure-results/
                        │
                        ▼
                  Allure Report
                        └── allure-report/
```

## Test Reports

**Playwright HTML Report**

The Playwright HTML report provides an overview of test execution, including passed/failed tests, execution details and attachments.

![Playwright HTML Report](/reports/HTML-report.jpg)

**Allure Report**

The Allure report provides detailed test execution information, including test status, steps, duration and attachments.

![Allure Report 1](/reports/allure-report1.jpg)

![Allure Report 2](/reports/allure-report2.jpg)


## Playwright Configuration

The project uses the `tests` directory as the Playwright test directory.
The reporting configuration includes:

- Playwright HTML reporter
- Allure Playwright reporter
- Screenshots
- Trace collection on the first retry

## Git Branch Strategy

The project follows a separate branch for each question:

```text
main
├── Q1 - Invalid Login
├── Q2 - Register + Add Product to Cart
└── Q3 - Product Search → Checkout → Order Confirmation
```

Each question is developed on its own branch and merged into the `main` branch after completion.

## GitHub Repository

Repository:

https://github.com/humayrasiddika22/Demo_Web_Shop_Automation

## Author

**Humayra Siddika**

GitHub:

https://github.com/humayrasiddika22

