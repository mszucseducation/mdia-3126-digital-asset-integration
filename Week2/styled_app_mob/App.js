import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Wrapper, FlexCont} from './styles/globals';

export default function App() {
  return (
    <Wrapper>
      
      <Text>Hi</Text>
      <FlexCont color="teal">I love donuts</FlexCont>
    </Wrapper>
  );
}