import React, {Component} from "react";
import styled from "styled-components";

const Ibagem = styled.img`
    height:35px;
    margin-top:0px;
    margin-left:0px;
`;

const Button1 = styled.button`
    background-color:inherit;
    border:none;
    outline:none;  
`;

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.homepage = this.homepage.bind(this);
    }

    /*FUNCTIONS*/

    homepage(e){
        e.preventDefault();
        this.props.history.push('/');
    };

    render() {
        return (
            <Button1 onClick = {this.homepage}>
                <Ibagem src="/images/jagads.png"/>
            </Button1>
        );
    }
}
