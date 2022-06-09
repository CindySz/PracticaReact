import {useState} from "react";
import {useEffect} from "react";
import{Button, Tarjeta, P, Name} from "./style/Styles"

const ComponenteFuncion=()=>{

    
    const[data, setData]=useState({});
    const [id, setId]= useState(1);

    useEffect(() => {
        const request= async ()=>{
            const response = await fetch (`https://rickandmortyapi.com/api/character/${id}`);
            const result= await response.json();
            setData(result);
    
        }

        request();
      }, [id]);
      
      
    const incrementarId=(argument)=>{

        if(argument==="Anterior"){
           setId(prevState=>prevState-1);

        } else if(argument==="Siguiente"){
            setId(prevState=>prevState+1);
        }

    }
    console.log(data);
    return(
        <>
         <Tarjeta>
         <P> Componente Funcional</P>
        
    <img src={data.image} alt={data.name} />
    <Name>{data.name}</Name>
    <Button onClick={()=>incrementarId("Anterior")}>Anterior</Button>
    <Button onClick={()=>incrementarId("Siguiente")}>Siguiente</Button>
    </Tarjeta>
    </>
       


  

        



    );

}

export default ComponenteFuncion;

