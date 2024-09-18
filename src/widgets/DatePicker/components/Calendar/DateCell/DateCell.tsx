import cn from 'classnames';
import { FC, memo, useMemo } from 'react';

import { useDatePickerContext } from '../../../state';

import s from './DateCell.module.scss';

type DateCellProps = {
  date: Date;
};

const DateCell: FC<DateCellProps> = ({ date }) => {
  const { currentDate, navigationDate, handlerSetSelectedDate, handleToggleOpen } = useDatePickerContext();
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

  const handlerOnClick = () => {
    handlerSetSelectedDate(date.getTime());
    handleToggleOpen();
  };

  return (
    <button
      className={cn(s['date'], isCurrentMonth && s['date_current-month'], isCurrentDate && s['date_current-date'])}
      onClick={handlerOnClick}
    >
      {value}
    </button>
  );
};

export default memo(DateCell);
