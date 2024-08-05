import { DateCells } from '../types';
import { THURSDAY_INDEX } from '../constants';
import { useMemo } from 'react';

type UseWeekNumberCellsProps = {
  dateCells: DateCells[];
};

export type UseWeekNumberCells = {
  weekNumberCells: number[];
};

const useWeekNumberCells = ({ dateCells }: UseWeekNumberCellsProps): UseWeekNumberCells => {
  const weekNumberCells = useMemo(() => {
    return dateCells.reduce((acc, { timestamp }) => {
      const date = new Date(timestamp);

      if (date.getDay() !== THURSDAY_INDEX) return acc;

      const firstWeek = new Date(date.getFullYear(), 0, 1);
      while (firstWeek.getDay() !== THURSDAY_INDEX) {
        firstWeek.setDate(firstWeek.getDate() + 1);
      }
      const currentWeek = new Date(timestamp);

      const passedTime = currentWeek.getTime() - firstWeek.getTime();
      const millisecondsInAWeek = 1000 * 60 * 60 * 24 * 7;
      const weekNumber = Math.floor(passedTime / millisecondsInAWeek) + 1;

      acc.push(weekNumber);
      return acc;
    }, [] as number[]);
  }, [dateCells]);

  return { weekNumberCells };
};

export default useWeekNumberCells;
