import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface FormSectionTitleProps {
  title: string;
  tooltip?: string;
  icon?: React.ReactNode;
  showDivider?: boolean;
}

/**
 * Section title component for form sections
 */
export const FormSectionTitle: React.FC<FormSectionTitleProps> = ({
  title,
  tooltip,
  icon,
  showDivider = false,
}) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: showDivider ? 1.5 : 3,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {icon && (
            <Box sx={{ mr: 1.5, display: 'flex', alignItems: 'center', color: 'primary.main' }}>
              {icon}
            </Box>
          )}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            {title}
          </Typography>
        </Box>

        {tooltip && (
          <Tooltip title={tooltip} arrow placement="top">
            <InfoOutlinedIcon
              sx={{
                color: 'action.active',
                fontSize: 18,
                opacity: 0.6,
                '&:hover': { opacity: 1 },
                cursor: 'pointer',
              }}
            />
          </Tooltip>
        )}
      </Box>

      {showDivider && <Divider sx={{ mb: 3, opacity: 0.6 }} />}
    </>
  );
};
