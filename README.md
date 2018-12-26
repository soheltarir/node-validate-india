# node-validate-india
Module to validate Indian mobile numbers, Aadhaar, PAN, GST, etc.

[![npm version](https://badge.fury.io/js/validate-india.svg)](https://badge.fury.io/js/validate-india)

## Installation
```sh
npm install validate-india --save
```

## Usage

### Javascript

```javascript
var pan = require('validate-india').pan;

if (pan.isValid('BMEQ0056N')) {
    console.log('Valid PAN provided');
} else {
    console.log('Invalid PAN provided');
}
```

### Typescript

```typescript
import { pan } from 'validate-india';

f (pan.isValid('BMEQ0056N')) {
    console.log('Valid PAN provided');
} else {
    console.log('Invalid PAN provided');
}
```
