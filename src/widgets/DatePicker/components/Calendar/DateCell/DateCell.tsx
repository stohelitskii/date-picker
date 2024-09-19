import cn from 'classnames';
import { FC, memo, useMemo } from 'react';

import { useDatePickerContext } from '../../../state';

import s from './DateCell.module.scss';

type DateCellProps = {
  date: Date;
};

const DateCell: FC<DateCellProps> = ({ date }) => {
  const { currentDate, navigationDate, selectedDate, handlerSetSelectedDate, handleToggleOpen } =
    useDatePickerContext();
  const value = useMemo(() => date.getDate(), [date]);

  const isCurrentMonth = useMemo(() => {
    return date.getMonth() === navigationDate.getMonth();
  }, [date, navigationDate]);

  const isCurrentDate = useMemo(() => {
    return (
      date.getDate() === currentDate.getDate() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getFullYear() === currentDate.getFullYear()
    );
  }, [date, currentDate]);

  const isSelectedDate = useMemo(() => {
    if (!selectedDate) {
      return;
    }

    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  }, [date, selectedDate]);

  const handlerOnClick = () => {
    handlerSetSelectedDate(date.getTime());
    handleToggleOpen();
  };

  return (
    <button
      className={cn(
        s.root,
        isCurrentMonth && s['root_current-month'],
        isCurrentDate && s['root_current-date'],
        isSelectedDate && s['root_selected-date']
      )}
      onClick={handlerOnClick}
    >
      {value}
    </button>
  );
};

export default memo(DateCell);
