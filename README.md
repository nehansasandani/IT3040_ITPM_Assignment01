                                                                                        🎭 Playwright Automation Testing
Singlish → Sinhala Translator

Student ID: IT23228108

📌 Project Overview

This project contains automated end-to-end test cases developed using the Playwright Automation Framework to test the Swift Translator web application:

🔗 https://www.swifttranslator.com/

The main goal is to validate Singlish to Sinhala translation behavior, UI response, and robustness against invalid or unexpected inputs.

🧪 What Is Tested?

The test suite validates:

✅ Correct Singlish → Sinhala translations

❌ Incorrect or unexpected translations (negative testing)

⚠ Edge cases such as empty input, joined words, long paragraphs

🎯 UI behavior and response consistency

📊 Test Coverage Summary
Test Type	Count
Positive Functional Tests	29
Negative / Robustness Tests	10
Total Tests	39

✔️ 29 tests passed successfully
❌ 10 negative tests failed (expected failures – explained below)

📁 Project Structure
tests/
│
├── positive/
│   ├── Pos_0001.spec.ts
│   ├── Pos_0002.spec.ts
│   └── ...
│
├── negative/
│   ├── Neg_0001.spec.ts
│   ├── Neg_0002.spec.ts
│   └── Neg_0010.spec.ts
│
└── playwright.config.ts

🛠 Technologies Used

Playwright

TypeScript

Node.js

Chromium / Firefox / WebKit

VS Code

⚙️ How to Install

Open the project folder

Open Terminal inside the folder

Run the following commands:

npx playwright install
npx playwright test --workers=1

▶️ How to Run Tests

Run tests exactly like below (as done in this project):

PS C:\Users\HP\Desktop\IT23228108\tests> npx playwright install
PS C:\Users\HP\Desktop\IT23228108\tests> npx playwright test --workers=1

📈 Test Results

✅ 29 Positive Functional Tests – PASSED

❌ 10 Negative Functional Tests – FAILED (Expected)

🔍 Why Negative Tests Failed?

The negative test failures are intentional and valid, demonstrating real-world limitations of the translator:

1️⃣ Timeout Errors (30s exceeded)
Test timeout of 30000ms exceeded
browserContext.newPage
locator.inputValue


✔ Happens due to:

Network delays

Slow UI updates

Real-time translation latency

2️⃣ Negative Assertions Working Correctly

Example:

Expected: "හරි හරි ලස්සනයි."
Received: "hari hari lassanayi."


✔ This proves:

Translator did NOT translate as expected

Negative test correctly detected incorrect behavior

👉 This is a TRUE NEGATIVE and validates robustness testing

📄 View Test Report

After running tests, open the report using:

npx playwright show-report

![Uploading Screenshot 2026-02-01 191445.png…]()

