import styled from 'styled-components';
import React, { Component } from "react";
import { Container, Card, Row, Col, Button,  CardTitle } from 'react-bootstrap';



export const StyledH1 = styled.h1`
 color: #fff;
 margin-top: 20;
`



export const StyledContainer = styled(Container)`
padding-top: 50;
display: flex;
flex-direction: column;
align-items: center;
min-width: 300;
`

export const StyledRow = styled(Row)`
display: flex; 
justify-content: center;
`
export const StyledButton = styled(Button)`
width: 100%;
`

export const StyledCard = styled(Card)`
width: 250px;
margin: 10px;
`

export const StyledCardImg = styled(Card.Img)`
margin-top: 20px;
width: 210px;
height: 300px;
align-self: center;
cursor: pointer;
border-radius: 5px;
`

export const StyledCardBody = styled(Card.Body)`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 
`
export const StyledCardText = styled(Card.Text)`
 font-size: 12px;

`