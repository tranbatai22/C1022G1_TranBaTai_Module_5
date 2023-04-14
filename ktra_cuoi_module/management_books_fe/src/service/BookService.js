import axios from 'axios'

export const findAll = (name, category, page) => {
    try {
        return axios.get(`http://localhost:8080/api/book?name=${name}&category=${category}&page=${page ? page : '0'}`)
    } catch (error) {
        console.log(error);
    }
}


export const save = (book) => {
    try {
        axios.post('http://localhost:8080/api/book', {...book})
    } catch (error) {
        console.log(error);
    }
}

export const findById = (id) => {
    try {
        return axios.get(`http://localhost:8080/api/book/detail?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const update = (book) => {
    try {
        axios.put('http://localhost:8080/api/book', {...book})
    } catch (error) {
        console.log(error);
    }
}

export const remove = (id) => {
    try {
        axios.delete(`http://localhost:8080/book?id=${id}`)
    } catch (error) {
        console.log(error);
    }
}