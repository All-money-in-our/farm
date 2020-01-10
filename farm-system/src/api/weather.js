import axios from '../utils/axios'

export const getWeatherDate = () => {
    return new Promise((resolve, reject) => {
        let url = '/weather/mojiweather/forecast.php'
        axios.get(url)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}