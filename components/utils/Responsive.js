export const screenSizes = {
  tinyMobile: 230,
  smallMobile: 270,
  moreText: 456,
  filterMobile: 568,
  mobile: 768,
  dashboardMobile: 890,
  tablet: 1140,
  desktop: 1366,
  ipad: 1040,
};

export const mediaQueries = {
  smallMobileQuery: `(max-width: ${screenSizes.smallMobile}px)`,
  tinyTextQuery: `(max-width: ${screenSizes.tinyMobile}px)`,
  lessTextQuery: `(max-width: ${screenSizes.moreText}px)`,
  moreTextQuery: `(min-width: ${screenSizes.moreText}px)`,
  filterMobileQuery: `(max-width: ${screenSizes.filterMobile}px)`,
  mobileQuery: `(max-width: ${screenSizes.mobile}px)`,
  tabletMinQuery: `(min-width: ${screenSizes.mobile}px)`,
  tabletQuery: `(max-width: ${screenSizes.tablet}px)`,
  dashboardMobileQuery: `(max-width: ${screenSizes.dashboardMobile}px)`,
  desktopMinQuery: `(min-width: ${screenSizes.tablet}px)`,
  desktopQuery: `(max-width: ${screenSizes.desktop}px)`,
};
