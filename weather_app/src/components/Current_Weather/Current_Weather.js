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
            <img alt='weather' className='weather_icon' src='icons/01d.png' />
        </div>
    )

}

export default Current_Weather;
