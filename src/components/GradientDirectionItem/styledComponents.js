import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    color: #1e293b;
    font-family: Roboto;
    background-color: #ffffff;
    opacity: ${props => props.isActive ? "1" : "0.5" };
    padding: 10px;
    width: 120px;
    margin: 6px;
    border-radius: 8px;
`
