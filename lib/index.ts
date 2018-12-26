import { PAN_REGEX, AADHAAR_REGEX, IFSC_REGEX, MOBILE_REGEX, UAN_REGEX, ESIC_REGEX, GST_REGEX } from "./constants";

class Root {
    private regex: RegExp;

    constructor(regex: string) {
        this.regex = new RegExp(regex);
    }
    
    public isValid(value: string | number): boolean {
        if (typeof value === 'number') {
            value = value.toString();
        }
        return this.regex.test(value);
    }
}

// Personal Account Number
export const pan = new Root(PAN_REGEX);
// Aadhaar Number
export const aadhaar = new Root(AADHAAR_REGEX);
// Bank's Financial System Code
export const ifsc = new Root(IFSC_REGEX);
// Indian Mobile Number
export const mobile = new Root(MOBILE_REGEX);
// Employees' State Insurance Corporation
export const esic = new Root(ESIC_REGEX);
// Universal Account Number
export const uan = new Root(UAN_REGEX);
// GST
export const gst = new Root(GST_REGEX);
