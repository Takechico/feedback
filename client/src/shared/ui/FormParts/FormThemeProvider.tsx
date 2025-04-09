import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

const baseTheme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      letterSpacing: '0.01em',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.1rem',
      letterSpacing: '-0.01em',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '0.9rem',
      letterSpacing: '0.01em',
    },
    body1: {
      fontSize: '0.9rem',
      letterSpacing: '0.01em',
    },
    body2: {
      fontSize: '0.8rem',
      letterSpacing: '0.01em',
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: '0.03em',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.95rem',
          letterSpacing: '0.01em',
          transition: 'all 0.2s',
          borderRadius: '6px',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'primary.main',
            borderWidth: '1px',
          },
        },
        input: {
          height: '40px',
          padding: '0 14px',
          boxSizing: 'border-box',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.8rem',
          fontWeight: 500,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.9rem',
          letterSpacing: '0.01em',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '40px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.9rem',
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: '6px',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '0.75rem',
        },
      },
    },
  },
});

interface FormThemeProviderProps {
  children: React.ReactNode;
  theme?: Theme;
}

export const FormThemeProvider: React.FC<FormThemeProviderProps> = ({
  children,
  theme = baseTheme,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
