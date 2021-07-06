import Model from '../src/Model';

let model1;
let model2;
let model3;

beforeAll(() => {
  model1 = new Model();
  model3 = new Model();
});

describe('Test Sound model', () => {
  test('Test Sound', () => {
    expect(model1).toBeInstanceOf(Model);
    expect(model2).not.toBeInstanceOf(Model);
  });

  test('Test SoundOn', () => {
    expect(model1.soundOn).toBe(true);
    expect(model1.soundOn).not.toBe(false);
  });

  test('Test MusicOn', () => {
    expect(model1.musicOn).toBe(true);
    expect(model1.musicOn).not.toBe(false);
  });

  test('Test BgMusicPlaying', () => {
    expect(model1.bgMusicPlaying).toBe(false);
    expect(model1.bgMusicPlaying).not.toBe(true);
  });
});

describe('Test Sound model', () => {
  test('Set bgMusic On', () => {
    expect((model3.bgMusicPlaying = true)).toBe(true);
    expect(model3.bgMusicPlaying).not.toBe(false);
  });

  test('Set Sound On', () => {
    expect((model3.soundOn = false)).toBe(false);
    expect(model3.soundOn).not.toBe(true);
  });

  test('Set Music On', () => {
    expect((model3.musicOn = false)).toBe(false);
    expect(model3.musicOn).not.toBe(true);
  });
});