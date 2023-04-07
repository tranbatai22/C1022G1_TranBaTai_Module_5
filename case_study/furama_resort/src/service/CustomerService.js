import axios from "axios";

export const findAll = async () => {
    try {
        return await axios.get('http://localhost:8080/customers');
    } catch (error) {
        console.log(error);
    }
}

export const findAllCustomerType = async () => {
    try {
        return await axios.get('http://localhost:8080/customerType');
    } catch (error) {
        console.log(error);
    }
}

export const save = async (customer) => {
    try {
        await axios.post('http://localhost:8080/customers', {...customer})
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customers/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/customers/${id}`)).data
    } catch (error) {
        console.log(error);
    }
}

export const update = async (customer) => {
    try {
        await axios.put(`http://localhost:8080/customers${customer.id}`, {...customer})
    } catch (error) {
        console.log(error);
    }
}