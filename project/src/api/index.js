import axios from 'axios'
import router from '@/router'

const DEV_DOMAIN = 'http://localhost:3000'
const UNAUTHORIZED = 401

const onUnauthorized = () => {
    router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)

}


const request = (method, url, data) => {
    return axios({
        method,
        url: DEV_DOMAIN + url,
        data
    }).then(res => {
        return res.data
    })
        .catch(error => {
            const { status } = error.response
            if (status === UNAUTHORIZED) onUnauthorized()
            throw error.response
        })
}

const { token } = localStorage
export const setAuthInHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}
setAuthInHeader(token)

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