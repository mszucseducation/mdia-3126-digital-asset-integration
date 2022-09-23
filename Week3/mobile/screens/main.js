import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Card, Title, Paragraph } from 'react-native-paper';
import styled from 'styled-components/native';

const MyButton = styled(Button)`
    width: 100%;
    height: 100px;
    justify-content:center;
    align-items:center;
`
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function Main() {
    return (
        <View>
            <MyButton icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </MyButton>
            <StatusBar style="auto" />
            <Card>
                <Card.Title title="Testing title" subtitle="Card Subtitle" left={LeftContent} />
                <Avatar.Icon size={44} icon="instagram" />

                <Card.Content>
                <Title>Monika's Card</Title>
                <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                <Card.Actions>
                <Button>Cancel</Button>
                <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </View>
    )
}