import React from "react";
import { View, Text, ScrollView, RefreshControl, StyleSheet, Image } from "react-native";
import Post from "./posts/Post";
import CustomBtnIcon from "../../generic/CustomBtnIcon";

export default ({ navigation, state, dispatch }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 1000)
    };
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: "#303236", width: "100%", flexWrap: 'wrap',
                alignItems: 'flex-start',
                flexDirection: 'row',
                padding:5,
            }}>
                <CustomBtnIcon iconName="dots-horizontal" style={{ marginLeft: 10 }} action={() => navigation.toggleDrawer()} />
                <Text style={{flex:1,fontWeight:"bold",textAlign:"center",color:"white",marginLeft:-50,marginTop:10}}>Don du sang</Text>
                <CustomBtnIcon iconName="bell-ring" style={{ position: "absolute", top: 5, right: 10 }} action={() => navigation.toggleDrawer()} />
            </View>
            <ScrollView
                style={{ width: "98%", marginTop: 0 }}
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {state.posts.map((post,index)=>{
                    return <Post key={index} postData={{author:post.author,likes:post.likes,comments:post.comments,image:post.image,commentsData:post.commentsData}} />
                })}
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