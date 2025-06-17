let apiKey = '16eef36ab06c595c56062ac47963efe4'
let difKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value 
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
.then(response => response.json())
.then(response => mosrtarDatosClima(response))
}

function mosrtarDatosClima(response){
    console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const paisNombre = response.sys.country
    const ciudadNombre = response.name
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const humedad = response.main.humidity
    const icon = response.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre} `

    const iconInfo = document.createElement('img')
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`
    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es : ${Math.floor(temperatura-difKelvin)}°C`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion es : ${descripcion}`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de : ${humedad}%`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(iconInfo)
    divDatosClima.appendChild(tempInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo)
}




