import { Root } from "./root";
import { PAN_REGEX } from "./constants";
import { extractTextFromImage } from "./ocr";

export default class PAN extends Root {
    constructor() {
        super(PAN_REGEX)
    }

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
