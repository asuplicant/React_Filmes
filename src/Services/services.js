import axios from "axios";

const apiPorta = "5257";

// apiLocal = Recebe o endereço da API.
const apiLocal = `http://localhost:${apiPorta}/api/`;
// const apiLocal = "https://localhost:7209/api/";


const api = axios.create({
    baseURL: apiLocal
});

export default api;