export type DateMask = 'dd.mm.yyyy' | 'dd.mm.yy';

export type DateData = {
  formatter: Intl.DateTimeFormat;
  date: Date;
  timestamp: number;
  year: number;
  month: number;
  day: number;
  text: string;
};

export type WeekDayNameData = {
  text: string;
  value: number;
};

export type Location = 'ru-RU' | 'es-ES' | 'en-EN';

export type FirstWeekDay = 'sunday' | 'monday';

export type FormatOption = {
  day?: 'numeric' | '2-digit';
  month?: 'numeric' | '2-digit' | 'long' | 'short';
  year?: 'numeric' | '2-digit';
  weekday?: 'long' | 'short' | 'narrow';
};

export type DatePickerOptions = {
  location: Location;
  firstWeekDay: FirstWeekDay;
  navigationDateFormat: FormatOption;
};

export type DateCells = {
  timestamp: number;
  value: number;
};
