import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../images/starboyblogo.png';

const Header = styled.div`
    background-image: url(${logo});
    width: 1000px;
    height: 300px;
`;

const SubTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
`;

const Wrapper = styled.section`
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
                <Header />
            </Wrapper>
        );
    }
}

export default App;
