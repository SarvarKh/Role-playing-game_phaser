/**
 * @jest-environment jsdom
 */
import { setplayer } from './localstorage';

describe("Manupulating with LocalStorage", () => {
    beforeAll(() => {
        setplayer("Romano")
    })
    test("Store user name into LocalStorage", () => {
        const dataAddedToLS = {
            'player': "Romano"
        };
        expect(JSON.parse(localStorage.getItem(JSON.stringify('Random project name')))).toBe(dataAddedToLS);
    })
})