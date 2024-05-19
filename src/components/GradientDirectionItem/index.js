import {Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {btnDetails, isActive, onChangeDirection} = props
  const {value, displayText} = btnDetails

  const onClickButton = () => {
    onChangeDirection(value)
  }

  return (
    <li>
      <Button isActive={isActive} onClick={onClickButton}>
        {displayText}
      </Button>
    </li>
  )
}
export default GradientDirectionItem
