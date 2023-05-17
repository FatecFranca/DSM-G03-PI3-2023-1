import axios from "axios"

const http = axios.create({
    baseURL:'https://http://127.0.0.1:5173//'
})

export default http