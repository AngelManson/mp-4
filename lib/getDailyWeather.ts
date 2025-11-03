"use server"
import mockData from "@/mock.json";
import { DailyWeatherProps } from "@/types/DailyWeatherProps";

const WEATHER_API_KEY=process.env.WEATHER_API_KEY;

export default async function getDailyWeather(): Promise<DailyWeatherProps[]> {
    // const rawDailyWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/boston/today/?key=${WEATHER_API_KEY}`)
    //     .then(() => console.log("retrieved"))
    //     .catch(error => console.log(error));
    // const dailyWeather = await rawDailyWeather.json();
    const dailyWeather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/boston/today/?key=${WEATHER_API_KEY}`)

    if (!dailyWeather.ok) {
        throw new Error(`Fetch failed: ${dailyWeather.status} ${dailyWeather.statusText}`);
    }

    // console.log(dailyWeather);

    const weather = await dailyWeather.json();

    return weather.days;
    // return mockData.mockDailyWeather;
}