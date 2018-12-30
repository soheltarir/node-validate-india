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
