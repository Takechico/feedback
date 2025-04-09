import React, {useState} from "react";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {Feedback} from "../model/feedback";
import {FeedbackForm} from "./FeedbackForm";
import {useFeedbackForm} from "../lib/useFeedbackForm";
import {AppModal} from "../shared/ui/AppModal/AppModal";


interface Props {
    onNewFeedbackAdd: (feedBack: Feedback) => void;
}

export const NewFeedbackButton: React.FC<Props> = ({onNewFeedbackAdd}) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const {
        feedback,
        onChange,
        onSubmitFeedBack
    } = useFeedbackForm(onNewFeedbackAdd);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const success = await onSubmitFeedBack(event);
        if (success) {
            handleClose();
        }
    };

    return (
        <Box sx={{margin: 'auto'}}>
            <Button color="success" variant="outlined" onClick={handleOpen}>Feedback +</Button>
            <AppModal
                open={open}
                title="New Feedback"
                handleClose={handleClose}
            >
                <FeedbackForm model={feedback}
                              onSubmit={handleSubmit}
                              onModelChange={onChange}/>
            </AppModal>
        </Box>
    )
}