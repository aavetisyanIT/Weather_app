import "./App.css";
import CitySearch from "./components/city-search/city-search.component";
import WeatherDetails from "./components/weather-details/weather-details.component";

function App() {
  return (
    <div className='App'>
      <CitySearch />
      <WeatherDetails />
    </div>
  );
}

export default App;
