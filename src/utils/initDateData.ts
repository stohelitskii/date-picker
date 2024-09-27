import { DateData, DateItemName } from '../types';

type InitDateDataProps = {
  date?: number;
};

const initDateData = ({ date }: InitDateDataProps): DateData => {
  return {
    date: date ? new Date(date) : new Date(),
    get items(): { [key in DateItemName]: number } {
      return {
        day: this.date.getDate(),
        month: this.date.getMonth(),
        year: this.date.getFullYear(),
      };
    },
    get timestamp() {
      return this.date.getTime();
    },
  };
};

export default initDateData;
