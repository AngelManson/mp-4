import DayPreview from "@/components/DayPreview"
import getDailyWeather from "@/lib/getDailyWeather"

export default async function Home() {
    const day = await getDailyWeather();

    return (
        <div className={`flex flex-col items-center`}>
            <DayPreview data={day}>
            </DayPreview>
        </div>
    );
}
