import axios from "axios";

const apiPorta = "7209"

// apiLocal = Recebe o endereço da API.
const apiLocal = `https://localhost:${apiPorta}/api/`;



const api = axios.create({
    baseURL: apiLocal
});

export default api;