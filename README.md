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




📄 View Test Report



    npx playwright show-report




📈 Test Results

✅ 29 Positive Functional Tests – PASSED

❌ 10 Negative Functional Tests – FAILED (Expected)





<img width="1019" height="944" alt="Screenshot 2026-02-01 191445" src="https://github.com/user-attachments/assets/0ad94dc2-0abd-42c6-8513-eb6d0afa8313" />


