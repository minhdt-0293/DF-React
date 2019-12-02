import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:3000/api/';

class AuthService {

  login(credentials){
    return axios({
      method: 'post',
      url: USER_API_BASE_URL + 'login',
      data: credentials
    })
  }

  getUserInfo() {
    return axios({
      method: 'post',
      url: USER_API_BASE_URL + 'get_user_info',
      data: {token: String(this.getUserToken())}
    })
  }

  getUserToken(){
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem("userInfo");
    return axios.post(USER_API_BASE_URL + 'logout', {}, this.getAuthHeader());
  }
}

export default new AuthService();
