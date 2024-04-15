const Mensaje = (props) => {
    return <h1 
    style={{color: props.color}}  >
        {props.message}</h1> // asi es como tenemos un atributo con desde otro archivo js
}

//* ASi exportamos el codigo para reutilizarlo en otro codigo archivo JS
export default Mensaje