import Axios from "axios";

export default class RestService {

  static getEmployees(dto) {
    return Axios.get('http://localhost:8081/employees', {
      params: {
        ...dto
      }
    });
  }

  static getAnimals() {
    return Axios.get('http://localhost:8081/animals');
  }

  static getAnimalsByBasicInfo(dto) {
    return Axios.get('http://localhost:8081/animals/filter-by-basic-info', {
      params: {
        ...dto
      }
    });
  }

  static getAnimalsBySpeciesInfo(dto) {
    return Axios.get('http://localhost:8081/animals/filter-by-species-info', {
      params: {
        ...dto
      }
    });
  }

  static getExchanges() {
    return Axios.get('http://localhost:8081/exchanges');
  }

  static getZoos(id) {
    return Axios.get('http://localhost:8081/zoos', {
      params: {
        speciesId: id
      }
    });
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

  static createZoo(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/zoo',
      data: dto
    });
  }

  static createExchange(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/exchange',
      data: dto
    });
  }

  static createSpecies(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/species',
      data: dto
    });
  }
}
