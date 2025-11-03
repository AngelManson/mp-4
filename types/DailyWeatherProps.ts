
export type HourlyWeatherProps = {
    datetime: string,
    temp: number,
    feelslike: number,
    precip: number,
    conditions: string,
    icon: string,
    humidity: number,
    windspeed: number,
};

export type DailyWeatherProps = {
    datetime: string,
    tempmax: number,
    tempmin: number,
    temp: number,
    feelslikemax: number,
    feelslikemin: number,
    feelslike: number,
    humidity: number,
    windgust: number,
    windspeed: number,
    pressure: number,
    uvIndex: number,
    sunrise: string,
    sunset: string,
    visibility: number,
    conditions: string,
    description: string,
    icon: string,
    hours: HourlyWeatherProps[];
};
