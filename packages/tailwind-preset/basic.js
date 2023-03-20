const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme   : {
    fontFamily   : { sans: ['DM Sans', ...defaultTheme.fontFamily.sans] },
    letterSpacing: {
      tighter: '-0.4px',
      tight  : '-0.2px',
      normal : '0',
      wide   : '0.2px',
      wider  : '0.4px',
      widest : '0.8px',
    },
    lineHeight: {
      none    : 1,
      tightest: 1.33,
      tighter : 1.42,
      tight   : 1.45,
      normal  : 1.5,
      wide    : 'normal',
    },
    fontWeight: {
      inherit   : 'inherit',
      thin      : 100,
      extralight: 200,
      light     : 300,
      normal    : 400,
      medium    : 500,
      semibold  : 600,
      bold      : 700,
      extrabold : 800,
      black     : 900,
    },
    colors: {
      inherit    : 'inherit',
      transparent: 'transparent',
      current    : 'currentColor',
      base       : {
        black: '#000000',
        white: '#ffffff',
      },
      gray: {
        0  : '#FDFDFD',
        5  : '#F3F3F3',
        10 : '#E7E7E8',
        15 : '#DBDBDC',
        20 : '#DBDBDC',
        25 : '#C2C3C5',
        30 : '#B6B8B9',
        35 : '#AAACAE',
        40 : '#9EA0A2',
        45 : '#929497',
        50 : '#86888B',
        55 : '#7A7C7F',
        60 : '#6E7074',
        65 : '#626468',
        70 : '#56585D',
        75 : '#4A4D51',
        80 : '#3D4145',
        85 : '#2A2E33',
        90 : '#20242A',
        95 : '#14181E',
        100: '#0D1117',
      },
      blue: {
        0  : '#E5F0FA',
        10 : '#A8CBEF',
        20 : '#70A9E5',
        30 : '#3887DB',
        40 : '#0065D1',
        50 : '#0057B4',
        60 : '#004996',
        70 : '#003B79',
        80 : '#002C5C',
        90 : '#001E3F',
        100: '#000F1F',
      },
      green: {
        0  : '#E9F7EC',
        10 : '#B4E5BF',
        20 : '#84D495',
        30 : '#53C36C',
        40 : '#23B242',
        50 : '#1E9939',
        60 : '#198030',
        70 : '#146726',
        80 : '#0F4E1D',
        90 : '#0B3514',
        100: '#051B0A',
      },
      lightblue: {
        0  : '#E6F7F9',
        10 : '#A9E3EB',
        20 : '#71D2DF',
        30 : '#3AC0D2',
        40 : '#02AEC5',
        50 : '#0296A9',
        60 : '#017D8E',
        70 : '#016572',
        80 : '#014D57',
        90 : '#01343B',
        100: '#001A1E',
      },
      orange: {
        0  : '#FEF6E9',
        10 : '#FCE1B4',
        20 : '#F9CD84',
        30 : '#F7BA53',
        40 : '#F5A623',
        50 : '#D38F1E',
        60 : '#B07819',
        70 : '#8E6014',
        80 : '#6C490F',
        90 : '#4A320B',
        100: '#251905',
      },
      red: {
        0  : '#FCEAEA',
        10 : '#F6B8B7',
        20 : '#F08A89',
        30 : '#EA5C5A',
        40 : '#E42E2C',
        50 : '#C42826',
        60 : '#A42120',
        70 : '#841B1A',
        80 : '#641413',
        90 : '#641413',
        100: '#220707',
      },
      gold: {
        0  : '#F8F5E5',
        10 : '#E7DDA8',
        20 : '#D7C670',
        30 : '#C7B038',
        40 : '#B79A00',
        50 : '#9D8400',
        60 : '#846F00',
        70 : '#6A5900',
        80 : '#514400',
        90 : '#372E00',
        100: '#1B1700',
      },
      yellow: {
        0  : '#FDFBEA',
        10 : '#FAF1B7',
        20 : '#F6E789',
        30 : '#F3DE5A',
        40 : '#EFD52C',
        50 : '#CEB726',
        60 : '#AC9920',
        70 : '#8B7C1A',
        80 : '#695E13',
        90 : '#48400D',
        100: '#242007',
      },
      lime: {
        0  : '#F6FCEB',
        10 : '#E0F7BA',
        20 : '#CBF18E',
        30 : '#B7EB61',
        40 : '#A3E635',
        50 : '#8CC62E',
        60 : '#75A626',
        70 : '#5F851F',
        80 : '#486517',
        90 : '#314510',
        100: '#182208',
      },
      teal: {
        0  : '#E7F8F5',
        10 : '#AEE7DD',
        20 : '#7AD7C8',
        30 : '#46C8B2',
        40 : '#12B89C',
        50 : '#0F9E86',
        60 : '#0D8470',
        70 : '#0A6B5A',
        80 : '#085145',
        90 : '#05372F',
        100: '#031C17',
      },
      purple: {
        0  : '#EFE5FA',
        10 : '#C8A8EF',
        20 : '#A570E5',
        30 : '#8138DB',
        40 : '#5E00D1',
        50 : '#5100B4',
        60 : '#440096',
        70 : '#370079',
        80 : '#29005C',
        90 : '#1C003F',
        100: '#0E001F',
      },
    },
    borderRadius: {
      'none'   : 0,
      'tn'     : '4px',
      'xs'     : '6px',
      'sm'     : '7px',
      'DEFAULT': '8px',
      'md'     : '12px',
      'lg'     : '14px',
      'xl'     : '16px',
      '2xl'    : '20px',
      '3xl'    : '22px',
      'full'   : '999999px',
    },
    opacity: {
      0  : 0,
      5  : 0.05,
      10 : 0.1,
      15 : 0.15,
      20 : 0.2,
      25 : 0.25,
      30 : 0.3,
      35 : 0.35,
      40 : 0.4,
      45 : 0.45,
      50 : 0.5,
      55 : 0.55,
      60 : 0.6,
      65 : 0.65,
      70 : 0.7,
      75 : 0.75,
      80 : 0.8,
      85 : 0.85,
      90 : 0.9,
      95 : 0.95,
      100: 1,
    },
  },
  plugins: [require('@privyid/tailwind-animation'), require('@privyid/tailwind-extended')],
}
