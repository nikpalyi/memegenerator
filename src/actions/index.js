export const RECEIVE_MEMES = 'RECEIVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

//regular actionCreator: receiving json data -> returning action object with type and actual data
function receiveMemes(json) {
  const { memes } = json.data;
  return {
    type: RECEIVE_MEMES,
    memes
  };
}

// fetch ->return a response of json
function fetchMemesJson() {
  return fetch('https://api.imgflip.com/get_memes').then(response =>
    response.json()
  );
}

// inner function , dispatch function dispatch ???
export function fetchMemes() {
  return function(dispatch) {
    return fetchMemesJson().then(json => dispatch(receiveMemes(json)));
  };
}

export function newMeme(meme) {
  return {
    type: NEW_MEME,
    meme
  };
}

//async action creator behaviour
