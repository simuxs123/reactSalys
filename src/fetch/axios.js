import axios from 'axios'

const initialUrl = axios.create({ //susikuriam api adreso pradzia ir prie jos veliau pridedam Request url filtravimui
    baseURL:"https://restcountries.eu/rest/v2"
});
export default initialUrl;