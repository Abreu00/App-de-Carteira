import axios from "axios";

const productionAPI = process.env.VUE_APP_API;
/* const devAPI = "http://localhost:5000/api";
const mode = process.env.NODE_ENV; */

export default axios.create({
  /* baseURL: mode === "production" ? productionAPI : devAPI, */
  baseURL: productionAPI,
});
