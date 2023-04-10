import axios from "axios";

export const findAll = async () => {
    try {
        return await axios.get('  http://localhost:8080/customer');
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
        await axios.post('http://localhost:8080/customer', {...customer})
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/customer/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/customer/${id}`)).data
    } catch (error) {
        console.log(error);
    }
}

export const update = async (customer) => {
    try {
        await axios.put(`http://localhost:8080/customer${customer.id}`, {...customer})
    } catch (error) {
        console.log(error);
    }
}