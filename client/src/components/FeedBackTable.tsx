import React from "react";
import {Feedback} from "../model/feedback";
import {TableBody, TableHead} from "@mui/material";
import {AppRating} from "../shared/ui/AppRating/AppRating";
import {TableRowsLoader} from "../shared/ui/AppTable/TableRowsLoader";
import {FEEDBACK_TABLE_HEADERS} from "../const/feedback-table-headers";


import {
    AppTable,
    AppTableCell,
    AppTableRow,
    AppTablePaper,
    AppTableContainer
} from "../shared/ui/AppTable/AppTable";
import {formatDate} from "../shared/helpers/formatDate.ts";


interface Props {
    data: Feedback[];
    isLoading: boolean;
}

/**
 * Main Feedback component to display our feedbacks.
 * @param data
 * @param isLoading
 * @constructor
 */
export const FeedBackTable: React.FC<Props> = ({data, isLoading}) => {
    return (
        <AppTablePaper>
            <AppTableContainer>
                <AppTable stickyHeader aria-label="feedbak table">
                    <TableHead>
                        <AppTableRow>
                            {FEEDBACK_TABLE_HEADERS.map((header) => {
                                return (
                                    <AppTableCell key={header.label as string} align="center">
                                        {header.label}{' '}
                                    </AppTableCell>
                                );
                            })}
                        </AppTableRow>
                    </TableHead>
                    <TableBody>
                        {isLoading ? (
                            <TableRowsLoader rowsNum={3} cellNum={FEEDBACK_TABLE_HEADERS.length + 2}/>

                        ) : (
                            /* Remove the extra wrapping AppTableRow */
                            data.map((row) => (
                                <AppTableRow key={row.id}>
                                    <AppTableCell align="left">{row.id}</AppTableCell>
                                    <AppTableCell align="left"><AppRating rating={row.rating}/></AppTableCell>
                                    <AppTableCell align="left">{row.message}</AppTableCell>
                                    <AppTableCell align="left">{row.customer_name}</AppTableCell>
                                    <AppTableCell align="left">{formatDate(row.created_at)}</AppTableCell>
                                </AppTableRow>
                            ))
                        )}
                    </TableBody>
                </AppTable>
            </AppTableContainer>
        </AppTablePaper>
    );
}