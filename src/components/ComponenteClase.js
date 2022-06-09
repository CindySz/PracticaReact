import {Component} from "react";
import{Button, Tarjeta, P, Name} from "./style/Styles"

class ComponenteClase extends Component{

    constructor(){
        super();
        this.state={
            data:{},
            id:1


        }
    }


    request= async ()=>{
        const response = await fetch (`https://rickandmortyapi.com/api/character/${this.state.id}`);
        const result= await response.json();
        this.setState({data: result});

    }

    componentDidMount(){
        this.request();
    }
    componentDidUpdate(prevProps, prevState){

        if(prevState.id!== this.state.id){

            this.request();


        }


    }

    incrementarId=(argument)=>{

        if(argument==="Anterior"){
            this.setState(prevState=>({id: prevState.id-1}))

        } else if(argument==="Siguiente"){
            this.setState(prevState=>({id: prevState.id+1}))
        }

    }




render(){

    return(
     <>
         <Tarjeta>
         <P> Componente de Clase</P>
        
    <img src={this.state.data.image} alt={this.state.data.name} />
    <Name>{this.state.data.name}</Name>
    <Button onClick={()=>this.incrementarId("Anterior")}>Anterior</Button>
    <Button onClick={()=>this.incrementarId("Siguiente")}>Siguiente</Button>
    </Tarjeta>
    </>
   
    
    )

}

}

export default ComponenteClase;