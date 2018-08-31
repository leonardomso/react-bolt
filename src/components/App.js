import React from 'react';
import styled from 'styled-components';

import Button from './button/';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: black;
`;

const SubTitle = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: white;
    font-family: sans-serif;
    margin-top: ${props => props.marginTop || '0'};
`;

const App = () => (
    <Wrapper>
        <SubTitle>Thanks for downloading the boilerplate!</SubTitle>
        <SubTitle marginTop="20px">Feel free to contribute.</SubTitle>
        <Button
            width="110px"
            height="40px"
            border="none"
            borderRadius="30px"
            marginTop="20px"
        >
            Thanks
        </Button>
    </Wrapper>
);

export default App;
