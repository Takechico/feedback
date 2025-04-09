import {useEffect, useState} from "react";
import {Feedback} from "../model/feedback";
import {FeedbackFilter} from "../model/feedbackFilter";
import fetchInstance from "../shared/api/fetchInstance";
import {ApiResponse} from "../shared/types/apiResponse";
import {AlertColor} from "@mui/material";


/**
 * Hook, for retrieving our Feedbacks.
 * Here we can extend, with adding new, updating and so on.
 */
export function useFeedbacks(
    filters: FeedbackFilter,
    openSnackbar: (newMessage: string, newType: AlertColor) => void
) {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
    const [isFeedbacksLoading, setIsFeedbacksLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsFeedbacksLoading(true);
        fetchInstance.get<ApiResponse<Feedback[]>>('/api/feedback', filters).then((answer) => {
            if (answer.code === 200) {
                setFeedbacks(answer.data);
            } else {
                //here can better handle errors
                console.error(answer.errors);
                openSnackbar(answer.message, 'error');
            }
            setIsFeedbacksLoading(false);
        });
    }, [filters]);

    const onFeedBackAdd = (newFeedback: Feedback) => {
        const updatedFeedBacks = structuredClone(feedbacks);
        updatedFeedBacks.unshift(newFeedback);
        setFeedbacks(updatedFeedBacks);
        openSnackbar('Feedback successfully added', 'success');
    }

    return {
        feedbacks,
        onFeedBackAdd,
        isFeedbacksLoading
    }
}