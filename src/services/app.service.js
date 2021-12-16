import axios from 'axios'
import authHeader from "../services/auth-header"
const API_URL = 'https://api.nippyeats.com/v1/foodies/';

class AppService {
    favourite(data) {
    var config = {
        method: "post",
        url: API_URL + 'providers/favorite',
        headers: authHeader(),
        data: JSON.stringify({"providerId": data})
    };
    return axios(config);
  }

}

export default new AppService();