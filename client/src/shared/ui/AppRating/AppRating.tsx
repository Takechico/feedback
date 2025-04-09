import React from "react";
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


interface Props {
    rating: number
}

export const AppRating: React.FC<Props> = ({rating}) => {
    return (
        <Rating
            name="hover-feedback"
            value={rating}
            precision={0.5}
            emptyIcon={<StarIcon style={{opacity: 0.55}} fontSize="inherit"/>}
        />
    )
}