import axios from 'axios';

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/books')
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const save = async (book) => {
    try {
        await axios.post('http://localhost:8080/books', {...book})
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/books/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const detail = async(id)=>{
    try {
        return (await axios.get(`http://localhost:8080/books/${id}`)).data
    } catch (error) {
        console.log(error)
    }
}

export const update = async (book) => {
    try {
        await axios.put(`http://localhost:8080/books/${book.id}`,{ ...book });
    } catch (error) {
        console.log(error);
    }
}