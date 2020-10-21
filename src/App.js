import React from 'react';
import webSocket from  './webSocket';


export default class App extends React.Component{
  constructor(props){
      super(props);
      this.state={
        mensagem:'',
      };

      this.enviarMensagem= this.enviarMensagem.bind(this);
      this.handleChange= this.handleChange.bind(this);      
  }

  //Obs: Tem que abrir outra pagina para ver a msg recebida
  async componentDidMount(){
    webSocket.on('mensagemRecebida', (msg)=>{
        this.setState({mensagemRecebida: msg});
    });
}

  handleChange (e){
    this.setState({mensagem:e.target.value});
  }

  enviarMensagem(){
    webSocket.emit('enviouMensagem',  this.state.mensagem);
  }

    render(){
        return(
            <div>
                <label>Mensagem:
                    <input type="text" 
                        onChange={this.handleChange}
                        value={this.state.mensagem} />
                </label>
                <button type="button" onClick={this.enviarMensagem}>Enviar</button>
                <div>Mensagem recebida:{this.state.mensagemRecebida}</div>
            </div>
        );
    }
}

