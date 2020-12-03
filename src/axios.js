import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/challege-329f3/us-central1/api'
});

export default instance;