import axios from 'axios';

const initialState = {
    album: []
}

const GET_ALBUM = "GET_ALBUM"

export function getAlbum(album){
    return {
        type: GET_ALBUM,
        payload: album
    }
}

export default function (state = initialState, action){
    switch (action.type){
        case GET_ALBUM:
            return {...state, album: action.payload}
        default: 
            return state
    }
}