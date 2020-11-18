import './App.css';

import SearchBar from './components/SearchBar';
import file from './apis/youtube';

function App() {

  console.log(file)
  return (
    <div className="App">
      <SearchBar />
    </div>
  );
}

export default App;