import { FC, createContext, useContext, RefObject } from 'react';
import useDatePickerState, { UseDatePickerState } from './useDatePickerState';
import useNavigationDate, { UseNavigationDate } from './useNavigationDate';
import { DatePickerOptions } from '../types';
import useDateCells, { UseDateCells } from './useDateCells';
import useWeekNameCells, { UseWeekNameCells } from './useWeekNameCells';
import useWeekNumberCells, { UseWeekNumberCells } from './useWeekNumberCells';

type DatePickerContextValue = UseDatePickerState &
  UseNavigationDate &
  UseDateCells &
  UseWeekNumberCells &
  UseWeekNameCells;

const DatePickerContext = createContext<DatePickerContextValue | null>(null);

export type DatePickerContextInitialization = {
  ref: RefObject<HTMLDivElement> | null;
};

type DatePickerContextProviderProps = {
  initialization: DatePickerContextInitialization & DatePickerOptions;
  children: React.ReactNode;
};

export const DatePickerContextProvider: FC<DatePickerContextProviderProps> = ({ initialization, children }) => {
  const { ref, location, firstWeekDay, navigationDateFormat } = initialization;

  const { isOpen, handleToggleOpen } = useDatePickerState({ ref });
  const {
    navigationDate,
    setNavigationNextYear,
    setNavigationPrevYear,
    setNavigationNextMonth,
    setNavigationPrevMonth,
  } = useNavigationDate({ location, formatOption: navigationDateFormat });

  const { dateCells } = useDateCells({ navigationDate, firstWeekDay });
  const { weekNumberCells } = useWeekNumberCells({ dateCells });
  const { weekNameCells } = useWeekNameCells({ location, firstWeekDay });

  const value = {
    isOpen,
    navigationDate,
    dateCells,
    weekNameCells,
    weekNumberCells,
    handleToggleOpen,
    setNavigationNextYear,
    setNavigationPrevYear,
    setNavigationNextMonth,
    setNavigationPrevMonth,
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
