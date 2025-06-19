import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

const App = () => {
  const [word, setWord] = useState('');
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  }

  // console.log(word); // see state changes
  console.log(process.env.REACT_APP_UNSPLASH_KEY);
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
