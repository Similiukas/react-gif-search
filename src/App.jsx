import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import GiphyGrid from './components/GiphyGrid';


function App() {
  const [term, setTerm] = useState('doggo'); // Default search is / doggo
  /**
   * Getting user input from the form and sending it to gif search API
   * @param {element} task element which has user search input
   */
  const onSubmitSearch = (task) => {
    console.log("Entered keywoard:", task.text);
    setTerm(task.text);
  }
  // FIXME: Also, need to build react with npm build or something like that
  return (
    <div className="App">
      <Header onSearch={onSubmitSearch} />
      <hr/>
      <GiphyGrid searchTerm={term}/>
    </div>
  );
}

export default App;
