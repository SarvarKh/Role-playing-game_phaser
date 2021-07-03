/**
 * @jest-environment jsdom
 */
import { 
    setplayer,
    highscore,
    getscore
 } from './localstorage';

describe("Manupulating LocalStorage data", () => {
    beforeEach(() => {
        setplayer('Romano');
    })
    test("Store user name into LocalStorage", () => {
        const dataAddedToLS = {
            'player': "Romano"
        };
        expect(localStorage.getItem("player")).toEqual(dataAddedToLS.player);
        expect(localStorage.getItem("player")).not.toEqual("Melisa");
        
        localStorage.clear();
    })

    test('Set the score if the key-player is in localStorage', () => {
        highscore(100);
        expect(parseInt(localStorage.getItem('highscore'), 10)).toBe(100);
    
        expect(localStorage.getItem('highscore')).not.toBe(200);
    });

    test('Set the score if the key-player is in localStorage', () => {
        getscore(100);
        expect(parseInt(localStorage.getItem('score'), 10)).toBe(100);

        expect(localStorage.getItem('score')).not.toBe('XYZ');
    });
})