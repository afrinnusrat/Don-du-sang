import React from "react";
import { View, Text, ScrollView, RefreshControl, StyleSheet, Image } from "react-native";
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import Post from "./posts/Post"
export default ({ navigation, state, dispatch }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [pics,setPics]=React.useState({
        postImg:"https://picsum.photos/200/300?peace",
        userLogo:"https://picsum.photos/200/300?user"
    })
    const onRefresh = () => {
        setRefreshing(true);
        setPics({postImg:"https://picsum.photos/200/300?peace",
        userLogo:"https://picsum.photos/200/300?user"})
        setTimeout(() => setRefreshing(false), 1000)
    };
    return (
        <View style={styles.container}>
            <Text style={{marginTop:60}}>Feed Screen</Text>
            <ScrollView
                style={{width:"92%"}}
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <Post userLogo={pics.userLogo} postImg={pics.postImg} />
                <Post userLogo={pics.userLogo} postImg={pics.postImg} />
            </ScrollView>
            {/*<Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    scrollView: {
    },
});