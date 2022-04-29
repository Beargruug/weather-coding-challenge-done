# Coding-challenge
    Build a weatherforcast application that displays a 3 day forecast

# Tools
   API:     https://api.openweathermap.org/data/2.5/forecast?q={location}&cnt={DAYS}&units=metric&appid={API_KEY}
   DOC:     https://openweathermap.org/forecast5#name5
   Icons:   https://najens.github.io/weather-icons-react/
   API_KEY: 304fa7c159997852e50541c77c7f2f3a
   DAYS:    3

# Task
1. Add a searchinput to search for locations (e.g Saarbrücken - Saarlouis - Italien).
2. Add API connection to receive weather forcast data.
3. Display and style a list of Cards for the recieved forcast data. A card should at least contain Locationname, Temperature, Icon.

# Bonus
1. use Typescript
2. save search inputs for already searched locations and add a autocompletion

# Time left ?
3. store data in localStorage
4. error handling
5. tests

# Tips for Icon Ranges:
rangeId>=200 && rangeId<=232 = WiThunderstorm;
rangeId>=300 && rangeId<=321 = WiSleet;
rangeId>=500 && rangeId<=531 = WiRain;
rangeId>=600 && rangeId<=622 = WiSnow;
rangeId>=701 && rangeId<=781 = WiFog;
rangeId===800                = WiDaySunny;
rangeId>=801 && rangeId<=804 = WiDayFog;

# Response Example
{
  "cod": "200",
  "message": 0,
  "cnt": 1,
  "list": [
    {
      "dt": 1629115200,
      "main": {
        "temp": 30.78, //current temperature
        "feels_like": 28.76,
        "temp_min": 30.78,
        "temp_max": 35.15,
        "pressure": 1015,
        "sea_level": 1015,
        "grnd_level": 959,
        "humidity": 14,
        "temp_kf": -4.37
      },
      "weather": [
        {
          "id": 800, //rangeId
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": { "all": 0 },
      "wind": { "speed": 2.35, "deg": 304, "gust": 3.21 },
      "visibility": 10000,
      "pop": 0,
      "sys": { "pod": "d" },
      "dt_txt": "2021-08-16 12:00:00"
    }
  ],
  "city": {
    "id": 2510769,
    "name": "Spain", // location name
    "coord": { "lat": 40, "lon": -4 },
    "country": "ES",
    "population": 0,
    "timezone": 7200,
    "sunrise": 1629091724,
    "sunset": 1629141124
  }
}
