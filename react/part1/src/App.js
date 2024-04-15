//* de esta manera exportamos codigo reutilizable desde otros archivos js.
import './App.css';
import Mensaje from './message';


//* de esta manera realizamos sentencias utilizables en el codigo fuera de la const App
const Descripcion = () => {
  return <p>Este es la App del curso de fullstack bootcamp</p>
}

const App = () => {
  return (
    <div className="App">

    {/* Con esto estamos dando un mensaje y color a una declaracion al codigo importado */}
     <Mensaje color='red' message='estamos trabajando' />
     <Mensaje color='blue' message='En un curso' />
     <Mensaje color='yellow' message='de React' />

{/* //* asi llamamos a una const declarada */}
      <Descripcion/>
    </div>
  );
}

export default App;
