export declare type DataStackServiceMethods = 'GET' | 'POST' | 'PUT' | 'OPTIONS' | 'PATCH' | 'DISPATCH' | 'HEAD' | 'DELETE' | 'CONNECT' | 'TRACE' | 'TOGGLE';
export declare type DataStackServiceOutput = '-arraybuffer' | '-blob' | '-text' | '-formdata' | '-json';
export declare type DataStackServiceSettings = {
    Provider?: string;
    NativeProvider?: string;
    Lang: string;
    APIKey: string;
    AppiD?: string;
    Version?: string;
    PiD?: number;
};
export declare type DataStackServiceOptions = RequestInit & {};
export declare type DataStackServiceEvents<T extends DataStackServiceResponseData> = {
    Complete?: (response: T) => void;
    Success: (response: T) => void;
    Fail?: (response: T) => void;
    Error?: (response: T) => void;
};
export declare type DataStackServiceResponseData = {
    [K: string]: any;
};
export declare type DataStackServiceProps<T> = DataStackServiceEvents<T> & {
    Name: string;
    Data?: DataStackServiceResponseData;
    FormData?: FormData;
    Method?: DataStackServiceMethods;
    Output?: DataStackServiceOutput;
    ContentType?: string;
    Headers?: {
        [K: string]: string;
    };
    CustomUrl?: string;
};
export declare type DataStackServiceFeatures<T> = DataStackServiceProps<T> & {
    Response?: Response;
    Options?: DataStackServiceOptions;
    Cache?: RequestCache;
    Credentials?: RequestCredentials;
    Redirect?: RequestRedirect;
    ReferrerPolicy?: ReferrerPolicy;
    Url?: string;
    Listener?: Response;
    Handler?: Promise<any>;
    FormData?: FormData;
};
export default class DataStackService<T extends DataStackServiceResponseData> {
    HeadersResponses: Headers;
    Settings: DataStackServiceSettings;
    constructor(settings: DataStackServiceSettings);
    URLTranscriber($URL: string, $Data: T): string;
    ReadFile($File: File, $Load: (reader: FileReader) => void, $Fail: (error: ProgressEvent<FileReader>) => void, $Progress: (error: ProgressEvent<FileReader>) => void): this;
    Send($Features: DataStackServiceFeatures<T>): Promise<DataStackServiceFeatures<T>>;
    EventTrigger($Features: DataStackServiceFeatures<T>, $Name: keyof DataStackServiceEvents<T>, $Args: T): void | null;
    SaveLocalStorage($Data: T): this;
    ResponseParser(r: T): this;
    SetEvents($Features: DataStackServiceFeatures<T>): DataStackServiceFeatures<T>;
    SetFetchHeaders($Features: DataStackServiceFeatures<T>): Headers;
    SetFetchOptions($Features: DataStackServiceFeatures<T>): RequestInit;
    SetFetchURL($Features: DataStackServiceFeatures<T>): string;
    SetFetchOutput($Features: DataStackServiceFeatures<T>): Promise<any>;
    Get<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Post<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Put<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Delete<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Toggle<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Options<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Patch<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Dispatch<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Head<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Connect<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
    Trace<ResponseScheme>($f: DataStackServiceProps<ResponseScheme & T>): Promise<DataStackServiceFeatures<T>>;
}
