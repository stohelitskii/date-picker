import { useMemo } from 'react';
import { DateCells } from '../types';
import { AMOUNT_DAY_IN_WEEK, AMOUNT_WEEK_IN_YEAR, FIRST_WEEK_IN_YEAR } from '../constants';

type UseWeekNumberCellsProps = {
  dateCells: DateCells[];
};

export type UseWeekNumberCells = {
  weekNumberCells: number[];
};

const useWeekNumberCells = ({ dateCells }: UseWeekNumberCellsProps): UseWeekNumberCells => {
  const weekNumberCells = useMemo(() => {
    const weekNumbersSet = new Set<number>();

    dateCells.forEach(({ timestamp }, i) => {
      if (i % AMOUNT_DAY_IN_WEEK !== 0) return;

      const date = new Date(timestamp);
      const startOfYear = new Date(date.getFullYear(), 0, 1);
      const pastDaysOfYear = (date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000);

      let weekNumber = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);

      weekNumber = weekNumber > AMOUNT_WEEK_IN_YEAR ? FIRST_WEEK_IN_YEAR : weekNumber;

      weekNumbersSet.add(weekNumber);
    });

    return Array.from(weekNumbersSet);
  }, [dateCells]);

  return { weekNumberCells };
};

export default useWeekNumberCells;
