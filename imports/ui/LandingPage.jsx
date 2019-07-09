import React, { Component } from 'react';
import styled from 'styled-components';

const First = styled.div`
    padding:2% 12%;
    text-align:center;
`;

const LogoFirst = styled.img`
    float:left;
    padding:7px 0;
    height:40px;
`;

const LoginFirst = styled.button`
    font-weight: bold;
    padding: 15px 32px;
    float:right;
    border:none;
    background-color:#0a6ead;
`;

const ColumnFirst = styled.div`
    text-align:center;
    margin-top:85px;
    font-weight: bold;
`;

const MainTextFirst = styled.b`
    text-align:center;
    color:#0a6ead;
    font-size:3.2rem;
`;

const SubTextFirst = styled.p`
    text-align:center;
    color:grey;
    font-size:1.5rem;
`;

const SignUpFirst = styled.button`
    padding: 15px 40px;
    font-size:0.85em;
    position:relative;
    font-weight: bold;
    background-color:#0a6ead;
    border:none;
    color:white;
    margin-top:20px;
`;

const LearnMoreFirst = styled.div`
    padding: 10px 25px;
    background-color:white;
    border-color:#999;
    color:gray;
`;

const Second = styled.div`
    width:100%;
    background-color:#0a6ead;
    color:white;
    text-align:center;
`;

const SecondContent = styled.div`
    padding:100px 10% 50px 10%;
`;

const SecondTitle = styled.div`
    font-weight: bold;
    font-size:3.5rem;
    margin-bottom:20px;
`;

const SecondSubText = styled.div`
    font-size:1.3rem;
`;

const SecondColumns = styled.div`
    margin:2% 1%;
    border-radius:7px;
    width:29%;
    display:inline-block;
    text-align:center;
    background-color:white;
    color:gray;
    vertical-align: top;
`;

const SecondColumnsContent = styled.div`
    padding:7% 5%
`;
const SecondColumnsTitle = styled.div`
    font-size:2.3vw;
    font-weight:bold;
    text-align:center;
    color:#0a6ead;
    margin:3% 0 7% 0;
`;

const Modal = styled.div`
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.6); /* Black w/ opacity */
`;

const ModalContentSign = styled.div`
   background-color: #fefefe;
    margin: auto;
    padding:1%;
    border: 1px solid #888;
    width: 24%;
    border-radius:10px;
`;

const Close = styled.span`
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    &:hover,
    &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

const MeuH2 = styled.div`
    display: block;
    font-size: 2.5vw;
    font-weight: bold;
    padding:10px 35px;
    margin:-10px -50px;
    text-align:center;
    border-radius:10px 10px 0 0
`;

const Group = styled.div`
    position:relative;
    margin-top:6px;
`;

const ModalContentLog = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding:1%;
    border: 1px solid #888;
    width: 24%;
    border-radius:10px;
`;

export default class LandingPage extends Component {

    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    /*FUNCTIONS*/
    logout(e){
        e.preventDefault();
        Meteor.logout( (err) => {
            if (err) {
                console.log( err.reason );
            } else {
                this.props.history.push('/');
            }
        });
    };

