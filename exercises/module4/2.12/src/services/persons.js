import axios from "axios"

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl)

const addOne = (newPerson) => {
    console.log("add one");
    return axios.post(baseUrl, newPerson)
}

const updateOne = (newPerson, id) => {
    axios.post(`${baseUrl}/${id}`, newPerson)
}

const deleteOne = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default {
    getAll,
    addOne,
    deleteOne,
    updateOne,
}