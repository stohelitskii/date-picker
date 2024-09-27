import { useState } from 'react';

export type UseNavigationDate = {
  navigationDate: Date;
  handlerSetNextYear: () => void;
  handlerSetPrevYear: () => void;
  handlerSetNextMonth: () => void;
  handlerSetPrevMonth: () => void;
};

export const useNavigationDate = (): UseNavigationDate => {
  const [navigationDate, setNavigationDate] = useState<Date>(() => {
    return new Date();
  });

  const handlerSetNextYear = () => {
    setNavigationDate((prevDate) => {
      const currentYear = prevDate.getFullYear();
      const createDate = new Date(prevDate);
      createDate.setFullYear(currentYear + 1);

      return createDate;
    });
  };

  const handlerSetPrevYear = () => {
    setNavigationDate((prevDate) => {
      const currentYear = prevDate.getFullYear();
      const createDate = new Date(prevDate);
      createDate.setFullYear(currentYear - 1);

      return createDate;
    });
  };

  const handlerSetNextMonth = () => {
    setNavigationDate((prevDate) => {
      const currentMonth = prevDate.getMonth();
      const createDate = new Date(prevDate);
      createDate.setMonth(currentMonth + 1);

      return createDate;
    });
  };

  const handlerSetPrevMonth = () => {
    setNavigationDate((prevDate) => {
      const currentMonth = prevDate.getMonth();
      const createDate = new Date(prevDate);
      createDate.setMonth(currentMonth - 1);

      return createDate;
    });
  };

  return {
    navigationDate,
    handlerSetNextYear,
    handlerSetPrevYear,
    handlerSetNextMonth,
    handlerSetPrevMonth,
  };
};
