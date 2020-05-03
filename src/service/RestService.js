import Axios from "axios";

export default class RestService {

  static getEmployees() {
    return Axios.get('http://localhost:8081/employees');
  }

  static getAnimals() {
    return Axios.get('http://localhost:8081/animals');
  }
}
