import React, {useState} from "react";
import {Feedback, NewFeedBack} from "../model/feedback";
import fetchInstance from "../shared/api/fetchInstance";
import {ApiResponse} from "../shared/types/apiResponse";
import {NEW_FEEDBACK_INITIAL} from "../const/newFeedbackInitial";

/**
 * Hook for working with new feedback, also can extend
 * to update version.
 */
export const useFeedbackForm = (onSuccessCallback: (feedback: Feedback) => void) => {
    const [errors, setErrors] = useState<Array<any> | undefined>(undefined);
    const [feedback, setFeedBack] = useState<NewFeedBack>(NEW_FEEDBACK_INITIAL);
    const [isFeedbackCreating, setIsFeedbackCreating] = useState<boolean>(false);


    const onChange = (property: keyof NewFeedBack, value: string | number) => {
        const updatedFeedBack = structuredClone(feedback);
        updatedFeedBack[property] = value;
        setFeedBack(updatedFeedBack);
    }

    const onSubmitFeedBack = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsFeedbackCreating(true);

        try {
            const response = await fetchInstance.post<ApiResponse<Feedback>>('/api/feedback', feedback);

            if (response.code === 200) {
                setIsFeedbackCreating(false);
                if (onSuccessCallback) {
                    onSuccessCallback(response.data);
                }
                setFeedBack(NEW_FEEDBACK_INITIAL);
                return true;
            } else if (response.code === 404) {
                setErrors(response.errors);
            }

            setIsFeedbackCreating(false);
            return false;
        } catch (error) {
            console.error('Failed to submit feedback:', error);
            setIsFeedbackCreating(false);
            return false;
        }
    }

    return {
        errors,
        feedback,
        isFeedbackCreating,
        onChange,
        onSubmitFeedBack
    }
}