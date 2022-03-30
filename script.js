

let weather ={
    apiKey: "isi dengan API",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=metric&appid=" +
            this.apiKey
    )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;
        //console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Lokasi: " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText ="Temperatur: "+ temp + "°C";
        document.querySelector(".humidity").innerText = "Kelembapan udara: "+ humidity + "%";
        document.querySelector(".wind").innerText = "Kecepatan angin: " + speed + "km/jam";
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click",function (){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key === "Enter") {
        weather.search();
    }
});

weather.fetchWeather("Ambarawa");
