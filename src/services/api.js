import axios from "axios";

//06704215/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;