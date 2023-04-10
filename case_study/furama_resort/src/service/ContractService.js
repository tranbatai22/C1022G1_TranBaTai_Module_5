import axios from "axios";

export const findAll = async () => {
    try {
        return await axios.get('http://localhost:8080/facility');
    } catch (error) {
        console.log(error);
    }
}

export const findAllFacilityType = async () => {
    try {
        return await axios.get('http://localhost:8080/facilityType');
    } catch (error) {
        console.log(error);
    }
}

export const save = async (facility) => {
    try {
        await axios.post('http://localhost:8080/facility', {...facility})
    } catch (error) {
        console.log(error);
    }
}

export const remove = async (id) => {
    try {
        await axios.delete(`http://localhost:8080/facility/${id}`)
    } catch (error) {
        console.log(error);
    }
}

export const detail = async (id) => {
    try {
        return (await axios.get(`http://localhost:8080/facility/${id}`)).data
    } catch (error) {
        console.log(error);
    }
}

export const update = async (facility) => {
    try {
        await axios.put(`http://localhost:8080/facility${facility.id}`, {...facility})
    } catch (error) {
        console.log(error);
    }
}