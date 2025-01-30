import { createThemeContract, createTheme, createGlobalTheme } from '@vanilla-extract/css';

import { rem } from '@/utils/pxto';

const sizes = {
  appWidth: rem(758),
  appInlineSpace: rem(24),
  sidebarWidth: rem(210),
};

const fonts = {
  mono: `"Roboto Mono", "Pretendard Variable", "Courier New", Courier, monospace`,
  sans: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
};

const typographies = {
  h7: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(10),
    lineHeight: rem(18),
  },
  h6: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(11),
    lineHeight: rem(18),
  },
  h5: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(12),
    lineHeight: 'auto',
  },
  h4: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: 'auto',
  },
  h3: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(15),
    lineHeight: rem(15),
  },
  post_subtitle: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(15),
    lineHeight: rem(26),
  },
  post_title: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(24),
    lineHeight: rem(40),
  },
  post_description: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(26),
  },
  post_image_description: {
    fontFamily: fonts.sans,
    fontWeight: '400',
    fontSize: rem(15),
    lineHeight: rem(13),
  },
  post_body: {
    fontFamily: fonts.sans,
    fontWeight: '400',
    fontSize: rem(16),
    lineHeight: '180%',
  },
  profile_sub: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(11),
    lineHeight: rem(20),
  },
  profile_name: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(13),
  },
  profile_title: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(13),
    lineHeight: rem(20),
  },
  a: {
    fontFamily: fonts.mono,
    fontWeight: '500',
    fontSize: rem(14),
    lineHeight: 'auto',
  },
};

const layouts = {
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerX: {
    display: 'flex',
    justifyContent: 'center',
  },
  centerY: {
    display: 'flex',
    alignItems: 'center',
  },
  rowBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnCenterX: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  columnCenterY: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
};

const zIndices = {
  overlay: '100',
  headerContainer: '150',
  modal: '200',
};

export const colors = createThemeContract({
  gray: {
    accent: '--stileblog-v2-colors-gray-accent',
    bold: '--stileblog-v2-colors-gray-bold',
    mid: '--stileblog-v2-colors-gray-mid',
    light: '--stileblog-v2-colors-gray-light',
    click: '--stileblog-v2-colors-gray-click',
    hover: '--stileblog-v2-colors-gray-hover',
  },

  white: '--stileblog-v2-colors-white',

  black: '--stileblog-v2-colors-black',
  border: '--stileblog-v2-colors-border',
  background: '--stileblog-v2-colors-background',
  background02: '--stileblog-v2-colors-background02',
  background03: '--stileblog-v2-colors-background03',
  background04: '--stileblog-v2-colors-background04',
  background05: '--stileblog-v2-colors-background05',
  background06: '--stileblog-v2-colors-background06',
  background08: '--stileblog-v2-colors-background08',

  toggle: '--stileblog-v2-colors-toggle',
  license: '--stileblog-v2-colors-license',

  gradient: {
    sidebar_divider: '--stileblog-v2-gradient-sidebar-divider',
  },

  mdx: {
    note: '--stileblog-v2-mdx-note',
    noteBackground: '--stileblog-v2-mdx-note-background',
    tip: '--stileblog-v2-mdx-tip',
    tipBackground: '--stileblog-v2-mdx-tip-background',
    important: '--stileblog-v2-mdx-important',
    importantBackground: '--stileblog-v2-mdx-important-background',
    warning: '--stileblog-v2-mdx-warning',
    warningBackground: '--stileblog-v2-mdx-warning-background',
    caution: '--stileblog-v2-mdx-caution',
    cautionBackground: '--stileblog-v2-mdx-caution-background',
  },
});

export const lightColors = createTheme(colors, {
  gray: {
    accent: '#1D1D30',
    bold: '#393960',
    mid: '#6B6B87',
    light: '#B5B5C3',
    click: '#6B6B87',
    hover: '#F9F9FC',
  },

  white: '#FFFFFF',
  black: '#000000',
  border: '#F4F4F8',
  background: '#FCFCFD',
  background02: 'rgba(0, 0, 0, 0.02)',
  background03: 'rgba(0, 0, 0, 0.03)',
  background04: 'rgba(0, 0, 0, 0.04)',
  background05: 'rgba(0, 0, 0, 0.05)',
  background06: 'rgba(0, 0, 0, 0.06)',
  background08: 'rgba(0, 0, 0, 0.08)',

  toggle: '#FFFFFF',
  license: '#B5B5C3',

  gradient: {
    sidebar_divider: 'radial-gradient(circle, #D9DBE7 0%, rgba(217, 219, 231, 0) 100%)',
  },

  mdx: {
    note: '#2e67d3',
    noteBackground: '#f7fbff',
    tip: '#2e67d3',
    tipBackground: '#f7fbff',
    important: '#7b52d7',
    importantBackground: '#fbf7ff',
    warning: '#936921',
    warningBackground: '#fffdf7',
    caution: '#be3536',
    cautionBackground: '#fffafa',
  },
});

export const darkColors = createTheme(colors, {
  gray: {
    accent: '#FFFFFF',
    bold: '#DDDDDD',
    mid: '#B2B2B2',
    light: '#888888',
    click: '#1B1B1B',
    hover: '#141414',
  },

  white: '#FFFFFF',
  black: '#000000',
  border: '#1B1B1B',
  background: '#0F0F0F',
  background02: 'rgba(255, 255, 255, 0.02)',
  background03: 'rgba(255, 255, 255, 0.03)',
  background04: 'rgba(255, 255, 255, 0.04)',
  background05: 'rgba(255, 255, 255, 0.05)',
  background06: 'rgba(255, 255, 255, 0.06)',
  background08: 'rgba(255, 255, 255, 0.08)',

  toggle: '#000000',
  license: '#B2B2B2',

  gradient: {
    sidebar_divider: 'radial-gradient(circle, #36363A 0%, rgba(61, 61, 67, 0) 100%)',
  },

  mdx: {
    note: '#386de3',
    noteBackground: '#14151d',
    tip: '#386de3',
    tipBackground: '#14151d',
    important: '#8259dd',
    importantBackground: '#1a1026',
    warning: '#966c23',
    warningBackground: '#1a1612',
    caution: '#c9453c',
    cautionBackground: '#1a0f0f',
  },
});

export const theme = createGlobalTheme(':root', {
  colors,
  fonts,
  sizes,
  layouts,
  typographies,
  zIndices,
});
