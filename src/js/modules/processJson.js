import { Temps } from "./temps"

/**
 * @param {FUNCTION} param - Use the return from callWeather to proccess an Object with only my data
*/

export function processJson(obj){
    console.log(obj)
    const { name, main: {temp, feels_like, humidity}, sys: {country}, wind: {speed},  weather: [weather] } = obj
    const tempsCon = new Temps()
    let temps = tempsCon.tempsConvert(temp)
    let tempsArr = tempsCon.getTemps()

    return {
        name, 
        country, 
        tempsArr, 
        feels_like, 
        humidity, 
        speed, 
        weather
    }
}
