export const ACTION_TYPES = {
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR',
    SET_STORIES: 'SET_STORIES'
}

const initialState = {
    stories: [],
    loading: false,
    error: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_LOADING:
            return { ...state, loading: action.payload }
        case ACTION_TYPES.SET_ERROR:
            return { ...state, error: action.payload, loading: false }
        case ACTION_TYPES.SET_STORIES:
            return { ...state, stories: [...state.stories, action.payload] }
        default:
            return state;
    }
}