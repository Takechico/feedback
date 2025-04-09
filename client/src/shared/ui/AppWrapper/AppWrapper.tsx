import React from "react";
import {Box} from '@mui/material';


interface Props {
    children: React.ReactNode;
}

export const AppWrapper: React.FC<Props> = ({children}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '30px'}}>
            {children}
        </Box>
    )
}