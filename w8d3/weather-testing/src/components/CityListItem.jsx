export default function CityListItem(props) {
  const { city, fetchWeather } = props;

  return (
    <li>
      <button onClick={() => fetchWeather(city)}>{city}</button>
    </li>
  );
}
