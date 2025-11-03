import HourlyPreview from "@/components/HourlyPreview";
import {HourlyWeatherProps} from "@/types/DailyWeatherProps";

export default function HourlyDisplay({hourlyData,}: {hourlyData: HourlyWeatherProps[]}){
    return (

        <div className={`grid grid-cols-3 items-center`}>
            {hourlyData.map((hourlyData) => (
                <HourlyPreview key={hourlyData.datetime} data={hourlyData}/>
            ))}
        </div>
    );
}