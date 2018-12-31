# node-validate-india
Module to validate and retrieve Indian mobile numbers, Aadhaar, PAN, GST, etc.

[![npm version](https://badge.fury.io/js/validate-india.svg)](https://badge.fury.io/js/validate-india)

## Installation
```sh
npm install validate-india --save
```

## Validations
Below are the list of currently supported documents:
- Aadhaar
- Mobile Number
- PAN
- GST
- Bank IFSC
- ESIC
- UAN

## Retrieval
Below are the list of current supported documents from which data can be retrieved from an image:
- Aadhaar
- PAN

Data from image is extracted using the Google's Vision API, hence, to use this feature you must have
a Google Developers account and the environment variable *GOOGLE_APPLICATION_CREDENTIALS* should be 
set to point to the file path of the JSON file that contains your service account key. For more details
refer the link: [Google Documentation](https://cloud.google.com/vision/docs/quickstart-client-libraries)

## Usage

### Javascript

Below is an example of simple validation
```javascript
var pan = require('validate-india').pan;

if (pan.isValid('BMEQ0056N')) {
    console.log('Valid PAN provided');
} else {
    console.log('Invalid PAN provided');
}
```

Below is an example of retrieval of PAN number using OCR
```javascript
var pan = require('validate-india').pan;

pan.extractFromImage('[ImageURL]').then(res => console.log('PAN Number:', res));
```

### Typescript

Below is an example of simple validation
```typescript
import { pan } from 'validate-india';

f (pan.isValid('BMEQ0056N')) {
    console.log('Valid PAN provided');
} else {
    console.log('Invalid PAN provided');
}
```

Below is an example of retrieval of PAN number using OCR
```javascript
import { pan } from 'validate-india';

const value = await pan.extractFromImage('[ImageURL]');
console.log('PAN Number:', value);
```

## To-Do List
- [ ] Extract Full Name, Father's Name and Date of Birth from PAN using OCR.
- [ ] Extract Full Name, Date of Birth and Gender from Aadhaar Image using OCR.
  
