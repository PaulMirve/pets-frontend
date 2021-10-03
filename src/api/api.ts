import axios from "axios";

export default axios.create({
    baseURL: 'https://pets-project-backend.herokuapp.com'
});