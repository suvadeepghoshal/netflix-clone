import axios from "axios";
/**
 * This creates a base URL for us to use the rest of the request as an appendation to this URL
 */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});
export default instance;