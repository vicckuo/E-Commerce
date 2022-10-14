import axios from "axios";

const BASE_URL = "http://localhost:5500/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDdiYjZiYmZhM2JlMWM4N2QxZTNhZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NTczNTU4MiwiZXhwIjoxNjY1OTk0NzgyfQ.98huFvQoHFurtU8bRpvNClGujXng75uTGPViq8MarPI"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
})