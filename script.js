document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    var wety = f1.Weather_In[f1.Weather_In.selectedIndex].text;
    const apiKey = '21950387fa5e79de543c36b405ac4a49'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const loc = document.getElementById('loc');
            const tem = document.getElementById('tem');
            const wea = document.getElementById('wea');
            const hum = document.getElementById('hum');
            const win = document.getElementById('win');

                        
            if (data.cod === 200) {
                loc.innerHTML = `<h2 style="color: #000;"><i class="fas fa-map-pin" style="color: blue;"></i>   ${data.name}</h2>`;
                if (wety == "Fahrenheit"){
                    var cel = data.main.temp;
                    const far= cel*9/5+32;
                    tem.innerHTML = `<p><i class="fas fa-temperature-high" style="color:#ff0000;"></i> Temperature: ${far}°F</p>`;
                }else{
                    tem.innerHTML = `<p><i class="fas fa-temperature-high" style="color:#ff0000;"></i> Temperature: ${data.main.temp}°C</p>`;
                }
                wea.innerHTML = `<p><i class="fas fa-cloud-sun-rain" style="color: yellow;"></i> Weather: ${data.weather[0].description}</p>`;
                hum.innerHTML = `<p><i class="fas fa-burn" style="color: blue;"></i> Humidity: ${data.main.humidity}%</p>`;
                win.innerHTML = `<p><i class="fas fa-wind" style="color:#000;"></i> Wind Speed: ${data.wind.speed} m/s</p>`;
            } else {
                loc.innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => console.error('Error fetching weather data:', error));
});