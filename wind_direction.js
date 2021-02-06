function get_wind_direction(wind_direction) {
    if(wind_direction < 11.25) {
        wind_direction = "N";
      } else if(wind_direction < 33.75) {
        wind_direction = "NNO";
      } else if(wind_direction < 56.25) {
        wind_direction = "NO";
      } else if(wind_direction < 78.75) {
        wind_direction = "ONO";
      } else if(wind_direction < 101.25) {
        wind_direction = "O";
      } else if(wind_direction < 123.75) {
        wind_direction = "OSO";
      } else if(wind_direction < 146.25) {
        wind_direction = "SO";
      } else if(wind_direction < 168.75) {
        wind_direction = "SSO";
      } else if(wind_direction < 191.25) {
        wind_direction = "S";
      } else if(wind_direction < 213.75) {
        wind_direction = "SSW";
      } else if(wind_direction < 236.25) {
        wind_direction = "SW";
      } else if(wind_direction < 258.75) {
        wind_direction = "WSW";
      } else if(wind_direction < 281.25) {
        wind_direction = "W";
      } else if(wind_direction < 303.75) {
        wind_direction = "WNW";
      } else if(wind_direction < 326.25) {
        wind_direction = "NW";
      } else if(wind_direction < 348.75) {
        wind_direction = "NNW";
      } else {
        wind_direction = "N";
      }

      return wind_direction;
}