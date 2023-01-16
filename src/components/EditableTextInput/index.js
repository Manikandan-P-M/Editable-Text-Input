import {Component} from 'react'

import {
  AppContainer,
  EditableContainer,
  Heading,
  EditableContent,
  Input,
  Text,
  Btn,
} from './styledComponents'

export default class EditableTextInput extends Component {
  state = {text: '', isEditable: true}

  getText = event => {
    this.setState({text: event.target.value})
  }

  toggleEditable = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {text, isEditable} = this.state
    return (
      <AppContainer>
        <EditableContainer>
          <Heading>Editable Text Input</Heading>
          <EditableContent>
            {isEditable ? (
              <Input type="text" value={text} onChange={this.getText} />
            ) : (
              <Text>{text}</Text>
            )}
            {isEditable ? (
              <Btn type="button" onClick={this.toggleEditable}>
                Save
              </Btn>
            ) : (
              <Btn type="button" onClick={this.toggleEditable}>
                Edit
              </Btn>
            )}
          </EditableContent>
        </EditableContainer>
      </AppContainer>
    )
  }
}
