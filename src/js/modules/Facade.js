import { Fetch } from "./Fetch";
import { Process } from "./Process";
import { View } from "./View";

export class Facade {
    constructor(){
        this.view = new View()
        this.fetch = new Fetch()
        this.process = new Process()
        this.search = document.getElementById('search')
        this.searchCity = document.getElementById('searchCity')
        this.spin = document.getElementById('spin')
    }
    run(){
        this.search.addEventListener('submit', e => {
            e.preventDefault()
            if(this.searchCity.value !== ""){
                this.fetch.callWeather(this.searchCity.value)
                .then(this.process.processJson)
                .then(this.view.updateview.bind(this.view))
                .catch(this.view.displayError.bind(this.view))
                this.search.reset()
                this.spin.classList.toggle('stop')
            }
        })
    }

}