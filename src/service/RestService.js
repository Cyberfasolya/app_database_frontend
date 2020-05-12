import Axios from "axios";

export default class RestService {

  static getEmployees() {
    return Axios.get('http://localhost:8081/employees');
  }

  static getAnimals(dto) {
    return Axios.get('http://localhost:8081/animals', {
      params: {
        ...dto
      }
    });
  }

  static getExchanges() {
    return Axios.get('http://localhost:8081/exchanges');
  }

  static getZoos() {
    return Axios.get('http://localhost:8081/zoos');
  }

  static getSpecies() {
    return Axios.get('http://localhost:8081/species');
  }

  static createAnimal(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/animal',
      data: dto
    });
  }
}