    render() {
        return (
            <main>
                <First>
                    <LogoFirst src="Pictures/iNova_logo.jpeg"/>
                        <LoginFirst id="myBtnLogin"
                                onClick="document.getElementById('myModalLog').style.display='block'">ENTRAR
                        </LoginFirst>
                        <ColumnFirst>
                            <MainTextFirst>
                                Decida sobre sua vida<br /> e suas finanças
                            </MainTextFirst>
                            <SubTextFirst>
                                Aprenda com o Create
                            </SubTextFirst>
                            <SignUpFirst id="myBtnSignup"
                                    onClick="document.getElementById('myModalSign').style.display='block'">COMEÇE AGORA
                            </SignUpFirst>
                            <br/><br/>
                                <LearnMoreFirst>SAIBA MAIS</LearnMoreFirst>
                        </ColumnFirst>
                </First>
                <Second>
                    <SecondContent>
                        <SecondTitle>O que é o Create?</SecondTitle>
                        <SecondSubText> O Create é uma ferramenta do iNovaBank estabelecido para
                            multiplicar o conhecimento dos empreendedores na plataforma.
                            Através do iNovaBank, além do crédito e da consultoria, você tem acesso a uma plataforma de
                            educação empreendedora gratuitamente!

                            <br/><br/>
                                Os três pilares principais do Create são:
                        </SecondSubText>
                        <SecondColumns>
                            <SecondColumnsContent>
                                <img src="Pictures/check.png" width="50%" className="second-columns-img"/>
                                    <SecondColumnsTitle>Orientação Financeira</SecondColumnsTitle>
                                    <div>
                                        Aprenda sobre finanças básicas para organizar sua empresa e aumentar sua renda!
                                    </div>
                            </SecondColumnsContent>
                        </SecondColumns>
                        <SecondColumns>
                            <SecondColumnsContent>
                                <img src="Pictures/finger.png" width="50%" className="second-columns-img" />
                                    <SecondColumnsTitle>Educação Empreendedora</SecondColumnsTitle>
                                    <div>
                                        Entenda o caminho para o desenvolvimento pessoal e profissional, impulsione seu
                                        negócio e seu estilo de vida.
                                    </div>
                            </SecondColumnsContent>
                        </SecondColumns>
                        <SecondColumns>
                            <SecondColumnsContent>
                                <img src="Pictures/people.png" width="50%" className="second-columns-img" />
                                    <SecondColumnsTitle>Pessoas que inspiram</SecondColumnsTitle>
                                    <div>
                                        Conheça casos de sucesso de pessoas parecidas com você e se motive para melhorar
                                        de vida.
                                    </div>
                            </SecondColumnsContent>
                        </SecondColumns>
                    </SecondContent>
                </Second>

                <Modal id="myModalSign">
                    <ModalContentSign>
                        <Close>&times;</Close>
                        <div id="abc">
                            <form autoComplete="off">
                                <div id="popupContact">
                                    <MeuH2>Crie sua conta</MeuH2>
                                    <hr />

                                        <Group>
                                            <i className="fas fa-user fa-lg fa-fw"></i>
                                            <input type="text" id="name" name="name" className="input" required />
                                                <label style="font-weight:bold" className="label">Nome</label>
                                        </Group>

                                        <Group>
                                            <i className="fab fa-whatsapp fa-lg fa-fw"></i>
                                            <input type="number" id="wpp" name="wpp" className="input" required />
                                                <label style="font-weight:bold" className="label">Whatsapp</label>
                                        </Group>

                                        <Group>
                                            <i className="far fa-id-card fa-lg fa-fw"></i>
                                            <input type="number" id="cpf" name="cpf" className="input" required />
                                                <label style="font-weight:bold" className="label">CPF</label>
                                        </Group>

                                        <Group>
                                            <i className="fas fa-lock fa-lg fa-fw"></i>
                                            <input type="password" id="senha" name="senha" className="input"
                                                   required />
                                                <label style="font-weight:bold" className="label">Sua senha</label>
                                        </Group>

                                        <Group>
                                            <i className="fas fa-lock fa-lg fa-fw"></i>
                                            <input type="password" id="confsenha" name="confsenha" className="input"
                                                   required />
                                                <label style="font-weight:bold" className="label">Repita sua
                                                    senha</label>
                                        </Group>
                                        <div style="text-align:center">
                                            <button onClick="" id="submit-form">Concluir cadastro</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </ModalContentSign>
                </Modal>
                <Modal>
                    <ModalContentLog>
                        <span className="close">&times;</span>
                        <div id="abc1">
                            <form autoComplete="off">
                                <div id="popupContact1">
                                    <MeuH2>Log in</MeuH2>
                                    <hr />

                                        <Group>
                                            <i className="fab fa-whatsapp fa-lg fa-fw"></i>
                                            <input type="number" id="wpp1" name="wpp" className="input" required />
                                                <label style="font-weight:bold" className="label">Whatsapp</label>
                                        </Group>
                                        <Group>
                                            <i className="fas fa-lock fa-lg fa-fw"></i>
                                            <input type="password" id="senha1" name="senha" className="input"
                                                   required />
                                                <label style="font-weight:bold" className="label">Sua senha</label>
                                        </Group>
                                        <div style="text-align:center">
                                            <button onClick="" id="submit-form1">Entrar</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </ModalContentLog>
                </Modal>
            </main>
        );
    }
}