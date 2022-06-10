import axios from "axios";
const APIUrl = "https://rickandmortyapi.com/api/character";

export default {
    get() {
        return axios.get(APIUrl);
    },
    find(id) {
        return axios.get(`${APIUrl}/${id}`);
    },
    getNext(url) {
        return axios.get(url);
    },
    findByName(name) {
        return axios.get(`${APIUrl}/?name=${name}`);
    }
};