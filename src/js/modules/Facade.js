import { Fetch } from "./Fetch";
import { Process } from "./processJson";
import { View } from "./View";

export class Facade {
    constructor(){
        this.view = new View()
        this.fetch = new Fetch()
        this.process = new Process()
        this.search = document.getElementById('search')
        this.searchCity = document.getElementById('searchCity')
    }
    run(){
        this.search.addEventListener('submit', e => {
            e.preventDefault()
            if(this.searchCity.value !== ""){
                this.fetch.callWeather(this.searchCity.value)
                .then(this.process.processJson)
                .then(this.view.updateview.bind(this.view))
                this.search.reset()
            }
        })
    }

}