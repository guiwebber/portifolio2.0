import "./App.css";
import Banner from './components/Banner/Banner'
import Menu from './components/Menu/Menu'
function App() {
  return (
    <div className="container">
      <div className="stars"></div>
      <div className="stars2"></div>
      <Menu />
      <Banner/>
    </div>
  );
}

export default App;
