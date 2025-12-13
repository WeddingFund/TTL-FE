import colors from "./colors";
const deviceSizes = {
  // mobile5: 320,
  // mobile4: 360,
  // mobile3: 480,
  // mobile2: 768,
  // mobile: 968,
  // tablet: 1040,
  // desktop2: 1380,
  // desktop: 1720,
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

const device = {
  mobile: `(max-width : ${deviceSizes.mobile}px)`,
  // mobile2: `(max-width : ${deviceSizes.mobile2}px)`,
  // mobile3: `(max-width : ${deviceSizes.mobile3}px)`,
  // mobile4: `(max-width : ${deviceSizes.mobile4}px)`,
  // mobile5: `(max-width : ${deviceSizes.mobile5}px)`,
  tablet: `(max-width : ${deviceSizes.tablet}px)`,
  // desktop2: `(max-width : ${deviceSizes.desktop2}px)`,
  desktop: `(max-width : ${deviceSizes.desktop}px)`,
};

export const theme = {
  deviceSizes,
  device,
  colors,
};

export type AppTheme = typeof theme;
