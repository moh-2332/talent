import { ACTION_TYPES } from "./reducer"

export function loadTopstories(from, to) {
    return async (dispatch, getState) => {
        dispatch({ type: ACTION_TYPES.SET_LOADING, payload: true });

        const fetchStories = async () => {
            if (getState().storyIds.length === 0) {
                const response = await fetch('https://hacker-news.firebaseio.com/v0/askstories.json');

                if (!response.ok) {
                    throw new Error("Something went wrong during the fetching the stories...");
                }

                const storyIds = await response.json();
                dispatch({ type: ACTION_TYPES.SET_STORY_IDS, payload: storyIds });
            }

            for (let storyId of getState().storyIds.slice(from, to)) {
                try {
                    const story = await fetchStoryById(storyId);
                    dispatch({ type: ACTION_TYPES.ADD_STORY, payload: story })
                } catch (error) {
                    dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
                }
            }
        }

        try {
            await fetchStories();
        } catch (error) {
            dispatch({ type: ACTION_TYPES.SET_ERROR, payload: error });
        }

        if (getState().loading) {
            dispatch({ type: ACTION_TYPES.SET_LOADING, payload: false });
        }
    };
}

const fetchStoryById = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);

    if (!response.ok) {
        throw new Error("Something went wrong during the fetching the story based on the provided id...");
    }

    return await response.json();
}
