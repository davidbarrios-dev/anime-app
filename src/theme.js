import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#121212',
    textSecondary: '#fff',
    primary: '#d94555',
    white: '#fafafa',
  },
  fontSizes: {
    body: 14,
    subHeading: 16,
    heading: 20,
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  textInput: {
    borderColor: '#999',
  },
};

export default theme;