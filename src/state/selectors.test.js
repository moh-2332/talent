import "@testing-library/jest-dom";

import { getStories, getStatus } from "./selectors";

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

const SUCCESS = { value: "Success", message: "Success" }

const STATE = {
    stories: [FIRST_STORY, SECOND_STORY],
    storyIds: [1, 2],
    status: SUCCESS
}

describe('Test selector', () => {
    it('should return the stories', () => {
        const stories = getStories(STATE);

        expect(stories).toHaveLength(2);
        expect(stories[0]).toMatchObject(FIRST_STORY);
        expect(stories[1]).toMatchObject(SECOND_STORY);
    });

    it('should return the status', () => {
        const status = getStatus(STATE);

        expect(status.value).toMatch('Success');
        expect(status).toMatchObject(SUCCESS);
    });
});