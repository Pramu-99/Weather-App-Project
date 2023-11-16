import './App.css';
import './components/Search/Search'
import Search from './components/Search/Search';
import Current_Weather from './components/Current_Weather/Current_Weather';

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <Current_Weather/>
    </div>
  );
}

export default App;
