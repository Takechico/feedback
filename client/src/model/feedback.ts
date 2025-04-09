import {FeedbackRating} from "./feedback-rating";

/**
 * Main type of our Feedback.
 */
export type Feedback = {
    id: number;
    rating: FeedbackRating;
    message: string;
    created_at: string;
    customer_name: string;

}

/**
 * Type for create new feedBack
 */
export type NewFeedBack = {
    [key: string]: number | string;
    rating: FeedbackRating;
    message: string;
    customer_name: string;
}