import {Component} from 'react'
import {
  MainContainer,
  Heading,
  Text,
  Unorder,
  InputsDiv,
  Container,
  Label,
  Input,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradient: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onGenerateGradient = () => {
    const {direction, colorInput1, colorInput2} = this.state
    this.setState({gradient: `to ${direction}, ${colorInput1}, ${colorInput2}`})
  }

  onChangeDirection = value => {
    this.setState({direction: value})
  }

  onChangeColor1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  render() {
    const {gradient, direction, colorInput1, colorInput2} = this.state
    return (
      <MainContainer
        colorGradient={gradient}
        color1={colorInput1}
        color2={colorInput2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <Unorder>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              btnDetails={eachItem}
              key={eachItem.directionId}
              isActive={direction === eachItem.value}
              onChangeDirection={this.onChangeDirection}
            />
          ))}
        </Unorder>
        <Text>Pick the Colors</Text>
        <InputsDiv>
          <Container>
            <Label htmlFor="color1">{colorInput1}</Label>
            <Input
              type="color"
              id="color1"
              bgcolor={colorInput1}
              value={colorInput1}
              onChange={this.onChangeColor1}
            />
          </Container>
          <Container>
            <Label>{colorInput2}</Label>
            <Input
              type="color"
              bgcolor={colorInput2}
              value={colorInput2}
              onChange={this.onChangeColor2}
            />
          </Container>
        </InputsDiv>
        <GenerateButton onClick={this.onGenerateGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}
export default GradientGenerator
