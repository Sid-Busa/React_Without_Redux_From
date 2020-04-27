import React,{Fragment} from 'react'
import { Segment,Header, Container, Icon,Image,Button } from 'semantic-ui-react'

import './style.css'

const Home = ({history}) => {
    return (
        <Fragment>
            <Segment inverted textAlign="center" vertical className="home">
                <Container text className='home-align'>
                    <Header as="h1" inverted>  
                        <Image
                            circular
                            size="massive"
                            src="/assets/Dave.jpg"
                            alt="logo"
                            style={{marginBottom:12}}
                        />
                        Re-vents
                    </Header>
                    <Button onClick={() => history.push('/events')} size='huge' inverted>
                         Get Start
                         <Icon name='right arrow' inverted />   
                    </Button>
                </Container>
            </Segment>    
        </Fragment>
    )
}
export default Home