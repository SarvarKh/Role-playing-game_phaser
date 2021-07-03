/**
 * @jest-environment jsdom
 */
import { setplayer } from './localstorage';

describe("Manupulating LocalStorage data", () => {
    beforeEach(() => {
        setplayer('Romano');
    })
    test("Store user name into LocalStorage", () => {
        const dataAddedToLS = {
            'player': "Romano"
        };
        expect(localStorage.getItem("player")).toEqual(dataAddedToLS.player);
        
        localStorage.clear();
    })
})