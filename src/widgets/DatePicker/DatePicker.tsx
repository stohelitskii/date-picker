import cn from 'classnames';
import { FC, useRef } from 'react';

import DateButton from '@/widgets/DatePicker/components/DateButton';
import Calendar from '@/widgets/DatePicker/components/Calendar';
import { FirstWeekDay, Location } from '@/types/';
import { DatePickerContextProvider } from './state/context';

import s from './DatePicker.module.scss';

type DatePickerProps = {
  className?: string;
  location?: Location;
  dateFormat?: string;
  firstWeekDay?: FirstWeekDay;
  displayWeekNumber?: boolean;
};

export type DatePickerOptions = Omit<DatePickerProps, 'className'> & {
  ref: React.MutableRefObject<HTMLDivElement | null>;
};

const DatePicker: FC<DatePickerProps> = ({ className, location, dateFormat, firstWeekDay, displayWeekNumber }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const initialization: DatePickerOptions = {
    ref,
    location,
    dateFormat,
    firstWeekDay,
    displayWeekNumber,
  };

  return (
    <DatePickerContextProvider initialization={initialization}>
      <div ref={ref} className={cn(className, s.root)}>
        <DateButton />
        <Calendar className={s.root__calendar} />
      </div>
    </DatePickerContextProvider>
  );
};

export default DatePicker;
