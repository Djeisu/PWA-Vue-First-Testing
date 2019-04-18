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
            if (callback) {
                callback(survivor);
                location.reload();
            }
        })
    },
    updateSurvivor: (body, callback) => {
        const urlXsunit = url + 'survivors';
        axios.put(urlXsunit, body,{'Content-Type': 'application/json'}).then((survivor) => {
            if (callback) {
                callback(survivor);
                location.reload();
            }
        })
    },
    postReportAbduction: (body, callback) => {
        const urlXsunit = url + 'report';
        axios.post(urlXsunit, body,{'Content-Type': 'application/json'}).then((report) => {
            if (callback) {
                callback(report);
                location.reload();
            }
        })
    },
    getAbducteds: (callback) => {
        const urlXsunit = url + 'report/abducteds/';
        axios.get(urlXsunit,{'Content-Type': 'application/json'}).then((abducteds) => {
            if (callback) {
                callback(abducteds);
            }
        })
    },
    getNonAbducteds: (callback) => {
        const urlXsunit = url + 'report/non-abducteds/';
        axios.get(urlXsunit,{'Content-Type': 'application/json'}).then((nonabducteds) => {
            if (callback) {
                callback(nonabducteds);
            }
        })
    },
}