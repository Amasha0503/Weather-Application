console.log("js loaded!!")

let apikey="8da24fbcaf27409faa395950251611&q";

let txtCity=document.getElementById("txt_city");

txtCity.addEventListener("keypress",e=>{
    if(e.key=="Enter"){
        apiCall(txtCity.value)
    }
})

let apiCall=async (city)=>{


    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}=${city}&days=1&aqi=no&alerts=no`)
    .then(res => res.json())
    .then(data => {
        setWeather(data);
    })
}

let setWeather=(data)=>{
    let city=document.getElementById("city_name");
    let country=document.getElementById("country_name");
    let main_temperature=document.getElementById("main_temparature");
    let sun_rise_time=document.getElementById("sun_rise_time");
    let sun_set_time=document.getElementById("sun_set_time");
    let status=document.getElementById("status");
    let date=document.getElementById("date");
    let wind_speed=document.getElementById("wind_speed_value");
    let humidity=document.getElementById("humidity_value");
    let cloud_cover=document.getElementById("cloud_cover_value");
    let uv_index=document.getElementById("uv_index_value");
    let pressure=document.getElementById("pressure_value");
    let visibility=document.getElementById("visibility_value");

    city.innerText=data.location.name;
    country.innerText=data.location.country;
    main_temperature.innerText=data.current.temp_c+" ℃";
    date.innerText=data.location.localtime;
    main_status_image.src=data.current.condition.icon;
    status.innerText=data.current.condition.text;
    wind_speed.innerText=data.current.wind_kph+" km/h";
    humidity.innerText=data.current.humidity+" %";
    cloud_cover.innerText=data.current.cloud+" %";
    uv_index.innerText=data.current.uv; 
    pressure.innerText=data.current.pressure_mb+" hPa";
    visibility.innerText=data.current.vis_km+" km";
    sun_rise_time.innerText=data.forecast.forecastday[0].astro.sunrise;
    sun_set_time.innerText=data.forecast.forecastday[0].astro.sunset;
} 