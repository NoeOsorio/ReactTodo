import axios from "axios";

export default async function getList() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  return axios.get(url, { params: { offset: 20, limit: 20 } });
}
