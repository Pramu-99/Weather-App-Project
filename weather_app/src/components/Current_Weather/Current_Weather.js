import './CurrentWeather.css'

const Current_Weather = ({data}) => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weather_desc'>{data.weather[0].description}</p>
                </div>
            </div>
            <div className='bottom'>
                <p className='temperature'>{data.temperature}</p>
                <div className='details'>
                    <div className='parameter-row'>
                        <span className='parameter-label'>Feels Like</span>
                        <span className='parameter-value'>22 °C</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Wind</span>
                        <span className='parameter-value'>2 m/s</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Humidity</span>
                        <span className='parameter-value'>15%</span>
                    </div>

                    <div className='parameter-row'>
                        <span className='parameter-label'>Pressure</span>
                        <span className='parameter-value'>15hPa</span>
                    </div>
                </div>
            </div>
            <img alt='weather' className='weather_icon' src={`icons/${data.weather[0].icon}.png`}/>
        </div>
    )

}

export default Current_Weather;
