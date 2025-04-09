import {useState} from "react";
import {FeedbackFilter} from "../model/feedbackFilter";


export function useFeedbackFilters() {
    const [feedbackFilters, setFeedbackFilters] = useState<FeedbackFilter>({rating: 0});

    /**
     * Can extend later, cuz of that adding union type
     * Main handler for hanging props of our filter model.
     * @param property
     * @param value
     */
    const onFilterChange = (property: keyof FeedbackFilter, value: string | number) => {
        const clonedFilter = structuredClone(feedbackFilters);
        clonedFilter[property] = value;
        setFeedbackFilters(clonedFilter);
    }

    const onFilterReset = () => {
        setFeedbackFilters({rating: 0});
    }

    return {
        feedbackFilters,
        onFilterChange,
        onFilterReset
    }
}