import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor || '#fe0000'};
    color: ${props => props.color || 'white'};
    border-radius: ${props => props.borderRadius};
    border: ${props => props.border};
    margin-top: ${props => props.marginTop || '0'};
`;

export default Button;
