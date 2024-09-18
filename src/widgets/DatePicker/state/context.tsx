import { FC, createContext, useContext } from 'react';

import { DateFormat, Location } from '@/types';
import { DEFAULT_DATE_FORMAT, DEFAULT_FIRST_WEEK_DAY, DEFAULT_LOCATION } from '../config';
import { DatePickerOptions } from '../DatePicker';
import useDatePickerState, { UseDatePickerState } from './slices/useDatePickerState';
import { useNavigationDate, UseNavigationDate } from './slices/useNavigationDate';
import { useDateCells, UseDateCells } from './slices/useDateCells';
import { useWeekNameCells, UseWeekNameCells } from './slices/useWeekNameCells';
import { useWeekNumberCells, UseWeekNumberCells } from './slices/useWeekNumberCells';
import { useSelectedDate, UseSelectedDate } from './slices/useSelectedDate';
import { useCurrentDate, UseCurrentDate } from './slices/useCurrentDate';

type DatePickerContextValue = Omit<DatePickerOptions, 'ref'> &
  UseDatePickerState &
  UseCurrentDate &
  UseSelectedDate &
  UseNavigationDate &
  UseDateCells &
  UseWeekNumberCells &
  UseWeekNameCells;

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

type DatePickerContextProviderProps = {
  initialization: DatePickerOptions;
  children: React.ReactNode;
};

export const DatePickerContextProvider: FC<DatePickerContextProviderProps> = ({ initialization, children }) => {
  const {
    ref,
    location = DEFAULT_LOCATION,
    dateFormat = DEFAULT_DATE_FORMAT,
    firstWeekDay = DEFAULT_FIRST_WEEK_DAY,
    displayWeekNumber = true,
  } = initialization;

  const { isOpen, handleToggleOpen } = useDatePickerState({ ref });

  const { currentDate } = useCurrentDate();

  const { navigationDate, handlerSetPrevMonth, handlerSetNextYear, handlerSetPrevYear, handlerSetNextMonth } =
    useNavigationDate();

  const { dateCells } = useDateCells({ navigationDate, firstWeekDay });

  const { weekNumberCells } = useWeekNumberCells({ dateCells, displayWeekNumber });

  const { weekNameCells } = useWeekNameCells({
    location,
    firstWeekDay,
  });

  const { selectedDateTextValue, handlerSetSelectedDate } = useSelectedDate({ dateFormat, location });

  const value = {
    location,
    dateFormat,
    displayWeekNumber,
    isOpen,
    handleToggleOpen,
    currentDate,
    selectedDateTextValue,
    handlerSetSelectedDate,
    navigationDate,
    handlerSetPrevMonth,
    handlerSetNextYear,
    handlerSetPrevYear,
    handlerSetNextMonth,
    dateCells,
    weekNumberCells,
    weekNameCells,
  };

  return <DatePickerContext.Provider value={value}>{children}</DatePickerContext.Provider>;
};

export const useDatePickerContext = (): DatePickerContextValue => {
  const contextData = useContext<DatePickerContextValue | null>(DatePickerContext);

  if (!contextData) {
    throw new Error('useDatePickerContext must be used within a DatePickerContextProvider');
  }

  return contextData;
};
