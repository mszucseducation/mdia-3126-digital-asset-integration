import { Button, 
    Dimmer, 
    Loader, 
    Segment, 
    Card, 
    Icon, 
    Image,
    Flag 
} from 'semantic-ui-react'

// Semantic UI - https://react.semantic-ui.com/views/
// Add the loader
// Add the card
// Add Flag
//http://localhost:3000/sandbox/sem_ui
export default function Sem_Play_Test() {
    return <div style={{backgroundColor:"#555"}}>Hi
        <Button> Click me to begin</Button>
        <Segment>
            <Dimmer active>
            <Loader />
            </Dimmer>
        </Segment>
        <Card onClick={(event, data) => console.log(data)}>
            <Image src='http://placekitten.com/500' wrapped ui={false} />
            <Card.Content>
            <Card.Header>Matthew <Flag name="canada"/></Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
            <a>
                <Icon name='user' />
                22 Friends
            </a>
            </Card.Content>
        </Card>
    </div>
}