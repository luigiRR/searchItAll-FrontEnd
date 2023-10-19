import axios from "axios";

let url = "http://localhost:8082/api";

export default {
  businessType(params){ return axios.get(`${url}/search/business-type`,{params}) },
  categories(params){ return axios.get(`${url}/search/categories`,{params}) }
}