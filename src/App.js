import Forecast from './page/forecast-page/forecast.component';

function App() {
	const unixTime = 1614556800 * 1000;
	const dataObj = new Date(unixTime);
	console.log(dataObj.toLocaleString());
	console.log(dataObj.toLocaleString('en-US', { weekday: 'long' }));
	return (
		<div className='App'>
			<Forecast />
		</div>
	);
}

export default App;
