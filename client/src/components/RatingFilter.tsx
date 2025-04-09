import React from "react";
import {RATING_OPTIONS} from "../const/ratingOptions";
import {
    Box,
    Typography,
    Button,
    Stack,
} from '@mui/material';

interface Props {
    selectedRating: number | null;
    handleRatingFilter: (value: number) => void;
}

/**
 * Component for filtering feedbacks by buttons of rating
 */
export const RatingFilter: React.FC<Props> = ({selectedRating, handleRatingFilter}) => {
    return (
        <Box sx={{mb: 4}}>
            <Typography
                variant="h6"
                component="h2"
                sx={{
                    mb: 2,
                    fontWeight: 500
                }}
            >
                Rating Filter
            </Typography>

            <Stack direction="row" spacing={1.5}>
                {RATING_OPTIONS.map((option) => (
                    <Button
                        key={option.label}
                        variant={selectedRating === option.value ? "contained" : "outlined"}
                        onClick={() => handleRatingFilter(Number(option.value))}
                        sx={{
                            borderRadius: 50,
                            bgcolor: selectedRating === option.value ? 'black' : '#f3f4f6',
                            color: selectedRating === option.value ? 'white' : 'black',
                            border: 'none',
                            '&:hover': {
                                bgcolor: selectedRating === option.value ? 'black' : '#e5e7eb',
                                border: 'none'
                            },
                            fontWeight: 400,
                            textTransform: 'none',
                            px: 3,
                            py: 1
                        }}
                    >
                        {option.value === null ? 'Any' :
                            option.label === '6+' ? '6+' :
                                Array(Number(option.label)).fill('★').join('')}
                    </Button>
                ))}
            </Stack>
        </Box>
    );
};