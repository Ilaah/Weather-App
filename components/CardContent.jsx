import React, { useState } from "react"

const CardContent = ({ info }) => {

    const [changeDegrees, setChangeDegrees] = useState(true)
    const celsius = info?.main.temp
    const fahrenheit = info?.main.temp * 1.8 + 32

    const toggleTemp = () => {
        setChangeDegrees(!changeDegrees)
    }
    return (
        <section className='app__content'>

            <div className='app__weather'>
                <img src={info && `http://openweathermap.org/img/wn/${info?.weather[0].icon}@2x.png`} alt="weather-icon" />
                {
                    changeDegrees ?
                        <h3 className='app__weather-temp'> {(celsius).toFixed(1)} ℃ </h3> :
                        <h3 className='app__weather-temp'>{(fahrenheit).toFixed(1)} ℉</h3>
                }
                <button onClick={toggleTemp} className='app__weather-btn'>⇆</button>
            </div>

            <div className='app__otherInfo'>
                <h2 className='app__otherInfo-description'>{info?.weather[0].description}</h2>
                <ul className='app__infoList'>
                    <li className='app__infoList-clouds'>Clouds: {info?.clouds.all}%</li>
                    <li className='app__infoList-humidity'>Humidity: {info?.main.humidity}%</li>
                    <li className='app__infoList-wind'>Wind Speed: {info?.wind.speed}</li>
                </ul>
            </div>

        </section>

    )
}

export default CardContent