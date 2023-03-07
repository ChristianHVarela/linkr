import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://www.localhost:5000';

const Api = (url) => {
    const instance = axios.create({
        baseURL: url,
    });
    return instance;
}

export default Api(apiUrl)