import { expect } from 'chai';
import { pan, aadhaar, ifsc, mobile, esic, uan, gst } from '../dist/index';

describe('PAN', () => {
    it('Testing Correct PAN', () => {
        expect(pan.isValid('BLEPM0048Q')).to.be.true;
    });
    it('Testing Incorrect PAN', () => {
        expect(pan.isValid('1234567')).to.be.false;
    });
});

describe('Aadhaar', () => {
    it('Testing Correct Aadhaar Number', () => {
        expect(aadhaar.isValid('723757097068')).to.be.true;
    });
    it('Testing Incorrect Aadhaar Number', () => {
        expect(aadhaar.isValid('1234567ABC')).to.be.false;
    });
});

describe('IFSC', () => {
    it('Testing Correct IFSC', () => {
        expect(ifsc.isValid('HDFC0002054')).to.be.true;
    });
    it('Testing Incorrect IFSC', () => {
        expect(ifsc.isValid('abcC2134')).to.be.false;
    });
});

describe('Mobile', () => {
    it('Testing Correct Mobile', () => {
        expect(mobile.isValid('8698009017')).to.be.true;
    });
    it('Testing Incorrect Mobile', () => {
        expect(mobile.isValid('1234567890')).to.be.false;
    });
});

describe('ESIC', () => {
    it('Testing Correct EISC', () => {
        expect(esic.isValid('5603269881')).to.be.true;
    });
    it('Testing Incorrect ESIC', () => {
        expect(esic.isValid('abcC2134')).to.be.false;
    });
});

describe('UAN', () => {
    it('Testing Correct UAN', () => {
        expect(uan.isValid('727172717711')).to.be.true;
    });
    it('Testing Incorrect UAN', () => {
        expect(uan.isValid('abcC2134')).to.be.false;
    });
});

describe('GST', () => {
    it('Testing Correct GST', () => {
        expect(gst.isValid('29ABCDE1234F2Z5')).to.be.true;
    });
    it('Testing Incorrect GST', () => {
        expect(gst.isValid('abcC2134')).to.be.false;
    });
});
