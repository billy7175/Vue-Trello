import axios from 'axios'
import router from '@/router'

const DEV_DOMAIN = 'http://localhost:3000'
const unauthorized = 401

const onAuthorized = () => {
    router.push('/login')
}


const request = (method, url, data) => {
    axios({
        method,
        url: DEV_DOMAIN + url,
        data
    }).then(res => res.data)
        .catch(res => {
            const { status } = res.response
            if (status === unauthorized) return onAuthorized()
            throw Error(res)
        })
}

export const board = {
    fetch() {
        return request('get', '/boards')
    }
}