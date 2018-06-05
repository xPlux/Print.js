import 'print-js/dist/print';

declare type PrintTypes = 'pdf' | 'html' | 'image' | 'json';

export interface Configuration {
    printable: any;
    fallbackPrintable?: string;
    type?: string;
    documentTitle?: string;
    header?: any;
    headerStyle?: string;
    maxWidth?: number;
    properties?: any;
    gridHeaderStyle?: string;
    gridStyle?: string;
    showModal?: boolean;
    onLoadingStart?: () => void;
    onLoadingEnd?: () => void;
    modalMessage?: string;
    frameId?: string;
    ignoreElements?: string | string[];
    imageStyle?: string;
    repeatTableHeader?: boolean;
    css?: string | string[];
    style?: string;
}

declare var printJS: (params: string | Configuration) => void;

export default printJS;
