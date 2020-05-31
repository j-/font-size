import { Value } from './values';
import { CalculateFontSize, FontSizeKeyword } from './font-size';

const calculateKeyword: CalculateFontSize<FontSizeKeyword> = (defaultFontSize, _rootFontSize, parentFontSize, [value]) => {
  switch (value) {
    // Relative values
    case Value.LARGER:   return parentFontSize * 1.2;
    case Value.SMALLER:  return parentFontSize / 1.2;
    // Absolute values
    case Value.XX_SMALL: return 9;
    case Value.X_SMALL:  return 10;
    case Value.SMALL:    return 13;
    case Value.MEDIUM:   return 16;
    case Value.LARGE:    return 18;
    case Value.X_LARGE:  return 24;
    case Value.XX_LARGE: return 32;
    // Other values
    case Value.INHERIT:  return parentFontSize;
    case Value.INITIAL:  return defaultFontSize;
    case Value.UNSET:    return parentFontSize;
    case Value.ZERO:     return 0;
    // Unknown values
    default: throw new Error(`Did not recognise value "${value}"`);
  }
};

export default calculateKeyword;
