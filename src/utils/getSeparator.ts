import { DateFormatSeparator } from '@/types';

const getSeparator = (string: string) => {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (char.match(/[а-яa-z0-9]/)) {
      continue;
    }

    if (!Object.values(DateFormatSeparator).includes(char as DateFormatSeparator)) {
      throw new Error(`Invalid separator ${char} in date format "${string}" for ${Object.values(DateFormatSeparator)}`);
    }
    return char;
  }

  throw new Error(`No separator found in date format "${string}"`);
};

export default getSeparator;
