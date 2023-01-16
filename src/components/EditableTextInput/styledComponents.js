import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5d0fe;
  font-family: 'Roboto';
`
export const EditableContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px 30px 30px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const EditableContent = styled.div`
  display: inline-flex;
  align-items: center;
`
export const Input = styled.input`
  padding: 5px 0px 5px 5px;
  border: 1px solid #cbd2d9;
  font-size: 14px;
  color: #323f4b;
  margin-right: 10px;
  border-radius: 4px;
`
export const Text = styled.p`
  font-size: 14px;
  color: #323f4b;
  margin-right: 10px;
`
export const Btn = styled.button`
  background-color: #d946ef;
  color: #fff;
  border-radius: 4px;
  font-size: 14px;
  padding: 6px 10px 6px 10px;
  cursor: pointer;
  border: none;
  outline: none;
`
