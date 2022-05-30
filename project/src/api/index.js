import axios from 'axios'
import router from '@/router'

const DEV_DOMAIN = 'http://localhost:3000'
const unauthorized = 401

const onAuthorized = () => {
    router.push('/login')
}


const request = (method, url, data) => {
    return axios({
        method,
        url: DEV_DOMAIN + url,
        data
    }).then(res => res.data)
        .catch(error => {
            const { status } = error.response
            if (status === unauthorized) return onAuthorized()
            throw error.response
        })
}


export const setAuthInHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
}

export const auth = {
    login(email, password) {
        return request('post', '/login', { email, password })
    }
}