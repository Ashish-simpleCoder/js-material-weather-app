export default async function fetchWeather(search_input){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${search_input}&units=metric&appid=4674f37c722fa851b2de3dd582ce7730`
    try {
        loaders.style.display = 'flex'
        city_not_found.style.display = 'none'
        no_internet.style.display = 'none'
        const res = await fetch(url)
        const city_data = await res.json()
        part1.style.animation = ''
        part2.style.animation = ''

        if(city_data){
            const weather_stauts = city_data.weather[0].main.toLowerCase()
            const status = ['rain','haze','clear']
            loaders.style.display = 'none'
            part1.style.animation = 'animate_p 0.5s'
            part2.style.animation = 'animate_p 0.5s'
            if(status.includes(weather_stauts)){
                if(weather_stauts === 'rain') weather_img.src = './img/rain.png'
                if(weather_stauts === 'haze') weather_img.src = './img/cloudy.png'
                if(weather_stauts === 'clear') weather_img.src = './img/sun.png'
            }
            const {temp, feels_like, humidity, pressure} = city_data.main
            const {speed} = city_data.wind

            city_name.textContent = city_data.name
            temp_d.textContent = temp
            feels_like_d.textContent = feels_like
            humidity_d.textContent = humidity
            pressure_d.textContent =pressure
            speed_d.textContent =speed
        }else{
            loaders.style.display = 'none'
            city_not_found.style.display = 'flex'
        }
    } catch (error) {
        loaders.style.display = 'none'
        city_not_found.style.display = 'flex'
    }
}