import {HourlyWeatherProps} from "@/types/DailyWeatherProps";

export default function HourlyPreview({data}:{data: HourlyWeatherProps}){

    return (
        <div className={`flex flex-col items-center bg-sky-100 text-sky-900 rounded-2xl p-6 m-4 w-115 transition hover:scale-105 hover:shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-2`}>
                {data.datetime}
            </h2>
            <p className={`italic text-gray-600 mb-3`}>
                {data.conditions}
            </p>

            <div className={`flex flex-col items-center justify-center bg-white/70 rounded-xl p-4 w-full`}>
                <p className={`text-5xl font-semibold mb-1`}>
                    {data.temp}°F
                </p>
                <p className={`text-sm text-gray-700`}>
                    Feels like {data.feelslike}°F
                </p>
            </div>

            <div className={`flex justify-between w-full mt-4 text-sm`}>
                <h2 className={`font-semibold`}>
                    Wind Speed
                </h2>
                <p>
                    {data.windspeed}mph
                </p>
                <h2 className={`font-semibold`}>
                    Precipitation
                </h2>
                <p>
                    {data.precip}%
                </p>
                <h2 className={`font-semibold`}>
                    Humidity
                </h2>
                <p>
                    {data.humidity}%
                </p>
            </div>
        </div>
    )
}