import React, { Component } from 'react';
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledTypography = withStyles({
    root: {
        marginBottom: 0,
    },
})(Typography)

const First = styled.div`
    padding:2% 10%;
    text-align:center;
`;

const LogoFirst = styled.img`
    float:left;
    padding:6px 6px;
    height:54px;
    margin-top:10px;
`;

const LoginFirst = styled.button`
    border-radius:18px;
    color: white;
    text-align: center;
    cursor:pointer;
    padding: 10px 27px;
    font-size:0.85em;
    position:relative; 
    font-weight: bold;   
    background-color: #0a6ead;
    margin-top:16px;
    float:right;
 `;

const ColumnFirst = styled.div`
    text-align:center;
    margin-top:85px;
    font-weight: bold;
`;

const MainTextFirst = styled.h5`
    text-align: center;
    font-family:'Helvetica';
    color:#0a6ead;
    margin-bottom: 5px;
    font-size:5rem;
`;

const SubTextFirst = styled.p`
    text-align:center;
    color:grey;
    font-size:2rem;
`;

const SignUpFirst = styled.button`
    border-radius:18px;
    padding: 10px 27px;
    font-size:0.85em;
    position:relative;
    font-weight: bold;
    background-color: #0a6ead;
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
    padding: 55px 10% 50px 13%;
`;

const SecondTitle = styled.div`
    font-weight: bold;
    font-size:3.7rem;
    font-family:'Helvetica'
    margin-bottom:20px;
`;

const SecondSubText = styled.p`
    font-size:2rem;
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
    font-size:2.1vw;
    font-weight:bold;
    text-align:center;
    color:#0a6ead;
    margin:3% 0 7% 0;
    font-family:'Helvetica';
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
                <First>
                        <LogoFirst src="/images/iNova_logo.jpeg"/>
                        <LoginFirst variant="extended" aria-label="Delete" onClick={this.redirectToLogin}>
                        	<StyledTypography gutterBottom variant = "h7" component="h5">
                        		ENTRAR
                        	</StyledTypography>
                        </LoginFirst>
                        <ColumnFirst>
                            <MainTextFirst>
                            
                                Decida sobre sua vida<br/> e suas finanças
                            </MainTextFirst>
                            <SubTextFirst>
                            <br/>
                                Aprenda com a Jangada!
                            </SubTextFirst>
                            <SignUpFirst onClick={this.redirectToSignup}>
                            	<Typography gutterBottom variant="h7" component="h5">
                            		COMECE AGORA
                            	</Typography>
                            </SignUpFirst>
                            <br/><br/>
                        </ColumnFirst>
                </First>
                <Second>
                    <SecondContent>
                        <SecondTitle>O que é a Jangada?</SecondTitle>
                        <br/>
                        <SecondSubText> A Jangada é uma ferramenta do iNovaBank estabelecido para
                            multiplicar o conhecimento dos empreendedores na plataforma.
                            Através do iNovaBank, além do crédito e da consultoria, você tem acesso a uma plataforma de
                            educação empreendedora gratuitamente!

                            <br/><br/>
                                Os três pilares principais da Jangada são:
                        </SecondSubText>
                        <SecondColumns>
                            <SecondColumnsContent>
                                <img src="/images/check.png" width="50%" className="second-columns-img"/>
                                    <SecondColumnsTitle>Orientação Financeira</SecondColumnsTitle>
                                    <div style={{fontSize: '1.2vw',}}>
                                        Aprenda sobre finanças básicas para organizar sua empresa e aumentar sua renda!
                                    </div>
                            </SecondColumnsContent>
                        </SecondColumns>
                        <SecondColumns>
                            <SecondColumnsContent>
                                <img src="/images/finger.png" width="50%" className="second-columns-img" />
                                    <SecondColumnsTitle>Educação Empreendedora</SecondColumnsTitle>
                                    <div style={{fontSize: '1.2vw',}}>
                                        Entenda o caminho para o desenvolvimento pessoal e profissional, impulsione seu
                                        negócio e seu estilo de vida.
                                    </div>
                            </SecondColumnsContent>
                        </SecondColumns>
                        <SecondColumns>
                            <SecondColumnsContent>
                                <img src="/images/people.png" width="50%" className="second-columns-img" />
                                    <SecondColumnsTitle>Pessoas que inspiram</SecondColumnsTitle>
                                    <div style={{fontSize: '1.2vw',}}>
                                        Conheça casos de sucesso de pessoas parecidas com você e se motive para melhorar
                                        de vida.
                                    </div>
                            </SecondColumnsContent>
                        </SecondColumns>
                    </SecondContent>
                </Second>
            </main>
        );
    }
}
            