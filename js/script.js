let weatherAPIKey = '9cb8ac2c9e5df4ea45bf939f5d21881e';

let weatherBaseEndpoint = 'http://api.openweathermap.org/data/2.5/weather?';

let getWeatherByCityName = async (city)=>{
    var endpoint = weatherBaseEndpoint + 'q=' + city + "&units=metric";
    endpoint += "&APPID=" + weatherAPIKey;
    let response = await fetch(endpoint);
    let weather = await response.json()

    console.log(response)
    console.log(weather);
}

getWeatherByCityName('London,uk');

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e9a4ec4ea320001135300543eb5afb52
//units=metric