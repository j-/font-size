import { Keyword } from './keywords';
import { CalculateFontSize, FontSizeKeyword } from './font-size';

const calculateKeyword: CalculateFontSize<FontSizeKeyword> = (defaultFontSize, _rootFontSize, parentFontSize, [value]) => {
  switch (value) {
    // Relative values
    case Keyword.LARGER:   return parentFontSize * 1.2;
    case Keyword.SMALLER:  return parentFontSize / 1.2;
    // Absolute values
    case Keyword.XX_SMALL: return 9;
    case Keyword.X_SMALL:  return 10;
    case Keyword.SMALL:    return 13;
    case Keyword.MEDIUM:   return 16;
    case Keyword.LARGE:    return 18;
    case Keyword.X_LARGE:  return 24;
    case Keyword.XX_LARGE: return 32;
    // Other values
    case Keyword.INHERIT:  return parentFontSize;
    case Keyword.INITIAL:  return defaultFontSize;
    case Keyword.UNSET:    return parentFontSize;
    case Keyword.ZERO:     return 0;
    // Unknown values
    default: throw new Error(`Did not recognise value "${value}"`);
  }
};

export default calculateKeyword;
