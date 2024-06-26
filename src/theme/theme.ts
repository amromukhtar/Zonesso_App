import { createTheme } from '@shopify/restyle';
import { palette } from './theme-palette';

export const theme = createTheme({
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
    xxl: 32,
    xxxl: 100,
  },
  spacing: {
    none: 0,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 64,
    '10%': '10%',
    '20%': '20%',
    '30%': '30%',
    '40%': '40%',
    '50%': '50%',
  },
  colors: {
    primary: '#fd372f',
    secondary: palette.gray[500],
    background: 'white',
    card: palette.white,
    text: palette.gray[900],
    border: palette.gray[300],
    gray: palette.gray[700],
    danger: palette.red,
    warning: palette.yellow,
    success: palette.green,
    info: palette.blue,
    black: palette.black,
    white: palette.white,
    transparent: 'transparent',
    facebook: palette.facebook,
    google: palette.google,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      color: 'black',
      fontSize: 16,
    },
    primary: {
      color: 'primary',
      fontSize: 16,
    },
    secondary: {
      color: 'secondary',
      fontSize: 14,
    },
    largeHeader: {
      fontWeight: 'bold',
      fontSize: 28,
    },
    header: {
      fontWeight: 'bold',
      fontSize: 24,
    },
    subHeader: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  },
  buttonVariants: {
    defaults: {
      backgroundColor: 'primary',
    },
    primary: {
      backgroundColor: 'primary',
    },
    danger: {
      backgroundColor: 'danger',
    },
    warning: {
      backgroundColor: 'warning',
    },
    success: {
      backgroundColor: 'success',
    },
    info: {
      backgroundColor: 'info',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'gray',
    },
    transparent: {
      backgroundColor: 'transparent',
    },
  },
  buttonSizeVariants: {
    defaults: {
      paddingVertical: 'm',
      paddingHorizontal: 'm',
    },
    xs: {
      paddingVertical: 'xs',
      paddingHorizontal: 'xs',
    },
    s: {
      paddingVertical: 's',
      paddingHorizontal: 's',
    },
    m: {
      paddingVertical: 'm',
      paddingHorizontal: 'm',
    },
    l: {
      paddingVertical: 'l',
      paddingHorizontal: 'l',
    },
  },
  cardVariants: {
    defaults: {
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    flat: {
      borderWidth: 1,
      borderColor: 'border',
    },
  },
  cardCoverImageSizeVariants: {
    defaults: {
      height: 125,
    },
    s: {
      height: 100,
    },
    m: {
      height: 125,
    },
    l: {
      height: 150,
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    text: palette.gray[100],
    secondary: palette.gray[400],
    background: palette.gray[950],
    card: palette.gray[800],
    border: palette.gray[600],
  },
};
