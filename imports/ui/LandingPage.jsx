import React, { Component } from 'react';
import styled from 'styled-components';
import './LandingPageStyle.css';

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
            <main>
                <div class="first">
                    <img src="images/inova_logo.png" class="logo-first"/>
                    <button id="myBtnLogin" class="login-first" onClick={this.redirectToLogin}>ENTRAR</button>
                    <div class="first-column">
                        <b class="main-text-first">
                            Decida sobre suas finanças
                        </b>
                        <p class="sub-text-first">
                            Aprenda com a Jangada!
                        </p>
                        <button class="signup-first" id="myBtnSignup">COMEÇE AGORA</button>
                        <br/><br/>
                        <button class="learnmore-first">SAIBA MAIS</button>
                    </div>
                </div>
                <div class="second">
                    <div class="second-content">
                        <div class="second-title">O que é a Jangada?</div>
                        <div class="second-sub-text">  A Jangada é uma ferramenta do iNovaBank estabelecido para multiplicar o conhecimento dos empreendedores na plataforma. 
                            Através do iNovaBank, além do crédito e da consultoria, você tem acesso a uma plataforma de educação empreendedora gratuitamente!

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
