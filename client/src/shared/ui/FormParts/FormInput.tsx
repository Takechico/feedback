import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TextField, { TextFieldProps } from '@mui/material/TextField';

interface FormInputProps extends Omit<TextFieldProps, 'label'> {
  label?: string;
  required?: boolean;
  tooltip?: string;
  icon?: React.ReactNode;
}

/**
 * Enhanced form input component with consistent styling
 */
export const FormInput: React.FC<FormInputProps> = ({
  label,
  required = false,
  tooltip,
  icon,
  value,
  onChange,
  placeholder,
  multiline = false,
  rows = 1,
  fullWidth = true,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <Box sx={{ mb: 3 }}>
      {label && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: 1,
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: focused ? 'primary.main' : 'text.secondary',
              }}
            >
              {label}
            </Typography>
            {required && (
              <Typography sx={{ color: 'error.main', mx: 0.5, fontSize: '0.75rem' }}>*</Typography>
            )}
          </Box>
          {tooltip && (
            <Tooltip title={tooltip} arrow placement="top">
              <InfoOutlinedIcon
                sx={{
                  color: 'action.active',
                  fontSize: 16,
                  opacity: 0.6,
                  '&:hover': { opacity: 1 },
                  cursor: 'pointer',
                }}
              />
            </Tooltip>
          )}
        </Box>
      )}

      <TextField
        fullWidth={fullWidth}
        variant="outlined"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        InputProps={{
          startAdornment: icon ? (
            <InputAdornment position="start">{icon}</InputAdornment>
          ) : undefined,
          sx: {
            backgroundColor: focused ? 'background.paper' : 'action.hover',
            '&:hover': {
              backgroundColor: 'background.paper',
            },
            color: focused ? 'primary.main' : 'text.primary',
            fontWeight: focused ? 500 : 400,
            ...(multiline && {
              padding: '10px 14px',
              height: 'auto',
            }),
          },
        }}
        sx={{
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: focused ? 'primary.main' : 'transparent',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: focused ? 'primary.main' : 'divider',
          },
        }}
        {...props}
      />
    </Box>
  );
};
