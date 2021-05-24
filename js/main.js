const api = {
    key: "9b88ea4d1e108a968590902c522aa330",
    //base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api.key}&units=metric`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }

  function displayResults(weather){
    console.log(weather)
    
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp')
    temp.innerText = `${Math.round((weather.main.temp * 9/5) + 32)}°F`

    let forecast = document.querySelector('.current .weather')
    forecast.innerText = weather.weather[0].main

    let hilow = document.querySelector('.hi-low')
    hilow.innerText = `${Math.round((weather.main.temp_min * 9/5) + 32)}°C || ${Math.round((weather.main.temp_max * 9/5) + 32)}°C`
}