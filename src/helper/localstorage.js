const setplayer = (name) => {
  localStorage.setItem('player', name);
};

const highscore = (points) => {
  if (localStorage.getItem('highscore')) {
    if (localStorage.getItem('highscore') < points) localStorage.setItem('highscore', points);
  } else {
    localStorage.setItem('highscore', points);
  }
};

const getscore = (points) => {
  if (localStorage.getItem('player')) {
    localStorage.setItem('score', points);
    highscore(points);
  }
};

export { setplayer };
export { highscore };
export { getscore };