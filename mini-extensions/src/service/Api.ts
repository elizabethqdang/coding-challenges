import axios from 'axios';
import { useEffect } from 'react';
import { setEnvironmentData } from 'worker_threads';

export default () => {
    return axios.create({
        baseURL:'https://airtable.com/app8ZbcPx7dkpOnP0/tblIzakozsIHPiZnI/viwi9EG3HlqIZ0Alh?blocks=hide'
    })
}

// useEffect(() => {
//     fetch('')
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//             throw response;
//         })
//         .then(data => {
//             setData(data);
//         })
//         .catch(error => {
//             console.error("Error fetching data: ", error);
//             setError(error);
//         })
//         .finally(() => {
//             setLoading(false);
//         })
// })