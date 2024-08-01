import cn from 'classnames';
import { FC } from 'react';
import { useDatePickerContext } from '../state/context';

import DateCell from './DateCell';
import WeekDayNameCell from './WeekDayNameCell';
import WeekNumberCell from './WeekNumberCell';

import s from './Calendar.module.scss';

type CalendarProps = {
  className?: string;
};

const Calendar: FC<CalendarProps> = ({ className }) => {
  const {
    isOpen,
    navigationDate,
    weekNameCells,
    dateCells,
    weekNumberCells,
    setNavigationNextYear,
    setNavigationPrevYear,
    setNavigationNextMonth,
    setNavigationPrevMonth,
  } = useDatePickerContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn(className)}>
      <div className={s.root__navigation}>
        <button className={s['root__navigation-button']} onClick={setNavigationPrevYear}>
          {'<<'}
        </button>
        <button className={s['root__navigation-button']} onClick={setNavigationPrevMonth}>
          {'<'}
        </button>
        <div className={s['root__navigation-display']}>{navigationDate.text}</div>
        <button className={s['root__navigation-button']} onClick={setNavigationNextMonth}>
          {'>'}
        </button>
        <button className={s['root__navigation-button']} onClick={setNavigationNextYear}>
          {'>>'}
        </button>
      </div>
      <div>
        <div className={s.calendar}>
          <div className={s['calendar__week-name-cells']}>
            {weekNameCells.map(({ value, text }) => {
              return <WeekDayNameCell key={value} text={text} value={value} />;
            })}
          </div>
          <div className={s['calendar__week-number-cells']}>
            {weekNumberCells.map((value) => {
              return <WeekNumberCell key={value} value={value} />;
            })}
          </div>
          <div className={s['calendar__date-cells']}>
            {dateCells.map(({ timestamp, value }) => {
              return <DateCell key={timestamp} timestamp={timestamp} value={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
