import { useMemo } from 'react';

import { THURSDAY_INDEX } from '../../constants';

type UseWeekNumberCellsProps = {
  dateCells: Date[];
  displayWeekNumber: boolean;
};

export type UseWeekNumberCells = {
  weekNumberCells: number[] | null;
};

export const useWeekNumberCells = ({ dateCells, displayWeekNumber }: UseWeekNumberCellsProps): UseWeekNumberCells => {
  const weekNumberCells = useMemo(() => {
    if (!displayWeekNumber) {
      return null;
    }
    return dateCells.reduce((acc, dateCell) => {
      const date = new Date(dateCell.getTime());

      if (date.getDay() !== THURSDAY_INDEX) return acc;

      const firstWeek = new Date(date.getFullYear(), 0, 1);
      while (firstWeek.getDay() !== THURSDAY_INDEX) {
        firstWeek.setDate(firstWeek.getDate() + 1);
      }
      const currentWeek = new Date(dateCell.getTime());

      const passedTime = currentWeek.getTime() - firstWeek.getTime();
      const millisecondsInAWeek = 1000 * 60 * 60 * 24 * 7;
      const weekNumber = Math.floor(passedTime / millisecondsInAWeek) + 1;

      acc.push(weekNumber);
      return acc;
    }, [] as number[]);
  }, [dateCells, displayWeekNumber]);

  return { weekNumberCells };
};
