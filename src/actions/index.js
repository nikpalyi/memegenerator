export const RECEIVE_MEMES = 'RECEIVE_MEMES';

//regular actionCreator: receiving json data -> returning action object with type and actual data
export const receiveMemes(json){
    const {memes} = json.data;
    return {
        type: RECEIVE_MEMES,
        memes
    }
}

// fetch ->return a response of json
function fetchMemesJson(){
    return fetch('hhtps://api.imgflip.com/get_memes')
    .then(response => response.json())
}

// inner function , dispatch function dispatch ???
export function fetchMemes(){
    return function(dispatch){
        return fetchMemesJson()
        .then(json => disptach (receiveMemes(json)))
    }
}

//async action creator behaviour
