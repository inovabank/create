import React, { Component } from 'react';
import styled from 'styled-components'
import {Typography, withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";

const SecondColumn = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family:'Arial';
    color:#000033;
`;

// text-align: center, -> change if necessary
const OpenValue = styled.div`
    font-family:'Bahnschrift';
    font-weight: 200;
    font-size: 140px;
    text-align:right;
`;

const CifraText = styled.h3`
    font-family:'Bahnschrift';
    color:#000033;
    font-size:3.2rem;
    text-align:left;
`;

export default class MinhaConta extends Component {

    constructor(props) {
        super(props);
    }

    /*FUNCTIONS*/

    render() {
        return (
            <main>
                <SecondColumn>
                    <CifraText>
                        R$
                    </CifraText>
                    <OpenValue>
                        {this.state.accountData.availableBalance === 1 ? "950,00" : this.state.accountData.availableBalance}
                    </OpenValue>
                </SecondColumn>
            </main>
        );
    }
}