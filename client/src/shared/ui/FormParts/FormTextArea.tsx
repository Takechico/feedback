import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TextField, { TextFieldProps } from '@mui/material/TextField';


interface FormTextAreaProps extends Omit<TextFieldProps, 'multiline' | 'onChange'> {
  label?: string;
  tooltip?: string;
  required?: boolean;
  maxLength?: number;
  value: string;
  onChange?: (value: string) => void;
  rows?: number;
  showCharacterCount?: boolean;
}

export const FormTextArea: React.FC<FormTextAreaProps> = ({
  label,
  tooltip,
  required = false,
  maxLength = 0,
  value,
  onChange,
  rows = 3,
  showCharacterCount = true,
  placeholder,
  fullWidth = true,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const characterCount = value?.length || 0;
  const progress = maxLength > 0 ? (characterCount / maxLength) * 100 : 0;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      const newValue = e.target.value;
      if (maxLength <= 0 || newValue.length <= maxLength) {
        onChange(newValue);
      }
    }
  };

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
          {showCharacterCount && maxLength > 0 && (
            <Typography
              variant="caption"
              sx={{
                color: progress > 90 ? 'warning.main' : 'text.secondary',
                fontWeight: progress > 90 ? 500 : 400,
              }}
            >
              {characterCount}/{maxLength}
            </Typography>
          )}
          {tooltip && !showCharacterCount && (
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
        multiline
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        InputProps={{
          sx: {
            transition: 'all 0.2s',
            backgroundColor: focused ? 'background.paper' : 'action.hover',
            '&:hover': {
              backgroundColor: 'background.paper',
            },
            borderRadius: '6px',
            padding: '10px 14px',
            lineHeight: 1.5,
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

      {showCharacterCount && maxLength > 0 && (
        <Box sx={{ mt: 0.75 }}>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              height: 3,
              borderRadius: 5,
              bgcolor: 'action.hover',
              '& .MuiLinearProgress-bar': {
                bgcolor: progress > 90 ? 'warning.main' : 'success.main',
              },
            }}
          />
        </Box>
      )}

      {tooltip && showCharacterCount && (
        <Box sx={{ mt: 0.5, display: 'flex', justifyContent: 'flex-end' }}>
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
        </Box>
      )}
    </Box>
  );
};
