import axios from 'axios';

const KEY = 'AIzaSyDg8-t1wXZKmCcZ3EuGOO3NkwfxO8nam5E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})