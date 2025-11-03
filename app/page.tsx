import DayPreview from "@/components/DayPreview"
import getDailyWeather from "@/lib/getDailyWeather"

export default async function Home() {
    const day = await getDailyWeather();

    return (
        // use !m-4 to override the global css margin 0 for certain areas
        <div className={`flex flex-col items-center !m-4`}>
            <DayPreview data={day}>
            </DayPreview>
        </div>
    );
}
