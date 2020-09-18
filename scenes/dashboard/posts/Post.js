
import React from "react";
import { Text, Image, TextInput, View } from "react-native";
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import CustomBtnIcon from "../../../generic/CustomBtnIcon"

export default (props) => {
    const [interactions, setInteractions] = React.useState({
        likes: props.postData.likes, comments: props.postData.comments
    });
    const [enableComment, setEnableComment] = React.useState(false);
    return (
        <Container style={{ height: "100%" }}>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail source={{ uri: props.postData.author.avatar }} />
                            <Body>
                                <Text>{props.postData.author.name}</Text>
                                <Text note>groupe {props.postData.author.bloodGroup}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{ uri: props.postData.image }} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent onPress={() => {
                                setInteractions({ ...interactions, likes: interactions.likes + 1 });
                            }}>
                                <Icon active name="thumbs-up" />
                                <Text>{interactions.likes} Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <Button transparent onPress={() => setEnableComment(!enableComment)}>
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
            {enableComment &&
                <View>
                    <View style={{
                        flexWrap: 'wrap',
                        alignItems: 'flex-start',
                        flexDirection: 'row', borderStyle: "solid", borderWidth: 1, borderRadius: 12, borderColor: "grey"
                    }}><TextInput style={{ width: "80%" }} placeholder="Commentaire .." />
                        <View style={{ width: "19%", backgroundColor: "grey", borderRadius: 12, marginTop: 5 }}>
                            <CustomBtnIcon iconName="send" onPress={() => { }} />
                        </View>
                    </View>
                    {props.postData.commentsData.map((data,index) => {
                        return (
                            <View key={index} className="comments-container">
                                <View style={{
                                    flexWrap: 'wrap',
                                    alignItems: 'flex-start',
                                    flexDirection: 'row',
                                    marginTop: 10
                                }}>
                                    <Image source={{ uri: data.author.avatar }} style={{ borderRadius: 40, width: 60, height: 60 }} />
                                    <View style={{ width: 250, marginLeft: 10 }}>
                                        <Text style={{ fontWeight: "bold" }}>{data.author.name}</Text>
                                        <Text>dehzdhez doizhe dhz hdozdzei dhzeh doezhd ozheod hzo hdoz hdozeh doezh odhz oedh ozehd ouzehd douhzeodhzeo uhdozu heouz hdoze hdozeh odhz</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}

                </View>
            }
        </Container>
    )
}