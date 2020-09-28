
import React from "react";
import { Text, Image, TextInput, View, TouchableOpacity } from "react-native";
import { Container, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import CustomBtnIcon from "../../../generic/CustomBtnIcon"
import { store } from "../../../store";

export default (props) => {
    const [interactions, setInteractions] = React.useState({
        likes: props.postData.likes, comments: props.postData.comments
    });
    const [enableComment, setEnableComment] = React.useState(false);
    const [newComment, setNewComment] = React.useState("");
    const [liked, setLiked] = React.useState(false);
    const [voted, setVoted] = React.useState(false);
    const [showCandidates, setShowCandidates] = React.useState(false);
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
                                if (!liked) {
                                    setLiked(true);
                                    setInteractions({ ...interactions, likes: interactions.likes + 1 });
                                } else {
                                    setLiked(false);
                                    setInteractions({ ...interactions, likes: interactions.likes - 1 });
                                }
                            }}>
                                <Icon active name="thumbs-up" style={{ color: liked ? 'blue' : 'grey' }} />
                                <Text>{interactions.likes} Likes</Text>
                            </Button>
                        </Left>
                        <Body>
                            <View style={{
                                flexWrap: 'wrap',
                                alignItems: 'flex-start',
                                flexDirection: 'row',
                                marginLeft: -20
                            }}>
                                <Button transparent onPress={() => setEnableComment(!enableComment)}>
                                    <Icon style={{ color: props.postData.commentsData.length != 0 ? "blue" : "grey" }} active name="chatbubbles" />
                                    <Text>{props.postData.commentsData.length} comments</Text>
                                </Button>
                                <Button style={{ position: "absolute", left: 125 }} transparent onPress={() => {
                                    if (props.postData.author.name !== store.getState().user.login) {
                                        setVoted(!voted)
                                        if (voted) {store.dispatch({ type: "REMOVE_CANDIDATE", data: { post_id: props.postData.id, candidate_name: store.getState().user.login } })}
                                        else {store.dispatch({ type: "ADD_CANDIDATE", data: { post_id: props.postData.id, candidate: { id: props.postData.candidates.length , name: store.getState().user.login, avatar: "https://picsum.photos/200/300?sky" } } })}
                                    } else { setShowCandidates(!showCandidates) }
                                }}>
                                    <Icon style={{ color: voted ? "blue" : "grey" }} type="Entypo" active name="hand" />
                                    <Text>{props.postData.candidates.length}</Text>
                                </Button>
                            </View>
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
                    }}><TextInput style={{ width: "80%" }} placeholder="Commentaire .." value={newComment} onChangeText={setNewComment} />
                        <View style={{ width: "19%", backgroundColor: "grey", borderRadius: 12, marginTop: 5 }}>
                            <CustomBtnIcon iconName="send" action={() => {
                                store.dispatch({ type: "ADD_COMMENT", data: { post_id: props.postData.id, comment: { author: { avatar: "https://picsum.photos/200/300?nature", name: store.getState().user.login }, text: newComment } } });
                                setNewComment("")
                            }} />
                        </View>
                    </View>
                    {props.postData.commentsData.map((data, index) => {
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
                                        <Text>{data.text}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}

                </View>
            }
            {showCandidates && !enableComment &&
                <View>
                    {props.postData.candidates.map((cand,index) => {
                        return <TouchableOpacity key={index} style={{
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            flexDirection: 'row',
                            marginTop: 10
                        }} onPress={()=>props.navigation.navigate("RoomChat",{state:store.getState(),chatTarget:[],chat_destination:cand.name})}>
                            <Image source={{ uri: cand.avatar }} style={{ borderRadius: 40, width: 60, height: 60 }} />
                            <Text style={{marginTop:10,marginLeft:5}}><Text style={{fontWeight:'bold'}}>{cand.name}</Text>{'\ngroupe : '+cand.bloodGroup}</Text>
                        </TouchableOpacity>
                    })}
                </View>
            }
        </Container>
    )
}