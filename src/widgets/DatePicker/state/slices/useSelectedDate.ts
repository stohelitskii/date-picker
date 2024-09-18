import { useCallback, useMemo, useState } from 'react';

import { DateFormat, DateItemName, Location } from '@/types';
import { useDateFormatSettings } from '@/hooks/useDateFormatSettings';

type UseSelectedDateProps = {
  dateFormat: DateFormat;
  location: Location;
};

export type UseSelectedDate = {
  selectedDateTextValue: string;
  handlerSetSelectedDate: (timestamp: number) => void;
};

export const useSelectedDate = ({ dateFormat, location }: UseSelectedDateProps): UseSelectedDate => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const { schema, separator } = useDateFormatSettings(dateFormat);

  const selectedDateTextValue = useMemo(() => {
    if (!selectedDate) {
      return '';
    }

    return schema
      .map((item) => {
        switch (true) {
          case item.name === DateItemName.day: {
            const formatter = new Intl.DateTimeFormat(location as Intl.LocalesArgument, { day: item.type });

            return formatter.format(selectedDate);
          }

          case item.name === DateItemName.month: {
            const formatter = new Intl.DateTimeFormat(location as Intl.LocalesArgument, { month: item.type });

            return formatter.format(selectedDate);
          }

          case item.name === DateItemName.year: {
            const formatter = new Intl.DateTimeFormat(location as Intl.LocalesArgument, { year: item.type });

            return formatter.format(selectedDate);
          }
        }
      })
      .join(separator);
  }, [selectedDate, schema, separator, location]);

  const handlerSetSelectedDate = useCallback((timestamp: number) => {
    setSelectedDate(new Date(timestamp));
  }, []);

  return {
    selectedDateTextValue,
    handlerSetSelectedDate,
  };
};
