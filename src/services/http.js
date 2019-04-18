import axios from 'axios';

const url = 'http://localhost:3000/api/v1/';
const endpoint = 'survivors';

export default {
    getSurvivors: (limit, callback) => {
        const urlXsunit = url + 'survivors';
        axios.get(urlXsunit,{'Content-Type': 'application/json'}).then((survivors) => {
            if (callback) {
                callback(survivors);
            }
        })
    },
    getSurvivor: (id,callback) => {
        const urlXsunit = url + 'survivors/' + id;
        axios.get(urlXsunit,{'Content-Type': 'application/json'}).then((survivor) => {
            if (callback) {
                callback(survivor);
            }
        })
    },
    postSurvivor: (body, callback) => {
        const urlXsunit = url + 'survivors';
        axios.post(urlXsunit, body,{'Content-Type': 'application/json'}).then((survivor) => {
            console.log(survivor)
            if (callback) {
                callback(survivor);
            }
        })
    },
    updateSurvivor: (body, callback) => {
        console.log(body)
        const urlXsunit = url + 'survivors';
        axios.put(urlXsunit, body,{'Content-Type': 'application/json'}).then((survivor) => {
            console.log(survivor)
            if (callback) {
                callback(survivor);
            }
        })
    }
}