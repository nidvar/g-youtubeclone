import axios from 'axios';

const API = 'AIzaSyAI3n3R9Tx1vCP4sOXMtSxR_02B7__ua6s';

const file = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params:{
        part:'snippet',
        maxResults:5,
        key: API
    }
})

export default file