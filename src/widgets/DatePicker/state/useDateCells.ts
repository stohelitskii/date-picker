import { useMemo } from 'react';

import { DateCells, DateData, FirstWeekDay } from '../types';
import { AMOUNT_DAY_IN_WEEK, SUNDAY_INDEX_IS_DEFAULT, SUNDAY_INDEX_IS_LAST } from '../constants';

type UseDateCellsProps = {
  navigationDate: DateData;
  firstWeekDay: FirstWeekDay;
};

export type UseDateCells = {
  dateCells: DateCells[];
};

const useDateCells = ({ navigationDate: { year, month }, firstWeekDay }: UseDateCellsProps): UseDateCells => {
  const prevMonthLastDay = useMemo(() => new Date(year, month, 0).getDate(), [year, month]);

  const currentMonthFirstDay = useMemo(() => new Date(year, month, 1).getDate(), [year, month]);

  const currentMonthLastDay = useMemo(() => new Date(year, month + 1, 0).getDate(), [year, month]);

  const currentMonthFirstWeekDay = useMemo(() => {
    switch (true) {
      case firstWeekDay === 'monday' && new Date(year, month, 1).getDay() === SUNDAY_INDEX_IS_DEFAULT:
        return SUNDAY_INDEX_IS_LAST;
      case firstWeekDay === 'monday':
        return new Date(year, month, 1).getDay() - 1;
      default:
        return new Date(year, month, 1).getDay();
    }
  }, [year, month, firstWeekDay]);

  const currentMonthLastWeekDay = useMemo(() => {
    switch (true) {
      case firstWeekDay === 'monday' && new Date(year, month + 1, 0).getDay() === SUNDAY_INDEX_IS_DEFAULT:
        return SUNDAY_INDEX_IS_LAST;
      case firstWeekDay === 'monday':
        return new Date(year, month + 1, 0).getDay() - 1;
      default:
        return new Date(year, month + 1, 0).getDay();
    }
  }, [year, month, firstWeekDay]);

  const prevMonthAmountDays = useMemo(() => currentMonthFirstWeekDay - 1, [currentMonthFirstWeekDay]);

  const nextMonthAmountDays = useMemo(() => AMOUNT_DAY_IN_WEEK - currentMonthLastWeekDay, [currentMonthLastWeekDay]);

  const prevMonthDayList = useMemo(() => {
    const list: DateCells[] = [];
    for (let currentDay = prevMonthLastDay; prevMonthLastDay - prevMonthAmountDays <= currentDay; currentDay--) {
      list.push({ timestamp: new Date(year, month - 1, currentDay).getTime(), value: currentDay });
    }

    return list.reverse();
  }, [year, month, prevMonthLastDay, prevMonthAmountDays]);

  const currentMonthDayList = useMemo(() => {
    const list: DateCells[] = [];

    for (let currentDay = currentMonthFirstDay; currentDay <= currentMonthLastDay; currentDay++) {
      list.push({ timestamp: new Date(year, month, currentDay).getTime(), value: currentDay });
    }

    return list;
  }, [year, month, currentMonthFirstDay, currentMonthLastDay]);

  const nextMonthDayList = useMemo(() => {
    const list: DateCells[] = [];

    for (let currentDay = 1; currentDay < nextMonthAmountDays; currentDay++) {
      list.push({ timestamp: new Date(year, month + 1, currentDay).getTime(), value: currentDay });
    }
    return list;
  }, [year, month, nextMonthAmountDays]);

  return { dateCells: [...prevMonthDayList, ...currentMonthDayList, ...nextMonthDayList] };
};

export default useDateCells;
