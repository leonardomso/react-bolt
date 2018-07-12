import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../images/starboyblogo.png';

const Header = styled.div`
    background-image: url(${logo});
    width: 910px;
    height: 260px;
`;

const SubTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    font-family: sans-serif;
`;

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 4em;
    background: black;
`;

class App extends Component {
    render() {
        return (
            <Wrapper>
                <SubTitle>Thanks for downloading!</SubTitle>
            </Wrapper>
        );
    }
}

export default App;
