import Box from "@mui/material/Box";
import {Container} from "@mui/material";
import {useFeedbacks} from "./lib/useFeedbacks";
import {RatingFilter} from "./components/RatingFilter";
import {FeedBackTable} from "./components/FeedBackTable";
import {useFeedbackFilters} from "./lib/useFeedbackFilters";
import {AppWrapper} from "./shared/ui/AppWrapper/AppWrapper";
import {NewFeedbackButton} from "./components/NewFeedbackButton";

/**
 * Our entry point to the app. Shows feedbacks and filters.
 * @constructor
 */
function App() {
    const {feedbackFilters, onFilterChange} = useFeedbackFilters();
    const {isFeedbacksLoading, feedbacks, onFeedBackAdd} = useFeedbacks(feedbackFilters);

    return (
        <AppWrapper>
            <Box sx={{
                width: "100%",
                height: "100vh",
                background: '#fff'
            }}>
                <Container maxWidth='xl'>
                    <RatingFilter
                        selectedRating={feedbackFilters.rating}
                        handleRatingFilter={(value: number) => onFilterChange('rating', value)}
                    />
                    <NewFeedbackButton onNewFeedbackAdd={onFeedBackAdd}/>
                    <FeedBackTable data={feedbacks} isLoading={isFeedbacksLoading}/>
                </Container>
            </Box>
        </AppWrapper>
    )
}

export default App
