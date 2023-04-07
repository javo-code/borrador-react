import './App.css';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import Footer from './components/footer/Footer';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      <Footer />
    </div>
  );
}

export default App;
