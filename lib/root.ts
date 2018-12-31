import { extractTextFromImage } from "./ocr";

/**
 * Base class to validate documents IDs
 *
 * @export
 * @class Root
 */
export class Root {
    protected regex: RegExp;

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
     * @returns {(Promise<string | null>)} Document number
     * @memberof OcrRoot
     */
    public async extractFromImage(uri: string): Promise<string | null> {
        let text = await extractTextFromImage(uri);
        let textTokens = text.split('\n');
        let result: string | null = null;
        textTokens.forEach((token: string) => {
            if (this.regex.test(token)) {
                result = token;
                return;
            }
        });
        return result;
    }
}