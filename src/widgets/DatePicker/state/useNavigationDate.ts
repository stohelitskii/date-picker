import { useState } from 'react';
import { DateData, FormatOption, Location } from '../types';
import initDateData from '../utils/initDateData';

export type UseNavigationDateProps = {
  location: Location;
  formatOption: FormatOption;
};

export type UseNavigationDate = {
  navigationDate: DateData;
  setNavigationNextYear: () => void;
  setNavigationPrevYear: () => void;
  setNavigationNextMonth: () => void;
  setNavigationPrevMonth: () => void;
};

const useNavigationDate = ({ location, formatOption }: UseNavigationDateProps): UseNavigationDate => {
  const [navigationDate, setNavigationDate] = useState<DateData>(() => {
    return initDateData({ location, formatOption });
  });

  const setNavigationNextYear = () => {
    setNavigationDate((prevDateData) => {
      const oldYear = prevDateData.year;
      const newYear = prevDateData.date.setFullYear(oldYear + 1);
      return initDateData({ date: newYear, location, formatOption });
    });
  };

  const setNavigationPrevYear = () => {
    setNavigationDate((prevDateData) => {
      const oldYear = prevDateData.year;
      const newYear = prevDateData.date.setFullYear(oldYear - 1);
      return initDateData({ date: newYear, location, formatOption });
    });
  };

  const setNavigationNextMonth = () => {
    setNavigationDate((prevDateData) => {
      const oldMonth = prevDateData.month;
      const newMonth = prevDateData.date.setMonth(oldMonth + 1);
      return initDateData({ date: newMonth, location, formatOption });
    });
  };

  const setNavigationPrevMonth = () => {
    setNavigationDate((prevDateData) => {
      const oldMonth = prevDateData.month;
      const newMonth = prevDateData.date.setMonth(oldMonth - 1);
      return initDateData({ date: newMonth, location, formatOption });
    });
  };

  return {
    navigationDate,
    setNavigationNextYear,
    setNavigationPrevYear,
    setNavigationNextMonth,
    setNavigationPrevMonth,
  };
};

export default useNavigationDate;
