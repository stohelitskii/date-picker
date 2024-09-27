import { useMemo } from 'react';

import {
  DateFormat,
  DataFromDateFormat,
  DayFormat,
  DateItemName,
  MonthFormat,
  YearFormat,
  DateFormatSchema,
  DateFormatSchemaItem,
  DateFormatType,
} from '@/types';
import getSeparator from '../utils/getSeparator';

type UseDateFormatSettings = {
  separator: DateFormatType;
  schema: DateFormatSchema;
};

const getDataFromDateFormat = (dateFormat: DateFormat, separator: string): DataFromDateFormat => {
  return dateFormat.split(separator) as DataFromDateFormat;
};

export const useDateFormatSettings = (dateFormat: DateFormat): UseDateFormatSettings => {
  const separator = useMemo<DateFormatType>(() => getSeparator(dateFormat) as DateFormatType, [dateFormat]);
  const schema = useMemo<DateFormatSchema>(() => {
    const data = getDataFromDateFormat(dateFormat, separator || '');

    return data.map((value): DateFormatSchemaItem => {
      switch (value) {
        case DayFormat.D:
          return {
            name: DateItemName.day,
            type: 'numeric',
          };
        case DayFormat.DD:
          return {
            name: DateItemName.day,
            type: '2-digit',
          };
        case MonthFormat.M:
          return {
            name: DateItemName.month,
            type: 'numeric',
          };
        case MonthFormat.MM:
          return {
            name: DateItemName.month,
            type: '2-digit',
          };
        case YearFormat.YYYY:
          return {
            name: DateItemName.year,
            type: 'numeric',
          };
        case YearFormat.YY:
          return {
            name: DateItemName.year,
            type: '2-digit',
          };
      }
    });
  }, [dateFormat, separator]);

  return { separator, schema };
};
