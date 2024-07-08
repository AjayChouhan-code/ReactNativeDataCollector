import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 850;

const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.25): number =>
  size + (scale(size) - size) * factor;

const pixelDensity = PixelRatio.get();

const screenWidthInPixels = width * pixelDensity;
const screenHeightInPixels = height * pixelDensity;

const diagonalInPixels = Math.sqrt(
  screenWidthInPixels ** 2 + screenHeightInPixels ** 2,
);

const diagonalScreenSizeInInches = 6.0;
const ppi = diagonalInPixels / diagonalScreenSizeInInches;

const screenWidthInInches = screenWidthInPixels / ppi;
const screenHeightInInches = screenHeightInPixels / ppi;

const screenSizeInInches = Math.sqrt(
  screenWidthInInches ** 2 + screenHeightInInches ** 2,
);
export {moderateScale, verticalScale, width, height, screenSizeInInches};
