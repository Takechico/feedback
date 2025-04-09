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

    return (
        <Box sx={{marginLeft: 'auto'}}>
            <Button onClick={handleOpen}>Feedback +</Button>
            <AppModal
                open={open}
                title="New Feedback"
                handleClose={handleClose}
            > <FeedbackForm model={feedback}
                            onSubmit={onSubmitFeedBack}
                            onModelChange={onChange}/></AppModal>
        </Box>
    )
}