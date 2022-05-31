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


export const setAuthInHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}
// const { token } = localStorage
// if (token) setAuthInHeader(token)

export const board = {
    fetch(id) {
        return id ? request('get', `/boards/${id}`) : request('get', '/boards')
    },
    create(title) {
        return request('post', '/boards', { title })
    }
}

export const card = {
    fetch(id) {
        return request('get', `/cards/${id}`)
    },
    create(title, listId, pos) {
        return request('post', '/cards', { title, listId, pos })
    }
}


export const auth = {
    login(email, password) {
        return request('post', '/login', { email, password })
    }
}