import axios from "axios";


export const usuariosAPI = axios.create({
    baseURL: 'https://reqres.in/api'
})