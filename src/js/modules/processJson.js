/**
 * @param {FUNCTION} param - Use the return from callWeather to proccess an Object with only my data
*/
export function processJson(obj){
   console.log(obj)
   console.log(obj.name)
   console.log(obj.main.feels_like)
   console.log(obj.main.humidity)
   console.log(obj.wind.speed)
   console.log(obj.weather[0].description)

   return myData = {
       name: obj.name,
       feels: obj.main.feels_like
       
   }
}