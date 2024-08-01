import cn from 'classnames';
import { FC, useRef } from 'react';

import DateButton from './DateButton';
import Calendar from './Calendar';

import { DatePickerContextInitialization, DatePickerContextProvider } from './state/context';

import { DateMask, DatePickerOptions, FirstWeekDay, FormatOption, Location } from './types';

import s from './DatePicker.module.scss';

type DatePickerProps = {
  className?: string;
  dateMask?: DateMask;
  location?: Location;
  firstWeekDay?: FirstWeekDay;
  navigationDateFormat?: FormatOption;
};

const NAVIGATION_DATE_FORMAT_DEFAULT: FormatOption = { month: 'long', year: 'numeric' };

const DatePicker: FC<DatePickerProps> = ({
  className,
  location = 'en-EN',
  firstWeekDay = 'sunday',
  navigationDateFormat = NAVIGATION_DATE_FORMAT_DEFAULT,
  dateMask = 'dd.mm.yy',
}) => {
  const datePickerRef = useRef(null);

  const initialization: DatePickerContextInitialization & DatePickerOptions = {
    ref: datePickerRef,
    location,
    firstWeekDay,
    navigationDateFormat,
  };

  return (
    <DatePickerContextProvider initialization={initialization}>
      <div ref={datePickerRef} className={cn(className, s.root)}>
        <DateButton dateMask={dateMask} className={s.root__header} />
        <Calendar className={s.root__body} />
      </div>
    </DatePickerContextProvider>
  );
};

export default DatePicker;
