import axios from "axios"

const http = axios.create({
    baseURL:'https://localhost:3333/'
})

export default http