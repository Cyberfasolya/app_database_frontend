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

  static getFilterProviders(dto) {
    return Axios.get('http://localhost:8081/filter-providers', {
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

  static getAccessEmployees(dto) {
    return Axios.get('http://localhost:8081/access-employees', {
      params: {
        ...dto
      }
    });
  }

  static getExchanges() {
    return Axios.get('http://localhost:8081/exchanges');
  }

  static getAssortments() {
    return Axios.get('http://localhost:8081/assortments');
  }

  static getAccesses() {
    return Axios.get('http://localhost:8081/accesses');
  }

  static getFeeds() {
    return Axios.get('http://localhost:8081/feeds');
  }

  static getZooFeeds() {
    return Axios.get('http://localhost:8081/zoo-feed');
  }

  static getProviders() {
    return Axios.get('http://localhost:8081/providers');
  }

  static getSupplies() {
    return Axios.get('http://localhost:8081/supplies');
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

  static createEmployee(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/employee',
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

  static createAccess(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/access',
      data: dto
    });
  }

  static createFeed(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/feed',
      data: dto
    });
  }

  static createAssortment(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/assortment',
      data: dto
    });
  }

  static createProvider(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/provider',
      data: dto
    });
  }

  static createSupply(dto) {
    return Axios({
      method: 'post',
      url: 'http://localhost:8081/supply',
      data: dto
    });
  }
}
