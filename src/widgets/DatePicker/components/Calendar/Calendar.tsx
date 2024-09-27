import cn from 'classnames';
import { FC, memo } from 'react';

import DateCell from './DateCell';
import WeekDayNameCell from './WeekDayNameCell';
import WeekNumberCell from './WeekNumberCell';
import Navigation from './Navigation';
import { useDatePickerContext } from '../../state';

import s from './Calendar.module.scss';

type CalendarProps = {
  className?: string;
};

const Calendar: FC<CalendarProps> = ({ className }) => {
  const { isOpen, displayWeekNumber, weekNameCells, weekNumberCells, dateCells } = useDatePickerContext();

  if (!isOpen) {
    return null;
  }

  return (
    <div className={cn(className, s.root)}>
      <Navigation />
      <div className={cn(s.root__body, displayWeekNumber && s['root__body_display-week-number'])}>
        <div className={s['root__week-name-cells']}>
          {weekNameCells.map((name) => {
            return <WeekDayNameCell key={name} name={name} />;
          })}
        </div>
        {displayWeekNumber && weekNumberCells && (
          <div className={s['root__week-number-cells']}>
            {weekNumberCells.map((value) => {
              return <WeekNumberCell key={value} value={value} />;
            })}
          </div>
        )}
        <div className={s['root__date-cells']}>
          {dateCells.map((date) => {
            return <DateCell key={date.getTime()} date={date} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Calendar);
