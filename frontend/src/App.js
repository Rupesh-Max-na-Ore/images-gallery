import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
}

const App = () => {
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit}/>
      {/* <h1>Mikel Arteta</h1> */}
    </div>
  );
}

export default App;
