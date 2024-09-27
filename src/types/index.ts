export type Location =
  | 'ru-RU'
  | 'es-ES'
  | 'en-EN'
  | 'fr-FR'
  | 'de-DE'
  | 'it-IT'
  | 'pl-PL'
  | 'nl-NL'
  | 'pt-PT'
  | 'fi-FI';

export type FirstWeekDay = 'sunday' | 'monday';

export enum DayFormat {
  D = 'd',
  DD = 'dd',
}

export enum MonthFormat {
  M = 'm',
  MM = 'mm',
}

export enum YearFormat {
  YY = 'yy',
  YYYY = 'yyyy',
}

export type DataFromDateFormat = (DayFormat | MonthFormat | YearFormat)[];

export enum DateItemName {
  day = 'day',
  month = 'month',
  year = 'year',
}

export type DateFormatType = 'numeric' | '2-digit';

export enum DateFormatSeparator {
  '.' = '.',
  '/' = '/',
}

export type DateFormatSchemaItem = {
  name: DateItemName;
  type: DateFormatType;
};

export type DateFormatSchema = DateFormatSchemaItem[];

export type DateData = {
  date: Date;
  timestamp: number;
  items: {
    [key in DateItemName]: number;
  };
};

export type DatePickerTheme = 'dark' | 'light';
