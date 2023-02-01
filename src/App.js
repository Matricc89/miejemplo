
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Formulario from './components/Formulario/Formulario';
function App() {
  const miObejeto = {
    name : "funcion",
    apodo: "Function",
    number: 2
  }
  return (
    <div className="App">
      <header className="App-header">
        <Formulario/>
        <Title texto="dia de componentes" />
        <Button accion={()=> alert('Vengo de un CallBack')}/>
        <ClassComponent name="Clase" />
        <FunctionalComponent objeto={miObejeto}/>
      </header>
    </div>
  );
}

export default App;
