search_input.addEventListener('input',function(e){
    (!this.value) && (first_appearance.style.display = 'flex')
})
search_btn.addEventListener('click',async(e)=>{
    e.preventDefault()
    if(!search_input.value) return
    first_appearance.style.display = 'none'
    if(navigator.onLine){
        const fetchWeather = await import('./moules/fetchWeather.js')
        fetchWeather.default(search_input.value)
    }else{
        no_internet.style.display='flex'
    }
})

theme_btn.addEventListener('click',()=>document.body.classList.toggle('light_theme'))
