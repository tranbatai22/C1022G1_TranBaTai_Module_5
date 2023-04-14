import axios from 'axios';

export const findAll = async () => {
    try {
        await axios.get('http://localhost:8080/api/category')
    } catch (error) {
        console.log(error);
    }
}