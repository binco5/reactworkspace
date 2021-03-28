import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ruP5ZQp6pfYvyt0dsx_xrK8UggarL7YpnEvlqzUs1hg'
    }
});

