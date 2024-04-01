export interface ConvertingSocketType {
  downloaded: number;
  total: number;
}

export interface BaseModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export interface FormType {
  host: string;
  isVideo: boolean;
}

export interface ThemeType {
  bgBlue: string;
  lightGrey: string;
  light: string;
  red: {
    light: string;
    main: string;
  };
  blue: {
    main: string;
  };
  orange: string;
  modalBg: string;
}
