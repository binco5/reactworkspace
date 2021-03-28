import axios from 'axios';

const KEY = 'AIzaSyADURSZFYgDzvA9z7Di13lisq-oLOrFzOc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY
    }
});


