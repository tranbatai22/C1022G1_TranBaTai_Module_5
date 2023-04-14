import axios from "axios";

export const findAll = () => {
    try {
        return axios.get('http://localhost:8080/api/category')
    } catch (error) {
        console.log(error);
    }
}