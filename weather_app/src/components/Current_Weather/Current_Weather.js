import './CurrentWeather.css'

const Current_Weather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <div>
                    <p className='city'>Belgrade</p>
                    <p className='weather_desc'>Sunny</p>
                </div>
            </div>
            <div className='bottom'>
                <p className='temperature'>19 °C</p>
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
            <img alt='weather' className='weather_icon' src='icons/01d.png' />
        </div>
    )

}

export default Current_Weather;
