let searchInp = document.querySelector('.weather_search');
let city = document.querySelector('.weather_city');
let day = document.querySelector('.weather_day');
let humidity = document.querySelector(".weather_indicator--humidity>value");
let wind = document.querySelector(".weather_indicator--wind>value");
let pressure = document.querySelector(".weather_indicator--pressure>value");
let image = document.querySelector(".weather_image>value");
let temperature = document.querySelector(".weather_temperature>value");

let weatherAPIKey = '9cb8ac2c9e5df4ea45bf939f5d21881e';
let weatherBaseEndpoint = 'http://api.openweathermap.org/data/2.5/weather?';

let getWeatherByCityName = async (city)=>{
    var endpoint = weatherBaseEndpoint + 'q=' + city + "&units=metric";
    endpoint += "&APPID=" + weatherAPIKey;
    let response = await fetch(endpoint);
    let weather = await response.json()
    //console.log(response)
    return weather;
}

getWeatherByCityName('London,uk');

searchInp.addEventListener('keydown', async (e)=>{
    if(e.keyCode === 13){
        let weather = await getWeatherByCityName(searchInp.value);
        updateCurrentWeather(weather);
    }
})

let updateCurrentWeather = (data) =>{
    city.textContent = data.name + ',' + data.sys.country;
    day.textContent = dayOfWeek();
}

let dayOfWeek = () => {
    return new Date().toLocaleDateString('en-EN', {'weekday': 'long'});
} 