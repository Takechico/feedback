import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {NewFeedBack} from "../model/feedback";
import {Button, Container, Typography} from "@mui/material";
import {FormInput} from "../shared/ui/FormParts/FormInput";
import {FormTextArea} from "../shared/ui/FormParts/FormTextArea";
import {FormThemeProvider} from "../shared/ui/FormParts/FormThemeProvider";


interface Props {
    model: NewFeedBack
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
    onModelChange: (property: keyof NewFeedBack, value: string | number) => void;
}

export const FeedbackForm: React.FC<Props> = ({model, onSubmit, onModelChange}) => {
    return (
        <FormThemeProvider>
            <Container maxWidth="md" sx={{py: 4}}>
                <Box component="form" sx={{maxWidth: 680, mx: 'auto'}} onSubmit={onSubmit}>
                    <FormInput
                        label="Name"
                        required
                        value={model.customer_name}
                        onChange={(e) => onModelChange('customer_name', e.target.value)}
                        placeholder="Enter your name"
                    />
                    <Typography component="legend">CHOOSE RATING</Typography>
                    <Rating
                        name="simple-controlled"
                        value={model.rating}
                        onChange={(_event, newValue) => {
                            onModelChange('rating', Number(newValue));
                        }}
                    />
                    <FormTextArea
                        label="Your feedback"
                        value={model.message}
                        onChange={(e) => onModelChange('message', e)}
                        placeholder="Enter your feedback"
                        maxLength={500}
                    />
                    <Button type='submit' variant="outlined" color="success">SAVE</Button>
                </Box>
            </Container>
        </FormThemeProvider>
    )
}