# TypeScript Practice App

A simple TypeScript project for learning and practicing TypeScript features:
- Types and interfaces
- Enums
- Functions and generics
- Modules and imports
- Async/Await

## Requirements
- Node.js >= 14
- npm >= 6

## Setup
1. Clone repository:
```bash
git clone <repository-url>
cd ts-practice-app
```
2. Install dependencies:
```bash
npm install
```
3. Build project:
```bash
npm run build
```
4. Run project:
```bash
npm start
```
Or for development:
```bash
npm run dev
```

## Sample Output
```
=== TypeScript Practice App ===

Created Users:
[
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'ADMIN' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'USER' }
]

Math Examples:
Add 5 + 10 = 15
Multiply 3 * 4 = 12
Multiply 'Hello' + 'World' = HelloWorld

Fetching user from API...
Fetched User: { id: 100, name: 'User100', email: 'user100@example.com', role: 'GUEST' }
```