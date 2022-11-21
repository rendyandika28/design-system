const { theme } = require('@privyid/tailwind-preset')

module.exports = {
  content: ['./src/**/*.{vue,md}', './src/.vitepress/theme/**/*.{vue,md}'],
  presets: [require('@privyid/tailwind-preset')],
  theme  : {
    extend: {
      colors: {
        base: {
          white: `rgb(${theme.colors.base.white})`,
          black: `rgb(${theme.colors.base.black})`,
        },
      },
      fontSize: {
        'tn': [
          '11px',
          {
            lineHeight   : '1.45',
            letterSpacing: theme.letterSpacing.wider,
          },
        ],
        'xs': [
          '12px',
          {
            lineHeight   : '1.33',
            letterSpacing: theme.letterSpacing.wide,
          },
        ],
        'sm': [
          '14px',
          {
            lineHeight   : '1.42',
            letterSpacing: theme.letterSpacing.normal,
          },
        ],
        'base': [
          '16px',
          {
            lineHeight   : '1.5',
            letterSpacing: theme.letterSpacing.normal,
          },
        ],
        'xl': [
          '20px',
          {
            lineHeight   : '1.3',
            letterSpacing: theme.letterSpacing.normal,
          },
        ],
        '2xl': [
          '24px',
          {
            lineHeight   : '1.3',
            letterSpacing: theme.letterSpacing.normal,
          },
        ],
        '4xl': [
          '36px',
          {
            lineHeight   : '1.3',
            letterSpacing: theme.letterSpacing.normal,
          },
        ],
        '5xl': [
          '48px',
          {
            lineHeight   : '1.3',
            letterSpacing: theme.letterSpacing.normal,
          },
        ],
        '6xl': [
          '60px',
          {
            lineHeight   : '1.3',
            letterSpacing: theme.letterSpacing.tight,
          },
        ],
        '7xl': [
          '72px',
          {
            lineHeight   : '1.36',
            letterSpacing: theme.letterSpacing.tight,
          },
        ],
      },
      textColor: {
        DEFAULT   : `rgb(${theme.colors.gray[100]})`,
        default   : `rgb(${theme.colors.gray[100]})`,
        subtle    : `rgb(${theme.colors.gray[70]})`,
        muted     : `rgb(${theme.colors.gray[40]})`,
        onemphasis: `rgb(${theme.colors.base.white})`,
        accent    : `rgb(${theme.colors.blue[50]})`,
        success   : `rgb(${theme.colors.green[50]})`,
        warning   : `rgb(${theme.colors.orange[50]})`,
        danger    : `rgb(${theme.colors.red[50]})`,
      },
      backgroundColor: {
        inherit    : 'inherit',
        current    : 'currentColor',
        transparent: 'transparent',
        DEFAULT    : `rgb(${theme.colors.base.white})`,
        default    : {
          DEFAULT: `rgb(${theme.colors.base.white})`,
          alpha  : `rgb(${theme.colors.gray[50]}/${theme.opacity[5]})`,
        },
        subtle: {
          DEFAULT: `rgb(${theme.colors.gray[0]})`,
          alpha  : `rgb(${theme.colors.gray[80]}/${theme.opacity[10]})`,
        },
        muted   : `rgb(${theme.colors.gray[5]})`,
        inactive: `rgb(${theme.colors.gray[20]})`,
        emphasis: {
          DEFAULT: `rgb(${theme.colors.gray[100]})`,
          subtle : `rgb(${theme.colors.gray[95]})`,
          alpha  : {
            DEFAULT: `rgb(${theme.colors.gray[0]}/${theme.opacity[5]})`,
            subtle : `rgb(${theme.colors.gray[0]}/${theme.opacity[10]})`,
          },
        },
        accent: {
          DEFAULT : `rgb(${theme.colors.blue[0]})`,
          emphasis: `rgb(${theme.colors.blue[40]})`,
        },
        success: {
          DEFAULT : `rgb(${theme.colors.green[0]})`,
          emphasis: `rgb(${theme.colors.green[40]})`,
        },
        warning: {
          DEFAULT : `rgb(${theme.colors.orange[0]})`,
          emphasis: `rgb(${theme.colors.orange[40]})`,
        },
        danger: {
          DEFAULT : `rgb(${theme.colors.red[0]})`,
          emphasis: `rgb(${theme.colors.red[40]})`,
        },
      },
      borderColor: {
        DEFAULT: `rgb(${theme.colors.gray[15]})`,
        default: {
          DEFAULT: `rgb(${theme.colors.gray[15]})`,
          alpha  : `rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        },
        subtle: {
          DEFAULT: `rgb(${theme.colors.gray[20]})`,
          alpha  : `rgb(${theme.colors.gray[100]}/${theme.opacity[10]})`,
        },
        muted     : `rgb(${theme.colors.gray[10]})`,
        onemphasis: {
          DEFAULT: `rgb(${theme.colors.gray[70]})`,
          alpha  : {
            DEFAULT: `rgb(${theme.colors.gray[0]}/${theme.opacity[5]})`,
            subtle : `rgb(${theme.colors.gray[0]}/${theme.opacity[10]})`,
          },
        },
        accent: {
          DEFAULT : `rgb(${theme.colors.blue[10]})`,
          emphasis: `rgb(${theme.colors.blue[40]})`,
        },
        success: {
          DEFAULT : `rgb(${theme.colors.green[10]})`,
          emphasis: `rgb(${theme.colors.green[40]})`,
        },
        warning: {
          DEFAULT : `rgb(${theme.colors.orange[10]})`,
          emphasis: `rgb(${theme.colors.orange[40]})`,
        },
        danger: {
          DEFAULT : `rgb(${theme.colors.red[10]})`,
          emphasis: `rgb(${theme.colors.red[40]})`,
        },
      },
      boxShadowColor: ({ theme }) => ({ ...theme('backgroundColor') }),
      boxShadow     : {
        'none'                : '0 0 #0000',
        'sm'                  : `0 1px 3px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 0 1px 2px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'md'                  : `0 4px 6px -1px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 0 2px 4px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'DEFAULT'             : `0 4px 6px -1px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 0 2px 4px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'lg'                  : `0 10px 15px -3px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 0 4px 6px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'lg-top'              : `0 -10px 15px -3px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 0 -4px 6px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'lg-left'             : `-10px 0 15px -3px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), -4px 0 6px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'lg-right'            : `10px 0 15px -3px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 4px 0 6px rgb(${theme.colors.gray[100]}/${theme.opacity[5]})`,
        'lg-onemphasis'       : `0 10px 15px -3px rgb(${theme.colors.gray[100]}/${theme.opacity[35]}), 0 4px 6px -2px rgb(${theme.colors.gray[100]}/${theme.opacity[15]})`,
        'lg-onemphasis-darker': `0 10px 15px -3px rgb(${theme.colors.base.black}/${theme.opacity[85]}), 0 4px 6px -2px rgb(${theme.colors.base.black}/${theme.opacity[65]})`,
        'lg-accent'           : `0 10px 15px -3px rgb(${theme.colors.blue[40]}/${theme.opacity[10]}), 0 4px 6px -2px rgb(${theme.colors.blue[40]}/${theme.opacity[5]})`,
        'lg-success'          : `0 10px 15px -3px rgb(${theme.colors.green[40]}/${theme.opacity[10]}), 0 4px 6px -2px rgb(${theme.colors.green[40]}/${theme.opacity[5]})`,
        'lg-warning'          : `0 10px 15px -3px rgb(${theme.colors.orange[40]}/${theme.opacity[5]}), 0 4px 6px -2px rgb(${theme.colors.orange[40]}/${theme.opacity[5]})`,
        'lg-danger'           : `0 10px 15px -3px rgb(${theme.colors.red[40]}/${theme.opacity[10]}), 0 4px 6px -2px rgb(${theme.colors.red[40]}/${theme.opacity[5]})`,
        'xl'                  : `0 0 1px rgb(${theme.colors.gray[100]}/${theme.opacity[15]}), 0 8px 10px -2px rgb(${theme.colors.gray[100]}/${theme.opacity[10]}), 0 16px 25px -2px rgb(${theme.colors.gray[100]}/${theme.opacity[10]})`,
        '2xl'                 : `0 20px 40px -8px rgb(${theme.colors.gray[100]}/${theme.opacity[25]})`,
      },
      borderRadius: {
        'none'   : 0,
        'sm'     : '4px',
        'md'     : '8px',
        'DEFAULT': '8px',
        'lg'     : '12px',
        'xl'     : '16px',
        '2xl'    : '22px',
        'full'   : '999999px',
      },
      outlineColor: {
        DEFAULT    : `rgb(${theme.colors.gray[15]})`,
        default    : `rgb(${theme.colors.gray[15]})`,
        inherit    : 'inherit',
        current    : 'currentColor',
        transparent: 'transparent',
        accent     : `rgb(${theme.colors.blue[40]})`,
        success    : `rgb(${theme.colors.green[40]})`,
        warning    : `rgb(${theme.colors.warning[40]})`,
        danger     : `rgb(${theme.colors.danger[40]})`,
      },
    },
  },
}
