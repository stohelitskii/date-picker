import { Location, FormatOption, DateData } from '../types';

type InitDateDataProps = {
  date?: number;
  location: Location;
  formatOption: FormatOption;
};

const initDateData = ({ date, location, formatOption }: InitDateDataProps): DateData => {
  const formatter = new Intl.DateTimeFormat(
    location as Intl.LocalesArgument,
    formatOption as Intl.DateTimeFormatOptions
  );

  return {
    formatter: formatter,
    date: date ? new Date(date) : new Date(),
    get timestamp() {
      return this.date.getTime();
    },
    get year() {
      return this.date.getFullYear();
    },
    get month() {
      return this.date.getMonth();
    },
    get day() {
      return this.date.getDate();
    },
    get text() {
      return this.formatter.format(this.date);
    },
  };
};

export default initDateData;
