let params = (new URL(document.location)).searchParams;
let param = params.get("city");

let city = "weather?q=" + param;
let key = "&appid=6f72e3f55e118c054588083f9805cd08";
let url = "http://api.openweathermap.org/data/2.5/" + city + key;

if (param != null) {

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        if (data.cod != "404") {
            document.getElementById("success").style.display = "flex";
            document.getElementById("name").style.backgroundImage = "url('https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'";
            if (data.weather[0].icon[2] == "n") {
                document.getElementById("name").style.color = "white";
                document.getElementById("name").style.backgroundColor = "#48484a";
            }
            document.getElementById("name").innerText = data.name;
            document.getElementById("temp").innerText = (data.main.temp - 272.15).toFixed() + "°";
            document.getElementById("humidity").innerText = data.main.humidity + "%";
            document.getElementById("pressure").innerText = data.main.pressure + " hPa";
        } else {
            document.getElementById("failure").style.display = "flex";
        }

    });

}