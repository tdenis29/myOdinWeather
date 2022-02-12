export class Fetch {
    constructor(){

    }
    async callWeather(string){
        const apiKey = 'ff5ed1fd0eb8a82fc5d2948347d0000c';
        let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${string}&appid=${apiKey}`;
        const response = await fetch(apiURL)
    
        if(response.status === 200){
            let json = await response.json()
            return json
        } else {
            throw new Error(response.status)
        }
    };
}