import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonHeader from './components/Buttons';
import {Wrapper, FlexCont} from './styles/globals';

export default function App() {
  return (
    <Wrapper>
      
      <Text>Hi</Text>
      <FlexCont color="teal">
        <ButtonHeader name={"Monika"}/>
      </FlexCont>
    </Wrapper>
  );
}