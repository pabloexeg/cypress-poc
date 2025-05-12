
# 📘 Skylight POC 

> This POC is an Automation framework for testing E-Commerce Application. 

---

## 🛠 Tech used

- [Cypress](https://www.cypress.io/) v 14.3.3
- TypeScript v5.8.3
- ESLint v9.26.0
- GIT

---

## 🚀 Project Goal

This project should validate when an user adds a product in the cart without Account logged. 
All test must pass and project should meet all tech & test cases required in Challenge file.

---

## ✅ Requeriments

- Node.js (v20.X or higher)
- Git (optional)
- Visual Studio Code (Or another IDE)

### Verify Versions

```bash
node -v
npm -v
npx cypress --version
npx eslint --version
```

---

## 📦 Installation

1. Clone Repo (console):

```bash
git clone https://github.com/pabloexeg/cypress-poc.git
cd cypress-poc
```

2. Install dependencies:

```bash
npm install
```

---

## 🧪 How run

### Execute Cypress UI:

```bash
npm run cy:open
```

### Execute Test in Cypress headless (console):

```bash
npm run cy:run:challenge
```

### Execute ESLint validation:

```bash
npm run lint
```

---

## 📂 Project Structure

```
cypress/
├── e2e/                    # Test Cases (describe/it)
│   └─ChallengeTest.cy.ts   # Automated Test POC solution
├── pages/                  # Clases Page Object
├── locators/               # Locators Pages Ids
├── fixtures/               # Data Test (JSON)
├── support/                # Hooks, custom commands
cypress.config.ts           # Config Cypress
cypress.env.json            # Global Variables
package-lock.json           # Project Dependencies
package.json                # Project Configs
.eslintrc.json              # Config ESLint
tsconfig.json               # Config TypeScript

```

---

## ✨ Scripts `package.json`

```json
"scripts": {
  "cy:open": "cypress open",
  "lint": "eslint . --ext .ts",
  "cy:run:challenge": "cypress run --spec 'cypress/e2e/ChallengeTest.cy.ts'"
}
```

---

## 📄 Fixtures usage
Variables used in test cases to compare these values (Expected result) with Actual Value.

```json
{
  "productName": "espejos",
  "qty": "2",
  "itemNumberFromResultList": "1",
  "criteriaSearchOne": "gratis",
  "criteriaSearchSecondAlt": "Mismo Precio",
  "loginTitle": "¡Hola! Para agregar al carrito, ingresá a tu cuenta"
}
```

Example usage:

```ts
homePage.enterProductOnSearchInput(testVar.productName);
```

---

## 👨‍💻 Good Practices implemented

- Page Object Model
- Locators separeted from Page Object for easy maintenance 
- Fixtures Data usage
- Code Reuse
- ESLint setted

---

## 📬 Contact Information

Develop by: **Pablo Gimenez**  
📧 Email: [pablo.gimenez@crombie.dev]  
---
