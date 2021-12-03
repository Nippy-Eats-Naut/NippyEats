import axios from 'axios'
const API_URL = 'https://api.nippyeats.com/v1/foodies/';

class AuthService {
  login(data) {
    var config = {
        method: "post",
        url: API_URL + 'login',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    };
    return axios(config)
      .then(response => {
        if (response.data.data.authorization.token) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(data) {
    var config = {
        method: "post",
        url: API_URL + 'signup',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    };
    return axios(config);
  }

  verifySignup(data) {
    var config = {
        method: "post",
        url: API_URL + 'signup/verify',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    };
    return axios(config)
      .then(response => {
        if (response.data.data.authorization.token) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        }

        return response.data;
      });
  }

  initiateReset(data) {
    var config = {
        method: "post",
        url: API_URL + 'password-reset/initiate',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    };
    return axios(config);
  }

  completeReset(data) {
    var config = {
        method: "post",
        url: API_URL + 'password-reset/complete',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(data)
    };
    return axios(config);
  }
}

export default new AuthService();