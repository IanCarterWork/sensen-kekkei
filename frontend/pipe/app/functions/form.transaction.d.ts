export declare type TFormTransactionsElements = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
export declare type TFormTransactionsRecords = {
    [name: string]: TFormTransactionsElements | TFormTransactionsElements[];
};
export declare type TFormTransactionsResults = {
    [name: string]: any;
};
export default class SensenFormTransactions {
    form: HTMLFormElement;
    elements: HTMLFormControlsCollection;
    data: FormData;
    records: TFormTransactionsRecords;
    results: TFormTransactionsResults;
    static state(form: HTMLFormElement): SensenFormTransactions;
    constructor(form: HTMLFormElement);
    recolts(): this;
    consolidated(): this;
}
