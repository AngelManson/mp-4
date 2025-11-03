import getDailyWeather from "@/lib/getDailyWeather";
import HourlyDisplay from "@/components/HourlyDisplay";


export default async function hourlyPage() {
    const day = await getDailyWeather();
    const hourlyData = day[0].hours;

    return (
        <HourlyDisplay hourlyData={hourlyData} >
        </HourlyDisplay>
    );
}
