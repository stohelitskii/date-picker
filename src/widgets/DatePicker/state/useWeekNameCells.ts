import { useMemo } from 'react';
import { AMOUNT_DAY_IN_WEEK, MONDAY_INDEX, SUNDAY_INDEX_IS_DEFAULT } from '../constants';
import { FirstWeekDay, Location, WeekDayNameData } from '../types';

type UseWeekNameCellsProps = {
  location: Location;
  firstWeekDay: FirstWeekDay;
};

export type UseWeekNameCells = {
  weekNameCells: WeekDayNameData[];
};

const useWeekNameCells = ({ location, firstWeekDay }: UseWeekNameCellsProps): UseWeekNameCells => {
  const offsetStartWeekName = useMemo(() => {
    const currentDate = new Date();

    switch (true) {
      case firstWeekDay === 'monday':
        return (MONDAY_INDEX - currentDate.getDay() + AMOUNT_DAY_IN_WEEK) % AMOUNT_DAY_IN_WEEK;
      default:
        return (SUNDAY_INDEX_IS_DEFAULT - currentDate.getDay() + AMOUNT_DAY_IN_WEEK) % AMOUNT_DAY_IN_WEEK;
    }
  }, [firstWeekDay]);

  const weekNameCells = useMemo(() => {
    const currentDate = new Date();

    return Array.from({ length: AMOUNT_DAY_IN_WEEK }, (_, i) => {
      const weekDate = new Date(currentDate);
      weekDate.setDate(currentDate.getDate() + offsetStartWeekName + i);

      return {
        value: weekDate.getDay(),
        text: weekDate
          .toLocaleDateString(location, {
            weekday: 'short',
          })
          .slice(0, 2),
      };
    });
  }, [location, offsetStartWeekName]);

  return { weekNameCells };
};

export default useWeekNameCells;
