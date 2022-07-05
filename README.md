## **Cypress for Login and Registration**

### **Prerequsities**

- **Node 16+**

## Requirements

#### 1. Clone the repository

`git clone https://github.com/Elizaveta1105/projectConduit.git`

#### 2. Set up dependencies by running:

`npm init `
`npm install cypress --save-dev`
`npm i @faker-js/faker`

#### 3. Testing phase
The project uses [cypress](https://www.cypress.io/) for automation tests.

- For running tests localy use `npm run cy:open` command and choose test suite to run
- For running tests headless via Chrome or FF, use `npm run cy:headless:chrome` or `npm run cy:headless:ff`
- For running tests headed via Chrome or FF, use `npm run cy:headed:chrome` or `npm run cy:headed:ff`