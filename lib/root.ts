import { extractTextFromImage } from "./ocr";

/**
 * Base class to validate documents IDs
 *
 * @export
 * @class Root
 */
export class Root {
    protected regex: RegExp;
    private cleanRegex: RegExp | undefined;

    constructor(regex: string, cleanRegex?: RegExp) {
        this.regex = new RegExp(regex);
        if (cleanRegex) {
            this.cleanRegex = cleanRegex;
        }
    }
    
    public isValid(value: string | number): boolean {
        if (typeof value === 'number') {
            value = value.toString();
        }
        return this.regex.test(value);
    }

    public clean(value: string | null | undefined): string | null{
        if (!value) {
            return null;
        }
        if (this.cleanRegex) {
            return value.replace(this.cleanRegex, '');
        } else {
            return value;
        }
    }
}

/**
 * Class to extract Document IDs from image using Google Vision API
 *
 * @export
 * @class OcrRoot
 * @extends {Root}
 */
export class OcrRoot extends Root{
    /**
     * Retrieves Document number from an image url provided
     *
     * @param {string} uri The image URL (should be publicly accessible)
     * @param {boolean} raw Whether to return the raw value extracted from the image instead of cleaning the data
     * @returns {(Promise<string | null>)} Document number
     * @memberof OcrRoot
     */
    public async extractFromImage(uri: string, raw: boolean = false): Promise<string | null> {
        let text = await extractTextFromImage(uri);
        let textTokens = text.split('\n');
        let result: string | null = null;
        textTokens.forEach((token: string) => {
            if (this.regex.test(token)) {
                result = token;
                return;
            }
        });
        return this.clean(result);
    }
}
