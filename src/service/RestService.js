import Axios from "axios";

export default class RestService {

    static getRecipes() {
        return Axios.get('http://localhost:10000/recipes');
    }
}