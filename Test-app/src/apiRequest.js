import axios from 'axios'

const BASE_URL= 'https://nightshirt-swordfish.cyclic.app/api'

export const publicRequest = axios.create({
    baseURL:  BASE_URL,
})