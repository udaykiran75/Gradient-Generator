import styled from 'styled-components'

export const MainContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(${props => props.colorGradient});
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = styled.h1`
    font-family: Roboto;
    color: #ffffff;
`
export const Text = styled.p`
    font-family: Roboto;
    color: #ffffff;
    font-size: 22px;
`
export const Unorder = styled.ul`
    padding: 0px;
    list-style-type: none;
    display: flex;

`
export const InputsDiv = styled.div`
    display: flex;
    justify-content: center;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`
export const Label = styled.p`
    color: #ffffff;
    font-family: Roboto;
    margin-bottom: 7px;
`

export const Input = styled.input`
    width: 120px;
    padding: 20px;
    opacity: 0.9;
    border: 1px solid #ededed;
    cursor: pointer;
    background-color: ${props => props.bgcolor}
`
export const GenerateButton = styled.button`
    width: 120px;
    padding: 10px;
    cursor: pointer;
    margin-top: 15px;
    font-size: 15px;
    border: none;
    font-family: Roboto;
    outline: none;
    color: #1e293b;
    background-color: #00c9b7;
    border-radius: 7px;
`
