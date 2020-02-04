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
    getAllPeople = () => (
        this.getResource('/people/')
    )
    getPerson = (id) => (
        this.getResource(`/people/${id}/`)
    )
    getAllPlanets = () => (
        this.getResource('/planets/')
    )
    getPlanet = (id) => (
        this.getResource(`/planets/${id}/`)
    )
    getAllStarships = () => (
        this.getResource('/starships/')
    )
    getStarship = (id) => (
        this.getResource(`/starships/${id}/`)
    )
}