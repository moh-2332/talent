import { ACTION_TYPES } from "./reducer"

export function loadTopstories() {
    return async (dispatch, getState) => {

        const fetchStories = async () => {
            dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });
            const response = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');

            if (!response.ok) {
                throw new Error("Something went wrong during the fetching the stories...");
            }

            const storyIds = await response.json();
            storyIds.map(storyId => {
                return fetchStoryById(storyId)
                    .then(story => dispatch({ type: ACTION_TYPES.SET_STORIES, payload: story }))
                    .catch(error => dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error }));
            });
            dispatch({ type: ACTION_TYPES.SET_LOADING, payload: false });
        }

        try {
            fetchStories();
        } catch (error) {
            dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
        }
    };
}

const fetchStoryById = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

    if (!response.ok) {
        throw new Error("Something went wrong during the fetching the story based on the provided id...");
    }

    return response.json();
}
