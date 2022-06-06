export const ACTION_TYPES = {
    SET_STATUS: 'SET_STATUS',
    SET_STORY_IDS: 'SET_STORY_IDS',
    ADD_STORY: 'ADD_STORY'
}

const initialState = {
    stories: [],
    storyIds: [],
    status: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_STATUS:
            return { ...state, status: { valus: action.payload.value, message: action.payload.message } }
        case ACTION_TYPES.ADD_STORY:
            return { ...state, stories: [...state.stories, action.payload] }
        case ACTION_TYPES.SET_STORY_IDS:
            return { ...state, storyIds: action.payload }
        default:
            return state;
    }
}