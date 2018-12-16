import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import MInputCustomize from './componentes/MInputCustomize';

class App extends Component {
    constructor(){
        super();
        this.state = {
                lista : [], nome:'', email:'', senha:''
        };
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    enviaForm(evento){
        evento.preventDefault();

        let autor = {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha
        };

        $.ajax({
            url: 'http://localhost:9000/api/livros',
            contentType: 'application/json',
            dataType: 'json',
            type: 'post',
            data: JSON.stringify(autor),
            success: function (resposta) {
                console.log("success "+ resposta);
                this.setState({lista:resposta});
            }.bind(this),
            error: function (resposta) {
                console.log("error "+ resposta.toString());
            }
        });
    }
    // componentWillMount(){
    componentDidMount(){
        $.get('http://localhost:9000/api/livros', function (data) {
            console.log(data);
            this.setState({lista:data});
        }.bind(this))
        .fail(function(err){
            console.log(err);
        })
    }
    setNome(evento){
        this.setState({nome:evento.target.value});
    }
    setEmail(evento){
        this.setState({email:evento.target.value});
    }
    setSenha(evento){
        this.setState({senha:evento.target.value});
    }

  render() {
    return (
        <div id="layout">
            <a href="#menu" id="menuLink" className="menu-link">
                <span></span>
            </a>
            <div id="menu">
                <div className="pure-menu">
                    <a className="pure-menu-heading" href="#">Company</a>

                    <ul className="p ure-menu-list">
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
                        <li className="pure-menu-item"><a href="#" className="pure-menu-link">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div id="main">
                <div className="header">
                    <h1>Cadastro de Autores</h1>
                </div>
                <div className="content" id="content">
                    <div className="pure-form pure-form-aligned">
                        <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                            <MInputCustomize id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label={"Nome"}/>
                            <MInputCustomize id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label={"E-mail"}/>
                            <MInputCustomize id="senha" type="password" name="senha"  value={this.state.senha} onChange={this.setSenha} label={"Senha"}/>

                            <div className="pure-control-group">
                                <label></label>
                                <button type="submit" className="pure-button pure-button-primary">Gravar</button>
                            </div>
                        </form>

                    </div>
                    <div>
                        <table className="pure-table">
                            <thead>
                            <tr>
                                <th>Codigo</th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Senha</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.lista.map(autor => {
                                    return(
                                        <tr key={autor.id}>
                                            <td>{ autor.id  }</td>
                                            <td>{ autor.nome  }</td>
                                            <td>{ autor.email }</td>
                                            <td>{ autor.senha }</td>
                                        </tr>
                                    );
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            );
  }
}

export default App;
