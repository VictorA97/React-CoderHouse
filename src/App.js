import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import productosLista from "./components/Productos/Productos";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <productosLista/>
    </div>
  );
}

export default App;
