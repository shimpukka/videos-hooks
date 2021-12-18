import axios from 'axios';

const KEY = 'AIzaSyBMP-5O4QjRpIT9esV7iGwjp0xTwrBMDMs';

// create preconfigured instance of axios
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});