# Testing with TypeScript project

## Step to run

```
$npm init -y
```

Install depednencies
```
$npm install --save-dev typescript jest ts-jest @types/jest
```

Run test
```
$npm test
> testable@1.0.0 test
> jest

 PASS  __tests__/create.greeting.specs.ts
  should create a greeting for a user
    ✓ should return a greeting with the name (1 ms)
    ✓ should return a greeting with the name and surname

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.522 s, estimated 1 s
Ran all test suites.
```

### Code example from article
* https://medium.com/@tlacenka/how-to-write-high-quality-test-code-d34ec4a749ef