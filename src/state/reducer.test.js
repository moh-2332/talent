import "@testing-library/jest-dom";

import reducer, { initialState, ACTION_TYPES } from "./reducer";

const UNKNOWN_TYPE = "UNKNOWN_TYPE";

const SUCCESS = { value: "Success", message: "Success" }
const ERROR = { value: "Error", message: "Error" }

const FIRST_STORY = {
    by: "me",
    id: 1,
    kids: [4, 5],
    score: 10,
    text: "first text",
    time: 1654545501,
    title: "first title",
    type: "story"
}

const SECOND_STORY = {
    by: "you",
    id: 2,
    kids: [7, 8, 9],
    score: 5,
    text: "second text",
    time: 1654545501,
    title: "second title",
    type: "story"
}

const FIRST_STORY_IDS = [1, 2, 3, 4, 5];
const SECOND_STORY_IDS = [6, 7];

describe("Test reducer", () => {
    it("should return the initial state", () => {
        const newState = reducer(initialState, { type: UNKNOWN_TYPE });
        expect(newState).toMatchObject(initialState);
    });

    it("should change the status correctly and keep the other states unchanged", () => {
        let newState = reducer(initialState, { type: ACTION_TYPES.SET_STATUS, payload: SUCCESS });
        expect(newState.status.value).toMatch('Success');

        newState = reducer(newState, { type: ACTION_TYPES.SET_STATUS, payload: ERROR });
        expect(newState.status.value).toMatch('Error');

        expect(newState.stories).toHaveLength(0);
        expect(newState.storyIds).toHaveLength(0);
    });

    it("should add a story correctly", () => {
        let newState = reducer(initialState, { type: ACTION_TYPES.ADD_STORY, payload: FIRST_STORY });
        expect(newState.stories).not.toHaveLength(0);
        expect(newState.stories).toHaveLength(1);
        expect(newState.stories).toContainEqual(FIRST_STORY);

        newState = reducer(newState, { type: ACTION_TYPES.ADD_STORY, payload: SECOND_STORY });
        expect(newState.stories).toHaveLength(2);
        expect(newState.stories[0]).toMatchObject(FIRST_STORY);
        expect(newState.stories[1]).toMatchObject(SECOND_STORY);
    });

    it("should set or replace the story ids correctly", () => {
        let newState = reducer(initialState, { type: ACTION_TYPES.SET_STORY_IDS, payload: FIRST_STORY_IDS });
        expect(newState.storyIds).not.toHaveLength(0);
        expect(newState.storyIds).toHaveLength(5);
        expect(newState.storyIds).toEqual(expect.arrayContaining(FIRST_STORY_IDS));
        expect(newState.storyIds).toContainEqual(3);
        expect(newState.storyIds).not.toContainEqual(10);

        newState = reducer(newState, { type: ACTION_TYPES.SET_STORY_IDS, payload: SECOND_STORY_IDS });
        expect(newState.storyIds).not.toHaveLength(0);
        expect(newState.storyIds).toHaveLength(2);
        expect(newState.storyIds).not.toEqual(expect.arrayContaining(FIRST_STORY_IDS));
        expect(newState.storyIds).toEqual(expect.arrayContaining(SECOND_STORY_IDS));
        expect(newState.storyIds).toContainEqual(6);
        expect(newState.storyIds).not.toContainEqual(10);
    });
});
