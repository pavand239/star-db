export default class SwapiService {
    _apiBase='https://swapi.co/api'
    getResource = async (url) =>{
        let res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${this._apiBase}${url}
                , received ${res.status}`)
        }
        return await res.json();
    }
    getAllPeople = async (page=1) => {
        let people = await this.getResource(`/people/?page=${page}`);
        return people.results.map(this._transformPerson);
    }
    getPerson = async (id) => {
        let person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }
    getAllPlanets = async (page=1) => {
        let planets = await this.getResource(`/planets/?page=${page}`);
        return planets.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        let planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }
    getAllStarships = async (page=1) => {
        let starships = await this.getResource(`/starships/?page=${page}`);
        return starships.results.map(this._transformStarship);
    }
    getStarship = async(id) => {
        let starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }
    _extractId(item){
        const regExp=/\/([0-9]*)\/$/;
        return item.url.match(regExp)[1];
    }
    _addName(paramName,paramValue){ //add name to parameter, return object {value, name}
        return {
            value: paramValue,
            name: paramName
        }
    }
    _transformPlanet=(planet)=>{
        return {
            id:this._extractId(planet),
            imageBaseUrl:`https://starwars-visualguide.com/assets/img/planets/`,
            name:this._addName('Name', planet.name),
            params:[this._addName('Population', planet.population),
                    this._addName("Rotation period", planet.rotation_period),
                    this._addName('Diameter', planet.diameter)]
        }
    }
    _transformPerson=(person)=>{
        return {
            id:this._extractId(person),
            imageBaseUrl:`https://starwars-visualguide.com/assets/img/characters/`,
            name:this._addName('Name',person.name),
            params:[this._addName('Gender',person.gender),
                    this._addName('Birth Year', person.birth_year),
                    this._addName('Hair color',person.hair_color)]
        }
    }
    _transformStarship=(starship)=>{
        return {
            id:this._extractId(starship),
            imageBaseUrl:`https://starwars-visualguide.com/assets/img/starships/`,
            name:this._addName('Name',starship.name),
            params:[this._addName('Model',starship.model),
                    this._addName('Manufacturer',starship.manufacturer),
                    this._addName('Cost', starship.cost_in_credits)]
        }
    }

}

// let swapi = new SwapiService();
// swapi.getPlanet(3).then((body)=>{console.log(body)})