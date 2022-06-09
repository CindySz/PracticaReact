import { useState } from "react";
import ComponenteFuncion from "./ComponenteFuncion"
import ComponenteClase from "./ComponenteClase"
import{CambioReact} from "./style/Styles"

const BotonCambioComponente = () => {

  const [state, setState]= useState(true);

  const cambioVista= ()=>{
    return(
    state ? (<ComponenteFuncion/>) : (<ComponenteClase/>)
    
    )
    
    

  }
  

  return (
    <div>

      {cambioVista()}
      <CambioReact onClick={()=>setState(!state)}>Cambio de Componente React</CambioReact>
        </div>
  )
}

export default BotonCambioComponente;
