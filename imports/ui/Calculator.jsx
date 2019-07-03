import React, { Component } from 'react';
import styled from "styled-components";

const PageWrapper = styled.div`
        style="background-color:#ffffff";
        border-radius:5px;
        font-size:1.4vw;
        font-family: Nunito;
        margin: 0;
`;

const Header = styled.div`
    font-size:2.7vw ;
    padding: 1% 3%;
    text-align:center;
`;

const Line = styled.div`
    display:block;
    padding:0px 3%;
`;

const NeedsOfAlign = styled.div`
    display:inline-block;
`;

const Slider = styled.input`
    -webkit-appearance: none;
    width: 45%;
    height: 5px;
    border-radius: 5px;
    background: #61508c;
    outline: none;
    -webkit-transition: .2s;
    transition: opacity .2s;

    &::hover {
        opacity: 1;
    }
    
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #771b84;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #771b84;
        cursor: pointer;
    }
`;

const StyledOutput = styled.div`
    font-size: 3.5vw;
`;

const NewRadio = styled.ul`
    list-style-type:none;
    border-radius: 0.44rem;
    font-size: 1.2vw
    
    & li {
        text-align: center;
        padding:0px;
    }
    
    & label {
        width: 27%;
        font-weight: bold;
        font-size:1.2vw;
        color: #ffffff;
        text-align:center;
        padding: 0.4rem 0.86rem;
        border-radius: 5px;
        box-sizing: border-box;
        background-color: #61508c;
        display: inline-block;
        cursor: pointer;
        white-space: nowrap;

        -moz-appearance: button;
        -o-appearance: button;
        -ms-appearance: button;
        appearance: button;
    }
    
    & input[type="radio"] {
        display:none;
    }
`;

const InitialValue = styled.div`
    font-size:4vw;
    text-align:center;
`;

const MainContainer = styled.div`
    float: right;
    padding:0px;
`;

const FixerContainer = styled.div`
    float: right;
    padding:0px;
`;

const FinalizeLine = styled.div`
    display:block;
    padding:3% 0px;
    text-align:center;
`;

const Submit = styled.div`
        width: 60%;
        font-weight: bold;
        font-family: Nunito;
        color: #fff;
        font-size:1.4vw;
        text-align: center;
        border: none;
        padding: 0.56rem 1.8rem;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: #61508c;
        display: inline-block;
        cursor: pointer;

        -moz-appearance: button;
        -o-appearance: button;
        -ms-appearance: button;
        appearance: button;
`;

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qtd: 500,
            show: 500,
            qmeses: 1,
        };

        this.myfunction.bind(this);
        this.showp.bind(this);

        this.demo = React.createRef();
        this.fim = React.createRef();
        this.dur = React.createRef();
        this.valor = React.createRef();
    }

    transform = (ashua) => {
        ashua = ashua.toString();
        ashua=ashua.replace(".",",");
        return ashua;
    };

    myfunction = (value) => {
        value = value.target.value;
        let qtd = value;
        //document.getElementById('demo').innerHTML= " " + value;
        this.demo.current.innerHTML = " " + value;
        let show=qtd/this.state.qmeses;
        show=show/4;
        show=show.toFixed(2);
        show=this.transform(show);
        this.setState({
            qtd: qtd,
            show: qtd,
        });
        var texto= "<div>A partir de: <div class='numfim' style='font-size:4vw;text-align:center'>" + show + "</div> </div>";
        texto += "<div class='main-container' style='padding:0px'><div class='fixer-container' style='padding:0px'> R$/semanal <br /></div><br /></div>";
        //document.getElementById("fim").innerHTML = texto;
        this.fim.current.innerHTML = texto;
    };

    showp = (p) => {
        p = p.target.value;
        console.log(p);
        if(p === '1m')
            p = 1;
        if(p === '2m')
            p = 2;
        if(p === '3m')
            p = 3;
        let aux = this.dur.current;
        //background não muda de cor
        for(let i=0; i<aux.length; i++)
        {
            this.dur.current[i].parentNode.style.background ="#61508c";
        }
        this.dur.current.style.background="#771b84";
        let qtd=this.valor.current.value;
        let show=qtd/p;
        let qmeses=p;
        show=show/4;
        show=show.toFixed(2);
        show=this.transform(show);
        this.setState({
            qtd: qtd,
            qmeses: qmeses,
            show: qtd,
        });
        var texto="A partir de: <div style='font-size:4vw;text-align:center' class='numfim'>" + show + "</div>";
        texto += "<div class='main-container' style='padding:0px'><div class='fixer-container' style='padding:0px'> R$/semanal <br></div></div><br>"
        this.fim.current.innerHTML = texto;
    };


    render() {
        return (
            <PageWrapper>
                <form>
                    <Header>Monte seu crédito:</Header>
                    <Line>
                        <NeedsOfAlign>Preciso de:</NeedsOfAlign>
                        <div>
                            <Slider type="range" min="100" max="1000" value={this.state.show} step="50" name="valor"
                                   id="valor" ref={this.valor} onChange={this.myfunction}/>
                                R$
                            <StyledOutput id="demo" ref={this.demo}> 500 </StyledOutput>
                        </div>
                        <Line>
                            Durante:
                            <br />
                                <NewRadio>
                                    <li>
                                        <label htmlFor="1m" onClick={this.showp}>
                                            <input type="radio" id="1m" name="dur" value="1m" ref={this.dur}/>1 mês</label>

                                        <label htmlFor="2m" onClick={this.showp}>
                                            <input type="radio" id="2m" name="dur" value="2m" ref={this.dur}/>2 meses</label>

                                        <label htmlFor="3m" onClick={this.showp} ref='troll'>
                                            <input type="radio" id="3m" name="dur" value="3m" ref={this.dur} />3 meses</label>
                                    </li>
                                </NewRadio>
                        </Line>
                    </Line>
                    <Line id="fim" ref={this.fim}>
                        A partir de:
                        <InitialValue>41,67</InitialValue>
                        <MainContainer>
                            <FixerContainer>
                                R$/semanal <br/>
                            </FixerContainer>
                        </MainContainer>
                        <br />
                    </Line>
                    <FinalizeLine id="finalizar">
                        <Submit type="submit">Finalizar Proposta</Submit>
                    </FinalizeLine>
                </form>
            </PageWrapper>
        );
    }
}
