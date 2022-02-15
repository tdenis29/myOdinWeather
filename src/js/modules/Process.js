import { Temps } from "./Temps"
export class Process {
/**
 * @param {FUNCTION} param - Use the return from callWeather to proccess an Object with only my data
*/

    processJson(obj){
        // console.log(obj)
        const { name, main: {temp, pressure, humidity}, sys: {country}, wind: {speed},  weather: [weather], visibility } = obj
        const tempsCon = new Temps()
        let temps = tempsCon.tempsConvert(temp)
        let tempsArr = tempsCon.getTemps()

        return {
            name, 
            country, 
            tempsArr, 
            pressure, 
            humidity, 
            speed, 
            weather,
            visibility
        }
    }
}