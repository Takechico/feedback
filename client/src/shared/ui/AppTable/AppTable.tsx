import {TableContainer} from '@mui/material';
import TableRow from '@mui/material/TableRow';
import {styled, Table, Paper} from "@mui/material";
import TableCell, {tableCellClasses} from '@mui/material/TableCell';


/**
 * Main components which custom styles for building table;
 */
export const AppTable = styled(Table)(() => ({
    tableLayout: 'auto',
    width: '100%',
    minWidth: '1200px',
    fontSize: '12px',
}));

export const AppTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#004d3d',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 10,
        padding: '8px 6px',
        textTransform: 'uppercase',
        borderBottom: '1px solid #e0e0e0',
        verticalAlign: 'middle',
        lineHeight: 1.2,
        whiteSpace: 'normal',
        hyphens: 'auto',
        textAlign: 'left',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 10,
        padding: '8px 6px',
        fontWeight: 'bold',
        color: '#333',
        verticalAlign: 'middle',
    },
}));


export const AppTableContainer = styled(TableContainer)(() => ({
    maxHeight: '600px',
    overflowX: 'auto',

    width: '100%',

    '&::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
    },
    '&::-webkit-scrollbar-track': {
        backgroundColor: '#f1f1f1',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#c1c1c1',
        borderRadius: '4px',
        '&:hover': {
            backgroundColor: '#a8a8a8',
        },
    },

    '& .MuiTableHead-root': {
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },
}));

export const AppTableRow = styled(TableRow)(() => ({
    transition: 'background-color 0.2s ease',
    height: '10px', // Увеличиваем высоту строки для лучшей читаемости
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
    // Убираем последнюю границу
    '&:last-child td, &:last-child th': {
        borderBottom: 0,
    },
    '&:nth-of-type(even)': {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    },
    '&.row-active': {
        backgroundColor: 'rgba(0, 93, 70, 0.05)',
    },
    '&.row-selected': {
        backgroundColor: 'rgba(0, 93, 70, 0.1)',
    },
}));

export const AppTablePaper = styled(Paper)({
    width: '100%',
    overflow: 'hidden',
    borderRadius: '4px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
    margin: '0 0 16px 0',
});
