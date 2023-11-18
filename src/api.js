import axios from 'axios';

export default axios.create({
    baseURL: `http://hackathonbackend.centralindia.cloudapp.azure.com/app1`,
});