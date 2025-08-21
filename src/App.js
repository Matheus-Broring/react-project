import './App.css';
import HellWord from './components/HelloWord';

function App() {

    const name = "Matheus"

    const newname= name.toUpperCase();

    function soma(a, b) {
        return a + b;
    }

    const url="https://via.placeholder.com/150";

  return (
    <div className="App">
    <h2>Alterando JSK</h2>
    <p>Olá, me chamo {newname}!</p>
    <p>Soma:{soma(1, 2)}</p>
    <img src={url} alt="Imagem de exemplo" />
    <HellWord/>
    <Frase/>
    </div>
  );
}

export default App;
