import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';


const App = () => {
  return (
    <div>
      <Header title="Images Gallery"/>
      <Search />
      {/* <h1>Mikel Arteta</h1> */}
    </div>
  );
}

export default App;
