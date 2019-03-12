declare type PrintTypes = 'pdf' | 'html' | 'image' | 'json';

export interface Configuration {
  printable: any;
  fallbackPrintable?: string;
  type?: PrintTypes;
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
  onError?: (error: any) => void;
  onPrintDialogClose?: () => void;
  onPdfOpen?: () => void;
}

declare function printJS(source: string, type?: PrintTypes): void;
declare function printJS(configuration: Configuration): void;

export default printJS;
