import { useCallback, useState } from 'react';
import useFetch from 'use-http';

const ListResItem = {
  dt: 1629115200,
  main: {
    temp: 30.78, //current temperature
    feels_like: 28.76,
    temp_min: 30.78,
    temp_max: 35.15,
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 959,
    humidity: 14,
    temp_kf: -4.37,
  },
  weather: [
    {
      id: 800, //rangeId
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  clouds: { all: 0 },
  wind: { speed: 2.35, deg: 304, gust: 3.21 },
  visibility: 10000,
  pop: 0,
  sys: { pod: 'd' },
  dt_txt: '2021-08-16 12:00:00',
};

export type Location = {
  name: string;
  date: string;
  temp: number;
  rangeId: number;
};

export type ListItem = typeof ListResItem;

const useSearch = () => {
  const [items, setItems] = useState<Location[]>([]);
  const { get: getLocations, error } = useFetch('https://api.openweathermap.org');

  const handleSearch = useCallback(
    async (value: string) => {
      try {
        const res = await getLocations(
          `/data/2.5/forecast?q=${value}&cnt=3&units=metric&appid=304fa7c159997852e50541c77c7f2f3a`,
        );

        if (res.cod === '200') {
          setItems(
            res.list.map((item: typeof ListResItem) => ({
              name: res.city.name,
              date: new Date(item.dt_txt).toDateString(),
              temp: item.main.temp,
              rangeId: item.weather[0].id,
            })),
          );
        } else {
          setItems([]);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [getLocations],
  );

  return { items, setItems, getLocations, handleSearch, error };
};

export default useSearch;
