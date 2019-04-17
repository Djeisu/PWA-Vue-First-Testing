import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';
const endpoint = 'survivors';

export default {
    getSurvivors: (limit, callback) => {
        const urlXsunit = url + endpoint;
        axios.get(urlXsunit,{'Content-Type': 'application/json'}).then((survivors) => {
            if (callback) {
                callback(survivors);
            }
        })
    }
}