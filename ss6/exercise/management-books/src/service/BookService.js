import axios from 'axios';

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/api/book')
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const save = async (book) => {
    try {
        await axios.post('http://localhost:8080/api/book', {...book})
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/api/book/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/api/book/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}

export const update = async (book) => {
    try {
        await axios.put(`http://localhost:8080/api/book/${book.id}`, {...book});
    } catch (error) {
        console.log(error);
    }
}