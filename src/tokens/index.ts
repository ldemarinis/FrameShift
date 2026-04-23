// FrameShift Design System — Tokens
// Translated from colors_and_type.css

export const colors = {
  // Coral — Primary
  coral50:  '#FFF0ED',
  coral100: '#FFD9D0',
  coral200: '#FFB3A0',
  coral300: '#FF8C70',
  coral400: '#FF6A4A',
  coral500: '#FF4F35',
  coral600: '#E63820',
  coral700: '#BF2914',
  coral800: '#991D0D',
  coral900: '#731408',

  // Golden — Accent
  golden50:  '#FFFBEB',
  golden100: '#FFF3C4',
  golden200: '#FFE485',
  golden300: '#FFD246',
  golden400: '#FFBF0F',
  golden500: '#F5A800',
  golden600: '#CC8600',
  golden700: '#A36500',
  golden800: '#7A4A00',
  golden900: '#523200',

  // Sky — Secondary
  sky50:  '#EFF9FF',
  sky100: '#D0EEFF',
  sky200: '#A1DCFF',
  sky300: '#63C6FF',
  sky400: '#2BACF5',
  sky500: '#0093E0',
  sky600: '#0074BF',
  sky700: '#005A99',
  sky800: '#004073',
  sky900: '#002B4D',

  // Teal — Tertiary
  teal50:  '#EFFCF9',
  teal100: '#C6F5EC',
  teal200: '#8DEBD8',
  teal300: '#4DD9C0',
  teal400: '#1DC4A8',
  teal500: '#00AB90',
  teal600: '#008F77',
  teal700: '#00735E',
  teal800: '#005746',
  teal900: '#003B2E',

  // Neutrals — warm-tinted
  neutral0:   '#FFFFFF',
  neutral50:  '#FFFBF7',
  neutral100: '#F7F2EC',
  neutral200: '#EDE5DA',
  neutral300: '#DDD3C5',
  neutral400: '#BEB0A0',
  neutral500: '#9A8C7C',
  neutral600: '#7A6E60',
  neutral700: '#5A5048',
  neutral800: '#3A342E',
  neutral900: '#221E1A',

  // Status
  success:  '#22C55E',
  warning:  '#F5A800',
  error:    '#EF4444',
  info:     '#0093E0',

  successSubtle: '#F0FDF4',
  errorSubtle:   '#FEF2F2',
} as const;

export const semantic = {
  // Brand
  primary:        colors.coral500,
  primaryHover:   colors.coral400,
  primaryPress:   colors.coral600,
  primarySubtle:  colors.coral50,
  primaryMuted:   colors.coral100,

  accent:         colors.golden500,
  accentHover:    colors.golden400,
  accentSubtle:   colors.golden50,

  secondary:      colors.sky500,
  secondaryHover: colors.sky400,
  secondarySubtle:colors.sky50,

  tertiary:       colors.teal500,
  tertiarySubtle: colors.teal50,

  // Backgrounds
  bgBase:     '#FFFBF5',
  bgSurface:  '#FFFFFF',
  bgElevated: '#FFFFFF',
  bgSunken:   colors.neutral100,

  // Text
  textPrimary:   colors.neutral900,
  textSecondary: colors.neutral600,
  textTertiary:  colors.neutral400,
  textDisabled:  colors.neutral300,
  textInverse:   '#FFFFFF',
  textBrand:     colors.coral500,
  textLink:      colors.sky600,

  // Borders
  borderSubtle:  colors.neutral200,
  borderDefault: colors.neutral300,
  borderStrong:  colors.neutral400,
  borderFocus:   colors.coral400,
  borderBrand:   colors.coral500,
} as const;

export const gradients = {
  hero:    ['#FF4F35', '#FFB830'] as [string, string],
  sunset:  ['#FF4F35', '#FFB830', '#FFD246'] as [string, string, string],
  ocean:   ['#2BACF5', '#00AB90'] as [string, string],
  golden:  ['#FFD246', '#FFB830'] as [string, string],
} as const;

export const typography = {
  familyDisplay: 'Baloo2_800ExtraBold',
  familyBody:    'PlusJakartaSans_400Regular',
  familyBodyMed: 'PlusJakartaSans_500Medium',
  familyBodySemi:'PlusJakartaSans_600SemiBold',
  familyBodyBold:'PlusJakartaSans_700Bold',

  xs:   11,
  sm:   13,
  base: 15,
  md:   17,
  lg:   19,
  xl:   22,
  '2xl': 28,
  '3xl': 36,
  '4xl': 48,
  '5xl': 64,

  leadingTight:   1.15,
  leadingSnug:    1.3,
  leadingNormal:  1.5,
  leadingRelaxed: 1.65,

  trackingTight:  -0.03,
  trackingSnug:   -0.015,
  trackingNormal: 0,
  trackingWide:   0.04,
  trackingWider:  0.08,

  weightRegular:   '400' as const,
  weightMedium:    '500' as const,
  weightSemibold:  '600' as const,
  weightBold:      '700' as const,
  weightExtrabold: '800' as const,
} as const;

export const spacing = {
  1:  4,
  2:  8,
  3:  12,
  4:  16,
  5:  20,
  6:  24,
  8:  32,
  10: 40,
  12: 48,
  16: 64,
  20: 80,
  24: 96,
} as const;

export const radii = {
  xs:   4,
  sm:   8,
  md:   12,
  lg:   16,
  xl:   20,
  '2xl': 28,
  full: 9999,
} as const;

export const shadows = {
  xs: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1,
  },
  sm: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  md: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 16,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 32,
    elevation: 8,
  },
  xl: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.14,
    shadowRadius: 48,
    elevation: 16,
  },
  button: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 12,
    elevation: 6,
  },
  nav: {
    shadowColor: colors.coral500,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },
} as const;

export const animation = {
  durationFast:   120,
  durationBase:   200,
  durationSlow:   320,
  durationSlower: 480,
} as const;

export const zIndex = {
  below:   -1,
  base:     0,
  raised:   10,
  sticky:   100,
  overlay:  200,
  modal:    300,
  toast:    400,
  top:      500,
} as const;
