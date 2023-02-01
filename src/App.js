
import './App.css';
import ClassComponent from './components/ClassComponent/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent/FunctionalComponent';
import Title from './components/Title/Title';
import Button from './components/Button/Button';
import Formulario from './components/Formulario/Formulario';
import ParentComponent from './components/ParentComponent/ParentComponent';
function App() {
  const miObejeto = {
    name : "funcion",
    apodo: "Function",
    number: 2
  }
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent>
          <h2>
            Soy children
          </h2>
          <h3>
            soy un subtitulo
          </h3>
          <div>
            Este es un subtitulo
          </div>
        </ParentComponent>
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
