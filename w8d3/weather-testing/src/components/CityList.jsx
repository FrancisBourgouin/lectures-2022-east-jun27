import CityListItem from "./CityListItem";

export default function CityList(props) {
  const { cities, fetchWeather } = props;

  const parsedCities =
    Array.isArray(cities) &&
    cities.map((city) => (
      <li key={city}>
        <button onClick={() => fetchWeather(city)}>{city}</button>
      </li>
      // <CityListItem fetchWeather={fetchWeather} city={city} key={city}/>
    ));

  return (
    <section>
      <ul>{parsedCities}</ul>
    </section>
  );
}
