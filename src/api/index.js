import http from '@/components/network/http.js'

const getSwipeList = (params={}) => {
    let token = sessionStorage.getItem('_token')
    params.token = token
    return http.get('weather_mini',{"city":"重庆"})
} 

export {
    getSwipeList
}