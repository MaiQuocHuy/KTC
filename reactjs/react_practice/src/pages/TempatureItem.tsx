import React from "react";
import { AiFillRightCircle, AiOutlineEllipsis } from "react-icons/ai";
import LocationCard from "../components/ui/Card/LocationCard";
import WeatherForecast from "../components/ui/Card/WeatherForecastCard";
import CurrentWeatherCard from "../components/ui/Card/CurrentWeatherCard";
import ScheduleCard from "../components/ui/Card/ScheduleCard";
import DateCard from "../components/ui/Card/DateCard";

const TempatureItem = () => {
  // Sample data
  const weatherDays = [
    { icon: "/logos/lightning_rain.svg", day: "Mon" },
    { icon: "/logos/sunny_behind_clound.svg", day: "Tue" },
    {
      icon: "/logos/twemoji_sun.svg",
      day: "Wed",
      selected: true,
    },
    { icon: "/logos/sun_behind_rain_cloud.svg", day: "Thu" },
    { icon: "/logos/sunny_behind_clound.svg", day: "Fri" },
  ];

  const scheduleDays = [
    {
      icon: "/logos/lightning_rain.svg",
      day: "Mon",
      time: "02:27 PM",
    },
    {
      icon: "/logos/sunny_behind_clound.svg",
      day: "Tue",
      time: "02:27 PM",
    },
    {
      icon: "/logos/twemoji_sun.svg ",
      day: "Wed",
      time: "02:27 PM",
      selected: true,
    },
    {
      icon: "/logos/sun_behind_rain_cloud.svg",
      day: "Thu",
      time: "02:27 PM",
    },
    {
      icon: "/logos/sunny_behind_clound.svg",
      day: "Fri",
      time: "02:27 PM",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 p-5">
      <div className="flex flex-col gap-4 w-xs">
        {/* Location Card with Yellow Background */}
        <LocationCard
          name="Landescape"
          distance="432Km"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          rightIcon={<AiOutlineEllipsis className="text-2xl text-black" />}
          backgroundColor="bg-[#FAFFDB]"
          rightIconBackground="bg-[#FAFFDB]"
        />

        {/* Location Card with Green Icon */}
        <LocationCard
          name="Falset Mountains"
          distance="432Km, 3 Week"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          rightIcon="/logos/sunny_green.svg"
          center={true}
        />

        {/* Location Card with Purple Icon */}
        <LocationCard
          name="Falset Mountains"
          distance="432Km, 3 Week"
          image="https://randomuser.me/api/portraits/women/44.jpg"
          rightIcon={<AiFillRightCircle className="text-3xl text-purple-600" />}
          backgroundColor="bg-[#EDF8FF]"
          rightIconBackground="bg-[#EDF8FF]"
          center={true}
        />

        {/* Weather Forecast */}
        <WeatherForecast days={weatherDays} />

        {/* Current Weather Card */}
        <CurrentWeatherCard
          city="Seattle"
          condition="Cloudy"
          temperature="32°"
          icon="/logos/sunny_behind_clound.svg"
        />

        {/* Schedule Card */}
        <ScheduleCard
          title="Great day to schedule"
          subtitle="Your usual hours"
          days={scheduleDays}
          rightIcon={<AiOutlineEllipsis className="text-2xl text-black" />}
        />

        {/* Date Card */}
        <DateCard
          month="Jun"
          day="23"
          dayName="Wednesday"
          timeRange="08:00 PM - 18:30 PM"
        />
      </div>
    </div>
  );
};

export default TempatureItem;
