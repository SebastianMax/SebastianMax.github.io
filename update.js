function update() {
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather?zip=50737,DE&appid=02ee4bca37e17064be5008c73ff486ce&lang=de"
    }).done(function (data) {
        var temp = (data.main.temp - 273.15).toFixed(1) + "°C";
        $("#current_temperature").text(temp);
        $("#current_icon").attr("class", "wi wi-owm-" + data.weather[0].id);
    
        var wind_direction = get_wind_direction(data.wind.deg);
        var wind_speed = (data.wind.speed*3.6).toFixed(1);
        $("#current_wind").text(wind_speed + "km/h (" + wind_direction + ")");

        var sunrise = new Date(data.sys.sunrise * 1000 + data.timezone * 1000);
        var sunrise_h = sunrise.getHours();
        var sunrise_min = sunrise.getMinutes() < 10 ? "0" + sunrise.getMinutes() : sunrise.getMinutes();
        var sunset = new Date(data.sys.sunset * 1000 + data.timezone * 1000);
        var sunset_h = sunset.getHours();
        var sunset_min = sunset.getMinutes() < 10 ? "0" + sunset.getMinutes() : sunset.getMinutes();
        $("#sunrise").text(sunrise_h + ":" + sunrise_min);
        $("#sunset").text(sunset_h + ":" + sunset_min);

        var daylight = sunset - sunrise;
        var daylight_h = Math.floor(daylight / 1000 / 60 / 60);
        var daylight_min = Math.floor(daylight / 1000 / 60 % 60);
        $("#daylight").text(daylight_h + "h " + daylight_min + "min");
    });
    
    $.ajax({
        type: "GET",
        url: "https://api.openweathermap.org/data/2.5/forecast?zip=50737,DE&appid=02ee4bca37e17064be5008c73ff486ce&lang=de"
    }).done(function (data) {
        var prediction_temp = (data.list[0].main.temp - 273.15).toFixed(0) + "°C";
        $("#prediction_1").text(prediction_temp);
        $("#prediction_icon_1").attr("class", "wi wi-owm-" + data.list[0].weather[0].id);
        $("#prediction_rain_1").text((data.list[0].pop * 100).toFixed(0) + "%");
    
        prediction_temp = (data.list[1].main.temp - 273.15).toFixed(0) + "°C";
        $("#prediction_2").text(prediction_temp);
        $("#prediction_icon_2").attr("class", "wi wi-owm-" + data.list[1].weather[0].id);
        $("#prediction_rain_2").text((data.list[1].pop * 100).toFixed(0) + "%");
    
        prediction_temp = (data.list[2].main.temp - 273.15).toFixed(0) + "°C";
        $("#prediction_3").text(prediction_temp);
        $("#prediction_icon_3").attr("class", "wi wi-owm-" + data.list[2].weather[0].id);
        $("#prediction_rain_3").text((data.list[2].pop * 100).toFixed(0) + "%");
    });

    var d = new Date();
    if(d.getHours() > 6) {
        setTimeout(update, 1000*60*10);
    } else {
        setTimeout(update, 1000*60*60);
    }
    
}