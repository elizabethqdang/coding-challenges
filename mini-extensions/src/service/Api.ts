import axios from 'axios';

export default () => {
    return axios.create({
        baseURL:'https://airtable.com/app8ZbcPx7dkpOnP0/tblIzakozsIHPiZnI/viwi9EG3HlqIZ0Alh?blocks=hide'
    })
}