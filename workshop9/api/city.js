const axios = require("axios");
const settings = require("../setting");
const city = (cityName = "Bangkok", countryCode = "th") => {
    return axios
        .get(`${settings.apiUrl}?q=${cityName},${countryCode}&appid=${settings.apiKey}&units=metric`);    
}
module.exports = city;
