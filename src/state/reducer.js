export const ACTION_TYPES = {
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    SET_STORY_IDS: 'SET_STORY_IDS',
    ADD_STORY: 'ADD_STORY'
}

const initialState = {
    stories: [],
    storyIds: [],
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_LOADING:
            return { ...state, loading: action.payload }
        case ACTION_TYPES.SET_ERROR:
            return { ...state, error: action.payload, loading: false }
        case ACTION_TYPES.ADD_STORY:
            return { ...state, stories: [...state.stories, action.payload] }
        case ACTION_TYPES.SET_STORY_IDS:
            return { ...state, storyIds: action.payload }
        default:
            return state;
    }
}