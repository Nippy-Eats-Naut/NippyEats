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

  createOrders(data){
    var config = {
      method: "post",
      url: API_URL + 'orders',
      headers: authHeader(),
      data: JSON.stringify(data)
    };

    return axios(config);
  }

  deliveryFee(mk1, mk2) {
    var R = 6371.0710; // Radius of the Earth in miles
    var rlat1 = mk1.latitude * (Math.PI/180); // Convert degrees to radians
    var rlat2 = mk2.latitude * (Math.PI/180); // Convert degrees to radians
    var difflat = rlat2-rlat1; // Radian difference (latitudes)
    var difflon = (mk2.longitude - mk1.longitude) * (Math.PI/180); // Radian difference (longitudes)

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    //return d;

    var baseFare = 400

    var Fee = baseFare + 50*d
    
    return parseFloat(Fee.toFixed(2).toString());
  }

}

export default new AppService();