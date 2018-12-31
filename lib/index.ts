import { PAN_REGEX, AADHAAR_REGEX, IFSC_REGEX, MOBILE_REGEX, UAN_REGEX, ESIC_REGEX, GST_REGEX } from "./constants";
import { Root, OcrRoot } from "./root";

// Personal Account Number
export const pan = new OcrRoot(PAN_REGEX);
// Aadhaar Number
export const aadhaar = new OcrRoot(AADHAAR_REGEX, /[\s-]/g);
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
