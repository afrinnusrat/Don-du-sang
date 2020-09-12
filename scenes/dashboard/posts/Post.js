
import React from "react";
import { Text, Image } from "react-native";
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';


export default (props) => {
    const [interactions,setInteractions]=React.useState({
        likes:3,comments:1
    })
    return (
        <Container style={{height:"100%"}}>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: props.userLogo }} />
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{ uri: props.postImg }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={()=>{
                                setInteractions({...interactions,likes:interactions.likes+1});
                            }}>
                                <Icon active name="thumbs-up" />
                                <Text>{interactions.likes} Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>{interactions.comments} Comments</Text>
                            </Button>
                        </Body>
                        <Right>
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    )
}