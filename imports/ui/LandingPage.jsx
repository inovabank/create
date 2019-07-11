import React, { Component } from 'react';
import styled from 'styled-components';
import "./LandingPageStyle.css"

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.redirectToLogin = this.redirectToLogin.bind(this);
        this.redirectToSignup = this.redirectToSignup.bind(this);
    }

    /*FUNCTIONS*/

    redirectToLogin = () => {
    	this.props.history.push('/login');
    };

    redirectToSignup = () => {
    	this.props.history.push('/signup');
    };

    render() {
        return (
           <main class="MainBody">
               <div class="first">
                    <img src="images/iNova_logo.jpeg" className="logo-first"/>
                    <button id="myBtnLogin" className="login-first" onClick={this.redirectToLogin}>ENTRAR</button>
                    <div className="first-column">
                        <b className="main-text-first">
                            Decida sobre sua vida<br/> e suas finanças
                        </b>
                        <p className="sub-text-first">
                            Venha navegar na Jangada com a gente!
                        </p>
                        <button className="signup-first" id="myBtnSignup" onClick={this.redirectToSignup}>COMEÇE AGORA</button>
                        <br/><br/>
                        <button className="learnmore-first">SAIBA MAIS</button>
                    </div>
                </div>
                <div class="second">
                    <div class="second-content">
                        <div class="second-title">O que é a Jangada?</div>
                        <div class="second-sub-text">A Jangada é um veículo do iNovaBank estabelecido para multiplicar o conhecimento dos empreendedores na plataforma. Através do iNovaBank, além do crédito e da consultoria, você tem acesso a uma plataforma de educação empreendedora gratuitamente, te levando para alcançar seu sonho!

                            <br/><br/>
                            Os três pilares principais da Jangada são:
                        </div>
                        <div class="second-columns">
                            <div class="second-columns-content">
                                <img src="images/check.png" width="50%" class="second-columns-img"/>
                                <div class="second-columns-title">Orientação Financeira</div>
                                <div>
                                    Aprenda sobre finanças básicas para organizar sua empresa e aumentar sua renda!
                                </div>
                            </div>
                        </div>
                        <div class="second-columns">
                            <div class="second-columns-content">
                                <img src="images/finger.png" width="50%" class="second-columns-img"/>
                                <div class="second-columns-title">Educação Empreendedora</div>
                                <div>
                                    Entenda o caminho para o desenvolvimento pessoal e profissional, impulsione seu negócio e seu estilo de vida.
                                </div>
                            </div>
                        </div>
                        <div class="second-columns">
                            <div class="second-columns-content">
                                <img src="images/people.png" width="50%" class="second-columns-img"/>
                                <div class="second-columns-title">Pessoas que inspiram</div>
                                <div>
                                    Conheça casos de sucesso de pessoas parecidas com você e se motive para melhorar de vida.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </main>
        );
    }
}
            