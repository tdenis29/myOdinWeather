import { Fetch } from "./Fetch";
import { View } from "./View";

export class Facade {
    constructor(){
        this.view = new View()
        this.fetch = new Fetch()
        this.search = document.getElementById('search')
        this.searchCity = document.getElementById('searchCity')
    }
    run(){
        this.search.addEventListener('submit', e => {
            e.preventDefault()
            if(this.searchCity !== ""){
                console.log(this.searchCity.value)
                // this.fetch.callWeather(this.searchCity)
            }
        })
    }

}