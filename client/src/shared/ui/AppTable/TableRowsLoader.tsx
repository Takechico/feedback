import React from 'react';
import { TableRow, TableCell, Skeleton } from '@mui/material';

interface Props {
    rowsNum: number;
    cellNum: number;
}

export const TableRowsLoader: React.FC<Props> = ({ rowsNum, cellNum }) => {
    return (
        <>
            {[...Array(rowsNum)].map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                    {[...Array(cellNum)].map((_, cellIndex) => (
                        <TableCell component="th" scope="row" key={`cell-${rowIndex}-${cellIndex}`}>
                            <Skeleton animation="wave" variant="text" />
                        </TableCell>
                    ))}
                </TableRow>
            ))}
        </>
    );
};