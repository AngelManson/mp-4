// import {DailyWeatherProps} from "@/types/DailyWeatherProps";
//
// export default function DayPreview({data}:{data: DailyWeatherProps[]}){
//     return (
//         <div className={`flex flex-col items-center bg-sky-400 rounded-xl p-4 m-2 w-96`}>
//             <h4 className={`font-bold text-3xl`}>
//                 {data[0].description}
//                 {data[0].conditions}
//             </h4>
//             <p>
//                 {data[0].temp}
//                 {data[0].feelslike}
//             </p>
//         </div>
//     )
// }
import {DailyWeatherProps} from "@/types/DailyWeatherProps";

export default function DayPreview({data}:{data: DailyWeatherProps[]}){
    const day = data[0];

    return (
        <div className={`flex flex-col items-center bg-sky-100 text-sky-900 rounded-2xl p-6 m-4 w-96 transition hover:scale-105 hover:shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-2`}>
                {day.conditions}
            </h2>
            <p className={`text-sm italic text-gray-600 mb-3`}>
                {day.description}
            </p>

            <div className={`flex flex-col items-center justify-center bg-white/70 rounded-xl p-4 w-full`}>
                <p className={`text-5xl font-semibold mb-1`}>
                    {day.temp}°F
                </p>
                <p className={`text-sm text-gray-700`}>
                    Feels like {day.feelslike}°F
                </p>
            </div>

            <div className={`flex justify-between w-full mt-4 text-sm`}>
                <h2 className={`font-semibold`}>
                    High
                </h2>
                <p>
                    {day.tempmax}°F
                </p>
                <h2 className={`font-semibold`}>
                    Low
                </h2>
                <p>
                    {day.tempmin}°F
                </p>
                <h2 className={`font-semibold`}>
                    Humidity
                </h2>
                <p>
                    {day.humidity}%
                </p>
            </div>

            <p className={`text-xs text-gray-600 mt-3`}>
                Sunrise: {day.sunrise} | Sunset: {day.sunset}
            </p>
        </div>
    );
}
